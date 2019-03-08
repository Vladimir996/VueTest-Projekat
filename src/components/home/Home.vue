<template>
     <div class="homeContainer">
      <div class="background img-animationRL">
        <img src="src/assets/hero.png" alt="">
      </div>
        <p class="home-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            egestas enim ac est feugiat, <br />at tristique justo dignissim. Nam
            quis ligula faucibus, finibus arcu eu
        </p>
      <div class="button-portfolio">
       <router-link to="/work" exact><button type="button" > BROWSE PORTFOLIO </button></router-link>  
      </div>
      <div class="background-video">
        <div class="video-media">
          <img src="src/assets/video-player-placeholder.jpg"
            alt="" class="slikaYou" @click="show">
       <modal name="video-popup">
           <iframe id="video-popup" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"></iframe>
         <div class="dugmence" @click="hide">
             <p>C</p>
             <p>L</p>
             <p>O</p>
             <p>S</p>
             <p>E</p> 
         </div>
       </modal>
      </div>
        <div class="video-text"> 
                <h4>GET TO KNOW US A LITTLE BETTER</h4>
                <p> Praesent ut ligula massa. Vivamus vel mi eget mauris tempor imperdiet. Quisque tempor, neque in venenatis consequat, magna sapien 
                    viverra ante, quis sagittis nulla urna nec mauris. Etiam vehicula justo mollis pretium sollicitudin.Vivamus vel mi eget mauris tempor imperdiet. Quisque tempor, neque in venenatis consequat, magna sapien 
                    viverra ante, quis sagittis nulla urna nec mauris. 
                <br> <br>
               Nulla sodales malesuada neque, consequat eleifend odio commodo eget. Sed nulla arcu, dictum ac odio vel, rutrum dignissim quam. 
               Vivamus vel mi eget maur, magna sapien 
                    viverra ante, quis sagittis nulla urna nec mauris. 
               Etiam ac facilisis eros, at eleifend mi.
               </p>
        </div>
    </div>
      <div class="portfolio-projects">
            <p>A COUPLE OF OUR FEATURED PROJECTS</p>
      </div>
      <div class="portfolio-text">
            <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel agittis ac, gravida quis tortor. .</p>
      </div>
       <Carusel/>
      </div>
</template>
<script>
import Carusel from "./Carusel.vue";
export default {
  components: {
    Carusel
  },
  // data() {},
  methods: {
  show () {
    this.$modal.show('video-popup');
  },
  hide () {
    
    this.$modal.hide('video-popup');
  }
}
};  
</script>

<style>  
.homeContainer{
      width: 100%;
      height: 1550px;
  }
  .background img{
      width: 100%;
      height: 525px;
  }
  /* Animation */
  .img-animationRL {
    position: relative;
    animation-name: moveAnimRL;
    animation-duration: 1.5s;
  }
  @keyframes moveAnimRL {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
    0% {
      right: 0%;
      left: 100%;
    }
    100% {
      right: 100%;
      left: 0%;
    }
  }
 #video-popup{
   width: 575px;
   height: 300px;
 }
.dugmence {
  width: 30px;
  height: 300px;
  margin-top: -300px;
  margin-left: 580px;
  cursor: pointer;
  font-weight: 900;
  padding-top: 52px;
  
}
.dugmence:hover {
  color: red;
}
  .home-text {
    height: 736;
    width: 40;
    padding-top: 30px; 
    color:#b9b8b8;
    text-align: center;
  }
  .button-portfolio {
    width: 100%;
    text-align: center;
    text-decoration: none;
    padding-top: 10px;
  }
  .button-portfolio button {
    background-color: rgb(45, 204, 114);
    margin: 10px auto 31px auto;
    width: 184px;
    height: 40px;
    border-radius: 3%;
    color: white;
    border: none;
    cursor: pointer;
    font-weight: 700;
  }
  .background-video {
    width: 100%;
    height: 317px;
    background-color: #efefef;
    display: flex;
  }
  .video-media {
    margin-left: 500px;
    padding-top: 39px;
    padding-right: 30px;
    cursor: pointer;
  }
  .video-media button {
    width: 25px;
    height: 40px;
    color: red;
    font-weight: 900;
  }
  .video-text {
    width: 516px;
    height: 186px;
    margin-left: 30px;
    margin-top: 10px;
    padding-bottom: 130px;
    color: #b0afaf;
  }
  .video-text p {
    font-size: 13px;
  }
  .video-text h4 {
    font-weight: 700;
    color: #7f7f7f;
    font-size: 23px;
    margin-top: 30px;
  }
  .portfolio-projects {
    width: 337px;
    height: 23px;
    margin: 0 auto;
    font-weight: 700;
    color: #8c8a8a;
    font-size: 18px;
  }
  .portfolio-text {
    width: 741px;
    height: 35px;
    margin-top: -15px;
    margin-left: 340px;
    margin-bottom: 30px;
    text-align: center;
    padding-bottom: 45px;
    font-size: 13px;
    color: #8f8d8d;
  }
  .page {
    margin-left: 180px;
  } 
</style>