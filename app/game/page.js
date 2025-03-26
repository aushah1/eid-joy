"use client";
import React, { useState, useRef, useEffect } from "react";

const ScratchCard = ({ amount, isScratched, disabled, onScratch }) => {
  const canvasRef = useRef(null);
  const isScratching = useRef(false);
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    if (canvasRef.current && !isScratched) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      setCtx(context);
      context.fillStyle = "#FFD700";
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
  }, [isScratched]);

  const startScratching = (e) => {
    isScratching.current = true;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;
    draw(x, y);
  };

  const scratch = (e) => {
    if (!isScratching.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;
    draw(x, y);
  };

  const stopScratching = () => {
    isScratching.current = false;
    if (ctx && !isScratched) {
      const imageData = ctx.getImageData(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      let transparentPixels = 0;
      for (let i = 3; i < imageData.data.length; i += 4) {
        if (imageData.data[i] === 0) transparentPixels++;
      }
      const percentScratched =
        (transparentPixels / (imageData.data.length / 4)) * 100;
      if (percentScratched > 30) onScratch();
    }
  };

  const draw = (x, y) => {
    if (ctx) {
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  return (
    <div className="relative w-52 h-52 rounded-lg overflow-hidden cursor-pointer">
      <div
        className={`absolute w-full h-full flex justify-center items-center text-3xl font-bold ${
          isScratched
            ? "bg-green-300"
            : disabled
            ? "bg-red-400 text-gray-600"
            : "bg-green-300"
        }`}>
        ₹{amount}
      </div>

      {!isScratched && !disabled && (
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 touch-none z-10 cursor-pointer"
          width="208"
          height="208"
          onMouseDown={startScratching}
          onMouseMove={scratch}
          onMouseUp={stopScratching}
          onMouseLeave={stopScratching}
          onTouchStart={startScratching}
          onTouchMove={scratch}
          onTouchEnd={stopScratching}
        />
      )}
    </div>
  );
};

const Game = () => {
  const [scratched, setScratched] = useState(Array(9).fill(false));
  const [amounts, setAmounts] = useState([]);
  const [gameKey, setGameKey] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [userChoice, setUserChoice] = useState(null);
  const [userName] = useState("Aushah");

  useEffect(() => {
    setIsMounted(true);
    setAmounts(
      Array.from({ length: 9 }, () => Math.floor(Math.random() * 10000 + 10))
    );
  }, [gameKey]);

  const handleScratch = (index) => {
    setScratched((prev) => {
      const newScratched = [...prev];
      newScratched[index] = true;
      return newScratched;
    });
  };

  const handleChoice = (choice) => {
    setUserChoice(choice);
    setShowModal(false);
  };

  const handleTryAgain = () => {
    setGameKey((prev) => prev + 1);
    setScratched(Array(9).fill(false));
    setShowModal(true);
    setUserChoice(null);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4 flex flex-col items-center shadow-xl">
              <h2 className="text-2xl font-bold mb-4">Choose One Option:</h2>
              <button
                onClick={() => handleChoice("take")}
                className="w-full cursor-pointer bg-emerald-600 text-white py-3 rounded-xl mb-4 hover:bg-emerald-700 transition-colors">
                I take Eidi
              </button>
              <button
                onClick={() => handleChoice("give")}
                className="w-full cursor-pointer bg-amber-500 text-white py-3 rounded-xl hover:bg-amber-600 transition-colors">
                I give Eidi
              </button>
            </div>
          </div>
        )}

        <div className="top pt-10 md:mx-5 mx-3 flex flex-col items-center gap-5">
          <h1 className="md:text-6xl text-5xl font-bold bg-gradient-to-r from-emerald-600 to-yellow-500 bg-clip-text text-transparent">
            WELCOME {userName.toUpperCase()}!
          </h1>
          <h1 className="md:text-6xl text-5xl font-bold bg-gradient-to-r from-emerald-600 to-yellow-500 bg-clip-text text-transparent">
            GUESS YOUR TOTAL EIDI
          </h1>
          {userChoice && (
            <p className="text-2xl text-gray-600">
              {userChoice === "take"
                ? "Let's see how much Eidi you will get!"
                : "Let's see how much money you will give for Eidi!"}
            </p>
          )}
          <p className="text-lg text-gray-600">You can choose only one card</p>
        </div>

        {isMounted && (
          <div className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-10 p-4 w-full xl:w-[56%] place-items-center mx-auto">
            {amounts.map((amount, index) => (
              <ScratchCard
                key={`${gameKey}-${index}`}
                amount={amount}
                isScratched={scratched[index]}
                disabled={scratched.some((s) => s)}
                onScratch={() => handleScratch(index)}
              />
            ))}
          </div>
        )}

        <div className="button flex justify-center mt-10">
          <button
            className="bg-emerald-600 cursor-pointer text-white py-3 rounded-xl hover:bg-emerald-700 transition-colors px-10"
            onClick={handleTryAgain}>
            TRY AGAIN !
          </button>
        </div>
      </div>
    </>
  );
};

export default Game;
