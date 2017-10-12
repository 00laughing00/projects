<template>
	<div class='introducte'>
		<div class='organization'>
			<div class='i-title'>官方机构
				<div class='line'></div>
			</div>
			<div class='i-official'>
				<img :src="officialIcon" alt="" />
				<p>
					<span class='name'>{{currentObj.title}}制片</span>
					<span class='btn1'><i>加关注</i></span>
				</p>
				
			</div>
		</div>
		<div class='actor'>
			<div class='i-title'>主要演员
				<div class='line'></div>
			</div>
			<div class='i-item' v-for='(item,index) in mainRole'>
				<img :src="item.icon" alt="" />
				<p>
					<span class='name'>{{item.actorName}}</span>
					<span class='btn2'><i>已关注</i></span>
				</p>
			</div>
		</div>
		<div class='actor'>
			<div class='i-title'>片花简介
				<div class='line'></div>
			</div>
			<div class='desc'>{{currentObj.detailContent}}</div>
		</div>
	</div>
</template>

<script>
export default{
	name:'introducte',
	data(){
		return{
			current:'',
			currentObj:{},
			mainRole:[],
			officialIcon:''
		}
	},
	created(){
		this.current = this.$route.params.current;
		this.$axios.get('/trailers')
		.then(res=>{
			for(var i=0;i<res.data.length;i++){
				if(res.data[i].title==this.current){
					this.currentObj = res.data[i];
					break;
				}
			}
			this.mainRole = this.currentObj.actor;
			this.officialIcon = this.currentObj.officialIcon;
		})
		.catch(error=>{
			console.log(error);
		})
	}
}
</script>

<style lang='less' scoped>
.introducte{
	/*margin-bottom:24/100rem;*/
	padding:0 20/100rem;
	.i-item,.i-official{
		padding:24/100rem 0 10/100rem 10/100rem;
		overflow:hidden;
		img{
			float:left;
			width:80/100rem;
			height:80/100rem;
			border-radius:50%;
			margin-right:20/100rem;
		}
		p{
			width:490/100rem;
			border-bottom:1px solid #d7d2e0;;
			float:left;
			padding:20/100rem 0 50/100rem;
			position:relative;
			.name{
				float:left;
				color:#313131;
				font-size:30/100rem;
			}
			.btn1{
				position:absolute;
				top:12/100rem;
				right:20/100rem;
				display:inline-block;
				width:138/100rem;
				height:45/100rem;
				background:url('../../../assets/img/16/1-1.png') no-repeat;
				background-size:100%;
				i{
					font-size:24/100rem;
					color:#fff;
					position:relative;
					top:11/100rem;
					left:46/100rem;
				}
			}
			.btn2{
				position:absolute;
				top:12/100rem;
				right:20/100rem;
				display:inline-block;
				width:138/100rem;
				height:45/100rem;
				background:url('../../../assets/img/16/2-1.png') no-repeat;
				background-size:100%;
				i{
					font-size:24/100rem;
					color:#fff;
					position:relative;
					top:11/100rem;
					left:46/100rem;
				}
			}
			.btn3{
				position:absolute;
				top:12/100rem;
				right:20/100rem;
				display:inline-block;
				width:168/100rem;
				height:45/100rem;
				background:url('../../../assets/img/16/3-1.png') no-repeat;
				background-size:100%;
				i{
					font-size:24/100rem;
					color:#fff;
					position:relative;
					top:11/100rem;
					left:46/100rem;
				}
			}
		}
	}
	.i-official p{
		border:none;	
	}
	.desc{
		padding:24/100rem 20/100rem 24/100rem 10/100rem;
		color:#707070;
		font-size:26/100rem;
		line-height:40/100rem;
	}
}
.i-title{
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
</style>