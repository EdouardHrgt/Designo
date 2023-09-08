<template>
  <div>
    <NavBar />
    <section class="locations">
      <div class="location flex" v-for="(l, i) in locs" :key="i" :class="l.class">
        <div class="location-txt flex">
          <p>
            <strong class="country">{{ l.country }}</strong>
          </p>
          <div class="location-txt-infos flex">
            <p>
              <strong>{{ l.infos.office }}</strong
              ><br />
              {{ l.infos.add1 }}<br />
              {{ l.infos.add2 }}
            </p>
            <p>
              <strong>Contact</strong><br />
              {{ l.infos.tel }}<br />
              {{ l.infos.mail }}
            </p>
          </div>
        </div>
        <div class="location-map"></div>
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
  name: 'LocationsView',
  components: {
    NavBar,
    HeroBar,
    FooterBar,
  },
  data() {
    return {
      locs: [
        {
          country: 'canada',
          class: 'ca',
          infos: {
            office: 'Designo Central Office',
            add1: '3886 Wellington Street',
            add2: 'Toronto, Ontario M9C 3J5',
            tel: 'P : +1 253-863-8967',
            mail: 'M : contact@designo.co',
          },
        },
        {
          country: 'australia',
          class: 'au',
          infos: {
            office: 'Designo AU Office',
            add1: '19 Balonne Street',
            add2: 'New South Wales 2443',
            tel: 'P : (02) 6720 9092',
            mail: 'M : contact@designo.au',
          },
        },
        {
          country: 'United Kingdom',
          class: 'uk',
          infos: {
            office: 'Designo UK Office',
            add1: '13  Colorado Way',
            add2: 'Rhyd-y-fro SA8 9GA',
            tel: 'P : 078 3115 1400',
            mail: 'M : contact@designo.uk',
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.locations {
  margin: 3rem 0 9rem 0;
}
.country {
  font-size: var(--h2-size);
  line-height: var(--h2-line);
  color: var(--peach);
  font-weight: normal;
  margin-bottom: 1rem;
  display: block;
}
.location {
  height: 326px;
  gap: 3rem;
  justify-content: center;
  margin: 2.5rem 0;
}
.location-txt {
  border-radius: var(--radius);
  background-color: #fdf3f0;
  height: inherit;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 730px;
  padding: 0 6rem;
  background-image: url(../assets/shared/desktop/bg-pattern-two-circles.svg);
  background-repeat: no-repeat;
  background-position-y: bottom;
}
.location-txt-infos {
  gap: 5rem;
}
.location-map {
  width: 350px;
  background-image: url(../assets/locations/desktop/image-map-canada.png);
  border-radius: var(--radius);
  height: inherit;
}
.au {
  flex-direction: row-reverse;
}
</style>
