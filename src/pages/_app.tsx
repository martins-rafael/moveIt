import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import GlobalStyles from '../styles/global';

import { ChallengesProvider } from '../contexts/ChallengesContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  </ThemeProvider>
);

export default MyApp;
