const TIME_OUT = 10000
const BASE_URL = 'http://123.207.32.32:7888/api/hy66'

class CYRequest {
	request(url, data, config) {
		return new Promise((resolve, reject) => {
			uni.showLoading({
				title: '加载中...'
			})
			uni.request({
				url: BASE_URL + url,
				timeout: TIME_OUT,
				data,
				success(res) {
					resolve(res)
					uni.hideLoading()
				},
				fail(err) {
					reject(err)
					uni.hideLoading()
				},
				...config
			})
		})
	}
	get(url, data = {}, config = {}) {
		return this.request(url, data, {
			method: 'GET',
			...config
		})
	}
	post(url, data = {}, config = {}) {
		return this.request(url, data, {
			method: 'POST',
			...config
		})
	}
}

export default new CYRequest()