<template>
<div class="container">
		<div class="header">
			<router-link :to="{path:'/mine'}"><img src="../../assets/img/4/f-1.png" /></router-link>
			修改绑定
			<span class="save">修改</span>
		</div>
		<input type="text" name="" id="" value="请输入要绑定的手机号"  class="input1"/>
		<p class="authCode">
			<input type="" name="" id="" value="请输入验证码"  class="input2"/>
			<button>获取验证码</button>
		</p>
		<input type="text" name="" id="" value="请输入登录密码" class="input1" />	
	</div>
	</div>
</template>

<script>
	export default{
		name:"modifyphone",
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
	.container .input1{
		width: 90%;
		height: 100/100rem;
		margin: 20/100rem;
		border: none;
		border-radius: 15/100rem;
		outline: none;
		border: 1px solid #d1cbdc;
		color: #aaa3b5;
		text-indent: 20/100rem;
		font-size: 28/100rem;
	}
	.container .authCode{
		width: 90%;
		height: 100/100rem;
		margin: 20/100rem;
	}
	.container .authCode .input2{
		width: 55%;
		height: 100/100rem;
		border: none;
		border-radius: 15/100rem;
		outline: none;
		border: 1px solid #d1cbdc;
		font-size: 28/100rem;
		color: #aaa3b5;
		text-indent: 20/100rem;
	}
	.container .authCode button{
		width: 40%;
		float: right;
		border: none;
		height: 98/100rem;
		border-radius: 15/100rem;
		outline: none;
		border: 2px solid #a54be8;
		background: transparent;
		color: #a54be8;
		font-size: 28/100rem;
	}
</style>