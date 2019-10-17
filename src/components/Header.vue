<template>
  <div class="header">
    <div>
      <div class="header-top">
        <div class="header-top-left">
          <p><i class="iconfont icon-richscan_icon" ></i></p>
          <p>扫一扫</p>
        </div>
        <div class="header-top-middle">
          <i class="iconfont icon-sousuo" ></i>
          <input type='text' placeholder="adidas"/>
        </div>
        <div class="header-top-right">
          <i class="iconfont icon-xiaoxi"></i>
        </div>
      </div>
      <div class="header-hot-search">
        热搜：
        <span
          v-for="(item,index) in searchList"
          :key="index"
        >{{item.name}}</span>
      </div>
      <div>
        <swiper>
          <!-- 这部分放你要渲染的那些内容 -->
          <swiper-slide v-for="(item,index) in items" :key="index">
            <img :src="item" class="index_img">
          </swiper-slide>
          <!--这是轮播的小圆点-->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Footer',
  data () {
    return {
      searchList: [
        {name: '粉底刷'},
        {name: 'neo'},
        {name: 'puma'},
        {name: 'nike'},
        {name: 'converse'},
        {name: '❤'}
      ],
      items: ['../static/1-1.jpg', '../static/1-2.jpg', '../static/1-3.jpg'],
      swiperOption: {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        autoplay: false,
        centeredSlides: true,
        paginationClickable: true,
        onSlideChangeEnd: swiper => {
          // 这个位置放swiper的回调方法
          // this.page = swiper.realIndex + 1
          // this.index = swiper.realIndex
        }
      },
      swiperSlides: [1, 2, 3]
    }
  },
  methods: {
  },
  // 定义这个sweiper对象
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // 这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    // this.swiper.slideTo(0, 0, false)
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 30%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background: #769fd2;
    overflow: hidden;
}
.header-top {
  color: #ffffff;
  display: flex;
}
.header-top >div {
  text-align: center;
  padding: .35rem .65rem;
}
.header-top-left, header-top-right{
  width: 17%;
}
.header-top-middle {
  width: 78%;
  position: relative;

}
.header-top-left p {
  font-size: .65rem;
}
.header-top-middle input{
  height: 1.8rem;
  width: 80%;
  border-radius: 1rem;
  padding-left: 2.3rem;
  border: none;
}
.header-top-middle i {
  position: absolute;
  top: 30%;
  padding-left: .5rem;
  color: #e04242;
}

.header-top-right {
  font-size: 16px;
}
.header-hot-search {
  color:#ffffff;
  padding: 5px 5px;
  display: flex;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  padding-left: 5%;
}
.header-hot-search span {
  display: block;
  float: left;
  height: 25px;
  line-height: 25px;
  margin-left: 5px;
  padding: 0px 3px;
  background: #698cb7;
  border-radius: 6px;
  color: white;
  box-shadow: inset 0 0 10px #dcdcdc;
}
 .swiper-container {
    width: 500px;
    height: 121px;
    margin: 20px auto;
    over-flow: hidden;
  }
  .swiper-slide img {
    width:100%;
    height:20%;
  }
</style>
