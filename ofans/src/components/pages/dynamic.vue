<template>
	<div class="dynamic-container">
		<div class="header">
			动态
		</div>
		<div class="comment-cont">
			<router-link :to="{path:'/dynamiccomment'}" tag="div" class="comment">
				<img src="../../assets/img/36/dynamic_comment_icon.png" class="img1" />
				<span>评论</span>
				<img src="../../assets/img/36/dynamic_right_arrow_pressed.png" class="img2" />
			</router-link>
			<router-link   :to="{path:'/letter'}" tag="div" class="comment comment2">
				<img src="../../assets/img/36/dynamic_msg_icon.png" class="img1" />
				<span>私信</span>
				<img src="../../assets/img/36/dynamic_right_arrow_pressed.png" class="img2" />
			</router-link>
			<div class="comment">
				<img src="../../assets/img/36/dynamic_attention_icon.png" class="img1" />
				<span>关注</span>
				<img src="../../assets/img/36/dynamic_right_arrow_pressed.png" class="img2" />
			</div>
		</div>
		<div class="play-cont">
			<div class="comment">
				<img src="../../assets/img/36/dynamic_history_icon.png" class="img1" />
				<span>播放历史</span>
				<img src="../../assets/img/36/dynamic_right_arrow_pressed.png" class="img2" />
			</div>
			<div class="comment">
				<img src="../../assets/img/36/dynamic_scan_icon.png" class="img1" />
				<span>扫一扫</span>
				<img src="../../assets/img/36/dynamic_right_arrow_pressed.png" class="img2" />
			</div>
		</div>
		<div class="system">
			<router-link tag="div" :to="{path:'/systeminfo'}" class="comment ">
				<img src="../../assets/img/36/dynamic_sys_icon.png" class="img1" />
				<span>系统消息</span>
				<img src="../../assets/img/36/dynamic_right_arrow_pressed.png" class="img2" />
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'dynamic',
		data() {
			return {

			}
		}
	}
</script>

<style lang="less" scoped>
	.dynamic-container {
		width: 100%;
		height: 100%;
		background: #f2eef9;
		.header {
			width: 100%;
			height: 95/100rem;
			background: #a54be8;
			font-size: 36/100rem;
			color: #fff;
			text-align: center;
			line-height: 95/100rem;
		}
		.comment {
			width: 590/100rem;
			height: 90/100rem;
			line-height: 90/100rem;
			margin-left: 30/100rem;
			position: relative;
			font-size: 36/100rem;
			color: #1b1b1b;
			.img1 {
				width: 45/100rem;
				height: 35/100rem;
				position: absolute;
				top: 0;
				bottom: 0;
				margin: auto 0;
				left: 16/100rem;
			}
			.img2 {
				width: 17/100rem;
				height: 31/100rem;
				position: absolute;
				top: 0;
				bottom: 0;
				margin: auto 0;
				right: 0;
			}
			span {
				margin-left: 94/100rem;
				font-size: 36/100rem;
			}
		}
		.comment-cont {
			width: 100%;
			height: 275/100rem;
			background: #fff;
			margin-top: 30/100rem;
			border-bottom: 1px solid #d7d2e0;
			border-top: 1px solid #d7d2e0;
			.comment2 {
				border-bottom: 1px solid #d7d2e0;
				border-top: 1px solid #d7d2e0;
			}
		}
		.play-cont {
			width: 100%;
			height: 180/100rem;
			background: #fff;
			margin-top: 40/100rem;
			border-bottom: 1px solid #d7d2e0;
			border-top: 1px solid #d7d2e0;
			.comment:first-child {
				border-bottom: 1px solid #d7d2e0;
			}
			.img1 {
				width: 43/100rem;
				height: 41/100rem;
			}
		}
		.system {
			width: 100%;
			border-bottom: 1px solid #d7d2e0;
			border-top: 1px solid #d7d2e0;
			margin-top: 40/100rem;
			background: #fff;
		}
	}
</style>