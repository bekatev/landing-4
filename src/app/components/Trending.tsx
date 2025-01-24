"use client";

import React, { useState, useEffect, useRef } from "react";
import Card1 from "../../media/card1.png";
import Card2 from "../../media/card2.png";
import Card3 from "../../media/card3.png";
import Card4 from "../../media/card4.png";
import Image from "next/image";

const Trending = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<any>(null);

  const cards = [
    {
      imgSrc: Card1,
      title: "VIRTUAL",
      price: "$2.74",
      marketCap: "$1.7B",
      percentage: "▲ 0.59%",
    },
    {
      imgSrc: Card2,
      title: "AI16Z",
      price: "$0.0873",
      marketCap: "$962K",
      percentage: "▼ 11.59%",
    },
    {
      imgSrc: Card3,
      title: "TICKER3",
      price: "$0.1232",
      marketCap: "$701M",
      percentage: "▲ 2.32%",
    },
    {
      imgSrc: Card4,
      title: "TICKER4",
      price: "$25.51",
      marketCap: "$988M",
      percentage: "▲ 0.09%",
    },
  ];

  const handleControlClick = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].offsetWidth + 20;
      carouselRef.current.scrollLeft = cardWidth * index;
    }
    setActiveIndex(index); // Update active index after scrolling
  };

  const handleScroll = (event: any) => {
    const scrollPosition = event.target.scrollLeft;
    const cardWidth = event.target.children[0].offsetWidth + 20;
    const newIndex = Math.round(scrollPosition / cardWidth);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    // Ensure correct active index is set after scroll
    const updateIndex = () => {
      if (carouselRef.current) {
        const scrollPosition = carouselRef.current.scrollLeft;
        const cardWidth = carouselRef.current.children[0].offsetWidth + 20;
        const newIndex = Math.round(scrollPosition / cardWidth);
        setActiveIndex(newIndex);
      }
    };

    // Handle resizing or scrolling behavior
    window.addEventListener("resize", updateIndex);
    return () => {
      window.removeEventListener("resize", updateIndex);
    };
  }, []);

  return (
    <div className="lg:px-[9rem] pl-[2.2813rem] pr-0 md:mb-[0.7544rem] mb-5">
      <div className="text-center justify-center flex">
        <p className="text-[2rem] leading-[3.75rem] font-bold text-[#0A0A0A] justify-start md:flex w-[62rem] hidden">
          Hottest
        </p>
        <p className="text-[2rem] leading-[3.75rem] font-bold text-[#0A0A0A] justify-start md:hidden w-[62rem] flex mb-[0.4375rem]">
          Trending
        </p>
      </div>

      {/* For larger screens */}
      <div className="hidden lg:flex justify-center mb-[0.7544rem]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-[14.8125rem] h-[17.6812rem] rounded-lg shadow-md overflow-hidden mr-[0.875rem]"
            style={{ boxShadow: "0rem 0.25rem 1rem 0rem #00000014" }}
          >
            <div className="absolute inset-0 bg-cover bg-center">
              <Image
                src={card.imgSrc}
                alt={`card${index + 1}`}
                className="w-[18.5rem] h-[11.1813rem]"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-white p-4 rounded-b-lg h-[6.5rem] leading-1">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-semibold text-[#121212] pb-[0.6563rem]">
                    {card.title}
                  </p>
                  <p className="text-[0.8125rem] text-[#545454] font-normal">
                    Price
                  </p>
                  <p className="text-[0.875rem] text-[#121212] font-semibold">
                    {card.price}
                  </p>
                </div>
                <div className="text-left">
                  <p
                    className={`text-base font-semibold pb-[0.6563rem] ${
                      card.percentage.includes("▲")
                        ? "text-[#2AC02F]"
                        : "text-[#E73A3A]"
                    }`}
                  >
                    {card.percentage}
                  </p>
                  <p className="text-[0.8125rem] text-[#545454] font-normal">
                    Market Cap
                  </p>
                  <p className="text-[0.875rem] text-[#121212] font-semibold">
                    {card.marketCap}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* For smaller screens */}
      <div
        className="lg:hidden flex justify-start items-center overflow-x-auto no-scrollbar"
        onScroll={handleScroll}
        ref={carouselRef}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Remove native scrollbar styling
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-[14.8125rem] h-[17.6812rem] mr-[0.875rem] overflow-hidden mb-2"
            style={{ boxShadow: "0rem 0.25rem 1rem 0rem #00000014" }}
          >
            <div className="absolute inset-0 bg-cover bg-center">
              <Image
                src={card.imgSrc}
                alt={`card${index + 1}`}
                className="w-[14.8125rem] h-[11.1813rem]"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-white p-4 rounded-b-lg h-[6.5rem] leading-1">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-semibold text-[#121212] pb-[0.6563rem]">
                    {card.title}
                  </p>
                  <p className="text-[0.8125rem] text-[#545454] font-normal">
                    Price
                  </p>
                  <p className="text-[0.875rem] text-[#121212] font-semibold">
                    {card.price}
                  </p>
                </div>
                <div className="text-left">
                  <p
                    className={`text-base font-semibold pb-[0.6563rem] ${
                      card.percentage.includes("▲")
                        ? "text-[#2AC02F]"
                        : "text-[#E73A3A]"
                    }`}
                  >
                    {card.percentage}
                  </p>
                  <p className="text-[0.8125rem] text-[#545454] font-normal">
                    Market Cap
                  </p>
                  <p className="text-[0.875rem] text-[#121212] font-semibold">
                    {card.marketCap}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel controls for smaller screens */}
      <div className="md:hidden flex space-x-[0.625rem] justify-center py-[0.9688rem]">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`w-[1.625rem] h-[0.1875rem] rounded-full ${
              activeIndex === index ? "bg-[#343434]" : "bg-[#D9D9D9]"
            } transition-colors duration-300`}
            onClick={() => handleControlClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;
