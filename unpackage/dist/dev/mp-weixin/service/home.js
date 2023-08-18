"use strict";
const service_index = require("./index.js");
function getHomeMultiData() {
  return service_index.cyRequest.get("/home/multidata");
}
function getGoodListData(type, page) {
  return service_index.cyRequest.get("/home/data", {
    type,
    page
  });
}
exports.getGoodListData = getGoodListData;
exports.getHomeMultiData = getHomeMultiData;
