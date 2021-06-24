import { useContext } from 'react';
import Image from 'next/image';

import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import {
  Container,
  ChallengeNotActive,
  ChallengeActive,
  ChallengeButton,
} from './styles';

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } =
    useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSecceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <Container>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} XP</header>

          <main>
            <Image
              src={`/icons/${activeChallenge.type}.svg`}
              alt="Ganhe XP"
              width={140}
              height={112}
            />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <ChallengeButton onClick={handleChallengeFailed} result={'failed'}>
              Falhei
            </ChallengeButton>
            <ChallengeButton
              onClick={handleChallengeSecceeded}
              result={'succeeded'}
            >
              Completei
            </ChallengeButton>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber desafios</strong>
          <p>
            <Image
              src="/icons/level-up.svg"
              alt="Level Up"
              width={59}
              height={80}
            />
            Avance de level completando os desafios.
          </p>
        </ChallengeNotActive>
      )}
    </Container>
  );
};

export default ChallengeBox;
