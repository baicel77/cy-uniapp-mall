"use strict";
const common_vendor = require("../../common/vendor.js");
const store_home = require("../../store/home.js");
require("../../service/home.js");
require("../../service/index.js");
require("../../utils/map-data.js");
if (!Array) {
  const _easycom_tab_control2 = common_vendor.resolveComponent("tab-control");
  const _easycom_back2 = common_vendor.resolveComponent("back");
  (_easycom_tab_control2 + _easycom_back2)();
}
const _easycom_tab_control = () => "../../components/tab-control/tab-control.js";
const _easycom_back = () => "../../components/back/back.js";
if (!Math) {
  (HomeBanner + HomeRecommend + HomePopular + _easycom_tab_control + HomeGoodList + _easycom_back)();
}
const HomeBanner = () => "./c-cpns/home-banner.js";
const HomeRecommend = () => "./c-cpns/home-recommend.js";
const HomePopular = () => "./c-cpns/home-popular.js";
const HomeGoodList = () => "./c-cpns/home-good-list.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const homeStore = store_home.useHomeStore();
    const {
      banner,
      recommend,
      goodList
    } = common_vendor.storeToRefs(homeStore);
    const titles = common_vendor.reactive(["流行", "新款", "精选"]);
    const currentType = common_vendor.ref("pop");
    const isShowBack = common_vendor.ref(false);
    common_vendor.onLoad(() => {
      homeStore.changeBannerAction();
      homeStore.changeGoodListAction("pop", goodList.value["pop"].page);
      homeStore.changeGoodListAction("new", goodList.value["new"].page);
      homeStore.changeGoodListAction("sell", goodList.value["sell"].page);
    });
    common_vendor.onReachBottom(() => {
      homeStore.changeGoodListAction(currentType.value, goodList.value[currentType.value].page + 1);
    });
    common_vendor.onPageScroll((value) => {
      value.scrollTop >= 500 ? isShowBack.value = true : isShowBack.value = false;
    });
    const handleBannerClick = (link) => {
      common_vendor.index.navigateTo({
        url: "/pages/web-view/web-view?link=" + link
      });
    };
    const handleTitleClick = (index) => {
      switch (index) {
        case 0:
          currentType.value = "pop";
          break;
        case 1:
          currentType.value = "new";
          break;
        case 2:
          currentType.value = "sell";
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(handleBannerClick),
        b: common_vendor.p({
          banner: common_vendor.unref(banner)
        }),
        c: common_vendor.o(handleBannerClick),
        d: common_vendor.p({
          recommend: common_vendor.unref(recommend)
        }),
        e: common_vendor.o(handleTitleClick),
        f: common_vendor.p({
          titles
        }),
        g: common_vendor.p({
          goodList: common_vendor.unref(goodList),
          currentType: currentType.value
        }),
        h: isShowBack.value
      }, isShowBack.value ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/BaiduNetdiskDownload/14.uni-app&taro/code/01-uni-app/cy-mall/pages/home/home.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
