<template>
  <div>
    <NavBar />
    <section class="title-bar flex">
      <h1>Graphic Design</h1>
      <p>
        We deliver eye-catching branding materials that are tailored to meet your business
        objectives.
      </p>
    </section>
    <section class="grid">
      <div class="card" v-for="(c, i) in cards" :key="i">
        <div class="card-img">
          <img :src="c.image" :alt="c.title" />
        </div>
        <div class="card-txt">
          <h2>{{ c.title }}</h2>
          <p>{{ c.text }}</p>
        </div>
      </div>
    </section>
    <section class="links flex">
      <div class="link" v-for="(j, i) in links" :key="i" :style="{ backgroundImage: j.img }">
        <div class="link-hover"></div>
        <h3>{{ j.title }}</h3>
        <router-link :to="j.router"
          >view projects
          <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1l4 4-4 4"
              stroke="#E7816B"
              stroke-width="2"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </router-link>
      </div>
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
  name: 'GraphicDesignView',
  components: {
    NavBar,
    HeroBar,
    FooterBar,
  },
  data() {
    return {
      cards: [
        {
          title: 'tim brown',
          image: require('../assets/graphic-design/desktop/image-change.jpg'),
          text: 'A book cover designed for Tim Brown’s new release, ‘Change’',
        },
        {
          title: 'boxed water',
          image: require('../assets/graphic-design/desktop/image-boxed-water.jpg'),
          text: 'A simple packaging concept made for Boxed Water',
        },
        {
          title: 'science!',
          image: require('../assets/graphic-design/desktop/image-science.jpg'),
          text: 'A poster made in collaboration with the Federal Art Project',
        },
      ],
      links: [
        {
          title: 'app design',
          router: '/app-design',
          img: `url(${require('../assets/home/desktop/image-app-design.jpg')})`,
        },
        {
          title: 'web design',
          router: '/web-design',
          img: `url(${require('../assets/home/desktop/image-web-design-small.jpg')})`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.title-bar {
  background-color: var(--peach);
  border-radius: var(--radius);
  margin: 2rem 0 8rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 0;
  background-image: url(../assets/web-design/desktop/bg-pattern-intro-web.svg);
  background-position: center;
  background-repeat: no-repeat;
}
.title-bar p {
  margin: 2rem 0;
}
p {
  color: var(--white);
  max-width: 25rem;
  text-align: center;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: 3.5rem;
  grid-row-gap: 3.5rem;
  margin: 0 auto 8rem;
  justify-content: center;
}
.card {
  width: 350px;
  height: 478px;
}
.card-txt {
  background-color: var(--peach-trans);
  border-radius: 0 0 var(--radius) var(--radius);
  transition: 0.3s;
  cursor: pointer;
  padding: 1.95rem 0.8rem;
}
.card-txt:hover {
  background-color: var(--peach);
}
.card-txt h2 {
  font-size: var(--h3-size);
  letter-spacing: var(--h3-space);
  line-height: var(--h3-line);
  text-transform: uppercase;
  color: var(--white);
  text-align: center;
  margin: 0 0 1rem 0;
}
.card-img img {
  object-fit: cover;
  border-radius: var(--radius) var(--radius) 0 0;
}
.links {
  justify-content: center;
  gap: 4rem;
  margin-bottom: 8rem;
}
h3 {
  color: var(--white);
  font-size: var(--h2-size);
  line-height: var(--h2-line);
  text-transform: uppercase;
  margin-bottom: 1rem;
  z-index: 2;
  position: relative;
}
.link {
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  padding: 5rem 0;
  border-radius: var(--radius);
  position: relative;
  z-index: 0;
  overflow: hidden;
}
.link-hover {
  position: absolute;
  inset: 0;
  z-index: 1;
  background-color: var(--peach);
  opacity: 0;
  transition: opacity 0.3s ease-in;
}
.link:hover .link-hover {
  opacity: 0.6;
}

.link a {
  font-size: var(--links-size);
  text-transform: uppercase;
  letter-spacing: 5px;
  color: var(--white);
  font-weight: 400;
  cursor: pointer;
  z-index: 2;
  position: relative;
}

@media screen and (max-width: 1300px) {
  .grid {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }
  .card {
    width: 325px;
    height: 450px;
  }
}

@media screen and (max-width: 1024px) {
  .grid {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin: 0 auto 8rem;
    width: 100%;
  }
  .card {
    display: flex;
    justify-content: center;
    width: inherit;
    border-radius: var(--radius);
    margin: auto;
    height: 310px;
  }
  .card-img {
    width: 1fr;
  }
  .card-img img {
    border-radius: 0;
    height: 310px;
    width: 100%;
    border-radius: var(--radius) 0 0 var(--radius);
  }
  .card-txt {
    background-color: var(--peach-light);
    border-radius: 0 var(--radius) var(--radius) 0;
    padding: 0 4rem;
    height: 310px;
    width: 1fr;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .card-txt p {
    max-width: 18rem;
  }
  .links {
    flex-direction: column;
    gap: 2rem;
  }
  .link {
    width: 510px;
  }
}

@media screen and (max-width: 700px) {
  .title-bar {
    border-radius: 0;
    padding: 5rem 1rem;
    background-position: bottom right;
  }
  .grid {
    gap: 3rem;
    width: 100%;
    padding: 0 1rem;
  }
  .card {
    flex-direction: column;
    height: 478px;
  }
  .card-txt {
    background-color: var(--peach-light);
    border-radius: 0 0 var(--radius) var(--radius);
    padding: 0rem 4rem;
    height: calc(478px - 325px);
    width: 100%;
  }
  .card-img {
    width: 100%;
  }
  .card-img img {
    border-radius: 0;
    height: 325px;
    width: 100%;
    border-radius: var(--radius) var(--radius) 0 0;
  }
  .links {
    padding: 0 1rem;
  }
  .link {
    width: 100%;
    max-width: 500px;
  }
  .title-bar,
  .grid,
  .links {
    margin-bottom: 5rem;
  }
}
</style>
