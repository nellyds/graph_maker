<template>
  <div>
    <div v-if="dataSet.length != null">
      <v-virtual-scroll :items="dataSet" height="200" item-height="50">
        <p
          @click="deleteData"
          v-for="(item, i) in dataSet"
          :key="i"
          :id="item.name"
        >
          {{ item }}
        </p>
      </v-virtual-scroll>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    dataSet: function () {
      return this.$store.state.dataSet;
    },
  },
  methods: {
    deleteData: function () {
      console.log(event.target);
      this.$store.dispatch({
        type: "deleteDataPoint",
        data: event.target.id,
      });
    },
  },
};
</script>
<style scoped></style>
