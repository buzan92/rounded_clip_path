<template>
  <div class="test">
    Debug:
    i:
    <input
        v-model.number="i"
        :max="points.length - 1"
        min="0"
        type="number"
    >
    <div class="field">
      <div
        v-for="dot of dots"
        :key="dot.title"
        :style="dot_style(dot)"
        class="dot"
      >
        {{dot.title}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import libs         from '../libs';

export default {
  data: () => ({
    i: 0,
  }),
  computed: {
    ...mapState([
      'points',
      'corner_radius',
      'points_quantity',
    ]),
    dots: ({ points, i, corner_radius, points_quantity }) => {
      return libs.round_corner(points, i, corner_radius, points_quantity);
    },
  },
  methods: {
    dot_style({x, y}) {
      return {
        left: `${x}px`,
        top: `${y}px`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.test {
  font-size: 18px;
}

.field {
  position: relative;
  width: 300px;
  height: 300px;
  background-color: bisque;
}

.dot {
  width: 22px;
  height: 22px;
  text-align: center;
  position: absolute;
  border-radius: 50%;
  background-color: black;
  color: greenyellow;
  transform: translate(-50%, -50%);
  opacity: 0.4;
}
</style>