import React from 'react';
import GlobalStyle from '@/GlobalStyle';
import { RecoilRoot } from 'recoil';
import Main from '@/Page/Main';
import { BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Route path="/" component={Main} />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
