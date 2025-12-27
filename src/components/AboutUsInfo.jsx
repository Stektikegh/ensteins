import React from "react";
import AboutUsCard from "./AboutUsCard";

const AboutUsInfo = () => {
  const aboutUsCards = [
    {
      id: 0,
      title: "ENSTA RACE",
      slogan: "May the Gloriest Empire Win the Battle",
      description:
        "ENSTA RACE is a team of passionate engineers competing in various challenges. We aim to innovate and push boundaries in technology and engineering, and most importantly! HAVE FUN",
      imageUrl: "/enstarace.png",
    },
    {
      id: 1,
      title: "InTech",
      slogan: "Learn new technologies and network with professionals",
      description:
        "InTech is a best event for tech and entrepreneurship enthusiasts to explore emerging technologies, attend workshops, and collaborate on projects while building a strong professional network.",
      imageUrl: "/intech.png",
    },
    {
      id: 2,
      title: "WeeHack",
      slogan: "Problem, solution.. Something is being cooked!",
      description:
        "WeeHack is a creative logistics hackathon where we hack solutions to real-world problems, sponsored by WeeWee Delivery. Join us to experiment, innovate, and bring your ideas to life!",
      imageUrl: "/weehack.png",
    },
  ];

  return (
    <div className="flex flex-col w-4/5 items-center justify-center gap-14 px-4 py-20 relative overflow-hidden">
      <div className="absolute w-[30vw] h-[30vw] rounded-full bg-linear-to-bl from-transparent via-[#5c92ff] to-transparent opacity-40 blur-3xl animate-pulse" />
      <div className="absolute -right-30 w-[80vw] h-[80vw] rounded-full bg-linear-to-l from-[#5c92ff]/40 via-transparent to-transparent opacity-40 blur-3xl" />
      <div className="absolute -left-30 w-[70vw] h-[70vw] rounded-full bg-linear-to-r from-[#5c92ff]/40 via-transparent to-transparent opacity-40 blur-3xl" />

      <h1 className="text-center relative z-10">
        <span className="text-4xl sm:text-6xl text-white font-bold">
          History
        </span>
      </h1>

      <div className="flex flex-col items-center gap-12 w-full max-w-full relative z-10">
        {aboutUsCards.map((card) => (
          <AboutUsCard
            key={card.id}
            title={card.title}
            slogan={card.slogan}
            description={card.description}
            imageUrl={card.imageUrl}
            isReversed={card.id % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUsInfo;
