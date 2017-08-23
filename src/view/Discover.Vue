<template >
	<div class="Discover">
		<mt-header fixed title="搜索">
			<router-link to="/footerGuide/takeOut" slot="left">
		    	<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<mt-search v-model="value" cancel-text="取消"placeholder="请输入商家或美食名称">
		</mt-search>

	</div>
		
</template>

<script>
	export default {
	  	name: 'Discover',
	  	data: function () {
		    return {
		     "value":""
		    }
	 	 },
	 	methods:{
		  	getData:function(){
		  		//这里可以写ajax方法
		  	}
	  	}
	}
</script>

<style scoped>
.mint-search{
	margin-top: 40px;
	width: 100%;	
}
</style>