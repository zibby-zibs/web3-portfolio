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
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

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
      <Carousel setApi={setApi} className="w-full max-w-2xl mx-auto">
        {/* <div
          className={cn(
            "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
          )}
        ></div> */}

        <CarouselContent
        //   className={cn(
        //     "flex flex-row gap-4 pl-4 lex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]",
        //     " mx-auto  md:max-w-[90vw] xl:max-w-6xl overflow-x-hidden " // remove max-w-4xl if you want the carousel to span the full width of its container
        //   )}
        //   ref={carouselRef}
        //   onScroll={checkScrollability}
        >
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
              className="!w-full flex-shrink-0 md:flex md:gap-3"
            >
              <CarouselItem key={index}>
                {/* <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card> */}
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
        <CarouselPrevious className="text-black" />
        <CarouselNext className="text-black" />
      </Carousel>
    </div>
  );
};

export default ProjectCard;
