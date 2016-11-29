
/* 登陆对话框 */
dialogs.login = function () {
    if($("#signin-dlg").length == 0){
        var html = $("#dlg-signin-tmpl").html();
        $("body").append(html);

        $('#username,#password').on('input propertychange focus', function() {
            if($(this).val().length){
                $(this).next("span").css("visibility","visible");
            }else{
                $(this).next("span").css("visibility","hidden");
            }
            $(this).siblings("span:first").css("color","#37A6E9");
            $(this).parent().css("border-color","#37A6E9");
        }).on("blur",function(){
            $(this).parent().css("border-color","#C5E1F3");
            $(this).siblings("span:first").css("color","black");
        });

        //鼠标悬浮显示清空按钮
        $("[name=input-group]").hover(function(){
            if($(this).find("input").val().length){
                $("#username_cancel,#password_cancel").css("visibility","visible");
            }
        });

        //一键清空内容
        $("#username_cancel, #password_cancel").on("click",function(){
            $(this).siblings("input").val('').focus();
            $(this).css("visibility","hidden");
        });

        $("#signin-dlg").on("shown.bs.modal", function () {
            $('.user-head-img').popover('hide');
        });
    }

    $("#signin-dlg").modal();
};


/* 注册对话框 */
dialogs.signup = function () {
    if($("#signup-dlg").length == 0){

        var html = $("#dlg-signup-tmpl").html();
        $("body").append(html);

        $('#signup-username,#signup-password,#signup-email').on('input propertychange focus', function() {
            var $parent = $(this).parent(".user-signup-item");

            $parent.removeClass("error");
            $parent.next(".user-error-message").text("");

            if($(this).val().length){
                $(this).next("span").css("visibility","visible");
            }else{
                $(this).next("span").css("visibility","hidden");
            }
            $(this).siblings(".user-signup-label").addClass("active");
            $(this).parent(".user-signup-item").addClass("active");
        }).on("blur",function(){
            $(this).siblings(".user-signup-label").removeClass("active");
            $(this).parent(".user-signup-item").removeClass("active");
        });

        //一键清空内容
        $(".user-signup-cancel").on("click",function(){
            $(this).siblings("input").val('').focus();
            $(this).css("visibility","hidden");
        });

        /* 点击注册 */
        $("#signup-btn").on("click", function () {

            var username = $("#signup-username").val();
            if(username.length == 0){
                var $parent = $("#signup-username").parent(".user-signup-item");
                $parent.addClass("error");
                $parent.next(".user-error-message").text("用户名不能为空！");
                return;
            }

            var email = $("#signup-email").val();
            if(email.length==0){
                var $parent = $("#signup-email").parent(".user-signup-item");
                $parent.addClass("error");
                $parent.next(".user-error-message").text("邮箱不能为空！");
                return;
            }

            var password = $("#signup-password").val();
            if(password.length==0){
                var $parent = $("#signup-password").parent(".user-signup-item");
                $parent.addClass("error");
                $parent.next(".user-error-message").text("邮箱不能为空！");
                return;
            }

        });

        $("#signup-dlg").on("shown.bs.modal", function () {
            $('.user-head-img').popover('hide');
        });
    }else{
        $(".user-signup-item.error").removeClass("error");
        $(".user-error-message").text("");
    }

    $("#signup-dlg").modal();
};