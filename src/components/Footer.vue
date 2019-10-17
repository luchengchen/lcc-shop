<template>
  <div class="foot">
    <ul>
      <li
        v-for="(item,index) in footList"
        :key="index"
        :class='[index===num ? "active" : ""]'
        @click="changeTab(index)"
        >
      <p class="iconfont" :class=item.icon></p>
      <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      num: 0,
      footList: [
        {name: '首页', icon: 'icon-shouye'},
        {name: '分类', icon: 'icon-tubiaolunkuo-'},
        {name: '种草社区', icon: 'icon-hua'},
        {name: '订单', icon: 'icon-icon--copy-copy'},
        {name: '我的', icon: 'icon-wode1'}
      ]
    }
  },
  methods: {
    changeTab (index) {
      this.num = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.foot {
  position:fixed;
  width:100%;
  bottom:0px;
  height:50px;
  line-height:50px;
  padding:0px;
  margin:0px;
  border-top:1px solid #d7d7d7;
}
.foot ul {
  display:flex;
  padding:0px;
  margin:0px;
}
.foot ul li {
  flex:1;
  text-align:center;
}
.foot ul li p {
  height:20px;
  line-height:20px;
}
.foot ul li p {
 padding-top:5px;
}
.foot ul li p:nth-child(2) {
  font-size:12px;
}
.active {
  color:#0088f5;
}

</style>
