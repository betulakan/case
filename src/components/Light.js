import React, { useReducer, useEffect, useState } from "react";
import "../styles/trafficLight.css";

function Light({ color, id, groupId, pedestrianActive, setPedestrianActive }) {
  const lightDurations = [5000, 5000, 5000];
  const lightDurations2 = [5000, 5000, 1000];
  const [lightIndex, setLightIndex] = useState(0);
  const [lightIndex2, setLightIndex2] = useState(0);
  const [lightIndex3, setLightIndex3] = useState(0);
 
  const steps = [
    [
      { step: 1, color: "red", duration: 5000 },
      { step: 2, color: "green", duration: 5000 },
      { step: 3, color: "yellow", duration: 5000 },
    ],
    [
      { step: 1, color: "red", duration: 5000 },
      { step: 2, color: "red", duration: 5000 },
      { step: 3, color: "red", duration: 5000 },
    ],
    [
      { step: 1, color: "red", duration: 5000 },
      { step: 2, color: "red", duration: 5000 },
      { step: 3, color: "red", duration: 5000 },
    ],
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLightIndex((lightIndex + 1) % 3);
    }, lightDurations[lightIndex]);

    return () => clearTimeout(timer);
  }, [lightIndex]);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setLightIndex2((lightIndex2 + 1) % 3);
    }, lightDurations2[lightIndex2]);

    return () => clearTimeout(timer2);
  }, [lightIndex2]);

  useEffect(() => {
    const timer3 = setTimeout(() => {
      if (pedestrianActive === true) {
        setLightIndex3(2);
      } else {
        setLightIndex3(0);
      }
    }, 0);

    return () => clearTimeout(timer3);
  }, [lightIndex3, pedestrianActive]);

  //yaya butonu basıldıktan 15sn sonra geri kırmızı oluyor
  useEffect(() => {
    const resetPedestrian = setTimeout(() => {
      setPedestrianActive(false);
    }, 15000);
    return () => clearTimeout(resetPedestrian);
  }, [pedestrianActive]);

  return (
    <div
      className="light"
      style={{
        backgroundColor: color,
        opacity:
          (groupId === 1 && lightIndex === id) ||
          (groupId === 2 && lightIndex2 === id) ||
          (groupId === 3 && lightIndex3 === id)
            ? 1
            : 0.3,
        boxShadow:
          (groupId === 1 && lightIndex === id) ||
          (groupId === 2 && lightIndex2 === id) ||
          (groupId === 3 && lightIndex3 === id)
            ? "1px 1px 10px rgba(204, 204, 204, 0.5), -1px -1px 10px rgba(204, 204, 204, 0.5)"
            : null,
      }}
    ></div>
  );
}

export default Light;
