import React from "react";

const HeaderBtn = ({ buttonAction, isButtonDisabled, titleText, buttonText, textAlignment }) => {
    return (
      <div className={`flex flex-row justify-between items-center m-2`}>
        {textAlignment === 'left' && (
          <h2 className="text-xl font-semibold m-2 ml-2 text-Gunmetal/2">{titleText}</h2>
        )}
        <button
          onClick={buttonAction}
          disabled={isButtonDisabled}
          className={`circular-button ${isButtonDisabled ? "circular-button-disabled" : ""}`}
        >
          {buttonText}
        </button>
        {textAlignment === 'right' && (
          <h2 className="text-xl font-semibold m-2 text-Gunmetal/2 mr-2">{titleText}</h2>
        )}
      </div>
    );
  };

  export default HeaderBtn;