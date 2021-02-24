import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import {
  Container,
  ChallengeNotActive,
  ChallengeActive,
  ChallengeButton,
} from './styles';

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <Container>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} XP</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Ganhe XP" />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <ChallengeButton onClick={resetChallenge} result={'failed'}>
              Falhei
            </ChallengeButton>
            <ChallengeButton result={'succeeded'}>Completei</ChallengeButton>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber desafios</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando os desafios.
          </p>
        </ChallengeNotActive>
      )}
    </Container>
  );
};

export default ChallengeBox;
