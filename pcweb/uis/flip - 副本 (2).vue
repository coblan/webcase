<template>
<!-- ontouchstart="this.classList.toggle('hover');" -->
<!--    <div class="flip-container" >-->
        <div class="flipper">
            <div class="front blue">
                <!-- 前面内容 -->
                <slot name="front">前面</slot>
            </div>
            <div class="back blue">
                <slot name="back">后面</slot>
                <!-- 背面内容 -->
            </div>
        </div>
<!--    </div>-->
</template>
<script>
export default {
    props:{

    }
}
</script>


<style  lang="scss">
/* entire container, keeps perspective */
.flip-container {
	  perspective: 1000;
    -webkit-perspective: 1000;
    -moz-perspective: 1000;
    -ms-perspective: 1000;
    // transform-style: preserve-3d;
}
.flipper{
  perspective: 1000;
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -ms-perspective: 1000;
}

	/* flip the pane when hovered */
	//.flip-container:hover .flipper, .flip-container.hover .flipper {
	//	transform: rotateY(180deg);
	//}
    //.flipper{
    //    transform: rotateY(40deg);
    //
    //}

.blue{
  background-color: #0096ff;
  background-image: radial-gradient(circle 280px at center,#0096ff 0,#0096ff 24%,#0492fd 32%,#2372ee 91%,#286dec 100%);
}
.flipper:hover{
  .front{
    transform: rotateY(180deg) translateZ(50px);
  }

}

//.back {
//  transform: rotateY(180deg);
//}
.back{
  transform: rotateY(180deg) translateZ(50px);
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
.flipper {
	transition: 1s;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
	  position: relative;
    width: 100%;
    height: 100%;
    // transform: rotateY(180deg);
}


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