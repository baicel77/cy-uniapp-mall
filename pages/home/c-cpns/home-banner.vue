<template>
	<view class="banner">
		<swiper class="swiper" :indicator-dots="true" indicator-active-color="#ff8198" :autoplay="true" :interval="3000"
			:duration="1000">
			<template v-for="item in banner" :key="item.acm">
				<swiper-item class="swiper-item" @click="handleBannerClick(item.link)">
					<image class="image" :src="item.image" mode="widthFix"></image>
				</swiper-item>
			</template>
		</swiper>

	</view>
</template>

<script setup>
	defineProps({
		banner: {
			type: Array,
			default: () => []
		}
	})
	const emit = defineEmits(['bannerClick'])
	const handleBannerClick = (link) => {
		emit('bannerClick', link)
	}
</script>

<style lang="scss">
	.banner {
		.swiper {
			.swiper-item {
				.image {
					width: 100%;
				}
			}
		}
	}
</style>