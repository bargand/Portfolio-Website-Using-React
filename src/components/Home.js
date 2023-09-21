import React from "react";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
 import Home2 from "./Home2";
import ParticlesBg from "./ParticlesBg";


function Home() {
  return (
 <>
    <section>
      <div className="HomeO">
      <ParticlesBg/>
        <div className="HomeLeft">
          <h1 className="HomeH">Hi There!</h1>
          <br />
          <h1 className="HomeH">
            I'M <span className="HomeSpan">DEBARGHA NANDI</span>
          </h1>
          <br />
          <div
            style={{
              paddingTop: 30,
              textAlign: "left",
              fontSize: "30px",
              color: "#c770f0",
              fontWeight: 500,
            }}
          >
            <Type />
          </div>
        </div>
        <div className="HomeRight">
          <Tilt>
            <img src="/images/HomeIMG2.svg" alt="" />
          </Tilt>
        </div>
      </div>
      {/* <hr /> */}
      <Home2 />
    </section>
 </>
  );
}

export default Home;
