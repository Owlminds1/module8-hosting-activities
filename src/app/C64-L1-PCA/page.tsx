const Page = () => {
  return (
    <div className="min-h-screen bg-[#F8FCFA] flex flex-col justify-start items-center p-10 gap-10">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="text-3xl font-bold text-center text-black">
          Favourite Topic
        </h3>

        {/* <p className="text-zinc-600 text-lg italic ">
          Design an ad to be used on Apple’s social media using the pointers
          from the quad.
        </p> */}
      </div>

      <div className="grid grid-cols-12 w-full place-items-center ">
        <div className="col-span-12 w-[50%] flex justify-center items-center flex-col gap-5 ">

          <ul className="list-disc space-y-4 ">
            <li className="animate_fadeInUp text-2xl text-black ">
              Choose your favorite topic in this module.
            </li>
            
             <li className="animate_fadeInUp text-2xl text-black ">
           Explain why you really enjoyed it and how learning that concept will help you with your future goals.
            </li>

             <li className="animate_fadeInUp text-2xl text-black ">
        Add how your instructor has helped you understand that concept.
            </li>
            
             <li className="animate_fadeInUp text-2xl text-black ">
       Record yourself answering the above questions here.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
