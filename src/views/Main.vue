<script setup lang="ts">
import FooterSection from "@/components/FooterSection.vue";
import HeaderNav from "@/components/HeaderNav.vue";

document.addEventListener('DOMContentLoaded', function () {
  initParallaxScroll();
});

function initParallaxScroll() {
  const background = document.querySelector('.scrolling-background');
  const PARALLAX_SPEED = 0.2;

  window.addEventListener('scroll', () => {
    const offset = window.scrollY * PARALLAX_SPEED;
    background.style.transform = `translate3d(0, -${offset}px, 0)`;
  }, {passive: true});
}

</script>

<template>
  <div class="background-container">
    <div class="scrolling-background"/>
  </div>
  <HeaderNav/>
  <router-view/>
  <FooterSection/>
</template>

<style scoped>
.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.scrolling-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  background-image: var(--background-image);
  background-size: cover;
  background-position: center;
  will-change: transform;
}
</style>