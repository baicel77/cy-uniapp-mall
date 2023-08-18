import {
	defineStore
} from 'pinia'
import {
	getHomeMultiData,
	getGoodListData
} from '../service/home.js'
import {
	initGoodListData,
} from '@/utils/map-data.js'
const useHomeStore = defineStore('home', {
	state: () => ({
		banner: [],
		recommend: [],
		goodList: initGoodListData()
	}),
	actions: {
		async changeBannerAction() {
			const res = await getHomeMultiData()
			this.banner = res.data.data.banner.list
			this.recommend = res.data.data.recommend.list
		},
		async changeGoodListAction(type, page) {
			const res = await getGoodListData(type, page)
			const sort = res.data.data.sort
			this.goodList[sort].list.push(...res.data.data.list)
			this.goodList[sort].page = res.data.data.page
		}
	}
})

export default useHomeStore