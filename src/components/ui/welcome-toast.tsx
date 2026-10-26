"use client";

import React, { useEffect, useState } from "react";

interface WelcomeToastProps {
  show: boolean;
  message: string;
}

export function WelcomeToast({ show, message }: WelcomeToastProps) {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
      // Trigger enter animation on next frame.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimate(true));
      });
    } else {
      // Trigger exit animation, then remove from DOM.
      setAnimate(false);
      const timeout = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [show]);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
      aria-live="polite"
    >
      <div
        className={`
          pointer-events-auto mt-6 px-8 py-4
          rounded-2xl backdrop-blur-xl
          border border-white/10
          shadow-[0_0_40px_rgba(196,77,255,0.15),0_0_80px_rgba(255,107,157,0.08)]
          transition-all duration-500 ease-out
          ${
            animate
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-4 scale-95"
          }
        `}
        style={{
          background:
            "linear-gradient(135deg, rgba(20,20,30,0.85) 0%, rgba(30,15,40,0.85) 100%)",
        }}
      >
        {/* Glow accent line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #ff6b9d, #c44dff, transparent)",
          }}
        />

        <p className="text-base md:text-lg font-medium tracking-wide text-center select-none">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #ff6b9d 0%, #c44dff 50%, #00e5ff 100%)",
            }}
          >
            {message}
          </span>
        </p>
      </div>
    </div>
  );
}
