<script setup>
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Privacy Policy</h1>
      <p class="hero-subtitle">How We Handle Your Information</p>
    </div>
  </section>

  <div class="content-wrapper">
    <section class="privacy-section">
      <h2 class="section-title">Information Collection</h2>
      <div class="privacy-container">
        <div class="privacy-card">
          <h3>1. Information We Collect</h3>
          <p>When you use the Meowmere Minecraft server or website, we may collect the following types of information:</p>
          <ul class="privacy-list">
            <li>Minecraft username and UUID</li>
            <li>IP address and connection information</li>
            <li>Device information (operating system, browser type)</li>
            <li>In-game activity and chat messages</li>
            <li>Information you provide in forms or communications</li>
          </ul>
        </div>
        <div class="privacy-card">
          <h3>2. How We Collect Information</h3>
          <p>We collect information through:</p>
          <ul class="privacy-list">
            <li>Direct interactions when you join our server</li>
            <li>Automated technologies such as server logs</li>
            <li>Communications you initiate with our staff</li>
            <li>Third-party services that provide analytics</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="data-section">
      <h2 class="section-title">Use of Information</h2>
      <div class="data-grid">
        <div class="data-card">
          <div class="data-icon">🔍</div>
          <h3>Server Operation</h3>
          <p>We use your information to operate, maintain, and improve our server and services, including player identification and authentication.</p>
        </div>
        <div class="data-card">
          <div class="data-icon">🛡️</div>
          <h3>Security</h3>
          <p>We use information to protect our server from abuse, unauthorized access, and to enforce our rules and policies.</p>
        </div>
        <div class="data-card">
          <div class="data-icon">📊</div>
          <h3>Analytics</h3>
          <p>We analyze usage patterns to improve our services, optimize performance, and enhance user experience.</p>
        </div>
        <div class="data-card">
          <div class="data-icon">📣</div>
          <h3>Communication</h3>
          <p>We may use your information to respond to your inquiries, provide support, and send announcements about server updates or events.</p>
        </div>
      </div>
    </section>

    <section class="cookies-section">
      <h2 class="section-title">Cookies and Tracking</h2>
      <div class="cookies-container">
        <div class="cookies-card">
          <h3>Cookies</h3>
          <p>Our website may use cookies and similar tracking technologies to enhance your experience and collect information about how you use our services.</p>
          <p>These technologies help us remember your preferences, understand how you use our website, and improve our services.</p>
        </div>
        <div class="cookies-card">
          <h3>Third-Party Services</h3>
          <p>We may use third-party services such as Google Analytics to help analyze how users use our site. These services may use cookies to collect information about your use of our website.</p>
          <p>Third-party services have their own privacy policies addressing how they use such information.</p>
        </div>
      </div>
    </section>

    <section class="rights-section">
      <h2 class="section-title">Your Rights and Choices</h2>
      <div class="rights-container">
        <div class="rights-card">
          <h3>Access and Control</h3>
          <p>You have the right to:</p>
          <ul class="privacy-list">
            <li>Request access to your personal information</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data (where applicable)</li>
            <li>Object to processing of your information</li>
            <li>Request restriction of processing</li>
          </ul>
          <p>To exercise these rights, please contact us using the information provided in the Contact section.</p>
        </div>
        <div class="rights-card">
          <h3>Data Retention</h3>
          <p>We retain your information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements.</p>
          <p>Inactive accounts and associated data may be removed after an extended period of inactivity.</p>
        </div>
      </div>
    </section>

    <section class="additional-section">
      <h2 class="section-title">Additional Information</h2>
      <div class="additional-grid">
        <div class="additional-card">
          <div class="additional-icon">👶</div>
          <h3>Children's Privacy</h3>
          <p>Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us.</p>
        </div>
        <div class="additional-card">
          <div class="additional-icon">🔄</div>
          <h3>Changes to Privacy Policy</h3>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
        </div>
        <div class="additional-card">
          <div class="additional-icon">🔒</div>
          <h3>Data Security</h3>
          <p>We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.</p>
        </div>
        <div class="additional-card">
          <div class="additional-icon">🌐</div>
          <h3>International Transfers</h3>
          <p>Your information may be transferred to and processed in countries other than your country of residence, where data protection laws may differ.</p>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <h2 class="section-title">Contact Us</h2>
      <div class="contact-info">
        <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
        <ul class="contact-list">
          <li>Email: privacy@meowmere.site</li>
          <li>Discord: Join our server and message a staff member</li>
          <li>Website: Use the contact form on our Contact page</li>
        </ul>
        <p class="last-updated">Last updated: June 2023</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Privacy Section */
.privacy-section {
  margin-bottom: var(--spacing-xl);
}

.privacy-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.privacy-card {
  background: rgba(20, 70, 77, 0.7);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.privacy-card h3 {
  color: var(--minecraft-aqua);
  margin-bottom: var(--spacing-md);
  font-size: 1.5rem;
}

.privacy-card p {
  color: #eee;
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.privacy-list {
  list-style-type: none;
  padding: 0;
  margin-bottom: var(--spacing-md);
}

.privacy-list li {
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  padding-left: var(--spacing-lg);
}

.privacy-list li:last-child {
  border-bottom: none;
}

.privacy-list li::before {
  content: '✓';
  color: var(--minecraft-aqua);
  position: absolute;
  left: 0;
  font-weight: bold;
}

/* Data Section */
.data-section {
  margin-bottom: var(--spacing-xl);
}

.data-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.data-card {
  background: rgba(20, 70, 77, 0.7);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.data-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

.data-icon {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
}

.data-card h3 {
  color: var(--minecraft-aqua);
  margin-bottom: var(--spacing-sm);
  font-size: 1.5rem;
}

.data-card p {
  color: #eee;
  line-height: 1.6;
}

/* Cookies Section */
.cookies-section {
  margin-bottom: var(--spacing-xl);
}

.cookies-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: var(--spacing-lg);
}

.cookies-card {
  background: rgba(20, 70, 77, 0.7);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cookies-card h3 {
  color: var(--minecraft-aqua);
  margin-bottom: var(--spacing-md);
  font-size: 1.5rem;
  text-align: center;
}

.cookies-card p {
  color: #eee;
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.cookies-card p:last-child {
  margin-bottom: 0;
}

/* Rights Section */
.rights-section {
  margin-bottom: var(--spacing-xl);
}

.rights-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: var(--spacing-lg);
}

.rights-card {
  background: rgba(20, 70, 77, 0.7);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.rights-card h3 {
  color: var(--minecraft-aqua);
  margin-bottom: var(--spacing-md);
  font-size: 1.5rem;
  text-align: center;
}

.rights-card p {
  color: #eee;
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

/* Additional Section */
.additional-section {
  margin-bottom: var(--spacing-xl);
}

.additional-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.additional-card {
  background: rgba(20, 70, 77, 0.7);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.additional-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

.additional-icon {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
}

.additional-card h3 {
  color: var(--minecraft-aqua);
  margin-bottom: var(--spacing-sm);
  font-size: 1.5rem;
}

.additional-card p {
  color: #eee;
  line-height: 1.6;
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

  .cookies-container, .rights-container {
    grid-template-columns: 1fr;
  }
}
</style>
