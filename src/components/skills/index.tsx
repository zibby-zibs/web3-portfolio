"use client";

import React from "react";

import { motion } from "framer-motion";
import { skills } from "@/lib/technologies";
import Image from "next/image";
const Skills = () => {
  return (
    <main>
      <motion.article
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-center"
      >
        <h1 className="text-xl lg:text-5xl font-semibold">Technology</h1>
        <p className="text-green-400">
          A few of the technologies I use to shape the future
        </p>
      </motion.article>

      <div className="grid grid-cols-[40%_40%] justify-center mt-4 font-[family-name:var(--font-geist-sans)] space-y-4">
        {skills.map((skill, i) => (
          <motion.section
            key={i}
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="relative flex flex-col items-center gap-3"
          >
            <Image
              src={skill.icon}
              alt=""
              height={0}
              width={0}
              sizes="100vw"
              className="object-contain w-8 h-8 "
            />
            <p className="text-xl">{skill.name}</p>
          </motion.section>
        ))}
      </div>
    </main>
  );
};

export default Skills;
