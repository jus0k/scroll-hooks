<h1 align="center">Scroll Hooks 👋</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/scroll-hooks"><img alt="npm" src="https://img.shields.io/npm/v/scroll-hooks.svg"></a>
  <a href="https://www.npmjs.com/package/scroll-hooks"><img alt="downloads" src="https://img.shields.io/npm/dm/scroll-hooks.svg"></a>
  <img alt="license" src="https://img.shields.io/npm/l/scroll-hooks.svg">
  <img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/scroll-hooks">
</p>

> React Hooks로 스크롤 애니메이션 구현하기
> A tiny set of React hooks for scroll-triggered animations — fade in, count up, clip-path reveal.

### ✨ [Demo](https://scroll-hooks.netlify.com/)

![ScreenShot](https://user-images.githubusercontent.com/43605468/71435743-b1e7ee00-272d-11ea-8d91-406039315b5f.png)

## Install

```sh
npm install scroll-hooks
# or
yarn add scroll-hooks
# or
pnpm add scroll-hooks
```

`react@^16.8.0 || ^17 || ^18 || ^19` is a peer dependency.

## Hooks

### `useScrollFadeIn`

![useScrollFadeIn](https://user-images.githubusercontent.com/43605468/74002206-b866b800-49b1-11ea-900e-7ae690036066.gif)

스크롤 시 특정 방향에서 Fade In 하면서 나오는 애니메이션.

```jsx
import { useScrollFadeIn } from 'scroll-hooks';

function Hero() {
  const animatedItem = useScrollFadeIn('up', 1, 0);
  return <div {...animatedItem}>Hello</div>;
}
```

| Param | Type | Default | Description |
|---|---|---|---|
| `direction` | `'up' \| 'down' \| 'left' \| 'right'` | `'up'` | 엘리먼트가 나오는 방향 |
| `duration` | `number` | `1` | 애니메이션 시간 (초) |
| `delay` | `number` | `0` | 애니메이션 지연 (초) |

### `useScrollCount`

![useScrollCount](https://user-images.githubusercontent.com/43605468/74001849-6a04e980-49b0-11ea-9d5f-48ba5a0fcee2.gif)

스크롤 시 정해놓은 값까지 카운트하는 애니메이션. 카운트다운(`end < start`)도 지원합니다.

```jsx
import { useScrollCount } from 'scroll-hooks';

function Stats() {
  const counter = useScrollCount(630);
  return <span {...counter}>0</span>;
}
```

| Param | Type | Default | Description |
|---|---|---|---|
| `end` | `number` | — | 카운트가 끝나는 숫자 (필수) |
| `start` | `number` | `0` | 카운트가 시작하는 숫자 |
| `duration` | `number` | `3` | 애니메이션 시간 (초) |

### `useScrollClipPath`

![useScrollClipPath](https://user-images.githubusercontent.com/43605468/74001833-62dddb80-49b0-11ea-82c3-215a3545c320.gif)

스크롤 시 특정 방향으로 펼쳐지는 애니메이션. 부모 노드를 기준으로 동작하므로 컨테이너 안에 감싸서 사용하세요.

```jsx
import { useScrollClipPath } from 'scroll-hooks';

function Banner() {
  const animatedItem = useScrollClipPath('left', 1, 0);
  return (
    <div className="container">
      <img {...animatedItem} src="/hero.jpg" alt="" />
    </div>
  );
}
```

| Param | Type | Default | Description |
|---|---|---|---|
| `direction` | `'up' \| 'down' \| 'left' \| 'right'` | `'left'` | 펼쳐지는 방향 |
| `duration` | `number` | `1` | 애니메이션 시간 (초) |
| `delay` | `number` | `0` | 애니메이션 지연 (초) |

## TypeScript

타입 정의는 패키지에 포함되어 있어 별도 설치가 필요하지 않습니다. 모든 hook은 generic으로 element 타입을 받을 수 있습니다.

```ts
import { useScrollFadeIn } from 'scroll-hooks';

const heading = useScrollFadeIn<HTMLHeadingElement>('up', 1, 0);
```

## Local development

```sh
git clone https://github.com/jus0k/scroll-hooks.git
cd scroll-hooks
npm install
npm run build

cd example
npm install
npm start
```

## Author

👤 **Jusung Kim**

- Website: https://jusungkim.kr/
- Github: [@jus0k](https://github.com/jus0k)

## Show your support

Give a ⭐️ if this project helped you!

## License

MIT © Jusung Kim
