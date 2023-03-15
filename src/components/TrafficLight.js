import React, { useState } from "react";
import "../styles/trafficLight.css";
import Light from "./Light";

const TrafficLight = props => {
  const colors = ["red", "yellow", "green"];
  const steps1 = ["red", "green", "yellow", "red", "red", "red"];
  const steps2 = ["red", "red", "red", "green", "yellow", "red"];
  const steps3 = ["red", "red", "red", "red", "red", "red"];

  return (
    <div className="trafficLight">
      {colors.map((color, index) => (
        <Light
          key={index}
          color={color}
          id={index}
          groupId={props.groupId}
          pedestrianActive={props.pedestrianActive}
          setPedestrianActive={props.setPedestrianActive}
        />
      ))}
    </div>
  );
};

export default TrafficLight;
