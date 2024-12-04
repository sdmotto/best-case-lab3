<template>
    <div class="landing-page">
      <h1 class="team-name">Best CASE Scenario</h1>
      <p class="about-text">
        Welcome to our website. Here you can view our past projects and information about each team member. 
      </p>
      <div class="projects">
        <h2>Past Projects</h2>
        <ul>
          <li>
            <strong>Lab 1</strong>: Designed a thermometer system that allowed users to view the temperature from a website and turn sensors on and off externally. 
          </li>
          <li>
            <strong>Lab 2</strong>: Developed a IR receiver for a transmitter. 
          </li>
          <li>
            <strong>Senior Design Project</strong>: We plan to develop a driving simulator that uses Google Earth and Google Maps APIs so that user can drive in realistic environments.
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* General Styling */
  .landing-page {
    font-family: "Iowa Serif", serif; /* University of Iowa suggested font */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh; /* Full-screen height */
    background-color: #ffcc00; /* Gold background */
    color: #000000; /* Black text */
    text-align: center;
    padding: 2rem;
  }
  
  /* Team Name Styling */
  .team-name {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-transform: uppercase;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Subtle shadow for emphasis */
  }
  
  /* About Text Styling */
  .about-text {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    max-width: 800px;
    line-height: 1.8;
  }
  
  /* Projects Section */
  .projects {
    max-width: 800px;
    text-align: left; /* Align text to the left for better readability */
  }
  
  .projects h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  
  .projects ul {
    list-style: none;
    padding: 0;
  }
  
  .projects li {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    line-height: 1.6;
  }
  
  .projects li strong {
    font-weight: bold;
    text-transform: capitalize;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .team-name {
      font-size: 2.5rem;
    }
  
    .about-text {
      font-size: 1.2rem;
      padding: 0 1rem;
    }
  
    .projects h2 {
      font-size: 1.5rem;
    }
  
    .projects li {
      font-size: 1rem;
    }
  }
  </style>
  