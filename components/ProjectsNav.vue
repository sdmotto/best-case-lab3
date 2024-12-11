<template>
  <nav
    class="bg-black text-white shadow-lg p-4 flex justify-between items-center"
  >
    <!-- Project Navigation Links -->
    <ul class="flex space-x-6">
      <li>
        <router-link
          to="/lab1"
          class="relative group text-lg font-medium transition duration-300"
          active-class="active"
        >
          Lab 1
          <span
            class="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"
          ></span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/lab2"
          class="relative group text-lg font-medium transition duration-300"
          active-class="active"
        >
          Lab 2
          <span
            class="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"
          ></span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/final-project"
          class="relative group text-lg font-medium transition duration-300"
          active-class="active"
        >
          Final Project
          <span
            class="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"
          ></span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

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
  color: #ffcd00;
}

/* Active link styling */
.active {
  color: #ffcd00;
}

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
