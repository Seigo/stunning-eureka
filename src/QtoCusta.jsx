'use strict';

import React, { useState, useEffect } from "react";
import { calculate } from "./core/qtoCusta";

function QtoCusta() {
  const [produto, setProduto] = useState('');
  const [qtd, setQtd] = useState('');
  const [price, setPrice] = useState('');
  const [answer, setAnswer] = useState([]);
  const [answerList, setAnswerList] = useState(null);
  useEffect(function () {
    console.log("alguma coisa")
    setAnswerList ((
      <div>
        {answer.map(function (x) {
          return (
            <div>
              <span>{x}</span> <br />
            </div>
          )
        })}
      </div>
    ))
  },
    [answer]
  )

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
      <button onClick={() => {
        let resultsList = [...answer, calculate(produto, qtd, price)];
        setAnswer(resultsList)
        }}>

        Results?
      </button>
      <br />

      <span>{answerList}</span>
    </div>
  );
}

export default QtoCusta