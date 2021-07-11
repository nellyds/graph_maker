<template>
  <div>
    <v-row>
      <v-col cols="12" sm="4">
        <DataBuilder />
        <DataSetViewer />
      </v-col>
      <v-col cols="12" sm="4">
        <p>{{ mode }}</p>
        <PieChart v-if="mode === 'pie'" />
        <BarChart v-if="mode === 'bar'" />
        <SlopeChart v-if="mode === 'slope'" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SlopeChart from "../components/ChartTypes/SlopeChart";
import DataSetViewer from "../components/DataUI/DataSetViewer";
import DataBuilder from "../components/DataUI/DataBuilder";
import PieChart from "../components/ChartTypes/PieChart";
import BarChart from "../components/ChartTypes/BarChart";
export default {
  name: "Home",

  components: {
    SlopeChart,
    PieChart,
    BarChart,
    DataBuilder,
    DataSetViewer,
  },
  data() {
    return {
      items: ["build", "graph"],
      tab: null,
    };
  },
  computed: {
    mode: function () {
      return this.$store.state.mode;
    },
  },
};
</script>
