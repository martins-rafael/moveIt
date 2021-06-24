import { useContext } from 'react';
import Image from 'next/image';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container } from './styles';

const Profile = () => {
  const { level } = useContext(ChallengesContext);
  return (
    <Container>
      <Image
        className="avatar"
        src="https://github.com/martins-rafael.png"
        alt="Rafael Martins"
        width={60}
        height={80}
      />

      <div>
        <strong>Rafael Martins</strong>
        <p>
          <Image src="/icons/level.svg" alt="Level" width={14} height={16} />
          Level {level}
        </p>
      </div>
    </Container>
  );
};

export default Profile;
