import { useState, useEffect } from 'react';
import './style.css';
import toggleArrow from '../../../Images/toggle-arrow.svg';
import { ToDoFormularz } from '../ToDoWithServer/ToDoFormularz/ToDoFormularz';
import { Button } from './Button/button';

import tickIcon from '../../../Images/tick.svg';
import pencilIcon from '../../../Images/pencil.svg';
import trashIcon from '../../../Images/trash.svg';
import { Diversity1 } from '@mui/icons-material';

export const ToDoWithServer = () => {
  const [data, setData] = useState([]);
  const [formVisible, setFormVisible] = useState(false);

  const handleLoadData = () => {
    requestHandler('GET')
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err, 'err');
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
            <button onClick={handleForm}>+</button>
          </div>
          <ul className="toDoList-wrapper">
            {data?.map(({ id, title, author, note, doneDate = '', isDone }) => (
              <ToDoItem
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
          <div className="icon-wrapper">
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

          <button onClick={handleForm}>Dodaj</button>
        </>
      )}
    </div>
  );
};

//  <button onClick={handleStopGame}>Stop</button>
