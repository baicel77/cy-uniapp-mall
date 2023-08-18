"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "good-item",
  props: {
    itemData: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.itemData.show.img,
        b: common_vendor.t(__props.itemData.title),
        c: common_vendor.t(__props.itemData.price),
        d: common_assets._imports_0$2,
        e: common_vendor.t(__props.itemData.cfav)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/BaiduNetdiskDownload/14.uni-app&taro/code/01-uni-app/cy-mall/components/good-item/good-item.vue"]]);
wx.createComponent(Component);
