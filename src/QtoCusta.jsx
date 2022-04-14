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
        name="product"
        type='text' 
        value={produto} 
        onChange={(v) => setProduto(v.target.value)} 
      />
      <span>  qtd em ml ou g</span>
      <input 
        name="qtd"
        type='number'
        value={qtd} 
        onChange={(v) => {
          let banana = v.target.value.replace('.', '')
          setQtd(banana)
        
        }} 
      />
      <span>  price</span>
      <input 
        name="price"
        type='text' 
        value={price} 
        onChange={(v) => setPrice(v.target.value)} 
      />
      <button
        name="submit-button"
        onClick={() => {
          let resultsList = [...answer, calculate(produto, qtd, price)];
          setAnswer(resultsList)
        }}
      >
        Results?
      </button>
      <br />

      <span
        name="results-list"
      >
        {answerList}
      </span>
    </div>
  );
}

export default QtoCusta