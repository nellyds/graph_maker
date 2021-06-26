<template>
  <div>
    <p>sdf</p>
    <v-form class="form">
      <v-text-field v-model="begin" label="start value"></v-text-field>
      <v-text-field v-model="end" label="end value"></v-text-field>
      <v-text-field v-model="value" label="name of value"></v-text-field>
    </v-form>
    <v-btn @click="appendData" line> Send</v-btn>
  </div>
</template>
<script>
import SlopeChartDataPoint from "../../models/SlopeChartDataPoint";

export default {
  data() {
    return {
      begin: 0,
      end: 0,
      value: "",
    };
  },
  mounted: function () {
    let data = new SlopeChartDataPoint("sdf", 20, 30);
    console.log(data);
  },
  methods: {
    appendData: function () {
      let item = new SlopeChartDataPoint(
        this.value,
        parseInt(this.begin),
        parseInt(this.end)
      );
      this.$store.dispatch({
        type: "appendToDataSet",
        data: item,
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
