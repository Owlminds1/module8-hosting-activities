"use client";
import MyImage from "@/components/myImage";
import pointers from "@/layout-C59-L3-A1B/pointers.json";
import Link from "next/link";
import { useEffect, useState } from "react";

const LayoutC59L3A1B = () => {
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
          DESIGN AN AD
        </h3>

        <p className="text-zinc-600 text-lg italic ">
          Design an ad to be used on Apple’s social media using the pointers
          from the quad.
        </p>
      </div>

      <div className="grid grid-cols-12 w-full place-items-center ">
        <div className="col-span-6 w-full flex justify-center items-center">
          <MyImage path="/C59Images/Airtag.jpeg" />
        </div>

        <div className="col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
          <p className="text-lg text-black py-3">
            Now using everything you know about Apple and its product, design an
            ad to be used on Apple’s social media. Here’s the latest ad Apple
            came up with on their social media.  <Link href="https://www.youtube.com/watch?v=asKvPLmjxXY" className="text-blue-400 " target="blank" >You can watch this ad later to
            see how you did.</Link>
          </p>

          <h4 className="text-2xl font-bold w-full text-black ">Tips : </h4>

          <ul className="list-disc space-y-4 ">
            {pointers.slice(0, visibleCount).map((pointer, index) => (
              <li key={index} className="animate_fadeInUp text-xl text-black ">
                <span className="font-bold">{pointer.title} : </span>
                {pointer.text}
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

export default LayoutC59L3A1B;
