"use client"

import React, { useEffect, useRef, useState } from "react"
import { OrthographicCamera, useFBO, useTexture } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import { CLOUDINARY_ASSETS } from "@/lib/cloudinary"
import { isWebGLAvailable } from "@/lib/webgl-detect"

import { Suspense, useMemo } from "react"

export default function Scene() {
  const device = useDimension()
  const [webglSupported, setWebglSupported] = useState(true)

  useEffect(() => {
    setWebglSupported(isWebGLAvailable())
  }, [])

  // If WebGL is not available, don't render the Canvas at all.
  // The static <Image> fallback in HeroSection will remain visible.
  if (!webglSupported) return null

  const frustumSize = device.height || 1080
  const aspect = (device.width || 1920) / (device.height || 1080)

  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden" suppressHydrationWarning>
      {device.width > 0 && device.height > 0 && (
        <Suspense fallback={null}>
          <Canvas className="w-full h-full">
            <OrthographicCamera
              makeDefault
              args={[
                (frustumSize * aspect) / -2,
                (frustumSize * aspect) / 2,
                frustumSize / 2,
                frustumSize / -2,
                -1000,
                1000,
              ]}
              position={[0, 0, 2]}
            />
            <Model />
          </Canvas>
        </Suspense>
      )}
    </div>
  )
}

function Model() {
  const { viewport, gl, camera } = useThree()
  const mouse = useMouse()
  const device = useDimension()
  
  // Load background images with manual fallback logic
  const [desktopTexture, setDesktopTexture] = useState<THREE.Texture | null>(null)
  const [mobileTexture, setMobileTexture] = useState<THREE.Texture | null>(null)

  useEffect(() => {
    const loader = new THREE.TextureLoader()

    const loadWithFallback = (url: string, fallback: string, setter: (tex: THREE.Texture) => void) => {
      loader.load(
        url,
        (tex) => setter(tex),
        undefined,
        () => {
          console.warn(`Cloudinary load failed for ${url}, falling back to ${fallback}`)
          loader.load(fallback, (tex) => setter(tex))
        }
      )
    }

    loadWithFallback(
      CLOUDINARY_ASSETS.parentHeroDesktop,
      "/background/parent/hero/parent-hero.jpeg",
      setDesktopTexture
    )
    loadWithFallback(
      CLOUDINARY_ASSETS.parentHeroMobile,
      "/background/parent/hero/parent hero mobile.jpeg",
      setMobileTexture
    )
  }, [])

  // Generate procedural soft brush texture
  const brushTexture = useMemo(() => {
    if (typeof document === "undefined") return new THREE.Texture()
    const canvas = document.createElement("canvas")
    canvas.width = 64
    canvas.height = 64
    const context = canvas.getContext("2d")
    if (context) {
      const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32)
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)")
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)")
      context.fillStyle = gradient
      context.beginPath()
      context.arc(32, 32, 32, 0, Math.PI * 2)
      context.fill()
    }
    return new THREE.CanvasTexture(canvas)
  }, [])

  const meshRefs = useRef<(THREE.Mesh | null)[]>([])
  const [meshes, setMeshes] = useState<React.JSX.Element[]>([])
  const [prevMouse, setPrevMouse] = useState({ x: 0, y: 0 })
  const [currentWave, setCurrentWave] = useState(0)
  
  const scene = useMemo(() => new THREE.Scene(), [])
  const max = 100

  const uniforms = useRef({
    uDisplacement: { value: new THREE.Texture() },
    uTexture: { value: new THREE.Texture() },
    winResolution: {
      value: new THREE.Vector2(0, 0),
    },
  })

  const fboBase = useFBO(device.width > 0 ? device.width : 1, device.height > 0 ? device.height : 1)
  const fboTexture = useFBO(device.width > 0 ? device.width : 1, device.height > 0 ? device.height : 1)

  const isMobile = device.width < 768

  const { scene: imageScene, camera: imageCamera } = Images(
    new THREE.Vector2(viewport.width, viewport.height),
    (isMobile ? mobileTexture : desktopTexture) || new THREE.Texture(),
    isMobile
  )

  useEffect(() => {
    const generatedMeshes = Array.from({ length: 100 }).map((_, i) => (
      <mesh
        key={i}
        position={[0, 0, 0]}
        ref={(el) => {
          meshRefs.current[i] = el
        }}
        rotation={[0, 0, Math.random()]}
        visible={false}
      >
        <planeGeometry args={[60, 60, 1, 1]} />
        <meshBasicMaterial transparent={true} map={brushTexture} />
      </mesh>
    ))
    setMeshes(generatedMeshes)
  }, [brushTexture])

  function setNewWave(x: number, y: number, currentWave: number) {
    const mesh = meshRefs.current[currentWave]
    if (mesh) {
      mesh.position.x = x
      mesh.position.y = y
      mesh.visible = true
        ; (mesh.material as THREE.Material).opacity = 1
      mesh.scale.x = 1.75
      mesh.scale.y = 1.75
    }
  }

  function trackMousePos(x: number, y: number) {
    if (Math.abs(x - prevMouse.x) > 0.1 || Math.abs(y - prevMouse.y) > 0.1) {
      setCurrentWave((currentWave + 1) % max)
      setNewWave(x, y, currentWave)
    }
    setPrevMouse({ x: x, y: y })
  }

  useFrame(({ gl, scene: finalScene }) => {
    if (!desktopTexture || !mobileTexture) return

    // Convert client coordinates to scene coordinates
    // clientX/Y from top-left, scene coordinates from center
    const x = mouse.x - device.width / 2
    const y = -mouse.y + device.height / 2
    trackMousePos(x, y)

    meshRefs.current.forEach((mesh) => {
      if (mesh && mesh.visible) {
        mesh.rotation.z += 0.02
          ; (mesh.material as THREE.MeshBasicMaterial).opacity *= 0.96

        // Actually, let's just scale it and let it fade out by scale?
        mesh.scale.x = 0.98 * mesh.scale.x + 0.155
        mesh.scale.y = 0.98 * mesh.scale.y + 0.155
        // To make it fade, we store life in userData
        if (mesh.userData.life === undefined) mesh.userData.life = 1.0
        mesh.userData.life *= 0.92
        // We can't easily change shader material uniform per instance without cloning it.
        // Let's rely on displacement mapping processing it.
      }
    })

    if (device.width > 0 && device.height > 0) {
      // Render to base texture with meshes
      gl.setRenderTarget(fboBase)
      gl.clear()
      meshRefs.current.forEach((mesh) => {
        if (mesh && mesh.visible) {
          scene.add(mesh)
        }
      })
      gl.render(scene, camera)
      meshRefs.current.forEach((mesh) => {
        if (mesh && mesh.visible) {
          scene.remove(mesh)
        }
      })
      uniforms.current.uTexture.value = fboTexture.texture

      gl.setRenderTarget(fboTexture)
      gl.render(imageScene, imageCamera)
      uniforms.current.uDisplacement.value = fboBase.texture

      gl.setRenderTarget(null)
      gl.render(finalScene, camera)

      uniforms.current.winResolution.value = new THREE.Vector2(
        device.width,
        device.height
      ).multiplyScalar(device.pixelRatio)
    }
  }, 1)

  if (!desktopTexture || !mobileTexture) return null

  return (
    <group>
      {meshes}
      <mesh>
        <planeGeometry args={[device.width, device.height, 1, 1]} />
        <shaderMaterial
          vertexShader={vertex}
          fragmentShader={fragment}
          transparent={true}
          uniforms={uniforms.current}
        ></shaderMaterial>
      </mesh>
    </group>
  )
}

function Images(viewport: THREE.Vector2, texture: THREE.Texture, isMobile: boolean) {
  const scene = new THREE.Scene()
  const camera = new THREE.OrthographicCamera(
    viewport.width / -2,
    viewport.width / 2,
    viewport.height / 2,
    viewport.height / -2,
    -1000,
    1000
  )
  camera.position.z = 2
  scene.add(camera)
  const geometry = new THREE.PlaneGeometry(1, 1)
  const group = new THREE.Group()

  const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, opacity: 1, depthTest: false })
  const imageMesh = new THREE.Mesh(geometry, material)
  imageMesh.position.x = 0
  imageMesh.position.y = 0
  imageMesh.position.z = 0

  // object-cover logic
  const imgAspect = texture && texture.image ? ((texture.image as any).width || 1) / ((texture.image as any).height || 1) : 1
  const viewAspect = (viewport.width || 1) / (viewport.height || 1)

  if (viewAspect > imgAspect) {
    imageMesh.scale.x = viewport.width
    imageMesh.scale.y = viewport.width / imgAspect
  } else {
    imageMesh.scale.x = viewport.height * imgAspect
    imageMesh.scale.y = viewport.height
  }

  group.add(imageMesh)
  scene.add(group)
  return { scene, camera }
}

function useMouse() {
  const [mouse, setMouse] = React.useState({ x: 0, y: 0, pixelRatio: 0 })

  const mouseMove = (e: { clientX: any; clientY: any }) => {
    const { clientX, clientY } = e
    setMouse({
      x: clientX,
      y: clientY,
      pixelRatio: Math.min(window.devicePixelRatio, 2),
    })
  }

  React.useEffect(() => {
    window.addEventListener("mousemove", mouseMove)
    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  return mouse
}

function useDimension() {
  const [dimension, setDimension] = React.useState({
    width: 0,
    height: 0,
    pixelRatio: 1,
  })

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const resize = () => {
        setDimension({
          width: window.innerWidth,
          height: window.innerHeight,
          pixelRatio: window.devicePixelRatio,
        })
      }

      resize()

      window.addEventListener("resize", resize)

      return () => window.removeEventListener("resize", resize)
    }
  }, [])

  return dimension
}

const fragment = `
uniform sampler2D uTexture;
uniform sampler2D uDisplacement;
uniform vec4 winResolution;
varying vec2 vUv;
float PI = 3.141592653589793238;

void main() {
  vec2 vUvScreen = gl_FragCoord.xy / winResolution.xy;

  vec4 displacement = texture2D(uDisplacement, vUvScreen);
  float theta = displacement.r*2.0*PI;

  vec2 dir = vec2(sin(theta),cos(theta));
  vec2 uv = vUvScreen + dir*displacement.r*0.075;
  vec4 color = texture2D(uTexture,uv);

  gl_FragColor = color;
}
`

const vertex = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`
