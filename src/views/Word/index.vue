<template>
  <div class="card">
    <div class="word-desc">
      <van-notice-bar
        scrollable
        color="#1989fa"
        background="#ecf9ff"
        left-icon="info-o"
        text="目前默认从词库中随机取100单词进行测验"
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
            <div class="title">单词数</div>
            <div class="text">{{words.length}}</div>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="word-content">
      <div class="content-wrap">
        <van-field name="switch" label="全部单词" style="margin-bottom: 8px;">
          <template #input>
            <van-switch v-model="switchChecked" size="24" />
          </template>
        </van-field>
        <van-field name="switch" label="中文模式">
          <template #input>
            <van-switch v-model="switchChecked" size="24" />
          </template>
        </van-field>
      </div>
      <div class="btn">
        <van-button round block type="info" @click="wordReciteShow()">开始单词之旅</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            result: [],
            chineseChecked: false,
            switchChecked: false,
        };
    },
    methods: {
        checkAll() {
            this.$refs.checkboxGroup.toggleAll(true);
        },
        toggleAll() {
            this.$refs.checkboxGroup.toggleAll();
        },
        wordReciteShow() {
            this.$router.push({ path: '/word-recite/detail' });
        },
    },
    computed: {
        ...mapGetters(['words', 'unit']),
    },
};
</script>
<style lang="less" scoped>
@import '~@/common/styles/variable';

.word-desc {
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
.word-content {
    margin: 30px 45px;
    box-shadow: 0 0 1px #eee;
    height: 320px;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .btn {
        width: 75%;
        margin-top: 16px;
    }
}
</style>