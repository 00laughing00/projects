<template>
	<!--请求评论数据-->
	<div class="GoodComments">
		<div class="title">
			<div class="title-left">{{titlename}}</div>
			<div class="title-right">
				<div></div>
			</div>

			

		</div>
        <div class="GoodComments-cont">
				<div class="GoodComments-cont-top">
					<span><img src="http://img0.imgtn.bdimg.com/it/u=4240520873,3435824753&fm=27&gp=0.jpg" alt=""  class="portrait"/></span>
					<p class="GoodComments-cont-top-face">脑残2号</p>
					<p><span>32楼</span><span>2015-3-22</span></p>
					<p class="zan">
						<img src="../../../assets/img/11/zan_btn_normal.png" alt="" class="initial" @click="initial" />
						<img src="../../../assets/img/11/zan_btn_selected.png" alt="" class="select" />
						<span>506</span>
					</p>
					<p class='appraise'>啦啦啦啦！喜欢，一直支持，不管别人怎能说</p>
					<p class='area'>崇文门国瑞城
					<a href="#javascript:;" class="del" v-if="username=='脑残粉'">删除</a>
					<!--<a href="#javascript:;" class="del" v-else=""></a>-->
					</p>
				</div>
				

			</div>
	</div>
</template>

<script>
	export default {
		name: 'GoodComments',
		data() {
			return {
				ThumbUp: '3',
				username:'脑残粉'
			}
		},
		methods: {
			initial() {
				$('.initial').css({
					'display': "none"
				});
				this.ThumbUp++;
				$('.select').css({
					'display': "block"
				});
			}
		},
		props:{
			titlename:String
		}
	}
</script>

<style scoped lang='less'>
	.GoodComments {
		margin:30/100rem 20/100rem ;
		border-bottom:1px solid #d7d2e0;
	}
	
	.title {
		overflow: hidden;
		margin:30/100rem 0;
	}
	
	.title>div {
		display: inline-block;
		font-size:32/100rem;
	}
	
	.title-right {
		width: 450/100rem;
		float: right;
	}
	
	.title-right div {
		padding-top: 15/100rem;
		border-bottom: 1px solid #d7d2e0;
	}
	
	.GoodComments .circleCont-cont {
		margin: 20/100rem;
		border-bottom: 1px solid #d7d2e0;
		position: relative;
	}
	
	.GoodComments-cont-top {
		width: 100%;
		overflow: hidden;
		position: relative;
	}
	
	.GoodComments-cont-top>span {
		float: left;
		width: 60/100rem;
		height: 60/100rem;
		border-radius: 30/100rem;
		border: 1px solid gray;
		margin-right: 30/100rem;
		overflow: hidden;
	}
	
	.GoodComments-cont-top .portrait {
		width: 100%;
	}
	
	.GoodComments-cont-top p {
		font-size: 32/100rem;
	}
	
	.GoodComments-cont-top p img {
		vertical-align: middle;
		width: 32px;
		margin: 0 15/100rem;
	}
	
	.GoodComments-cont-top>p>span {
		line-height: 50/100rem;
		font-size: 28/100rem;
		margin-right: 30/100rem;
		color: #959595;
	}
	
	.GoodComments-cont-top-face {
		color: #b675eb;
	}
	
	.GoodComments-cont-top .zan {
		position: absolute;
		right: 0;
		top: 0;
	}
	
	.GoodComments-cont-top .zan img {
		position: absolute;
		left: -80/100rem;
		width: 50/100rem;
	}
	
	.GoodComments-cont-text {
		margin-left: 94/100rem;
	}
	
	.GoodComments-cont-text h3 {
		font-size: 32/100rem;
		margin: 20/100rem 0;
		line-height: 40/100rem;
	}
	
	.GoodComments-cont-text img {
		width: 150/100rem;
		height: 150/100rem;
		margin-right: 12/100rem;
	}
	
	.select {
		display: none;
	}
	.appraise{
		margin:30/100rem 0;
		line-height:40/100rem;
		font-family: "微软雅黑";
	}
    .area{
		color:#959595;
		margin-bottom:20/100rem;
		position:relative;
	}
	.del{
		color:#a54be8;
		position:absolute;
		right:0;
	}
</style>