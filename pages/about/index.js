import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaBars,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
} from "react-icons/si";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5
            key="html"
            className="inline-block mx-2 text-xl text-blue-500"
          />,
          <FaCss3
            key="css"
            className="inline-block mx-2 text-xl text-blue-500"
          />,
          <FaJs
            key="js"
            className="inline-block mx-2 text-xl text-yellow-500"
          />,
          <FaReact
            key="react"
            className="inline-block mx-2 text-xl text-blue-300"
          />,
          <SiNextdotjs
            key="nextjs"
            className="inline-block mx-2 text-xl text-gray-500"
          />,
          <SiFramer
            key="framer"
            className="inline-block mx-2 text-xl text-pink-500"
          />,
          <FaBootstrap
            key="bootstrap"
            className="inline-block mx-2 text-xl text-blue-300"
          />,
          <FaNodeJs
            key="bootstrap"
            className="inline-block mx-2 text-xl text-green-600"
          />,
          
        ],
      },
      {
        title: "Data Structures and Algorithm",
        stage: "C, C++",
      },
    ],
  },
  {
    title: "Awards",
    info: [
      {
        title: "100% attendance in secondary school",
        stage: "2020",
      },
      {
        title: "most disciplined candidate (NCC)",
        stage: "2020",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Web Developer (octanet software services remote)",
        stage: "2023(Oct-Nov)",
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "High School, Anand Vihar School, Bhopal, M.P ",
        stage: "2022",
      },
      {
        title:
          "B.Tech - Engineering Mathematics and Computing, MITS Gwalior, M.P",
        stage: "2022-26",
      },
    ],
  },
];

const About = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [showNav, setShowNav] = useState(false);

  const toggleSection = (index) => {
    if (activeSection === index) {
      // Do nothing if clicking on the already active section
      return;
    }
    setActiveSection(index);
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="max-w-screen-md mx-auto pt-28 pl-5 pr-5">
      <div className="mb-8 p-6 border rounded-lg relative">
        <div
          className="cursor-pointer md:hidden absolute top-0 right-0 p-3 z-30" 
          onClick={toggleNav}
        >
          <FaBars className="text-lg font-bold focus:outline-none transition-all duration-300 text-purple-800 hover:text-red-500" />
        </div>

        {showNav && (
          <div className="md:hidden mb-4" z-30>
            <ul>
              {aboutData.map((section, index) => (
                <li key={index}>
                  <button
                    className="text-sm font-bold p-2 focus:outline-none transition-all duration-300 border border-gray-400 text-purple-800 hover:border-red-500 hover:text-red-500 rounded w-full"
                    onClick={() => {
                      toggleSection(index);
                      toggleNav();
                    }}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex justify-center md:justify-start gap-4">
          {aboutData.map((section, index) => (
            <button
              key={index}
              className={`hidden md:block text-lg font-bold rounded-lg p-3 focus:outline-none transition-all duration-300 border ${
                activeSection === index
                  ? "border-red-600 text-red-600"
                  : "border-gray-400 text-purple-800 hover:border-red-500 hover:text-red-500"
              }`}
              onClick={() => toggleSection(index)}
            >
              {section.title}
            </button>
          ))}
        </div>
        {activeSection !== null && (
          <div className="mt-4 p-5">
            <ul>
              {aboutData[activeSection]?.info.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-2">
                  <strong className="text-lg flex">
                    {" "}
                    <FontAwesomeIcon
                      icon={faHandPointRight}
                      className="mr-1 w-5 h-5"
                    />
                    {item.title}
                  </strong>
                  {item.stage && (
                    <span className="text-gray-400"> - {item.stage}</span>
                  )}
                  {item.icons && (
                    <div className="mt-2 flex gap-2 flex-wrap">
                      {item.icons.map((icon, iconIndex) => (
                        <span key={iconIndex}>{icon}</span>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;