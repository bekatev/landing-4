import React from "react";
import Person1 from "../../media/person1.png";
import Person2 from "../../media/person2.png";
import Person3 from "../../media/person3.png";
import Virtual from "../../media/virtual.png";
import Image from "next/image";

const Buy = () => {
  return (
    <div className="xl:py-[1.9063rem] md:pb-[4.2188rem] pb-[1.875rem] xl:px-[9rem] px-4 py-0 xl:flex block justify-center gap-[2.5rem]">
      <div className="col-span-2 text-[#0A0A0A] w-full md:w-[40.75rem] mx-auto xl:mx-0 mt-[1.6875rem] sm:mt-0">
        <p className="font-bold xl:text-[3.75rem] xl:leading-[3.75rem] mb-2 xl:text-left text-center text-[2.5rem] leading-[3.0063rem]">
          Buy Memes. <br />
          In Two Clicks.
        </p>
        <p className="font-normal xl:text-[1.4412rem] xl:leading-[2rem] text-[0.8125rem] leading-[0.9831rem] xl:text-left text-center">
          The fastest way to buy memes in just two clicks.
        </p>
        <p className="font-normal xl:text-[1.4412rem] xl:leading-[2rem] text-[0.8125rem] leading-[0.9831rem] xl:text-left text-center">
          Under 1 minute to sign up and no wallet needed.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:mt-6 mt-[1.8125rem]">
          <div className="w-[19.875rem] h-[6rem] px-4 pt-4 pb-5 bg-[#F5F5F5] rounded-xl items-center xl:block hidden">
            {/* Green Dot */}
            <div className="flex items-center">
              <span className="w-2 h-2 bg-[#22C55E] rounded-full mr-2"></span>
              <p className="text-[#0A0A0A] text-[0.8938rem] font-normal">
                Total users
              </p>
            </div>

            {/* Users and Count */}
            <div className="ml-auto flex items-center space-x-2 mt-2">
              {/* Avatar Stack */}
              <div className="flex -space-x-2">
                <Image src={Person1} alt="User 1" className="w-6 h-6" />
                <Image src={Person2} alt="User 2" className="w-6 h-6" />
                <Image src={Person3} alt="User 3" className="w-6 h-6" />
              </div>

              {/* User Count */}
              <p className="text-[1.4412rem] font-medium text-[#0A0A0A]">
                52,630
              </p>
            </div>
          </div>
          <div className="w-[19.875rem] h-[6rem] px-4 pt-4 pb-5 bg-[#F5F5F5] rounded-xl items-center xl:block hidden">
            {/* Green Dot */}
            <div className="flex items-center">
              <span className="w-2 h-2 bg-[#22C55E] rounded-full mr-2"></span>
              <p className="text-[#0A0A0A] text-[0.8938rem] font-normal">
                Total users
              </p>
            </div>

            {/* Users and Count */}
            <div className="mt-2">
              {/* User Count */}
              <p className="text-[1.4412rem] font-medium text-[#0A0A0A]">
                <span className="text-[1.5rem]">$</span>1,288,314,266
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div
          className="relative w-[18.75rem] h-[18.75rem] rounded-lg shadow-md overflow-hidden"
          style={{ boxShadow: "0rem 0.25rem 1rem 0rem #00000014" }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 bg-cover bg-center">
            <Image
              src={Virtual}
              alt="virtual"
              className="w-[18.75rem] h-[12.1875rem]"
            />
          </div>

          {/* Blue Badge */}
          <div
            className="absolute top-[1.0581rem] right-[1.1675rem]"
            style={{ boxShadow: "0rem 0rem 1.2437rem 0rem #FFFFFF" }}
          ></div>

          {/* Card Content */}
          <div className="absolute bottom-0 left-0 right-0 bg-white p-4 rounded-b-lg h-[6.5rem] leading-1">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xl font-semibold text-[#121212]">VIRTUAL</p>
                <p className="text-[0.8125rem] text-[#545454] font-normal">
                  Price
                </p>
                <p className="text-[0.875rem] text-[#121212] font-semibold">
                  $2.74
                </p>
              </div>
              <div className="text-right">
                <p className="text-[#2AC02F] text-base font-semibold">
                  ▲ 0.59%
                </p>
                <p className="text-[0.8125rem] text-[#545454] font-normal">
                  Market Cap
                </p>
                <p className="text-[0.875rem] text-[#121212] font-semibold">
                  $1.7B
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
