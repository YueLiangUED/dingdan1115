$(function () {

    // index tab切换
    $('.order-bar').on('touchend', 'li', function (event) {
        event.preventDefault();
        var $this = $(this),
            $li = $('.order-bar li'),
            $content = $('.order-content');
        var index = $this.index(),
            thisContent = $content[index];

        $li.removeClass('act');
        $this.addClass('act');

        $content.hide();
        $(thisContent).show();
    });

    // 弹窗里的那条线
    function computeSolidHeight() {
        var $firstIcon = $('.modal-body-inf-item:first-child').find('.kd-icon');
        var $lastIcon = $('.modal-body-inf-item:last-child').find('.kd-icon');
        var firstH = $firstIcon.position().top;
        var lastH = $lastIcon.position().top;
        $('.modal-body .solid').height(lastH-firstH);
    }
       


    // 订单详情 弹窗
    $('.logistics-step').on('touchend', function () {
        $('.modal').fadeIn('fast');
        $('.mask').fadeIn('fast');
        computeSolidHeight()
        
    });

    $('.modal-close').on('touchend', function () {
        var $modal = $(this).parents('.modal');
        $modal.fadeOut('fast');
        $('.mask').fadeOut('fast');
    });

    $('.order-cancel-btn').on('touchend', function (event) {
        event.preventDefault();
        var r=confirm("是否取消订单？");
        if (r==true) {
            //点击确定 执行

        }else {
            // 点击取消 执行
        }
    });
});