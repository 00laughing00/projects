<template>
	<div class="container">
		<div class="header">
			<router-link :to="{path:'/mine'}"><img src="../../assets/img/4/f-1.png" /></router-link>
			关于
		</div>
		<img src="../../assets/img/62/about_logo.png" alt="" class="logo"/>
		<button >检查更新</button>
		<p>版权所有</p>
	</div>
</template>

<script>
	export default {
		name: "aboutofan",
		data() {
			return {

			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.container {
		width: 100%;
		height: 100%;
		background: url(../../assets/img/4/login_bg.png) no-repeat;
		background-size: 100% 100%;
		.header {
			width: 100%;
			height: 95/100rem;
			background: transparent;
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
		.logo{
			width: 278/100rem;
			height: 341/100rem;
			position: absolute;
			top: 200/100rem;
			left: 0;
			right: 0;
			margin: 0 auto;
		}
		button{
			width: 440/100rem;
			height: 76/100rem;
			border: none;
			outline: none;
			color: #FFFFFF;
			font-size: 36/100rem;
			background: url(../../assets/img/62/aboutbtn_2.png) no-repeat;
			background-size: 100% 100%;
			position: absolute;
			left: 0 ;
			right: 0;
			margin:  0 auto;
			bottom: 200/100rem;
		}
		p{
			font-size: 24/100rem;
			color: #937f9c;
			position: absolute;
			width: 100%;
			bottom: 76/100rem;
			text-align: center;
		}
	}
</style>