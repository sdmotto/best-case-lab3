<template>
    <div>
      <h1>Best CASE Lab 1 Report</h1>
      <section>
        <h2>System Overview</h2>
        <p>The system integrates hardware and software to provide real-time temperature monitoring, control, and user notifications via a web-based application.</p>
      </section>
  
      <section>
        <h2>Hardware Description</h2>
        <p>
          The hardware includes an ESP32 microcontroller, OLED display, DSB1820 temperature sensors, and a 9V battery in a 3D-printed enclosure. The ESP32 handles all data collection and transmission.
        </p>
        <ul>
          <li>ESP32 Pin Mapping:
            <ul>
              <li>D22: SDL pin (OLED)</li>
              <li>D21: SDA pin (OLED)</li>
              <li>D18: Sensor Button 2</li>
              <li>D19: Sensor Button 1</li>
              <li>D4: Temperature Sensor Data</li>
            </ul>
          </li>
        </ul>
      </section>
  
      <section>
        <h2>Software Description</h2>
        <p>
          The web application uses MQTT for real-time data transfer and incorporates technologies such as Node.js, Express.js, and Socket.IO. The ESP32 runs code written with Arduino IDE for handling sensors, buttons, and data communication.
        </p>
      </section>
  
      <section>
        <h2>Parts List</h2>
        <ul>
          <li>ESP32 Microcontroller</li>
          <li>OLED Display</li>
          <li>DSB1820 Temperature Sensors</li>
          <li>9V Battery</li>
          <li>3D-Printed Enclosure</li>
          <li>Switches, Buttons, and Connectors</li>
        </ul>
      </section>
  
      <section>
        <h2>Challenges and Solutions</h2>
        <p>
          Key challenges included hardware durability, software latency, and initial connection issues. Solutions involved switching to MQTT for real-time communication and improving enclosure design with hinges and robust materials.
        </p>
      </section>
  
      <section>
        <h2>Team Roles</h2>
        <ul>
          <li>Campbell: Hardware Technician</li>
          <li>Alex: Documentation Expert</li>
          <li>Sam: Visualization Developer</li>
          <li>Ethan: Embedded Software Master</li>
        </ul>
      </section>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    margin-top: 20px;
  }
  h2 {
    margin-top: 20px;
    color: #2c3e50;
  }
  p, ul {
    margin-left: 20px;
  }
  </style>
  