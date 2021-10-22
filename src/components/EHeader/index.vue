<template>
  <van-nav-bar
    title="英语复习"
    left-text="返回"
    :fixed="true"
    left-arrow
    z-index="100"
    @click-left="onClickLeft"
  >
    <template #right>
      <van-tag type="primary" size="large" style="margin-right: 6px;">单词表</van-tag>
      <van-tag type="success" size="large" @click="toHome">首页</van-tag>
    </template>
  </van-nav-bar>
</template>

<script>
export default {
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
        toHome() {
            this.$router.push({ path: '/' });
        },
    },
};
</script>

<style lang="less" scoped>
.link {
    margin-left: 10px;
}
</style>