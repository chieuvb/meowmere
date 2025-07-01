<script setup>
import {copyIP} from "@/utils/helpers.js";
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Welcome to Meowmere</h1>
      <p class="hero-subtitle">A Minecraft Bedrock Server</p>
      <div class="server-address">
        <span class="ip">play.meowmere.site</span>
        <button class="copy-btn" @click="copyIP">Copy IP</button>
      </div>
    </div>
  </section>

  <div class="content-wrapper">
    <section class="features">
      <h2 class="section-title">Server Features</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">⚔️</div>
          <h3>Pure Vanilla</h3>
          <p>Experience Minecraft exactly as intended, with no gameplay-altering modifications.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🛡️</div>
          <h3>Protected Builds</h3>
          <p>Advanced grief protection system keeps your creations safe.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">👥</div>
          <h3>Active Community</h3>
          <p>Join a friendly community of builders and adventurers.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🌟</div>
          <h3>Regular Events</h3>
          <p>Participate in building competitions and special events.</p>
        </div>
      </div>
    </section>

    <section class="server-info">
      <h2 class="section-title">Server Information</h2>
      <div class="info-container">
        <div class="info-box">
          <h3>Technical Details</h3>
          <ul class="rules-list">
            <li>Latest Bedrock Version</li>
            <li>24/7 Uptime</li>
            <li>Anti-Lag Optimization</li>
            <li>Regular Backups</li>
            <li>10 Player Slots</li>
          </ul>
        </div>
        <div class="info-box">
          <h3>Server Rules</h3>
          <ul class="rules-list">
            <li>Be respectful to all players</li>
            <li>No griefing or stealing</li>
            <li>No hacking or cheating</li>
            <li>No spamming in chat</li>
            <li>Have fun and be creative!</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  height: 90vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
}

.hero-content {
  padding: var(--spacing-xl);
  background: linear-gradient(to bottom, var(--gradient-start-color), var(--gradient-end-color));
  border-radius: var(--border-radius-lg);
  backdrop-filter: blur(5px);
  max-width: 800px;
  width: 90%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transform: translateZ(0);
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: var(--spacing-md);
  color: var(--minecraft-aqua);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-lg);
  color: #fff;
}

.server-address {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
  flex-wrap: wrap;
}

.ip {
  background: rgba(0, 0, 0, 0.3);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--border-radius-md);
  font-family: monospace;
  font-size: 1.2rem;
  color: #fff;
  letter-spacing: 1px;
}

.copy-btn {
  background-color: var(--minecraft-aqua);
  color: var(--bg-color);
  border: none;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--border-radius-md);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.copy-btn:hover {
  background-color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-xl) var(--spacing-md);
}

.section-title {
  text-align: center;
  color: var(--minecraft-aqua);
  margin-bottom: var(--spacing-lg);
  font-size: 2.5rem;
  position: relative;
  padding-bottom: var(--spacing-md);
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background-color: var(--accent-color);
  border-radius: var(--border-radius-sm);
}

/* Features Section */
.features {
  margin-bottom: var(--spacing-xl);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.feature-card {
  background: rgba(20, 70, 77, 0.7);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
}

.feature-card h3 {
  color: var(--minecraft-aqua);
  margin-bottom: var(--spacing-sm);
  font-size: 1.5rem;
}

.feature-card p {
  color: #eee;
  line-height: 1.6;
}

/* Server Info Section */
.server-info {
  margin-bottom: var(--spacing-xl);
}

.info-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.info-box {
  background: rgba(20, 70, 77, 0.7);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.info-box h3 {
  color: var(--minecraft-aqua);
  margin-bottom: var(--spacing-md);
  text-align: center;
  font-size: 1.5rem;
}

.rules-list {
  list-style-type: none;
  padding: 0;
}

.rules-list li {
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  padding-left: var(--spacing-lg);
}

.rules-list li:last-child {
  border-bottom: none;
}

.rules-list li::before {
  content: '✓';
  color: var(--minecraft-aqua);
  position: absolute;
  left: 0;
  font-weight: bold;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .hero {
    height: 70vh;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .server-address {
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .ip {
    width: 100%;
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: 1rem;
  }

  .copy-btn {
    width: 100%;
    padding: var(--spacing-sm) var(--spacing-md);
  }

  .content-wrapper {
    padding: var(--spacing-lg) var(--spacing-sm);
  }

  .section-title {
    font-size: 2rem;
  }

  .features-grid, .info-container {
    grid-template-columns: 1fr;
  }
}
</style>
