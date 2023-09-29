<template>
    <div class="BottomSection">
      <div class="content">
        <h2>Contact Me</h2>
        <p>If you have any questions or would like to get in touch, feel free to send me a message. I'd love to hear from you!</p>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/kyleoris/" class="social-link"><i class="fab fa-linkedin"></i></a>
          <a href="https://github.com/KyleOr" class="social-link"><i class="fab fa-github"></i></a>
          <a href="mailto:kyleerikoris@gmail.com" class="social-link"><i class="fas fa-envelope"></i></a>
        </div>
        <button @click="scrollToTop" class="custom-button">Scroll to Top</button>
        <p>&copy; 2023KyleOrisDesign</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
  };
  </script>
  <style scoped>
  .BottomSection {
    background-color: #333; 
    color: white;
    padding: 40px 0;
    text-align: center;
    animation: fadeInUp 1s ease; 
  }
  
  .content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex; 
    flex-direction: column;
    align-items: center; 
  }
  
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  .custom-button {
    background-color: transparent;
    color: white;
    border: 2px solid white;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease; 
  }
  
  .custom-button:hover {
    transform: translateY(-5px); 
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3); 
    border: 2px solid black;
  }
  .custom-button:focus {
    outline: none; 
  }
  
  .social-links {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  
  .social-link {
    font-size: 24px;
    margin-right: 20px;
    margin-left: 20px;
    color: white;
    text-decoration: none;
    margin-bottom: 20px;
  }
  
  .social-link:hover {
    color: #ff5733; 
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  