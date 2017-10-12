<template>
	<div class="container">
		<div class="header">
			 <router-link :to="{path:'/mine'}" ><img src="../../assets/img/4/f-1.png"/></router-link>
			设置
		</div>
		<div class="newsAlert-cont">
			<p>
				<span>新消息提醒</span>
				<img src="../../assets/img/56/set_switch_on.png" alt=""  class="img1"/>
			</p>
			<router-link  tag="p" :to="{path:'/changePwd'}">
				修改密码
				<img src="../../assets/img/36/dynamic_right_arrow_pressed.png" alt=""  class="img2"/>
			</router-link>
			<router-link  tag="p" :to="{path: '/Modifyphone'}">
				<img src="../../assets/img/36/dynamic_right_arrow_pressed.png" alt="" class="img2"/>
				修改绑定
			</router-link>
			
			
		</div>
		<p class="Logout">退出登录</p>
	</div>
</template>

<script>
	export default {
		name: 'set',
		data() {
			return {

			}
		}
	}
</script>

<style scoped lang="less">
	*{
		margin: 0;
		padding: 0;
	}
	.container{
		width: 100%;
		height: 100%;
		background: #f2eef9;
	}
	.header{
		width: 100%;
		height: 95/100rem;
		background: #a54be8;
		text-align: center;
		vertical-align: middle;
		line-height: 95/100rem;
		font-size: 36/100rem;
		color: #fff;
	}
	.header a{
		position: absolute;
		left: 40/100rem;
	}
	.header img{
		width: 21/100rem;
		height: 37/100rem;
		float: left;
		margin-top: 45/100-37/100/2rem

	}
	.newsAlert-cont p{
		width: 100%;
		height: 100/100rem;
		background: #fff;
		border-bottom: 1px solid #dfdae7;
		border-top: 1px solid #dfdae7;
		line-height: 100/100rem;
		text-indent: 30/100rem;
		color:#1b1b1b;
		font-size: 33/100rem;
	}
	.newsAlert-cont p:first-child{
		margin: 40/100rem 0;
	}
	.newsAlert-cont p:nth-child(2){
		border-bottom: none;
	}
	.newsAlert-cont .img1{
		width: 115/100rem;
		height: 70/100rem;
		float: right;
		margin-right: 20/100rem;
		margin-top:37/100/2rem;
	}
	.newsAlert-cont .img2{
		width: 18/100rem;
		height: 30/100rem;
		float: right;
		margin-right: 20/100rem;
		margin-top: 30/100rem;
	}
	.Logout{
		width: 100%;
		height: 100/100rem;
		background: #fff;
		position: absolute;
		bottom: 120/100rem;
		border-bottom: 1px solid #dfdae7;
		border-top: 1px solid #dfdae7;
		text-align: center;
		line-height: 100/100rem;
		font-size: 36/100rem;
		color: #e43c3c;
	}
</style>