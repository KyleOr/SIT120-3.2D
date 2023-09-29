<template>
    <div class="ProjectPage">
      <!-- Project Details -->
      <div class="project-details">
        <h1>{{ projectTitle }}</h1>
        <p>{{ projectDescription }}</p>
      </div>
  
      <!-- Project Image -->
      <div class="project-image">
        <img :src="projectImageUrl" :alt="projectTitle" />
      </div>
    <!-- Navigation Buttons -->
    <div class="navigation-buttons">
      <!-- Button to Go Back to Homepage -->
      <router-link to="/">
        <button class="nav-button">Home</button>
      </router-link>

      <!-- Button to Go to the Previous Project -->
      <router-link to="/project/1">
        <button class="nav-button">Grocerx</button>
      </router-link>

      <!-- Button to Go to the Next Project -->
      <router-link to="/project/3">
        <button class="nav-button">Textgame</button>
      </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectPage',
    data() {
      return {
        projectTitle: 'Chatbot',
        projectDescription: 'Inspired by Character.AI, I figured I could try to make my own. This project thought me the fundamentals of machine learning and data scavenging. This project was made easier through already established APIs which made data scraping easier. A bulk of this process was thanks to a python script to download captions from Youtube.',
        projectImageUrl: require('@/assets/AIchatkorone.jpg'), 
      };
    },
  };
  </script>
  
  <style scoped>
  .ProjectPage {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; 
    max-width: 100%; 
    margin: 0; 
    background-color: #333; 
  }
  
  .project-details {
    flex: 2; 
    background-color: #f5f5f5; 
    padding: 20px; 
    text-align: center;
    position: relative;
  }
  
  .project-details h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .project-details p {
    font-size: 16px;
  }

  .navigation-buttons {
    position: absolute;
    bottom: 20px;
    left: 20px; 
    display: flex;
    flex-direction: row;
  }
  
  .nav-button {
    background-color: #fff; 
    color: #333; 
    border: 1px solid #333; 
    border-radius: 5px;
    padding: 5px 10px;
    margin-right: 10px; 
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none; 
  }

  .nav-button:hover {
    background-color: #333; 
    color: #fff; 
  }
    .project-image {
    flex: 8; 
    position: relative;
  }
  
  .project-image img {
    width: 100%; 
    height: 100%; 
    object-fit: cover;
  }
  </style>
  