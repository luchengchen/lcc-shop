<template>
  <div class="home-body">
    <div class="body-title">
      <div>
        <swiper :options="swiperOption2">
          <!-- 这部分放你要渲染的那些内容 -->
          <swiper-slide v-for="(item,index) in items" :key="index">
            {{item}}
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Homebody',
  data () {
    return {
      items: ['111', '222'],
      swiperOption2: {
        slidesPerView: 'auto',
        autoplay: false,
        centeredSlides: true,
        paginationClickable: true,
        onSlideChangeEnd: swiper => {
          // 这个位置放swiper的回调方法
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        }
      },
      swiperSlides2: [1, 2, 3, 4, 5]
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-body {
    background: #efeeeed7;
    position: absolute;
    left: 0;
    right: 0;
    top: 31%;
    bottom: 50px;
}
.body-title {
    position: relative;
    width: 94%;
    margin: 10px 3%;
    height: 200px;
    background: #ffffff;
}
</style>
