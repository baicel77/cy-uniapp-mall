"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "home-banner",
  props: {
    banner: {
      type: Array,
      default: () => []
    }
  },
  emits: ["bannerClick"],
  setup(__props, { emit }) {
    const handleBannerClick = (link) => {
      emit("bannerClick", link);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.banner, (item, k0, i0) => {
          return {
            a: item.image,
            b: common_vendor.o(($event) => handleBannerClick(item.link), item.acm),
            c: item.acm
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/BaiduNetdiskDownload/14.uni-app&taro/code/01-uni-app/cy-mall/pages/home/c-cpns/home-banner.vue"]]);
wx.createComponent(Component);
