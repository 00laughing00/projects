<template>
	<div class='main-container'>
		<div id='main-left'>
			<div class='main-left-img'>
				<img src="../../assets/img/2/menu_logo.png" alt="" />
			</div>
			<ul class='main-left-menu' @click='isLogin'>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
		<div id='main-right'>
			<router-view></router-view>
			<Foot/>
		</div>
	</div>
	
</template>

<script>
import Foot from './footer'

export default {
  name: 'main',
  data(){
  	return{
  		
  	}
  },
  components:{
  	Foot
  },
  methods:{
	//点击侧边栏列表弹出框
	isLogin(){
		$('.login-reg').fadeIn(500);
	}
  }
 
}
</script>
<style lang='less' scoped>
.main-container{
	position:relative;
	left:0;
}
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
#main-right{
	margin-left:0/100rem;
}

</style>