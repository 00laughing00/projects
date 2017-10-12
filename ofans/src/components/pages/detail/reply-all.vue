<template>
	<div class='reply'>
		<div class='reply-header'>
			<router-link :to="{path:'/detail/comment'}" tag='span'></router-link>全部回复
		</div>
		<ReplyList/>
		<div class='reply-footer'>
			<div class='reply-input'>
				<input type="text" placeholder='请输入回复内容'/>
			</div>
		</div>
	</div>
</template>

<script>
import ReplyList from './reply-list';
export default{
	name:'replyAll',
	data(){
		return{
			
		}
	},
	components:{
		ReplyList
	},
	created(){
		$(document).scrollTop('0');
	}
}
</script>

<style lang='less' scoped>
.reply{
	padding-top:95/100rem;
	padding-bottom:86/100rem;
}
.reply-header{
	width:100%;
	height:95/100rem;
	background-color:#a54de8;
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
.reply-footer{
	width:100%;
	height:87/100rem;
	border-top:1px solid #d7d2e0;
	margin-top:10/100rem;
	background:#f2eef9;
	position:fixed;
	bottom:0;
	.reply-input{
		width:520/100rem;
		height:62/100rem;
		border:1px solid #bfbac8;
		border-radius:10/100rem;
		box-sizing: border-box;
		margin:12/100rem 0 0 96/100rem;
		background:#ffffff;
		position:relative;
		input{
			border:none;
			width:440/100rem;
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
	.reply-input:before{
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
.reply-footer:before{
	content:'';
	display:block;
	width:55/100rem;
	height:55/100rem;
	background:url('../../../assets/img/14/z-1.png') no-repeat;
	background-size:100%;
	position:absolute;
	top:15/100rem;
	left:20/100rem;
	
}
</style>