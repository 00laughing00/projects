<template>
<div style='height:100%'>
	<div class='login-reg'>
		<div class='box'>
			<p>登录后更精彩哦！</p>
			<div class='btn'>
				<router-link tag='span' :to="{path:'/resgin'}">注册</router-link>
				<router-link tag='span' :to="{path:'/Login'}">登录</router-link>
			</div>
			<p>不用注册，用社交账号直接登录吧！</p>
			<div class='platform'>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	</div>
	<div class='trailers-container'>
		<div class='header'>
			<div class='header-menu' @click='leftNav'></div>
			<div class='header-title'>热榜</div>
			<router-link :to="{path:'/search'}" tag='div' class='header-search'></router-link>
		</div>
		<div class='slides'>
			<ul>
				<li class='slide-active'>
					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506076334646&di=bf0b7e0d32590047885fd8a10c167890&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2Fffc79cc3afa01d62de367d3f4800c65f26d95131.jpg" alt="" />
				</li>
				<li>
					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506076919343&di=629a4bba5a762ad6373c0d12c2691566&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fvideo%2F78%2F78cdf9ff55ccbcd1ee8728a339f71c2a.jpg" alt="" />
				</li>
				<li>
					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506076844575&di=2c8813d136a31a31af609b2e90576345&imgtype=0&src=http%3A%2F%2Fimage14.m1905.cn%2Fuploadfile%2F2015%2F0708%2F20150708093837136797.jpg" alt="" />
				</li>
				<li>
					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506076638184&di=fac8b18cc3898c4c03fde115aa8abe8e&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2Ff633ca09f69cb9675c5a23b4dea1f8145bbc70cf.jpg" alt="" />
				</li>
				<li>
					<img src="http://img0.utuku.china.com/640x0/ent/20170918/1681874e-3996-4300-92ee-ae24a1a83f7c.jpg" alt="" />
				</li>
			</ul>
			<div class='slides-bar'>
				<div class='bar-active'></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
		<div class='trailers-box'>
			<div class='box' v-for='(item,index) in trailers' @click='title(item.title)'>
				<img class='trailers-img' :src="item.img" alt="" />
				<div class='trailers-txt'>
					<p class='trailers-name'>{{item.title}}</p>
					<p class='trailers-desc'>{{item.desc}}</p>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import Top from './header'
export default {
    name: 'trailers',
    data(){
  		return{
  			trailers:[],
  			trailerTitle:''
  		}
    },
    components:{
    	Top
    },
    created(){
    	//请求剧集数据
		this.$axios.get('/trailers')
		.then(res=>{
			this.trailers = res.data;
		})
		.catch(error=>{
			console.log(error);
		})
		
    	$(function (){
    		//轮播图
    		var index = 0;
	  		var $slides = $('.slides ul li');
	  		var $bars = $('.slides .slides-bar div');
			setInterval(function(){
				$slides.eq(index).fadeOut(800);
				$bars.eq(index).removeClass('bar-active');
		        index++;
		        if(index>4){
		            index = 0;
		        }
		        $slides.eq(index).fadeIn(800);
		        $bars.eq(index).addClass('bar-active');
		        
			},3000);
			//侧边栏弹出框隐藏
			$('.login-reg').click(function (event){
				var screenWidth = window.screen.width;
				var width = screenWidth/320*130;
				var screenHeight = screen.availHeight;
				var rate = 568/screenHeight;
				if(event.clientY<(175/rate) || event.clientY>(390/rate)){
					$('.login-reg').fadeOut(500);
					$('#main-left').css('left',-width);
					$('#main-right').css('margin-left',0);
				}
			});
    	})
  		
	},
	updated(){
		//限制字数
		var desc = document.getElementsByClassName('trailers-desc');
		for(var i=0;i<desc.length;i++){
			var descLength = desc[[i]].innerText.length;
			if(descLength>11){
				desc[[i]].innerText = desc[[i]].innerText.substring(0,11)+'...';
			}
		}
	},
	methods: {
		//侧边栏
		leftNav() {
			var screenWidth = window.screen.width;
			var width = screenWidth/320*130;
			if(parseFloat($('#main-left').css('left'))==0){
				$('#main-left').css('left',-width);
				$('#main-right').css('margin-left',0);
				
			}else{
				$('#main-left').css('left',0);
				$('#main-right').css('margin-left',width);
	
			}
		},
		title(data){
			this.trailerTitle = data;
			this.$store.dispatch('getTitle',this.trailerTitle);
			this.$router.push({path:'/detail/comment'});
		}
		
	}	
}
</script>

<style lang='less' scoped>
.login-reg{
	display:none;
	color:#fff;
	width:100%;
	height:100%;
	position:fixed;
	top:0;
	left:0;
	z-index:100;
	background:url('../../assets/img/3/dialog_cover_bg.png') no-repeat;
	background-size:100%;
	.box{
		position:absolute;
		top:0;
		bottom:0;
		margin:auto 0;
		width:600/100rem;
		height:450/100rem;
		background:#fff;
		margin-left:20/100rem;
		border-radius:20/100rem;
		padding:34/100rem 40/100rem 46/100rem 40/100rem;
		box-sizing: border-box;
		color:#a9a2b4;
		font-size:30/100rem;
		text-align:center;
		p{
			margin-bottom:32/100rem;
		}
		p:first-child{
			color:#434343;
			margin-bottom:0;
		}
		.btn{
			height:88/100rem;
			margin:35/100rem 0 60/100rem;
			overflow: hidden;
			span{
				float:left;
				display:block;
				width:250/100rem;
				height:88/100rem;
				box-sizing: border-box;
				border:2/100rem solid #a54de8;
				border-radius:10/100rem;
				color:#a54de8;
				font-size:30/100rem;
				text-align:center;
				line-height:84/100rem;;
				
			}
			span:first-child{
				background:#a54de8;
				color:#fff;
				margin-right:20/100rem;
			}
		}
		.platform{
			width:480/100rem;
			margin-left:20/100rem;
			span{
				float:left;
				display:block;
				width:100/100rem;
				height:100/100rem;
				margin-right:90/100rem;
				background:url('../../assets/img/3/a朋友圈-1.png') no-repeat;
				background-size:100%;
			}
			span:first-child{
				background:url('../../assets/img/3/a微信-1.png') no-repeat;
				background-size:100%;
			}
			span:last-child{
				margin-right:0;
				background:url('../../assets/img/3/a微博-1.png') no-repeat;
				background-size:100%;
			}
		}
		
	}
}
.trailers-container{
	margin-left:0rem;
	position:relative;
	#main-left{
		position:fixed;
		top:0;
		left:-260/100rem;
		z-index:20;
		width:260/100rem;
		height:100%;
		padding-top:65/100rem;
		float:left;
		background:url('../../assets/img/2/menu_bg.png') no-repeat;
		background-size:100%;
		text-align:center;
		transition:all .5s;
		.main-left-img img{
			width:140/100rem;
			margin-bottom:90/100rem;
		}
		.main-left-menu li{
			width:120/100rem;
			height:50/100rem;
			margin-left:60/100rem;
			margin-bottom:74/100rem;
		}
		.main-left-menu li:nth-child(1){
			background:url('../../assets/img/2/menu_hot_normal.png') no-repeat;
			background-size:100%;
		}
		.main-left-menu li:nth-child(1):hover{
			background:url('../../assets/img/2/menu_hot_selected.png') no-repeat;
			background-size:100%;
		}
		.main-left-menu li:nth-child(2){
			background:url('../../assets/img/2/menu_netdrama_normal.png') no-repeat;
			background-size:100%;
		}
		.main-left-menu li:nth-child(2):hover{
			background:url('../../assets/img/2/menu_netdrama_selected.png') no-repeat;
			background-size:100%;
		}
		.main-left-menu li:nth-child(3){
			background:url('../../assets/img/2/menu_netprogram_normal.png') no-repeat;
			background-size:100%;
		}
		.main-left-menu li:nth-child(3):hover{
			background:url('../../assets/img/2/menu_netprogram_selected.png') no-repeat;
			background-size:100%;
		}
		.main-left-menu li:nth-child(4){
			background:url('../../assets/img/2/menu_movie_normal.png') no-repeat;
			background-size:100%;
		}
		.main-left-menu li:nth-child(4):hover{
			background:url('../../assets/img/2/menu_movie_selected.png') no-repeat;
			background-size:100%;
		}
		.main-left-menu li:nth-child(5){
			width:140/100rem;
			background:url('../../assets/img/2/menu_tv_normal.png') no-repeat;
			background-size:100%;
		}
		.main-left-menu li:nth-child(5):hover{
			background:url('../../assets/img/2/menu_tv_selected.png') no-repeat;
			background-size:100%;
		}
		.main-left-menu li:nth-child(6){
			width:140/100rem;
			background:url('../../assets/img/2/menu_show_normal.png') no-repeat;
			background-size:100%;
		}
		.main-left-menu li:nth-child(6):hover{
			background:url('../../assets/img/2/menu_show_selected.png') no-repeat;
			background-size:100%;
		}
		.main-left-menu li:nth-child(7){
			background:url('../../assets/img/2/menu_favorite_normal.png') no-repeat;
			background-size:100%;
		}
		.main-left-menu li:nth-child(7):hover{
			background:url('../../assets/img/2/menu_favorite_selected.png') no-repeat;
			background-size:100%;
		}
	}
	.header{
		width:100%;
		height:95/100rem;
		background-color:#a54de8;
		position:fixed;
		top:0;
		z-index:5;
		.header-menu{
			width:36/100rem;
			height:36/100rem;
			background:url('../../assets/img/1/main_menu_normal.png') no-repeat;
			background-size:100%;
			float:left;
			position:absolute;
			top:35/100rem;
			left:30/100rem;
		}
		.header-title{
			text-align:center;
			color:#fff;
			font-size:36/100rem;
			line-height:95/100rem;
		}
		.header-search{
			width:36/100rem;
			height:36/100rem;
			background:url('../../assets/img/1/main_search_normal.png') no-repeat;
			background-size:100%;
			float:right;
			position:absolute;
			top:30/100rem;
			right:30/100rem;
		}
	}
	padding-top:95/100rem;
	position:relative;
	overflow: hidden;
	.slides{
		width:100%;
		height:300/100rem;
		text-align:center;
		line-height:300/100rem;
		background-color:#ccc;
		position:relative;
		li{
			height:300/100rem;
			position:absolute;
			display:none;
			img{
				width:100%;
				height:300/100rem;
			}
		}
		li.slide-active{
			display:block;
		}
		.slides-bar{
			width:100%;
			height:5/100rem;
			position:absolute;
			bottom:0;
			z-index:2;
			div{
				float:left;
				width:20%;
				height:5/100rem;
				background:rgba(0,0,0,.5);
				
			}
			.bar-active{
				background:#a54be8;
			}
		}
	}
	.trailers-box{
		width:640/100rem;
		padding:20/100rem;
		padding-bottom:96/100rem;
		overflow:hidden;
		.box{
			width:290/100rem;
			float:left;
			.trailers-img{
				width:100%;
				height:180/100rem;
			}
		}
		.box:nth-child(2n+1){
			margin-right:20/100rem;
		}
		.trailers-txt{
			width:290/100rem;
			height:100/100rem;
			font-size:24/100rem;
			margin-top:12/100rem;
			.trailers-name{
				color:#313131;
				margin-bottom:8/100rem;
			}
			.trailers-desc{
				color:#959595;
			}
		}
	}
}

</style>