<template>
	<div class='selection'>
		<div class='selection-item' v-for='(item,index) in selection' :key='index'>
			<div class='img'>
				<img :src="item.img" alt="" />
			</div>
			<div class='right'>
				<p>第  {{item.id}} 集</p>
				<p class='desc'>{{item.abstract}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name:'selection',
	data(){
		return{
			selection:[]
		}
	},
	created(){
		//请求剧集数据
		this.$axios.get('/selection')
		.then(res=>{
			this.selection = res.data;
		})
		.catch(error=>{
			console.log(error);
		})
	},
	updated(){
		var desc = document.getElementsByClassName('desc');
		for(var i=0;i<desc.length;i++){
			var descLength = desc[[i]].innerText.length;
			if(descLength>43){
				desc[[i]].innerText = desc[[i]].innerText.substring(0,43)+'...';
			}
		}
		
	}
	
}
</script>

<style lang='less' scoped>
.selection{
	padding:0 20/100rem;
	.selection-item{
		height:150/100rem;
		border-bottom:1px solid #d7d2e0; 
		margin-bottom:10/100rem;
		.img{
			width:210/100rem;
			height:130/100rem;
			border:4/100rem solid #f2eef9;
			float: left;
			img{
				width:100%;
				height:100%;
			}
		}
		.right{
			float:right;
			width:370/100rem;
			p:first-child{
				color:#313131;
				font-size:26/100rem;
				margin:10/100rem 0;
			}
			p:last-child{
				color:#959595;
				font-size:24/100rem;
				line-height:30/100rem;
			}
		}
		
	}
	.selection-item:hover .img{
		border:4/100rem solid #a54de8;
	}
	.selection-item:hover p:first-child{
		color:#a54de8;
	}
}
</style>