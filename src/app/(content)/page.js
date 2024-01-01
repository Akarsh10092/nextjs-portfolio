import About from "@/components/Layout/About/About";
import Experience from "@/components/Layout/Experience/Experience";
import Projects from "@/components/Layout/Projects/Projects";
import Hero from "@/components/Layout/home/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}
