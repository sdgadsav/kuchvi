"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const text = "Coming Soon";
  return (
    <main
      className="flex items-center justify-center min-h-screen animated-grid p-4 relative overflow-hidden"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, hsla(var(--primary) / 0.15), transparent 80%)`,
      }}
    >
      <h1
        className="glitch-text text-5xl md:text-8xl lg:text-9xl text-center"
        data-text={text}
      >
        {text}
      </h1>
      <a
        href="https://wa.me/1XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
      >
        <svg
          xmlns="https://www.svgrepo.com/show/452133/whatsapp.svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.15 15.4c-.28-.14-1.64-.81-1.9-.9- .26-.1-.45-.14-.64.14-.19.28-.72.9-.88 1.08-.16.19-.32.21-.6.07-.28-.14-1.18-.43-2.25-1.38-.84-.74-1.4-1.65-1.57-1.92-.16-.28-.01-.43.12-.56.12-.12.26-.3.39-.45.13-.15.17-.25.26-.41.09-.17.04-.31-.02-.45s-.64-1.54-.88-2.1c-.24-.56-.48-.48-.64-.49-.16-.01-.35-.01-.54-.01-.19 0-.48.07-.73.35-.25.28-.97.95-1.2 1.85-.23.9.15 1.78.33 1.95.17.16 1.41.64 3.38 1.52.48.22.86.35 1.16.45.48.16.91.13 1.26.08.38-.05 1.18-.48 1.34-.94.16-.46.16-.86.11-.94-.05-.08-.19-.13-.46-.26z" />
        </svg>
        <span className="sr-only">Contact on WhatsApp</span>
      </a>
    </main>
  );
}
