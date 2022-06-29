import React from "react";
import "./textArea.css";

const TextArea = ({ ...rest }) => {
  return (
    <div>
      <textarea className="text-area" {...rest}></textarea>
    </div>
  );
};

export default TextArea;
