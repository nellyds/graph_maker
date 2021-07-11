export const mutations = {
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
  }