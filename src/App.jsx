import React, { useRef } from "react";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import moon from "./assets/moon.png";
import cat from "./assets/cat.gif";
import land from "./assets/land.png";

function App() {
  const ref = useRef();
  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          speed={1}
          factor={2}
          style={{ backgroundImage: `url(${moon})`, backgroundSize: "cover" }}
        />
        <ParallaxLayer
          offset={0}
          speed={0.5}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Parallax Scrolling Effect</h2>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0.9, end: 2.5 }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={cat} alt="Cat" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{ backgroundImage: `url(${land})`, backgroundSize: "cover" }}
        />
        <ParallaxLayer
          offset={3.2}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>Back to top</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
