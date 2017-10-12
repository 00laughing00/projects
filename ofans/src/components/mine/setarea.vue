<template>
	<div class="container">
		<div class="header">
			<router-link :to="{path:'/aboutme'}"><img src="../../assets/img/4/f-1.png" /></router-link>
			设置地区
		</div>
		<p class="title">当前城市</p>
		<div class="city">
			北京
		</div>
		<p class="title">热门城市</p>
		<div class="hotcity">
			<p>北京</p>
			<p>上海</p>
			<p>深圳</p>
			<p>香港</p>
		</div>
		<p class="title">全国城市</p>
		<div class="hotcity">
			<p>阳泉</p>
			<p>郑州</p>
			<p>成都</p>
			<p>武汉</p>
		</div>
		<p class </div>
</template>

<script>
	export default {
		name: "aboutme",
		data() {
			return {

			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		width: 100%;
		height: 100%;
		background: #f2eef9;
		.header {
			width: 100%;
			height: 95/100rem;
			background: #a54be8;
			text-align: center;
			vertical-align: middle;
			line-height: 95/100rem;
			font-size: 36/100rem;
			color: #fff;
		}
		.header a {
			position: absolute;
			left: 40/100rem;
		}
		.header img {
			width: 21/100rem;
			height: 37/100rem;
			float: left;
			margin-top: 45/100-37/100/2rem
		}
		.title {
			width: 100%;
			height: 40/100rem;
			line-height: 40/100rem;
			text-indent: 34/100rem;
			color: #a54be8;
			font-size: 24/100rem;
			background: #E5E0ED;
		}
		.city {
			width: 100%;
			height: 80/100rem;
			line-height: 80/100rem;
			text-indent: 34/100rem;
			color: #000;
			font-size: 30/100rem;
			background: #f2eef9;
		}
		.hotcity {
			width: 100%;
			height: 317/100rem;
			background: #f2eef9;
			p {
				width: 620/100rem;
				height: 78/100rem;
				line-height: 78/100rem;
				font-size: 30/100rem;
				color: #000;
				margin-left: 20/100rem;
				text-indent: 15/100rem;
				border-bottom: 1px solid #d7d2e0;
			}
			p:last-child {
				border-bottom: none;
			}
		}
	}
</style>