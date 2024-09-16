"use client";
import Image from "next/image";
import React from "react";

import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const words = [
    "software developer",
    "enthusiast",
    "UX designer",
    "dApp creator",
  ];
  return (
    <main className="flex flex-col-reverse md:flex-row md:justify-between gap-10 md:items-center max-w-6xl">
      <article className="relative md:flex-[40%]">
        <h1 className="text-4xl lg:text-6xl  font-bold">
          Hi, I&apos;m <span className="text-green-400">Timi.</span>{" "}
        </h1>
        <div className="inline-flex gap-2 text-green-400 font-[family-name:var(--font-geist-sans)] text-xl">
          <p className=" text-white">Web3</p>

          <Typewriter
            words={words}
            loop={0}
            cursor
            cursorStyle="_"
            cursorBlinking
          />
        </div>
        <p className="mt-6 text-gray-400">
          I’ve got 7 years experience in fe development, 5 in web2 and 2 - 3 in
          web 3. Passionate about building decentralized solutions that shape
          the future of the web. With expertise in{" "}
          <span className="text-green-400 font-medium">
            React, Nextjs, Wagmi
          </span>
          , I bring innovative ideas to life in the web3 space. Explore my
          projects to see how I&apos;m contributing to the blockchain
          revolution.
        </p>
        <p className="pt-2 text-gray-400">
          I also learnt <span className="text-green-400">solidity</span> on and
          off for about a year now, not super experienced with complex contracts
          like lending but I can practically handle most junior level tasks like
          <span className="text-green-400"> tokens, NFTs, simple bots </span>
          (still practicing this) and etc...
        </p>
      </article>

      <div className="relative">
        <img
          src="/cccoil.svg"
          alt=""
          className="w-[500px] h-[500px] animate-spin-slow"
        />

        <figure className="">
          <Image
            src={"/hero.png"}
            alt="Timi"
            width={0}
            height={0}
            sizes="100vw"
            className="object-fit w-[60vw] h-auto  !max-w-[400px] !max-h-[400px] absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
          />
        </figure>
      </div>
    </main>
  );
};

export default Hero;
