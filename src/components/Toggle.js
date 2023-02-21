import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    console.log('click');
    setIsOn((isOn) => !isOn);
  }

  const color = isOn ? 'green' : 'red';

  return <button style={{ background: color }} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>
    ;
}

export default Toggle;
