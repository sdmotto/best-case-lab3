<template>
  <div class="container mx-auto px-6 py-8">
    <!-- Page Title -->
    <h1 class="text-4xl font-bold text-center mb-8 text-black">
      Best CASE Lab 1 Report
    </h1>

    <ProjectsNav />

    <!-- Sections -->
    <section class="mb-8 mt-8 p-6 bg-black text-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">System Overview</h2>
      <p class="text-lg">
        The system integrates hardware and software to provide real-time
        temperature monitoring, control, and user notifications via a web-based
        application.
      </p>
    </section>

    <section class="mb-8 p-6 bg-black text-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Hardware Description</h2>
      <p class="text-lg mb-4">
        The hardware includes an ESP32 microcontroller, OLED display, DSB1820
        temperature sensors, and a 9V battery in a 3D-printed enclosure. The
        ESP32 handles all data collection and transmission.
      </p>
      <ul class="list-disc list-inside space-y-2 pl-6">
        <li>
          <strong>ESP32 Pin Mapping:</strong>
          <ul class="list-disc list-inside pl-4">
            <li><span class="font-medium">D22:</span> SDL pin (OLED)</li>
            <li><span class="font-medium">D21:</span> SDA pin (OLED)</li>
            <li><span class="font-medium">D18:</span> Sensor Button 2</li>
            <li><span class="font-medium">D19:</span> Sensor Button 1</li>
            <li>
              <span class="font-medium">D4:</span> Temperature Sensor Data
            </li>
          </ul>
        </li>
      </ul>
    </section>

    <section class="mb-8 p-6 bg-black text-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Software Description</h2>
      <p class="text-lg">
        The web application uses MQTT for real-time data transfer and
        incorporates technologies such as Node.js, Express.js, and Socket.IO.
        The ESP32 runs code written with Arduino IDE for handling sensors,
        buttons, and data communication.
      </p>
    </section>

    <section class="mb-8 p-6 bg-black text-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Parts List</h2>
      <ul class="list-disc list-inside space-y-2 pl-6">
        <li>ESP32 Microcontroller</li>
        <li>OLED Display</li>
        <li>DSB1820 Temperature Sensors</li>
        <li>9V Battery</li>
        <li>3D-Printed Enclosure</li>
        <li>Switches, Buttons, and Connectors</li>
      </ul>
    </section>

    <section class="mb-8 p-6 bg-black text-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Challenges and Solutions</h2>
      <p class="text-lg">
        Key challenges included hardware durability, software latency, and
        initial connection issues. Solutions involved switching to MQTT for
        real-time communication and improving enclosure design with hinges and
        robust materials.
      </p>
    </section>

    <section class="mb-8 p-6 bg-black text-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Team Roles</h2>
      <ul class="list-disc list-inside space-y-2 pl-6">
        <li><span class="font-medium">Campbell:</span> Hardware Technician</li>
        <li><span class="font-medium">Alex:</span> Documentation Expert</li>
        <li><span class="font-medium">Sam:</span> Visualization Developer</li>
        <li>
          <span class="font-medium">Ethan:</span> Embedded Software Master
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
/* No additional styles needed since Tailwind handles the design */
</style>
