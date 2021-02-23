import { Container, CurrentExperience } from './styles';

const ExperienceBar = () => (
  <Container>
    <span>0 XP</span>
    <div>
      <div style={{ width: '50%' }} />
      <CurrentExperience style={{ left: '50%' }}>300 XP</CurrentExperience>
    </div>
    <span>600 XP</span>
  </Container>
);

export default ExperienceBar;
