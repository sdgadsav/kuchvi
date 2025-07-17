"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_NUMBER } from "@/config";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [snowflakes, setSnowflakes] = useState<React.ReactNode[]>([]);
  const fullText = "Coming Soon";
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isCaptchaOpen, setIsCaptchaOpen] = useState(false);
  const [captchaInput, setCaptchaInput] = useState("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captchaError, setCaptchaError] = useState("");

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    
    const createSnowflakes = () => {
      const flakes = Array.from({ length: 100 }).map((_, i) => {
        const style = {
          left: `${Math.random() * 100}vw`,
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
          animationDuration: `${Math.random() * 5 + 5}s`,
          animationDelay: `${Math.random() * 5}s`,
        };
        return <div key={i} className="snowflake" style={style}></div>;
      });
      setSnowflakes(flakes);
    };

    createSnowflakes();

    const typingTimeout = setTimeout(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 150);
    }, 1200);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(typingTimeout);
    };
  }, []);

  const handleWhatsappClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setCaptchaInput("");
    setCaptchaError("");
    setIsCaptchaOpen(true);
  };

  const handleCaptchaSubmit = () => {
    if (parseInt(captchaInput, 10) === num1 + num2) {
      setIsCaptchaOpen(false);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank", "noopener,noreferrer");
    } else {
      setCaptchaError("Incorrect answer. Please try again.");
    }
  };

  const text = isTyping ? typedText : fullText;
  const showGlitch = !isTyping;
  const showCursor = isTyping && typedText.length < fullText.length;

  return (
    <main
      className="flex items-center justify-center min-h-screen animated-grid p-4 relative overflow-hidden"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, hsla(var(--primary) / 0.15), transparent 80%)`,
      }}
    >
      <div className="snow">{snowflakes}</div>
      <h1
        className={`text-5xl md:text-8xl lg:text-9xl text-center select-none ${showGlitch ? "glitch-text" : ""} ${showCursor ? "typewriter" : ""}`}
        data-text={text}
      >
        {text}
      </h1>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        onClick={handleWhatsappClick}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 select-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          className="h-7 w-7"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.15-.197.297-.768.967-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.1-.198.05-.373-.025-.521-.075-.148-.672-1.611-.922-2.207-.242-.579-.487-.501-.672-.51l-.57-.01c-.198 0-.52.074-.792.373s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.1 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.65-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.84 9.84 0 0 1 6.986 2.897 9.824 9.824 0 0 1 2.896 6.987c-.003 5.45-4.437 9.884-9.889 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05.001C5.495 0 .16 5.336.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.445h.005c6.554 0 11.891-5.336 11.894-11.892a11.82 11.82 0 0 0-3.484-8.412"/>
        </svg>
        <span className="sr-only">Contact on WhatsApp</span>
      </a>
      <Dialog open={isCaptchaOpen} onOpenChange={setIsCaptchaOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you human?</DialogTitle>
            <DialogDescription>
              To prevent spam, please solve this simple math problem.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-2">
              <Label htmlFor="captcha" className="text-right">
                What is {num1} + {num2}?
              </Label>
              <Input
                id="captcha"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                className="col-span-3"
                type="number"
              />
            </div>
            {captchaError && (
              <p className="text-sm text-destructive">{captchaError}</p>
            )}
          </div>
          <DialogFooter>
            <Button onClick={handleCaptchaSubmit}>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
