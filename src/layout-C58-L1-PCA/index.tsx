"use client";

import Image from "next/image";
import Link from "next/link";

const LayoutC58L1PCA = () => {
  return (
    <div className="min-h-screen bg-[#F8FCFA] flex flex-col justify-start items-center p-10 gap-5">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="text-3xl font-bold text-center text-black">
          Prototyping
        </h3>

        {/* <p className="text-zinc-600 text-lg italic">
          For example: This apple costs $5 per piece. This Bookstand is
          available at 20% discount on its price of 100 $.
        </p> */}
      </div>

      <div className="w-full flex justify-center gap-5 items-center flex-col ">
        <h3 className="text-xl font-bold ">
          A. Watch the video to understand how to prototype
        </h3>
        <Link
          target="blanc"
          href="https://www.ideou.com/blogs/inspiration/why-everyone-should-prototype-not-just-designers?wvideo=qrwz1d9xmf"
        >
          <Image
            width={500}
            height={100}
            src="/C58Images/Prototype.png"
            alt="yt"
          />
        </Link>
      </div>

      <div className="w-full flex justify-center gap-5 items-center flex-col ">
        <h3 className="text-xl font-bold ">
          B. Select any product you like and sketch a doodle of its prototype.
        </h3>
        <ul className="list-disc px-5">
          <li className="text-lg text-black">
            Find images you like or draw to sketch them out.
          </li>
        </ul>
      </div>

      <div className="w-full flex justify-center gap-5 items-center flex-col ">
        <h3 className="text-xl font-bold ">
          C. Describe the doodle and the process of making a prototype using an{" "}
          <Link
            href="https://module1-leadership-activities.vercel.app/L1/T/Activity-3"
            target="blank"
            className="text-blue-800"
          >
            audio recorder{" "}
          </Link>
          .
        </h3>
      </div>
    </div>
  );
};

export default LayoutC58L1PCA;
