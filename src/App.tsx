import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/api/testFunction?name=jacob")
      .then((res) => res.json())
      .then((data) => setText(data)); 
  }, [text]);

  return (
    <>
    <div >
      <h1>{text}</h1>
      </div>
    </>
  );
}

export default App;
