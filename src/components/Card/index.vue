<template>
  <div class="card">
    <van-notice-bar
      scrollable
      color="#1989fa"
      background="#ecf9ff"
      left-icon="info-o"
      :text="text"
      v-show="textShow"
    />
    <van-grid :border="false" :column-num="2">
      <van-grid-item>
        <div class="desc-detail">
          <div class="title">单元数</div>
          <div class="text">{{unit}}</div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <div class="desc-detail">
          <div class="title">{{descTitle}}</div>
          <div class="text">{{nums}}</div>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: '目前默认单词为所学单元单词，如需修改请去配置页面',
        },
        textShow: {
            type: Boolean,
            default: true,
        },
        unit: {
            type: Number,
            default: 1,
        },
        descTitle: {
            type: String,
            default: '单词数',
        },
        nums: {
            type: Number,
            default: 0,
        },
    },
};
</script>

<style lang="less" scoped>
@import '~@/common/styles/variable';

.card {
    margin: 64px 45px;
    box-shadow: 0 0 1px #eee;
    .desc-detail {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .title {
            margin-bottom: 10px;
            font-size: @font-small-size;
        }
        .text {
            font-size: 16px;
            font-weight: bold;
            font-size: @font-middle-size;
        }
    }
}
</style>