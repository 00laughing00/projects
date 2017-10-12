<template>
	<div class='detail'>
		<div class='detail-header'>
			<router-link :to="{path:'/main/trailers'}" tag='span'></router-link>{{getTitle}}片花
		</div>
		<div class='video'>
			<div class='video-loading'>
				<img src="../../../assets/img/11/logo.png" alt="" /><br />
				<span class='text'>视频加载中...</span>
				<span class='full-screen'></span>
			</div>
			<video width="100%" height="100%" autoplay controls>
				<source src="../../../assets/01HTML5开发前准备.mp4" type="video/mp4"></source>
			</video>
		</div>
		<div class='type-tab'>
			<router-link tag='span' active-class='active' :to='{path:"/detail/comment"}'>神评论</router-link>
			<router-link tag='span' active-class='active' :to='{name:"introducte",params:{"current":getTitle}}'>内容简介</router-link>
			<router-link tag='span' active-class='active' :to='{path:"/detail/selection"}'>选集</router-link>
		</div>
		<router-view></router-view>
		
	</div>
</template>

<script>
export default{
	name:'detail',
	data(){
		return{
			currentTitle:''
		}
	},
	created(){
		$(document).scrollTop('0');
		
	},
	computed:{
		getTitle(){
			this.currentTitle = this.$store.getters.gettitle;
			return this.$store.getters.gettitle;
		}
	}
}
</script>

<style lang='less' scoped>
.detail{
	padding-top:95/100rem;
}
.detail-header{
	width:100%;
	height:95/100rem;
	background-color:#000;
	text-align:center;
	color:#fff;
	font-size:36/100rem;
	line-height:95/100rem;
	position:fixed;
	top:0/100rem;
	z-index:5;
	span{
		display:block;
		width:21/100rem;
		height:37/100rem;
		background: url('../../../assets/img/11/f-1.png') no-repeat;
		background-size:100%;
		position:absolute;
		bottom:30/100rem;
		left:40/100rem;	
	}
}
.video{
	width:100%;
	height:270/100rem;
	background: #000;
	position:relative;
	video{
		position: absolute;
		top:0;
	}
	.video-loading{
		width:100%;
		height:270/100rem;
		text-align:center;
		position:relative;
		img{
			width:230/100rem;
			margin-top:15/100rem;
		}
		.text{
			color:#fff;
			font-size:24/100rem;
			position:absolute;
			left:50%;
			margin-left:-70/100rem;
			bottom:68/100rem;
		}
		.full-screen{
			width:40/100rem;
			height:40/100rem;
			background: url('../../../assets/img/11/全屏-1.png') no-repeat;
			background-size:100%;
			position:absolute;
			bottom:20/100rem;
			right:30/100rem;
		}
	}
}
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

</style>