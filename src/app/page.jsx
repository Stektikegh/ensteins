import NavigationBar from "@/src/components/NavigationBar";
import BackgroundPaths from "@/src/components/BackgroundPaths";
import Carousel from "@/src/components/Carousel";
import Footer from "@/src/components/Footer";
import HeroSection from "@/src/components/heroSection";
import DropDownLine from "../components/DropDownLine";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <main className="w-screen z-0">
      <BackgroundPaths />
      <div className="fixed w-full z-100">
        <NavigationBar />
      </div>
      <div className="absolute -top-30 -left-50 w-[60vw] h-[60vw] rounded-full bg-linear-to-br from-blue-600 via-transparent to-transparent"></div>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="w-[20vw] relative">
          <HeroSection />
        </div>
        <div className="" >
        </div>
        <Stats />
      </div>

      <div className="w-full h-full flex justify-center p-[100px]">
        <Carousel
          slides={[
            "https://picsum.dev/200/100",
            "https://picsum.dev/200/99",
            "https://picsum.dev/200/98",
          ]}
        />
      </div>
      <DropDownLine />
      <Footer />
    </main>
  );
}
