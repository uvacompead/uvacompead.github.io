import "@/styles/topography.css";

export default function Bg({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 w-full h-full bg-white/15 backdrop-blur-sm rounded-xl pointer-events-none z-0" />
    </div>
  );
}
