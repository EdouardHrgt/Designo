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
  --line: #979797;

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

  --radius: 15px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Jost', sans-serif;
}

body {
  background-color: var(--white);
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
  display: block;
  outline: none;
  border: none;
  cursor: pointer;
}

h1,
h2,
h3 {
  font-weight: 600;
}

h1 {
  color: var(--white);
  font-size: var(--h1-size);
  line-height: var(--h1-line);
}

p,
a {
  font-weight: 400;
  font-size: var(--body-size);
  line-height: var(--body-line);
}

main {
  max-width: 90%;
  min-height: 100dvh;
  margin: auto;
}

.flex {
  display: flex;
  align-items: center;
}

.btn {
  background-color: var(--white);
  border-radius: 5px;
  padding: 0.82rem 1.75rem;
  transition: 0.3s;
}

.btn-p {
  color: var(--dark-grey);
  text-transform: uppercase;
  font-size: var(--body-size);
  font-weight: bolder;
  transition: 0.3s;
  letter-spacing: 0.8px;
}

.btn:hover {
  background-color: var(--peach-light);
}

.btn:hover .btn-p {
  color: var(--white);
}

@media screen and (max-width: 868px) {
  main {
    max-width: 100%;
  }
}
</style>
