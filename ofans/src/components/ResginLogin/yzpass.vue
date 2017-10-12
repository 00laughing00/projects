<template>
	<div class="yzpass">
		
		<header>
			<router-link :to="{path:'/resgin'}">
				<img src="../../assets/img/4/f-1.png" alt="" class="toBack"/>
			</router-link> 
			
		</header>
		<div class="logo">
			<router-link :to="{path:'/resgin'}">
				<img src="../../assets/img/4/login_logo.png" alt="" class="login_logo"/>
			</router-link>	
			
		</div>
		
		<form>
			<h3><span>验证</span></h3><br />
			<p class="yzpass-p">本次诸恶需要短信验证，以发送验证码至</p>
			
			<label>
				
				<input type="text"  class="number" placeholder="12348942345"/>
			</label>
			<label class="yzpass-label">
				<img src="../../assets/img/4/login_phone_icon.png" alt="" />
				<input type="text"  placeholder="请输入验证码"/>
				<a  href="#"class="btnYzcode">获取验证码</a>
			</label>
			<button  class="btn">提交</button>
		</form>
	</div>
</template>

<script>

	export default{
		  name:'login',
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
	
	.yzpass{
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
	.yzpass h3 {
		text-align: center;
		font-size:30/100rem;
		color:#c0adcd;	
	}
	.yzpass-p{
		color:#ebd5fb;
		font-size:24/100rem;
		margin:25/100rem;
	}
	.yzpass-label{
		margin:0 100/100rem;
		height:80/100rem;
		display:block;
	}
	.yzpass-label img{
		position:absolute;
		left:0;
		bottom:20/100rem;
	}
	.yzpass-label input{
		width:63%;
		position:absolute;
		bottom:0;
		left:0;
		margin-right:30/100rem;
	}
	.yzpass h3  span{
		display:inline-block;
		border-bottom:3px solid #9c48d9;
	}
	.yzpass-label .btnYzcode{
		position:absolute;
		bottom:0;
		right:0;
		display:inline-block;
		width:30%;
		margin-left:2%;
		outline: none;
		height:60/100rem;
		color:#F1F1F1;
		font-size:12/100rem;
		background:#753c9d;
		border:1px solid #9c48d9;
		line-height:60/100rem;
		
	}
	.number{
		font-size:36/100rem;
		color:#fff;
		padding:14/100rem 0;
	}
	form{
		text-align:center;
	}
	
	form label{
		display:block;
		position:relative;
		text-align:center;
		height:120/100rem;
	}
	form label>img{
		position:absolute;
		width:30/100rem;
		bottom:50/100rem;
	}
	form label input{
		outline: none;
		background:transparent;
		border:0;
		border-bottom:1px solid #c0adcd;
		height:80/100rem;
		text-align:center;
		color:#ebd5fb;
		font:20/100rem 60/100rem "微软雅黑";
	}
	form label .yzcode{
		width:40%;

	}
	
	
	
	form .btn{
		display:block;
		margin:60/100rem 100/100rem;
		width:440/100rem;
		height:60/100rem;
		color:white;
		background:#a54be8;
		border:0;
		outline: none;;
	}
	
	
	
</style>