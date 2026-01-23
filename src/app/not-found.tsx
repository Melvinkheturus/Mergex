'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
    return (
        <div className="not-found-container">
            {/* Desktop Background */}
            <div className="desktop-bg">
                <Image
                    src="/404/404.png"
                    alt="404 Background"
                    fill
                    priority
                    quality={100}
                    className="background-image"
                />
            </div>

            {/* Mobile Background */}
            <div className="mobile-bg">
                <Image
                    src="/404/404-mobile.png"
                    alt="404 Background Mobile"
                    fill
                    priority
                    quality={100}
                    className="background-image"
                />
            </div>

            {/* Content Overlay */}
            <div className="content-overlay">
                <div className="content-wrapper">
                    {/* 404 Text */}
                    <h1 className="error-code">
                        <span className="digit">4</span>
                        <span className="digit glow">0</span>
                        <span className="digit">4</span>
                    </h1>

                    {/* Message */}
                    <p className="error-message">
                        We're sorry. We seem to be lost beyond the known internet.
                    </p>

                    {/* Action Buttons */}
                    <div className="action-buttons">
                        <Link href="/" className="btn btn-primary">
                            Return Home
                        </Link>
                        <Link href="/explore" className="btn btn-secondary">
                            Explore Mergex
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .not-found-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background: #0a0014;
        }

        .desktop-bg,
        .mobile-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .mobile-bg {
          display: none;
        }

        .background-image {
          object-fit: cover;
          object-position: center;
        }

        .content-overlay {
          position: relative;
          z-index: 10;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .content-wrapper {
          text-align: center;
          max-width: 800px;
          animation: fadeIn 1s ease-out;
        }

        .error-code {
          font-size: clamp(6rem, 15vw, 12rem);
          font-weight: 900;
          margin: 0 0 1.5rem 0;
          letter-spacing: 0.1em;
          display: flex;
          justify-content: center;
          gap: 0.2em;
          font-family: 'Space Grotesk', 'Inter', system-ui, -apple-system, sans-serif;
        }

        .digit {
          background: linear-gradient(180deg, #ffffff 0%, #e0d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 40px rgba(168, 85, 247, 0.5),
                       0 0 80px rgba(168, 85, 247, 0.3);
          animation: pulse 3s ease-in-out infinite;
        }

        .digit.glow {
          background: linear-gradient(180deg, #a855f7 0%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 60px rgba(168, 85, 247, 0.8),
                       0 0 100px rgba(168, 85, 247, 0.5),
                       0 0 140px rgba(168, 85, 247, 0.3);
          animation: glowPulse 2s ease-in-out infinite;
        }

        .error-message {
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 3rem 0;
          line-height: 1.6;
          font-weight: 400;
          letter-spacing: 0.02em;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
          animation: fadeInUp 1s ease-out 0.3s backwards;
        }

        .action-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeInUp 1s ease-out 0.6s backwards;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 2.5rem;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          letter-spacing: 0.02em;
          position: relative;
          overflow: hidden;
        }

        .btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s;
        }

        .btn:hover::before {
          transform: translateX(100%);
        }

        .btn-primary {
          background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
          color: white;
          box-shadow: 0 4px 20px rgba(168, 85, 247, 0.4),
                      0 0 40px rgba(168, 85, 247, 0.2);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 30px rgba(168, 85, 247, 0.6),
                      0 0 60px rgba(168, 85, 247, 0.3);
        }

        .btn-primary:active {
          transform: translateY(0);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 6px 30px rgba(255, 255, 255, 0.1);
        }

        .btn-secondary:active {
          transform: translateY(0);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            filter: brightness(1);
          }
          50% {
            opacity: 0.95;
            filter: brightness(1.1);
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            text-shadow: 0 0 60px rgba(168, 85, 247, 0.8),
                         0 0 100px rgba(168, 85, 247, 0.5),
                         0 0 140px rgba(168, 85, 247, 0.3);
          }
          50% {
            text-shadow: 0 0 80px rgba(168, 85, 247, 1),
                         0 0 120px rgba(168, 85, 247, 0.7),
                         0 0 160px rgba(168, 85, 247, 0.5);
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .desktop-bg {
            display: none;
          }

          .mobile-bg {
            display: block;
          }

          .content-overlay {
            padding: 1.5rem;
          }

          .error-code {
            font-size: clamp(4rem, 20vw, 8rem);
            margin: 0 0 1rem 0;
          }

          .error-message {
            font-size: clamp(1rem, 4vw, 1.25rem);
            margin: 0 0 2rem 0;
            padding: 0 1rem;
          }

          .action-buttons {
            flex-direction: column;
            gap: 1rem;
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
          }

          .btn {
            width: 100%;
            padding: 0.875rem 2rem;
          }
        }

        /* Tablet Styles */
        @media (min-width: 769px) and (max-width: 1024px) {
          .error-code {
            font-size: clamp(7rem, 12vw, 10rem);
          }

          .error-message {
            font-size: 1.25rem;
            padding: 0 2rem;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .digit,
          .digit.glow,
          .content-wrapper,
          .error-message,
          .action-buttons {
            animation: none;
          }

          .btn {
            transition: none;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .error-code {
            text-shadow: none;
          }

          .digit,
          .digit.glow {
            -webkit-text-fill-color: white;
            color: white;
          }

          .btn-primary {
            border: 2px solid white;
          }
        }
      `}</style>
        </div>
    );
}
