
<template>
  <div :style="field_style" ref="field" class="field">
    <slot></slot>
    <div :style="clip_path_style" class="clip_path"></div>
  </div>
</template>

<script>
export default {
  name: 'field',
  props: {
    field_width : [Number, String],
    field_height: [Number, String],
    field_image: String,
    clip_path: String,
  },
  computed: {
    field_style: ({ field_width, field_height }) => ({
      width: `${field_width}px`,
      height: `${field_height}px`,
    }),
    clip_path_style: ({ field_image, clip_path }) => ({
      backgroundImage: `url(${field_image})`,
      clipPath: `polygon(${clip_path})`,
    }),
  },
  // mounted() {
  //   console.log('mounted field', this.$refs.field);
  //   this.$emit('field_mounted');
  // },
}
</script>

<style lang="scss" scoped>
.field {
  // position: relative;
  // background-color: #808080;
  border: 1px solid #333333;
}

.clip_path {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>