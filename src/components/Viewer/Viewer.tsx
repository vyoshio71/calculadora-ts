import { useState } from "react";
import Button from "../Button/Button";

const Viewer = () => {
  const [currentNumber, setCurrentNumber] = useState("0");

  return (
    <div className="w-[36vh] h-[70vh] bg-black justify-center mx-auto rounded-2xl lg:w-[35vh] lg:h-[70vh] mt-24">
      <Button value={currentNumber} onClick={setCurrentNumber} />
    </div>
  );
};

export default Viewer;
