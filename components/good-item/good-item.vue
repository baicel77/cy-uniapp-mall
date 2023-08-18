<template>
	<view class="item">
		<!-- #ifndef H5 -->
		<image class="image" :src="itemData.show.img" mode="widthFix" :lazy-load="true"></image>
		<!-- #endif -->
		<!-- #ifdef H5 -->
		<img class="image" v-lazy="itemData.show.img">
		<!-- #endif -->
		<view class="infos">
			<view class="title">{{itemData.title}}</view>
			<view class="bottom">
				<view class="price">￥{{itemData.price}}</view>
				<view class="cfav">
					<image class="favor-icon" src="@/static/images/common/favor.png" mode=""></image>
					<text>{{itemData.cfav}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	defineProps({
		itemData: {
			type: Object,
			default: () => ({})
		}
	})
</script>

<style lang="scss">
	.item {
		padding: 0 10rpx;
		margin-bottom: 16rpx;

		.image {
			width: 100%;
			border-radius: 10rpx;
		}

		.infos {
			.title {
				font-size: 28rpx;
				color: #333;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.bottom {
				@include displayFlex;
				justify-content: center;
				color: #333;
				font-size: 26rpx;

				.price {
					margin-right: 6rpx;
					color: $primaryThemeColor;
				}

				.cfav {
					@include displayFlex;

					.favor-icon {
						width: 30rpx;
						height: 30rpx;
						margin-right: 8rpx;
					}
				}
			}
		}
	}
</style>