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
</style>
