<template>
  <div class="NavBar">
    <svg style="display:none;">
      <defs>
        <g id="scan">
          <svg class="icon icon-qrcode">
            <use xlink:href="#icon-qrcode"></use>
          </svg>
          <symbol id="icon-qrcode" viewBox="0 0 32 32">
            <title>qrcode</title>
            <path
              d="M10 2h-8v8h8v-8zM12 0v0 12h-12v-12h12zM4 4h4v4h-4zM30 2h-8v8h8v-8zM32 0v0 12h-12v-12h12zM24 4h4v4h-4zM10 22h-8v8h8v-8zM12 20v0 12h-12v-12h12zM4 24h4v4h-4zM14 0h2v2h-2zM16 2h2v2h-2zM14 4h2v2h-2zM16 6h2v2h-2zM14 8h2v2h-2zM16 10h2v2h-2zM14 12h2v2h-2zM14 16h2v2h-2zM16 18h2v2h-2zM14 20h2v2h-2zM16 22h2v2h-2zM14 24h2v2h-2zM16 26h2v2h-2zM14 28h2v2h-2zM16 30h2v2h-2zM30 16h2v2h-2zM2 16h2v2h-2zM4 14h2v2h-2zM0 14h2v2h-2zM8 14h2v2h-2zM10 16h2v2h-2zM12 14h2v2h-2zM18 16h2v2h-2zM20 14h2v2h-2zM22 16h2v2h-2zM24 14h2v2h-2zM26 16h2v2h-2zM28 14h2v2h-2zM30 20h2v2h-2zM18 20h2v2h-2zM20 18h2v2h-2zM22 20h2v2h-2zM26 20h2v2h-2zM28 18h2v2h-2zM30 24h2v2h-2zM18 24h2v2h-2zM20 22h2v2h-2zM24 22h2v2h-2zM26 24h2v2h-2zM28 22h2v2h-2zM30 28h2v2h-2zM20 26h2v2h-2zM22 28h2v2h-2zM24 26h2v2h-2zM26 28h2v2h-2zM20 30h2v2h-2zM24 30h2v2h-2zM28 30h2v2h-2z"
            ></path>
          </symbol>
        </g>

        <g id="search">
          <path
            fill="#fdec06"
            d="M22.9,20.1h-1.5l-0.5-0.5c1.8-2.1,2.9-4.8,2.9-7.7C23.8,5.3,18.5,0,11.9,0S0,5.3,0,11.9s5.3,11.9,11.9,11.9
        c3,0,5.7-1.1,7.7-2.9l0.5,0.5v1.4l9.1,9.1l2.7-2.7L22.9,20.1z M11.9,20.1c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2
        S16.4,20.1,11.9,20.1z"
          ></path>
        </g>

        <g id="contacts">
          <symbol id="icon-address-book" viewBox="0 0 32 32">
            <title>address-book</title>
            <path
              d="M6 0v32h24v-32h-24zM18 8.010c2.203 0 3.99 1.786 3.99 3.99s-1.786 3.99-3.99 3.99-3.99-1.786-3.99-3.99 1.786-3.99 3.99-3.99v0zM24 24h-12v-2c0-2.209 1.791-4 4-4v0h4c2.209 0 4 1.791 4 4v2z"
            ></path>
            <path d="M2 2h3v6h-3v-6z"></path>
            <path d="M2 10h3v6h-3v-6z"></path>
            <path d="M2 18h3v6h-3v-6z"></path>
            <path d="M2 26h3v6h-3v-6z"></path>
          </symbol>
        </g>

        <g id="edit">
          <symbol id="icon-pencil" viewBox="0 0 32 32">
            <title>pencil-edit</title>
            <path
              d="M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z"
            ></path>
          </symbol>
        </g>

        <g id="logout">
          <symbol id="icon-log-out" viewBox="0 0 32 32">
            <title>log-out</title>
            <path
              d="M20 4.581v4.249c1.131 0.494 2.172 1.2 3.071 2.099 1.889 1.889 2.929 4.4 2.929 7.071s-1.040 5.182-2.929 7.071c-1.889 1.889-4.4 2.929-7.071 2.929s-5.182-1.040-7.071-2.929c-1.889-1.889-2.929-4.4-2.929-7.071s1.040-5.182 2.929-7.071c0.899-0.899 1.94-1.606 3.071-2.099v-4.249c-5.783 1.721-10 7.077-10 13.419 0 7.732 6.268 14 14 14s14-6.268 14-14c0-6.342-4.217-11.698-10-13.419zM14 0h4v16h-4z"
            ></path>
          </symbol>
        </g>
      </defs>
    </svg>

    <nav class="nav__cont">
      <ul class="nav">
        <nuxt-link :to="'/'">
          <li class="nav__items">
            <svg class="icon icon-qrcode">
              <use xlink:href="#icon-qrcode"></use>
            </svg>
          </li>
        </nuxt-link>

        <nuxt-link :to="'/contacts'">
          <li class="nav__items">
            <svg class="icon icon-address-book">
              <use xlink:href="#icon-address-book"></use>
            </svg>
          </li>
        </nuxt-link>
        <nuxt-link :to="'/editprofile'">
          <li class="nav__items">
            <svg class="icon icon-pencil">
              <use xlink:href="#icon-pencil"></use>
            </svg>
          </li>
        </nuxt-link>
        <li class="nav__items" v-on:click="logOut">
          <svg class="icon icon-log-out">
            <use xlink:href="#icon-log-out"></use>
          </svg>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  props: [],
  methods: {
    logOut: function() {
      console.log("Logut");
      localStorage.removeItem("token");
      this.$store.commit("setAuth", null);
      this.$router.push({
        path: "/login"
      });
    }
  }
};
</script>


<style>
a {
  text-decoration: none;
  color: #fdec06;
}

li {
  vertical-align: middle;
  margin-top: 5vh;
}

html {
  font-family: "Hind Guntur", sans-serif;
}

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

.nav__cont {
  position: fixed;
  width: 13%;
  top: 0;
  height: 100vh;
  z-index: 100;
  background-color: #171717;
  overflow: hidden;
  transition: width 0.3s ease;
  cursor: pointer;
  box-shadow: 4px 7px 10px rgba(0, 0, 0, 0.4);
}

@media screen and (min-width: 600px) {
  .nav__cont {
    max-width: 80px;
  }
}

.nav {
  list-style-type: none;
  color: #fdec06;
}
.nav:first-child {
  padding-top: 1.5rem;
}

.nav__items {
  padding-bottom: 4rem;
}

.nav__items a {
  position: relative;
  display: block;
  top: -35px;
  padding-left: 25px;
  padding-right: 15px;
  transition: all 0.3s ease;
  margin-left: 25px;
  margin-right: 10px;
  text-decoration: none;
  color: #fdec06;
  font-weight: 100;
  font-size: 1.35em;
}
.nav__items a:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 2px;
  background: radial-gradient(
    circle at 94.02% 88.03%,
    #54a4ff,
    transparent 100%
  );
  opacity: 0;
  transition: all 0.5s ease;
  z-index: -10;
}
.nav__items:hover a:after {
  opacity: 1;
}
.nav__items svg {
  width: 26px;
  height: 26px;
  position: relative;
  left: -25px;
  cursor: pointer;
}

@media screen and (min-width: 600px) {
  .nav__items svg {
    width: 32px;
    height: 32px;
    left: -15px;
  }
}

body {
  height: 100vh;
  background: linear-gradient(to right, #171717, #fdec06, #171717);
  margin: 0;
}

h1 {
  margin-top: 6rem;
  margin-left: 80px;
  text-align: center;
  font-weight: 100;
  font-size: 4rem;
  text-transform: uppercase;
  color: #fdec06;
  letter-spacing: 6px;
  text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
}
</style>
