import React from "react";

const LeftTitle = ({ onPreviousPageClick, isPreviousPageDisabled }) => {
  return (
    <div className="flex flex-row justify-between items-center m-2">
      <h2 className="text-2xl font-semibold  ml-2 text-Gunmetal/2">
        Character #1
      </h2>
      <button
        onClick={onPreviousPageClick}
        disabled={isPreviousPageDisabled}
        className={`circular-button ${
          isPreviousPageDisabled ? "circular-button-disabled" : ""
        }`}
      >
        -
      </button>
    </div>
  );
};

export default LeftTitle;
