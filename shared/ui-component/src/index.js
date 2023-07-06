// import TestComponent from './components/test-component';

// export {
//   TestComponent
// }

import React from "react";

const UIExample = ({ text = "" }) => {
  return (
    <div>
      <h1>Shared UI library {text}</h1>
    </div>
  );
};

export default UIExample;
