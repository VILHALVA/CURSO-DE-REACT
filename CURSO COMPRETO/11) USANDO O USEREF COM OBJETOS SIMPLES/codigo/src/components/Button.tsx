import React, { useCallback } from 'react';

const Button = ({ onClick, children }) => {
  // Utilize useCallback para memoizar o callback onClick
  const handleClick = useCallback(() => {
    onClick(); // Chama o callback recebido como prop
  }, [onClick]); // onClick é a única dependência

  return (
    <button onClick={handleClick}>{children}</button>
  );
};

export default Button;
