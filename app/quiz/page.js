"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faWandMagicSparkles,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
const Quiz = () => {
  const [userName, setUserName] = useState("Aushah");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showCompletion, setShowCompletion] = useState(false);

  useEffect(() => {
    setUserName(localStorage.getItem("username") || "Aushah");
  }, []);

  const quizQuestions = [
    {
      question: "What is the name of the charity given before Eid prayers?",
      options: ["Zakat", "Sadaqah", "Fitrana", "Khums"],
      correct: 2,
    },
    {
      question: "Which month comes after Ramadan in the Islamic calendar?",
      options: ["Shawwal", "Muharram", "Dhul-Hijjah", "Rajab"],
      correct: 0,
    },
    {
      question:
        "What is the traditional sweet dish commonly served during Eid?",
      options: ["Baklava", "Sheer Khurma", "Kunafa", "Halwa"],
      correct: 1,
    },
    {
      question: "How many times is the Takbir recited in Eid prayer?",
      options: ["3", "6", "9", "12"],
      correct: 3,
    },
  ];

  const handleAnswer = (selectedIndex) => {
    setSelectedAnswer(selectedIndex);
    if (selectedIndex === quizQuestions[currentQuestion].correct) {
      setScore((prevScore) => prevScore + 1);
    }
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setShowCompletion(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowCompletion(false);
  };

  return (
    <>
      <section className="min-h-screen relative bg-gradient-to-b from-emerald-50 to-white py-24 px-4">
        <div className="img absolute top-1 left-0 ">
          <Image src="/img3.png" width={208} height={208} alt="" />
        </div>
        <div className="img absolute -bottom-10 right-0">
          <Image src="/img4.png" width={208} height={208} alt="" />
        </div>
        <div className="container mx-auto max-w-2xl">
          {!showCompletion ? (
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <FontAwesomeIcon
                    icon={faMoon}
                    className="text-emerald-600 text-4xl animate-pulse"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="absolute -top-2 -right-2 text-yellow-400 text-xl animate-twinkle"
                  />
                </div>
                <h1 className="text-4xl font-bold mt-6 bg-gradient-to-r from-emerald-600 to-yellow-500 bg-clip-text text-transparent">
                  Eid Quiz Time, {userName}!
                </h1>
                <div className="mt-4 flex justify-center items-center gap-4">
                  <span className="bg-emerald-100 text-emerald-800 cursor-pointer px-4 py-1 rounded-full">
                    Question {currentQuestion + 1}/{quizQuestions.length}
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 cursor-pointer px-4 py-1 rounded-full">
                    Score: {score}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-center text-gray-800">
                  {quizQuestions[currentQuestion].question}
                </h2>

                <div className="grid gap-4">
                  {quizQuestions[currentQuestion].options.map(
                    (option, index) => (
                      <button
                        key={index}
                        className={`p-4 text-left rounded-xl cursor-pointer border-2 transition-all 
                        ${
                          selectedAnswer !== null
                            ? index === quizQuestions[currentQuestion].correct
                              ? "bg-emerald-100 border-emerald-600"
                              : "border-red-200 bg-red-50 opacity-75"
                            : "hover:border-emerald-400 border-emerald-200 hover:scale-[1.02]"
                        }`}
                        onClick={() => handleAnswer(index)}
                        disabled={selectedAnswer !== null}>
                        <span className="font-medium">{option}</span>
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <FontAwesomeIcon
                icon={faWandMagicSparkles}
                className="text-emerald-600 text-4xl mb-6 animate-pulse"
              />
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-yellow-500 bg-clip-text text-transparent">
                Quiz Completed! 🎉
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Congratulations, {userName}!<br />
                Final Score: {score}/{quizQuestions.length}
              </p>
              <div className="flex flex-col gap-4 max-w-xs mx-auto">
                <button className="bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-all hover:scale-105">
                  <Link href="/">Back to Home</Link>
                </button>
                <button
                  className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition-all hover:scale-105"
                  onClick={resetQuiz}>
                  Try Again
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Quiz;
