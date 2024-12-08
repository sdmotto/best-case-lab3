<template>
  <div class="form-container">
    <div class="content">
      <h1>Contact Sam Motto</h1>
      <img
        src="@/assets/images/maple.png"
        alt="Maple"
        class="picture"
      />
      <img
        src="@/assets/images/ellie.png"
        alt="Ellie"
        class="picture"
      />
    </div>
    <p class="mt-2">
      Howdy! My name is Sam Motto and I am a fourth-year Computer Science and Engineering Student at
      the University of Iowa. I work for the ICON team at the University and did a lot of work on SPOT 
      this past summer. Back home, I have two dogs named Ellie and Maple. Feel free to contact me using the form below.
    </p>
    <Form
      :to="email"
      :person="'Sam'"
    />
  </div>
</template>

<script setup>
const email = "motto.d.sam@gmail.com";
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
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

.picture {
  max-width: 100px;
  height: auto;
  margin-left: 20px;
  border-radius: 12px;
}
</style>
