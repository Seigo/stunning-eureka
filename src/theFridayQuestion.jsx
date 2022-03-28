'use strict';

import React, { useState } from "react";

const { isItFriday } = require("./core/fridayService");

function TheFridayQuestion() {
  const [today, setToday] = useState('');
  const [answer, setAnswer] = useState('');

  return (
    <div>
      <input 
        type='text' 
        value={today} 
        onChange={(v) => setToday(v.target.value)} 
      />
      <button onClick={() => setAnswer(isItFriday(today))}>
        Is it Friday?
      </button>
      <span>{answer}</span>
    </div>
  );
}

export default TheFridayQuestion