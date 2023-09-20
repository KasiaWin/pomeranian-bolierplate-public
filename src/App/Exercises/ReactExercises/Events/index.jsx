import React, { useState } from 'react';

import './style.css';

//1. dodać element <button>Jakiś tekst<button/>
//2. Import useState z react
//3. zadeklarowanie zmiennej, któ©a będzie przetrzymywać zmienną stanu
//4. zadeklarowanie zmiennej, któ©a będzie funkcją zmieniającą stan
//5. Ostylować
export function Events() {
  const [text, setText] = useState('Nie kliknięto we mnie');
  function handleOnClick() {
    setText('Kliknięto we mnie');
  }
  return (
    <div>
      <h2>Cześć!</h2>

      <button onClick={handleOnClick}>{text}</button>
    </div>
  );
}
// zmienna jest zawsze w nawiasach wąsatych
