"use client";
import { Container } from "@/components/UI/Container";
import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/components/UI/styles";
import { fadeIn, textVariant } from "@/utils/motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience } from "@/constants";
import Image from "next/image";
import Tech from "../Tech/Tech";
const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
    date={experience.date}
    iconStyle={{ background: experience.color, color: "#fff" }}
    icon={
      <div className="flex justify-center items-center w-full h-full">

      <Image
        height={1000}
        width={1000}
        src={experience.icon}
        alt={experience.company}
        className=" object-cover w-10 h-10"
        />
        </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {experience.position}
      </h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point.point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);
const Experience = () => {
  return (
    <Container className="mt-20">
      <div className={`flex flex-col gap-5  ${styles.paddingX}`} id="work">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          What I have done so far
        </motion.p>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Work Experience</h2>
        </motion.div>
        <div className="flex flex-col mt-20">
          <VerticalTimeline>
            {experience.map((val, index) => (
              <ExperienceCard experience={val} index={index} key={index} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <Tech/>
    </Container>
  );
};

export default Experience;
