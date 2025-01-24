"use client";

import { useState, useRef, useEffect } from "react";
import Learn from "../../media/learn.png";
import Image from "next/image";

const LearnMore: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const cards = [
    { id: 0, title: "About" },
    { id: 1, title: "Blog" },
    { id: 2, title: "Something Else" },
    { id: 3, title: "TBD" },
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const cardWidth = clientWidth * 0.7 + 20;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveCard(index);
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth * 0.7 + 20;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, {
        passive: true,
      });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="pl-[2.2813rem] pr-0 mb-[0.7544rem] mt-0 md:mt-[0.625rem] lg:pl-[9rem] lg:pr-[9.125rem]">
      {/* Title */}
      <div className="text-center justify-center flex">
        <p className="text-[2rem] leading-[3.75rem] font-bold text-[#0A0A0A] justify-start flex w-full md:w-[62rem] mb-[0.375rem] md:mb-0">
          Learn more
        </p>
      </div>

      {/* Cards Section */}
      <div className="relative">
        {/* For Larger Screens */}
        <div className="hidden md:flex justify-center space-x-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative w-[14.8125rem] h-[5.25rem] rounded-lg shadow-md overflow-hidden"
              style={{ boxShadow: "0rem 0.25rem 1rem 0rem #00000014" }}
            >
              <Image
                src={Learn}
                alt={`${card.title} Background`}
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute"
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.07),_rgba(0,0,0,0.35))]"></div>
              <div className="relative flex items-center justify-center h-full">
                <h2 className="text-white lg:text-xl sm:text-base text-xl font-bold">
                  {card.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* For Smaller Screens */}
        <div
          ref={scrollContainerRef}
          className="flex md:hidden overflow-x-scroll snap-x snap-mandatory w-full scrollbar-hide"
          onScroll={handleScroll}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="snap-center flex-shrink-0"
              style={{ width: "70vw", marginRight: "1.25rem" }}
            >
              <div
                className="relative w-full h-[5.25rem] rounded-lg shadow-md overflow-hidden"
                style={{ boxShadow: "0rem 0.25rem 1rem 0rem #00000014" }}
              >
                <Image
                  src={Learn}
                  alt={`${card.title} Background`}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  className="absolute"
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.07),_rgba(0,0,0,0.35))]"></div>
                <div className="relative flex items-center justify-center h-full">
                  <h2 className="text-white text-xl font-bold">{card.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicator Bars */}
        <div className="flex md:hidden space-x-[0.625rem] py-[0.9688rem] justify-center mt-[0.2813rem]">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                scrollToCard(index);
                setActiveCard(index);
              }}
              className={`w-[1.625rem] h-[0.1875rem] rounded-full ${
                activeCard === index ? "bg-[#343434]" : "bg-[#D9D9D9]"
              } transition-colors duration-300`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
