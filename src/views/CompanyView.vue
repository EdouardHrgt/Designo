<template>
  <div class="company">
    <NavBar />
    <section class="card flex card-1">
      <div class="card-txt">
        <h1>About Us</h1>
        <p>
          Founded in 2010, we are a creative agency that produces lasting results for our clients.
          We’ve partnered with many startups, corporations, and nonprofits alike to craft designs
          that make real impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
      <div class="card-img">
        <img src="../assets/about/desktop/image-about-hero.jpg" alt="Working desk" class="pc-img" />
        <img
          src="../assets/about/tablet/image-about-hero.jpg"
          alt="Working desk"
          class="tablet-img"
        />
        <img
          src="../assets/about/mobile/image-about-hero.jpg"
          alt="Working desk"
          class="mobile-img"
        />
      </div>
    </section>

    <section class="flex card-2">
      <div class="card-2-img c2">
        <img
          src="../assets/about/desktop/image-world-class-talent.jpg"
          alt="world class talent"
          class="pc-img"
        />
        <img
          src="../assets/about/tablet/image-world-class-talent.jpg"
          alt="world class talent"
          class="tablet-img"
        />
        <img
          src="../assets/about/mobile/image-world-class-talent.jpg"
          alt="world class talent"
          class="mobile-img"
        />
      </div>
      <div class="card-2-txt">
        <h2>World-class talent</h2>
        <p>
          We are a crew of strategists, problem-solvers, and technologists. Every design is
          thoughtfully crafted from concept to launch, ensuring success in its given market. We are
          constantly updating our skills in a myriad of platforms.
        </p>
        <p>
          Our team is multi-disciplinary and we are not merely interested in form — content and
          meaning are just as important. We give great importance to craftsmanship, service, and
          prompt delivery. Clients have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission.
        </p>
      </div>
    </section>
    <CountryBar />
    <section class="flex card-2 last">
      <div class="card-2-txt">
        <h2>The real deal</h2>
        <p>
          As strategic partners in our clients’ businesses, we are ready to take on any challenge as
          our own. Solving real problems require empathy and collaboration, and we strive to bring a
          fresh perspective to every opportunity. We make design and technology more accessible and
          give you tools to measure success.
        </p>
        <p>
          We are visual storytellers in appealing and captivating ways. By combining business and
          marketing strategies, we inspire audiences to take action and drive real results.
        </p>
      </div>
      <div class="card-2-img c3">
        <img src="../assets/about/desktop/image-real-deal.jpg" alt="The real deal" class="pc-img" />
        <img
          src="../assets/about/tablet/image-real-deal.jpg"
          alt="The real deal"
          class="tablet-img"
        />
        <img
          src="../assets/about/mobile/image-real-deal.jpg"
          alt="The real deal"
          class="mobile-img"
        />
      </div>
    </section>
    <HeroBar />
    <FooterBar />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import CountryBar from '@/components/Countries.vue';
import HeroBar from '@/components/HeroBar.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
  name: 'CompanyView',
  components: {
    NavBar,
    CountryBar,
    HeroBar,
    FooterBar,
  },
};
</script>

<style scoped>
.company {
  overflow: hidden;
}
section {
  position: relative;
  z-index: 2;
}
.card {
  border-radius: var(--radius);
  overflow: hidden;
  margin: auto;
}
.card-1 {
  height: 480px;
  margin-top: 1rem;
}
.card-txt {
  background-image: url(../assets/home/desktop/bg-pattern-hero-home.svg);
  background-repeat: no-repeat;
  background-color: var(--peach);
  background-position-y: -9rem;
  padding: 8.5rem 6rem;
  width: calc(100% - 480px);
}
.card-txt p {
  color: var(--white);
  margin: 2rem 0 0 0;
  max-width: 458px;
}
.card-img {
  width: 480px;
}
.card-img img {
  border-radius: 0 var(--radius) var(--radius) 0;
}
.tablet-img,
.mobile-img {
  display: none;
}

.card-2 {
  margin: 5rem auto;
  background-color: #fdf3f0;
  border-radius: var(--radius);
}
.c2 img {
  border-radius: var(--radius) 0 0 var(--radius);
}
.c3 img {
  border-radius: 0 var(--radius) var(--radius) 0;
}
.card-2 h2 {
  font-size: var(--h1-size);
  line-height: var(--h1-line);
  letter-spacing: var(--h1-space);
  color: var(--peach);
  max-width: 445px;
}
.card-2-txt {
  background: url(../assets/shared/desktop/bg-pattern-two-circles.svg);
  background-position: bottom left;
  background-repeat: no-repeat;
  display: grid;
  place-items: center;
  place-content: center;
  width: calc(100% - 476px);
  height: 640px;
}
.card-2-txt p {
  max-width: 445px;
  margin: 1rem 0;
}
.last {
  margin-bottom: 9rem;
}

@media screen and (max-width: 1024px) {
  .pc-img {
    display: none;
  }
  .tablet-img {
    display: block;
    object-fit: cover;
    width: 100%;
  }
  .card {
    flex-direction: column-reverse;
    height: auto;
    border-radius: 0;
  }
  .card-txt,
  .card-img {
    width: 100%;
  }
  .card-txt {
    text-align: center;
    background-position-y: -20rem;
    background-position-x: -7rem;
  }
  .card-txt p {
    margin: 2rem auto 0;
  }
  .card-img img,
  .card-2-img img {
    border-radius: 0;
  }
  .card-2 {
    flex-direction: column;
    border-radius: 0;
  }
  .card-2-img {
    width: 100%;
  }
  .card-2-txt {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    padding: 3rem 0;
  }
  .card-2 h2 {
    font-size: var(--h2-size);
    line-height: var(--h2-line);
    letter-spacing: var(--h2-space);
  }
}

@media screen and (max-width: 700px) {
  .tablet-img {
    display: none;
  }
  .mobile-img {
    display: block;
    object-fit: cover;
    width: 100%;
  }
  .card-txt {
    padding: 5rem 2rem;
    width: 100%;
  }
  .card-txt p {
    max-width: 100%;
  }
  .card-2-txt {
    padding: 3rem 2rem;
  }
  .card-2-txt h2 {
    text-align: center;
  }
}
</style>
