import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

import {
  faGift,
  faGamepad,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const features = [
    {
      icon: faGift,
      title: "Virtual Eidi Generator",
      description:
        "Generate a random amount of Eidi you will get by the end of day.",
      link: "/game",
    },
    {
      icon: faGamepad,
      title: "Eid Quiz Game",
      description: "Test your knowledge about Eid traditions and culture",
      link: "/quiz",
    },
    {
      icon: faComments,
      title: "Good deed Generator",
      description: "Get ideas for good deeds to do on Eid",
      link: "/good-deed",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Hero />
      <Features features={features} />
    </div>
  );
}
