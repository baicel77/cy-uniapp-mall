"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "web-view",
  props: {
    link: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.link
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/BaiduNetdiskDownload/14.uni-app&taro/code/01-uni-app/cy-mall/pages/web-view/web-view.vue"]]);
wx.createPage(MiniProgramPage);
