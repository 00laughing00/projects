<template>
	<div class="container">
		<div class="header">
			<router-link :to="{path:'/mine'}" tag="span"></router-link>
			评论
		</div>
		<div class="mycomment">
			<router-link  active-class='active' tag="div"  :to="{path:'/dynamiccomment/mycomment'}" class="mycomment-left"> 我评论的</router-link>
			<router-link  active-class='active' tag="div"   :to="{path:'/dynamiccomment/mycomment'}" class="mycomment-right"> 评论我的</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "comment",
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
		.header {
			width: 100%;
			height: 95/100rem;
			background: #a54be8;
			text-align: center;
			line-height: 95/100rem;
			position: relative;
			font-size: 36/100rem;
			color: #fff;
			span {
				display: inline-block;
				width: 21/100rem;
				height: 37/100rem;
				background: url(../../assets/img/4/f-1.png) no-repeat;
				background-size: 100% 100%;
				position: absolute;
				left: 30/100rem;
				top: 0;
				bottom: 0;
				margin: auto 0;
			}
		}
		.mycomment{
			width: 600/100rem;
			height: 60/100rem;
			background: white;
			margin-left: 20/100rem;
			margin-top: 28/100rem;
			border-radius: 10/100rem;
			margin-bottom: 30/100rem;
			.mycomment-left,.mycomment-right{
				width: 299/100rem;
				height: 60/100rem;
				color: #fff;
				font-size: 26/100rem;
				text-align: center;
				line-height: 60/100rem;
			}
			.mycomment-left{
				background: url(../../assets/img/37/1-2.png) no-repeat;
				background-size: 100% 100%;
				border-right: 1px solid #a54de8;
				float: left;
			}
			.mycomment-right{
				background: url(../../assets/img/37/2-1.png) no-repeat;
				background-size: 100% 100%;
				float: right;
				color: #a54de8;
			}
		}
		
	}
</style>