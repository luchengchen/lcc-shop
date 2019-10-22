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
    </div>
    <div>
      <swiper :options="swiperOption1">
        <!-- 这部分放你要渲染的那些内容 -->
        <swiper-slide v-for="(item,index) in items" :key="index">
          <img :src="item" class="index_img">
        </swiper-slide>
        <!--这是轮播的小圆点-->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="top-head-bottom">
      <div
        v-for="(item,index) in bottomList"
        :key="index"
      >
        <i class="iconfont" :class=item.icon></i>
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Footer',
  data () {
    return {
      searchList: [
        {name: 'jordan'},
        {name: 'neo'},
        {name: 'puma'},
        {name: 'nike'},
        {name: 'converse'},
        {name: '❤'}
      ],
      bottomList: [
        {name: '小鹿自营', icon: 'icon-zi1'},
        {name: '全球直采', icon: 'icon-quanqiu'},
        {name: '假一赔十', icon: 'icon-zheng'},
        {name: '售后无忧', icon: 'icon-qian1'}
      ],
      items: ['../static/1-3.jpg', '../static/1-2.jpg', '../static/1-1.jpg'],
      swiperOption1: {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        autoplay: 3000,
        centeredSlides: true,
        paginationClickable: true,
        onSlideChangeEnd: swiper => {
          // 这个位置放swiper的回调方法
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        }
      },
      swiperSlides1: [1, 2, 3, 4, 5]
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
    height: 31%;
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
    width: 100%;
    height: 131px;
    margin: 20px auto 0px auto;
    overflow: hidden;
  }
  .swiper-slide img {
    width:100%;
    height:130px;
    border-radius: 5px;
  }
  .swiper-wrapper {
    height: 100%;
  }
  .top-head-bottom {
    color: #ffffff;
    display: flex;
  }
  .top-head-bottom div {
    flex: 1;
    padding: 5px 0;
    text-align: center;
    font-size: 13px;
  }
  .top-head-bottom div i {
    font-size: 14px;
  }
</style>
