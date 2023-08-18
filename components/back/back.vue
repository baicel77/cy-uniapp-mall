<template>
	<view @click="handleBackTop">
		<image class="top" src="@/static/images/common/top.png" mode="widthFix"></image>
	</view>
</template>

<script setup>
	const handleBackTop = () => {
		uni.pageScrollTo({
			scrollTop: 0,
			duration: 150
		})
	}
</script>

<style lang="scss">
	.top {
		position: fixed;
		width: 100rpx;
		bottom: 120rpx;
		right: 50rpx;
	}
</style>