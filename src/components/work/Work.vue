<template>
  <div>
    <div class="check-work">
      <div class="container">
        <h3>CHECK OUT WHAT I CAN DO</h3>
      </div>
    </div>
    <div class="filter">
      <a
        @click.prevent="selectedCategory ='all'"
        :class="{ activeClasss: selectedCategory == 'all' }"
      >All /</a>
      <a
        @click.prevent="selectedCategory ='print'"
        :class="{ activeClasss: selectedCategory == 'print' }"
      >PRINT /</a>
      <a
        @click.prevent="selectedCategory = 'photography'"
        :class="{ activeClasss: selectedCategory == 'photography' }"
      >PHOTOGRAPHY /</a>
      <a
        @click.prevent="selectedCategory = 'web'"
        :class="{ activeClasss: selectedCategory == 'web' }"
      >WEB /</a>
      <a
        @click.prevent="selectedCategory = 'applications'"
        :class="{ activeClasss: selectedCategory == 'applications' }"
      >APPLICATIONS</a>
      <div class="button-img">
        <img src="src/assets/grid.png" @click="activeClass = 'grid'">
        <img src="src/assets/list.png" @click="activeClass = 'list'">
      </div>
    </div>
    <div :class="activeClass">
      <div class="text-image" v-for="(project, index) in projects"  :key="index">
     <div>
      <img :src="project.url">
     </div>
      <div>
      <p id="title" v-if="activeClass == 'list'">{{ project.title }}</p>
      <p v-if="activeClass == 'list'">{{ project.text }}</p>
      </div>
      </div>
      <p id="no-result" v-if="projects.length == 0">No result.</p>
    </div>
  </div>
</template>

<script>
import db from '../../firebase/init'

export default {
  data() {
    return {
      activeClass: "grid",
      selectedCategory: "all"
    }
  },
  computed: {
    projects() {
      if (this.selectedCategory === "all") {
        return this.$store.getters.getProjects;
      }
      return this.$store.getters.getProjects.filter(
        project => project.category === this.selectedCategory
      );
    }
  },
  created() {
    db.collection('work').get()
    .then(snapshot => {
      const projects = []
      snapshot.forEach(doc => {
        projects.push(doc.data())
      })
    this.$store.commit('setProjects', projects)
    })
  }
};
</script>
<style>
.check-work {
  width: 100%;
  height: 100px;
  background-color: #2ecc71;
}
.check-work h3 {
  width: 420px;
  height: 23px;
  color: white;
  padding-top: 30px;
  font-size: 28px;
  font-weight: 500;
}
.filter {
  display: flex;
  list-style-type: none;
  margin-left: 480px;
  margin-top: 50px;
  margin-bottom: 20px;
  text-decoration: none;
  color: #a5a4a4;
  font-weight: 500;
  font-size: 18px;
}
.activeClasss {
  color: #2ecc71 !important;
}
.filter a:hover {
  color: #2ecc71 !important;
  cursor: pointer;
}
.button-img {
  margin-left: 490px;
  cursor: pointer;
}
.ghoto-gallery {
  margin-left: 1385px;
  margin-top: -40px;
  cursor: pointer;
}
.grid {
  display: grid;
  grid-gap: 18px;
  grid-template-columns: repeat(auto-fill, 300px);
  width: 940px;
  margin: 0 auto 19px auto;
}
.grid img {
  height: 220px;
  width: 300px;
  margin: 0 auto 0 auto;
}
.list {
  display: block;
  width: 300px;
  margin-left: 480px;
  margin-bottom: 30px;
}
.list img {
  padding: 10px 0;
}
#no-result {
  font-size: 20px;
  color: rgb(168, 165, 165);
}
.text-image {
  display: inline;
  display: flex;
}
.list p {
  width: 500px;
  margin-left: 50px;
 margin-top: 20px;
}
#title {
  font-size: 20px;
  font-weight: 800;
}
</style>