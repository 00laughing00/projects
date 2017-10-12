<template>
	<div class="container">
		<div class="header">
			<router-link :to="{path:'/aboutme'}"><img src="../../assets/img/4/f-1.png" /></router-link>
			个性签名
			<span class="save">保存</span>
		</div>
		<div class="inputcont">
			<input type="text"  value=""/>
			<span>30字</span>
		</div>

	</div>
</template>

<script>
	export default {
		name: "nick",
		data() {
			return {

			}
		}
	}
</script>

<style scoped="scoped" lang="less">
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
		.header .save {
			position: absolute;
			right: 20/100rem;
		}
		.inputcont {
			width: 100%;
			height: 150/100rem;
			margin-top: 40/100rem;
			background: #fff;
			border-bottom: 1px solid #dbd6e3;
			border-top: 1px solid #dbd6e3;
			position: relative;
			input{
				width: 100%;
				height: 100%;
				outline: none;
				border: none;
				text-indent: 30/100rem;
				color: #1b1b1b;
				font-size: 36/100rem;
			}
			span{
				font-size: 28/100rem;
				color: #B5B0BF;
				position: absolute;
				right: 30/100rem;
				bottom:20/100rem
			}
		}
	}
</style>