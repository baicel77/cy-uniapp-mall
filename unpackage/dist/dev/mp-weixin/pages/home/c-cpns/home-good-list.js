"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_good_item2 = common_vendor.resolveComponent("good-item");
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  (_easycom_good_item2 + _easycom_uni_grid_item2 + _easycom_uni_grid2)();
}
const _easycom_good_item = () => "../../../components/good-item/good-item.js";
const _easycom_uni_grid_item = () => "../../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
if (!Math) {
  (_easycom_good_item + _easycom_uni_grid_item + _easycom_uni_grid)();
}
const _sfc_main = {
  __name: "home-good-list",
  props: {
    goodList: {
      type: Object,
      default: () => ({})
    },
    currentType: {
      type: String,
      default: "pop"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.goodList[__props.currentType].list, (item, k0, i0) => {
          return {
            a: "65cb9fdc-2-" + i0 + "," + ("65cb9fdc-1-" + i0),
            b: common_vendor.p({
              itemData: item
            }),
            c: "65cb9fdc-1-" + i0 + ",65cb9fdc-0",
            d: item.acm
          };
        }),
        b: common_vendor.p({
          column: 2,
          showBorder: false,
          ["border-color"]: "#ff8198",
          square: false,
          highlight: false
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/BaiduNetdiskDownload/14.uni-app&taro/code/01-uni-app/cy-mall/pages/home/c-cpns/home-good-list.vue"]]);
wx.createComponent(Component);
