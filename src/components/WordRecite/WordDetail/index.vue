<template>
  <div class="word-detail content-wrapper">
    <van-grid :border="false" :column-num="1" class="panel">
      <van-grid-item>
        <div class="desc-detail">
          <div class="title">当前进度</div>
          <div class="text">{{(index + 1)}}/{{wordLen}}</div>
        </div>
      </van-grid-item>
    </van-grid>
    <van-progress :percentage="percentage" stroke-width="2" :show-pivot="false" />
    <div class="word-show">{{nowWord}}</div>
    <transition name="fade">
      <div class="case" v-show="promptIndex >= 1">
        <div class="case-title tag-title">英文解释</div>
        <div class="case-text">{{engToChn[nowWord].case}}</div>
      </div>
    </transition>
    <transition name="right">
      <div class="word-hide" v-show="promptIndex >= 2">
        <div class="tag-title">中文</div>
        <div class="explain-text">{{engToChn[nowWord].chn}}</div>
      </div>
    </transition>

    <div class="btns">
      <van-button type="primary" round size="large" @click="showExplainOrNext()">{{konwText}}</van-button>
      <van-button
        type="warning"
        round
        size="large"
        style="margin-top: 12px;"
        @click="showPrompt()"
        :disabled="promptIndex>=2"
      >提示一下</van-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { shuffle } from '@/common/js/util';
export default {
    data() {
        return {
            index: 0,
            promptIndex: 0,
        };
    },
    methods: {
        ...mapActions(['setErrorWords']),
        showExplainOrNext() {
            if (this.promptIndex === 0) {
                this.promptIndex = 2;
            } else {
                this.index++;
                this.promptIndex = 0;
                if (this.index === this.wordLen) {
                    this.$router.push('/word-recite/sum');
                }
            }
        },
        showPrompt() {
            this.promptIndex++;
            if (this.promptIndex == 1) {
                this.setErrorWords(this.nowWord);
                console.log(this.errorWords);
            }
        },
    },
    computed: {
        ...mapGetters(['wordReciteShow', 'engToChn', 'words', 'errorWords']),
        wordLen() {
            return this.words.length;
        },
        percentage() {
            return ((this.index + 1) / this.wordLen) * 100;
        },
        konwText() {
            if (this.promptIndex === 0) {
                return '我认识';
            } else {
                return '下一个';
            }
        },
        reciteWords() {
            return shuffle(this.words);
        },
        nowWord() {
            return this.reciteWords[this.index];
        },
    },
};
</script>

<style lang="less">
@import '~@/common/styles/variable';
.word-detail {
    .panel {
        .van-grid-item .van-grid-item__content {
            background-color: @color-detail !important;
        }
    }
    .desc-detail {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin: 8px auto;
        .title {
            margin-bottom: 10px;
            font-size: @font-small-size;
        }
        .text {
            font-size: @font-middle-size;
            font-weight: bold;
        }
    }
    .word-show {
        width: 100%;
        font-size: @font-big-size;
        font-weight: bold;
        text-align: center;
        margin: 50px auto;
        color: rgba(10, 108, 255, 0.75);
    }
    .word-hide {
        margin: 50px 30px 50px;
        // width: 100%;
        font-size: @font-small-size;
        .explain-text {
            color: rgba(3, 11, 24, 0.75);
            font-weight: bold;
            font-size: @font-middle-size;
            text-align: center;
        }
    }
    .case {
        margin: 0 30px 20px;

        // .case-title {
        //     font-size: @font-small-size;
        //     position: relative;
        //     // padding-left: 16px;
        //     // margin-bottom: 10px;
        //     &::before {
        //         content: '';
        //         width: 12px;
        //         height: 12px;
        //         background-color: #f00;
        //         position: absolute;
        //         left: 0;
        //         top: 50%;
        //         transform: translate3d(0, -50%, 0);
        //     }
        // }

        .case-text {
            font-size: @font-sm-small-size;
            line-height: 1.3;
            text-indent: 2em;
        }
    }
    .btns {
        // margin: 0 auto;
        position: absolute;
        bottom: 10px;
        width: 75%;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
        .van-button__content {
            font-size: @font-sm-small-size;
        }
    }
}
</style>