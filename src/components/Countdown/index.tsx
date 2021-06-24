import { useContext } from 'react';
import Image from 'next/image';
import { RiCloseFill } from 'react-icons/ri';

import { CountdownContext } from '../../contexts/CountdownContext';

import { Container, CountdownButton } from './styles';

const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minutesLeft, minutesRight] = `0${minutes}`.slice(-2).split('');
  const [secondsLeft, secondsRight] = `0${seconds}`.slice(-2).split('');

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
          <Image
            src="/icons/check-circle.svg"
            alt="Completado"
            width={20}
            height={20}
          />
        </CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButton active={isActive} onClick={resetCountdown}>
              Abandonar ciclo
              <RiCloseFill />
            </CountdownButton>
          ) : (
            <CountdownButton active={isActive} onClick={startCountdown}>
              Iniciar um ciclo
              <Image
                src="/icons/play-arrow.svg"
                alt="Iniciar"
                width={24}
                height={24}
              />
            </CountdownButton>
          )}
        </>
      )}
    </>
  );
};

export default Countdown;
