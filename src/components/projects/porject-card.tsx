/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

type Props = {
  items: {
    image: string;
    title: string;
    description: string;
    href: string;
  }[];
  initialScroll?: number;
};

const ProjectCard = ({ items, initialScroll = 0 }: Props) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative w-full">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        setApi={setApi}
        className="w-full max-w-2xl mx-auto"
      >
        <CarouselContent>
          {items.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                  once: true,
                },
              }}
              key={"card" + index}
              className="min-w-full md:flex md:gap-3"
            >
              <CarouselItem key={index}>
                <img src={item.image} alt="" className="object-fit w-full" />
                <article className="pt-2">
                  <h1 className="text-green-400 text-xl font-semibold">
                    {item.title}
                  </h1>
                  <p className="max-w-[60%]">{item.description}</p>
                </article>
              </CarouselItem>
            </motion.div>
          ))}
        </CarouselContent>
        <div>
          <CarouselPrevious className="text-black right-12 bottom-2" />
          <CarouselNext className="text-black right-3 bottom-2" />
        </div>
      </Carousel>
    </div>
  );
};

export default ProjectCard;
