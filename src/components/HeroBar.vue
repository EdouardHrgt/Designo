<template>
  <div>
    <section class="hero flex">
      <div class="hero-txt">
        <h2>Let's talk about <br />your project</h2>
        <p class="hero-p">
          Ready to take it to the next level? Contact us today and find out how our expertise can
          help your business grow.
        </p>
      </div>
      <button class="btn"><p class="btn-p">get in touch</p></button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HeroBar',
};
</script>

<style scoped>
.hero {
  background-color: var(--peach);
  padding: 3.7rem 5rem;
  border-radius: var(--radius);
  justify-content: space-between;
  max-width: 1440px;
  margin: auto;
  background-image: url(../assets/shared/desktop/bg-pattern-three-circles.svg);
  background-position: right;
  margin-bottom: -3.5rem;
  position: relative;
  z-index: 1;
}

.hero h2,
.hero-p {
  color: var(--white);
}

.hero-txt {
  max-width: 459px;
}

h2 {
  font-size: var(--h2-size);
  line-height: var(--h2-line);
  letter-spacing: var(--h2-space);
  margin-bottom: 2rem;
}

@media screen and (max-width: 1650px) {
  .hero {
    max-width: 95%;
  }
}

@media screen and (max-width: 1024px) {
  .hero {
    flex-direction: column;
    text-align: center;
    margin-bottom: -4.5rem;
  }
  h2 {
    margin-bottom: 1rem;
  }
  .hero-txt {
    margin-bottom: 1rem;
  }
}

@media screen and (max-width: 600px) {
  .hero {
    padding: 3.7rem 2rem;
  }
}
</style>
