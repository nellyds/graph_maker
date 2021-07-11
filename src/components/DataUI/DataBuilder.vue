<template>
  <div>
    <p>{{ selectedModel }}</p>
    <v-select :items="graphType" v-model="selectedModel"> </v-select>

    <v-form v-if="selectedModel === 'slope'" class="form">
      <v-text-field v-model="begin" label="start value"></v-text-field>
      <v-text-field v-model="end" label="end value"></v-text-field>
      <v-text-field v-model="key" label="name of value"></v-text-field>
    </v-form>
    <v-btn @click="appendData" line> Send</v-btn>
    <v-form v-if="selectedModel === 'pie'" class="form">
      <v-text-field v-model="key" label="key"></v-text-field>
      <v-text-field v-model="value" label="value"></v-text-field>
    </v-form>
    <v-form v-if="selectedModel === 'bar'" class="form">
      <v-text-field v-model="key" label="key" />
      <v-text-field v-model="value" label="value" />
    </v-form>
  </div>
</template>
<script>
import SlopeChartDataPoint from "../../models/SlopeChartDataPoint";
import PieChartDataPoint from "../../models/PieChartDataPoint";
export default {
  data() {
    return {
      begin: 0,
      end: 0,
      key: "",
      value: 0,
      selectedModel: null,
      graphType: ["pie", "slope", "bar"],
    };
  },
  mounted: function () {},
  methods: {
    appendData: function () {
      switch (this.selectedModel) {
        case "pie":
          this.$store.dispatch({
            type: "appendToDataSet",
            data: new PieChartDataPoint(this.key, this.value),
          });
          break;
        case "slope":
          this.$store.dispatch({
            type: "appendToDataSet",
            data: new SlopeChartDataPoint(this.key, this.begin, this.end),
          });
          break;
        // case "bar":
        //   this.$store.dispatch({
        //     type: "appendToDataSet",
        //     data: new BarChartDataPoint(this.key, this.value)
        //   })
      }
    },
  },
  watch: {
    selectedModel: function (val) {
      this.$store.dispatch({
        type: "changeMode",
        data: val,
      });
    },
  },
};
</script>
<style scoped>
.form {
  width: 200px;
}
</style>
