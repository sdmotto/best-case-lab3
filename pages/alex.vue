<template>
    <div class="form-container">
      <h1>Contact Alex Lehman</h1>
      <p>
        Hey there! I'm Alex Lehman, a fourth-year Computer Science and Engineering student at Iowa. I love music, especially J. Cole, Rex Orange County, and Olivia Rodrigo. Also, go Hawkeyes, Cowboys, and Thunder!
      </p>
      <Form :to="'alexlehman7@gmail.com'" />
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .form-container {
    max-width: 500px;
    margin: 50px auto;
    padding: 20px;
    background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
    text-align: center;
  }
  
  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
  }
  
  p {
    font-size: 16px;
    margin-bottom: 20px;
    color: #555;
  }
  
  </style>
  