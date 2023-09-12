<template>
  <div>
    <NavBar />
    <div class="page">
      <section class="contact flex">
        <div class="contact-txt">
          <h1>Contact Us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your project or idea and find out
            how we can help your business grow. If you are looking for unique digital experiences
            that’s relatable to your users, drop us a line.
          </p>
        </div>
        <form class="contact-form" @submit.prevent="checkForm" novalidate="true">
          <div class="form-group">
            <label for="name" hidden>Name</label>
            <input type="text" placeholder="Name" id="name" v-model="name" />
            <p class="err-ms" v-if="err.name">
              Can't be empty <img src="../assets/contact/desktop/icon-error.svg" alt="error icon" />
            </p>
          </div>
          <div class="form-group">
            <label for="email" hidden>email</label>
            <input type="email" placeholder="Email Address" id="email" v-model="email" />
            <p class="err-ms" v-if="err.email">
              Can't be empty <img src="../assets/contact/desktop/icon-error.svg" alt="error icon" />
            </p>
          </div>
          <div class="form-group">
            <label for="phone" hidden>Name</label>
            <input type="tel" placeholder="Phone" id="phone" v-model="phone" />
            <p class="err-ms" v-if="err.phone">
              Can't be empty <img src="../assets/contact/desktop/icon-error.svg" alt="error icon" />
            </p>
          </div>
          <div class="form-group">
            <label for="message" hidden>message</label>
            <input type="text" placeholder="Your Message" id="message" v-model="message" />
            <p class="err-ms" v-if="err.message">
              Can't be empty <img src="../assets/contact/desktop/icon-error.svg" alt="error icon" />
            </p>
          </div>
          <div class="form-group">
            <input type="submit" value="submit" id="sub-btn" />
          </div>
        </form>
      </section>

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
    <FooterBar />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';

export default {
  name: 'ContactView',
  components: {
    NavBar,
    FooterBar,
  },
  methods: {
    checkForm() {
      if (this.name && this.email && this.phone && this.message) {
        this.err.name = 0;
        this.err.email = 0;
        this.err.phone = 0;
        this.err.message = 0;
        alert('Your message has been message sent!');
      } else {
        if (!this.name) {
          this.err.name = 1;
        } else {
          this.err.name = 0;
        }
        if (!this.email) {
          this.err.email = 1;
        } else {
          this.err.email = 0;
        }
        if (!this.phone) {
          this.err.phone = 1;
        } else {
          this.err.phone = 0;
        }
        if (!this.message) {
          this.err.message = 1;
        } else {
          this.err.message = 0;
        }
      }
    },
  },
  data() {
    return {
      name: null,
      email: null,
      phone: null,
      message: null,
      err: {
        name: 0,
        email: 0,
        phone: 0,
        message: 0,
      },
    };
  },
};
</script>

<style scoped>
.page {
  overflow: hidden;
}
.contact {
  background-color: var(--peach);
  padding: 9rem 7rem;
  border-radius: var(--radius);
  background-image: url(../assets/home/desktop/bg-pattern-hero-home.svg);
  background-repeat: no-repeat;
  background-position: bottom left;
  justify-content: space-between;
  gap: 15rem;
}
p {
  color: var(--white);
}
h1 {
  margin: 0 0 2rem 0;
}
.contact-txt {
  max-width: 445px;
}
form {
  min-width: 380px;
  width: 100%;
}
.form-group {
  width: 100%;
  position: relative;
}
input[type='text'],
input[type='tel'],
input[type='email'] {
  border: none;
  background: transparent;
  border-bottom: 2px solid rgb(213, 213, 213);
  display: block;
  width: inherit;
  padding: 0.5rem 1rem;
  font-size: 16px;
  color: var(--white);
  letter-spacing: 1px;
  margin: 1.5rem 0;
}
input::placeholder {
  color: var(--white);
  opacity: 0.7;
  font-size: 15px;
}
#message {
  padding: 0.5rem 1rem 5rem 1rem;
}
#sub-btn {
  display: block;
  color: var(--black);
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 1.035rem 2.9rem;
  border-radius: var(--radius);
  border: none;
  cursor: pointer;
  transition: 0.3s;
  margin: 2rem 0 0 auto;
}
#sub-btn:hover {
  background-color: var(--peach-light);
  color: var(--white);
}
.err-ms {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 9rem;
  position: absolute;
  right: 0;
  bottom: 0.5rem;
}
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

@media screen and (max-width: 1350px) {
  .contact {
    gap: 5rem;
    padding: 9rem 5rem;
  }
}
@media screen and (max-width: 1024px) {
  .contact {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    background-position: -200px -200px;
    padding: 7rem 7rem;
  }
  .contact-txt {
    max-width: 570px;
  }
  .countries {
    flex-direction: column;
    gap: 5rem;
  }
  .bg-circle {
    display: none;
  }
}
@media screen and (max-width: 700px) {
  .contact {
    align-items: center;
    padding: 5rem 4rem;
  }
  .contact-txt {
    text-align: center;
  }
  #sub-btn {
    margin: 2rem auto 0;
  }
}
</style>
