<template>
  <div>
    <D3SlopeChart
      v-if="chart_data.length > 3"
      :config="chart_config"
      :datum="chart_data"
    ></D3SlopeChart>
    <v-text-field v-model="begin" label="start value"></v-text-field>
    <v-text-field v-model="end" label="end value"></v-text-field>
    <v-text-field v-model="newTitle" label="name of value"></v-text-field>
    <v-btn text @click="dispatchArg">Send</v-btn>
  </div>
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
      newTitle: "",
      begin: 0,
      end: 0,
    };
  },
  methods: {
    dispatchArg: function () {
      this.$store.dispatch({
        type: "appendChart",
        argument: {
          start: parseInt(this.begin),
          end: parseInt(this.end),
          name: this.newTitle,
        },
      });
    },
  },
  computed: {
    chart_data: function () {
      return this.$store.state.chart_data;
    },
  },
};
</script>
<style scoped></style>
