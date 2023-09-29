<template>
    <div class="ProjectPage">
      <div class="project-image">
        <img :src="projectImageUrl" :alt="projectTitle" />
      </div>
  
      <div class="project-details">
        <h1>{{ projectTitle }}</h1>
        <p>{{ projectDescription }}</p>
      </div>
  
    <!-- Navigation Buttons -->
    <div class="navigation-buttons">
      <!-- Button to Go Back to Homepage -->
      <router-link to="/">
        <button class="nav-button">Home</button>
      </router-link>

      <!-- Button to Go to the Previous Project -->
      <router-link to="/project/3">
        <button class="nav-button">TextGame</button>
      </router-link>

      <!-- Button to Go to the Next Project -->
      <router-link to="/project/1">
        <button class="nav-button">Grocerx</button>
      </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectPage',
    data() {
      return {
        projectTitle: 'JRPG',
        projectDescription: 'For an off project, I collaborated with a small Japanese game studio and we developed a short rpg game with RPGVX',
        projectImageUrl: require('@/assets/jrpggame.jpg')
      };
    },
  };
  </script>
  
  <style scoped>
  .ProjectPage {
    display: flex;
    flex-direction: column;
    align-items: center; 
    background-color: #333; 
    color: #fff; 
    padding: 20px; 
  }
  
  .project-image img {
    max-width: 100%; 
    height: auto; 
    max-height: 70vh;
  }
  
  .project-details {
    text-align: center;
    margin-top: 20px;
  }
  
  .project-details h1 {
    font-size: 28px;
  }
  
  .project-details p {
    font-size: 18px;
  }
  
  .navigation-buttons {
    display: flex;
    justify-content: center; 
    margin-top: 20px;
  }
  
  .nav-button {
    background-color: #555; 
    color: #fff; 
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 0 10px; 
    text-decoration: none;
    cursor: pointer;
  }
  
  .nav-button:hover {
    background-color: #333; 
  }
  </style>
  