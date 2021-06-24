import { useContext } from 'react';
import Image from 'next/image';
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
          <Image src="/icons/close.svg" alt="Fechar" width={40} height={40} />
        </button>
      </Container>
    </Overlay>
  );
};

export default LevelUpModal;
