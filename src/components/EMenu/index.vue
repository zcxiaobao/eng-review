<template>
  <div>
    <van-tabbar route v-model="active" @change="onChange">
      <van-tabbar-item replace to="/words" icon="apps-o">单词</van-tabbar-item>
      <van-tabbar-item replace to="/sentences" icon="comment-o">语句</van-tabbar-item>
      <van-tabbar-item replace to="/examples" icon="description">习题</van-tabbar-item>
      <van-tabbar-item replace to="/contact" icon="contact">联系我们</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
        };
    },
    methods: {
        onChange(index) {
            console.log(index);
        },
    },
};
</script>

<style>
</style>