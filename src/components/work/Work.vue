<template>
   <div>
                 <div class="check-work">
                            <div class="container">
                                  <h3 >CHECK OUT WHAT I CAN DO</h3>
                            </div>
                 </div>
               <div class="filter">
                   <a  @click.prevent="selectedCategory ='all'" :class="{ activeClasss: selectedCategory == 'all' }" >All / </a>
                   <a  @click.prevent="selectedCategory ='print'" :class="{ activeClasss: selectedCategory == 'print' }"> PRINT / </a>
                   <a  @click.prevent="selectedCategory = 'photography'" :class="{ activeClasss: selectedCategory == 'photography' }"> PHOTOGRAPHY / </a>
                   <a  @click.prevent="selectedCategory = 'web'" :class="{ activeClasss: selectedCategory == 'web' }" > WEB / </a>
                   <a  @click.prevent="selectedCategory = 'applications'" :class="{ activeClasss: selectedCategory == 'applications' }" > APPLICATIONS </a>
                  <div class="button-img">
                  <img src="src/assets/grid.png" @click="activeClass = 'grid'">
                  <img src="src/assets/list.png" @click="activeClass = 'list'">
                  </div>
               </div>
             <div :class="activeClass">
                    <img v-for="(project, index) in filteredCategory" :src="project.url" :key="index" class="img-work">
                    <p id="no-result" v-if="filteredCategory.length == 0">No result.</p>
             </div>
   </div>
</template>
<script>
export default {
    data(){
        return{
            activeClass: "grid",
            projects: [
              { category: "print", name: "Bill Gates", description:"", url:"https://i.imgur.com/jAZHLmA.png" },
              { category: "print", name: "Bawdqwefwqefq", url:"https://i.imgur.com/AiqsQjc.png" },
              { category: "print", name: "Bkoknjokjnoi", url:"https://i.imgur.com/cOw5Mle.png" },
              { category: "web", name: "Bilwefvwecvs", url:"https://i.imgur.com/vD0nQfo.png" },
              { category: "web", name: "efcwecvwev", url:"https://i.imgur.com/v2KyPnW.png"  },
              { category: "web", name: "Biwefwevcwes", url:"https://i.imgur.com/0jfhjJW.png"  },
              { category: "applications", name: "Bewfw3erv3wvs", url:"https://i.imgur.com/gRe9Axs.png"  },
              { category: "applications", name: "ewf3wfvw", url:"https://i.imgur.com/AVFJ6Lk.png"  },
              { category: "applications", name: "wfwevwevevs", url:"https://i.imgur.com/CyAK5BN.png"  },
            ],
            selectedCategory: "all",
         }
    },
    computed: {
      filteredCategory() {
        if(this.selectedCategory === "all") {
           return this.projects;
        } else {
          return this.projects.filter(person => person.category == this.selectedCategory)
        }
      }
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
    margin-left: 445px;
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
    color:#2ecc71 !important; 
  }
  .filter a {
    cursor: pointer;
  }
 .button-img {
   margin-left: 575px;
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
  .list img{
    padding: 10px 0;
  }
  label [type='radio'] {
   display: none;
 }
 #no-result {
   font-size: 20px;
   color: rgb(168, 165, 165);
 }
</style>