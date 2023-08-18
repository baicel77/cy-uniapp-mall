"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "back",
  setup(__props) {
    const handleBackTop = () => {
      common_vendor.index.pageScrollTo({
        scrollTop: 0,
        duration: 150
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.o(handleBackTop)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/BaiduNetdiskDownload/14.uni-app&taro/code/01-uni-app/cy-mall/components/back/back.vue"]]);
wx.createComponent(Component);
