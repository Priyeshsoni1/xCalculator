import React, { useState } from "react";

const Calculator = () => {
  const buttonList = [
    { id: 7, Symbol: "7" },
    { id: 8, Symbol: "8" },
    { id: 9, Symbol: "9" },
    { id: 11, Symbol: "+" },
    { id: 4, Symbol: "4" },
    { id: 5, Symbol: "5" },
    { id: 6, Symbol: "6" },
    { id: 12, Symbol: "-" },
    { id: 1, Symbol: "1" },
    { id: 2, Symbol: "2" },
    { id: 3, Symbol: "3" },
    { id: 13, Symbol: "*" },
    { id: 16, Symbol: "C" },
    { id: 10, Symbol: "0" },
    { id: 15, Symbol: "=" },

    { id: 14, Symbol: "/" },
  ];

  const [input, setInput] = useState("");
  const [result, setResult] = useState("Error");
  const [showResult, setShowResult] = useState(false);
  console.log(input);
  const handleClear = () => {
    setResult("Error");
    setInput("");
    setShowResult(false);
  };
  const handleResult = () => {
    setShowResult(true);
    if (input != "") setResult(eval(input));
    console.log(showResult);
    if (input == "0/0") setResult(NaN);
  };
  return (
    <div>
      <h1>React Calculator</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => {
          const value = e.target.value;

          if (/^[0-9+\-*/]*$/.test(value)) {
            setInput(value);
          }
        }}
        title="Only digits and + - * / symbols are allowed"
      />

      <div style={{ marginTop: "1rem", height: "1rem" }}>
        {showResult && result}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",

            justifyContent: "center",

            flexWrap: "wrap",
            width: "20rem",
            gap: "1rem",
          }}
        >
          {buttonList.map((item) => {
            return (
              <button
                key={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  console.log(showResult, item.Symbol, "clcik");
                  if (showResult) setShowResult(false);
                  let val = item.Symbol;
                  if (val === "=" || val === "C") {
                    if (val == "C") handleClear();
                    else handleResult();
                  } else {
                    setInput((prev) => prev + val);
                  }
                }}
                style={{
                  height: "4rem",
                  width: "4rem",
                  fontSize: "1.5rem",
                  borderRadius: ".7rem",
                  border: "1px solid black",
                }}
              >
                {item.Symbol}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
