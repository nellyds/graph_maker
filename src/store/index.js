import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    value: "hello",
    chart_data: [
      { start: 2355, end: 5853, name: "Lor" },
      { start: 4260, end: 6510, name: "Ipsum" },
      { start: 5029, end: 5138, name: "Dolor" },
    ],
    dataSet: [],
  },
  mutations: {
    appendToDataSet(state, data) {
      console.log(data);
      state.dataSet = [...state.dataSet, data.argument];
    },
    deleteDataPoint(state, data) {
      let arr = state.dataSet;
      console.log(data);
      let newArr = arr.filter((d) => {
        return d.name !== data.data;
      });
      state.dataSet = newArr;
    },
  },
  actions: {
    appendToDataSet(context, data) {
      console.log(data);
      context.commit({
        type: "appendToDataSet",
        argument: data.data,
      });
    },
    deleteDataPoint(context, data) {
      context.commit({
        type: "deleteDataPoint",
        data: data.data,
      });
    },
  },
  modules: {},
});
