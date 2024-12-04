<template>
  <nav class="navbar">
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li v-if="isVerified"><router-link to="/protected">Protected Area</router-link></li>
      <li><router-link to="/campbell">Campbell</router-link></li>
      <li><router-link to="/alex">Alex</router-link></li>
      <li><router-link to="/sam">Sam</router-link></li>
      <li><router-link to="/ethan">Ethan</router-link></li>
    </ul>
  </nav>
  <div class="content">
    <div v-if="isVerified" class="verification-section">
      <button @click="unverify()" class="action-button">Unverify</button>
    </div>
    <div v-else class="password-section">
      <h2>Enter Password to Access Protected Content</h2>
      <input
        type="password"
        v-model="passwordInput"
        placeholder="Enter password"
        class="password-input"
      />
      <button @click="verifyPassword()" class="action-button">Submit</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const passwordInput = ref('');
const isVerified = ref(false);

onMounted(async () => {
    const data = await $fetch('/api/check-verification');
    isVerified.value = data?.isVerified || false;
});

async function verifyPassword() {
    const data = await $fetch('/api/verify-password', {
        method: 'POST',
        body: { password: passwordInput.value },
    });
    isVerified.value = data.success;

    if (!data.success) {
      passwordInput.value = "";
    }
}

async function unverify() {
    await $fetch('/api/unverify-password', { method: 'POST' });
    isVerified.value = false;
    passwordInput.value = "";

    navigateTo("/");
}
</script>

<style scoped>
/* Navbar Styling */
.navbar {
  background-color: #000000; /* Black background */
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.nav-links {
  display: flex;
  justify-content: center;
  gap: 2rem; /* Space between links */
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  display: inline-block;
}

.nav-links a {
  text-decoration: none;
  color: #ffffff; /* White text */
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s, color 0.3s, border-radius 0.3s;
}

.nav-links a:hover {
  background-color: #ffcc00; /* Gold on hover */
  color: #000000; /* Black text */
  border-radius: 20px; /* Rounded corners on hover */
}

/* Content Area */
.content {
  padding: 2rem;
  text-align: center;
}

.verification-section,
.password-section {
  margin: 2rem auto;
}

.password-input {
  padding: 0.75rem;
  font-size: 1rem;
  width: 100%;
  max-width: 300px;
  border: 1px solid #000000;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.password-input:focus {
  outline: none;
  border-color: #ffcc00; /* Gold border on focus */
}

/* Button Styling */
.action-button {
  background-color: #000000; /* Black */
  color: #ffffff; /* White text */
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.action-button:hover {
  background-color: #ffcc00; /* Gold hover */
  color: #000000; /* Black text */
  border-radius: 5px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    gap: 1rem; /* Reduce space between links */
  }

  .password-input {
    width: 100%;
  }
}
</style>
