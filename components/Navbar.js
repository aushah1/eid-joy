"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Quiz", path: "/quiz" },
    { name: "Fun Game", path: "/game" },
    { name: "Good Deed", path: "/good-deed" },
  ];

  return (
    <header className="sticky top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 px-4 md:px-10 animate-fade-down animate-duration-500">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between relative">
          {/* Logo with hover animation */}
          <div className="flex items-center space-x-1 hover:-translate-y-1 transition-transform duration-200">
            <FontAwesomeIcon
              icon={faMoon}
              className="text-emerald-600 text-3xl hover:rotate-12 transition-transform duration-300"
            />
            <span className="text-4xl font-bold text-emerald-600">Eid</span>
            <span className="text-4xl font-bold text-emerald-500">Joy</span>
          </div>

          {/* Animated Hamburger button */}
          <button
            className={`md:hidden text-3xl text-emerald-600 focus:outline-none transition-transform duration-300 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
            onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>

          {/* Animated Nav Links */}
          <div
            className={`absolute md:relative top-full mt-2 md:top-0 left-0 md:w-auto w-full right-0 bg-white md:bg-transparent shadow-md md:shadow-none p-5 md:p-0 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 transition-all duration-300 ease-in-out ${
              isOpen
                ? "visible opacity-100 translate-y-0"
                : "invisible opacity-0 -translate-y-5"
            } md:visible md:opacity-100 md:translate-y-0`}>
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.path}
                className="group relative text-gray-600 hover:text-emerald-600 transition-all duration-300"
                style={{ transitionDelay: `${isOpen ? index * 100 : 0}ms` }}>
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
