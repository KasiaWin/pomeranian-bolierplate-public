import { useState, useEffect } from 'react';
import './style.css';
import toggleArrow from '../../../Images/toggle-arrow.svg';
import { ToDoFormularz } from '../ToDoWithServer/ToDoFormularz/ToDoFormularz';

import tickIcon from '../../../Images/tick.svg';
import pencilIcon from '../../../Images/pencil.svg';
import trashIcon from '../../../Images/trash.svg';

export const ToDoWithServer = () => {
  const [data, setData] = useState([]);
  const [isLoadData, setIsLoadData] = useState(false);

  const handleLoadData = () => {
    setIsLoadData(true);
    fetch('http://localhost:3333/api/todo')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  };

  return (
    <div>
      <h2>
        <img
          src={toggleArrow}
          className="faqimg"
          alt="Tu powinien być obrazek"
        />
        TODO
      </h2>

      <h3>
        Tu znajdziesz listę swoich zadań{' '}
        <button className="plusButton" onClick={handleLoadData}>
          +
        </button>
      </h3>

      {isLoadData ? (
        <ul className="toDoList-wrapper">
          {data?.map((todo, index) => (
            <li key={index}>
              <div>{todo.title}</div>
              <div>{todo.author}</div>
              <div>{todo.note}</div>
              <div className="Icons-wrapper">
                <img
                  src={tickIcon}
                  className="tickimg"
                  alt="Tu powinien być obrazek"
                />
                <img
                  src={pencilIcon}
                  className="pencilimg"
                  alt="Tu powinien być obrazek"
                />
                <img
                  src={trashIcon}
                  className="trashimg"
                  alt="Tu powinien być obrazek"
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <button className="dodajButton" onClick={handleLoadData}>
            Dodaj
          </button>
          {!isLoadData && <ToDoFormularz />}
        </div>
      )}
    </div>
  );
};
