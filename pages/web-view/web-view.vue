<template>
	<view>
		<web-view :src="link"></web-view>
	</view>
</template>

<script setup>
	defineProps({
		link: {
			type: String,
			default: ''
		}
	})
</script>

<style lang="scss">

</style>