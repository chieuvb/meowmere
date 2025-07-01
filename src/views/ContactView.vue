<script setup>
function submitForm() {
  // In a real application, this would send the form data to a server
  alert('Thank you for your message! We will get back to you soon.');
  // Reset form fields
  document.querySelector('.contact-form').reset();
}
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Contact Us</h1>
      <p class="hero-subtitle">Get in touch with the Meowmere team</p>
    </div>
  </section>

  <div class="content-wrapper">
    <section class="contact-form-section">
      <h2 class="section-title">Send Us a Message</h2>
      <div class="form-container">
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required>
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required>
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <select id="subject" name="subject" required>
              <option value="" disabled selected>Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="report">Report a Player</option>
              <option value="bug">Report a Bug</option>
              <option value="suggestion">Suggestion</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" placeholder="Type your message here..." rows="6" required></textarea>
          </div>
          <div class="form-group">
            <button type="submit" class="submit-btn">Send Message</button>
          </div>
        </form>
      </div>
    </section>

    <section class="alternative-contact-section">
      <h2 class="section-title">Other Ways to Reach Us</h2>
      <div class="contact-methods-grid">
        <div class="contact-method-card">
          <div class="contact-icon">📧</div>
          <h3>Email</h3>
          <p>For general inquiries:</p>
          <p class="contact-detail">info@meowmere.site</p>
          <p>For support issues:</p>
          <p class="contact-detail">support@meowmere.site</p>
        </div>
        <div class="contact-method-card">
          <div class="contact-icon">💬</div>
          <h3>Discord</h3>
          <p>Join our Discord server for real-time support and community interaction.</p>
          <a href="https://discord.gg/meowmere" target="_blank" class="discord-btn">Join Discord</a>
        </div>
        <div class="contact-method-card">
          <div class="contact-icon">🎮</div>
          <h3>In-Game</h3>
          <p>Contact our staff directly in the game using the following commands:</p>
          <p class="contact-detail">/msg [staff name] [your message]</p>
          <p class="contact-detail">/helpop [your message]</p>
        </div>
        <div class="contact-method-card">
          <div class="contact-icon">🌐</div>
          <h3>Social Media</h3>
          <p>Follow us and send direct messages on our social media platforms:</p>
          <div class="social-links">
            <a href="https://facebook.com" target="_blank" class="social-link"><img src="../assets/images/icons8-facebook-48.png" alt="Facebook"></a>
            <a href="https://twitter.com" target="_blank" class="social-link"><img src="../assets/images/icons8-x-48.png" alt="X app"></a>
            <a href="https://instagram.com" target="_blank" class="social-link"><img src="../assets/images/icons8-instagram-48.png" alt="Instagram"></a>
          </div>
        </div>
      </div>
    </section>

    <section class="faq-section">
      <h2 class="section-title">Frequently Asked Questions</h2>
      <div class="faq-container">
        <div class="faq-item">
          <h3>How quickly will I receive a response?</h3>
          <p>We aim to respond to all inquiries within 24-48 hours. For urgent matters, Discord is the fastest way to reach our team.</p>
        </div>
        <div class="faq-item">
          <h3>Who should I contact for technical issues?</h3>
          <p>For technical issues with the server, please use the contact form and select "Technical Support" as the subject, or reach out to our support team on Discord.</p>
        </div>
        <div class="faq-item">
          <h3>How do I report a player breaking the rules?</h3>
          <p>You can report rule violations through the contact form (select "Report a Player"), use the /report command in-game, or contact a staff member on Discord.</p>
        </div>
        <div class="faq-item">
          <h3>Can I apply to join the staff team?</h3>
          <p>Yes! We occasionally open applications for staff positions. Keep an eye on our Discord announcements or contact us expressing your interest.</p>
        </div>
      </div>
    </section>

    <section class="response-time-section">
      <h2 class="section-title">Our Response Commitment</h2>
      <div class="response-container">
        <div class="response-info">
          <p>At Meowmere, we value your feedback and inquiries. Our team is committed to providing timely and helpful responses to all communications.</p>
          <ul class="response-list">
            <li><span class="response-type">General Inquiries:</span> 1-2 business days</li>
            <li><span class="response-type">Technical Support:</span> 24 hours</li>
            <li><span class="response-type">Player Reports:</span> 12-24 hours</li>
            <li><span class="response-type">Bug Reports:</span> 1-3 business days</li>
            <li><span class="response-type">Suggestions:</span> 3-5 business days</li>
          </ul>
          <p>For urgent matters requiring immediate attention, please join our Discord server and post in the #support channel.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  height: 60vh;
  min-height: 400px;
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
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: var(--spacing-md);
  color: var(--minecraft-aqua);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #fff;
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

/* Contact Form Section */
.contact-form-section {
  margin-bottom: var(--spacing-xl);
}

.form-container {
  background: rgba(20, 70, 77, 0.7);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.form-group label {
  color: var(--minecraft-aqua);
  font-weight: bold;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: var(--spacing-md);
  border-radius: var(--border-radius-sm);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  font-family: inherit;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--minecraft-aqua);
  box-shadow: 0 0 0 2px rgba(59, 214, 229, 0.3);
}

.submit-btn {
  background-color: var(--minecraft-aqua);
  color: var(--bg-color);
  border: none;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--border-radius-md);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: var(--spacing-sm);
  align-self: flex-end;
}

.submit-btn:hover {
  background-color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Alternative Contact Section */
.alternative-contact-section {
  margin-bottom: var(--spacing-xl);
}

.contact-methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.contact-method-card {
  background: rgba(20, 70, 77, 0.7);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-method-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

.contact-icon {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
}

.contact-method-card h3 {
  color: var(--minecraft-aqua);
  margin-bottom: var(--spacing-sm);
  font-size: 1.5rem;
}

.contact-method-card p {
  color: #eee;
  line-height: 1.6;
  margin-bottom: var(--spacing-sm);
}

.contact-detail {
  background: rgba(0, 0, 0, 0.2);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-sm);
  font-family: monospace;
  display: inline-block;
  margin-bottom: var(--spacing-md);
}

.discord-btn {
  background-color: #5865F2; /* Discord blue */
  color: white;
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  margin-top: var(--spacing-sm);
}

.discord-btn:hover {
  background-color: #4752C4;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.social-link {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: var(--minecraft-aqua);
}

/* FAQ Section */
.faq-section {
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

/* Response Time Section */
.response-time-section {
  margin-bottom: var(--spacing-xl);
}

.response-container {
  background: rgba(20, 70, 77, 0.7);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.response-info p {
  color: #eee;
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
  text-align: center;
}

.response-list {
  list-style-type: none;
  padding: 0;
  margin: var(--spacing-lg) 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing-md);
}

.response-list li {
  background: rgba(0, 0, 0, 0.2);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-sm);
  color: #eee;
}

.response-type {
  color: var(--minecraft-aqua);
  font-weight: bold;
  margin-right: var(--spacing-sm);
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

  .faq-container {
    grid-template-columns: 1fr;
  }

  .submit-btn {
    width: 100%;
    align-self: center;
  }

  .response-list {
    flex-direction: column;
    align-items: center;
  }

  .response-list li {
    width: 100%;
    text-align: center;
  }
}
</style>
