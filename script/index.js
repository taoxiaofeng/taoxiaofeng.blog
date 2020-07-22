(function() {
    //动态设置 当天时间
    var date = new Date();
    var Y = date.getFullYear() + '',
        M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1 + '',
        D = date.getDate() + 1 < 10 ? '0' + date.getDate() : date.getDate() + '';
    document.getElementById('current-time').innerHTML = Y + M + D;

    // just add effect to elements
    Array.prototype.forEach.call(document.querySelectorAll('[data-ripple]'), function(element) {
        // find all elements and attach effect
        new RippleEffect(element); // element is instance of javascript element node
    });

    /**
     * 收缩左侧菜单栏
     */
    var shrinkFlag = true;
    $('#shrink-box').click(function($event) {
        shrinkFlag = !shrinkFlag;
        if (!shrinkFlag) {
            $('.main-left').removeClass('expend').addClass('collapse');
        } else {
            $('.main-left').removeClass('collapse').addClass('expend');
        }
    });
}());

function gotoBlog() {
    window.open('https://taoxiaofeng.github.io/taoxiaofeng.blog/', '_self');
};