<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li v-if="isVerified"><router-link to="/protected">Protected Area</router-link></li>
      <li><router-link to="/campbell">Campbell</router-link></li>
      <li><router-link to="/alex">Alex</router-link></li>
      <li><router-link to="/sam">Sam</router-link></li>
      <li><router-link to="/ethan">Ethan</router-link></li>
    </ul>
  </nav>
  <div>
    <div v-if="isVerified">
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
}

async function unverify() {
    await $fetch('/api/unverify-password', { method: 'POST' });
    isVerified.value = false;
    passwordInput.value = "";

    navigateTo("/");
}

</script>

<style scoped>

</style>