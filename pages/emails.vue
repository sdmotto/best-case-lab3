<template>
  <div class="flex flex-col min-h-screen">
    <!-- Main Content -->
    <div class="flex-grow container mx-auto px-6 py-8">
      <h1 class="text-4xl font-bold text-center text-black mb-8">Email Logs</h1>
      <ul v-if="emails.length > 0" class="space-y-6">
        <li
          v-for="(email, index) in emails"
          :key="index"
          class="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
        >
          <p class="mb-2"><strong class="text-gray-700">From:</strong> {{ email.from }}</p>
          <p class="mb-2"><strong class="text-gray-700">To:</strong> {{ email.to }}</p>
          <p class="mb-2"><strong class="text-gray-700">Subject:</strong> {{ email.subject }}</p>
          <p class="mb-4"><strong class="text-gray-700">Message:</strong> {{ email.message }}</p>
          <p class="text-sm text-gray-500"><strong>Timestamp:</strong> {{ email.timestamp }}</p>
        </li>
      </ul>
      <p v-else class="text-center text-gray-500 text-lg">No emails found.</p>
    </div>
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
