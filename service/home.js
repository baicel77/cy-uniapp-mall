import cyRequest from './index.js'

export function getHomeMultiData() {
	return cyRequest.get('/home/multidata')
}

export function getGoodListData(type, page) {
	return cyRequest.get('/home/data', {
		type,
		page
	})
}