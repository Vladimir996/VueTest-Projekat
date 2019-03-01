<template>
   <div>
                 <div class="check-work">
                            <div class="container">
                                  <h3 >CHECK OUT WHAT I CAN DO</h3>
                            </div>
                 </div>
                <div class="selection">
                        <ul>
                                <li>
                                    <a href=""  >ALL  / </a>
                                </li>
                                <li>
                                    <a href="">PRINT  / </a>
                                </li>
                                <li>
                                    <a href="">PHOTOGRAPHY  / </a>
                                </li>
                                <li>
                                    <a href="">WEB  / </a>
                                </li>
                                <li>
                                    <a href="">APPLICATIONS</a>
                                </li>
                            </ul>
                </div>
              <div class="ghoto-gallery">
                  <img src="src/assets/grid.png" @click="activeClass = 'grid'">
                  <img src="src/assets/list.png" @click="activeClass = 'list'">
            </div>
            <br>
             <div :class="activeClass">
                 
                    <img src="src/assets/16.png"  alt="">
               
                    <img src="src/assets/1.png"  alt=""  class="img-work">
                
                    <img src="src/assets/23.png"  alt="" class="img-work">
               
                    <img src="src/assets/22.png"  alt="" class="img-work">
                
                    <img src="src/assets/24.png"  alt="" class="img-work">
               
                    <img src="src/assets/25.png"  alt="" class="img-work">
        
                    <img src="src/assets/20.png"  alt="" class="img-work">
                
                    <img src="src/assets/4.png"  alt="" class="img-work">
                
                    <img src="src/assets/5.png"  alt="" class="img-work">

             </div>
        </div>
</template>
<script>
export default {
    data(){
        return{
            activeClass: "grid"
        }
    }
}
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
  .selection ul{
    display: flex;
    list-style-type: none;
    margin-left: 445px;
    margin-top: 50px;
  }
  .selection a {
    text-decoration: none;
    color: #a5a4a4;
    font-weight: 500;
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
</style>