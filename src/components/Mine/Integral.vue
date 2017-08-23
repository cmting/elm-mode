<template >
	<div class="Integral">
		<mt-header fixed title="积分商城">
			<router-link to="/footerGuide/Mine" slot="left">
		    	<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>	
	</div>
		
</template>

<script>

	export default {
	 
	    data: function () {
		    return {
		    
		    }
	    },
	    methods:{
		  	getData:function(){
		  		//这里可以写ajax方法
		  	}
	    }
	}
</script>
<!-- scoped是局部页面起作用 -->
<style scoped>


</style>