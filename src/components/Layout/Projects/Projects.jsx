"use client";
import Card from "@/components/UI/Card";
import { Container } from "@/components/UI/Container";
import { projectCardData } from "@/constants";
import React from "react";

const Projects = () => {
  return (
    <Container>
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {projectCardData.map((val, index) => (
          <Card
            width={true}
            icon={val.imgsrc}
            text={val.title}
            index={index}
            paragraph={val.text}
          />
        ))}
      </div>
    </Container>
  );
};

export default Projects;
