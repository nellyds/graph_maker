<template>
  <D3SlopeChart
    v-if="chart_data.length > 0"
    :config="chart_config"
    :datum="chart_data"
  ></D3SlopeChart>
</template>
<script>
import { D3SlopeChart } from "vue-d3-charts";

export default {
  components: {
    D3SlopeChart,
  },
  data() {
    return {
      chart_config: {
        key: "name",
        color: {
          scheme: "schemeCategory10",
        },
        transition: {
          ease: "easeBounceOut",
          duration: 1000,
        },
      },
    };
  },
  computed: {
    chart_data: function () {
      return this.$store.state.dataSet;
    },
  },
};
</script>
<style scoped></style>
