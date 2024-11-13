<template>
    <div>
      <!-- Conditionally show content based on verification status -->
      <div v-if="isVerified">
        <p>You are verified! Access the protected content:</p>
        <button><router-link to="/protected">Go to Protected Content</router-link></button>
        <button @click="unverify()">Unverify</button>
      </div>
      <div v-else>
        <h2>Enter Password to Access Protected Content</h2>
        <input
          type="password"
          v-model="passwordInput"
          placeholder="Enter password"
        />
        <button @click="verifyPassword()">Submit</button>
      </div>
    </div>
  </template>
  
<script setup>
import { ref, onMounted } from 'vue';

const passwordInput = ref('');
const isVerified = ref(false);

// Check verification status on mount
onMounted(async () => {
    const data = await $fetch('/api/check-verification');
    isVerified.value = data?.isVerified || false;
});

// Function to verify the password
async function verifyPassword() {
    const data = await $fetch('/api/verify-password', {
        method: 'POST',
        body: { password: passwordInput.value },
    });
    isVerified.value = data.success;
}

async function unverify() {
    await $fetch('/api/unverify-password', { method: 'POST' });
    isVerified.value = false;
}

</script>

<style scoped>

</style>