<template>
  <transition name="page-slide" mode="out-in">
    <div class="AdminLogin">
      <div class="container">
        <div class="left-column">
        </div>
        <div class="right-column">
          <div class="login-box">
            <h2 class="login-heading">Admin Registration</h2>
            <div class="social-login">
              <p>Or register with:</p>
              <a href="#" class="social-link"><i class="fab fa-google"></i> </a>
              <a href="#" class="social-link"><i class="fab fa-linkedin"></i> </a>
              <a href="#" class="social-link"><i class="fab fa-facebook"></i> </a>
            </div>
            <form @submit.prevent="register">
              <div class="form-group">
                <label for="username" class="form-label">Username:</label>
                <input type="text" id="username" v-model="username" class="form-input" required />
              </div>
              <div class="form-group">
                <label for="password" class="form-label">Password:</label>
                <input type="password" id="password" v-model="password" class="form-input" required />
              </div>
              <div class="form-group">
                <label for="confirmPassword" class="form-label">Confirm Password:</label>
                <input type="password" id="confirmPassword" v-model="confirmPassword" class="form-input" required />
              </div>
              <button type="submit" class="login-button">Register</button>
            </form>
            <p v-if="error" class="error">{{ error }}</p>
            <p class="register-link">Already have an account? <router-link to="/admin/login">Login</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

  
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      error: '',
    };
  },
  methods: {
    register() {
      // Check if the username and password fields are not empty
      if (!this.username || !this.password || !this.confirmPassword) {
        this.error = 'All fields are required.';
        return;
      }

      // Check if the password and confirmPassword match
      if (this.password !== this.confirmPassword) {
        this.error = 'Passwords do not match.';
        return;
      }

      // Check if the username is available (not already registered)
      const adminCredentials = JSON.parse(localStorage.getItem('adminCredentials')) || [];
      const isUsernameTaken = adminCredentials.some((cred) => cred.username === this.username);

      if (isUsernameTaken) {
        this.error = 'Username is already taken.';
        return;
      }

      // Registration successful, store the credentials and admin token in localStorage
      const adminToken = 'your_admin_token_here'; // Generate a unique admin token
      adminCredentials.push({
        username: this.username,
        password: this.password,
        adminToken, // Store the admin token
      });
      localStorage.setItem('adminCredentials', JSON.stringify(adminCredentials));

      // Clear form fields and error message
      this.username = '';
      this.password = '';
      this.confirmPassword = '';
      this.error = '';

      // Redirect to the login page or perform any other desired action
      this.$router.push('/admin/login');
    },
  },
};

</script>
  
  
  
<style scoped>

.social-login {
  text-align: center;
}

.social-link {
  margin: 5px; 
  display: inline-block;
  font-size: 24px;
  color: #007bff;
  transition: transform 0.3s ease; 
  margin-bottom: 20px;
}

.social-link:hover {
  transform: translateY(-5px); 
}

.AdminLogin {
  display: flex;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  align-items: center;
  min-height: 100vh;
  position: relative;
  background-color: #fff;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://media3.giphy.com/media/TqcFcMBdskgkE/giphy.gif?cid=ecf05e47xi0jqlqkh4aqhskrjef1tzg161jc904inedbm4ds&ep=v1_gifs_search&rid=giphy.gif&ct=g');
  background-size: cover;
  filter: blur(4px);
  z-index: -1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 110%;
  height: 110%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
}

.container {
  display: flex;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.left-column {
  flex: 5; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://media2.giphy.com/media/yALcFbrKshfoY/giphy.gif?cid=ecf05e47marl89bxb4py72kx3cuevy1klxg4duqore0mmipp&ep=v1_gifs_search&rid=giphy.gif&ct=g');
  background-size: cover;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 220px; 

.login-icon {
  font-size: 48px;
  color: #fff;
}

.right-column {
  flex: 1;
  padding: 20px; 
  display: flex; 
  align-items: center;
  justify-content: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  margin-bottom: 20px;
}

.login-box {
  text-align: center;
  padding: 20px;
  max-width: 300px;
  margin: 0 auto; 
  display: flex;
  flex-direction: column;
  align-items: center; 
}
.login-heading {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-label {
  font-size: 18px;
  display: block;
  margin-bottom: 5px;
  color: #333;
}

.form-input {
  width: 100%;
  padding: 15px;
  font-size: 18px;
  border: 1px solid #333;
  border-radius: 25px;
}


.login-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 15px 30px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin-top: 10px;
  font-size: 16px;
}

.register-link {
  font-size: 16px;
  margin-top: 20px;
  color: #333;
}

.page-slide-enter-active, .page-slide-leave-active {
  transition: transform 0.5s ease;
}
.page-slide-enter, .page-slide-leave-to {
  transform: translateX(100%);
}
}
</style>
