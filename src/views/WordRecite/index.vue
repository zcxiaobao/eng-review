<template>
  <div class="word-recite" v-show="wordReciteShow">
    <van-grid :border="false" :column-num="1" class="panel">
      <van-grid-item>
        <div class="desc-detail">
          <div class="title">当前进度</div>
          <div class="text">{{(index + 1)}}/{{wordLen}}</div>
        </div>
      </van-grid-item>
    </van-grid>
    <van-progress :percentage="percentage" stroke-width="2" :show-pivot="false" />
    <div class="word-show">{{words[index]}}</div>
    <div class="word-hide" v-show="promptIndex >= 1">{{engToChn[words[index]].chn}}</div>
    <div class="case" v-show="promptIndex >= 2">
      <div class="case-title">例句</div>
      <div class="case-text">{{engToChn[words[index]].case}}</div>
    </div>
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
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            index: 0,
            promptIndex: 0,
        };
    },
    methods: {
        showExplainOrNext() {
            if (this.promptIndex === 0) {
                this.promptIndex = 1;
            } else {
                this.index++;
                this.promptIndex = 0;
                if (this.index === this.wordLen) {
                    console.log('结束');
                }
            }
        },
        showPrompt() {
            this.promptIndex++;
        },
    },
    computed: {
        ...mapGetters(['wordReciteShow', 'engToChn', 'words']),
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
    },
};
</script>

<style lang="less">
@import '~@/common/styles/variable';
.word-recite {
    .panel {
        .van-grid-item .van-grid-item__content {
            background-color: @color-detail !important;
        }
    }
    position: relative;
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
    position: absolute;
    top: 46px;
    width: 100%;
    height: calc(100% - 46px);
    background-color: @color-detail;
    z-index: 2;
    .word-show {
        width: 100%;
        font-size: @font-big-size;
        font-weight: bold;
        text-align: center;
        margin: 50px auto;
        color: rgba(10, 108, 255, 0.75);
    }
    .word-hide {
        width: 100%;
        font-size: @font-middle-size;
        font-weight: bold;
        text-align: center;
        margin: 50px auto;
        color: rgba(3, 11, 24, 0.75);
    }
    .case {
        margin: 0 30px 20px;

        .case-title {
            font-size: @font-small-size;
            position: relative;
            padding-left: 16px;
            margin-bottom: 10px;
            &::before {
                content: '';
                width: 12px;
                height: 12px;
                background-color: #f00;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translate3d(0, -50%, 0);
            }
        }

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