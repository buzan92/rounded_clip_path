<template>
  <div id="app" class="page">
    <Header />
    <main class="page__inner">
        <Field @field_mounted="field_mounted_handle($event)" v-bind="field_props">
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
        <Debug v-if="is_dev" />
        <h3>{{clip_path}}</h3>
        <button class="options-btn"></button>
    </main>
    <!-- <footer /> -->
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations,
} from 'vuex';
import Header from './components/header';
import Field from './components/field';
import Point from './components/point';
import Sidebar from './components/sidebar';
import Debug from './components/debug';

export default {
  name: 'app',
  components: {
    Header,
    Field,
    Point,
    Sidebar,
    Debug,
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
    is_dev: () => process.env.NODE_ENV === 'development',
  },
  methods: {
    ...mapMutations([
      'SET_FIELD_X',
      'SET_FIELD_Y',
      'SET_FIELD_WIDTH',
      'SET_FIELD_HEIGHT',
      'SET_CORNER_RADIUS',
      'SET_POINTS_QUANTITY',
      'SET_POINT_COORDS',
    ]),
    field_mounted_handle(field) {
      const { x, y } = field.getBoundingClientRect();
      this.SET_FIELD_X(x);
      this.SET_FIELD_Y(y);
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/app.scss';
</style>
