<template>
	<div class='result-list'>
		<div class='list-item' v-for='(item,index) in trailers' @click='title(item.title)'>
			<img :src="item.img" alt="" />
			<div class='item-cont'>
				<p class='title'>{{item.title}}</p>
				<p class='desc'>{{item.detailContent}}。炼香大户宁昊天迎亲当天，未婚妻香雪吟与师弟安秋声私...</p>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name:'resultList',
	data(){
		return{
			trailers:[],
			trailerTitle:''
		}
	},
	created(){
		this.$axios.get('/trailers')
		.then(res=>{
			this.trailers = res.data;
		})
		.catch(error=>{
			console.log(error);
		})	
	},
	updated(){
		//限制字数
		var desc = document.getElementsByClassName('desc');
		for(var i=0;i<desc.length;i++){
			var descLength = desc[[i]].innerText.length;
			if(descLength>43){
				desc[[i]].innerText = desc[[i]].innerText.substring(0,43)+'...';
			}
		}
	},
	methods:{
		title(data){
			this.trailerTitle = data;
			this.$store.dispatch('getTitle',this.trailerTitle);
			this.$router.push({path:'/detail/comment'});
		}
	}
}
</script>

<style lang='less' scoped>
.result-list{
	margin-top:10/100rem;
	padding:0 20/100rem;
	.list-item{
		width:100%;
		height:140/100rem;
		padding:10/100rem 0;
		border-bottom:1px solid #d7d2e0;
		img{
			float:left;
			width:220/100rem;
			height:140/100rem;
			margin-right:12/100rem;
		}
		.item-cont{
			width:360/100rem;
			float:left;
			.title{
				font-size:28/100rem;
				color:#313131;
				margin:8/100rem 0 12/100rem;
			}
			.desc{
				font-size:24/100rem;
				color:#959595;
				line-height:30/100rem;
			}
		}
	}
	
}
</style>