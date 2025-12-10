export default function SocialIcon({ href, children }) {
  return (
    <a
      href={href}
      className="
        w-11 h-11 flex items-center justify-center 
        rounded-full 
        bg-white/60 
        backdrop-blur-sm 
        border border-white/10
        text-black 
        hover:bg-white/20 
        hover:border-blue-500/40 
        hover:text-blue-400
        transition-all
        duration-300
        shadow-md 
        hover:shadow-blue-500/20
        text-lg
      "
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
