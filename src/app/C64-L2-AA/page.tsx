import MyImage from "@/components/myImage"



const Page = () => {
  return (
  <div className="min-h-screen bg-[#F8FCFA] flex flex-col justify-start items-center p-10 gap-10">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h3 className="text-3xl font-bold text-center text-black">Product Pitch Presentation</h3>
  
          <p className="text-zinc-600 text-lg italic">
Pitching is an art. What we witnessed in Shark Tank was kids using this artform to convince judges to select their products. 
          </p>
        </div>

        <div className="flex flex-col justify-start items-center  w-[70%]">
            <p className="text-2xl text-center font-bold text-black ">What if you were to present on SharkTank or other similar panels? What kind of presentation would you make?</p>

            <MyImage path="/C64Images"/>

            <p className="text-xl text-black ">The product can be a schoolbag as suggested earlier, or it can even be a product of your choice!</p>
        </div>
      
    </div>
  )
}

export default Page
