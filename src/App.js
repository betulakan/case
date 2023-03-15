import { useState } from "react";
import "./App.css";
import TrafficLight from "./components/TrafficLight";

function App() {
  const [greenTime, setGreenTime] = useState(5);
  const [enteredGreenTime, setEnteredGreenTime] = useState(greenTime);
  const [pedestrianActive, setPedestrianActive] = useState(false);
  let btnClr = pedestrianActive === true ? "green" : ""
  const groups = [
    { name: "Grup 1", id: 1 },
    { name: "Grup 2", id: 2 },
    { name: "Yaya Grubu", id: 3 },
  ];

  const activatePedestrian = () => {
    setPedestrianActive((prev) => !prev)
  };

  const handleChange = (event) => {
    setGreenTime(event.target.value);
  };
 
  const handleClick = () => {
    if(Number.isInteger(+greenTime)){

      if (greenTime <= 30 && greenTime >=1) {
        setEnteredGreenTime(greenTime)
        alert("Alındı")
      }
      else {
        alert("Sayı aralık dışında")
        return;
      }
    }
    else {
      alert("Lütfen tam sayı giriniz")
      return;
    }
  };

  return (
    <div className="App">
      {groups.map((group) => (
        <div key={group.id} style={{ display: "flex", flexDirection: "column" }}>
          <TrafficLight key={group.id} groupId={group.id} pedestrianActive={pedestrianActive} setPedestrianActive={setPedestrianActive} />
          <h3>{group.name}</h3>
        </div>
      ))}
      <div className="userInputs">
        <button className="pedestrianButton"  style={{backgroundColor: btnClr}} onClick={activatePedestrian}>
          Yaya Butonu
        </button>
        <br />
        <text>Yeşil Süresi: </text>
        <input
          className="greenLightInput"
          type="number"
          id="greenTime"
          placeholder="Yeşil süresi.."
          value={greenTime}
          onChange={handleChange}
        />
        <button className="greenLightButton" onClick={handleClick}>
          Gönder
        </button>
      </div>
    </div>
  );
}

export default App;
