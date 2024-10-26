import { SoluCard } from "./components/assets/SoluCard/SoluCard";
import { Banner } from "./components/Banner/Banner";
import { Hero } from "./components/Hero/Hero";
import { LatestNews } from "./components/LatestNews/LatestNews";
import { Navbar } from "./components/Navbar/Navbar";
import { Solution } from "./components/Solution/Solution";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LatestNews />
      <Banner />
      <Solution />
    </>
  );
}
