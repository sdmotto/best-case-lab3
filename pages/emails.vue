<template>
    <div>
        <h2>Email Logs</h2>
        <ul v-if="emails.length > 0">
        <li v-for="(email, index) in emails" :key="index">
            <p><strong>To:</strong> {{ email.to }}</p>
            <p><strong>Subject:</strong> {{ email.subject }}</p>
            <p><strong>Message:</strong> {{ email.text }}</p>
        </li>
        </ul>
        <p v-else>No emails found.</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const emails = ref([]);

// Fetch emails on component mount
onMounted(async () => {
  try {
    emails.value = await $fetch('/api/get-emails');
  } catch (error) {
    console.error("Failed to fetch emails:", error);
  }
});
</script>

<style scoped>

</style>