<template>
  <div class="home-page">
    <NavBar />
    <section class="hero flex">
      <div class="hero-text">
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p class="hero-p">
          With over 10 years in the industry, we are experienced in creating fully responsive
          websites, app design, and engaging brand experiences. Find out more about our services.
        </p>
        <button class="btn"><p class="btn-p">learn more</p></button>
      </div>
      <div class="hero-img">
        <img src="../assets/home/desktop/image-hero-phone.png" alt="a picture of a smartphone" />
      </div>
    </section>
    <svg class="bg-circle" width="1006" height="594" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z"
        fill="#F1F3F5"
        fill-rule="evenodd"
        opacity=".502"
      />
    </svg>
    <section class="gallery">
      <div class="web-design gal-flex">
        <div class="gallery-txt">
          <h2>web design</h2>
          <router-link to="/web-design" class="gallery-link"
            >view projects
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 1l4 4-4 4"
                stroke="#E7816B"
                stroke-width="2"
                fill="none"
                fill-rule="evenodd"
              /></svg
          ></router-link>
        </div>
        <div class="gallery-hover"></div>
      </div>
      <div class="gallery-right-col">
        <div class="app-design gal-flex">
          <div class="gallery-txt">
            <h2>app design</h2>
            <a href="#" class="gallery-link"
              >view projects
              <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1l4 4-4 4"
                  stroke="#E7816B"
                  stroke-width="2"
                  fill="none"
                  fill-rule="evenodd"
                /></svg
            ></a>
          </div>
          <div class="gallery-hover"></div>
        </div>
        <div class="graphic-design gal-flex">
          <div class="gallery-txt">
            <h2>graphic design</h2>
            <a href="#" class="gallery-link"
              >view projects
              <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1l4 4-4 4"
                  stroke="#E7816B"
                  stroke-width="2"
                  fill="none"
                  fill-rule="evenodd"
                /></svg
            ></a>
          </div>
          <div class="gallery-hover"></div>
        </div>
      </div>
    </section>
    <section class="adjectives flex">
      <div class="adjective">
        <div class="adjective-img">
          <img
            class="adjective-circle"
            src="../assets/shared/desktop/bg-pattern-small-circle.svg"
            alt="a decorative circle"
          />
          <img
            src="../assets/home/desktop/illustration-passionate.svg"
            alt="someone working on a computer"
          />
        </div>
        <div class="adjective-infos">
          <h3 class="adjective-title">passionate</h3>
          <p class="adjective-txt">
            Each project starts with an in-depth brand research to ensure we only create products
            that serve a purpose. We merge art, design, and technology into exciting new solutions.
          </p>
        </div>
      </div>
      <div class="adjective">
        <div class="adjective-img">
          <img
            class="adjective-circle"
            src="../assets/shared/desktop/bg-pattern-small-circle.svg"
            alt="a decorative circle"
          />
          <img
            src="../assets/home/desktop/illustration-resourceful.svg"
            alt="someone working on a tablet"
          />
        </div>
        <div class="adjective-infos">
          <h3 class="adjective-title">resourceful</h3>
          <p class="adjective-txt">
            Everything that we do has a strategic purpose. We use an agile approach in all of our
            projects and value customer collaboration. It guarantees superior results that fulfill
            our clients’ needs.
          </p>
        </div>
      </div>
      <div class="adjective">
        <div class="adjective-img">
          <img
            class="adjective-circle"
            src="../assets/shared/desktop/bg-pattern-small-circle.svg"
            alt="a decorative circle"
          />
          <img
            src="../assets/home/desktop/illustration-friendly.svg"
            alt="two persons handling a sign"
          />
        </div>
        <div class="adjective-infos">
          <h3 class="adjective-title">friendly</h3>
          <p class="adjective-txt">
            We are a group of enthusiastic folks who know how to put people first. Our success
            depends on our customers, and we strive to give them the best experience a company can
            provide.
          </p>
        </div>
      </div>
      <svg
        class="bg-circle-adjectives"
        width="1006"
        height="594"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z"
          fill="#F1F3F5"
          fill-rule="evenodd"
          opacity=".502"
        />
      </svg>
    </section>
    <HeroBar />
    <FooterBar />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import HeroBar from '@/components/HeroBar.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
  name: 'HomeView',
  components: {
    NavBar,
    HeroBar,
    FooterBar,
  },
};
</script>

<style scoped>
:root {
  --top-margin: 7.9rem;
  --links-size: 15px;
  --links-space: 5px;
}

.adjectives,
.gallery {
  margin-top: 11rem;
}

.adjectives {
  margin-bottom: 11rem;
}

.hero {
  background-color: var(--peach);
  border-radius: var(--radius);
  padding: 9.5rem 6rem;
  position: relative;
  background-image: url(../assets/home/desktop/bg-pattern-hero-home.svg);
  background-repeat: no-repeat;
  background-position: right top;
  overflow: hidden;
  isolation: isolate;
}
.hero-text {
  max-width: 540px;
}
.hero-p {
  padding: 2rem 0;
  color: var(--white);
}
.hero-img {
  position: absolute;
  top: -1.5rem;
  right: -3rem;
  z-index: -1;
}

.bg-circle {
  position: absolute;
  top: 50%;
  left: 0;
  z-index: -1;
}

.gallery {
  display: flex;
  gap: 3rem;
  border-radius: var(--radius);
  overflow: hidden;
  justify-content: center;
}
h2 {
  color: var(--white);
  font-size: var(--h1-size);
  line-height: var(--h1-line);
  text-transform: uppercase;
  margin-bottom: 1rem;
  z-index: 2;
  position: relative;
}
.gallery-txt {
  text-align: center;
}
.gallery-link {
  font-size: var(--links-size);
  text-transform: uppercase;
  letter-spacing: 5px;
  color: var(--white);
  font-weight: 400;
  z-index: 2;
  position: relative;
}
.gal-flex {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: var(--radius);
  position: relative;
  overflow: hidden;
  isolation: isolate;
}
.gallery-hover {
  position: absolute;
  inset: 0;
  z-index: 1;
  background-color: var(--peach);
  opacity: 0;
  transition: opacity 0.3s ease-in;
}
.gal-flex:hover .gallery-hover {
  opacity: 0.6;
}
.gallery-link svg {
  margin-left: 0.5rem;
}
.gallery-right-col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.web-design {
  background-image: url(../assets/home/desktop/image-web-design-large.jpg);
  height: 640px;
  width: 541px;
}
.graphic-design,
.app-design {
  height: 308px;
  width: 541px;
}
.graphic-design {
  background-image: url(../assets/home/desktop/image-graphic-design.jpg);
}
.app-design {
  background-image: url(../assets/home/desktop/image-app-design.jpg);
}

/* ADJECTIVES */
.adjectives {
  justify-content: space-evenly;
  gap: 1.5rem;
  position: relative;
}
.adjective {
  text-align: center;
}
.adjective-img {
  position: relative;
}
.adjective-img img {
  margin: auto;
}
.adjective-circle {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.adjective-title {
  font-size: var(--h3-size);
  line-height: var(--h3-line);
  letter-spacing: var(--h3-space);
  text-transform: uppercase;
  margin: 1.75rem 0;
}
.adjective-infos {
  max-width: 350px;
}
.bg-circle-adjectives {
  transform: scale(-1, -1);
  position: absolute;
  z-index: -1;
  right: -5.7%;
  top: 7.5rem;
}

@media screen and (max-width: 1250px) {
  .hero {
    padding: 9.5rem 4rem;
  }
  .hero-img {
    right: -7.5rem;
  }
  .gallery {
    gap: 1.5rem;
  }
}

@media screen and (max-width: 1024px) {
  .bg-circle-adjectives,
  .bg-circle {
    display: none;
  }
  .adjectives,
  .gallery {
    margin-top: 7rem;
  }
  .hero {
    padding: 5rem 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-position-x: 150%;
    min-height: 843px;
    background-position-y: 5rem;
  }
  .hero-text {
    text-align: center;
  }
  .hero-text .btn {
    margin: auto;
  }
  .hero-img {
    inset: unset;
    bottom: -23rem;
  }
  .gallery {
    flex-direction: column;
    align-items: center;
  }
  .graphic-design,
  .app-design,
  .web-design {
    height: 200px;
    width: 689px;
    background-repeat: no-repeat;
  }
  .gallery-right-col {
    gap: 1.5rem;
  }
  .web-design {
    background-image: url(../assets/home/tablet/image-web-design.jpg);
  }
  .app-design {
    background-image: url(../assets/home/tablet/image-app-design.jpg);
  }
  .graphic-design {
    background-image: url(../assets/home/tablet/image-graphic-design.jpg);
  }
  .adjectives {
    flex-direction: column;
    gap: 2.5rem;
  }
  .adjective {
    text-align: start;
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }
  .adjective-infos {
    max-width: 439px;
  }
  .adjective-title {
    margin: 0.5rem 0;
  }
}

@media screen and (max-width: 868px) {
  .hero {
    border-radius: 0;
  }
}

@media screen and (max-width: 700px) {
  .graphic-design,
  .app-design,
  .web-design {
    height: 250px;
    width: 327px;
  }
  .gallery-right-col {
    gap: 1.5rem;
  }
  .web-design {
    background-image: url(../assets/home/mobile/image-web-design.jpg);
  }
  .app-design {
    background-image: url(../assets/home/mobile/image-app-design.jpg);
  }
  .graphic-design {
    background-image: url(../assets/home/mobile/image-graphic-design.jpg);
  }
  h2 {
    font-size: 1.75rem;
    letter-spacing: 1.4px;
    margin-bottom: 0.5rem;
  }
  .adjectives {
    gap: 3rem;
  }
  .adjective {
    text-align: center;
    flex-direction: column;
    gap: 0.5rem;
  }
  .adjective-infos {
    padding: 0 1rem;
  }
}
</style>
