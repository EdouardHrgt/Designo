<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap');
:root {
  /* COLORS */
  --peach: #e7816b;
  --peach-light: #ffad9b;
  --black: #1d1c1e;
  --dark-grey: #333136;
  --light-grey: #f1f3f5;
  --white: #ffff;

  /* FONTS */
  --h1-size: 48px;
  --h1-line: 48px;
  /* Mobile : size: 32px / space: 36px*/

  --h2-size: 40px;
  --h2-line: 48px;
  --h2-space: 2px;

  --h3-size: 20px;
  --h3-line: 26px;
  --h3-space: 5px;

  --body-size: 16px;
  --body-line: 26px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Jost', sans-serif;
}

img {
  max-width: 100%;
  display: block;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  display: inline-block;
  outline: none;
  border: none;
  background: transparent;
}

h1,
h2,
h3 {
  font-weight: 600;
}

p,
a {
  font-weight: 400;
}
</style>
