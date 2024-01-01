import BallCanvas from "@/components/UI/Ball";
import { Container } from "@/components/UI/Container";
import { technologies } from "@/constants";
import React from "react";

const Tech = () => {
  return (
    <Container>
      <div className="flex flex-row flex-wrap justify-center gap-10 p-10">
        {technologies.map((technology) => (
          <div className="flex flex-col items-center justify-center">
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
            <p className="uppercase font-normal text-[14px] text-white-100">{technology.name}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Tech;
