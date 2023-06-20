import { ReactNode } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
const theme = {
  palette: {
    background: {
      main: '#E5E5E5',
    },
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#F5F5FA',
    },
    text: {
      title: '#283049',
      primary: '#676C7E',
      secondary: '#9B9EAC',
    },
    icon: {
      main: '#5A71E4',
    },
  },
};

interface IThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: IThemeProviderProps) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
