<template>
  <div class="my-app">
    <!-- chart -->
    <D3PieChart
      v-if="chart_data.length > 0"
      :config="chart_config"
      :datum="chart_data"
    ></D3PieChart>
  </div>
</template>
<script>
import { D3PieChart } from "vue-d3-charts";

export default {
  components: {
    D3PieChart,
  },
  data() {
    return {
      chart_config: {
        currentKey: false,
        orientation: "vertical",
        key: "key",
        value: "value",
        color: { scheme: "schemeTableau10", current: "red" },
        radius: { inner: 80 },
      },
      count: 1,
    };
  },
  computed: {
    chart_data: function () {
      return this.$store.state.dataSet;
    },
  },
  methods: {},
};
</script>
<style scoped></style>
