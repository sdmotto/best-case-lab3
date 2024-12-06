<template>
  <div class="container mx-auto px-6 py-8">
    <!-- Page Title -->
    <h1 class="text-4xl font-bold text-center mb-8 text-black">
      RoadReady: Senior Design Project Proposal
    </h1>

    <ProjectsNav />

    <!-- Sections -->
    <section class="mb-8 mt-8 p-6 bg-black text-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Executive Summary</h2>
      <p class="text-lg">
        RoadReady is an at-home driving simulator designed to help teens learn
        to drive in a safe, immersive environment. The simulator uses real-world
        data to create 3D driving environments tailored to actual locations,
        allowing teens to practice routes such as home-to-school or work under
        parent-set parameters. By incorporating traffic elements like signs and
        lights, it offers a realistic and relevant training platform for
        building safer driving habits.
      </p>
    </section>

    <section class="mb-8 p-6 bg-black text-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Problem Statement</h2>
      <p class="text-lg">
        Traditional driver training methods on public roads pose significant
        safety risks, especially for teens. While existing simulators provide
        virtual environments, they lack customization to real-world locations.
        RoadReady aims to fill this gap by offering a safe, realistic, and
        tailored driving practice solution that enhances skill development and
        public safety.
      </p>
    </section>

    <section class="mb-8 p-6 bg-black text-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Design Objectives</h2>
      <ul class="list-disc list-inside space-y-2 pl-6 text-lg">
        <li>Provide a realistic driving experience with authentic controls.</li>
        <li>
          Simulate real-world environments using Google Maps and Google Earth
          APIs.
        </li>
        <li>
          Enable parental controls and analytics for tracking adherence to
          traffic laws.
        </li>
        <li>
          Incorporate road rules such as stop signs, traffic lights, and speed
          limits.
        </li>
        <li>Offer a user-friendly interface for seamless operation.</li>
      </ul>
    </section>

    <section class="mb-8 p-6 bg-black text-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">
        System Requirements and Constraints
      </h2>
      <h3 class="text-xl font-semibold mb-2">Major Requirements</h3>
      <ul class="list-disc list-inside space-y-2 pl-6 text-lg">
        <li>
          Software to respond to steering wheel, pedals, and turn signal inputs.
        </li>
        <li>
          Create 3D environments from real-world data with parental route
          settings.
        </li>
        <li>
          Track and report adherence to traffic laws, including stop signs and
          speed limits.
        </li>
        <li>
          Hardware peripherals (steering wheel, pedals, and turn signal stalk)
          must be compatible with a standard desk.
        </li>
      </ul>
      <h3 class="text-xl font-semibold mt-4 mb-2">Constraints</h3>
      <ul class="list-disc list-inside space-y-2 pl-6 text-lg">
        <li>Locations limited to the U.S. with complete traffic data.</li>
        <li>
          Traffic rules based on U.S. Department of Transportation standards.
        </li>
      </ul>
    </section>

    <section class="mb-8 p-6 bg-black text-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Design Concept</h2>
      <p class="text-lg">
        The simulator integrates hardware (steering wheel, pedals, and turn
        signal stalk) with software that uses Unity to create 3D environments
        from Google Maps and Google Earth APIs. Users can drive through these
        environments to simulate real-world experiences.
      </p>
    </section>

    <section class="mb-8 p-6 bg-black text-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Project Deliverables</h2>
      <h3 class="text-xl font-semibold mb-2">Hardware</h3>
      <ul class="list-disc list-inside space-y-2 pl-6 text-lg">
        <li>Prototype single-point wiring for peripherals.</li>
        <li>
          Wiring diagram for the steering wheel and turn signal integration.
        </li>
      </ul>
      <h3 class="text-xl font-semibold mt-4 mb-2">Software</h3>
      <ul class="list-disc list-inside space-y-2 pl-6 text-lg">
        <li>Proof-of-concept driving simulator application.</li>
        <li>Integration of traffic laws and parental analytics.</li>
      </ul>
    </section>

    <section class="mb-8 p-6 bg-black text-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Risk Management</h2>
      <h3 class="text-xl font-semibold mb-2">Primary Risks</h3>
      <ul class="list-disc list-inside space-y-2 pl-6 text-lg">
        <li>
          Lack of experience with Unity, mitigated by leveraging its extensive
          documentation.
        </li>
        <li>
          Hardware integration challenges with peripherals like the turn signal
          stalk.
        </li>
      </ul>
      <h3 class="text-xl font-semibold mt-4 mb-2">Contingency Plan</h3>
      <p class="text-lg">
        Use GitHub for code management and host virtual meetings via Discord if
        in-person collaboration is disrupted. Hardware is owned by team members,
        ensuring accessibility.
      </p>
    </section>

    <section class="mb-8 p-6 bg-black text-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Budget</h2>
      <ul class="list-disc list-inside space-y-2 pl-6 text-lg">
        <li>Replacement turn signal stalk: $25.00</li>
        <li>USB encoder: $15.00</li>
        <li>
          Google API calls: Estimated $100-300 (with $300 of free credits per
          account).
        </li>
      </ul>
    </section>

    <section class="mb-8 p-6 bg-black text-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Team Organization</h2>
      <p class="text-lg">
        <strong>Hardware Development:</strong> Campbell Tressler and Ethan
        Cox<br />
        <strong>Software Development:</strong> Led by Sam Motto<br />
        <strong>Documentation and Management:</strong> Alex Lehman
      </p>
      <p class="text-lg mt-4">
        Weekly meetings on Wednesdays and Fridays, 12:30 - 2:30 PM, at the
        Seaman Center. Additional meetings as needed.
      </p>
    </section>

    <section class="mb-8 p-6 bg-black text-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Future Goals</h2>
      <ul class="list-disc list-inside space-y-2 pl-6 text-lg">
        <li>Expand to include additional countries and traffic laws.</li>
        <li>Develop miniaturized hardware using custom PCBs.</li>
        <li>Enhance analytics for detailed driving statistics and feedback.</li>
      </ul>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
/* No additional styles needed since Tailwind handles the design */
</style>
