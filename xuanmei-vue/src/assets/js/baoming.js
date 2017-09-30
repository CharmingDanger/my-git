window.onload=function(){
	//输入框紧贴软键盘
	var clientHeight=document.body.clientHeight;
	var _focusElem=null;
	document.body.addEventListener("focus",function(e){
		/*alert(0)*/
		_focusElem=e.target||e.srcElement;
	},true);
	window.addEventListener("resize",function(){
		if(_focusElem&&document.body.clientHeight<clientHeight){
			_focusElem.scrollIntoView(false);
		}
	});
}
function choooseImg(file,img){
	document.getElementById(file).onchange = function() {
        var imgFile = this.files[0];
        var fr = new FileReader();
        fr.onload = function() {
            document.getElementById(img).src = fr.result;
        };
        fr.readAsDataURL(imgFile);
    };
}
$(function(){
	//选择上传图片
	$(".for_file").on("touchstart",function(){
		var ThisId=$(this).siblings().attr('id');
		var ImgId=$(this).children().attr('id');
		choooseImg(ThisId,ImgId);
	});
	//手机号验证
	var phone_re=/^1\d{10}$/;
	$(".phone_num_txt input").blur(function(){
		if($(this).val()==""){
			$(".phone_num_txt .fa").hide();
			return;
		}
		if(phone_re.test($(this).val())){
			$(".phone_num_txt .fa").hide();
			$(".phone_num_txt .fa-check").show();
		}else{
			$(".phone_num_txt .fa").hide();
			$(".phone_num_txt .fa-close").show();
		}
	});
	//监听输入框只能输入数字
	$('.phone_num_txt').bind('input propertychange', function() {
	 		this.value=this.value.replace(/[^0-9]/g,'');
	});
});