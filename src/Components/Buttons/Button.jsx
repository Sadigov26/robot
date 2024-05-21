import React from "react";

const Buttons = ({ loading, onclick, text }) => {
  return (
    <div>
      <button disabled={loading} onClick={onclick}>
        {text}
      </button>
    </div>
  );
};

export default Buttons;
