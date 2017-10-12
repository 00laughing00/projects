<template>
	<div class='header'>
		<div class='header-menu' @click='leftNav'></div>
		<div class='header-title'>热榜</div>
		<router-link :to="{path:'/search'}" tag='div' class='header-search'></router-link>
	</div>
	
	
</template>

<script>
export default{
	name:'header',
data() {
		return {

		}
	},
	methods: {
		leftNav() {
			var leftNav = document.getElementById('main-left');
			var rightCont = document.getElementById('main-right');
			var left = window.getComputedStyle(leftNav, null);
			var right = window.getComputedStyle(rightCont, null);
			console.log(left['margin-left']);
			console.log(right['margin-left']);
		}
	}
}</script>

<style lang="less" scoped>
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
</style>