$(function(){
/*---------------------首页-------------------------------*/
	//判断在PC端
	function IsPC(){  
    	var userAgentInfo = navigator.userAgent;  
    	var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
    	var flag = true;  
    	for (var v = 0; v < Agents.length; v++) {  
           if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
    	}  
    	return flag;  
	}   
	//客服hover 
	if(IsPC()){
		$("._kf_ewm_show a").hover(function(){
			$(".wx_kf").fadeIn(100);
			$(".daili_zm").fadeOut(100);
			$(".hd_nav_rt li").removeClass("show_tar");
			$("._kf_ewm_show").addClass("show_tar");
		},function(){});

		$(".money a").hover(function(){
			$(".daili_zm").fadeIn(100);
			$(".wx_kf").fadeOut(100);
			$(".hd_nav_rt li").removeClass("show_tar");
			$(".money").addClass("show_tar");
		},function(){});
		$(document).on("click",function (event){
			var target=event.Element||event.target;
			while(target){
				if(target==$(".show_tar")[0]){
					return false;
				}
				target=target.parentNode;
			}
			$(".wx_kf").fadeOut(100);
			$(".daili_zm").fadeOut(100);
		});
		
	}else{
		var click_n=0;//点击页面的次数
		$("._kf_ewm_show a").on("click",function(){
			$(".wx_kf").fadeIn();
			$(".daili_zm").fadeOut();
			$(".hd_nav_rt li").removeClass("show_tar");
			$("._kf_ewm_show").addClass("show_tar");
			click_n++;
		});

		$(".money a").on("click",function(){
			$(".daili_zm").fadeIn();
			$(".wx_kf").fadeOut();
			$(".hd_nav_rt li").removeClass("show_tar");
			$(".money").addClass("show_tar");
			click_n++;
		});

		$(document).on("touchend",function(){
			var target=event.Element||event.target;
			if(click_n!=0){
				while(target){
					if(target==$(".show_tar")[0]){
						return false;
					}
					target=target.parentNode;
				}
				$(".wx_kf").fadeOut(100)
				$(".daili_zm").fadeOut(100)
				$(".hd_nav_rt li").removeClass("show_tar");
					
			}
		});
	}
	//轮播
		var lb_timer=null;
		$(".lunbo_cot img").hide().eq(0).show();
		$(".lunbo_cot li").eq(0).css({
				"backgroundColor":"#C62929"
			});
		//鼠标移进轮播图块内自动轮播图暂停，移出滚动
		$(".hd_lunbo").hover(function (e){
			var from=e.fromElement;
			while(from){
				if(from==this){
					return false;
				}
				from=from.parentNode;
			}
			clearInterval(lb_timer);
		},function (e){
			var to=e.toElement;
			while(to){
				if(to==this){
					return false;
				}
				to=to.parentNode;
			}
			aotuplay();
		});
	//自动轮播
		var newI=0;//单前显示的图片的index值
		var oldI=0;
	//开始轮播
	aotuplay();
	function aotuplay(){
		clearInterval(lb_timer);
		lb_timer=setInterval(function(){
			newI++;
			if(newI>=$(".lunbo_cot img").length)newI=0;
			$(".lunbo_cot img").eq(oldI).fadeOut(1000);
			$(".lunbo_cot img").eq(newI).fadeIn(1000);
			$(".lunbo_cot li").css({
				"backgroundColor":"#ffffff"
			}).eq(newI).css({
				"backgroundColor":"#C62929"
			});
			oldI=newI;
		},5000);
		
	}
	//点击圆点显示对应的图片
	$(".lb_cir li").on("click",function(){
		var cir_I=$(".lb_cir li").index(this);
		if(cir_I==newI)return;
		newI=cir_I;
		$(".lunbo_cot img").eq(oldI).fadeOut(1000);
		$(".lunbo_cot img").eq(newI).fadeIn(1000);
		$(".lunbo_cot li").css({
			"backgroundColor":"#ffffff"
		}).eq(newI).css({
			"backgroundColor":"#C62929"
		});
		oldI=newI;
	});

	//右上角点击关闭二维码
	$(".ewm_close span").on("click",function(){
		$(".fiex_rt_top").css({
			"transform":"scale(0)"
		});
		$(".fiex_rt_top").fadeOut(500);

	});
	//点击回到顶部
	$(".toTop").on("click",function(){
		$("html,body").animate({
			"scrollTop":0
		});
	});
	//滚动可视窗口的高度大小显示回到顶部
	$(window).on("scroll",function(){
		var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;  
		// if(scrollTop>=$(".midd_cont_news").offset().top){
		if(scrollTop>=300){
			$(".toTop").fadeIn(300);
		}else{
			$(".toTop").fadeOut(300);
		}
	});

	/**************************新闻公告**************************/
	/*$(".news_item").on("click",function(){
		var index=$(".news_item").index(this);
		$(".news_item_hd").text($(".news_item").eq(index).text());
	});*/
});
