import { useState } from "react";
import Input from "../Input/Input";

const Button = ({ value, onClick }: { onClick: {}; value: {} }) => {
  const [currentNumber, setCurrentNumber] = useState("0");

  const [firstNumber, setFirstNumber] = useState("");

  const [operation, setOperation] = useState("");

  const handleAddNumber = (number: number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const min = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(min));
      setOperation("");
    }
  };

  const handleMultiplicatorNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const multiplication = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiplication));
      setOperation("");
    }
  };

  const handleDivisorNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const divisor = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divisor));
      setOperation("");
    }
  };

  const handlePercentNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber(currentNumber);
      setOperation("%");
    } else {
      const percent = Number(firstNumber) / 100;
      setCurrentNumber(String(percent));
      setOperation("");
    }
  };

  const handleOperations = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        default:
          break;
      }
      switch (operation) {
        case "-":
          handleMinusNumbers();
          break;
        default:
          break;
      }
      switch (operation) {
        case "*":
          handleMultiplicatorNumbers();
          break;
        default:
          break;
      }
      switch (operation) {
        case "/":
          handleDivisorNumbers();
          break;
        default:
          break;
      }
      switch (operation) {
        case "%":
          handlePercentNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="container mx-auto flex flex-col justify-center">
      <Input value={currentNumber} />
      <div className="flex flex-row gap-3 mt-3 justify-center text-2xl">
        <button
          onClick={handleOnClear}
          className="w-[4rem] text-black bg-gray-400 rounded-full font-bold p-4 hover:opacity-80"
        >
          AC
        </button>
        <button
          onClick={() => handleAddNumber("+" as any | "-" as any)}
          className="w-[4rem] text-black bg-gray-400 rounded-full font-bold p-4 hover:opacity-80"
        >
          +/-
        </button>
        <button
          onClick={handlePercentNumbers}
          className="w-[4rem] text-black bg-gray-400 rounded-full font-bold p-4 hover:opacity-80"
        >
          %
        </button>
        <button
          onClick={handleDivisorNumbers}
          className="w-[4rem] text-white bg-orange-500 rounded-full font-bold p-4 hover:opacity-80"
        >
          /
        </button>
      </div>

      <div className="flex flex-row gap-3 mt-3 justify-center text-2xl">
        <button
          onClick={() => handleAddNumber(7)}
          className="w-[4rem] text-white bg-gray-800 rounded-full font-bold p-4 hover:opacity-80"
        >
          7
        </button>
        <button
          onClick={() => handleAddNumber(8)}
          className="w-[4rem] text-white bg-gray-800 rounded-full font-bold p-4 hover:opacity-80"
        >
          8
        </button>
        <button
          onClick={() => handleAddNumber(9)}
          className="w-[4rem] text-white bg-gray-800 rounded-full font-bold p-4 hover:opacity-80"
        >
          9
        </button>
        <button
          onClick={handleMultiplicatorNumbers}
          className="w-[4rem] text-white bg-orange-500 rounded-full font-bold p-4 hover:opacity-80"
        >
          X
        </button>
      </div>

      <div className="flex flex-row gap-3 mt-3 justify-center text-2xl">
        <button
          onClick={() => handleAddNumber(4)}
          className="w-[4rem] text-white bg-gray-800 rounded-full font-bold p-4 hover:opacity-80"
        >
          4
        </button>
        <button
          onClick={() => handleAddNumber(5)}
          className="w-[4rem] text-white bg-gray-800 rounded-full font-bold p-4 hover:opacity-80"
        >
          5
        </button>
        <button
          onClick={() => handleAddNumber(6)}
          className="w-[4rem] text-white bg-gray-800 rounded-full font-bold p-4 hover:opacity-80"
        >
          6
        </button>
        <button
          onClick={handleMinusNumbers}
          className="w-[4rem] text-white bg-orange-500 rounded-full font-bold p-4 hover:opacity-80"
        >
          -
        </button>
      </div>

      <div className="flex flex-row gap-3 mt-3 justify-center text-2xl">
        <button
          onClick={() => handleAddNumber(1)}
          className="w-[4rem] text-white bg-gray-800 rounded-full font-bold p-4 hover:opacity-80"
        >
          1
        </button>
        <button
          onClick={() => handleAddNumber(2)}
          className="w-[4rem] text-white bg-gray-800 rounded-full font-bold p-4 hover:opacity-80"
        >
          2
        </button>
        <button
          onClick={() => handleAddNumber(3)}
          className="w-[4rem] text-white bg-gray-800 rounded-full font-bold p-4 hover:opacity-80"
        >
          3
        </button>
        <button
          onClick={handleSumNumbers}
          className="w-[4rem] text-white bg-orange-500 rounded-full font-bold p-4 hover:opacity-80"
        >
          +
        </button>
      </div>

      <div className="flex flex-row gap-3 mt-3 justify-center text-2xl">
        <button
          onClick={() => handleAddNumber(0)}
          className="w-[9rem] text-white bg-gray-800 rounded-full font-bold p-4 text-start hover:opacity-80"
        >
          0
        </button>
        <button
          onClick={() => handleAddNumber("." as any)}
          className="w-[4rem] text-white bg-gray-800 rounded-full font-bold p-4 hover:opacity-80"
        >
          ,
        </button>
        <button
          onClick={handleOperations}
          className="w-[4rem] text-white bg-gray-800 rounded-full font-bold p-4 hover:opacity-80"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Button;
