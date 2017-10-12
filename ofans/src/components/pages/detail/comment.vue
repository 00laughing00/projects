<template>
<div class='comment' style='height:100%;'>
	<div class='comment-wonderful'>
		<div class='c-title'>精彩评论
			<div class='line'></div>
		</div>
		<div class='comment-wonderful-box' v-for='(item,index) in comment' :key='index'>
			<div class='top'>
				<div class='img'>
					<img :src="item.icon" alt="" />
				</div>
				<div class='right'>
					<div class='top'>
						<div class='baseinfo'>
							<p class='username'>{{item.nick}}</p>
							<p class='date'><span>{{item.floor}}</span><span>{{item.date}}</span></p>
						</div>
						<div class='reply' @click='dialog'></div>
						<div class='thumbUp' @click='support'><span class='thumb1' v-if='isZan'></span><span class='thumb2' v-else></span>{{item.num}}</div>
						
					</div>
					<div class='dialog'>
						<div class='huifu' @click='replyBox'>回复</div>	
						<div class='share' @click='share'>分享</div>	
						<div class='report' @click='reportDialog'></div>	
					</div>
					<div class='desc'>{{item.content}}</div>
				</div>
			</div>
			<div class='reply-input-box'>
				<input type="text" placeholder="请输入回复..."/>	
			</div>
			
			<div class='reply-list'>
				<div class='toggle-btn' @click='toggle'>展开回复</div>
				<div class='list-box'>
					<div class='box' v-for='(reply,index) in item.replyList'>
						<p class='discuss'><span>{{reply.nick}}</span>:&nbsp;{{reply.cont}}</p>
						<p class='floor'><span>{{reply.id}}层</span><span>{{reply.date}}</span></p>
					</div>
					<p class='see-all'><router-link tag='span' :to="{path:'/replyall'}">查看更多回复...</router-link><span><img src="../../../assets/img/11/我说.png" alt="" />我也要说！</span></p>
				</div>
			</div>
		</div>
	</div>
	<div class='comment-all'>
		<div class='c-title'>全部评论
			<div class='line'></div>
		</div>
		<div class='comment-wonderful-box' v-for='(item,index) in allcomment' :key='index'>
			<div class='top'>
				<div class='img'>
					<img :src="item.icon" alt="" />
				</div>
				<div class='right'>
					<div class='top'>
						<div class='baseinfo'>
							<p class='username'>{{item.nick}}</p>
							<p class='date'><span>{{item.floor}}</span><span>{{item.date}}</span></p>
						</div>
						<div class='reply' @click='dialog'></div>
						<div class='thumbUp' @click='support'><span class='thumb1' v-if='isZan'></span><span class='thumb2' v-else></span>{{item.num}}</div>
						
					</div>
					<div class='dialog'>
						<div class='huifu' @click='replyBox'>回复</div>	
						<div class='share' @click='share'>分享</div>	
						<div class='report' @click='reportDialog'></div>	
					</div>
					<div class='desc'>{{item.content}}</div>
				</div>
			</div>
			<div class='reply-input-box'>
				<input type="text" placeholder="请输入回复..."/>	
			</div>
			<div class='haha'>{{replyContent}}</div>
			<div class='reply-list'>
				<div class='toggle-btn' @click='toggle'>展开回复</div>
				<div class='list-box'>
					<div class='box' v-for='(reply,index) in item.replyList'>
						<p class='discuss'><span>{{reply.nick}}</span>:&nbsp;{{reply.cont}}</p>
						<p class='floor'><span>{{reply.id}}层</span><span>{{reply.date}}</span></p>
					</div>
					<p class='see-all'><router-link tag='span' :to="{path:'/replyall'}">查看更多回复...</router-link><span><img src="../../../assets/img/11/我说.png" alt="" />我也要说！</span></p>
				</div>
			</div>
		</div>
	</div>
	<div class='post'>
		<div class='post-input'>
			<input type="text" placeholder='请输入评论内容'/>
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
	<div class='share-dialog'>
		<div class='box'>
			<div class='box-top'>
				<div>
					<span><img src="../../../assets/img/12/x微信-1.png" alt="" /><br />微信</span>
					<span><img src="../../../assets/img/12/x朋友圈-2.png" alt="" /><br />朋友圈</span>
					<span><img src="../../../assets/img/12/x微博-1.png" alt="" /><br />微博</span>
				</div>
			</div>
			<div class='box-bottom' @click='shareHidden'>取消</div>
		</div>
		
	</div>
</div>
</template>

<script>
import {setCookie,getCookie,delCookie} from '../../../assets/js/cookie.js';
export default{
	name:'comment',
	data(){
		return{
			thumbUp:500,
			isZan:true,
			comment:[],
			allcomment:[],
			replyContent:''
		}
	},
	created(){
		if(getCookie('isZan')==''||getCookie('isZan')=='true'){
			setCookie('isZan','true');
			this.isZan = true;
		}else if(getCookie('isZan')=='false'){
			this.isZan = false;
		}
		//请求精彩评论数据
		this.$axios.get('/comment')
		.then(res=>{
			this.comment = res.data;
		})
		.catch(error=>{
			console.log(error);
		})
		//请求全部评论数据
		this.$axios.get('/allcomment')
		.then(res=>{
			this.allcomment = res.data;
		})
		.catch(error=>{
			console.log(error);
		})
	},
	updated(){
//		$('.reply-input-box input').blur(function (){
//			$(this).parent().fadeOut();
//		})
		//键盘enter键模拟手机确认键，按下输入框消失
		var self = this;
		$('.reply-input-box input').keypress(function (e){
		    var key =  e.which;
	        if(key == 13){
	        	self.replyContent =$(this).val();
	        	console.log(self.replyContent);
				$(this).parent().css('display','none'); 
				
	        }
		})
	},
	methods:{
		//按钮弹出框
		dialog(event){
			var dialog = event.target.parentNode.nextSibling.nextSibling;
			
			if(dialog.style.display=='block'){
				dialog.style.display = 'none';
			}else{
				$('.dialog').css('display','none');
				dialog.style.display = 'block';
			}
		},
		//举报框
		reportDialog(event){
			
			event.target.parentNode.style.display = 'none';
			$('.report-dialog').fadeIn(500);
		},
		//模态框消失
		hidden(event){
			var screenHeight = screen.availHeight;
			var rate = 568/screenHeight;
			if(event.clientY<(175/rate) || event.clientY>(390/rate)){
				$('.report-dialog').fadeOut(500);
			}
		},
		//分享界面显示
		share(){
			$('.dialog').fadeOut(500);
			$('.share-dialog').fadeIn(500);
			
		},
		//分享界面消失
		shareHidden(){
			$('.share-dialog').fadeOut(500);
		},
		//点赞
		support(event){
			console.log(event.target);
//			if(getCookie('isZan')=='true'){
//				setCookie('isZan','false');
//				this.isZan = false;
//				this.thumbUp++;
//			}else if(getCookie('isZan')=='false'){
//				setCookie('isZan','true');
//				this.isZan = true;
//				this.thumbUp--;
//			}
		},
		//回复弹出框
		replyBox(event){
			event.target.parentNode.style.display = 'none';
			event.target.parentNode.parentNode.parentNode.nextSibling.nextSibling.style.display = 'block';
		},
		//回复展开与收起
		toggle(event){
			var content = event.target.innerText;
			if(content=='展开回复'){		
				event.target.innerText='收起回复';
				event.target.nextSibling.nextSibling.style.display = 'block';
			}else if(content=='收起回复'){
				event.target.innerText='展开回复';
				event.target.nextSibling.nextSibling.style.display = 'none';
			}
		}
	}
}
</script>

<style lang='less' scoped>
.comment{
	.comment-wonderful{
		margin-bottom:24/100rem;
		padding:0 20/100rem;
	}
	.c-title{
		color:#000;
		font-size:26/100rem;
		border-left:3/100rem solid #a54de8;
		position:relative;
		text-indent:7/100rem;
		.line{
			width:480/100rem;
			height:1px;
			background:#d7d2e0;
			position:absolute;
			right:0;
			top:13/100rem;
		}
	}
	.comment-wonderful-box{
		padding:30/100rem 0 15/100rem;
		border-bottom:1px solid #d7d2e0;
		overflow: hidden;
		.top{
			overflow: hidden;
		}
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
			width:500/100rem;
			position:relative;
			.top{
				overflow:hidden;
				position:relative;
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
					margin-right:20/100rem;
					float:right;
					.thumb1,.thumb2{
						display:inline-block;
						width:34/100rem;
						height:34/100rem;
						margin-right:10/100rem;
						position:relative;
						top:8/100rem;
						/*display:none;*/
					}
					.thumb1{
						background:url('../../../assets/img/11/zan_btn_normal.png') no-repeat;
						background-size:100%;
					}
					.thumb2{
						background:url('../../../assets/img/11/zan_btn_selected.png') no-repeat;
						background-size:100%;
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
				margin-top:20/100rem;
				line-height:38/100rem;
			}
		}
		.reply-input-box{
			display: none;
			margin:25/100rem 20/100rem 0;
			height:90/100rem;
			background:#f8f5fe;
			box-sizing: border-box;
			border:1px solid #d7d2e0;
			position: relative;
			input{
				width:520/100rem;
				height:62/100rem;
				display: block;
				border-radius:10/100rem;
				border:1px solid #d1ccda;
				background:#fff;
				margin:12/100rem 20/100rem;
				box-sizing: border-box;
				outline: none;
				text-indent: 55/100rem;
				color:#959595;
				font-size:26/100rem;
			}
			input::-webkit-input-placeholder{
				color:#959595;
				font-size:26/100rem;
			}
		}
		.reply-input-box::before{
				content:'';
				display:block;
				width:35/100rem;
				height:30/100rem;
				background:url('../../../assets/img/13/icon.png') no-repeat;
				background-size:100%;
				position:absolute;
				top:28/100rem;
				left:32/100rem;
			}
		
	}
	.reply-list{
		.toggle-btn{
			text-align:right;
			width:560/100rem;
			margin:26/100rem auto;
			padding-right:34/100rem;
			position:relative;
			color:#b676eb;
			font-size:24/100rem;
			background:url('../../../assets/img/11/收起回复箭头.png') no-repeat;
			background-size:22/100rem 12/100rem;
			background-position:right;
			box-sizing: border-box;
		}
		.list-box{
			display: none;
			width:560/100rem;
			border:1px solid #d7d2e0;
			margin-left:20/100rem;
			background: #f8f5fe;
			.box{
				width:500/100rem;
				padding:24/100rem 0;
				margin:0 auto;
				border-bottom:1px solid #d7d2e0;
				.discuss{
					margin-bottom:4/100rem;
					font-size:26/100rem;
					color:#343434;
					line-height:40/100rem;
					span{
						color:#b676eb;	
					}
				}
				.floor{
					color:#c7c5ca;
					font-size:22/100rem;
					line-height:24/100rem;
					overflow: hidden;
					span:last-child{
						float:right;
					}
				}
			}
			.see-all{
				width:500/100rem;
				height:34/100rem;
				line-height:34/100rem;
				padding:24/100rem 0;
				margin:0 auto;
				overflow: hidden;
				color:#b676eb;
				font-size:22/100rem;
				span:last-child{
					float:right;
					position:relative;
					top:-6/100rem;
					img{
						width:34/100rem;
						height:30/100rem;
						margin-right:10/100rem;
						position:relative;
						top:6/100rem;
					}
				}
			}
		}
	}
	.comment-all{
		padding:0 20/100rem;
		margin-bottom:100/100rem;
	}
}
.post{
	width:100%;
	height:87/100rem;
	border-top:1px solid #d7d2e0;
	margin-top:10/100rem;
	background:#f2eef9;
	position:fixed;
	bottom:0;
	.post-input{
		width:590/100rem;
		height:62/100rem;
		border:1px solid #bfbac8;
		border-radius:10/100rem;
		box-sizing: border-box;
		margin:12/100rem auto 0;
		background:#ffffff;
		position:relative;
		input{
			border:none;
			width:515/100rem;
			height:54/100rem;
			color:#7b7781;
			font-size:26/100rem;
			outline:none;
			margin-left:68/100rem;
		}
		input::-webkit-input-placeholder{
			color:#7b7781;
		}
	}
	.post-input:before{
		content:'';
		display:block;
		width:34/100rem;
		height:34/100rem;
		background:url('../../../assets/img/11/下部-输入icon.png') no-repeat;
		background-size:100%;
		position:absolute;
		left:14/100rem;
		top:12/100rem;
	}
}
.dialog{
	display:none;
	width:428/100rem;
	height:58/100rem;
	background:#4b4053;
	border:1px solid #2e2336;
	border-radius:5/100rem;
	padding:10/100rem;
	position:absolute;
	top:0;
	left:-20/100rem;
	div{
		float:left;
	}
	.huifu,.share{
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
		margin-right:8/100rem;
	}
	.huifu:before{
		content:'';
		display:block;
		width:27/100rem;
		height:31/100rem;
		background:url('../../../assets/img/12/t1.png') no-repeat;
		background-size: 100%;
		position:absolute;
		top:30/100rem;
		left:40/100rem;
	}
	.share:before{
		content:'';
		display:block;
		width:27/100rem;
		height:31/100rem;
		background:url('../../../assets/img/12/t2.png') no-repeat;
		background-size: 100%;
		position:absolute;
		top:25/100rem;
		left:215/100rem;
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
.share-dialog{
	display: none;
	width:100%;
	height:50%;
	background: url('../../../assets/img/12/半透明渐变.png') no-repeat;
	background-size: 100%;
	position:fixed;
	bottom:0;
	left:0;
	.box{
		width:600/100rem;
		height:300/100rem;
		margin:0 20/100rem;
		position:fixed;
		bottom:20/100rem;
		.box-top{
			width:100%;
			height:200/100rem;
			background: #fff;;
			border-radius:10/100rem;
			margin-bottom:12/100rem;
			box-sizing: border-box;
			padding:24/100rem 60/100rem 0;
			overflow: hidden;
			span{
				display: block;
				float:left;
				width:100/100rem;
				height:150/100rem;
				margin-right:90/100rem;
				text-align: center;
				color:#434343;
				font-size:30/100rem;
				img{
					width:100%;
					margin-bottom:20/100rem;
				}
			}
			span:last-child{
				margin-right:0;
			}
		}
		.box-bottom{
			width:100%;
			height:88/100rem;
			background: #fff;;
			border-radius:10/100rem;
			line-height:88/100rem;
			font-size:34/100rem;
			color:#a54de8;
			text-align:center;
		}
	}
}
</style>