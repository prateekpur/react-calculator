"use client";
import React from "react";
import "./index";

type ButtonProps = {
    text: string;
    onClick: (message: string) => void;
};

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    const buttonStyle1 = {
        width: "80px",
        height: "80px",
        borderTop: "1px solid #777",
        borderRight: "1px solid #666",
        textAlign: "center",
        lineHeight: "80px",
        margin: "5px",
        padding: "10px 20px",
        border: "px solid #BF4F74",
        borderRadius: "5px",
    };

    const getColor = (status: string): string => {
      switch (text) {
        case '+':
        case '-':
        case '*':
        case '/':
          return 'orange';
        case '=':
        case '<-':
          return 'red';
        default:
          return 'lighblue';
      }
    };
    const handleClick = () => {
        onClick(text); // Pass the text back to the parent
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
          console.log("Enter key pressed");
        }
    };


    return (
      <button onClick={handleClick} onKeyDown={handleKeyDown} style={{backgroundColor: getColor(text)}} className="button">
        {text}
      </button>
    );
};
