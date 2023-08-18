<template>
	<view class="good-list">
		<uni-grid :column="2" :showBorder="false" border-color="#ff8198" :square="false" :highlight="false">
			<template v-for="item in goodList[currentType].list" :key="item.acm">
				<uni-grid-item>
					<good-item :itemData="item"></good-item>
				</uni-grid-item>
			</template>
		</uni-grid>
	</view>
</template>

<script setup>
	defineProps({
		goodList: {
			type: Object,
			default: () => ({})
		},
		currentType: {
			type: String,
			default: 'pop'
		}
	})
</script>

<style lang="scss">
	.good-list {
		margin-top: 20rpx;
	}
</style>