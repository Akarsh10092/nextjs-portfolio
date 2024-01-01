import React from "react";
import { Tilt } from "react-tilt";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
const Card = ({ icon, text, index, paragraph, width }) => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <Tilt
      className={`${width && width ? "xs:w-[300px]" : "xs:w-[250px]"} w-full`}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={defaultOptions}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <Image
            className="w-full h-full object-cover"
            height={1000}
            width={1000}
            alt={text}
            src={icon}
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {text}
          </h3>
          {paragraph && (
            <p className="text-white text-[12px] font-normal text-left">
              {paragraph}
            </p>
          )}
        </div>
      </motion.div>
    </Tilt>
  );
};

export default Card;
