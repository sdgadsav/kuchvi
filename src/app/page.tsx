export default function Home() {
  const text = "Coming Soon";
  return (
    <main className="flex items-center justify-center min-h-screen animated-gradient p-4 bg-black">
      <h1 className="glitch-text text-5xl md:text-8xl lg:text-9xl text-center" data-text={text}>
        {text}
        <span>{text}</span>
        <span>{text}</span>
      </h1>
    </main>
  );
}
