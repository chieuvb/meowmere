<script setup lang="ts">
import {useRouter} from 'vue-router';

const router = useRouter();

function redirectHome() {
  router.push('/');
}
</script>

<template>
  <header class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/play">Play</router-link>
    <router-link to="/community">Community</router-link>
    <img src="../assets/images/meowmere-hd.png" alt="Meowmere Logo" class="logo" @click="redirectHome">
    <router-link to="/terms">Terms</router-link>
    <router-link to="/privacy">Privacy</router-link>
    <router-link to="/contact">Contact</router-link>
  </header>
</template>

<style scoped>
.nav {
  background: rgba(20, 70, 77, 0.8);
  padding: var(--spacing-md);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-lg);
  top: 0;
  z-index: 100;
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.logo {
  height: 40px;
  margin: 0 var(--spacing-lg);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.1);
}

a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-sm);
  transition: all var(--transition-duration) ease;
}

a:hover {
  color: var(--minecraft-aqua);
  background-color: rgba(255, 255, 255, 0.1);
}

a.router-link-active {
  color: var(--minecraft-aqua);
}

@media (max-width: 768px) {
  .nav {
    flex-wrap: wrap;
    gap: var(--spacing-md);
  }

  .logo {
    order: -1;
    margin: var(--spacing-sm) auto;
    display: block;
  }
}
</style>
