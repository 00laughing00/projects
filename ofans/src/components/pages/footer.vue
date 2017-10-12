<template>

	<div class="footer">
		<ul>
			<router-link tag="li" active-class='active' :to="{path:'/main/trailers'}">片花</router-link>
			<router-link tag="li" active-class='active' :to="{path:'/main/circle'}">圈子</router-link>
			<router-link tag="li" active-class='active' :to="{path:'/main/dynamic'}">动态</router-link>
			<router-link tag="li" active-class='active' :to="{path:'/mine'}">我的</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'footer',
		data() {
			return {

			}
		}
	}
</script>
<style lang="less" scoped>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	a {
		text-decoration: none;
	}
	
	.footer {
		width: 100%;
		position: fixed;
		bottom: 0;
		border-top: 1px solid #a0a0a0;
		li {
			float: left;
			width: 25%;
			height: 95/100rem;
			background: rgba(255, 255, 255, 1);
			text-align: center;
			position: relative;
			color: #a0a0a0;
			font-size: 18/100rem;
			line-height: 150/100rem;
		}
		li::before {
			content: '';
			display: block;
			width: 46/100rem;
			height: 46/100rem;
			position: absolute;
			top: 10/100rem;
			left: 50%;
			margin-left: -23/100rem
		}
		li:nth-child(1)::before {
			background: url('../../assets/img/1/main_trailer_normal.png');
			background-size: 46/100rem;
		}
		li:nth-child(2)::before {
			background: url('../../assets/img/1/main_circle_normal.png');
			background-size: 46/100rem;
		}
		li:nth-child(3)::before {
			background: url('../../assets/img/1/main_dynamic_normal.png');
			background-size: 46/100rem;
		}
		li:nth-child(4)::before {
			background: url('../../assets/img/1/main_profile_normal.png');
			background-size: 46/100rem;
		}
	}
	
	.footer ul li.active {
		color: #a54be8;
	}
	
	.footer ul li:nth-child(1).active::before {
		background: url('../../assets/img/1/main_trailer_selected.png');
		background-size: 46/100rem;
	}
	
	.footer ul li:nth-child(2).active::before {
		background: url('../../assets/img/1/main_circle_selected.png');
		background-size: 46/100rem;
	}
	
	.footer ul li:nth-child(3).active::before {
		background: url('../../assets/img/1/main_dynamic_selected.png');
		background-size: 46/100rem;
	}
	
	.footer ul li:nth-child(4).active::before {
		background: url('../../assets/img/1/main_profile_selected.png');
		background-size: 46/100rem;
	}
</style>