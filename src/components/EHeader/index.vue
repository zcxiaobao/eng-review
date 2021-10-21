<template>
  <van-nav-bar
    title="英语复习"
    left-text="返回"
    right-text="按钮"
    :fixed="true"
    left-arrow
    z-index="100"
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>

<script>
export default {
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
        onClickRight() {
            console.log('按钮');
        },
    },
};
</script>

<style>
</style>