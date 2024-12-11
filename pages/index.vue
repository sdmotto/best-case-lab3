<template>
  <div
    class="landing-page text-black min-h-screen flex flex-col items-center justify-center px-6"
  >
    <!-- Team Name -->
    <h1
      class="team-name text-4xl md:text-5xl font-extrabold mb-6 text-center uppercase"
    >
      Best CASE Scenario
    </h1>

    <!-- About Text -->
    <p
      class="about-text text-lg md:text-xl text-center max-w-3xl mb-8 leading-relaxed"
    >
      Welcome to our website. Here you can view our projects and
      information about each team member.
    </p>

    <!-- Projects Section -->
    <div class="projects max-w-3xl w-full">
      <h2
        class="text-2xl md:text-3xl font-bold mb-4 uppercase border-b-2 border-black pb-2"
      >
        Projects
      </h2>
      <ul>
        <router-link to="/lab1">
          <li
            class="mt-4 p-4 bg-black text-white shadow-md rounded-lg hover:shadow-xl transition duration-300"
          >
            <strong>Lab 1:</strong> Designed a thermometer system that allowed
            users to view the temperature from a website and turn sensors on and
            off externally.
          </li>
        </router-link>
        <router-link to="/lab2">
          <li
            class="mt-4 p-4 bg-black text-white shadow-md rounded-lg hover:shadow-xl transition duration-300"
          >
            <strong>Lab 2:</strong> Developed an IR receiver for a transmitter.
          </li>
        </router-link>
        <router-link to="/final-project">
          <li
            class="mt-4 p-4 bg-black text-white shadow-md rounded-lg hover:shadow-xl transition duration-300"
          >
            <strong>Senior Design Project:</strong> We plan to develop a driving
            simulator that uses Google Earth and Google Maps APIs so that users
            can drive in realistic environments.
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
