<template>
  <div>
    <span>Dimensions:</span>
    <br><br>
    width:
    <input v-model.number="field_width_model" type="number">px
    height:
    <input v-model.number="field_height_model" type="number">px
    <br><br>
    radius:
    <input v-model.number="corner_radius_model" type="number">px
    point's quantity:
    <input v-model.number="points_quantity_model" type="number">
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  props: {
    field_width : [String, Number],
    field_height: [String, Number],
    corner_radius: [String, Number],
    points_quantity: [String, Number],
  },
  computed: {
    field_width_model: {
      get: ({ field_width }) => field_width,
      set: function(val) { this.$emit('set_field_width', val) },
    },
    field_height_model: {
      get: ({ field_height }) => field_height,
      set: function(val) { this.$emit('set_field_height', val) },
    },
    corner_radius_model: {
      get: ({ corner_radius }) => corner_radius,
      set: function(val) { this.$emit('set_corner_radius', val) },
    },
    points_quantity_model: {
      get: ({ points_quantity }) => points_quantity,
      set: function(val) { this.$emit('set_points_quantity', val) },
    },
  },
};
</script>