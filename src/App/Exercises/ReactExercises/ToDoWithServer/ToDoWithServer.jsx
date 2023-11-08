import { useState, useEffect } from 'react';
import './style.css';
import toggleArrow from '../../../Images/toggle-arrow.svg';
import { ToDoFormularz } from '../ToDoWithServer/ToDoFormularz/ToDoFormularz';
import { ToDoItem } from './ToDoItem';
import { requestHandler } from '../ToDoWithServer/helpers';

export const ToDoWithServer = () => {
  const [data, setData] = useState([]);
  const [editedItem, setEditedItem] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [error, setError] = useState(null);

  const handleLoadData = () => {
    console.log('triggered...?');
    setError(null);
    requestHandler('GET')
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError('Nie udało się pobrać listy zadań');
      });
  };
  const handleForm = () => {
    setFormVisible(!formVisible);
  };

  useEffect(() => {
    handleLoadData();
  }, []);

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
      {formVisible && (
        <ToDoFormularz
          editedItem={editedItem}
          setEditedItem={setEditedItem}
          getData={handleLoadData}
          handleFormVisibilty={handleForm}
        />
      )}
      {!formVisible && (
        <>
          <div>
            Tu znajdziesz listę swoich zadań{' '}
            <button className="plusButton" onClick={handleForm}>
              +
            </button>
          </div>
          <ul className="toDoList-wrapper">
            {data?.map(({ id, title, author, note, doneDate = '', isDone }) => (
              <ToDoItem
                key={id}
                id={id}
                title={title}
                author={author}
                note={note}
                doneDate={doneDate}
                isDone={isDone}
                getData={handleLoadData}
                handleForm={handleForm}
                setEditedItem={setEditedItem}
              />
            ))}
          </ul>

          <button onClick={handleForm}>Dodaj</button>
          {error && <div>{error}</div>}
        </>
      )}
    </div>
  );
};

//  <button onClick={handleStopGame}>Stop</button>
