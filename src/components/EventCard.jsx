import React from 'react';

const EventCard = ({ 
  day = "TODAY", 
  time = "9:00", 
  title = "ENSTA RACE", 
  description = "waiting you to join idk what to write",
  backgroundColor = "#D9D9D9",
  timeBoxColor = "#ECADE8B2",
  width = "w-[90%] max-w-[930px]",
  height = "h-auto"
}) => {
  return (
    <section 
      className={`rounded-[20px] p-4 sm:p-5 md:p-[18px] flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-[23px] min-h-[140px] md:min-h-[169px] ${width} ${height}`}
      style={{
        backgroundColor: `${backgroundColor}50`, 
      }}
    >
      {/* Time Box - Responsive */}
      <section
        className="w-full sm:w-[140px] md:w-[168px] h-[100px] sm:h-[120px] md:h-[141px] rounded-[15px] md:rounded-[20px] flex flex-col items-center justify-center"
        style={{
          backgroundColor: timeBoxColor
        }}
      >
        <span className="text-lg sm:text-xl md:text-2xl text-black font-normal font-sans">
          {day}
        </span>
        <span className="text-3xl sm:text-4xl md:text-5xl text-black font-semibold font-sans">
          {time}
        </span>
      </section>
      
      {/* Event Details - Responsive */}
      <div className="flex flex-col items-center sm:items-start justify-start gap-2 md:gap-[5px] w-full sm:flex-1 text-center sm:text-left">
        <span className="text-2xl sm:text-3xl md:text-4xl text-black font-normal font-sans">
          {title}
        </span>
        <span className="text-base sm:text-lg md:text-2xl text-black font-normal font-sans">
          {description}
        </span>
      </div>
    </section>
  );
};

export default EventCard;