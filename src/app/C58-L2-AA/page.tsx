import MyImage from "@/components/myImage";

const Page = () => {
  return (
    <div className="min-h-screen bg-[#F8FCFA] flex flex-col justify-start items-center p-10 gap-10">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="text-3xl font-bold text-center text-black">
          {" "}
          USER PROFILES
        </h3>

        <p className="text-zinc-600 text-lg italic">
          Create user profiles based on the following app users. See the example
          for reference.
        </p>
      </div>

      <div className="grid grid-cols-12 w-[60%] ">
        <div className="col-span-6 p-2 border  w-full flex flex-col gap-2 justify-center items-center">
          <h3 className="text-black text-xl font-bold">PLAYERS</h3>
          <div className="relative w-50 h-50">
            <MyImage path="/C58Images/Players.jpg" fill />
          </div>

          <textarea
            placeholder="write here..."
            rows={3}
            className="w-[90%] p-2 text-black "
          />
        </div>

        <div className="col-span-6 p-2  border w-full flex flex-col gap-2 justify-center items-center">
          <h3 className="text-black text-xl font-bold">AUDIENCE</h3>
          <div className="relative w-50 h-50">
            <MyImage path="/C58Images/Audience.jpg" fill />
          </div>

          <textarea
            placeholder="write here..."
            rows={3}
            className="w-[90%] p-2 text-black "
          />
        </div>

        <div className="col-span-6 border  w-full flex flex-col gap-2 justify-center items-center p-2">
          <h3 className="text-lg text-black">
            Example: players enjoy listening to or watching sports commentary
          </h3>

          <textarea
            placeholder="write here..."
            rows={3}
            className="w-[90%] p-2 text-black "
          />
        </div>

        <div className="col-span-6 border  w-full flex flex-col gap-2 justify-center items-center p-2">
          <h3 className="text-lg text-black">
            Example: audience enjoy watching games on sports channel{" "}
          </h3>

          <textarea
            placeholder="write here..."
            rows={3}
            className="w-[90%] p-2 text-black "
          />
        </div>

        <div className="col-span-12 border  w-full flex flex-col gap-2 justify-center items-center p-2">
          <ul className="list-disc space-y-2">
            <li className="text-lg text-black">INTERESTS</li>
            <li className="text-lg text-black">PURPOSE OF USING THE APP</li>
            <li className="text-lg text-black">FREQUENCY OF USAGE</li>
            <li className="text-lg text-black">EYE-CATCHING VISUALS</li>
            <li className="text-lg text-black">USER EXPERIENCE</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
