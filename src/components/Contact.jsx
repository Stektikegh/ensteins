"use client";
import Button from "./MainButton";
import BackgroundPaths from "./BackgroundPaths";

export default function ContactBox() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <BackgroundPaths />

      <div className="relative w-[60%] z-10">
        <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-2xl p-8 space-y-8">
          <h2
            className="text-center text-white tracking-tight"
            style={{
              fontFamily: "Audiowide, sans-serif",
              fontWeight: 400,
              fontSize: "40px",
            }}
          >
            Contact Us
          </h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white/80"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/80"
              >
                Your Eamil
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email Adress"
                className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white/80"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write something..."
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent resize-none transition-all"
              />
            </div>

            <Button className="w-full py-3.5 mt-2 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              Send Message
            </Button>
          </div>
        </div>
      </div>

      <link
        href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
