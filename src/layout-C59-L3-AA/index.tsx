"use client";

import pointers from "@/layout-C59-L3-AA/pointers.json";

import { useEffect, useState } from "react";

const LayoutC59L3AA = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && event.code === "Enter") {
        setVisibleCount((prev) => (prev < pointers.length ? prev + 1 : prev));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [visibleCount]);

  return (
    <div className="min-h-screen bg-[#F8FCFA] flex flex-col justify-start items-center p-10 gap-10">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="text-3xl font-bold text-center text-black">
          AD ANALYSIS
        </h3>

        <p className="text-zinc-600 text-lg italic ">
          Watch this ad and list the following details
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8 w-full place-items-center ">
        <div className="col-span-6 w-full flex justify-center items-center">
          <iframe
            width="80%"
            height="400"
            src="https://www.youtube.com/embed/rymT28Z6KQY?si=K8htrLUqfUIPPLLv"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
          <ul className="list-disc space-y-2 w-full ">
            {pointers.slice(0, visibleCount).map((pointer, index) => (
              <li key={index} className="animate_fadeInUp text-xl text-black ">
             
                {pointer}
              </li>
            ))}
          </ul>

          {pointers.length > visibleCount && (
            <p className="text-gray-800 mt-3 text-center italic font-normal">
              (Enter to show more points)
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LayoutC59L3AA;
