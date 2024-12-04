<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
</script>

<style>
/* Global Styling */
body {
  margin: 0;
  padding: 0;
  font-family: "Iowa Serif", serif; /* University of Iowa suggested font */
  background-color: #ffcc00; /* Gold background */
  color: #000000; /* Black text */
  line-height: 1.6;
}

/* Navigation Bar Styling */
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

nav a:hover {
  color: #ffcc00; /* Gold on hover */
}

/* Footer Styling */
footer {
  background-color: #000000; /* Black background */
  color: #ffffff; /* White text */
  text-align: center;
  padding: 1rem 0;
  margin-top: auto;
}

footer a {
  color: #ffcc00; /* Gold */
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}

/* Main Content Area */
main {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #ffffff; /* White background for content */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Buttons */
button {
  background-color: #000000; /* Black */
  color: #ffffff; /* White text */
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #ffcc00; /* Gold */
  color: #000000; /* Black text */
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

  main {
    padding: 1rem;
  }
}
</style>
