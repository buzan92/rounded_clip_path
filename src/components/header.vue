<template>
  <header class="header">
    <div class="git-wrapper">
        <iframe
          src="https://ghbtns.com/github-btn.html?user=buzan92&repo=rounded_clip_path&type=star&count=true"
          frameborder="0"
          scrolling="0"
          width="160px"
          height="30px"
        >
        </iframe>
    </div>
    <div class="header__titles">
      <h2 class="title__name">clip_path_rounded</h2>
      <h1 class="title__description">generate css clip-patch with rounded corners</h1>
    </div>
  </header>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 48px;
}

.git-wrapper {
  width: 170px;
  height: 20px;
  margin: 0 auto;
}

.header__titles {
  text-align: center;
}

</style>