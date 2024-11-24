"use client";

type CalcProps = {
  name: string;
  onClick: (name: string) => string;
};

const Button: React.FC<CalcProps> = ({ name, onClick }) => {
  const buttonStyle = {
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

  return (
    <>
      <button type="button" onClick={() => onClick(name)}>
        {name}
      </button>
    </>
  );
};
