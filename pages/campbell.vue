<template>
  <div class="form-container">
    <div class="content">
      <div>
        <h1>Contact Campbell Tressler</h1>
      </div>
      <img
        src="@/assets/images/Campbells car.png"
        alt="Reall cool racecar"
        class="picture"
      />
    </div>
    <p>
      My name is Campbell Tressler. I am a computer science and engineering
      student and the driver of the 87T IMCA Sport Compact car at the
      Independence and Marshalltown Speedways. I spend my free time going to
      the gym or working on my car.
    </p>
    <Form 
      :to="'ctresslercf@gmail.com'"
      :person="'Campbell'"
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

.picture{
  border-radius: 12px;
}
</style>
