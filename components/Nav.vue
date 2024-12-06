<template>
  <nav
    class="bg-black text-white shadow-lg p-4 flex justify-between items-center"
  >
    <!-- Navigation Links -->
    <ul class="flex space-x-6">
      <li>
        <router-link
          to="/"
          class="relative group text-lg font-medium transition duration-300"
          active-class="active"
        >
          Home
          <span
            class="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"
          ></span>
        </router-link>
      </li>
      <li v-if="isVerified">
        <router-link
          to="/protected"
          class="relative group text-lg font-medium transition duration-300"
          active-class="active"
        >
          Protected Area
          <span
            class="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"
          ></span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/campbell"
          class="relative group text-lg font-medium transition duration-300"
          active-class="active"
        >
          Campbell
          <span
            class="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"
          ></span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/alex"
          class="relative group text-lg font-medium transition duration-300"
          active-class="active"
        >
          Alex
          <span
            class="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"
          ></span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/sam"
          class="relative group text-lg font-medium transition duration-300"
          active-class="active"
        >
          Sam
          <span
            class="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"
          ></span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/ethan"
          class="relative group text-lg font-medium transition duration-300"
          active-class="active"
        >
          Ethan
          <span
            class="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"
          ></span>
        </router-link>
      </li>
    </ul>

    <!-- Password Area -->
    <div class="flex items-center space-x-4">
      <div v-if="isVerified">
        <button
          @click="unverify()"
          class="bg-red-600 hover:bg-red-500 text-white font-semibold px-4 py-2 rounded transition"
        >
          Unverify
        </button>
      </div>
      <div v-else class="flex flex-col space-y-2">
        <div class="flex space-x-2">
          <input
            type="password"
            v-model="passwordInput"
            placeholder="Enter password"
            class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
          />
          <button
            @click="verifyPassword()"
            class="bg-green-600 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const passwordInput = ref("");
const isVerified = ref(false);

onMounted(async () => {
  const data = await $fetch("/api/check-verification");
  isVerified.value = data?.isVerified || false;
});

async function verifyPassword() {
  const data = await $fetch("/api/verify-password", {
    method: "POST",
    body: { password: passwordInput.value },
  });
  isVerified.value = data.success;

  if (!data.success) {
    passwordInput.value = "";
  }
}

async function unverify() {
  await $fetch("/api/unverify-password", { method: "POST" });
  isVerified.value = false;
  passwordInput.value = "";

  navigateTo("/");
}

const navigationSequence = ref([]);
const requiredSequence = ["campbell", "alex", "sam", "ethan"];

watch(
  () => router.currentRoute.value.name, // Watch the current route name
  (currentRoute) => {
    const currentIndex = navigationSequence.value.length;

    if (currentRoute === requiredSequence[currentIndex]) {
      // Add the current route to the sequence if it's the next in order
      navigationSequence.value.push(currentRoute);

      // Check if the sequence matches the required sequence
      if (navigationSequence.value.join() === requiredSequence.join()) {
        // Navigate to the secret page
        router.push({ name: "secret" });
        navigationSequence.value = []; // Reset the sequence after navigation
      }
    } else if (!requiredSequence.includes(currentRoute) || currentRoute !== requiredSequence[currentIndex]) {
      // Reset the sequence if the order is broken or a non-required route is visited
      navigationSequence.value = [];
    }
  }
);


</script>

<style scoped>
/* General Styling for Navigation Bar */
nav {
  background-color: #000000; /* Black background */
  color: #ffffff; /* White text */
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

nav a {
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  margin: 0 1rem;
  transition: color 0.3s;
}

/* Hover effect */
nav a:hover {
  color: #ffcc00; /* Gold on hover */
}

/* Active link styling */
.active {
  color: #ffcc00; /* Gold for active link */
}

/* Responsive Design */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
  }

  nav a {
    margin: 0.5rem 0;
  }
}
</style>
