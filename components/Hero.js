"use client";
import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("Aushah");

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    setShowModal(!storedName);
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleCelebrate = () => {
    localStorage.setItem("username", userName);
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl animate-slideUp">
            <div className="text-center">
              <div className="relative">
                <FontAwesomeIcon
                  icon={faMoon}
                  className="text-emerald-600 text-4xl mb-4 animate-pulse"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="absolute top-0 right-1/4 text-yellow-400 text-xl animate-twinkle"
                />
              </div>
              <h2 className="text-2xl font-bold mb-6">Welcome to EidJoy</h2>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-emerald-200 focus:outline-none focus:border-emerald-600 mb-4 hover:shadow-md transition-all"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <button
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-all hover:scale-105 transform w-full"
                onClick={handleCelebrate}>
                Let&apos;s Celebrate!{" "}
                <FontAwesomeIcon icon={faWandMagicSparkles} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}
      <section className="pt-24 h-[500px] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            className="w-full h-full object-cover object-center "
            src="/masjid.jpg"
            alt="Masjid background"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="animate-float">
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-300 to-yellow-500 bg-clip-text text-transparent">
                Eid Mubarak,{" "}
                <span className="text-emerald-400 animate-bounce">
                  {userName.toUpperCase()}
                </span>
                !
              </h1>
            </div>
            <p className="text-xl text-[#cafbce] font-bold mb-8 animate-fadeIn">
              May your day be filled with joy and blessings
            </p>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 animate-slideUp">
              <Link href="/game">
                {" "}
                <button
                  className="bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 
    transition-all hover:scale-105 transform flex items-center
    shadow-lg hover:shadow-emerald-200/40 
    hover:-translate-y-1 duration-300 group">
                  <FontAwesomeIcon
                    icon={faWandMagicSparkles}
                    className="mr-2 group-hover:rotate-45 transition-transform duration-500"
                  />
                  Fun Game
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ✨
                  </span>
                </button>
              </Link>
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
        ${index === 0 ? "top-20 left-20" : ""}
        ${index === 1 ? "top-40 right-40 rotate-45" : ""}
        ${index === 2 ? "bottom-20 left-1/4" : ""}
        ${index === 3 ? "top-1/3 right-1/4" : ""}
        animate-float delay-${index * 100} 
        hover:animate-spin hover:text-yellow-500 cursor-pointer`}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
