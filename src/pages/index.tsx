import { GetServerSideProps } from 'next';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import HomePage from '../templates/HomePage';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0),
    },
  };
};

const Home = (props: HomeProps) => (
  <ChallengesProvider
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
  >
    <HomePage />
  </ChallengesProvider>
);

export default Home;
