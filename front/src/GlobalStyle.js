import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${emotionReset}

        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
        html,
        body,
        #root {
          height: 100%;
          width: 100%;
        }
      `}
    />
  );
};

export default GlobalStyle;
