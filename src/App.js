

import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="bg-black p-6 rounded-lg shadow-xl w-full max-w-sm">
        <div className="mb-4">
          <input
            type="text"
            className="w-full bg-black text-white text-2xl p-4 rounded-lg border-none focus:outline-none"
            value={input}
            placeholder="0"
            readOnly
          />
          <input
            type="text"
            className="w-full bg-black text-[#FFE998] text-3xl p-4 mt-2 rounded-lg border-none focus:outline-none"
            value={result}
            placeholder="Result"
            readOnly
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"].map((num) => (
            <button
              key={num}
              className="bg-gray-600 text-white rounded-lg p-4 text-xl transition-transform duration-200 ease-in-out transform hover:bg-slate-800 hover:scale-105"
              onClick={() => handleClick(num)}
            >
              {num}
            </button>
          ))}

          <button
            className=" text-white rounded-lg p-4 text-xl transition-transform duration-200 ease-in-out transform hover:bg-red-900 hover:scale-105"
            onClick={handleClear}
          >
            C
          </button>
          <button
            className="bg-gray-600 text-white rounded-lg p-4 text-xl transition-transform duration-200 ease-in-out transform hover:bg-slate-800 hover:scale-105"
            onClick={() => handleClick("+")}
          >
            +
          </button>
          <button
            className="bg-gray-600 text-white rounded-lg p-4 text-xl transition-transform duration-200 ease-in-out transform hover:bg-slate-800 hover:scale-105"
            onClick={() => handleClick("-")}
          >
            -
          </button>
          <button
            className="bg-gray-600 text-white rounded-lg p-4 text-xl transition-transform duration-200 ease-in-out transform hover:bg-slate-800 hover:scale-105"
            onClick={() => handleClick("*")}
          >
            *
          </button>
          <button
            className="bg-gray-600 text-white rounded-lg p-4 text-xl transition-transform duration-200 ease-in-out transform hover:bg-slate-800 hover:scale-105"
            onClick={() => handleClick("/")}
          >
            /
          </button>

          {/* Gold Gradient Button for "=" */}
          <button
            className="bg-gradient-to-b from-[#FFE998] to-[#57370D] text-black rounded-lg p-4 text-xl transition-transform duration-200 ease-in-out transform hover:from-[#57370D] hover:to-[#FFE998] hover:text-white hover:scale-105"
            onClick={handleCalculate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

function App() {
  return <Calculator />;
}

export default App;
