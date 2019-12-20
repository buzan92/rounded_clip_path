<template>
    <div
      @drag="drag_handler"
      :style="point_style"
      ref="point"
      class="point"
      draggable="true"
    >
    </div>
</template>

<script>
import lib from '../libs';

export default {
  name: 'point',
  props: {
    idx: Number,
    x: [Number, String],
    y: [Number, String],
  },
  data: () => ({
    parent_rect: {},
  }),
  computed: {
    point_style: ({ x, y, idx }) => ({
      backgroundColor: lib.color[idx],
      left: `${x}px`,
      top: `${y}px`,
    }),
  },
  mounted() {
    this.parent_rect = this.$refs.point.parentNode.getBoundingClientRect();
  },
  methods: {
    drag_handler(evt) {
      const { pageX: x, pageY: y } = evt;
      if (x && y) {
        this.$emit('set_point_coords', { x, y, idx: this.idx });
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.point {
  :hover {
    opacity: 1;
  }
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: greenyellow;
  transition: border-color .3s ease-in-out;
  position: absolute;
  transform: translate(-50%, -50%);
  opacity: 0.7;
  z-index: 1;
}
</style>