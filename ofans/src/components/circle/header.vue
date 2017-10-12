<template>
	<div class="header">
		圈子
		<img src="../../assets/img/23/circle_to_down_arrow.png" alt="" @click="imgdown" class="imgdown" />
		<img src="../../assets/img/23/circle_to_up_arrow.png" alt="" @click="imgup" class="imgup" />
		<router-link :to="{path:'/main/circle/haircircle'}" id="write">
			<img src="../../assets/img/23/circle_edit_icon_normal.png" alt=""  />
		</router-link>
		<div class="unfurled" @click="selecttitle">
			<div class="selecttitle" >全部</div>
			<div>热门</div>
			<div>关注</div>
			
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'header',
		data() {
			return {
				kindname:'全部'

			}
		},

		methods: {
			imgdown() {
				$('.imgdown').css({
					'display': 'none'
				})
				$('.imgup').css({
					'display': 'block'
				})
				$('.unfurled').css({'display':"block"});
			},
			imgup() {

				$('.imgdown').css({
					'display': 'block'
				})
				$('.imgup').css({
					'display': 'none'
				})
				$('.unfurled').css({'display':"none"})
			},
			selecttitle(event){
				$(".unfurled div").siblings().removeClass('selecttitle');
				var cli=event.target;
				this.kindname=cli.innerText;
				cli.className="selecttitle";
				this.$emit('sendtitle',this.kindname);
				
			}
		},
		created() {
			

		},
		computed: {

		}

	}
</script>

<style scoped lang="less">
	.header {
		font-size: 36/100rem;
		text-align: center;
		background: #a54be8;
		color: white;
		font-family: "微软雅黑";
		line-height: 95/100rem;
		position:relative;
	}
	
	.header img {
		width: 40/100rem;
		position:absolute;
		top:30%;
		left:58%;
		
	}
	
	.header .imgup {
		display: none;
	}
	.header #write{
		position:absolute;
		left:90%;
		top:30%;
	}
	.header .unfurled{
		position:absolute;
		width:100%;
		bottom:-100/100rem;
		height:100/100rem;
		z-index:100;
		background:url("../../assets/img/24/circle_float_bar_bg.png");
		display:flex;
		flex-flow: row nowrap;
		justify-content: space-around;
		display:none;
	}
	.header .unfurled div{
		display:inline-block;
		width:140/100rem;
		height:60/100rem;
		margin:20/100rem auto;
		line-height:60/100rem;
		font-size:30/100rem;
		color:#721cb1;
		border-radius:20px;
	}
	.header .unfurled  .selecttitle{
		color:white;
		background:#a05fd7;
	}
	
</style>