<template>
  <article class="post">
    <el-card 
      shadow="hover" 
      :body-style="{padding:0}"
    >
    <header slot="header" class="post-header">
      <h3>Post title</h3>

      <small>
        <i class="el-icon-time"></i>
        {{ new Date().toLocaleString()}}
        </small>
    </header>
    <div class="post-body">
      <img src="https://media.globalchampionsleague.com/cache/750x429/assets/berlin.jpg" alt="post-image" class="post-img">
    </div>
    <footer class="post-footer">
      <el-button round @click="openPost">Открыть</el-button>
      <span>
        <i class="el-icon-message"></i>
        15
      </span>
    </footer>
    </el-card>
  </article>
</template>
<script>
export default {
  methods: {
    openPost(){
      const id = 'test'
      this.$router.push(`/post/${id}`)
    }
  }
};
</script>
<style lang="scss" scoped>
.post {
  margin-bottom: 1.5rem;
}
.post-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.post-img{
  width: 100%;
  height: auto;

}
.post-footer{
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>