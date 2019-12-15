<template>
  <div id="app">
    <Field v-bind="field_props">
      <Point
        @set_point_coords="SET_POINT_COORDS"
        v-for="(point, idx) of points"
        :key="idx"
        v-bind="{...point, idx}"
      />
    </Field >
    <Sidebar
      @set_field_width="SET_FIELD_WIDTH"
      @set_field_height="SET_FIELD_HEIGHT"
      @set_corner_radius="SET_CORNER_RADIUS"
      @set_points_quantity="SET_POINTS_QUANTITY"
      v-bind="sidebar_props"
    />
    <Test />
    <h3>{{clip_path}}</h3>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations,
} from 'vuex';
import Field from './components/field';
import Point from './components/point';
import Sidebar from './components/sidebar';
import Test from './components/test';

export default {
  name: 'app',
  components: {
    Field,
    Point,
    Sidebar,
    Test,
  },
  computed: {
    ...mapState([
      'field_width',
      'field_height',
      'field_image',
      'corner_radius',
      'points_quantity',
      'points',
    ]),
    ...mapGetters([
      'clip_path',
    ]),

    field_props: ({ field_width, field_height, field_image, clip_path }) => ({
      field_width,
      field_height,
      field_image,
      clip_path,
    }),
    sidebar_props: ({ field_props, corner_radius, points_quantity }) => ({
      ...field_props,
      corner_radius,
      points_quantity,
    }),
  },
  methods: {
    ...mapMutations([
      'SET_FIELD_WIDTH',
      'SET_FIELD_HEIGHT',
      'SET_CORNER_RADIUS',
      'SET_POINTS_QUANTITY',
      'SET_POINT_COORDS',
    ]),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/app.scss';
</style>
