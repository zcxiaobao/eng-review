<template>
  <div class="sentence-wrapper">
    <card :textShow="false" :nums="sentenceNums" :descTitle="descTitle"></card>
    <p v-html="sentence"></p>
  </div>
</template>

<script>
import Card from '@/components/Card';
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            descTitle: '句子数',
            isShowAnswer: false,
            sentence:
                'Every company has <strong class="hide">a handful of</strong> staff in a given area of <strong>___</strong> that you can <strong>___</strong> to get the job done.',
        };
    },
    methods: {},
    computed: {
        ...mapGetters(['sentences']),
        sentenceNums() {
            return Object.keys(this.sentences).reduce(
                (sum, key) => sum + this.sentences[key].length,
                0
            );
        },
    },
    components: {
        Card,
    },
};
</script>

<style>
.hide {
    border-radius: 1px solid #000;
    display: none;
}
</style>