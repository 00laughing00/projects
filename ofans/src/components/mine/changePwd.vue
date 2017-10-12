<template>
	<div class="container">
		<div class="header">
			<router-link :to="{path:'/mine'}"><img src="../../assets/img/4/f-1.png" /></router-link>
			修改密码
			<span class="save">保存</span>
		</div>
		<input type="text" name="" id="" value="请输入原密码" />
		<input type="text" name="" id="" value="请设置新密码" />
		<input type="text" name="" id="" value="请再次确认新密码" />	
	</div>
	</div>
</template>

<script>
	export default {
		name: "changePwd",
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
	.header .save{
		position: absolute;
		right: 20/100rem;
	}
	.container input{
		width: 90%;
		height: 100/100rem;
		margin: 20/100rem;
		border: none;
		border-radius: 15/100rem;
		outline: none;
		border: 1px solid #d1cbdc;
		color: #aaa3b5;
		text-indent: 20/100rem;
		font-size: 30/100rem;
	}
</style>