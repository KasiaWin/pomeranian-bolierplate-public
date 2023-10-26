import { useState, useEffect } from 'react';
const NickName = [
  { id: 1, NickName: 'Zenek' },
  { id: 2, NickName: 'Felek' },
  { id: 3, NickName: 'Donal' },
];
export const Exercise = () => {
  const [count, setCount] = useState(0);

  const handleUpdateCount = () => {
    setCount(count + 1);
  };

  const handleResetCount = () => {
    setCount(0);
    // usuń element z localStorage - bo wykonaliśmy operacje zerowania count
    localStorage.removeItem('count');
  };

  useEffect(() => {
    // pobierz wartość count z localStorage
    const storedCount = localStorage.getItem('count');

    // sprawdź czy istnieje taki klucz w lokaStorage
    if (storedCount) {
      // jeżeli istnieje to ustaw wartość count jako state komponentu
      // Number() - konwertuje string na number - bo localStorage zwraca string
      setCount(Number(storedCount));
    }
  }, []);

  useEffect(() => {
    if (count === 0) return;
    // zapisz wartość count do localStorage na każdej zmianie stanu count
    localStorage.setItem('count', count);
  }, [count]);

  return (
    <div>
      {' '}
      <label>
        NICK
        <input name="nickName" />
      </label>
      <div>{count}</div>
      <button onClick={handleUpdateCount}>DODAJ</button>
      <button onClick={handleResetCount}>Reset</button>
    </div>
  );
};
