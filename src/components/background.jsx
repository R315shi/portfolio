import React from "react";
import "./background.css";

const WavyBackground = () => {
  return (
    <div className="wavy-bg">
      
<div className="blob blob1" style={{ "--rand": Math.random() }} />
<div className="blob blob2" style={{ "--rand": Math.random() }} />
<div className="blob blob3" style={{ "--rand": Math.random() }} />

    </div>
  );
};

export default WavyBackground;
