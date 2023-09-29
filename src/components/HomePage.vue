<template>
  <div class="HomePage">
    <!-- Section 1 -->
    <div class="parallax-section section1">
      <div class="home">
        <IntroductionSection class="section1" />
      </div>
    </div>

    <!-- Section 2 -->
    <div class="parallax-section section2" :style="parallaxStyle">
      <PortfolioSection class="section2" />
    </div>

    <!-- MY RESUME link -->
    <button class="resume-button" @click="goToResume">
      MY RESUME
    </button>

    <!-- Text for Skills Section -->
    <div class="section-title">
      <h2>SKILL CARDS</h2>
    </div>

    <!-- Section 3 -->
    <div class="parallax-section section3">
      <SkillsSection class="section3" />
    </div>

    <!-- Section 4 -->
    <div class="parallax-section section4">
      <!-- Include the BlogList component here -->
      <BlogList class="section4"/>
    </div>

    <!-- Section 5 -->
    <div class="section5">
      <BottomSection />
    </div>

  </div>
</template>



<script>
import IntroductionSection from './IntroductionSection.vue';
import PortfolioSection from './PortfolioSection.vue'; 
import SkillsSection from './SkillsSection.vue';
import BlogList from './BlogList.vue';
import BottomSection from './BottomSection.vue';

export default {
  name: 'HomePage',
  components: {
    IntroductionSection,
    PortfolioSection,
    BlogList,
    SkillsSection,
    BottomSection,

},
  data() {
    return {
      scrollY: 0,
      fadeInTitle: false,
    };
  },
  computed: {
    parallaxStyle() {
      const translateY = -this.scrollY * 0.4 + 'px'; 
      return {
        transform: `translateY(${translateY})`,
      };
    },
  },
  mounted() {
    window.addEventListener('scroll', this.parallaxScroll);
    },
    methods: {
    goToResume() {
      this.$router.push('/ResumePage');
    },
    parallaxScroll() {
      this.scrollY = window.scrollY;
    },
  },
};
</script>

<style scoped>
.section1 {
  background-color: rgb(255, 255, 255);
  padding: 50px 0;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  transform-origin: top center;
}

.section2 {
  background-color: rgba(70, 70, 70, 1);
  padding: 40px 0 20px;
  position: relative;
  z-index: 2;
  transition: padding-bottom 2s ease, transform 0.3s ease, box-shadow 0.3s ease; 
}


.resume-button {
  text-align: right;
  left: 20px;
  bottom: 20px;
  cursor: pointer;
  font-size: 68px;
  font-weight: bold;
  color: #000000; /* Black color */
  background-color: transparent;
  border: none;
  outline: none;
  transition: color 0.3s; 
}

.resume-button:hover {
  animation: shake 0.5s ease infinite;
}

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(5px); }
}


@keyframes changeColor {
  0% { color: #ff5733; }
  25% { color: #33ff57; }
  50% { color: #5733ff; }
  75% { color: #ffff33; }
  100% { color: #ff5733; }
}

.section-title {
  opacity: 1;
  text-align: left;
  padding: 20px 0;
  font-size: 48px;
  font-weight: bold;
  color: #000000; 
  background-color: transparent;
  cursor: pointer;
  transition: color 0.3s, background-color 0.3s; 
}

.section-title:hover {
  animation: changeColor 5s linear infinite;
  color: #ff5733;
  background-color: #f8f8f8;
}


.section3 {
  background-image: url('https://media1.giphy.com/media/eHQ5BsgBIBIGI/giphy.gif?cid=ecf05e475dmnz25ps9lig0ig3b3srzp3l3gcktehjga3s0lu&ep=v1_gifs_search&rid=giphy.gif&ct=g'); /* Replace with your image URL */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  position: relative;
  z-index: 2;
}



.section4 {
  background-color: #f5f5f5;
  padding: 100px 0;
  text-align: center;
  z-index: 2;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3); 
}


.section5 {
  background-color: #333; 
  color: white;
  padding: 50px 0; 
  text-align: center;
}

.section5 h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

.section5 p {
  font-size: 18px;
  margin-bottom: 40px;
}

.parallax-section {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  position: relative;
  z-index: 0;
}

.section2.active {
  transform: scale(0.8);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

</style>
