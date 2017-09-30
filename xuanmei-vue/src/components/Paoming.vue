<template>
	<div class="outer">
		<div class="inner">
			<div class="header_img">
				<img src="../assets/images/header_img_02.png">
			</div>
			<div class="form">
				<p class="news">请填写您的报名信息（填手机号、微信号不会对外公开）</p>
				<form action="#">
					<div class="name common">
						<div class="name_box common_child">
							<label>姓名</label>
							<input type="text" placeholder="请输入您的姓名" class="username">
							<span>*必填</span>
						</div>
					</div>
					<div class="phone_num common">
						<div class="phone_num_box common_child">
							<label>手机号</label>
							<input type="text" placeholder="请输入您的手机号" class="phone_num_txt" maxlength="11">
							<span>*必填</span>
						</div>
					</div>
					<div class="weixin_num common">
						<div class="weixin_num_box common_child">
							<label>微信</label>
							<input type="number" placeholder="请输入您的微信号" class="weixin_num_txt">
							<span>*必填</span>
						</div>
					</div>
					<div class="game_id common">
						<div class="game_id_box common_child">
							<label>游戏ID</label>
							<input type="number" placeholder="请输入您的游戏ID" class="game_id_txt">
							<span>*必填</span>
						</div>
					</div>
					<div class="qita common">
						<div class="qita_box common_child">
							<label>其他</label>
							<input type="text" placeholder="请输入您的生日、星座" class="qita_txt">
							<span>*必填</span>
						</div>
					</div>
					<div class="cansai_xy">
						<div class="cansai_xy_box common_child">
							<label>参赛宣言</label>
							<textarea name="value" id="" placeholder="请输入您的参赛宣言（不超过30字）" class="cansai_xy_txt" maxlength="30"></textarea>
							<span class="hid">*必填</span>
						</div>
					</div>
					<div class="photo">
						<div class="photo_box common_child">
							<span class="photo_h">照片</span>
							<div class="all_file">
								<div class="choose_img">
									<label for="file1" class="for_file" @click="chooseImg"><img src="../assets/images/choose_img_38.png" ref="img"></label>
									<input type="file" ref="file" id="file1">
								</div>
							</div>
							<span class="hid">*必填</span>
						</div>
						<p>最多添加3张图片（类型：jpg，png），每张图片大小不超过6M</p>
					</div>
					<div class="submit">
						<input type="submit" value="提交" class="sub_btn">
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		methods:{
			chooseImg(){
				var _this=this;
				this.$refs.file.onchange = function() {
			        var imgFile = this.files[0];
			        var fr = new FileReader();
			        fr.onload = function() {
			            _this.$refs.img.src = fr.result;
			        };
			        fr.readAsDataURL(imgFile);
			    };
			},
		}
	}
</script>
<style scoped>
	@import '../assets/css/baoming.css';
</style>