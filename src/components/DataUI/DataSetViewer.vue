<template>
  <div>
    <div v-if="dataSet.length > 5">
      <v-virtual-scroll
        :bench="benched"
        :items="dataSet"
        height="100"
        item-height="20"
      >
        <p
          @click="deleteData"
          v-for="(item, i) in dataSet"
          :key="i"
          :id="item.name"
        >
          {{ item.name }}
        </p>
      </v-virtual-scroll>
    </div>
    <div v-else>
      <div
        v-for="(item, i) in dataSet"
        :key="i"
        :id="item.key"
        @click="deleteData(item.key)"
        v-bind:data="item"
      >
        <DataPoint v-bind:data="item" />
      </div>
    </div>
  </div>
</template>
<script>
import DataPoint from "../DataUI/DataPoint";
export default {
  components: {
    DataPoint,
  },
  data() {
    return {
      benched: 0,
    };
  },
  computed: {
    dataSet: function () {
      return this.$store.state.dataSet;
    },
  },
  methods: {
    deleteData: function (data) {
      console.log(data);
      this.$store.dispatch({
        type: "deleteDataPoint",
        data: data,
      });
    },
  },
};
</script>
<style scoped></style>
