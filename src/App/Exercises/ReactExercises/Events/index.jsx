import React, { useState } from 'react';

import './style.css';

//1. Dodać nowy useState do liczenia
//2. Inkrementować nową zmienną counter po każdym kliknięciu
//3. Wyświetlić ile razy został kliknięty
export function Events() {
  const [text, setText] = useState('Nie kliknięto we mnie');
  const [counter, setCounter] = useState(0);
  function handleOnClick() {
    // setCounter(counter + 1);
    setText('Kliknięto we mnie');

    if (counter >= 3) {
      setCounter((counter) => counter + 2);
    } else {
      setCounter((counter) => counter + 1);
    }
  }
  return (
    <div>
      <h2>Cześć!</h2>

      <button onClick={handleOnClick}>
        <span>{text}</span> {counter > 0 && <span>{counter} razy</span>}
      </button>
    </div>
  );
}
// zmienna jest zawsze w nawiasach wąsatych
