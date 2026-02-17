"use client";
import cardData from "@/layout-C57-L2-A4/cardData.json";
const LayoutC57L2A4 = () => {
  return (
    <div className="min-h-screen bg-[#F8FCFA] flex flex-col justify-start items-center p-10 gap-10">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="text-3xl font-bold text-center text-black">Vision</h3>

        {/* <p className="text-zinc-600 text-lg italic">
          For example: This apple costs $5 per piece. This Bookstand is
          available at 20% discount on its price of 100 $.
        </p> */}
      </div>

      <div className="grid grid-cols-12 w-[90%]  place-items-center gap-10">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="col-span-4 w-full h-80  perspective-[1000px]"
          >
            <div className="transform-3d hover:transform-[rotateY(180deg)] transition-all duration-500 relative h-full w-full">
              {/* f */}
              <div className="absolute backface-hidden h-full w-full border border-violet-900 rounded-lg shadow flex justify-center items-center gap-3 p-5">
                <h4 className="text-xl font-bold text-black text-center">
                  {item.name}
                </h4>
              </div>
              {/* b */}
              <div className="absolute backface-hidden h-full w-full  rounded-lg shadow flex justify-center items-center gap-3 p-5 flex-col transform-[rotateY(180deg)] border border-black ">
                <h4 className="text-xl font-bold text-violet-900 text-center">
                  {item.questions}
                </h4>
                <p className="text-lg text-violet-900 text-center">
                  Example : {item.example}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 border rounded-lg p-5 shadow  w-[90%]  place-items-center gap-5 bg-violet-100">
        {cardData.map((i, index) => (
          <div key={index} className="col-span-4 w-full h-full flex justify-center items-center gap-5 flex-col  p-3 ">
            <h4 className="text-xl min-h-20 w-full flex justify-center items-center font-bold text-violet-900 text-center">
              {i.name}
            </h4>

            <textarea className=" w-full border border-black/60 rounded-lg  text-black text-lg  p-2" placeholder="write here..."  rows={3}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayoutC57L2A4;
