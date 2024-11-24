import React from "react";
import "./index";

type ButtonProps = {
  text: string;
  onClick: (message: string) => void;
};

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  const getColor = (status: string): string => {
    switch (text) {
      case "+":
      case "-":
      case "*":
      case "/":
        return "orange";
      case "=":
      case "<-":
        return "red";
      default:
        return "lighblue";
    }
  };
  const handleClick = () => {
    onClick(text);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {};

  return (
    <button
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={{ backgroundColor: getColor(text) }}
      className="button"
    >
      {text}
    </button>
  );
};
