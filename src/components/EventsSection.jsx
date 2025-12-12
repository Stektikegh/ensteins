import React from 'react';
import EventCard from './EventCard'; 

const EventsSection = () => {
  const events = [
    {
      id: 1,
      day: "TODAY",
      time: "9:00",
      title: "ENSTA RACE",
      description: "waiting you to join idk what to write",
      timeBoxColor: "#ECADE8B2"
    },
    {
      id: 2,
      day: "TOMORROW",
      time: "14:30",
      title: "WORKSHOP TECH",
      description: "Learn new technologies and network with professionals",
      timeBoxColor: "#ADC9ECB2"
    },
    {
      id: 3,
      day: "FRIDAY",
      time: "18:00",
      title: "NETWORKING EVENT",
      description: "Connect with industry leaders and peers",
      timeBoxColor: "#E5ECADB2"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-10 md:gap-16 lg:gap-20 w-full">
      {/* Title - Responsive */}
      <h1 className="text-center px-4">
        <span className="text-3xl sm:text-4xl md:text-5xl text-white font-bold font-sans">
          UPCOMING
        </span>
        <span className="text-4xl sm:text-5xl md:text-6xl text-[#0A93E2] font-bold font-sans ml-2 md:ml-2.5">
          EVENTS 
        </span>
      </h1>
      
      {/* Events Container */}
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 w-full max-w-6xl px-4">
        {events.map(event => (
          <EventCard
            key={event.id}
            day={event.day}
            time={event.time}
            title={event.title}
            description={event.description}
            timeBoxColor={event.timeBoxColor}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsSection;