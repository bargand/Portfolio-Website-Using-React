import React from "react";
import Tilt from "react-parallax-tilt";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
} from "react-icons/di";

function AboutSkill() {
  return (
    <div className="AboutS">
      <div className="SkillH">
        <h1>
          Professional <span className="HomeSpan">Skillset </span>
        </h1>
      </div>
      <div className="SkillsI">
        <Tilt>
          <DiPython className="SkillOne" />
        </Tilt>

        <Tilt>
          <DiJavascript1 className="SkillOne" />
        </Tilt>

        <Tilt>
          <DiReact className="SkillOne" />
        </Tilt>

        <Tilt>
          <DiNodejs className="SkillOne" />
        </Tilt>

        <Tilt>
          <DiGit className="SkillOne" />
        </Tilt>
      </div>
    </div>
  );
}

export default AboutSkill;
