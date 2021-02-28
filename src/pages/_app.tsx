import { AppProps } from 'next/app';
import { ThemeProvider } from '../contexts/ThemeContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
