<template>
	<view class="recommend">
		<template v-for="item in recommend" :key="item.acm">
			<view class="item" @click="handleRecommendClick(item.link)">
				<image class="image" :src="item.image" mode="widthFix"></image>
				<text class="text">{{item.title}}</text>
			</view>
		</template>
	</view>
</template>

<script setup>
	defineProps({
		recommend: {
			type: Array,
			default: () => []
		}
	})
	const emit = defineEmits(['recommendClick'])
	const handleRecommendClick = (link) => {
		emit('recommendClick', link)
	}
</script>

<style lang="scss">
	.recommend {
		display: flex;
		justify-content: center;
		margin-top: 20rpx;

		.item {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 0 20rpx;

			.image {
				width: 100%;
				margin-bottom: 10rpx;
			}

			.text {
				font-size: 28rpx;
				color: #000;
			}
		}
	}
</style>