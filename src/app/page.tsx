import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-mono)] ">
      <div className="mt-10">
        <Hero />
      </div>

      <div className="mt-16 lg:mt-32">
        <Skills />
      </div>
      <div className="mt-16 lg:mt-32">
        <Projects />
      </div>
    </div>
  );
}
