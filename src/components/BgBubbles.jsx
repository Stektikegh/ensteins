
export default function BackgroundBubbles() {
  return (
    <div className="overflow-hidden">
      <div className="absolute top-10 left-5 w-72 h-72 rounded-full bg-blue-500/30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-purple-500/20 blur-2xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-cyan-400/25 blur-2xl animate-pulse"></div>
    </div>
  );
}
