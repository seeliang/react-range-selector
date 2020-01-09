import React from 'react';

const Button = ({name, action}) =>(
  <button onClick={action}>
    {name}
  </button>
);

export default Button;
