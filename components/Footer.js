import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-emerald-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 grid-cols-2 gap-8 place-content-center place-items-center">
            {/* Brand Column */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FontAwesomeIcon icon={faMoon} className="text-2xl" />
                <span className="text-xl font-bold">EidJoy</span>
              </div>
              <p className="text-emerald-200">
                Celebrate Eid with joy and connection
              </p>
            </div>

            {/* Features Column */}
            <div>
              <h4 className="font-bold mb-4">Features</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/game"
                    className="text-emerald-200 hover:text-white transition-colors">
                    Eidi Generator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/quiz"
                    className="text-emerald-200 hover:text-white transition-colors">
                    Quiz Game
                  </Link>
                </li>
                <li>
                  <Link
                    href="/good-deed"
                    className="text-emerald-200 hover:text-white transition-colors">
                    Good Deed
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect Column */}
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/aushah1"
                  target="_main"
                  className="text-emerald-200 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/aushahgw"
                  target="_main"
                  className="text-emerald-200 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-emerald-300">
            <p>&copy; 2025 EidJoy. All rights reserved.</p>
            <p className="mt-2">Made with ❤️ for joyful Eid celebrations</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
