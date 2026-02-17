

const Page = () => {
  return (
     <div className="min-h-screen bg-[#F8FCFA] flex flex-col justify-start items-center p-10 gap-10">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="text-3xl font-bold text-center text-black">Imagine to design</h3>

        {/* <p className="text-zinc-600 text-lg italic">
          For example: This apple costs $5 per piece. This Bookstand is
          available at 20% discount on its price of 100 $.
        </p> */}
      </div>
      <iframe width="600" height="400" src="https://www.youtube.com/embed/PMCKXaFsmCA?si=bsrGY9huVmXmrDvX" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default Page
