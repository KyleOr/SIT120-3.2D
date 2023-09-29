<template>
  <div id="app">
    <div class="toggle-button-container">
      <button @click="toggleNavigationBar" class="toggle-button">
        <i class="fa fa-bars"></i>
      </button>
    </div>
    <transition name="slide">
      <div v-show="isOpen" class="NavigationBar open">
        <div class="nav-list">
          <router-link to="/">Home</router-link>
          <router-link to="/ResumePage">Resume</router-link>
          <router-link to="/project/1">Grocerx</router-link>
          <router-link to="/project/2">Chatbot</router-link>
          <router-link to="/project/3">Textgame</router-link>
          <router-link to="/project/4">JRPG</router-link>
          <router-link to="/admin/login">Admin Login</router-link>
          <router-link to="/admin/register">Admin Register</router-link>
          <div v-if="loggedInUser" class="logged-in-as">
            <i class="fa fa-user"></i> Hi Admin! : {{ loggedInUser }}
            <button @click="logOut" class="log-out-button">Log Out</button>
          </div>
        </div>
      </div>
    </transition>
    <router-view /> 
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isOpen: false,
      loggedInUser: null,
      isAdminLoggedIn: false,
    };
  },
  mounted() {
    // Check if the user is logged in by retrieving data from localStorage
    const loggedInUsername = localStorage.getItem('loggedInUsername');
    const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn');

    if (loggedInUsername) {
      // If a username is found in localStorage, set it as the loggedInUser
      this.loggedInUser = loggedInUsername;
    }

    if (isAdminLoggedIn) {
      // Set isAdminLoggedIn to true if the flag is found in localStorage
      this.isAdminLoggedIn = true;
    }
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleNavigationBar() {
      this.isOpen = !this.isOpen;
    },
    logOut() {
      // Clear the logged-in user data from localStorage
      localStorage.removeItem('loggedInUsername');
      localStorage.removeItem('isAdminLoggedIn');
      // Set loggedInUser and isAdminLoggedIn to null
      this.loggedInUser = null;
      this.isAdminLoggedIn = false;
    },
  }
};
</script>



<style scoped>
.toggle-button-container {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 6; 
}

.NavigationBar {
  width: 250px; 
  height: 100%;
  position: fixed;
  top: 0;
  right: -250px; 
  background-color: #333;
  transition: right 0.3s ease-in-out;
  z-index: 5; 
}

.logged-in-as {
  padding: 10px;
  color: white;
  text-align: center;
  background-color: #555; 
  display: flex;
  align-items: center;
  justify-content: center;
}

.logged-in-as i {
  margin-right: 5px; 
}

.log-out-button {
  background-color: #ff5733;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-left: 10px; 
  cursor: pointer;
}

.log-out-button:hover {
  background-color: #e64a2e;
}

.nav-list {
  padding-top: 50px;
}

.NavigationBar.open {
  right: 0; 
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-enter, .slide-leave-to {
  transform: translateX(250px);
}

.toggle-button {
  background-color: #333;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
}

.fa-bars {
  font-size: 24px;
}

.NavigationBar a {
  display: block;
  padding: 15px;
  color: white;
  text-align: center;
  text-decoration: none;
}

.NavigationBar a:hover {
  background-color: #555;
}
</style>