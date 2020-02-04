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
          @set_field_image="SET_FIELD_IMAGE"
          @set_corner_radius="SET_CORNER_RADIUS"
          @set_points_quantity="SET_POINTS_QUANTITY"
          @add_point="ADD_POINT"
          @remove_point="REMOVE_POINT"
          v-bind="sidebar_props"
        />
        <Result v-bind="result_props" />
        <Debug v-if="is_dev && false" />
        <!-- <button class="options-btn"></button> -->
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
import _debounce from 'lodash.debounce';
import Header from './components/header';
import Field from './components/field';
import Point from './components/point';
import Sidebar from './components/sidebar';
import Debug from './components/debug';
import Result from './components/result';

export default {
  name      : 'app',
  components: {
    Header,
    Field,
    Point,
    Sidebar,
    Debug,
    Result,
  },
  data: () => ({
    ref_field: {},
  }),
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
    sidebar_props: ({ field_props, corner_radius, points_quantity, points }) => ({
      ...field_props, // TODO: clip-path unnecessary
      corner_radius,
      points_quantity,
      sides: points.length,
    }),
    result_props: ({ clip_path }) => ({
      clip_path,
    }),
    is_dev: () => process.env.NODE_ENV === 'development',
  },
  mounted() {
    window.addEventListener('resize', this.update_field);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.update_field);
  },
  watch: {
    field_width() {
      this.update_field();
    },
    field_height() {
      this.update_field();
    },
  },
  methods: {
    ...mapMutations([
      'SET_FIELD_X',
      'SET_FIELD_Y',
      'SET_FIELD_WIDTH',
      'SET_FIELD_HEIGHT',
      'SET_FIELD_IMAGE',
      'SET_CORNER_RADIUS',
      'SET_POINTS_QUANTITY',
      'SET_POINT_COORDS',
      'ADD_POINT',
      'REMOVE_POINT',
    ]),
    field_mounted_handle(field) {
      this.ref_field = field;
      this.update_field();
    },
    update_field: _debounce(function() {
      const { x, y } = this.ref_field.getBoundingClientRect();
      if (x && y) {
        this.SET_FIELD_X(x);
        this.SET_FIELD_Y(y);
      }
    }, 100), 
  },
};
</script>

<style lang="scss" scoped>
@import './styles/app.scss';
</style>
