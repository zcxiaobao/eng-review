<template>
  <div class="content-wrapper word-detail">
    <van-empty
      class="custom-image"
      image="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi-1.chuzhaobiao.com%2F2019%2F2%2F28%2F3b1acb9e-b3e6-4f6b-a338-0d653b3bc99d.jpg%3Fwidth%3D500%26height%3D500&refer=http%3A%2F%2Fi-1.chuzhaobiao.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637411132&t=1f769aef4cf3cae236f50be653e2914f"
      description="你已全部掌握"
      v-show="errorWords.length === 0"
    />
    <div class="errorWord" v-show="errorWords.length !== 0">
      <div class="error-title tag-title">未掌握单词</div>
      <van-list>
        <van-cell :title="word" v-for="word in errorWords" :key="word" title-class="warn">
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <template #right-icon>
            <span>{{engToChn[word].chn}}</span>
          </template>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {};
    },
    computed: {
        ...mapGetters(['errorWords', 'engToChn']),
    },
};
</script>

<style lang='less'>
@import '~@/common/styles/variable';

.word-detail {
    padding-top: 16px;
    .custom-image {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        .van-empty__image {
            width: 240px;
            height: 240px;
        }
    }
    .van-empty__description {
        color: #f00;
        font-size: @font-small-size;
    }
    .van-cell {
        background-color: @color-background;
        font-size: @font-small-size;
        padding: 16px 16px;
        border-bottom: 1px solid #eee;
    }

    .error-title {
        // padding: 16px;
    }
    .warn {
        color: #f00;
    }
}
</style>