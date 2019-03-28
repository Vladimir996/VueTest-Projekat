<template>
  <header>
    <div class="header container">
      <img id="logo" :src="headerInfo[0].logoUrl">
      <div class="media">
        <a v-for="(socialIcon, index) in socialIcons" :key="index" :href="socialIcon.url">
          <img :src="socialIcon.imgUrl">
        </a>
      </div>
      <div id="line"></div>
<nav class="navbar navbar-expand-lg navbar-light container">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav link-list">
      <li class="nav-item active">
        <router-link to="/" exact>HOME</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" exact>ABOUT</router-link>
      </li>
      <li class="nav-item">
       <router-link to="/work" exact>WORK</router-link>
      </li>
      <li class="nav-item">
       <router-link to="/contact" exact>CONTACT</router-link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  </header>
</template>
<script>
import db from "../../firebase/init";
export default {
  computed: {
    headerInfo() {
      return this.$store.getters.headerInfo;
    },
    socialIcons() {
      return this.$store.getters.socialIcons;
    }
  },
  created() {
    db.collection("social-links").onSnapshot(snapshot => {
      const socialIcons = [];
      snapshot.docs.forEach(doc => {
        socialIcons.push(doc.data());
      });
      this.$store.commit("setSocialIcons", socialIcons);
      console.log(this.socialIcons);
    });
    db.collection("logo")
      .get()
      .then(snapshot => {
        const headerInfo = [];
        snapshot.forEach(doc => {
          headerInfo.push(doc.data());
        });
        this.$store.commit("setHeaderInfo", headerInfo);
      });
  }
};
</script>

<style scoped>
  /* @media(max-width: 990px) {
    .media{
    margin-left: 400px;
    }
  } */
  @media(max-width: 770px) {
  .media {
    margin-left: 35px;
  }
}
</style>