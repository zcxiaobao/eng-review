<template>
  <div class="word-wrapper">
    <card :text="目前默认从词库中随机取50单词进行测验" unit="1" descTitle="单元数" :nums="words.length"></card>
    <div class="word-content">
      <div class="content-wrap">
        <van-field name="switch" label="全部单词" style="margin-bottom: 8px;">
          <template #input>
            <van-switch v-model="allWordsChecked" size="24" />
          </template>
        </van-field>
        <van-field name="switch" label="中文模式">
          <template #input>
            <van-switch v-model="chineseChecked" size="24" />
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
import Card from '@/components/Card';
import { mapGetters, mapActions } from 'vuex';
export default {
    data() {
        return {
            result: [],
            allWordsChecked: false,
            chineseChecked: false,
        };
    },
    components: {
        Card,
    },
    created() {
        this.allWordsChecked = this.isWholeWords;
        this.chineseChecked = this.isChinese;
    },
    methods: {
        ...mapActions(['setWholeWords', 'setIsChinese']),
        wordReciteShow() {
            this.$router.push({ path: '/word-recite/detail' });
        },
    },
    computed: {
        ...mapGetters(['words', 'unit', 'isWholeWords', 'isChinese']),
    },
    watch: {
        allWordsChecked(newVal) {
            this.setWholeWords(newVal);
        },
        chineseChecked(newVal) {
            this.setIsChinese(newVal);
        },
    },
};
</script>
<style lang="less" scoped>
@import '~@/common/styles/variable';
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