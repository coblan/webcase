<template>
    <div class="about-s-item-box">
            <div class="about-s-item-front" :class="type">
                    <div class="inner">
                        <slot name="front">前面</slot>
                    </div>
            </div>
            <div class="about-s-item-back" :class="backType || type">
                <div class="inner">
                  <slot name="back">后面</slot>
                </div>

            </div>
    </div>
</template>
<script>
export default {
  props:{
    type:{
      default:'blue'
    },
    backType:{},
  }
}
</script>
<style scoped lang="scss">

.about-s-item-box {
    position: relative;
    -webkit-perspective: 920px;
    perspective: 920px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    cursor: default;

    &:hover{
        .about-s-item-front{
            -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
        }
        .about-s-item-back {
            -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
        }
    }
}
.about-s-item-back, .about-s-item-front{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    -webkit-box-shadow: 0 12px 21px #7889b6;
    box-shadow: 0 12px 21px #7889b6;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: opacity .55s ease .25s,-webkit-transform .9s cubic-bezier(.4,.2,.2,1);
    transition: opacity .55s ease .25s,-webkit-transform .9s cubic-bezier(.4,.2,.2,1);
    transition: transform .9s cubic-bezier(.4,.2,.2,1),opacity .55s ease .25s;
    transition: transform .9s cubic-bezier(.4,.2,.2,1),opacity .55s ease .25s,-webkit-transform .9s cubic-bezier(.4,.2,.2,1);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}
.about-s-item-back .inner, .about-s-item-front .inner {
    -webkit-perspective: inherit;
    perspective: inherit;
    -webkit-transform: translateZ(50px) scale(.94);
    transform: translateZ(50px) scale(.94);
    height: 100%;
    // color: #fff;
}
.about-s-item-back {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    //display: -webkit-box;
    //display: -ms-flexbox;
    //display: flex;
    //-webkit-box-align: center;
    //-ms-flex-align: center;
    //align-items: center;
    //padding: 0 20px;
}


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

</style>