<template>
  <div>
    <span>Dimensions:</span>
    <br><br>
    width:
    <input v-model.number="field_width_model" type="number">px
    height:
    <input v-model.number="field_height_model" type="number">px
    <br><br>
    background image url:
    <input v-model="field_image_model">
    <br><br>
    radius:
    <input v-model.number="corner_radius_model" type="number">px
    point's quantity:
    <input v-model.number="points_quantity_model" type="number">
    <br><br>
    <button
      @click="$emit('add_point')"
    >
    add point
    </button>
    <button
      :disabled="sides <= 3"
      @click="$emit('remove_point')"
    >
    remove point
    </button>
  </div>
</template>

<script>
export default {
  name : 'sidebar',
  props: {
    field_width    : Number,
    field_height   : Number,
    field_image    : String,
    corner_radius  : Number,
    points_quantity: Number,
    sides          : Number,
  },
  computed: {
    field_width_model: {
      get: ({ field_width }) => field_width,
      set(val) { this.$emit('set_field_width', val) },
    },
    field_height_model: {
      get: ({ field_height }) => field_height,
      set(val) { this.$emit('set_field_height', val) },
    },
    field_image_model: {
      get: ({ field_image }) => field_image,
      set(val) { this.$emit('set_field_image', val) },
    },
    points_quantity_model: {
      get: ({ points_quantity }) => points_quantity,
      set(val) { this.$emit('set_points_quantity', val) },
    },
    corner_radius_model: {
      get: ({ corner_radius }) => corner_radius,
      set(val) { this.$emit('set_corner_radius', val) },
    },
  },
};
</script>