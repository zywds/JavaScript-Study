//IIFE
;(function(factory){
    factory(window,jQuery,document);
}(function(window,$,document){
    //拓展jQuery插件
    //此插件可以增加元素的长度
    //函数表达式
    //option中可以传参
    $.fn.addWidth = function(option){
        //定义默认参数
        var setting = {
            length:1,
            //加号的颜色
            color:"blue",
            //回调事件
            callback:null
        };
        //覆盖默认参数
        $.extend(setting,option);
        //支持同时多个元素
        //谁调用this指向谁
        $.each(this,function(index,obj){
            //内部函数使用外部函数的变量，形成闭包
            $("<span/>").html("+").css({"course":"pointer","color":setting.color}).click(function(){
                //按钮点击时
                $(obj).width($(obj).width() + setting.length);
                //判断用户是否指定了回调事件
                //如果没有指定就是null
                //为false的情况:0，+0，-0，NaN,undefined,null,""
                if (setting.callback){
                   setting.callback(obj);
                } 

            }).insertAfter(obj);  
        }); //括号里必须提供参数，在何处插入，必需。规定在何处插入被选元素。

    };

}));