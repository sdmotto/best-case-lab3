<template>
  <div class="flex flex-col min-h-screen">
    <!-- Filter Area -->
    <div class="container mx-auto px-6 py-4">
      <div class="relative w-full max-w-sm mx-auto">
        <label
          for="person-filter"
          class="block text-lg font-medium text-black mb-2"
          >Filter by Person</label
        >
        <div class="relative">
          <select
            id="person-filter"
            v-model="selectedPerson"
            class="block w-full p-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition ease-in-out duration-200"
          >
            <option value="" class="text-gray-500">All</option>
            <option
              v-for="person in uniquePersons"
              :key="person"
              :value="person"
              class="text-gray-900"
            >
              {{ person }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-grow container mx-auto px-6 py-8">
      <h1 class="text-4xl font-bold text-center text-black mb-8">Email Logs</h1>
      <ul v-if="filteredEmails.length > 0" class="space-y-6">
        <li
          v-for="(email, index) in filteredEmails"
          :key="index"
          class="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
        >
          <p class="mb-2">
            <strong class="text-gray-700">From:</strong> {{ email.from }}
          </p>
          <p class="mb-2">
            <strong class="text-gray-700">To:</strong> {{ email.to }}
          </p>
          <p class="mb-2">
            <strong class="text-gray-700">Subject:</strong> {{ email.subject }}
          </p>
          <p class="mb-4">
            <strong class="text-gray-700">Message:</strong> {{ email.message }}
          </p>
          <p class="text-sm text-gray-500">
            <strong>Timestamp:</strong> {{ email.timestamp }}
          </p>
        </li>
      </ul>
      <p v-else class="text-center text-black text-lg">No emails found.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

// State variables
const emails = ref([]);
const selectedPerson = ref("");

// Fetch emails on mount
onMounted(async () => {
  emails.value = await $fetch("/api/get-emails");
});

// Computed property to get unique persons
const uniquePersons = ["Campbell", "Alex", "Sam", "Ethan"];

// Computed property to filter emails
const filteredEmails = computed(() => {
  if (!selectedPerson.value) {
    return emails.value; // Show all emails if no person is selected
  }
  return emails.value.filter((email) => email.person === selectedPerson.value);
});
</script>

<style scoped></style>
