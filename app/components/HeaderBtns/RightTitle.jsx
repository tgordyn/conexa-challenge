import React from "react";

const RightTitle = ({ nextPageClick, isNextPageDisabled }) => {
  return (
    <div className="flex flex-row justify-between items-center m-2">
      <button
        onClick={nextPageClick}
        disabled={isNextPageDisabled}
        className={`circular-button ${
          isNextPageDisabled ? "circular-button-disabled" : ""
        }`}
      >
        +
      </button>
      <h2 className="text-2xl font-semibold  m-2 text-Gunmetal/2 mr-2">
        Character #2
      </h2>
    </div>
  );
};

export default RightTitle;
