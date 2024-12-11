<template>
  <div class="form-container">
    <div class="content">
      <div>
        <h1>Contact Ethan Cox</h1>
      </div>
      <img
        src="@/assets/images/Ethan Stanced Up.png"
        alt="Ethan stanced up"
        class="okc-logo"
      />
    </div>
    <p>
      Hello! I am Ethan Cox, a fourth year Electrical Engineering student at the
      University of Iowa. I love soccer and bouldering and am an avid Liverpool
      fan. My favorite artists are The Voidz, The Strokes, and Mt. Joy. Feel
      free to contact me using the form below.
    </p>
    <Form 
      :to="'ethanwcox@gmail.com'"
      :person="'Ethan'"
    />
  </div>
</template>

<script setup></script>

<style scoped>
@font-face {
  font-family: "Roboto";
  src: url("~/assets/fonts/Roboto-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.form-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Roboto Regular", Roboto, sans-serif;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Roboto Regular", Roboto, sans-serif;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  font-family: "Roboto Regular", Roboto, sans-serif;
}

p {
  font-size: 16px;
  margin-bottom: 20px;
  color: #555;
  font-family: "Roboto Regular", Roboto, sans-serif;
}

.okc-logo {
  max-width: 100px;
  height: auto;
  margin-left: 20px;
  border-radius: 12px; /* Adds rounded corners to the image */
}
</style>