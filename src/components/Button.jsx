export default function Button({ children }) {
  return (
    <button className="bg-SpecialBlue hover:bg-SpecialBlueHovered px-4 py-2 rounded-full font-bold transition-colors duration-300 cursor-pointer">{children}</button>
  );
}
