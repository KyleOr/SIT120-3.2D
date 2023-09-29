<template>
  <div class="PortfolioSection">
    <div class="section-left">
      <h1 style="color: white; font-size: 42px;">Check out my projects!</h1>
      <p style="color: white; font-size: 24px;">These solidified my love for creating software and applications. Theres more where these came from too 😉</p>
    </div>
    <div class="section-right">
      <router-link v-for="project in projects" :key="project.id" :to="'/project/' + project.id">
        <div class="parallax-depth-card">
          <div class="parallax-depth-card__image" :style="{ backgroundImage: `url(${project.imageUrl})` }"></div>
          <div class="parallax-depth-card__content">
            <h3 style="color: white; font-size: 20px;">{{ project.title }}</h3>
            <p style="color: white; font-size: 14px;">{{ project.description }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioSection',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Grocerx',
          description: 'A webscraper application for grocery shoppers',
          imageUrl: 'https://media1.giphy.com/media/DPJ6hOXQSOL96/giphy.webp?cid=ecf05e4746goqogmlcs8pnxiesv0qt1vb1m02vkfkqfrj4xv&ep=v1_gifs_search&rid=giphy.webp&ct=g',
        },
        {
          id: 2,
          title: 'Chatbot',
          description: 'Discord chatbot of Korone Inugami',
          imageUrl: 'https://media3.giphy.com/media/zvwj8xlBXLxcY/giphy.gif?cid=ecf05e4746goqogmlcs8pnxiesv0qt1vb1m02vkfkqfrj4xv&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        },
        {
          id: 3,
          title: 'Textgame',
          description: 'Interactive console text game',
          imageUrl: 'https://media1.giphy.com/media/JyDMX1pVgdHl6/giphy.gif?cid=ecf05e47c0f3c24kuf2iml1ugtz758m4ngayi8s8z8n5zb8h&ep=v1_gifs_related&rid=giphy.gif&ct=g',
        },
        {
          id: 4,
          title: 'JRPG',
          description: 'Collaboration with a small gamestudio ',
          imageUrl: 'https://media2.giphy.com/media/3ohzdSXaiXUKwA0QqA/giphy.gif?cid=ecf05e47katn96678tavsrn592337l31rn85ko5d39wd0ip3&ep=v1_gifs_related&rid=giphy.gif&ct=g',
        },
      ],
    };
  },
};
</script>
<style scoped>
.PortfolioSection {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
}

.section-left {
  flex: 1;
  padding: 20px;
  text-align: left;
}

.section-right {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.parallax-depth-card {
  position: relative;
  width: 100%;
  height: 200px;
  perspective: 1000px;
}

.parallax-depth-card__image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateZ(0);
  transition: transform 0.5s ease;
}

.parallax-depth-card:hover .parallax-depth-card__image {
  transform: translateZ(50px);
}

.parallax-depth-card__content {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.8); 
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: transform 0.5s ease;
}

.parallax-depth-card:hover .parallax-depth-card__content {
  transform: translateY(-20px);
}

h3, p {
  color: white;
  font-size: 20px;
  margin-bottom: 10px;
}

</style>