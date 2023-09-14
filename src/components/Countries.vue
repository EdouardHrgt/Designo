<template>
  <div>
    <section class="countries flex">
      <div class="country">
        <div class="country-img">
          <img src="../assets/shared/desktop/illustration-canada.svg" alt="Canada illustration" />
        </div>
        <h2>Canada</h2>
        <button><router-link to="/locations">See location</router-link></button>
      </div>
      <div class="country">
        <div class="country-img">
          <img
            src="../assets/shared/desktop/illustration-australia.svg"
            alt="Autralia illustration"
          />
        </div>
        <h2>Australia</h2>
        <button><router-link to="/locations">See location</router-link></button>
      </div>
      <div class="country">
        <div class="country-img">
          <img
            src="../assets/shared/desktop/illustration-united-kingdom.svg"
            alt="United-Kingdom illustration"
          />
        </div>
        <h2>United Kingdom</h2>
        <button><router-link to="/locations">See location</router-link></button>
      </div>
      <svg class="bg-circle" width="1006" height="594" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z"
          fill="#F1F3F5"
          fill-rule="evenodd"
          opacity=".502"
        />
      </svg>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CountryBar',
};
</script>

<style scoped>
.countries {
  margin: 9rem auto;
  position: relative;
  justify-content: space-between;
  max-width: 1350px;
  isolation: isolate;
}
.bg-circle {
  position: absolute;
  z-index: -1;
  top: 5rem;
  right: -25%;
}
.country {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.country h2 {
  font-size: var(--h3-size);
  line-height: var(--h3-line);
  letter-spacing: var(--h3-space);
  text-transform: uppercase;
  margin: 2.7rem 0 1.7rem;
}
.country-img {
  background-image: url(../assets/shared/desktop/bg-pattern-small-circle.svg);
  background-repeat: no-repeat;
}
button {
  display: block;
  background: transparent;
  border: none;
  background-color: var(--peach);
  border-radius: var(--radius);
  height: 3.3rem;
  width: 9.5rem;
  margin: auto;
}
button a {
  text-transform: uppercase;
  color: var(--white);
}
button:hover {
  background-color: var(--peach-light);
}

@media screen and (max-width: 1024px) {
      .countries {
    flex-direction: column;
    gap: 5rem;
  }
}
</style>
