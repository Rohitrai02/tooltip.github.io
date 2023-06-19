import Main from "./Main";
import { useState } from "react";

function App() {
  // note:- you can pass bottom, top, left and right as a props for different css styling

  
  const [type,setType] = useState("top")

  const handleTop = (e)=>{
    e.preventDefault();
    alert("Top Button Selected");
    setType("top")
  }
  const handleBottom = (e)=>{
    e.preventDefault();
    alert("Bottom Button Selected");
    setType("bottom")
  }
  const handleLeft = (e)=>{
    e.preventDefault();
    alert("Left Button Selected");
    setType("left")
  }

  const handleRight = (e)=>{
    e.preventDefault();
    alert("Right Button Selected");
    setType("right")
  }
  return (
    <>
    <div className="btn">
      <span>Select Button to Check Hover:</span>
    <button onClick={handleTop}>Top</button>
    <button onClick={handleBottom}>Bottom</button>
    <button onClick={handleLeft}>Left</button>
    <button onClick={handleRight}>Right</button>
    </div>
      <Main type={type} />
    </>
  );
}

export default App;
