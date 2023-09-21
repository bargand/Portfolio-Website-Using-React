import React from 'react'
import ParticlesBg from "./ParticlesBg";
import Tilt from "react-parallax-tilt";
import AboutSkill from './AboutSkill';



function About() {
  return (
  <section>
    <div className="aboutO">
      <ParticlesBg/>
      <div className="aboutLeft">
        <h1>KNOW WHO <span className="HomeSpan">I'M</span></h1>
        <p>
            I learned to make websites from youtube ,name{" "}
            <span className="HomeSpan">CODE WITH HARRY</span> and{" "}
            <span className="HomeSpan">APNA COLLEGE</span>. I know how fun and
            rewarding it is, but I also know that it can be incredibly
            frustrating. I'm here to help make your journey into web development
            as easy and as fun as possible.{" "}
          </p>
      </div>
      <div className="aboutRight">
        <Tilt>
        <img src="/images/About.png" alt=""/>
        </Tilt>
      </div>
    </div>
    <AboutSkill/>
  </section>
  )
}

export default About
