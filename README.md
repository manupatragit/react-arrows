# react-arrows
React library for creating SVG arrow between two HTML elements. Positions of elements are observed, so when they change arrow will rerender.

!["Arrow"](docs/arrow-1.png?raw=true "Arrow example")

# Installation

```sh
npm install react-arrows
```

## CSS styles
Styles should be added to make arrow visible. Feel free to change them.

```css
.arrow {
  pointer-events: none;
}

.arrow__path {
  stroke: #000;
  fill: transparent;
  stroke-dasharray: 4 2;
}

.arrow__head line {
  stroke: #000;
  stroke-width: 1px;        
}
```

# How to use it

```js
import Arrow, { DIRECTION } from 'react-arrows'

<Arrow
  className='arrow'
  from={{
    direction: DIRECTION.TOP,
    node: () => document.getElementById('from'),
    translation: [-0.5, -1],
  }}
  to={{
    direction: DIRECTION.RIGHT,
    node: () => document.getElementById('to'),
    translation: [0.9, 1],
  }}
/>
```

Could be also used from `window.arrowCreate()` -> https://github.com/sasza2/arrows

## `from` / `type` property

```typescript
interface Point {
  direction: Direction;
  node: HTMLElement; // Could be also function that's returning HTMLElement
  translation: Array<number>;
}
```

`translation` is array of two numbers `[x, y]` like `[-0.5, 1.3]` which are used by Bezier curve. `x` and `y` are offset of Bezier control point. Position of control point is calculated by function:

```javascript
{
  x: point.x + viewport.width * point.translation[0],
  y: point.y + viewport.height * point.translation[1],
}
```

- `point.x` / `point.y` are from / to position,
- `viewport` is size between points,
- `point.translation` is array from above.

translation could be tested in `test/form/index.html` -> https://github.com/sasza2/arrows

```typescript
enum Direction {
  TOP_LEFT: 'top-left',
  TOP: 'top',
  TOP_RIGHT: 'top-right',
  RIGHT: 'right',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM: 'bottom',
  BOTTOM_RIGHT: 'bottom-right',
  LEFT: 'left',
}
```

Direction - Position of `Point` in HTMLElement from/to.

# Building
```sh
npm run build
```
