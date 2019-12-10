import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>Scroll Hooks</div>;
    </ThemeProvider>
  );
}

export default App;
