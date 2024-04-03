import React, { useEffect, useRef } from 'react';

const MyForm = () => {
  // Criando uma referência para o elemento de entrada
  const inputRef = useRef(null);

  // Utilizando o useEffect para focar o campo de entrada quando o componente for montado
  useEffect(() => {
    inputRef.current.focus();
  }, []); // O array de dependências vazio garante que o efeito só seja executado uma vez, após a montagem do componente

  return (
    <form>
      <label>
        Nome:
        {/* Associando o inputRef ao campo de entrada */}
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default MyForm;
