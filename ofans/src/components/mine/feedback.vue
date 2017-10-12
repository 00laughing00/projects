<template>
	<div class="container">
		<div class="header">
			<router-link :to="{path:'/mine'}"><img src="../../assets/img/4/f-1.png" /></router-link>
			意见反馈
			<span class="save">提交</span>
		</div>
		<textarea  autofocus="true" class="textarea">请输入您的宝贵意见...</textarea>
		<p>您的支持和建议将是我们前进的动力!</p>
	</div>
</template>

<script>
	export default{
		name:'feedback',
		data(){
			return{
				
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
	.textarea{
		width: 100%;
		resize:none;
		border: none;
		height: 80%;
		outline: none;
		margin-top: 30/100rem;
		text-indent: 40/100rem;
		font-size: 30/100rem;
		padding-top: 10/100rem;
		color: #B5B0BF;
	}
	.container p{
		width: 100%;
		text-align: center;
		color:#b5b0bf;
		font-size: 26/100rem;
		height: 30/100rem;
		margin-top: 30/100rem;
	}
</style>