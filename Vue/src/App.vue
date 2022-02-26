<template>
  <article>
    <transition name="fade">
      <router-view/>
    </transition>
  </article>
</template>

<script>

import AOS from 'aos';

export default {
  name: 'App',
  components: {},
  data() {return {};},
  created() {AOS.init();}
};
</script>

<style>
@import "./assets/Font/Font_Router.css";
@import "./assets/Css/All.css";

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  transition: opacity .5s;
  opacity: 0;
}
</style>