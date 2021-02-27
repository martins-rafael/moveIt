import Head from 'next/head';
import { CountdownProvider } from '../../contexts/CountdownContext';

import Sidebar from '../../components/Sidebar';
import ExperienceBar from '../../components/ExperienceBar';
import Profile from '../../components/Profile';
import CompletedChallenges from '../../components/CompletedChallenges';
import Countdown from '../../components/Countdown';
import ChallengeBox from '../../components/ChallengeBox';

import { Container } from './styles';

const HomePage = () => (
  <Container className="container">
    <Head>
      <title>Início | Move.it</title>
    </Head>

    <Sidebar />

    <ExperienceBar />

    <CountdownProvider>
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div>
          <ChallengeBox />
        </div>
      </section>
    </CountdownProvider>
  </Container>
);

export default HomePage;
