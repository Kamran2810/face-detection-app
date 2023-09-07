import React from 'react'
import Tilt from "react-parallax-tilt";
import AI from "./AI.png"

const Logo = () => {
  return (
    <div className="flex ml5" >
      <Tilt scale={1.5}>
        <div className='logo'>
          <img className="shadow-1 pa2" src={AI} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo