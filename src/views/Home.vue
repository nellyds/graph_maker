<template>
  <div>
    <SlopeChart />
    <DataBuilder />
    <DataSetViewer />
  </div>
</template>

<script>
import SlopeChart from "../components/ChartTypes/SlopeChart";
import DataSetViewer from "../components/DataUI/DataSetViewer";
import DataBuilder from "../components/DataUI/DataBuilder";
export default {
  name: "Home",

  components: {
    SlopeChart,
    DataBuilder,
    DataSetViewer,
  },
};
</script>
