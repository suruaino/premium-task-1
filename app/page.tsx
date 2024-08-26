import Image from "next/image";
import LetsTalk from "../components/Lets-talk/LetsTalk";
import Hero from "../components/hero/Hero";
import Projects from "../components/project-box/Projects";
import More from "../components/home-more/More";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center gap-28">
      <Hero />
      <Projects />
      <More />
      <LetsTalk />
 
    </main>
  );
}