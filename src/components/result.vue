<template>
  <div>
    <textarea
      @change="auto_height"
      :value="result"
      :style="{ height: `${textarea_height}px` }"
      ref="textarea"
      class="textarea__clip-path"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'result',
  props: {
    clip_path: String,
  },
  data: () => ({
    textarea_height: 5,
  }),
  computed: {
    result: ({ clip_path }) => `clip-path: polygon(${clip_path});`,
  },
  mounted() {
    this.auto_height();
  },
  methods: {
    auto_height() {
      this.textarea_height = this.$refs.textarea.scrollHeight;
    },
  },
}
</script>

<style lang="scss" scoped>
.textarea__clip-path {
  width: 100%;

} 
</style>