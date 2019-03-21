<template>
  <div>
    <div class="page-title">
      <div class="container">
        <h3>{{ aboutInfo.hederText.title }}</h3>
      </div>
    </div>
    <div class="photo-about">
      <img :src="aboutInfo.photoAbout.url">
      <p> {{ aboutInfo.paragraph }}</p>
    </div>
    <div class="mission-statement">
      <h4>{{ aboutInfo.mission.title }}</h4>
      <p>{{ aboutInfo.mission.text }}</p>
      <div class="fun-facts">
        <h4>{{ aboutInfo.fun.title }}</h4>
        <p>{{ aboutInfo.fun.text }}</p>
      </div>
    </div>
    <div class="services">
      <h4>{{ aboutInfo.services.title }}</h4>
    </div>
    <div class="panel">
      <div class="container panel-center">
        <div @click="currentTab = 0" :class="{ activeTab: currentTab === 0 }">
          <img :src="aboutInfo.photoPanel1.url" class="photos">
          <h4 id="websites">{{ aboutInfo.photoPanel1.title }}</h4>
        </div>
        <div @click="currentTab = 1" :class="{ activeTab: currentTab === 1 }">
          <img :src="aboutInfo.photoPanel2.url" class="photos">
          <h4 id="photography">{{ aboutInfo.photoPanel2.title }}</h4>
        </div>
        <div @click="currentTab = 2" :class="{ activeTab: currentTab === 2 }">
          <img :src="aboutInfo.photoPanel3.url" class="photos">
          <h4 id="seo">{{ aboutInfo.photoPanel3.title }}</h4>
        </div>
        <div @click="currentTab = 3" :class="{ activeTab: currentTab === 3 }">
          <img :src="aboutInfo.photoPanel4.url" class="photos">
          <h4 id="applications">{{ aboutInfo.photoPanel4.title }}</h4>
        </div>
      </div>
      <div class="about-services">
        <p>{{ tabs[currentTab].description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentTab: 1,
      tabs: [
        {
          description:
            "Vel omnis nulla at, nam doming deleniti ei. Pri ne uctior nec an, eu vix augue vulputate consectetuer. Duis pertinax salutandi an has. Vivendo facilisi constituam ea vim."
        },
        {
          description:
            "Et pro posse exerci. Alterum suscipit ad mea, id tota decore contentiones nam. Ne sea iriure albucius percipitur, cu clita utamur has. Eos an tibique partiendo."
        },
        {
          description:
            "Sit id mentitum iudicabit consectetuer, modus nonumes Choro saepe laboramus ad sea, facer graeci ei sed, et eam malis nullam altera."
        },
        {
          description:
            "Cum errem necessitatibus ex, at decore  hasVoluptua intellegat sententiae te his. Eum ad agam augue scriptorem, ex causae dissentias nam."
        }
      ]
    };
  },
  computed: {
    aboutInfo() {
      return this.$store.getters.aboutInfo;
    }
  }
};
</script>
<style>
.page-title {
  background-color: #2ecc71;
}
.page-title h3 {
  color: white;
  padding: 30px 0px;
}
.photo-about {
  width: 922px;
  height: 262px;
  margin-left: 480px;
  margin-top: 49px;
  display: flex;
}
.photo-about p {
  margin-left: 55px;
  color: #8a8888;
  font-size: 14px;
}
.mission-statement {
  width: 486px;
  height: 123px;
  color: #8a8888;
  margin-left: 480px;
  margin-top: 49px;
  padding-bottom: 89px;
  font-size: 14px;
}
.mission-statement h4 {
  font-size: 19px;
  font-weight: 500;
}
.fun-facts {
  width: 436px;
  height: 123px;
  margin-left: 500px;
  margin-top: -215px;
  font-size: 14px;
}
.fun-facts h4 {
  font-size: 19px;
  font-weight: 500;
}
.services {
  width: 117px;
  height: 18px;
  margin-left: 480px;
  margin-bottom: 20px;
  color: #8a8888;
  padding-bottom: 15px;
}
.services h4 {
  font-size: 19px;
  font-weight: 500;
  margin-top: 120px;
  text-decoration: 0 none;
}
.panel {
  text-align: center;
  height: 200px;
  margin-bottom: 100px;
  background-color: #efefef;
}
.panel-center {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  cursor: pointer;
}
.panel h4 {
  color: #423e3e;
  margin-top: 20px;
}

.photos {
  margin-top: 47px;
}
#websites {
  margin-top: 30px;
  font-size: 21px;
}
#photography {
  margin-top: 45px;
  font-size: 21px;
}
#seo {
  margin-top: 40px;
  font-size: 21px;
}
#applications {
  margin-top: 45px;
  font-size: 21px;
}
.about-services {
  width: 500px;
  height: 120px;
  margin-top: 25px;
  margin-left: 650px;
}
.activeTab {
  height: 200px;
  background-color: #dadada;
  color: #423e3d;
}
</style>