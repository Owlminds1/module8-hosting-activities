"use client"
import MyImage from "@/components/myImage"
import pointers from "@/layout-C59-L1-A4/pointers.json"
import { useEffect, useState } from "react"


const LayoutC59L1A4 = () => {
   const [visibleCount, setVisibleCount] = useState(1);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && event.code === "Enter") {

        setVisibleCount((prev)=>(prev < pointers.length ? prev + 1 : prev))
      } 
    }

    window.addEventListener("keydown", handleKeyDown)
    return() => window.removeEventListener("keydown", handleKeyDown)

  },[visibleCount])



  return (
    <div className="min-h-screen bg-[#F8FCFA] flex flex-col justify-start items-center p-10 gap-10">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="text-3xl font-bold text-center text-black">PITCH</h3>

        {/* <p className="text-zinc-600 text-lg italic">
          For example: This apple costs $5 per piece. This Bookstand is
          available at 20% discount on its price of 100 $.
        </p> */}
      </div>

     <div className="grid grid-cols-12 w-full place-items-center ">
      <div className="col-span-6 w-full flex justify-center items-center">
        <MyImage path="/C59Images/Stall.jpg"/>
      </div>


        <div className="col-span-6 w-full ">
          <ul className="list-disc space-y-2 ">
            {
              pointers.slice(0, visibleCount).map((pointer, index) => (
                <li key={index} className="animate_fadeInUp text-lg text-black ">{pointer}</li>
              ))
            }
         
          </ul>

          {pointers.length > visibleCount && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
     
      </div>
     </div>
      
    </div>
  )
}

export default LayoutC59L1A4
