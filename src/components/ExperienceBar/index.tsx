import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, CurrentExperience } from './styles';

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext,
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container>
      <span>0 XP</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <CurrentExperience style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} XP
        </CurrentExperience>
      </div>
      <span>{experienceToNextLevel} XP</span>
    </Container>
  );
};

export default ExperienceBar;
