<template>
	<view class="tab-control">
		<template v-for="(item, index) in titles" :key="item">
			<view class="item" @click="handleItemClick(index)">
				<text :class="['title', { active: currentIndex === index }]">{{item}}</text>
			</view>
		</template>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";

	defineProps({
		titles: {
			type: Array,
			default: () => []
		}
	})

	const currentIndex = ref(0)
	const emit = defineEmits(['titleClick'])

	const handleItemClick = (index) => {
		currentIndex.value = index
		emit('titleClick', index)
	}
</script>

<style lang="scss">
	.tab-control {
		@include displayFlex;
		margin-top: 20rpx;

		.item {
			flex: 1;
			@include displayFlex(column);
			text-align: center;

			.title {
				padding: 0 16rpx 16rpx;
				border-bottom: 6rpx solid transparent;

				&.active {
					color: $primaryThemeColor;
					border-bottom: 6rpx solid $primaryThemeColor;
				}
			}
		}
	}
</style>