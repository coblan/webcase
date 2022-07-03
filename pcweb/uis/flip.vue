<template>
<!-- ontouchstart="this.classList.toggle('hover');" -->
    <div class="flip-container" >
        <div class="flipper" :class="type">
            <div class="front">
                <!-- 前面内容 -->
                <slot name="front">前面</slot>
            </div>
            <div class="back">
                <slot name="back">后面</slot>
                <!-- 背面内容 -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
      type:{

      }
    },
    // mounted(){
    //   setTimeout(()=>{
    //     this.$el.querySelector('.added').classList.add('back')
    //   },100)
    //
    // }
}
</script>


<style scoped  lang="scss">
/* entire container, keeps perspective */
.flip-container {
	  perspective: 1000;
    -webkit-perspective: 1000;
    -moz-perspective: 1000;
    -ms-perspective: 1000;
}
.flipper {
  transition: .8s;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow: 0 12px 20px #7889b6;
   //transform: rotateY(180deg);
}

	/* flip the pane when hovered */
	.flip-container:hover .flipper{
		transform: translate3d( 0, 0, 0) rotateY(180deg);

	}

  //.flipper{
  //    transform: rotateY(100deg);
  //}

.blue{
  background-color: #0096ff;
  background-image: radial-gradient(circle 280px at center,#0096ff 0,#0096ff 24%,#0492fd 32%,#2372ee 91%,#286dec 100%);
}
.orange{
  background-color: #ff784e;
  background-image: radial-gradient(circle 280px at center,#ff784e 0,#ff784e 24%,#ff764e 32%,#ff664e 91%,#ff644e 100%);
}
.purple{
  background-color: #8787fb;
  background-image: radial-gradient(circle 280px at center,#8787fb 0,#8787fb 23%,#8484fb 32%,#7272f7 91%,#6f6ff7 100%);
}
.red{
  background-color: #fc4e35;
  background-image: radial-gradient(circle 280px at center,#fc4e35 0,#fc4e35 24%,#fc4b36 32%,#ff313a 91%,#ff2d3b 100%);
}

.front{
  transform: translateZ(40px) scale(0.94);
}

//.back {
//  transform: rotateY(180deg);
//}
.back{
  transform: rotateY(180deg) translateZ(40px) scale(0.94);
}
// .flip-container{
	// width: 320px;
	// height: 480px;
// }
// .flip-container, .front, .back {
// 	width: 320px;
// 	height: 480px;
// }
// .front{
//     background-color: yellow;
// } 
// .back {
//     background-color: red;
// }


/* flip speed goes here */



/* hide back of pane during swap */
.front, .back {
	backface-visibility: hidden;
  width: 100%;
  height: 100%;
	position: absolute;
	top: 0;
	left: 0;
  right: 0;
  bottom: 0;

}


/* front pane, placed above back */
.front {
	z-index: 2;
}

/* back, initially hidden pane */

</style>