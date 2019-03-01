<template>
  <div>
    <div class="page-title">
      <div class="container">
        <h3>ABOUT MY BUSINESS</h3>
      </div>
    </div>
    <div class="photo-about">
      <img src="src/assets/about.png">
      <p>
        Mauris ut malesuada ligula, non congue metus. Cras sit amet consectetur sapien. Fusce interdum
        nec erat sit amet posuere. Aenean fermentum nisl at nisl euismod, sit amet lobortis purus
        consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Suspendisse ornare gravida turpis, eget egestas orci ornare sit amet. Quisque
        pellentesque, turpis efficitur euismod venenatis, est tortor tempus ante, sit amet ornare diam
        diam accumsan ligula.
        <br>
        <br> Cras nec fermentum orci. Duis placerat nisi nibh, in suscipit quam porta sit amet. Vivamus
        feugiat eros non vulputate tempus. Quisque non neque a dolor finibus posuere. Aenean nec mi sit
        ametus massa sapien, interdum
        cursus purus sollicitudin non. Nam vel interdum nunc. Quisque imperdiet fermentum est, et
        iaculis justo. Fusce eget risus nisi. Vivamus quis augue laoreet, imperdiet nisi id,
      </p>
    </div>
    <div class="mission-statement">
      <h4>MISSION STATEMENT</h4>
      <p>
        Curabitur pretium tempus viverra. Maecenas tincidunt mollis arcu et pellentesque. Cras vitae
        massa vitae nibh aliquam gravida. Integer elementum ultrices libero. Curabitur tincidunt
        pretium nulla in condimentum. Suspendisse ornare augue id tincidunt hendrerit. Curabitur
        accumsan mauris libero, bibendum tincidunt risus dictum ac. Vivamus at sollicitudin elit. Ut eu
        eros pretium, pulvinar turpis id, ultricies nibh. Integer egestas enim vel placerat facilisis.
        Phasellus eros purus, egestas eget tincidunt ac, ullamcorper id neque. Nam at nisi aliquam,
        molestie ipsum non, semper augue.is.
      </p>
      <div class="fun-facts">
        <h4>FUN FACTS</h4>
        <p>
          Mauris blandit mi fringilla nisi laoreet gravida. Sed porttitor pulvinar mi, vel finibus augue
          fermentum nec. Pellentesque augue sapien, maximus quis eros at, pharetra volutpat sem.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Aliquam erat volutpat. Donec accumsan posuere augue, eu molestie ex blandit ut. Sed blandit
          convallis elit in tempor. Quisque dignissim consectetur hendrerit. Curabitur leo dolor,
          tristique ut gravida rutrum, consectetur eu diam.
        </p>
      </div>
    </div>
    <div class="services">
      <h4>SERVICES</h4>
    </div>
    <div class="panel">
      <div class="container panel-center">
        <div @click="currentTab = 0" :class="{ activeTab: currentTab === 0 }">
          <img src="src/assets/websites.png" alt class="photos">
          <h4 id="websites">WEBSITES</h4>
        </div>
        <div @click="currentTab = 1" :class="{ activeTab: currentTab === 1 }">
          <img src="src/assets/photo.png" alt class="photos">
          <h4 id="photography">PHOTOGRAPHY</h4>
        </div>
        <div @click="currentTab = 2" :class="{ activeTab: currentTab === 2 }">
          <img src="src/assets/seo.png" alt class="photos">
          <h4 id="seo">SEO</h4>
        </div>
        <div @click="currentTab = 3" :class="{ activeTab: currentTab === 3 }">
          <img src="src/assets/applications.png" alt class="photos">
          <h4 id="applications">APPLICATIONS</h4>
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
  width: 382px;
  height: 262px;
  margin-left: 480px;
  margin-top: 49px;
}
.photo-about p {
  width: 521px;
  height: 255px;
  margin-left: 425px;
  margin-top: -263px;
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