<template>
    <div class="form-container">
        <div>
          <h1>Contact Campbell Tressler</h1>
          <p>
            My name is Campbell Tressler. I am a computer science and engineering student and the driver of the 87T IMCA Sport Compact car at the Independence and Marshalltown Speedways. I spend my free time going to the gym or working on my car. 
          </p>
          <Form :to="'ctresslercf@gmail.com'" />
        </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .form-container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
  }
  
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  
  .okc-logo {
    max-width: 100px;
    height: auto;
    margin-left: 20px;
  }
  </style>
  