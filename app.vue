<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
</script>


<style>
@font-face {
  font-family: "Roboto Regular";
  src: url("~/assets/fonts/Roboto-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Roboto Regular", Roboto, sans-serif;
  background-color: #ffcd00; /* Gold background */
  color: #000000; /* Black text */
  line-height: 1.6;
  display: flex;
  flex-direction: column;
}
</style>
