import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Features = ({ features }) => {
  return (
    <>
      <section className="py-20" id="features">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 ">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all 
            transform hover:scale-105 hover:rotate-1 cursor-pointer animate-scaleIn 
            hover:bg-gradient-to-br hover:from-emerald-50 hover:to-white
           duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                <div className="mb-4 animate-pulse-ring">
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className="text-3xl text-emerald-600 animate-bounce"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 animate-fadeIn">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 animate-fadeIn">
                  {feature.description}
                </p>
                <Link
                  href={feature.link}
                  className="text-emerald-600 hover:text-emerald-700 transition-colors hover:translate-x-2 duration-300 flex items-center">
                  Try it{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
