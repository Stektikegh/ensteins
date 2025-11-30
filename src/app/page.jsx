import Image from "next/image";
import logo from "@/public/ensteins_logo.png"

export default function Home() {
  return (
    <main className="h-[100vh] w-[100vw]">
      <div className="flex justify-center items-center w-full h-full">
        <Image src={logo} alt="ensteins logo" width={100} className="h-auto" />
      </div>
    </main>
  );
}
