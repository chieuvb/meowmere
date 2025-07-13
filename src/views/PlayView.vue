<script setup>
import {copyIP} from "@/utils/helpers.js";
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1>How to Play</h1>
      <p class="hero-subtitle">Join our Minecraft Bedrock Server</p>
      <div class="server-address">
        <span class="ip">play.meowmere.site</span>
        <button class="copy-btn" @click="copyIP">Copy IP</button>
      </div>
    </div>
  </section>

  <div class="content-wrapper">
    <section class="how-to-play">
      <h2 class="section-title">Getting Started</h2>
      <div class="steps-container">
        <div class="step-card">
          <div class="step-number">1</div>
          <h3>Launch Minecraft</h3>
          <p>Open Minecraft Bedrock Edition on your device (Windows 10/11, Mobile, Console, etc.)</p>
        </div>
        <div class="step-card">
          <div class="step-number">2</div>
          <h3>Add Server</h3>
          <p>Go to "Play" → "Servers" → "Add Server" and enter our server information</p>
        </div>
        <div class="step-card">
          <div class="step-number">3</div>
          <h3>Enter Server Details</h3>
          <p>Server Name: Meowmere<br>Server Address: play.meowmere.site<br>Port: 19132</p>
        </div>
        <div class="step-card">
          <div class="step-number">4</div>
          <h3>Join and Play</h3>
          <p>Click "Save", select the server from your list, and join to start playing!</p>
        </div>
      </div>
    </section>

    <section class="gameplay-info">
      <h2 class="section-title">Gameplay Information</h2>
      <div class="info-grid">
        <div class="info-card">
          <h3>Game Modes</h3>
          <p>Our server offers Survival mode with a focus on community building and exploration. PvP is disabled in most
            areas to promote cooperation.</p>
        </div>
        <div class="info-card">
          <h3>Land Protection</h3>
          <p>Use the /claim command to protect your builds. Each player starts with 1000 claim blocks. Earn more by
            playing regularly!</p>
        </div>
        <div class="info-card">
          <h3>Economy</h3>
          <p>Trade with other players using our in-game currency. Earn money by selling items, completing quests, and
            participating in events.</p>
        </div>
        <div class="info-card">
          <h3>Commands</h3>
          <p>Use /help to see available commands. Important ones include /spawn, /tpa, /home, and /msg for private
            messaging.</p>
        </div>
      </div>
    </section>

    <section class="faq">
      <h2 class="section-title">Frequently Asked Questions</h2>
      <div class="faq-container">
        <div class="faq-item">
          <h3>What Minecraft version should I use?</h3>
          <p>Our server supports the latest Minecraft Bedrock Edition. We recommend keeping your game updated to the
            most recent version.</p>
        </div>
        <div class="faq-item">
          <h3>Can I play from any device?</h3>
          <p>Yes! Our server supports cross-platform play. You can join from Windows, mobile devices, Xbox, PlayStation,
            and Nintendo Switch.</p>
        </div>
        <div class="faq-item">
          <h3>Is there a Discord server?</h3>
          <p>Yes, join our Discord community to connect with other players, get help, and stay updated on server
            events.</p>
        </div>
        <div class="faq-item">
          <h3>How do I report issues or players?</h3>
          <p>Use the /report command in-game or contact a staff member on our Discord server.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
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

/* How to Play Section */
.how-to-play {
  margin-bottom: var(--spacing-xl);
}

.steps-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.step-card {
  background: rgba(20, 70, 77, 0.7);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.step-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

.step-number {
  background-color: var(--minecraft-aqua);
  color: var(--bg-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0 auto var(--spacing-md);
}

.step-card h3 {
  color: var(--minecraft-aqua);
  margin-bottom: var(--spacing-sm);
  font-size: 1.5rem;
}

.step-card p {
  color: #eee;
  line-height: 1.6;
}

/* Gameplay Info Section */
.gameplay-info {
  margin-bottom: var(--spacing-xl);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.info-card {
  background: rgba(20, 70, 77, 0.7);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

.info-card h3 {
  color: var(--minecraft-aqua);
  margin-bottom: var(--spacing-md);
  font-size: 1.5rem;
  text-align: center;
}

.info-card p {
  color: #eee;
  line-height: 1.6;
}

/* FAQ Section */
.faq {
  margin-bottom: var(--spacing-xl);
}

.faq-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: var(--spacing-lg);
}

.faq-item {
  background: rgba(20, 70, 77, 0.7);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.faq-item h3 {
  color: var(--minecraft-aqua);
  margin-bottom: var(--spacing-md);
  font-size: 1.3rem;
}

.faq-item p {
  color: #eee;
  line-height: 1.6;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .hero {
    height: 50vh;
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

  .faq-container {
    grid-template-columns: 1fr;
  }
}
</style>
