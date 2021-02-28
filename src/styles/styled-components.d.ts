import 'styled-componets';

interface Theme {
  colors: {
    background: string;
    backgroundLight: string;
    backgroundOverlay: string;
    grayLine: string;
    text: string;
    textHighlight: string;
    title: string;
    red: string;
    green: string;
    purple: string;
    purpleDark: string;
    twitter: string;
  };
  gradient: string;
  boxShadow: string;
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
