import HeroSection from "../components/heroSection";
import MembersSectionGrid from "../components/membersSectionGrid";
import MembersSectionCarousel from "../components/membersSectionCarousel";


export default function Home() {
  return (
    <main >
      <div >
      
        <MembersSectionCarousel />
        <MembersSectionGrid />
      </div>
    </main>
  );
}
