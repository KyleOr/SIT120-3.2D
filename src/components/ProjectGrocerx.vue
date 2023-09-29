<template>
    <div class="ProjectPage">
      <!-- Project Image -->
      <div class="project-image">
        <img :src="projectImageUrl" :alt="projectTitle" />
      </div>
  
      <!-- Project Details -->
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
      <router-link to="/project/4">
        <button class="nav-button">JRPG</button>
      </router-link>

      <!-- Button to Go to the Next Project -->
      <router-link to="/project/2">
        <button class="nav-button">Chatbot</button>
      </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectPage',
    data() {
      return {
        projectTitle: 'Grocerx',
        projectDescription: 'My first application was for my computing class in which I developed a grocery webscraper. The interface included a search function and three rows of item to display the search results from Woolworths, Coles, and IGA. Unfortunately I have lost the project file after formatting my device from graduation.',
        projectImageUrl: 'https://media0.giphy.com/media/mrSGyYh9LThe/giphy.gif?cid=ecf05e47xaho82xi2l1gh44oyhun490q9ubzu9iounl9xllz&ep=v1_gifs_search&rid=giphy.gif&ct=g', // Replace with your project image URL
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
  
  .project-image {
    flex: 8;
    position: relative;
  }
  
  .project-image img {
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
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
  right: 20px;
  display: flex;
  flex-direction: row;
}

.nav-button {
  background-color: #fff; 
  color: #333;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 5px 10px;
  margin-left: 10px;
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
  </style>
  