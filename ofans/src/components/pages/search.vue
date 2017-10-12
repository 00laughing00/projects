<template>
	<div class='search'>
		<div class='search-container'>
			<div class='search-header'><router-link :to="{path:'/main/trailers'}" tag='span'></router-link>搜索</div>
			<div class='search-tab'>
				<router-link active-class='active' :to='{path:"/search/movie"}' tag='div' class='s-movie' @click="toggleMovie">找片</router-link>
				<router-link active-class='active' :to='{path:"/search/people"}' tag='div' class='s-people' @click="togglePeople">找人</router-link>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>

export default{
	data(){
		return{
			show:''
		}
	},
	created(){
		
	},
	methods:{
		toggleMovie(){
			console.log(1111);
			this.show = 'movie';
		},
		togglePeople(){
			this.show = 'people';
		}
	}
}
</script>

<style lang='less' scoped>
.search{
	width:100%;
	padding-top:165/100rem;
}
.search-container{
	width:100%;
	position:fixed;
	top:0;
	z-index:5;
}
.search-header{
	width:100%;
	height:95/100rem;
	border-bottom:1/100rem solid #9841db;
	background-color:#a54de8;
	text-align:center;
	color:#fff;
	font-size:36/100rem;
	line-height:95/100rem;
	position:relative;
	span{
		display:block;
		width:21/100rem;
		height:37/100rem;
		background: url('../../assets/img/9/f-1.png') no-repeat;
		background-size:100%;
		position:absolute;
		bottom:30/100rem;
		left:40/100rem;	
	}
}
.search-tab{
	width:100%;
	height:64/100rem;
	background-color:#a54de8;
	padding-top:15/100rem;
	div{
		float:left;
		text-align:center;
		color:#8026c5;
		font-size:30/100rem;
		line-height:50/100rem;
		height:50/100rem;
		position:relative;
	}
	div:before{
		content:'';
		display: block;
		width:50/100rem;
		height:15/100rem;
		background:url('../../assets/img/9/search_main_up_arrow_normal.png') no-repeat ;
		background-size:100%;
		position:absolute;
		bottom:-15/100rem;
		left:50%;
		margin-left:-25/100rem;
	}
	.s-movie{
		width:50%;
		border-right:1px solid #9841db;
		box-sizing: border-box;
	}
	.s-people{
		width:50%;
		height:50/100rem;
	}
}
.search-container .search-tab div.active{
		color:#fff;
	}
.search-container .search-tab div.active:before{
		background:url('../../assets/img/9/search_main_up_arrow_selected.png') no-repeat ;
		background-size:100%;
	}
</style>