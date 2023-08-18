"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "home-recommend",
  props: {
    recommend: {
      type: Array,
      default: () => []
    }
  },
  emits: ["recommendClick"],
  setup(__props, { emit }) {
    const handleRecommendClick = (link) => {
      emit("recommendClick", link);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.recommend, (item, k0, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.title),
            c: common_vendor.o(($event) => handleRecommendClick(item.link), item.acm),
            d: item.acm
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/BaiduNetdiskDownload/14.uni-app&taro/code/01-uni-app/cy-mall/pages/home/c-cpns/home-recommend.vue"]]);
wx.createComponent(Component);
