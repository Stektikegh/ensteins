import React from "react";

const AboutUsCard = ({
  title = "ENSTA RACE",
  slogan = "Waiting you to join idk what to write",
  description = "More detailed information about the project goes here...",
  imageUrl = "/your-image.jpg",
  isReversed = false,
}) => {
  return (
    <section
      className={`w-full max-w-[900px]
        rounded-2xl p-5 sm:p-8
        flex flex-col ${isReversed ? "sm:flex-row-reverse" : "sm:flex-row"}  
        items-center sm:items-centre 
        gap-6 sm:gap-8
        bg-white/5 backdrop-blur-md 
        border border-white/20
        transition-all
        mx-auto`}
    >
      <div className="w-full sm:w-[500px] rounded-2xl flex flex-col items-start justify-center gap-4 sm:gap-4">
        <span className="text-white text-4xl sm:text-4xl font-bold">
          {title}
        </span>
        <span className="text-white text-sm sm:text-lg font-medium">
          {slogan}
        </span>
        <div className="w-full h-1 bg-SpecialBlueHovered rounded-full" />
        <span className="text-white text-xs sm:text-sm font-light">
          {description}
        </span>
      </div>
      <div className="w-full h-full sm:w-[400px] sm:h-auto bg-linear-to-b from-white/50 via-white/40 to-white/50 backdrop-blur-md rounded-2xl overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default AboutUsCard;
