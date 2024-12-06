<template>
  <div class="container mx-auto px-6 py-8">
    <!-- Page Title -->
    <h1 class="text-4xl font-bold text-center mb-8 text-black">
      Best CASE Lab 2 Report
    </h1>

    <ProjectsNav />

    <!-- Sections -->
    <section class="mb-8 mt-8 p-6 bg-black text-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">System Overview</h2>
      <p class="text-lg">
        Designed and built a frequency-selective filter as part of an "electric
        eye" light beam-interrupter safety system. The system detects
        interruptions in an infrared beam and sends a safety alert via email.
      </p>
    </section>

    <section class="mb-8 p-6 bg-black text-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Hardware Description</h2>
      <p class="text-lg mb-4">
        The receiver circuit detects infrared light using a photodetector and
        amplifies the signal with an operational amplifier. The amplified signal
        is processed by the ESP32 microcontroller for digital filtering and
        notification handling.
      </p>
      <ul class="list-disc list-inside space-y-2 pl-6">
        <li>
          <strong>Key Components:</strong>
          <ul class="list-disc list-inside pl-4 space-y-2">
            <li>
              <strong>Photodetector:</strong> Detects transmitted IR signals.
            </li>
            <li>
              <strong>Operational Amplifier (TLV2472):</strong> Amplifies
              signals with a gain of ~470.
            </li>
            <li>
              <strong>Rail Splitter (TLE2426):</strong> Provides a virtual
              ground.
            </li>
            <li>
              <strong>ESP32:</strong> Processes the signal and sends
              notifications via MQTT.
            </li>
            <li>
              <strong>Elenco Power Supply:</strong> Powers the system with a
              stable 5V supply.
            </li>
          </ul>
        </li>
      </ul>
    </section>

    <section class="mb-8 p-6 bg-black text-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Software Description</h2>
      <p class="text-lg">
        The ESP32 uses a digital filter designed with MATLAB to monitor the IR
        signal. It triggers an email notification via MQTT when the signal is
        interrupted. Emails include timestamped safety event details.
      </p>
    </section>

    <section class="mb-8 p-6 bg-black text-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Parts List</h2>
      <ul class="list-disc list-inside space-y-2 pl-6">
        <li>ESP32 Microcontroller</li>
        <li>Operational Amplifier (TLV2472)</li>
        <li>Photodetector</li>
        <li>Rail Splitter (TLE2426)</li>
        <li>Elenco Power Supply</li>
        <li>Decoupling Capacitors (1 µF, 47 nF)</li>
      </ul>
    </section>

    <section class="mb-8 p-6 bg-black text-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Challenges and Solutions</h2>
      <ul class="list-disc list-inside space-y-2 pl-6">
        <li>
          <strong>Noise:</strong> Switched to the Elenco power source to reduce
          noise and improve stability.
        </li>
        <li>
          <strong>Incorrect Capacitor:</strong> Fixed component value errors for
          accurate readings.
        </li>
        <li>
          <strong>Powering Issues:</strong> Resolved incorrect op-amp wiring to
          amplify the signal effectively.
        </li>
      </ul>
    </section>

    <section class="mb-8 p-6 bg-black text-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Final Design</h2>
      <p class="text-lg">
        Achieved a detection range of up to 24 inches using a Butterworth
        filter. The design effectively reduces noise and attenuates out-of-band
        frequencies, meeting the lab's objectives.
      </p>
    </section>

    <section class="mb-8 p-6 bg-black text-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Team Roles</h2>
      <ul class="list-disc list-inside space-y-2 pl-6">
        <li><strong>Campbell Tressler:</strong> Hardware Technician</li>
        <li><strong>Alex Lehman:</strong> Documentation Wrangler</li>
        <li><strong>Sam Motto:</strong> Filter Engineer</li>
        <li><strong>Ethan Cox:</strong> Hardware System Designer</li>
      </ul>
    </section>

    <section class="mb-8 p-6 bg-black text-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Future Considerations</h2>
      <ul class="list-disc list-inside space-y-2 pl-6">
        <li>
          Introduce analog filters to improve signal clarity and extend
          detection range.
        </li>
        <li>
          Miniaturize the design using a custom PCB for practical applications.
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
/* No additional styles needed since Tailwind handles the design */
</style>
