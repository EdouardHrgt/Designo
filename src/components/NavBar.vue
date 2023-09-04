<template>
  <div class="navbar">
    <header>
      <nav class="flex">
        <router-link to="/"
          ><img src="../assets/shared/desktop/logo-dark.png" alt="Designo"
        /></router-link>
        <ul class="flex" :class="{ active: isOpen }" @click="isOpen = !isOpen">
          <li><router-link to="/company">our company</router-link></li>
          <li><router-link to="/locations">locations</router-link></li>
          <li><router-link to="/contact">contact</router-link></li>
        </ul>
        <img
          src="../assets/shared/mobile/icon-hamburger.svg"
          alt="open the menu"
          class="open"
          :class="{ active: !isOpen }"
          @click="isOpen = !isOpen"
        />
        <img
          src="../assets/shared/mobile/icon-close.svg"
          alt="close the menu"
          :class="{ active: isOpen }"
          class="close"
          @click="isOpen = !isOpen"
        />
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>
header {
  z-index: 10;
  background-color: var(--white);
}
nav {
  justify-content: space-between;
  padding: 3rem 0;
}

nav img {
  max-width: 196px;
}
ul {
  gap: 3rem;
}

ul a {
  text-transform: uppercase;
}

ul a:hover {
  border-bottom: 1px solid var(--dark-grey);
}

.open,
.close {
  display: none;
  cursor: pointer;
}

@media screen and (max-width: 1024px) {
  ul {
    gap: 1.5rem;
  }
}

@media screen and (max-width: 868px) {
  header {
    left: 0;
    right: 0;
    border: 3px solid yellowgreen;
  }
  ul {
    position: fixed;
    z-index: 1;
    top: 5.8rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: hsla(270, 3%, 11%, 0.8);
    flex-direction: column;
    align-items: flex-start;
    padding-top: 3rem;
    display: none;
  }
  nav {
    padding: 2rem;
  }
  ul li {
    margin: 1rem 0;
    width: 100%;
  }
  ul a {
    color: var(--white);
    padding: 2rem;
    font-size: 24px;
    line-height: 25px;
    width: 100%;
  }
  .active {
    display: flex;
  }
  ul a:hover {
    border-bottom: none;
  }
  ul li:hover {
    border-bottom: 1px solid var(--white);
  }
}
</style>
