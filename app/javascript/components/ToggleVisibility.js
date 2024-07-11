import React, { useState } from "react";

const ToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && <p>This is hidden text.</p>}
      <button onClick={toggleVisibility}>
        Toggle Visibility
      </button>
    </div>
  );
};

export default ToggleVisibility;
