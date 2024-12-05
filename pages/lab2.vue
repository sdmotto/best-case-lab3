<template>
    <div>
      <h1>Best CASE Lab 2 Report</h1>
      <section>
        <h2>System Overview</h2>
        <p>
          Designed and built a frequency-selective filter as part of an "electric eye" light
          beam-interrupter safety system. The system detects interruptions in an infrared beam
          and sends a safety alert via email.
        </p>
      </section>
  
      <section>
        <h2>Hardware Description</h2>
        <p>
          The receiver circuit detects infrared light using a photodetector and amplifies the signal
          with an operational amplifier. The amplified signal is processed by the ESP32 microcontroller
          for digital filtering and notification handling.
        </p>
        <ul>
          <li>Key Components:
            <ul>
              <li>Photodetector: Detects transmitted IR signals.</li>
              <li>Operational Amplifier (TLV2472): Amplifies signals with a gain of ~470.</li>
              <li>Rail Splitter (TLE2426): Provides a virtual ground.</li>
              <li>ESP32: Processes the signal and sends notifications via MQTT.</li>
              <li>Elenco Power Supply: Powers the system with a stable 5V supply.</li>
            </ul>
          </li>
        </ul>
      </section>
  
      <section>
        <h2>Software Description</h2>
        <p>
          The ESP32 uses a digital filter designed with MATLAB to monitor the IR signal. It triggers
          an email notification via MQTT when the signal is interrupted. Emails include timestamped
          safety event details.
        </p>
      </section>
  
      <section>
        <h2>Parts List</h2>
        <ul>
          <li>ESP32 Microcontroller</li>
          <li>Operational Amplifier (TLV2472)</li>
          <li>Photodetector</li>
          <li>Rail Splitter (TLE2426)</li>
          <li>Elenco Power Supply</li>
          <li>Decoupling Capacitors (1 µF, 47 nF)</li>
        </ul>
      </section>
  
      <section>
        <h2>Challenges and Solutions</h2>
        <ul>
          <li>
            <strong>Noise:</strong> Switched to the Elenco power source to reduce noise and improve stability.
          </li>
          <li>
            <strong>Incorrect Capacitor:</strong> Fixed component value errors for accurate readings.
          </li>
          <li>
            <strong>Powering Issues:</strong> Resolved incorrect op-amp wiring to amplify the signal effectively.
          </li>
        </ul>
      </section>
  
      <section>
        <h2>Final Design</h2>
        <p>
          Achieved a detection range of up to 24 inches using a Butterworth filter. The design effectively
          reduces noise and attenuates out-of-band frequencies, meeting the lab's objectives.
        </p>
      </section>
  
      <section>
        <h2>Team Roles</h2>
        <ul>
          <li>Campbell Tressler: Hardware Technician</li>
          <li>Alex Lehman: Documentation Wrangler</li>
          <li>Sam Motto: Filter Engineer</li>
          <li>Ethan Cox: Hardware System Designer</li>
        </ul>
      </section>
  
      <section>
        <h2>Future Considerations</h2>
        <ul>
          <li>Introduce analog filters to improve signal clarity and extend detection range.</li>
          <li>Miniaturize the design using a custom PCB for practical applications.</li>
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
  