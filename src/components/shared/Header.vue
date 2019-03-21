<template>
        <header>
                <div class="header">
                     <img id="logo" :src="logoHeader.url">
                    
                     <div class="media">
                     <a href="https://twitter.com/">
                         <img src="src/assets/twitter.png" alt="twitter">
                     </a>
         
                     <a href="https://www.facebook.com/">
                         <img src="src/assets/facebook.png" alt="facebook">
                     </a>
         
                     <a href="https://rss.com/">
                         <img src="src/assets/rss.png" alt="rss">
                     </a>

                     <a href="https://www.pinterest.com/">
                         <img src="src/assets/pinterest.png" alt="pinterest">
                     </a>

                     <a href="https://plus.google.com/">
                         <img src="src/assets/google-plus.png" alt="google-plus">
                     </a>

                     <a href="https://dribbble.com/">
                         <img src="src/assets/dribbble.png" alt="dribbble">
                     </a>
                 </div>
                 <div id="line"></div>
                 <div class="links">
                         <ul class="link-list">
                                 <li>
                                     <router-link to="/" exact>HOME</router-link>
                                 </li>
                                 <li>
                                     <router-link to="/about" exact>ABOUT</router-link>
                                 </li>
                                 <li>
                                     <router-link to="/work" exact>WORK</router-link>
                                 </li>
                                 <li>
                                    <router-link to="/contact" exact>CONTACT</router-link>
                                 </li>
                             </ul>
                 </div>
                </div>
             </header>
</template>
<script>
export default {
    computed: {
      logoHeader() {
     return this.$store.getters.logoHeader;
   }
  } 
}
</script>

<style>
.header{
    margin: 0 auto;
    width: 940px;
    height: 183px;
}
#logo {
    margin-top: 30px;
    display: inline;
  }
  #line {
    display: block;
    width: 100%;
    height: 1px;
    margin: 30px auto auto auto;
    padding: 0;
    background-color: #dadada;
    margin-top: 30px;
  }
  .media {
    display: inline;
    margin-bottom: 30px;
    margin-left: 561px;
    margin-top: 46px;
  }
  .link-list {
    list-style-type: none;
    margin-left: 0;
    padding-left: 0;
    margin-top: 30px;
    font-weight: 500;
    padding-bottom: 0;
    margin-bottom: 28px;
    color: #dadada;
  }
  .link-list a{
    text-decoration:none;
    color:#7f7f7f; 
    text-decoration: none;
    color:#737373; 
    font-size: 17px;
}
.link-list li {
  display: inline;
  margin-right: 38px;
  text-decoration: none;
}
</style>