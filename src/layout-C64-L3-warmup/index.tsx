"use client";

import { useState } from "react";

const questions = [
  {
    text: "To communicate warmth when we meet and greet, it’s important to show _______ and a welcoming ________.",
    answer: "Confidence and Smile",
  },
  {
    text: "An essential quality of good networkers is that they do less of talking and more of _______.",
    answer: "Listening",
  },
  {
    text: "In every conversation, it’s best to avoid complexity in language and instead choose _________.",
    answer: "Simplicity",
  },
  {
    text: "We should consider all as equal by showing _______.",
    answer: "Respect",
  },
  {
    text: "Being curious is an asset and can be demonstrated by asking _______.",
    answer: "Questions",
  },
  {
    text: "If you brag, you’re perceived as arrogant, but if you simply share, you’re considered _______.",
    answer: "Friendly",
  },
  {
    text: "If you don’t interrupt when others speak, you show that you’re ________.",
    answer: "Polite",
  },
  {
    text: "The best way to connect after the meeting is by sending a ____________.",
    answer: "Thank you Note",
  },
  {
    text: "All you have to do to communicate effectively is to be _______ and __________.",
    answer: "Kind and Authentic",
  },
];

const LayoutC64L3Warmup = () => {
  const [revealed, setRevealed] = useState<boolean[]>(
    new Array(questions.length).fill(false)
  );

  const handleToggle = (index: number) => {
    const updated = [...revealed];
    updated[index] = !updated[index];
    setRevealed(updated);
  };

  return (
    <div className="min-h-screen bg-[#F8FCFA] flex flex-col items-center p-10 gap-10">
      
      <div className="text-center">
        <h3 className="text-3xl font-bold text-black">AD ANALYSIS</h3>
        {/* <p className="text-zinc-600 text-lg italic">
          Watch this ad and list the following details
        </p> */}
      </div>

      <div className="w-full max-w-4xl flex flex-col gap-6 text-lg">
        {questions.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 p-4 bg-white rounded-lg shadow">
            
            <div className="flex items-start gap-5">
              <input title="show answer"
                type="checkbox"
                checked={revealed[index]}
                onChange={() => handleToggle(index)}
                className="mt-1 w-5 h-5 accent-violet-900 cursor-pointer"
              />

              <p className="text-xl font-bold text-black">{item.text}</p>
            </div>

            {revealed[index] && (
              <p className="text-violet-900 text-xl font-bold  pl-8">
                Answer: {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayoutC64L3Warmup;