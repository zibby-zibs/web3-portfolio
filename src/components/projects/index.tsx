import React from "react";
import projects from "@/lib/projects/index.json";
import ProjectCard from "./porject-card";
const Projects = () => {
  return (
    <div>
      <h1 className="text-xl lg:text-5xl font-semibold text-center">
        Projects
      </h1>
      {/* <p className="text-green-400">
        A few of the technologies I use to shape the future
      </p> */}

      <div className="mt-6">
        {/* <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-muted-foreground dark:text-neutral-200 font-sans">
          Get to see my past works.
        </h2> */}
        <p className="text-green-400 text-center">See my past work</p>
        <div className="mt-5">
          <ProjectCard items={projects} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
