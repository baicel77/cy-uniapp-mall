"use strict";
const types = ["pop", "new", "sell"];
function initGoodListData() {
  const goodList = {};
  types.forEach((item) => {
    goodList[item] = {
      list: [],
      page: 1
    };
  });
  return goodList;
}
exports.initGoodListData = initGoodListData;
