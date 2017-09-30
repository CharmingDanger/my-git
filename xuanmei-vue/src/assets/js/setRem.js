/*
    这是rem布局的核心代码，这段代码的大意是：
    如果页面的宽度超过了640px，那么页面中html的font-size恒为100px，否则，页面中html的font-size的大小为： 100 * (当前页面宽度 / 640)
*/ 
(function (doc, win) {
    var docEl = doc.documentElement;
    resetScale = function () {
        var clientWidth = docEl.clientWidth;
        if(clientWidth>=640){
            docEl.style.fontSize = '100px';
        }else{
            docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            //把document的fontSize大小设置成跟窗口成一定比例的大小,从而实现响应式效果
        }
    };
    if (!doc.addEventListener) return;
    win.addEventListener("resize", resetScale, false); //当窗口改变时触发;
    doc.addEventListener('DOMContentLoaded', resetScale, false);
    //当页面结构load完毕时触发;
})(document, window);