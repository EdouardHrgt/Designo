<template>
  <main>
    <router-view />
  </main>
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

  --navlinks-size: 14px;
  --navlinks-line: 14px;
  --navlinks-space: 2px;
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
  color: var(--dark-grey);
  font-size: var(--navlinks-size);
  line-height: var(--navlinks-line);
  letter-spacing: var(--navlinks-space);
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
  font-size: var(--body-size);
  line-height: var(--body-line);
}

main {
  max-width: 90%;
  margin: auto;
  position: relative;
  min-height: 100dvh;
}

.flex {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 868px) {
  main {
    max-width: 100%;
  }
}
</style>
