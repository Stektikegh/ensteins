"use client";
import Button from "./Button";
import React, { useState } from "react";
import { MemberCard } from "./MemberCard";

export default function MembersSectionGrid() {
  const [visibleRows, setVisibleRows] = useState(2);
  const [activeCard, setActiveCard] = useState(null);
  const getCardsPerRow = () => {
    if (typeof window === "undefined") return 5;
    const width = window.innerWidth;
    if (width < 640) return 2;
    if (width < 768) return 3;
    if (width < 1024) return 4;
    return 5;
  };
  const CARDS_PER_ROW = getCardsPerRow();
  const cardsToShow = visibleRows * CARDS_PER_ROW;
  const allMembers = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: "Einstein",
    role: "IT member",
    imageUrl: `https://picsum.photos/400/500?random=${i + 1}`,
  }));

  const displayedMembers = allMembers.slice(0, cardsToShow);
  const hasMore = cardsToShow < allMembers.length;

  const handleShowMore = () => {
    setVisibleRows((prev) => prev + 1);
  };

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  const handleCardHover = (index) => {
    setActiveCard(index);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

  return (
    <section className="min-h-screen bg-indigo-950 relative overflow-hidden flex items-center justify-center px-4 sm:px-8 py-16">
      <div className="w-full max-w-7xl relative z-10">
        <h2 className="text-[60px] font-bold text-white text-center mb-16 leading-[100%] font-['Gudea']">
          Members
        </h2>
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 px-4 max-w-[1600px] mx-auto">
            {displayedMembers.map((member, index) => (
              <div
                key={member.id}
                onClick={() => handleCardClick(index)}
                className="w-full aspect-[3/4] cursor-pointer"
              >
                <MemberCard
                  name={member.name}
                  role={member.role}
                  imageUrl={member.imageUrl}
                  isActive={activeCard === index}
                  onHover={() => handleCardHover(index)}
                  onLeave={handleCardLeave}
                />
              </div>
            ))}
          </div>
        </div>
        {hasMore && (
          <div className="mt-8 flex justify-center">
            <Button onClick={handleShowMore}>show more members</Button>
          </div>
        )}
      </div>
    </section>
  );
}
