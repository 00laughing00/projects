<template>
	<div class='result-list'>
		<div class='list-item' v-for='(item,index) in 10' :key='index'>
			<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505811859900&di=5a7bbe48f29bdceb790272cb9a1696f9&imgtype=0&src=http%3A%2F%2Ftupian.enterdesk.com%2F2014%2Fmxy%2F11%2F10%2F1%2F6.jpg" alt="" />
			<span class='firsticon' v-show='index==0'></span>
			<span class='secondicon' v-show='index==1'></span>
			<span class='thirdicon' v-show='index==2'></span>
			<div class='item-cont'>
				<p class='title'>唯我粉丝王</p>
				<p class='desc'>能动手的人生，就安静点</p>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name:'resultList',
	data(){
		return{
			
		}
	},
	created(){
		$(function (){
			var desc = document.getElementsByClassName('desc');
			
			for(var i=0;i<desc.length;i++){
				var descLength = desc[i].innerText.length;
				if(descLength>20){
					desc[i].innerText = desc[i].innerText.substring(0,20)+'...';
				}
			}
		})
	}
}
</script>

<style lang='less' scoped>
.result-list{
	padding:0 20/100rem;
	.list-item{
		width:100%;
		height:80/100rem;
		padding:20/100rem 0;
		position:relative;
		img{
			float:left;
			width:80/100rem;
			border-radius:50%;
			margin-right:20/100rem;
		}
		span{
			display:block;
			width:30/100rem;
			height:30/100rem;
			position:absolute;
			left:50/100rem;
			bottom:20/100rem;
		}
		.firsticon{
			background:url('../../../../assets/img/10/fans_icon.png');
			background-size:100%;
		}
		.secondicon{
			background:url('../../../../assets/img/10/film_org_icon.png');
			background-size:100%;
		}
		.thirdicon{
			background:url('../../../../assets/img/10/star_icon.png');
			background-size:100%;
		}
		.item-cont{
			width:500/100rem;
			height:100/100rem;
			float:left;
			border-bottom:1px solid #d7d2e0;
			.title{
				font-size:28/100rem;
				color:#313131;
				margin:10/100rem 0 14/100rem;
			}
			.desc{
				font-size:24/100rem;
				color:#959595;
			}
		}
	}
	
}
</style>