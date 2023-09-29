<template>
  <Carousel :settings="carouselSettings">
    <Slide v-for="slide in slides" :key="slide.id">
      <div class="carousel__item" :style="{ backgroundImage: `url(${slide.imageUrl})` }">
        <div class="carousel__content">
          <h1>{{ slide.title }}</h1>
          <p>{{ slide.description }}</p>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'MyCarousel',
  components: {
    Carousel,
    Navigation,
    Slide,
    Pagination,
  },
  data() {
    return {
      carouselSettings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      slides: [
        {
          id: 1,
          title: 'Welcome to my Portfolio',
          description: 'Kyle Oris at your service',
          imageUrl: 'https://media1.giphy.com/media/8JoyEW8QfzA0o/giphy.gif?cid=ecf05e47devatv5n9kek9uu7hnakei83bt3502gasbqjypcn&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        },
        {
          id: 2,
          title: 'Here you can explore what I have done',
          description: 'You can also check out my projects',
          imageUrl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDZmbzA3ZTVmNTJtczR6ODBkMjl1MGhqdG9leWRnbXpoZTB3YXR1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/b3BCNhm3ad9gA/giphy.gif',
        },
        {
          id: 3,
          title: 'My Expertise is out here too',
          description: 'Somewhere down there',
          imageUrl: 'https://media2.giphy.com/media/V0Xds46wsXco73KJsY/giphy.gif?cid=ecf05e47sug4zd3jc80k8a5azlg5owtmdmxupelyfmk2wfjb&ep=v1_gifs_related&rid=giphy.gif&ct=g',
        },
        {
          id: 4,
          title: 'Contact me later',
          description: 'let me sleep',
          imageUrl: 'https://media3.giphy.com/media/iC8zFnQhMtFHJj6yMH/giphy.gif?cid=ecf05e47c0f3c24kuf2iml1ugtz758m4ngayi8s8z8n5zb8h&ep=v1_gifs_related&rid=giphy.gif&ct=g',
        },
        {
          id: 5,
          title: 'Thank You',
          description: 'All art from Studio Ghibli for colours. I dont plan to publish this anyway',
          imageUrl: 'https://media2.giphy.com/media/34PpKcQvQnhW8/giphy.gif?cid=ecf05e47aca9swcewwfpdfmackcbnb7tjlmw2j0og8v4n3p1&ep=v1_gifs_related&rid=giphy.gif&ct=g',
        },
      ],
    };
  },
});
</script>

<style>
.carousel__prev,
.carousel__next {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.7);
  border: 2px solid var(--vc-clr-primary);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.carousel__prev:hover,
.carousel__next:hover {
  background-color: var(--vc-clr-primary);
  color: white;
}

.carousel__item {
  min-height: 100vh; 
  width: 100%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
  white-space: nowrap;
}

.carousel__content {
  text-align: left; 
  color: white;
  background-color: rgba(0, 0, 0, 0.7); 
  padding: 20px; 
  border-radius: 0; 
  width: 100%; 
  position: absolute; 
  bottom: 1; 
}

.carousel__content h1 {
  font-size: 68px;
  margin-bottom: 20px; 
  margin-left: 10px;
  font-family: 'Your_Title_Font', sans-serif; 
}

.carousel__content p {
  font-size: 24px; 
  margin-left: 10px;
  font-family: 'Your_Description_Font', sans-serif; 
}
</style>
