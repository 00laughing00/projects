<template>
	<div class="2">
		
		<header>
			<router-linke :to="{path:'/login'}">
				<img src="../../assets/img/4/f-1.png" alt="" class="toBack"/>
			</router-linke> 
			
		</header>
		<div class="logo">
				<img src="../../assets/img/4/login_logo.png" alt="" class="login_logo"/>
			
		</div>
		
		<form>
			<h3><span>忘记密码</span></h3><br />
			
			<label>
				<div class="loading">
					<img :src="srcloding" alt="" />
				</div>
				<img src="../../assets/img/4/login_phone_icon.png" alt="" />
				<input type="text"  class="userName" placeholder="请输入手机号"/>
			</label>
			<label>
				<img src="../../assets/img/4/login_phone_icon.png" alt="" />
				<input type="text"  class="yzcode" placeholder="请输入验证码"/>
				<a  href="#"class="btnYzcode">获取验证码</a>
			</label>
			<label>
				<img src="../../assets/img/4/login_pwd_icon.png" alt="" />
				<input type="password"  class='Newpass' placeholder="请设置新密码"/>
			</label>
			<label>
				<img src="../../assets/img/4/login_pwd_icon.png" alt="" />
				<input type="reNewPassword"  class='pass' placeholder="再次设置新密码"/>
			</label>
			<button @click="loginSubmit" class="btn">提交</button>
		</form>
	</div>
</template>

<script>

	export default{
		  name:'forgetpass',
		  data(){
		  		
		  	return{
		  		srcloding:'../../assets/img/5/loading_00000.png'
		  		
		  	}
		  },
		  methods:{
		  	loginSubmit(){
		  		this.loding();
		  		
		  		var UserName=document.querySelector('.userName').value;
		  		var passw=document.querySelector('.pass').value;
		  		
//		  		 this.$axios({
//            	method:'post',
//            	url:'http://127.0.0.1:3000/register',
//            	data:{
//            		username:UserName,
//            		password:passw,
//      
//            	  },
//	            },).then(res=>{
//	              	console.log(res)
//	              })
		  		
		  	},
		  	ResetPass(){
		  		var passw=document.querySelector('.pass');
		  		passw.value="";
		  	},
		  	loding(){
		  		console.log(this);
		  		var i=0;
//		  		var imgloding=document.querySelector('.loading').querySelector('img');
		  		var time=setInterval(function(){
		  		
		  			srcloding=require("../../assets/img/5/loading_000"+i+".png");
		  			if(i>=36){
		  				i=0;
		  			}else{
		  				i++;
		  			}
		  			console.log(this.srcloding)
		  			
		  		},100)
		  	}
		  	
		  	
		  }
	}
</script>

<style scope lang="less">
	
	.forgetpass{
		height:100%;
		background:url('../../assets/img/4/login_bg.png');
		background-size:100%;
	}
	header{
		padding-top:70/100rem;
	}
	header .toBack{
		width:30/100rem;
		display:inline-block;
		margin-left:40/100rem;
	}
	.logo{
		text-align:center;
		margin:50/100rem 0 100/100rem 0;
	}
	.logo img{
		width:350/100rem;
	}
	.forgetpass h3{
		text-align: center;
		font-size:30/100rem;
		color:#c0adcd;
	}
	.forgetpass h3  span{
		display:inline-block;
		border-bottom:3px solid #9c48d9;
	}
	form{
		text-align:center;
	}
	form .loading{
		position:absolute;
		width:240/100rem;
		height:200/100rem;
		left:30%;
		border-radius:20px;
		}
	form .loading img{
		width:100%;
		opacity: 0.8;
	}
	form label{
		display:block;
		position:relative;
		text-align:center;
		height:100/100rem;
	}
	form label>img{
		position:absolute;
		width:30/100rem;
		bottom:30/100rem;
	}
	form label>input{
		outline: none;
		background:transparent;
		border:0;
		border-bottom:1px solid #c0adcd;
		width:65%;
		height:80/100rem;
		text-align:center;
		color:#ebd5fb;
		font:20/100rem 60/100rem "微软雅黑";
	}
	form label .yzcode{
		width:40%;

	}
	form label .btnYzcode{
		display:inline-block;
		width:22%;
		margin-left:2%;
		border:0;
		height:20/100rem;
		outline: none;
		height:60/100rem;
		color:#F1F1F1;
		font-size:12/100rem;
		background:#753c9d;
		border:1px solid #9c48d9;
		line-height:50/100rem;
	}
	form label .reste{
		position:absolute;
		bottom:15/100rem;
		right:46/100rem;
		
	}
	form label .reste img{
		width:70/100rem;
	}
	form label .reste span{
		position:absolute;
		border:15/100rem solid transparent;
		border-right:25/100rem solid #783e9c;
		left:-22/100rem;
		bottom:20/100rem;
		rotate:-90deg;
	}
	form .btn{
		width:65%;
		margin:60/100rem;
		height:60/100rem;
		color:white;
		background:#a54be8;
		border:0;
		outline: none;;
	}
	form .repassword{
		display:block;
		color:#937f9a;
		font-size:24/100rem;
		
	}
	form .ToResgin{
		display:block;
		margin:46/100rem 0;
		font-size:24/100rem;
		color:#937f9c;
		
		
	}
	form .ToResgin a{
	color:#cedeb5;
	}
	
</style>