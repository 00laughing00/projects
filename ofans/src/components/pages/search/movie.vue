<template>
	<div class='movie'>
		<div class='search-movie'>
			<div class='type-tab'>
				<router-link tag='span' active-class='active' :to='{path:"/search/movie/actor"}'>演员</router-link>
				<router-link tag='span' active-class='active' :to='{path:"/search/movie/title"}'>片名</router-link>
				<router-link tag='span' active-class='active' :to='{path:"/search/movie/role"}'>角色</router-link>
			</div>
			<div class='search-input'>
				<span class='input-cont'>
					<input type="text"/>
					<span class='input-txt'>请输入查询关键字</span>
				</span>
				<span class='btn'>搜索</span>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default{
	name:'movie',
	data(){
		return{
			
		}
	}
}
</script>

<style lang='less' scoped>
.movie{
	padding-top:180/100rem;
}
.search-movie{
	position:fixed;
	top:176/100rem;
	width:100%;
	height:170/100rem;
	background-color:#f9f7fc;
	border-bottom:1px solid #d7d2e0;
	margin-bottom:10/100rem;
	.type-tab{
		padding:18/100rem 20/100rem 20/100rem;
		overflow:hidden;
		span{
			float:left;
			display: block;
			height:54/100rem;
			border:2/100rem solid #a54de8;
			text-align: center;
			line-height:54/100rem;
			color:#a54de8;
			font-size:26/100rem;
		}
		span.active{
			background-color:#a54de8;
			color:#fff;
		}
		span:nth-child(1){
			width:196/100rem;
			border-right:none;
			border-radius:10/100rem 0 0 10/100rem;
		}
		span:nth-child(2){
			width:200/100rem;
		}
		span:nth-child(3){
			width:196/100rem;
			border-left:none;
			border-radius:0 10/100rem 10/100rem 0;
		}
	}
}
.search-input{
	/*position:fixed;*/
	
	padding-left:20/100rem;
	.input-cont{
		position:relative;
		input{
			display: inline-block;
			width:490/100rem;
			height:58/100rem;
			border:none;
			border-radius:10/100rem;
			text-indent: 50/100rem;
			outline: none;
		}
		.input-txt{
			position:absolute;
			top:0;
			left:50/100rem;
			color:#c8c5ce;
			font-size:26/100rem;
		}
	}
	.input-cont:before{
		content:'';
		display: block;
		width:25/100rem;
		height:25/100rem;
		background:url('../../../assets/img/9/search_main_input_et_icon.png') no-repeat;
		background-size:100%;
		position:absolute;
		top:-1/100rem;
		left:15/100rem;
	}
	.btn{
		color:#c08cee;
		font-size:30/100rem;
		margin-left:32/100rem;
	}
}
</style>