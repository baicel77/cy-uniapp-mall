<template>
	<view class="content">
		<home-banner :banner="banner" @bannerClick="handleBannerClick"></home-banner>
		<home-recommend :recommend="recommend" @recommendClick="handleBannerClick"></home-recommend>
		<home-popular></home-popular>
		<tab-control :titles="titles" @titleClick="handleTitleClick"></tab-control>
		<home-good-list :goodList="goodList" :currentType="currentType"></home-good-list>
		<back v-if="isShowBack"></back>
	</view>
</template>

<script setup>
	import useHomeStore from '@/store/home.js'
	import {
		onLoad,
		onReachBottom,
		onPageScroll
	} from '@dcloudio/uni-app'
	import {
		reactive,
		ref
	} from "vue"
	import {
		storeToRefs
	} from 'pinia'

	import HomeBanner from './c-cpns/home-banner.vue'
	import HomeRecommend from './c-cpns/home-recommend.vue'
	import HomePopular from './c-cpns/home-popular.vue'
	import HomeGoodList from './c-cpns/home-good-list.vue'

	const homeStore = useHomeStore()

	const {
		banner,
		recommend,
		goodList
	} = storeToRefs(homeStore)

	const titles = reactive(['流行', '新款', '精选'])
	const currentType = ref('pop')
	const isShowBack = ref(false)

	onLoad(() => {
		homeStore.changeBannerAction()
		homeStore.changeGoodListAction('pop', goodList.value['pop'].page)
		homeStore.changeGoodListAction('new', goodList.value['new'].page)
		homeStore.changeGoodListAction('sell', goodList.value['sell'].page)
	})

	onReachBottom(() => {
		homeStore.changeGoodListAction(currentType.value, goodList.value[currentType.value].page + 1)
	})

	onPageScroll((value) => {
		value.scrollTop >= 500 ? isShowBack.value = true : isShowBack.value = false
	})

	const handleBannerClick = (link) => {
		uni.navigateTo({
			url: '/pages/web-view/web-view?link=' + link
		})
	}

	const handleTitleClick = (index) => {
		switch (index) {
			case 0:
				currentType.value = 'pop';
				break
			case 1:
				currentType.value = 'new';
				break
			case 2:
				currentType.value = 'sell';
		}
	}
</script>

<style lang="scss">
	.content {
		color: $primaryColor;
	}
</style>