import React from 'react';

const EventCard = ({ 
  day = "TODAY", 
  time = "9:00", 
  title = "ENSTA RACE", 
  description = "waiting you to join idk what to write",
  backgroundColor = "#D9D9D9",
  timeBoxColor = "#ECADE8B2"
}) => {
  return (
    <section 
      className="rounded-[20px] p-4 md:p-[18px] flex flex-row items-center gap-4 md:gap-[23px] w-full max-w-[930px] h-auto min-h-[120px] md:min-h-[169px]"
      style={{
        backgroundColor: `${backgroundColor}85`, 
      }}
    >
      {/* Time Box - Responsive but always on left */}
      <section
        className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[168px] md:h-[141px] rounded-[15px] md:rounded-[20px] flex flex-col items-center justify-center flex-shrink-0"
        style={{
          backgroundColor: timeBoxColor
        }}
      >
        <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-black font-normal font-sans text-center">
          {day}
        </span>
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-semibold font-sans">
          {time}
        </span>
      </section>
      
      {/* Event Details - Always on the right */}
      <div className="flex flex-col items-start justify-center gap-1 md:gap-[5px] w-full">
        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black font-normal font-sans">
          {title}
        </span>
        <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-black font-normal font-sans">
          {description}
        </span>
      </div>
    </section>
  );
};

export default EventCard;