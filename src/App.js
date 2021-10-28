import React from 'react';
import GlobalStyle from '@/GlobalStyle';
import { RecoilRoot } from 'recoil';
import Main from '@/Page/Main';
function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Main />
    </RecoilRoot>
  );
}

export default App;
