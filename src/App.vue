<template>
  <div id="app">
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../src/components/Footer.vue'
import Header from '../src/components/Header.vue'
export default {
  name: 'App',
  components: {
    Footer,
    Header
  }
}
</script>

<style>
body {
  margin:0px;
  padding:0px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.active {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
