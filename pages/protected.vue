<template>
  <div class="flex flex-col items-center min-h-screen text-gray-800">
    <div class="bg-gray-200 mt-8 p-8 rounded-lg shadow-md flex flex-col items-center">
      <h1 class="text-4xl font-bold text-black mb-6 text-center">Protected Area</h1>
      <router-link
        to="/emails"
        class="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-yellow-500 hover:shadow-lg transition duration-300 ease-in-out"
      >
        View Email Log
      </router-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
