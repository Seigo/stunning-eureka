'use strict';

import React, { useState } from "react";
import { calculate } from "./core/qtoCusta";

function QtoCusta() {
  const [produto, setProduto] = useState('');
  const [qtd, setQtd] = useState('');
  const [price, setPrice] = useState('');
  const [answer, setAnswer] = useState('');

  return (
    <div>
      <span>Produto</span>
      <input 
        type='text' 
        value={produto} 
        onChange={(v) => setProduto(v.target.value)} 
      />
      <span>qtd</span>
      <input 
        type='text' 
        value={qtd} 
        onChange={(v) => setQtd(v.target.value)} 
      />
      <span>price</span>
      <input 
        type='text' 
        value={price} 
        onChange={(v) => setPrice(v.target.value)} 
      />
      <button onClick={() => setAnswer(calculate(produto, qtd, price))}>
        Results?
      </button>
      <span>{answer}</span>
    </div>
  );
}

export default QtoCusta