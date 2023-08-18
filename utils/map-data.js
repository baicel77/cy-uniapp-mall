export const types = ['pop', 'new', 'sell']
export function initGoodListData() {
	const goodList = {}
	types.forEach(item => {
		goodList[item] = {
			list: [],
			page: 1
		}
	})
	return goodList
}