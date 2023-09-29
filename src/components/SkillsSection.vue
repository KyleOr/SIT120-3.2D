<template>
    <div class="skills-section">
      <div class="row">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="skill-card"
          @mouseover="expandSkill(index)"
          @mouseout="collapseSkill(index)"
        >
          <!-- Front side -->
          <div class="skill front">
            <div class="skill-icon">
              <i class="fas fa-code"></i>
            </div>
            <div class="skill-title">{{ skill.title }}</div>
          </div>
          
          <!-- Back side -->
          <div class="skill back">
            <div class="skill-description">{{ skill.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  
  
  
  <script>
  export default {
    data() {
      return {
        skills: [
          {
            title: "Communication",
            description: "My overall personality and professional history, I believe being able to converse concise and influentive ideas to multiple parties is important. ",
            expanded: false,
          },
          {
            title: "Pre-Production Assessment",
            description: "It is important to plan ahead and prepare for multiple cases, but in an effective and efficient manner",
            expanded: false,
          },
          {
            title: "Teamwork",
            description: "Working with others allows new ideas to be formed and an innovative spirit. Adapting and learning from others is important as well.",
            expanded: false,
          },
          {
            title: "Fluency in multiple coding languages",
            description: "Experience in Python, HTML, CSS, JS, C++, SQL",
            expanded: false,
          },
          {
            title: "Problem Solving",
            description: "Variaty in arsenal in tackling issues from multiple angles. It is important to find multiple solutions to problems.",
            expanded: false,
          },
          {
            title: "Technical Adaptability",
            description: "Able to learn software modules and APIs to implement and use quick.",
            expanded: false,
          },
        ],
      };
    },
    methods: {
      expandSkill(index) {
        this.skills[index].expanded = true;
      },
      collapseSkill(index) {
        this.skills[index].expanded = false;
      },
    },
  };
  </script>
  
  <style scoped>
.skills-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}

.skill-card {
  width: calc(33.33% - 20px);
  margin: 10px;
  height: 200px;
  perspective: 1000px; 
}

.skill-card .skill {
  width: 100%;
  height: 100%;
  position: absolute;
  transition: transform 0.7s; 
  backface-visibility: hidden; 
}

.skill-card .front {
  background-color: #f5f5f5;
  border-radius: 8px;
  cursor: pointer;
}

.skill-card .back {
  background-color: rgba(245, 245, 245, 0.8); 
  border-radius: 8px;
  cursor: pointer;
  transform: rotateY(-180deg); 
}

.skill-card:hover .front {
  transform: rotateY(180deg); 
}

.skill-card:hover .back {
  transform: rotateY(0deg);
}

.skill-icon {
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
}

.skill-title {
  font-weight: bold;
  text-align: center;
}

.skill-description {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
}

.skill-card:hover .skill-description {
  max-height: 200px; 
  transition: max-height 0.3s ease-in-out;
}
</style>
