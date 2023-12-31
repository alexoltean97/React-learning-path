import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/Demo";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("App running");

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagrahp) => !prevShowParagrahp);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
