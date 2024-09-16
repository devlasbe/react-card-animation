![NPM Downloads](https://img.shields.io/npm/dt/%40lasbe%2Freact-card-animation)

# @lasbe/react-card-animation

- [NPM](https://www.npmjs.com/package/@lasbe/react-card-animation)
- [Github](https://github.com/LasBe-code/react-card-animation)
- [Blog](https://lasbe.tistory.com/)

![react_card_animation](https://github.com/user-attachments/assets/5d3cdae5-d7d8-4853-9d61-434cf70cfa4d)

손쉽게 카드 뷰 컨테이너에 3D 인터렉션 애니메이션을 적용할 수 있는 리액트 패키지입니다.

### install

```bash
$ npm i @lasbe/react-card-animation
```

### example

```tsx
import { CardAnimation } from '@lasbe/react-card-animation';

export default function App() {
  return (
    <div>
      <CardAnimation>
        <div className={`w-[300px] h-[200px]`}>...</div>
      </CardAnimation>
      <CardAnimation angle={10}>
        <div className={`w-[300px] h-[200px]`}>...</div>
      </CardAnimation>
    </div>
  );
}
```

적용할 컨테이너 바깥에 `CardAnimation`을 감아줍니다.

### Props

| **Name** | **Value**            | **Default Value** | **description**                              |
| -------- | -------------------- | ----------------- | -------------------------------------------- |
| children | `React.ReactElement` | -                 | 애니메이션을 적용할 자식 컴포넌트            |
| angle    | `number`             | 30                | 애니메이션 회전 각도, 클 수록 더 많이 회전함 |
