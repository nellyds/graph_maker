<template>
  <div>
    <v-card class="dataPoint" shaped>
      <p>
        {{ data }}
      </p>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    data: Object,
  },
};
</script>
<style scoped>
.dataPoint {
  background-color: black;
  color: white;
}
</style>
