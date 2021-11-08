import { useState, useEffect } from 'react';
import axios from 'axios';

import GameInfo from '../components/gameInfo';
import GameColors from '../components/gameColors';
import GameRules from '../components/gameRules';
import GameTimer from '../components/gameTimer';

export default function Home() {

  const [points, setPoints] = useState(0);
  const [colors, setColors] = useState(null);
  const [time, setTime] = useState(3);
  const [isGameRunning, setIsGameRunning] = useState(true);
  const [isGamePaused, setIsGamePaused] = useState(false);
  const [gameHasBegun, setGameHasBegun] = useState(false);

  useEffect(() => {
    getColors();
  }, [points]);

  useEffect(() => {
    let timerRunning = null;
    if(!isGamePaused && gameHasBegun) {
      timerRunning = setInterval(() => {
        if(time !== 0) { 
          setTime(time - 1);
        }
      }, 1000)
      if(time === 0) {
        alert('cabooooo o tempoooo');
        setIsGameRunning(false);
      }
    }
    return () => { 
      clearInterval(timerRunning);
    };
  }, [time, isGamePaused, gameHasBegun]);

  async function getColors() {
    const resp = await axios.get("http://localhost:3000/api/randomNumber");
    const data = await resp.data;
    setColors(data);
  }

  function choosedCard(color) {
    if(isGameRunning) {
      colors.allColors.map(item => {
        if(color === item.color) {
          if(!isGamePaused) {
            if(colors.rightColor.name === item.name) {
              setPoints(points + 1);
              setTime(points >= 10 ? 2 : 3);
            } else {
              setPoints(points - 3);
              setTime(points >= 10 ? 2 : 3);
            }
          }
        }
      });
    }
  }

  return (
    <>
      {
        colors === null ? null : (
          <main>
            <GameInfo 
              getColors={getColors}
              setTime={setTime}
              setPoints={setPoints}
              setIsGamePaused={setIsGamePaused}
              setIsGameRunning={setIsGameRunning}
              isGamePaused={isGamePaused}
              points={points}
              gameHasBegun={gameHasBegun}
              setGameHasBegun={setGameHasBegun}
            />
            {
              gameHasBegun ? <GameTimer time={time} /> : null 
            }
            <div className="containerGame">
              {
                gameHasBegun ? 
                  <GameColors colors={colors} choosedCard={choosedCard} /> : 
                  <GameRules />
              }
            </div>
          </main>
        )
      }
    </>
  )
}
