<template>
    <div class="grid-container">
      <div class="grid-item" v-for="(item, index) in 9" :key="index">
        <!-- Center box contains the Rick Roll video -->
        <iframe
          v-if="index === 4"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
  
        <!-- Other boxes contain images -->
        <div v-else class="image-container">
          <img :src="getImage(index)" alt="Image" class="grid-image" />
          <div class="image-caption">Image {{ index + 1 }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const getImage = (index) => {
    const images = [
      new URL('@/assets/images/Sexy Beast.jpg', import.meta.url).href,
      new URL('@/assets/images/bell2.png', import.meta.url).href,
      new URL('@/assets/images/alexLOL.jpg', import.meta.url).href,
      new URL('@/assets/images/bell2.png', import.meta.url).href,
      '', // Center box for the video
      new URL('@/assets/images/bell2.png', import.meta.url).href,
      new URL('@/assets/images/samLOLOL.jpg', import.meta.url).href,
      new URL('@/assets/images/bell2.png', import.meta.url).href,
      new URL('@/assets/images/ethanROFLMAO.jpg', import.meta.url).href,
    ];
    return images[index];
  };
  </script>
  
  <style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
    width: 100%;
    height: 100vh;
  }
  
  .grid-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    overflow: hidden;
  }
  
  .image-container {
    text-align: center;
  }
  
  .grid-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; /* Ensures the entire image is visible, not cropped */
  }
  
  .image-caption {
    margin-top: 5px;
    font-size: 14px;
    color: #555;
  }
  </style>
  