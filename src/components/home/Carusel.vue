<template>
    <div class="slick-container">
  <Slick class=""
    ref="slick"
  :options="slickOptions">
    <div>
      <img class="slick-img" src="../../assets/5.png">
      </div>
     <div>
      <img class="slick-img" src="../../assets/1.png">
      </div>
     <div> 
      <img class="slick-img" src="../../assets/23.png">
      </div>
      <div>
      <img class="slick-img" src="../../assets/25.png"> 
      </div>
      <div>
      <img class="slick-img" src="../../assets/24.png">
      </div>
      <div>
      <img class="slick-img" src="../../assets/5.png">
      </div>
     <div>
      <img class="slick-img" src="../../assets/1.png">
      </div>
     <div> 
      <img class="slick-img" src="../../assets/23.png">
      </div>
      <div>
      <img class="slick-img" src="../../assets/25.png"> 
      </div>
      <div>
      <img class="slick-img" src="../../assets/24.png">
      </div>
  </Slick>  
  <button @click="prev" class="prev-button"><p> < </p></button>     
  <button @click="next" class="next-button"><p> > </p></button>  
     <div class="project-detail">
             <p> <p> DARK UI KIT FREEBIE</p> <br>
             Praesent ut ligula massa. Vivamus vel mi eget mauris tempor imperdiet. Quisque tempor, neque in venenatis consequat <br>, magna sapien 
                    viverra ante, quis sagittis nulla urna nec mauris. Etiam vehicula.
            </div>
    </div>
</template>
<script>
import Slick from 'vue-slick'
export default {
    name: 'Carusel',
    components: {
      Slick
    },
    data() {
   return {
     slickOptions: {
       centerMode: true,
       centerPadding: '300px',
       slidesToShow: 5,
       arrows: false,
       responsive: [
     {
       breakpoint: 768,
       settings: {
         arrows: false,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 3
       }
     },
     {
       breakpoint: 480,
       settings: {
         arrows: false,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 1
       }
     }
   ]
   }
}
},
methods: {
       next() {
         this.$refs.slick.next();
       },
       prev() {
         this.$refs.slick.prev();
       },
       reInit() {
         this.$nextTick(() => {
           this.$refs.slick.reSlick();
         });
       }
     }
}

</script>
<style>
.slick-container {
  width: 100%;
}
.slick-img {
  width: 250px !important;
  height: 222px;
}
 .filtering {
   height: 300px;
   
 }
 .prev-button {
   width: 40px;
   height: 40px;
    margin-left: 690px;
    font-weight: bold;
    font-size: 40px;
    background-color: darkgrey;
    color: white;
 }
 .prev-button:focus {
     outline: none;
 }
 .prev-button:hover {
   color: greenyellow;
 }
 .prev-button p {
   margin-top: -13px;
 }
 .next-button {
    width: 40px;
   height: 40px;
   margin-left: 400px;
   margin-left: 430px;
    font-weight: bold;
    font-weight: 900;
    font-size: 40px;
    background-color: darkgrey;
    color: white;
 }
 .next-button:focus {
   outline: none;
 }
 .next-button:hover {
   color: greenyellow;
 }
 .next-button p {
   margin-top: -13px;
 }
  .project-detail {
    text-align: center;
    padding-bottom: 49px;
    font-size: 13px;
    color: #8c8a8a;
  }
  .project-detail p {
    margin-top: -50px;
    font-size: 18px;
    font-weight: 700;
    color: #8f8d8d;
  }
</style>