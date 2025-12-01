import Logo from "@/src/components/Logo"
import NavigationBar from "@/src/components/NavigationBar";
import BackgroundPaths from "@/src/components/BackgroundPaths";




export default function Home() {
  return (
    <main className="h-[100vh] w-[100vw] bg-black ">

      <BackgroundPaths />
      <div className="fixed w-full">
        <NavigationBar />
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-[20vw] relative">
          <Logo />
        </div>
      </div>
    </main>
  );
}
