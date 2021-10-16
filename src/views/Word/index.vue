<template>
  <div class="card">
    <van-grid :border="false" :column-num="2">
      <van-grid-item>
        <div class="word">单词</div>
        <div>19000</div>
      </van-grid-item>
      <van-grid-item>
        <div class="word">单词</div>
        <div>19000</div>
      </van-grid-item>
    </van-grid>
    <van-grid :border="false" :column-num="1">
      <van-grid-item>
        <div class="word">单词</div>
        <div>19000</div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.card {
    padding: 10px;
}
</style>