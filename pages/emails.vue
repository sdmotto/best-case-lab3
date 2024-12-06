<template>
  <div>
    <h1>Email Logs</h1>
    <ul v-if="emails.length > 0">
      <li v-for="(email, index) in emails" :key="index">
        <p><strong>From:</strong> {{ email.from }}</p>
        <p><strong>To:</strong> {{ email.to }}</p>
        <p><strong>Subject:</strong> {{ email.subject }}</p>
        <p><strong>Message:</strong> {{ email.message }}</p>
      </li>
    </ul>
    <p v-else>No emails found.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const emails = ref([]);

onMounted(async () => {
  emails.value = await $fetch("/api/get-emails");
});
</script>

<style scoped></style>
