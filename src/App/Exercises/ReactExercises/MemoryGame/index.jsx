import { useEffect, useState } from 'react';

import molesvg from '../../../Images/mole.svg';

import './styles.css';

const fields = [
  { id: 1, hasClicked: false },
  { id: 2, hasClicked: false },
  { id: 3, hasClicked: false },
  { id: 4, hasClicked: false },
  { id: 5, hasClicked: false },
  { id: 6, hasClicked: false },
  { id: 7, hasClicked: false },
  { id: 8, hasClicked: false },
  { id: 9, hasClicked: false },
  { id: 10, hasClicked: false },
  { id: 11, hasClicked: false },
  { id: 12, hasClicked: false },
  { id: 13, hasClicked: false },
  { id: 14, hasClicked: false },
  { id: 15, hasClicked: false },
  { id: 16, hasClicked: false },
  { id: 17, hasClicked: false },
  { id: 18, hasClicked: false },
  { id: 19, hasClicked: false },
  { id: 20, hasClicked: false },
];

const game_time = 120;

export const MemoryGame = () => {
  const [gameFields, setGameFields] = useState(fields);
  const [time, setTime] = useState(game_time);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [isGameEnded, setIsGameEnded] = useState(false);

  const handleStartGame = () => {
    setIsGameStarted(true);
  };

  const handleStopGame = () => {};

  return (
    <div className="memory-game">
      <h2>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </h2>

      {isGameStarted ? (
        <div>
          <div>
            {/* CZAS do końca  */}
            <div className="option-wrapper">
              <div className="title">Czas do końca</div>
              <div className="content">
                <button disabled={true}>{time}</button>
              </div>
            </div>

            {/* WYNIK */}
            <div className="option-wrapper">
              <div className="title">Wynik</div>
              <div className="content">
                <button disabled={true}>{score}</button>
              </div>
            </div>

            {/* PRZYCISKI STERUJĄCE */}
            <div className="option-wrapper">
              <div className="title">Przyciski sterujące</div>
              <div className="content">
                <button className="stop" onClick={handleStopGame}>
                  Stop
                </button>
              </div>
            </div>
          </div>

          {/* WIDOK ŁAPANIA KRETA */}
          <div className="field">
            {gameFields.map((field) => {
              return (
                <div className="field">
                  <h2>A</h2>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="memory-game">
          {isGameEnded && (
            <div className="game-over">
              Gratulacje, zdobyłeś {score} punktów
            </div>
          )}
          {/* CZAS gry */}
          <div className="option-wrapper">
            <div className="title">Czas gry</div>
            <div className="content">
              <button className="current">1:35</button>
            </div>
          </div>

          {/* liczba ruchów */}
          <div className="option-wrapper">
            <div className="title"></div>
            <div className="content">
              <button className="current">2</button>
            </div>
          </div>

          {/* PRZYCISKI STERUJĄCE */}
          <div className="option-wrapper">
            <div className="title">Przyciski sterujące</div>
            <div className="content">
              <button onClick={handleStartGame}>PASS</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
