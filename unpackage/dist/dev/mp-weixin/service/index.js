"use strict";
const common_vendor = require("../common/vendor.js");
const TIME_OUT = 1e4;
const BASE_URL = "http://123.207.32.32:7888/api/hy66";
class CYRequest {
  request(url, data, config) {
    return new Promise((resolve, reject) => {
      common_vendor.index.showLoading({
        title: "加载中..."
      });
      common_vendor.index.request({
        url: BASE_URL + url,
        timeout: TIME_OUT,
        data,
        success(res) {
          resolve(res);
          common_vendor.index.hideLoading();
        },
        fail(err) {
          reject(err);
          common_vendor.index.hideLoading();
        },
        ...config
      });
    });
  }
  get(url, data = {}, config = {}) {
    return this.request(url, data, {
      method: "GET",
      ...config
    });
  }
  post(url, data = {}, config = {}) {
    return this.request(url, data, {
      method: "POST",
      ...config
    });
  }
}
const cyRequest = new CYRequest();
exports.cyRequest = cyRequest;
