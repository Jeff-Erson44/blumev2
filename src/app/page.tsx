import { Hero } from "./components/Hero/Hero";
import { LatestNews } from "./components/LatestNews/LatestNews";
import { Navbar } from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LatestNews />
    </>
  );
}
