<template>
  <div>
    <Slick class="slick-container" ref="slick" :options="slickOptions">
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
    <div class="carousel-text">
      <slick id="slick2" ref="slick" class="slick-paragraph" :options="slickOptions2">
        <div>
          <h4>DARK UI FREEBIE</h4>
          <p>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
            born
          </p>
        </div>
        <div>
          <h4>DEFENESTRATION</h4>
          <p>
            Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is
            pain
          </p>
        </div>
        <div>
          <h4>FANGED NOUMENA</h4>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti
            atque
          </p>
        </div>

        <div>
          <h4>SCHOPENHAUER</h4>
          <p>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi
            optio cumque nihil
          </p>
        </div>

        <div>
          <h4>ENCHIRIDION</h4>
          <p>
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
            demoralized
          </p>
        </div>
        <div>
          <h4>DARK UI FREEBIE</h4>
          <p>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
            born
          </p>
        </div>
        <div>
          <h4>DEFENESTRATION</h4>
          <p>
            Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is
            pain
          </p>
        </div>
        <div>
          <h4>FANGED NOUMENA</h4>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti
            atque
          </p>
        </div>

        <div>
          <h4>SCHOPENHAUER</h4>
          <p>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi
            optio cumque nihil
          </p>
        </div>
        <div>
          <h4>ENCHIRIDION</h4>
          <p>
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
            demoralized
          </p>
        </div>
      </slick>
    </div>
    <div class="ostali-samo-dugmici">
      <button @click="prev" class="prev-button">
        <p><</p>
      </button>
      <button @click="next" class="next-button">
        <p>></p>
      </button>
    </div>
  </div>
</template>
<script>
import Slick from "vue-slick";
export default {
  name: "Carusel",
  components: {
    Slick
  },
  data() {
    return {
      slickOptions: {
        centerMode: true,
        variableWidth: true,
         focusOnSelect: true,
        slidesToShow: 5,
        arrows: false,
        asNavFor: ".slick-paragraph"
      },
      slickOptions2: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: false,
        autoplaySpeed: 2000,
        asNavFor: ".slick-container"
      }
    };
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
};
</script>
<style>
.slick-container {
  width: 100%;
}
.slick-img {
  width: 290px !important;
  height: 222px;
}
.filtering {
  height: 300px;
}
.prev-button {
  width: 40px;
  height: 40px;
  margin-top: -150px;
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
  margin-left: 630px;
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
.slick-container .slick-slide {
  margin: 0 10px;
}
.carousel-text {
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #8f8d8d;
}
.ostali-samo-dugmici {
  margin-left: 600px;
  margin-top: -70px;
  
}
</style>