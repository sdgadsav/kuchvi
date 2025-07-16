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
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2 22L7.25 20.62C8.7 21.41 10.33 21.83 12.05 21.83H12.06C17.52 21.83 21.96 17.38 21.96 11.92C21.96 6.46 17.51 2 12.04 2ZM17.15 15.4C16.87 15.26 15.41 14.59 15.11 14.5C14.85 14.4 14.65 14.26 14.46 14.54C14.27 14.82 13.73 15.48 13.57 15.66C13.41 15.85 13.25 15.87 12.97 15.73C12.69 15.59 11.51 15.16 10.46 14.22C9.62 13.48 9.06 12.57 8.89 12.3C8.73 12.02 8.87 11.88 8.99 11.76C9.11 11.64 9.25 11.46 9.38 11.31C9.51 11.16 9.55 11.06 9.64 10.9C9.73 10.73 9.68 10.59 9.62 10.45C9.56 10.31 8.98 8.87 8.74 8.31C8.5 7.75 8.26 7.83 8.1 7.82C7.94 7.81 7.72 7.81 7.53 7.81C7.34 7.81 7.06 7.88 6.81 8.16C6.56 8.44 5.86 9.11 5.63 10.01C5.4 10.91 5.98 11.78 6.16 11.96C6.33 12.14 7.54 12.78 9.51 13.66C10.02 13.88 10.42 14.01 10.72 14.11C11.2 14.26 11.63 14.23 11.98 14.18C12.36 14.13 13.31 13.62 13.47 13.16C13.63 12.7 13.63 12.24 13.58 12.16C13.53 12.08 13.34 12.03 13.07 11.9Z" />
        </svg>
        <span className="sr-only">Contact on WhatsApp</span>
      </a>
    </main>
  );
}
