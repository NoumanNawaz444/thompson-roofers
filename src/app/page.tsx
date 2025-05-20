import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import Navbar from "@/components/Navbar";
import Sectors from "@/components/Sectors";
import VideoPlayer from "@/components/VideoPlayer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="fixed top-0 left-0 z-50 w-full ">
        <Navbar />
      </div>
      <HeroCarousel />
      <VideoPlayer />
      <Sectors />
      <Footer />
    </main>
  );
}
