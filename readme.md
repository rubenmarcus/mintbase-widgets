![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Mintbase Widgets

This is a on-going project where you can load components straight from Mintbase and Near.

# Components

## My Nft Collection 

This is the widget to showcase your NFT Collection @ NEAR Blockchain.

## live example: 
https://rub3n.xyz/

### props:

- user: mandatory
- theme: optional: 'dark'

### install on react

 In the present moment React only working with pure React Webpack, not working with Vite or Next.js

```npm install mintbase-widgets-react```

```ts
import { MyNftCollection } from 'mintbase-widgets-react';
```

```js
<MyNftCollection user={yourNearAccount} theme="dark">
```

## next.js

- install
``` npm install mintbase-widgets```

- add this code to app.tsx 

```jsx 
import { applyPolyfills, defineCustomElements } from 'mintbase-widgets/loader'

  useLayoutEffect(() => {
    applyPolyfills().then(() => {
      defineCustomElements(window)
    })
  }, [])
```


- add to global.d.ts
 
```ts 
declare namespace JSX {
  interface IntrinsicElements {
      'my-nft-collection': { 'user': string , 'theme': string};
  }
}
```

- use it:

```jsx
    <my-nft-collection user="your near username wallet" theme="dark"></my-nft-collection>
```

### use with vanillajs and html

add script tag on head:

```js
<script type='module' src="https://unpkg.com/mintbase-widgets@0.0.8/dist/mintbase-widgets/mintbase-widgets.esm.js" ></script>
```


add web component to html

```html
<my-nft-collection user={yourNearAccount} theme="dark"></my-nft-collection>
```
