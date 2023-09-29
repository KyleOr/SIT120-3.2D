<template>
    <div class="ResumePage">
      <!-- Left Column for Personal Details -->
      <div class="left-column">
        <!-- Personal Details Section -->
        <div class="round-box personal-details">
          <h2><i class="fas fa-user"></i> Kyle Oris</h2>
          <p><i class="fas fa-map-marker-alt"></i> 13 Monterey Street, Armstrong Creek, VIC, 3217</p>
          <p><i class="fas fa-envelope"></i> kyleerikoris@gmail.com</p>
          <p><i class="fas fa-phone"></i> 0412234376</p>
        
          <!-- Skills Section -->
            <div class="skills">
            <h2><i class="fas fa-cogs"></i> Skills</h2>
            <ul>
            <li>Web Development</li>
            <li>Python</li>
            <li>Vue.js</li>
            <li>C++</li>
            <li>HTML/CSS</li>
          </ul>
        </div>
      </div>
    </div>
  
      <!-- Right Column -->
      <div class="right-column">
        <!-- Top Row for Work Experience -->
        <div class="top-row">
          <!-- Work Experience Section -->
          <div class="round-box work-experience">
            <h2><i class="fas fa-briefcase"></i> Work Experience</h2>
            <div class="work-item">
              <h3>Public Address</h3>
              <p>Grovedale Baptist Church | Grovedale, VIC</p>
              <p>July 2018 - Present</p>
              <ul>
                <li>Experienced system operator, contributing to seamless communication and efficient message</li>
                <li>dissemination. Proficient in managing and controlling audio systems to ensure clear and effective delivery of announcements</li>
                <li>Adept at coordinating schedules and content, demonstrating strong attention to detail and technical expertise.</li>
              </ul>
            </div>
            <div class="work-item">
              <h3>Crew Member (BOH)</h3>
              <p>Hungry Jacks | Grovedale, VIC</p>
              <p>March 2023 - August 2023</p>
              <ul>
                <li>Back-of-House (BOH) crew member with a proven track record of contributing to the efficient operations of Hungry </li>
                <li>Jack's. Skilled in food preparation, maintaining cleanliness and hygiene standards, and collaborating with a diverse team </li>
                <li>ensure smooth workflow. Possesses a strong work ethic and dedication to upholding quality standards in a fast-paced environment.</li>
              </ul>
            </div>
          </div>
        </div>
  
        <!-- Bottom Row for Education -->
        <div class="bottom-row">
          <!-- Education Section -->
          <div class="round-box education">
            <h2><i class="fas fa-graduation-cap"></i> Education</h2>
            <div class="education-item">
              <h3>Undergraduate Bachelor of IT | Application Development</h3>
              <p>Deakin University</p>
              <p>Expected in October 2025</p>
            </div>
            <div class="education-item">
              <h3>High School Diploma</h3>
              <p>Grovedale College</p>
              <p>Graduated: September 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResumePage',
  };
  </script>
  
  <style scoped>
  .ResumePage {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
  }
  
  .left-column {
    flex: 3;
    padding: 20px;
  }
  
  .right-column {
    flex: 7;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .round-box {
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  
  .personal-details {
  background-color: #f5f5f5;
}

.skills {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
}

.skills h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.skills ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.skills li {
  margin-top: 5px;
  font-size: 18px;
}
  
  .work-experience {
    background-color: #f9f9f9;
  }
  
  .work-item {
    margin-top: 10px;
  }
  
  .education {
    background-color: #f5f5f5;
  }
  
  .education-item {
    margin-top: 10px;
  }
  </style>
  