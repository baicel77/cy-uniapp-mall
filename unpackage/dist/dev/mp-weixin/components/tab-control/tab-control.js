"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "tab-control",
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  emits: ["titleClick"],
  setup(__props, { emit }) {
    const currentIndex = common_vendor.ref(0);
    const handleItemClick = (index) => {
      currentIndex.value = index;
      emit("titleClick", index);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.titles, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.n({
              active: currentIndex.value === index
            }),
            c: common_vendor.o(($event) => handleItemClick(index), item),
            d: item
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/BaiduNetdiskDownload/14.uni-app&taro/code/01-uni-app/cy-mall/components/tab-control/tab-control.vue"]]);
wx.createComponent(Component);
