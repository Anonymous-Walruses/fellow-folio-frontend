<template>
  <div id="app">
    <div id="section">
      <MLHLogo class="logo" />
      <h1 id="title">Fellowfolio</h1>
      <b-field class="fields">
        <b-input id="username" class="nav" placeholder="Search Fellow" icon-right="magnify" icon-right-clickable @icon-right-click="handleSearch"></b-input>
        <b-button type="is-success" class="nav" @click="handleSignUp">Sign Up</b-button>
        <b-button type="is-info" class="nav" @click="handleLeaderboards">Leaderboards</b-button>
      </b-field>
    </div>
  </div>
</template>

<script>
import MLHLogo from "../assets/mlh-fellowship-logo.svg";

export default {
  name: "App",
  components: {
    MLHLogo
  },
  methods: {
    handleSearch: () => {
      const u = document.getElementById("username").value;
      window.location = `https://github.com/${u}`;
    },
    handleSignUp: () => {
      window.location = `https://github.com/join`;
    },
    handleLeaderboards: () => {
      window.location = `https://github.com/trending`;
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#section {
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

#title {
  font-family: "Open Sans";
  font-size: 80px;
  text-transform: uppercase;
  color: black;
  background: -webkit-linear-gradient(360deg, rgb(229, 54, 48), rgb(33, 85, 157), rgb(247, 184, 64));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.logo {
  max-width: 300px;
  max-height: 300px;
}

.nav {
  left: 10%;
  right: 10%;
  margin: 5px;
}
</style>
