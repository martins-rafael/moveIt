import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { Container, CountdownButton } from './styles';

let countdownTimeout: NodeJS.Timeout;

const Countdown = () => {
  const { startNewChallenge } = useContext(ChallengesContext);
  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minutesLeft, minutesRight] = `0${minutes}`.slice(-2).split('');
  const [secondsLeft, secondsRight] = `0${seconds}`.slice(-2).split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time, startNewChallenge]);

  return (
    <>
      <Container>
        <div>
          <span>{minutesLeft}</span>
          <span>{minutesRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </Container>

      {hasFinished ? (
        <CountdownButton disabled active={isActive}>
          Ciclo encerrado
          <img src="icons/check-circle.svg" alt="Completado" />
        </CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButton active={isActive} onClick={resetCountdown}>
              Abandonar ciclo
              <img src="icons/close.svg" alt="Abandonar" />
            </CountdownButton>
          ) : (
            <CountdownButton active={isActive} onClick={startCountdown}>
              Iniciar um ciclo
              <img src="icons/play-arrow.svg" alt="Iniciar" />
            </CountdownButton>
          )}
        </>
      )}
    </>
  );
};

export default Countdown;
