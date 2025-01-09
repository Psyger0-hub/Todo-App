import React from "react";

const Input = (props) => {
  return (
    <input
      style={{ ...props.style, padding: "0.5em", fontSize: "16px" }} // Default styling improvements
      type={props.type}
      onChange={props.handleOnChange}
      {...props} // Spread any other props passed to the input
    />
  );
};

export default Input;