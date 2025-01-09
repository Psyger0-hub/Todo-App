import React from "react";
import { buttonStyle } from "../Styles/style";

const Button = (props) => {
  const { text, handleOnClick, ownStyle, ...rest } = props;
  
  return (
    <button
      style={{
        ...buttonStyle, // Default style from style.js
        ...ownStyle,    // Custom style passed as prop
      }}
      onClick={handleOnClick}
      {...rest} // Spread any other props passed to the button
    >
      {text}
    </button>
  );
};

export default Button;
