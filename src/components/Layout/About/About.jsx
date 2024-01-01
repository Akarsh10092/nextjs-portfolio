"use client";
import { Container } from "@/components/UI/Container";
import { about, services } from "@/constants";
import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/components/UI/styles";
import { fadeIn, textVariant } from "@/utils/motion";
import Card from "@/components/UI/Card";

const About = () => {
  return (
    <Container className="mt-20" id="about">
      <div className={`flex flex-col gap-5  ${styles.paddingX}`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>{about.title}</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {about.desc}
        </motion.p>
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-center mt-5 p-5">
        {services.map((val, indx) => (
          <Card key={indx} index={indx} icon={val.icon} text={val.title} />
        ))}
      </div>
    </Container>
  );
};

export default About;
