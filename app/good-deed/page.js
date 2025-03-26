"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const GoodDeed = () => {
  const [currentDeed, setCurrentDeed] = useState("");
  const deeds = [
    "Visit an elderly neighbor and share sweets with them",
    "Donate clothes to those in need",
    "Help prepare Eid meals for your family",
    "Forgive someone and mend relationships",
    "Volunteer at a local charity organization",
    "Give gifts to children in your community",
    "Help clean the mosque after prayers",
    "Donate to a food bank",
    "Send Eid greetings to someone lonely",
    "Offer to help with household preparations",
  ];

  const generateDeed = () => {
    const randomDeed = deeds[Math.floor(Math.random() * deeds.length)];
    setCurrentDeed(randomDeed);
  };

  return (
    <>
      <section className="min-h-screen pt-24 relative overflow-hidden bg-gradient-to-b from-emerald-100 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="animate-float">
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-yellow-500 bg-clip-text text-transparent">
                Eid Good Deed Generator
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 animate-fadeIn">
              Spread joy and kindness this blessed occasion
            </p>

            {/* Deed Display */}
            <div className="min-h-[120px] mb-8">
              {currentDeed && (
                <div className="bg-emerald-50 rounded-xl p-6 shadow-lg animate-fadeIn">
                  <p className="text-2xl font-semibold text-emerald-800">
                    {currentDeed}
                  </p>
                </div>
              )}
            </div>

            {/* Generate Button */}
            <div className="flex justify-center gap-4 animate-slideUp">
              <button
                onClick={generateDeed}
                className="bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 
                transition-all hover:scale-105 transform flex items-center
                shadow-lg hover:shadow-emerald-200/40 
                hover:-translate-y-1 duration-300 group">
                <FontAwesomeIcon
                  icon={faHandHoldingHeart}
                  className="mr-2 group-hover:rotate-12 transition-transform duration-500"
                />
                Generate Good Deed
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  🌙
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          {[20, 40, 60, 80].map((position, index) => (
            <FontAwesomeIcon
              key={index}
              icon={index % 2 === 0 ? faStar : faMoon}
              className={`absolute text-${
                index % 2 === 0 ? "yellow-400" : "emerald-300"
              } 
              text-${index === 3 ? "4xl" : "3xl"} 
              ${index === 0 ? "top-20 left-1/4" : ""}
              ${index === 1 ? "top-40 right-40 rotate-45" : ""}
              ${index === 2 ? "bottom-20 left-40" : ""}
              ${index === 3 ? "top-1/3 right-20" : ""}
              animate-float delay-${index * 100} 
              hover:animate-spin hover:text-yellow-500 cursor-pointer`}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default GoodDeed;
