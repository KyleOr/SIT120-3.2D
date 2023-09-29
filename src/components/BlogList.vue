<template>
  <div class="BlogList">
    <h1>My Blog</h1>

    <!-- Display list of blog posts -->
    <ul>
      <li v-for="(post, index) in blogPosts" :key="index">
        <div class="blog-post-box" @click="isAdminLoggedIn ? openEditDialog(index) : null">
          <h3 class="blog-post-title">{{ post.title }}</h3>
          <p class="blog-post-description">{{ post.body }}</p>
        </div>
      </li>
    </ul>

    <!-- Only show create button and input fields if admin is logged in -->
    <div v-if="isAdminLoggedIn">
      <h2>Create New Blog Post</h2>
      <!-- Input fields for creating new blog post -->
      <form @submit.prevent="createBlogPost">
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="newBlogPost.title" required class="styled-input" />
        </div>
        <div class="form-group">
          <label for="body">Body:</label>
          <textarea id="body" v-model="newBlogPost.body" required class="styled-textarea"></textarea>
        </div>
        <button type="submit" class="styled-button">Create</button>
      </form>
    </div>

    <!-- Edit Blog Post Dialog -->
      <div v-if="dialogVisible" class="dialog-overlay">
      <div class="dialog">
        <h2>{{ editedBlogPostIndex !== null ? 'Edit Blog Post' : 'Add Blog Post' }}</h2>
        <form @submit.prevent="saveBlogPost">
          <div class="form-group">
            <label for="editTitle">Title:</label>
            <input type="text" id="editTitle" v-model="editedTitle" required />
          </div>
          <div class="form-group">
            <label for="editBody">Body:</label>
            <textarea id="editBody" v-model="editedBody" required></textarea>
          </div>
          <button type="submit">{{ editedBlogPostIndex !== null ? 'Save' : 'Add' }}</button>
          <button type="button" @click="closeEditDialog">Cancel</button>
          <button v-if="editedBlogPostIndex !== null" @click="deleteBlogPost(editedBlogPostIndex)">Delete</button>
          <!-- Move the Create button inside the dialog -->
          <button type="submit" @click="createBlogPost" class="styled-create-button">Create</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogList',
  data() {
    return {
      blogPosts: [],
      isAdminLoggedIn: false, // Check if admin is logged in
      newBlogPost: {
        title: '',
        body: '',
      },
      dialogVisible: false,
      editedTitle: '',
      editedBody: '',
      editedBlogPostIndex: null,
    };
  },
  // Check admin login status and fetch blog posts in the mounted hook
      mounted() {
      const loggedInUsername = localStorage.getItem('loggedInUsername');

      if (loggedInUsername) {
        // If a logged-in username is found in local storage, set isAdminLoggedIn to true
        this.isAdminLoggedIn = true;
      }

    this.blogPosts = [
      { id: 1, title: 'Learning Vue3', body: 'Starting this unit and learning the basics of vue3 was rough hahaha.' },
      { id: 2, title: 'Project Proposal', body: 'My project proposal was a social media application tailored towards cooking, I soon learn this was a humbling experience' },
      { id: 3, title: 'The final stretch', body: 'Immediately after finishing that previous task, I was left with three days to create this portfolio hahaha, (my eyes hurt).' },
    ];
  },
  methods: {
    openEditDialog(index) {
      if (index !== undefined) {
        this.editedTitle = this.blogPosts[index].title;
        this.editedBody = this.blogPosts[index].body;
        this.editedBlogPostIndex = index;
      } else {
        this.editedTitle = '';
        this.editedBody = '';
        this.editedBlogPostIndex = null;
      }
      this.dialogVisible = true;
    },
    saveBlogPost() {
      if (this.editedBlogPostIndex !== null) {
        this.blogPosts[this.editedBlogPostIndex].title = this.editedTitle;
        this.blogPosts[this.editedBlogPostIndex].body = this.editedBody;
      } else {
        const newPost = {
          id: this.blogPosts.length + 1,
          title: this.editedTitle,
          body: this.editedBody,
        };
        this.blogPosts.push(newPost);
      }

      this.closeEditDialog();
    },
    deleteBlogPost(index) {
      this.blogPosts.splice(index, 1);
      if (this.editedBlogPostIndex === index) {
        this.closeEditDialog();
      }
    },
    closeEditDialog() {
      this.dialogVisible = false;
      this.editedTitle = '';
      this.editedBody = '';
      this.editedBlogPostIndex = null;
    },
    createBlogPost() {
      if (!this.newBlogPost.title || !this.newBlogPost.body) {
        this.error = 'Both title and body are required.';
        return;
      }
      const newPost = {
        title: this.newBlogPost.title,
        body: this.newBlogPost.body,
      };

      this.blogPosts.push(newPost);

      this.newBlogPost.title = '';
      this.newBlogPost.body = '';
      this.error = '';

      this.closeEditDialog();
    },
  },
};

</script>

  
  <style scoped>
  .blog-post-box {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
    transition: transform 0.2s;
    text-decoration: none;
    color: #333;
    padding: 10px;
    margin: 10px;
  }
  
  .blog-post-box:hover {
    transform: translateY(-5px);
  }
  
  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .dialog {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
  }
  
  .dialog form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .dialog button {
    margin-top: 10px;
  }

  .styled-input,
.styled-textarea,
.styled-button {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%;
}

.styled-input:focus,
.styled-textarea:focus {
  outline: none;
  border-color: #333;
  box-shadow: 0 0 5px rgba(51, 51, 51, 0.5);
}

.styled-button {
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.styled-button:hover {
  background-color: #555;
}
</style>
  