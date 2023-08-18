"use strict";
const common_vendor = require("../common/vendor.js");
const service_home = require("../service/home.js");
const utils_mapData = require("../utils/map-data.js");
const useHomeStore = common_vendor.defineStore("home", {
  state: () => ({
    banner: [],
    recommend: [],
    goodList: utils_mapData.initGoodListData()
  }),
  actions: {
    async changeBannerAction() {
      const res = await service_home.getHomeMultiData();
      this.banner = res.data.data.banner.list;
      this.recommend = res.data.data.recommend.list;
    },
    async changeGoodListAction(type, page) {
      const res = await service_home.getGoodListData(type, page);
      const sort = res.data.data.sort;
      this.goodList[sort].list.push(...res.data.data.list);
      this.goodList[sort].page = res.data.data.page;
    }
  }
});
exports.useHomeStore = useHomeStore;
