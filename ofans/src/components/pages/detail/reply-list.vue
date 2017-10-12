<template>
	<div class='reply-list' style='height:100%'>
		<div class='list-item' v-for='(item,index) in 5' :key='index'>
			<div class='img'>
				<img src="http://img1.imgtn.bdimg.com/it/u=1762973822,121126736&fm=214&gp=0.jpg" alt="" />
			</div>
			<div class='right'>
				<div class='top'>
					<div class='baseinfo'>
						<p class='username'>脑残粉</p>
						<p class='date'><span>32楼</span><span>2017-09-19</span></p>
					</div>
					<div class='reply' @click='dialog'></div>
				</div>
				<div class='desc'>这是全部回复中的某一条这是全部回复中的某一条这是全部回复中的某一条这是全部回复中的某一条这是全部回复中的某一条</div>
			</div>
			<div class='dialog'>
				<div class='copy'>复制</div>	
				<div class='report' @click='reportDialog'></div>	
			</div>
		</div>
		<div class='report-dialog' @click='hidden'>
			<div class='box'>
				<p>请选择举报原因</p>
				<div>
					<ul>
						<li>暴力色青</li>
						<li>广告骚扰</li>
						<li>违反法律法规</li>
					</ul>
					<ul>
						<li>虚假谣言</li>
						<li>人身攻击</li>
						<li>其他</li>
					</ul>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name:'replyList',
	data(){
		return{
			
		}
	},
	created(){
		
	},
	methods:{
		//按钮弹出框
		dialog(event){
			var dialog = event.target.parentNode.parentNode.nextSibling.nextSibling;
			if(dialog.style.display=='block'){
				dialog.style.display = 'none';
			}else{
				$('.dialog').css('display','none');
				dialog.style.display = 'block';
			}
		},
		//举报框
		reportDialog(event){
			$('.dialog').fadeOut(500);
			$('.report-dialog').fadeIn(500);
		},
		//模态框消失
		hidden(){	
			var screenHeight = screen.availHeight;
			var rate = 568/screenHeight;
			if(event.clientY<(175/rate) || event.clientY>(390/rate)){
				$('.report-dialog').fadeOut(500);
			}
			
		}
	}
}
</script>

<style lang='less' scoped>
.list-item{
	padding:20/100rem 40/100rem 20/100rem 30/100rem;
	border-bottom:1px solid #d7d2e0;
	overflow: hidden;
	position:relative;
	.img{
		float:left;
		height:100%;
		margin-right:20/100rem;
		img{
			width:60/100rem;
			height:60/100rem;
			border-radius:50%;
		}
	}
	.right{
		float:left;
		width:490/100rem;
		.top{
			overflow:hidden;
			div{
				float:left;
			}
			.baseinfo{
				margin-right:90/100rem;
				.username{
					font-size:28/100rem;
					color:#b676eb;
					margin-bottom:8/100rem;
				}
				.date{
					color:#959595;
					font-size:24/100rem;
					span:first-child{
						margin-right:20/100rem;
					}
				}
			}
			.thumbUp{
				color:#959595;
				font-size:20/100rem;
				margin-right:50/100rem;
				span{
					display:inline-block;
					width:34/100rem;
					height:34/100rem;
					background:url('../../../assets/img/11/zan_btn_normal.png') no-repeat;
					background-size:100%;
					margin-right:10/100rem;
					position:relative;
					top:8/100rem;
				}
			}
			.reply{
				float:right;
				width:60/100rem;
				height:40/100rem;
				background:url('../../../assets/img/11/more_btn_normal.png') no-repeat;
				background-size:100%;
				position:relative;
				top:8/100rem;
				
			}
		}
		.desc{
			color:#343434;
			font-size:30/100rem;
			margin-top:25/100rem;
			line-height:40/100rem;
		}
	}
	
}
.dialog{
	display:none;
	width:248/100rem;
	height:58/100rem;
	background:#4b4053;
	border:1px solid #2e2336;
	border-radius:5/100rem;
	padding:10/100rem;
	position:absolute;
	top:10/100rem;
	left:260/100rem;
	div{
		float:left;
	}
	.copy{
		width:170/100rem;
		height:60/100rem;
		background:#6c597a;
		border:1px solid #403249;
		border-radius:5/100rem;
		box-sizing: border-box;
		color:#fff;
		font-size:24/100rem;
		line-height:60/100rem;
		padding-left:80/100rem;
	}
	.copy:before{
		content:'';
		display:block;
		width:27/100rem;
		height:31/100rem;
		background:url('../../../assets/img/14/t4.png') no-repeat;
		background-size: 100%;
		position:absolute;
		top:25/100rem;
		left:40/100rem;
	}
	.report{
		float:right;
		width:70/100rem;
		height:60/100rem;
		background:#6c597a;
		border:1px solid #403249;
		border-radius:5/100rem;
		box-sizing: border-box;
		position:relative;
	}
	.report:before{
		content:'';
		display:block;
		width:28/100rem;
		height:34/100rem;
		background:url('../../../assets/img/12/t3.png') no-repeat;
		background-size: 100%;
		position:absolute;
		top:15/100rem;
		left:20/100rem;
		
	}
}
.report-dialog{
	display:none;
	color:#fff;
	width:100%;
	height:100%;
	position:fixed;
	top:0;
	left:0;
	z-index:100;
	background:url('../../../assets/img/3/dialog_cover_bg.png') no-repeat;
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
		padding:34/100rem 74/100rem 0 74/100rem;
		box-sizing: border-box;
		color:#1b1b1b;
		font-size:30/100rem;
		text-align:center;
		p{
			color:#959595;
			font-size:30/100rem;
			margin-bottom:60/100rem;
		}
		div{
			overflow: hidden;
			ul{
				float:left;
				text-align:left;
				li{
					margin-bottom:78/100rem;
					color:#1b1b1b;
				}
				li:hover{
					color:#a54de8;
				}
			}
			ul:last-child{
				float:right;
			}
		}
	}
}
</style>