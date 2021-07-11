import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    value: "hello",
    dataSet: [],
    mode: null,
  },
  mutations: {
    appendToDataSet(state, data) {
      state.dataSet = [...state.dataSet, data.argument];
    },
    changeMode(state, data) {
      state.mode = data.data;
    },
    deleteDataPoint(state, data) {
      console.log(data);
      let arr = state.dataSet;
      let newArr = arr.filter((d) => {
        return d.key !== data.data;
      });
      state.dataSet = newArr;
    },
  },
  actions: {
    appendToDataSet(context, data) {
      context.commit({
        type: "appendToDataSet",
        argument: data.data,
      });
    },
    deleteDataPoint(context, data) {
      console.log(data);
      context.commit({
        type: "deleteDataPoint",
        data: data.data,
      });
    },
    changeMode(context, data) {
      context.commit({
        type: "changeMode",
        data: data.data,
      });
    },
  },
  modules: {},
});
