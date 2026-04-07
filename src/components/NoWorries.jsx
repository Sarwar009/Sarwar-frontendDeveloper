import Image from "next/image";
import React from "react";
import SubTitle from "./SubTitle";

export default function NoWorries() {
  return (
    <div className="py-8.75 md:py-30 flex flex-col md:flex-row  gap-20">
      <div>
        <Image
          src="/img4.png"
          alt="img4"
          width={850}
          height={500}
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row justify-between w-full mt-8">
          <div>
            <SubTitle subTitle="No worries" />
          </div>
          <div className="flex flex-col mt-2">
            <div className="flex justify-end">
              <Image
                src="/img8.jpg"
                alt="img8"
                width={10}
                height={10}
                className="rounded-full w-10 h-10 border-2 border-black -mr-2 "
              />
              <Image
                src="/img9.jpg"
                alt="img9"
                width={10}
                height={10}
                className="rounded-full w-10 h-10 border-2 border-black -mr-2 "
              />
              <Image
                src="/img10.jpg"
                alt="img10"
                width={10}
                height={10}
                className="rounded-full w-10 h-10 border-2 border-black"
              />
            </div>
            <p className="text-[#D0D5D9] mt-1">Join with 5K other students</p>
          </div>
        </div>
        <div className="flex justify-between w-full mt-5 md:mt-30">
            <div className="max-w-60 text-left mt-0 md:mt-25">
                <p className="text-[#AAAE82]">
                    The ability to concentrate deeply is the ultimate productivity hack
                </p>
                <h1 className="font-medium mt-3 md:mt-6 text-2xl text-[#D0D5D9]">
                    And fortunately it’s a skill you can train & develop.
                </h1>
            </div>
            <div className="flex- flex-col space-y-3 justify-center items-center">
                <Image
                src="/img5.jpg"
                alt="img5"
                width={118}
                height={120}
                className="rounded-2xl w-29.5 h-30 space-y-3"
              />
              <Image
                src="/img6.jpg"
                alt="img6"
                width={118}
                height={120}
                className="rounded-2xl h-30 w-29.5 space-y-3 content-center "
              />
              <Image
                src="/img7.jpg"
                alt="img7"
                width={118}
                height={120}
                className="rounded-xl w-29.5 h-30 space-y-3"
              />
            </div>
        </div>
      </div>
    </div>
  );
}
