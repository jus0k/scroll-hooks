<h1 align="center">Welcome to Scroll Hooks 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> React Hooks로 스크롤 애니메이션 구현하기

### ✨ [Demo](https://scroll-hooks.netlify.com/)

![ScreenShot](https://user-images.githubusercontent.com/43605468/71435743-b1e7ee00-272d-11ea-8d91-406039315b5f.png)

## Scroll Hooks

스크롤 시 동작하는 Fade In, Count, Clip Path 애니메이션을 React Hooks로 구현

<br />

### useScrollFadeIn

![useScrollFadeIn](https://user-images.githubusercontent.com/43605468/74002206-b866b800-49b1-11ea-900e-7ae690036066.gif)

스크롤 시 특정 방향에서 Fade In 하면서 나오는 애니메이션

**Usage**

```javascript
const element = useScrollFadeIn([direction], [duration], [delay]);
```

- direction(string): 엘리먼트가 나오는 방향 (up, down, left, right) `default value = 'up'`
- duration(number): 애니메이션의 총 동작 시간. second 단위 `default value = 1`
- delay(number): 애니메이션 지연 시간. second 단위 `default value = 0`

**Example**

```javascript
const animatedItem = useScrollFadeIn('up', 1, 0);
...

// In JSX
<div {...animatedItem} />
```

<br />

### useScrollCount

![useScrollCount](https://user-images.githubusercontent.com/43605468/74001849-6a04e980-49b0-11ea-9d5f-48ba5a0fcee2.gif)

스크롤 시 정해놓은 값까지 카운트하는 애니메이션

**Usage**

```javascript
const element = useScrollCount([end], [start], [duration]);
```

- end(number): 카운트가 끝나는 숫자
- duration(number): 카운트가 시작하는 숫자 `default value = 0`
- duration(number): 애니메이션의 총 동작 시간. second 단위 `default value = 3`

**Example**

```javascript
const animatedItem = useScrollCount(200, 0, 3);
...

// In JSX
<div {...animatedItem} />
```

<br />

### useScrollClipPath

![useScrollClipPath](https://user-images.githubusercontent.com/43605468/74001833-62dddb80-49b0-11ea-82c3-215a3545c320.gif)

스크롤 시 특정 방향으로 펼쳐지는 애니메이션

**Usage**

```javascript
const element = useScrollClipPath([direction], [duration], [delay]);
```

- direction(string): 엘리먼트가 펼쳐지는 방향 (up, down, left, right) `default value = 'left'`
- duration(number): 애니메이션의 총 동작 시간. second 단위 `default value = 1`
- delay(number): 애니메이션 지연 시간. second 단위 `default value = 0`

**Example**

```javascript
const animatedItem = useScrollClipPath('left', 1, 0);
...

// In JSX
<div {...animatedItem} />
```

<br />

## Install

```sh
yarn
```

## Usage

```sh
yarn start
```

## Author

👤 **Jusung Kim**

- Website: https://jusungkim.kr/
- Github: [@jus0k](https://github.com/jus0k)

## Show your support

Give a ⭐️ if this project helped you!
