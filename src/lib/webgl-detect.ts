/**
 * Detects whether WebGL is available in the current browser context.
 * Returns true if WebGL can be created, false otherwise.
 * Caches the result after first check for performance.
 */
let _webglAvailable: boolean | null = null;

export function isWebGLAvailable(): boolean {
  if (typeof window === 'undefined') return false;
  if (_webglAvailable !== null) return _webglAvailable;

  try {
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl');
    _webglAvailable = gl !== null;
  } catch {
    _webglAvailable = false;
  }

  return _webglAvailable;
}
