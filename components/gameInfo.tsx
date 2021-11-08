import Image from 'next/image';

import pause from '../assets/pause.png';
import play from '../assets/play-button.png';
import reset from '../assets/reset.png';

export default function GameInfo({
    getColors,
    setTime,
    setPoints,
    setIsGamePaused,
    setIsGameRunning,
    isGamePaused,
    points,
    gameHasBegun,
    setGameHasBegun
}) {

    function resetGame() {
        getColors();
        setTime(3);
        setPoints(0);
        setIsGamePaused(false);
        setIsGameRunning(true);
    }
    
    function pauseGame() {
        if(isGamePaused) {
            setIsGamePaused(false);
        } else {
            setIsGamePaused(true);
        }
    }    

    return (
        <section className="infoGame">
            <h1>Pontos: {points}</h1>
            {
                gameHasBegun ? (
                    <>
                    {
                        isGamePaused ? (
                            <Image 
                                src={play} 
                                alt="Ícone para dar play no jogo" 
                                className="image"
                                onClick={() => pauseGame()}
                                width={50}
                                height={50}
                            />
                        ) : (
                            <Image 
                                src={pause} 
                                alt="Ícone para pausar no jogo" 
                                className="image"
                                onClick={() => pauseGame()}
                                width={50}
                                height={50}
                            />
                        )
                    }
                        <Image 
                            src={reset} 
                            alt="Ícone para resetar o jogo" 
                            className="image"
                            onClick={() => resetGame()}
                            width={60}
                            height={60}
                        />
                    </>
                ) : (
                    <button onClick={() => setGameHasBegun(true)}>Iniciar jogo</button>
                )
            }
        </section>
    );
}