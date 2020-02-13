import React, { useState } from 'react';

// Não funciona em funções comuns Javascript
const funcaoJavascriptComum = () => {
  // const [isABoolean, setIsABoolean] = useState(false);
};

// Funciona dentro de funções customizadas -> Capítulo próprio
const useFuncaoCustomizadaHooks = () => {
  const [isABoolean, setIsABoolean] = useState(false);
};

// Funciona dentro de funções React
const InsideAReactFunction = () => {
  const [isABoolean, setIsABoolean] = useState(false);

  return <div></div>;
};

export default InsideAReactFunction;
