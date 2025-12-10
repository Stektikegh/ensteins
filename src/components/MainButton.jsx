export default function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-SpecialBlue text-white hover:bg-SpecialBlueHovered px-4 py-2 rounded-full font-bold transition-colors duration-300 cursor-pointer ${className}`}>
      {children}
      <link
        href="https://fonts.googleapis.com/css2?family=Gudea:wght@700&display=swap"
        rel="stylesheet"
      />
    </button>
  );
}
