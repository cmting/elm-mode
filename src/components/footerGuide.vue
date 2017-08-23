<template >
	<div class="menu" >
		<mt-tabbar v-model="selected" fixed>
			<mt-tab-item id="外卖">
			    <img slot="icon" src="../assets/img/elm.png">
			    <router-link to='/footerGuide/takeOut'>外卖</router-link>
			</mt-tab-item>
			
			<mt-tab-item id="订单">
			    <img slot="icon" src="../assets/img/order.png">
			    <router-link to='/footerGuide/Order'>订单</router-link>
			</mt-tab-item>

			  <mt-tab-item id="发现">
			    <img slot="icon" src="../assets/img/search.png">
			    <router-link to='/footerGuide/Discover'>搜索</router-link>
			</mt-tab-item>

			<mt-tab-item id="我的">
			    <img slot="icon" src="../assets/img/mine.png">
			    <router-link to='/footerGuide/Mine'>我的</router-link>
			  </mt-tab-item>
		</mt-tabbar>
		<router-view></router-view>
	</div>
	
</template>
<script>
	export default {
	    data: function () {
		    return {
	      	  "selected":"外卖"
		    }
	    }
	}
</script>
<!-- scoped是局部页面起作用 -->
<style scoped>
.mint-tab-item-label a{
	color: #666;
	text-decoration: none;
}
.mint-tab-item-label a:hover{
	color: #666;
}
a.focus{
	color: #20a0ff !important;
}	
</style>