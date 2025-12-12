import EventsSection from "@/src/components/EventsSection";

export default function Home() {
  return (
    <main className="w-screen min-h-screen bg-black">
      <div className="w-full flex justify-center p-4 sm:p-8 md:p-12 lg:p-[100px]">
        <EventsSection />
      </div>
    </main>
  );
}