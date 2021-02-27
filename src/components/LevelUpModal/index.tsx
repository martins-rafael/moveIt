import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { Container, Overlay } from './styles';

const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>

        <button onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar" />
        </button>
      </Container>
    </Overlay>
  );
};

export default LevelUpModal;
