<template >
	<div class="Mine">
		<mt-header fixed title="我的">
			<router-link to="/footerGuide/Order" slot="left">
		    	<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<div class="headrow" >
			
				<div class="partOne">
					<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
					  	<img v-if="imageUrl" :src="imageUrl" class="avatar">
					  	<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
				</div>
				<div class="partTwo">
					<h4 style="margin:2px;color:white">登录|注册</h4>
					<div style="margin-top:7px;"><img slot="icon" src="../assets/img/phone.png"></div>
					<div class="phone">暂无绑定手机号</div>
				</div>
				<router-link to="/login">
				<div class="partThree">	
				    	<img  src="../assets/img/right.png" style="float:right;" >
				</div>
				</router-link>
		</div>
		<div class="sectionOne">
			<div class="myone">
				<div><a class="font26" style="color:orange">0.00</a><a class="font12">元</a></div>
				<div class="font12">我的余额</div>
			</div>
			<div class="mytwo">
				<div><a class="font26" style="color:red">0</a><a class="font12">个</a></div>
				<div class="font12">我的优惠</div>
			</div>
			<div class="mythree">
				<div><a class="font26" style="color:green">0</a><a class="font12">分</a></div>
				<div class="font12">我的积分</div>
			</div>
		</div>
		<div class="sectionTwo">
			
			<router-link to="/footerGuide/order">
				<div class="box1">
					<img src="../assets/img/myorder.png">
				</div>
				<div class="box2">
					<span class="brand">我的订单</span>
					<span><img slot="icon" src="../assets/img/left.png" style="float:right;" ></span>
				</div>
			</router-link>
			<router-link to="/Integral">
				<div class="box1">
					<img src="../assets/img/Integral.png">
				</div>
				<div class="box2">
					<span class="brand">积分商城</span>
					<span><img slot="icon" src="../assets/img/left.png" style="float:right;" ></span>
				</div>
			</router-link>
			<router-link to="/membership">
				<div class="box1">
					<img src="../assets/img/membership.png">
				</div>
				<div class="box2">
					<span class="brand">饿了么会员卡</span>
					<span><img slot="icon" src="../assets/img/left.png" style="float:right;" ></span>
				</div>
			</router-link>
			<router-link to="/service" >
				<div class="box1">
					<img src="../assets/img/service.png">
				</div>
				<div class="box2">
					<span class="brand">服务中心</span>
					<span><img slot="icon" src="../assets/img/left.png" style="float:right;" ></span>
				</div>
			</router-link>
			<router-link to="/elmApp">
				<div class="box1">
					<img src="../assets/img/elmapp.png">
				</div>
				<div class="box2">
					<span class="brand">下载饿了么APP</span>
					<span><img slot="icon" src="../assets/img/left.png" style="float:right;" ></span>
				</div>
			</router-link>
				
		</div>
	</div>
		
</template>

<script>
	export default {
		data: function () {
		    return {
		      imageUrl: ''
		    }
	    },
	    methods:{
		  	getData:function(){	
		  	},
		  	//上传照片
		  	handleAvatarSuccess(res, file) {
		        this.imageUrl = URL.createObjectURL(file.raw);
		      },
		    //上传照片大小的限制
	        beforeAvatarUpload(file) {
		        const isJPG = file.type === 'image/jpeg';
		        const isLt2M = file.size / 1024 / 1024 < 2;

		        if (!isJPG) {
		          this.$message.error('上传头像图片只能是 JPG 格式!');
		        }
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isJPG && isLt2M;
	        }
		}
	}
</script>

<style scoped>
.headrow{
	margin-top:31px;
	width: 100%;
	height: 73px;
	background-color: #26A2FF;
	position: fixed;
	margin-left: -8px;
}
.font12{
	font-size: 12px;
	color: #666;
}
.font26{
	font-size: 26px;
}
.phone{
	font-size:12px;
	color:white;
	margin-top:-21px;
	margin-left:16px;

}
.partOne{
	float: left;
	width: 20%;
	margin-top: 15px;
}
.partTwo{
	float:left;
	width: 45%;
	margin-top: 15px;
	margin-left: 10px;
}
.partThree{
	float: left;
	width: 30%;
	margin-top: 15px;
}
.partTwo a{
	margin-top: -10px;
}
.sectionOne{
	width: 100%;
	margin-left: -8px;
	margin-top: 108px;
	position: absolute;
	padding-bottom: 10px;
	border-bottom: 1px solid #f1f1f1;
}
.myone{
	width: 33.3%;
	float:left;
	text-align: center;
}
.mytwo{
	width: 33.3%;
	float:left;
	text-align: center;	
}
.mythree{
	width: 33.3%;
	float:left;	
	text-align: center;
}
.sectionTwo{
	margin-top: 178px;
	position: absolute;
    width: 100%;
}

.sectionTwo li{
	list-style: none;
}
.sectionTwo .box1{
	float:left;
	width:5%;
	margin-top:3px;
}
.sectionTwo .box2{
	border-bottom: 1px solid #f1f1f1;
	float:left;
	width:95%;
}
.sectionTwo .brand{
	margin:4px;
	color: #666;
	font-size: 14px;
}
.partOne{
	border:1px dashed #fff;
	height: 60px;
	width: 60px;
	margin-top: 4px;
	margin-left: 2px;
}
.avatar-uploader-icon {
    font-size: 16px;
    color: #fff;
    text-align: center;
    margin-left: 22px;
    margin-top: 22px;
}
.avatar {
    width: 60px;
    height: 60px;
    display: block;
    margin-left: 0px;
    margin-top: 0px;
}

</style>