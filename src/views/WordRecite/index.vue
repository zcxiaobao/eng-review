<template>
  <div class="word-recite">
    <router-view></router-view>
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
</style>