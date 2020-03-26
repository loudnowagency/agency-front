<template>
  <div class="image-grid section">
    <div class="image-grid__container container">
      <div class="grid">
        <div class="image-grid__box1 c-bg2"></div>
        <div class="image-grid__side">
          <div class="image-grid__box2 c-bg2"></div>
          <div class="image-grid__box3 c-bg2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageGrid',
}
</script>

<style lang="scss" scoped>
.image-grid__side {
  display: flex;
  flex-direction: column;
  width: col(4);
}

.image-grid__box1 {
  height: 800px;
  width: calc(#{col(8)} - 30px);
  margin-right: 30px;
}

.image-grid__box2 {
  height: 500px;
}

.image-grid__box3 {
  height: 270px;
  margin-top: 30px;
}

@media(max-width: 1024px) {
  .image-grid__container {
    padding: 0;
  }

  .image-grid__side {
    flex-direction: row;
    width: col(12);
    height: 200px;
    margin-top: 10px;
  }

  .image-grid__box1 {
    height: 400px;
    width: col(12);
    margin-right: 0;
  }

  .image-grid__box2 {
    height: 100%;
    width: calc(#{col(12)} - 5px);
    margin-right: 5px;
  }

  .image-grid__box3 {
    height: 100%;
    margin-top: 0;
    width: calc(#{col(12)} - 5px);
    margin-left: 5px;
  }
}
</style>
