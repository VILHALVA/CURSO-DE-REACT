import React, { forwardRef } from 'react';

// Utilizando forwardRef para permitir o encaminhamento do ref
const InputComponent = forwardRef((props, ref) => {
  return (
    <input ref={ref} {...props} />
  );
});

export default InputComponent;
