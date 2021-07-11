export const  actions = {
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
  }