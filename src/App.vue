<template>
  <div class="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer> 
    
  </div>
</template>

<script>
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'

export default {
  components: {
    'app-header': Header,
    AppFooter: Footer
    
  }

}
</script> 

<style>
.app{
    background-color:white;
    font-family: 'Roboto', sans-serif;
}
.container{
    width: 970px;
    height: auto;
}
.header {
  margin: 0 auto;
  height: auto;
}
#logo {
  margin-top: 20px;
}
#line {
  display: block;
  height: 1px;
  margin: 30px auto auto auto;
  padding: 0;
  background-color: #dadada;
  margin-top: 30px;
}
.media {
  display: inline;
  margin-left: 590px;
}
.link-list {
  list-style-type: none;
  margin-left: -15px;
  padding-left: 0;
  margin-top: 30px;
  font-weight: 500;
  padding-bottom: 0;
  color: white;
}
.link-list a {
  text-decoration: none;
  text-decoration: none;
  color: #737373;
  font-size: 17px;
}
.link-list li {
  display: inline;
  margin-top: -10px;
  margin-right: 38px;
  margin-bottom: 15px;
  text-decoration: none;
}
.navbar-toggler {
  /* margin: 0 auto; */
  margin-left: 160px;
}
</style>
