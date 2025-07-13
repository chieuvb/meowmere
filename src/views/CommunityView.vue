<script setup>
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Contact Us</h1>
      <p class="hero-subtitle">Get in touch with the Meowmere team</p>
    </div>
  </section>

  <div class="content-wrapper">
    <section class="discord-section">
      <h2 class="section-title">Discord Community</h2>
      <div class="discord-container">
        <div class="discord-info">
          <h3>Join Our Discord Server</h3>
          <p>Connect with other players, participate in events, get support, and stay updated on server news.</p>
          <a href="https://discord.gg/meowmere" target="_blank" class="discord-btn">Join Discord</a>
        </div>
        <div class="discord-features">
          <div class="feature-item">
            <h4>Community Channels</h4>
            <p>Chat with other players, share your builds, and make new friends.</p>
          </div>
          <div class="feature-item">
            <h4>Support Channels</h4>
            <p>Get help from our staff team for any issues you encounter.</p>
          </div>
          <div class="feature-item">
            <h4>Event Announcements</h4>
            <p>Stay updated on upcoming events, competitions, and server updates.</p>
          </div>
          <div class="feature-item">
            <h4>Voice Channels</h4>
            <p>Talk with other players while you play for a more immersive experience.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="events-section">
      <h2 class="section-title">Community Events</h2>
      <div class="events-grid">
        <div class="event-card">
          <div class="event-date">Every Saturday</div>
          <h3>Building Competition</h3>
          <p>Show off your building skills in our weekly themed building competitions. Winners receive in-game rewards!</p>
        </div>
        <div class="event-card">
          <div class="event-date">Every Sunday</div>
          <h3>Minigame Tournament</h3>
          <p>Compete in various minigames with other players. Test your skills and win exclusive prizes!</p>
        </div>
        <div class="event-card">
          <div class="event-date">Monthly</div>
          <h3>Server Tour</h3>
          <p>Join our staff for a tour of the best builds on the server. Get inspired and showcase your creations!</p>
        </div>
        <div class="event-card">
          <div class="event-date">Seasonal</div>
          <h3>Holiday Events</h3>
          <p>Celebrate holidays with special themed events, custom maps, and limited-time rewards.</p>
        </div>
      </div>
    </section>

    <section class="staff-section">
      <h2 class="section-title">Meet Our Staff</h2>
      <div class="staff-grid">
        <div class="staff-card">
          <div class="staff-avatar">👑</div>
          <h3>MeowOwner</h3>
          <p class="staff-role">Server Owner</p>
          <p>Founded Meowmere in 2023 with a vision to create a friendly and creative Minecraft community.</p>
        </div>
        <div class="staff-card">
          <div class="staff-avatar">⚔️</div>
          <h3>CatModerator</h3>
          <p class="staff-role">Admin</p>
          <p>Manages server operations and ensures everything runs smoothly for all players.</p>
        </div>
        <div class="staff-card">
          <div class="staff-avatar">🛡️</div>
          <h3>KittyHelper</h3>
          <p class="staff-role">Moderator</p>
          <p>Enforces server rules and helps new players get started on their Minecraft journey.</p>
        </div>
        <div class="staff-card">
          <div class="staff-avatar">🔧</div>
          <h3>PurrTech</h3>
          <p class="staff-role">Developer</p>
          <p>Works on custom plugins and technical aspects to enhance the server experience.</p>
        </div>
      </div>
    </section>

    <section class="rules-section">
      <h2 class="section-title">Community Guidelines</h2>
      <div class="rules-container">
        <div class="rules-list">
          <h3>Server Rules</h3>
          <ul>
            <li>Be respectful to all players and staff</li>
            <li>No griefing, stealing, or destroying others' builds</li>
            <li>No hacking, cheating, or using unfair advantages</li>
            <li>No spamming in chat or using excessive caps</li>
            <li>No advertising other servers or services</li>
            <li>Keep chat family-friendly and appropriate</li>
            <li>Follow staff instructions and server announcements</li>
            <li>Report any issues or rule violations to staff</li>
          </ul>
        </div>
        <div class="rules-info">
          <h3>Why We Have Rules</h3>
          <p>Our community guidelines exist to ensure everyone has a positive and enjoyable experience on our server. We believe in creating a safe, friendly, and creative environment where players can express themselves without fear of harassment or griefing.</p>
          <p>Failure to follow these rules may result in warnings, temporary bans, or permanent bans depending on the severity and frequency of violations.</p>
          <p>If you have any questions about our rules or need to report a violation, please contact our staff team in-game or on Discord.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Discord Section */
.discord-section {
  margin-bottom: var(--spacing-xl);
}

.discord-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
}

.discord-info {
  background: rgba(20, 70, 77, 0.7);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.discord-info h3 {
  color: var(--minecraft-aqua);
  margin-bottom: var(--spacing-md);
  font-size: 1.8rem;
}

.discord-info p {
  color: #eee;
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
}

.discord-btn {
  background-color: #5865F2; /* Discord blue */
  color: white;
  border: none;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--border-radius-md);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.discord-btn:hover {
  background-color: #4752C4;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.discord-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
}

.feature-item {
  background: rgba(20, 70, 77, 0.7);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

.feature-item h4 {
  color: var(--minecraft-aqua);
  margin-bottom: var(--spacing-sm);
  font-size: 1.2rem;
}

.feature-item p {
  color: #eee;
  line-height: 1.6;
  font-size: 0.9rem;
}

/* Events Section */
.events-section {
  margin-bottom: var(--spacing-xl);
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.event-card {
  background: rgba(20, 70, 77, 0.7);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.event-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

.event-date {
  background-color: var(--minecraft-aqua);
  color: var(--bg-color);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-weight: bold;
  display: inline-block;
  margin-bottom: var(--spacing-md);
}

.event-card h3 {
  color: var(--minecraft-aqua);
  margin-bottom: var(--spacing-sm);
  font-size: 1.5rem;
}

.event-card p {
  color: #eee;
  line-height: 1.6;
}

/* Staff Section */
.staff-section {
  margin-bottom: var(--spacing-xl);
}

.staff-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.staff-card {
  background: rgba(20, 70, 77, 0.7);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.staff-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

.staff-avatar {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
}

.staff-card h3 {
  color: var(--minecraft-aqua);
  margin-bottom: var(--spacing-sm);
  font-size: 1.5rem;
}

.staff-role {
  color: #aaa;
  font-style: italic;
  margin-bottom: var(--spacing-md);
}

.staff-card p {
  color: #eee;
  line-height: 1.6;
}

/* Rules Section */
.rules-section {
  margin-bottom: var(--spacing-xl);
}

.rules-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
}

.rules-list, .rules-info {
  background: rgba(20, 70, 77, 0.7);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.rules-list h3, .rules-info h3 {
  color: var(--minecraft-aqua);
  margin-bottom: var(--spacing-md);
  font-size: 1.5rem;
  text-align: center;
}

.rules-list ul {
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

.rules-info p {
  color: #eee;
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.rules-info p:last-child {
  margin-bottom: 0;
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

  .content-wrapper {
    padding: var(--spacing-lg) var(--spacing-sm);
  }

  .section-title {
    font-size: 2rem;
  }

  .discord-container, .rules-container {
    grid-template-columns: 1fr;
  }

  .discord-features {
    grid-template-columns: 1fr;
  }
}
</style>
