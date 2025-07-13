<script setup>
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Terms of Service</h1>
      <p class="hero-subtitle">Rules and Policies for Meowmere Server</p>
    </div>
  </section>

  <div class="content-wrapper">
    <section class="terms-section">
      <h2 class="section-title">Terms and Conditions</h2>
      <div class="terms-container">
        <div class="terms-card">
          <h3>1. Acceptance of Terms</h3>
          <p>By accessing or using the Meowmere Minecraft server, website, or any related services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
        </div>
        <div class="terms-card">
          <h3>2. User Conduct</h3>
          <p>Users of Meowmere services must adhere to the following guidelines:</p>
          <ul class="terms-list">
            <li>Respect all players and staff members</li>
            <li>Do not engage in griefing, stealing, or destroying others' builds</li>
            <li>Do not use hacks, cheats, or exploits</li>
            <li>Do not spam chat or use excessive caps</li>
            <li>Do not advertise other servers or services</li>
            <li>Keep all communication family-friendly and appropriate</li>
          </ul>
        </div>
        <div class="terms-card">
          <h3>3. Account Responsibility</h3>
          <p>You are responsible for maintaining the security of your Minecraft account and for all activities that occur under your username. Meowmere staff cannot be held responsible for any loss or damage from unauthorized use of your account.</p>
        </div>
      </div>
    </section>

    <section class="policy-section">
      <h2 class="section-title">Server Policies</h2>
      <div class="policy-grid">
        <div class="policy-card">
          <div class="policy-icon">⚖️</div>
          <h3>Moderation</h3>
          <p>Our staff team moderates the server to ensure a safe and enjoyable environment. Moderators have final say in all disputes and rule interpretations.</p>
        </div>
        <div class="policy-card">
          <div class="policy-icon">🔨</div>
          <h3>Enforcement</h3>
          <p>Rule violations may result in warnings, temporary bans, or permanent bans depending on the severity and frequency of the offense.</p>
        </div>
        <div class="policy-card">
          <div class="policy-icon">🔄</div>
          <h3>Appeals</h3>
          <p>If you believe you were unfairly moderated, you may appeal through our Discord server. All appeal decisions are final.</p>
        </div>
        <div class="policy-card">
          <div class="policy-icon">📝</div>
          <h3>Changes</h3>
          <p>We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.</p>
        </div>
      </div>
    </section>

    <section class="legal-section">
      <h2 class="section-title">Legal Information</h2>
      <div class="legal-container">
        <div class="legal-card">
          <h3>Disclaimer</h3>
          <p>Meowmere is not affiliated with Mojang AB or Microsoft. Minecraft is a trademark of Mojang AB, and we do not claim any ownership over the Minecraft intellectual property.</p>
          <p>Our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee uninterrupted or error-free service.</p>
        </div>
        <div class="legal-card">
          <h3>Limitation of Liability</h3>
          <p>Meowmere and its staff shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.</p>
          <p>This includes but is not limited to damages for loss of data, profits, or other intangible losses, even if we have been advised of the possibility of such damages.</p>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <h2 class="section-title">Questions or Concerns</h2>
      <div class="contact-info">
        <p>If you have any questions about these Terms of Service, please contact us:</p>
        <ul class="contact-list">
          <li>Email: support@meowmere.site</li>
          <li>Discord: Join our server and message a staff member</li>
          <li>Website: Use the contact form on our Contact page</li>
        </ul>
        <p class="last-updated">Last updated: June 2023</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Terms Section */
.terms-section {
  margin-bottom: var(--spacing-xl);
}

.terms-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.terms-card {
  background: rgba(20, 70, 77, 0.7);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.terms-card h3 {
  color: var(--minecraft-aqua);
  margin-bottom: var(--spacing-md);
  font-size: 1.5rem;
}

.terms-card p {
  color: #eee;
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.terms-list {
  list-style-type: none;
  padding: 0;
  margin-bottom: var(--spacing-md);
}

.terms-list li {
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  padding-left: var(--spacing-lg);
}

.terms-list li:last-child {
  border-bottom: none;
}

.terms-list li::before {
  content: '✓';
  color: var(--minecraft-aqua);
  position: absolute;
  left: 0;
  font-weight: bold;
}

/* Policy Section */
.policy-section {
  margin-bottom: var(--spacing-xl);
}

.policy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.policy-card {
  background: rgba(20, 70, 77, 0.7);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.policy-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

.policy-icon {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
}

.policy-card h3 {
  color: var(--minecraft-aqua);
  margin-bottom: var(--spacing-sm);
  font-size: 1.5rem;
}

.policy-card p {
  color: #eee;
  line-height: 1.6;
}

/* Legal Section */
.legal-section {
  margin-bottom: var(--spacing-xl);
}

.legal-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: var(--spacing-lg);
}

.legal-card {
  background: rgba(20, 70, 77, 0.7);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.legal-card h3 {
  color: var(--minecraft-aqua);
  margin-bottom: var(--spacing-md);
  font-size: 1.5rem;
  text-align: center;
}

.legal-card p {
  color: #eee;
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.legal-card p:last-child {
  margin-bottom: 0;
}

/* Contact Section */
.contact-section {
  margin-bottom: var(--spacing-xl);
}

.contact-info {
  background: rgba(20, 70, 77, 0.7);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  text-align: center;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-info p {
  color: #eee;
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.contact-list {
  list-style-type: none;
  padding: 0;
  margin-bottom: var(--spacing-lg);
  text-align: center;
}

.contact-list li {
  padding: var(--spacing-sm) 0;
  color: #eee;
}

.last-updated {
  font-style: italic;
  color: #aaa;
  font-size: 0.9rem;
  margin-top: var(--spacing-lg);
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

  .legal-container {
    grid-template-columns: 1fr;
  }
}
</style>