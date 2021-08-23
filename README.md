vscode에 eslint랑 prettier 설치하시고 설정하시면 될 것 같습니다.

craco 이용해서 절대경로를 사용할 수 있도록 설정해두었습니다.
예시로 작성한 아래의 App.js 파일처럼 src내부의 폴더를 @/로 접근할 수 있습니다.

```js
import React from 'react';
import Module from '@/Component/Module';

function App() {
  return (
    <div>
      <Module></Module>
    </div>
  );
}

export default App;
```

폴더구조는 제가 임의로 나누었습니다.
좋은 의견이나 개선사항 말씀해주시면 같이 반영해도 좋을 것 같습니다.

## src/Component (@/Component)

- 재사용 가능한 컴포넌트들을 정의합니다.

## src/Layout (@/Layout)

- 페이지의 공통 부분을 정의합니다. ex) 상단바, 하단바 등..

## src/Page (@/Page)

- SPA개발에 있어 url에 따라 랜더링할 페이지들을 정의합니다. ex) home,board ...

## src/Util (@/Util)

- 공통적으로 쓰이는 유틸함수등을 정의합니다.

## src/reducer (@/reducer)

- redux에 쓰일 reducer를 정의합니다.

## src/saga (@/saga)

- redux-saga에 쓰일 saga를 정의합니다.

## naming

- @Component/Component처럼 index.js, style.js등의 네이밍을 사용하는 것이 협업하는데 있어서 좋을 것 같습니다.
