<script setup lang="ts">
import {useRouter} from 'vue-router';

const router = useRouter();

function redirectHome() {
  router.push('/');
}

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section logo-section">
        <img src="../assets/images/meowmere-hd.png" alt="Meowmere Logo" class="footer-logo" @click="redirectHome">
        <p class="tagline">The ultimate Minecraft-inspired adventure</p>
      </div>

      <div class="footer-section links-section">
        <h3>Quick Links</h3>
        <nav class="footer-nav">
          <router-link to="/">Home</router-link>
          <router-link to="/play">Play</router-link>
          <router-link to="/community">Community</router-link>
          <router-link to="/terms">Terms</router-link>
          <router-link to="/privacy">Privacy</router-link>
          <router-link to="/contact">Contact</router-link>
        </nav>
      </div>

      <div class="footer-section contact-section">
        <h3>Contact Us</h3>
        <p>Email: info@meowmere.site</p>
        <p>Support: support@meowmere.site</p>
        <p>Address: Hanoi, Vietnam</p>
      </div>

      <div class="footer-section social-section">
        <h3>Follow Us</h3>
        <div class="social-links">
          <a href="https://facebook.com" target="_blank" class="social-link"><img src="../assets/images/icons8-facebook-48.png" alt="Facebook"></a>
          <a href="https://instagram.com" target="_blank" class="social-link"><img src="../assets/images/icons8-instagram-48.png" alt="Instagram"></a>
          <a href="https://youtube.com" target="_blank" class="social-link"><img src="../assets/images/icons8-youtube-48.png" alt="Youtube"></a>
          <a href="https://discord.com" target="_blank" class="social-link"><img src="../assets/images/icons8-discord-48.png" alt="Discord"></a>
          <a href="https://x.com" target="_blank" class="social-link"><img src="../assets/images/icons8-x-48.png" alt="X app"></a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} Meowmere. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: rgba(20, 70, 77, 0.9);
  padding: var(--spacing-lg) var(--spacing-md);
  margin-top: auto;
  backdrop-filter: blur(5px);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-section h3 {
  color: var(--minecraft-aqua);
  margin-bottom: var(--spacing-md);
  font-size: 1.2rem;
}

.logo-section {
  align-items: flex-start;
}

.footer-logo {
  height: 50px;
  margin-bottom: var(--spacing-sm);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.tagline {
  color: #ccc;
  font-size: 0.9rem;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-nav a {
  color: white;
  text-decoration: none;
  transition: color var(--transition-duration) ease;
}

.footer-nav a:hover {
  color: var(--minecraft-aqua);
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.social-link img {
  height: 30px;
  transition: transform 0.3s ease;
}

.social-link:hover {
  color: var(--minecraft-aqua);
}

.contact-section p {
  margin-bottom: var(--spacing-sm);
  color: #eee;
}

.footer-bottom {
  margin-top: var(--spacing-lg);
  padding-top: var(--spacing-md);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: #aaa;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .logo-section {
    align-items: center;
  }

  .footer-nav {
    align-items: center;
  }

  .social-links {
    justify-content: center;
  }
}
</style>
