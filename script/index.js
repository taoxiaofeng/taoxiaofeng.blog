(function() {

    // var bv = new Bideo();
    // var videoSrc = [
    //     "video/Dc.mp4",
    //     "video/fire_01.mp4",
    //     "video/sea_01.mp4",
    //     "video/sea_02.mp4",
    //     "video/sea_03.mp4",
    //     "video/sky_01.mp4",
    //     "video/sky_02.mp4",
    //     "video/xingkong_01.mp4",
    //     "video/xueshan.mp4",
    //     "video/sea_04.mp4"]
    // var randomVideo = videoSrc[videoSrc.length-1];
    // bv.init({
    //     // Video element
    //     videoEl: document.querySelector('#background_video'),

    //     // Container element
    //     container: document.querySelector('body'),

    //     // Resize
    //     resize: true,

    //     // autoplay: false,

    //     isMobile: window.matchMedia('(max-width: 768px)').matches,

    //     playButton: document.querySelector('#play'),
    //     pauseButton: document.querySelector('#pause'),

    //     // Array of objects containing the src and type
    //     // of different video formats to add
    //     src: [{
    //         //src: '//media.html5media.info/video.mp4', //night.mp4  ////cloud.video.taobao.com/play/u/3245834217/p/1/e/6/t/1/50021244141.mp4
    //         src: randomVideo,
    //         type: 'video/mp4'
    //     },
    //     {
    //         src: 'night.webm',
    //         type: 'video/webm;codecs="vp8, vorbis"'
    //     }
    //     ],

    //     // What to do once video loads (initial frame)
    //     onLoad: function () {
    //         document.querySelector('#video_cover').style.display = 'none';
    //     }
    // });

    //动态设置 当天时间
    var date = new Date();
    var Y = date.getFullYear() + '',
        M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1 + '',
        D = date.getDate() + 1 < 10 ? '0' + date.getDate() : date.getDate() + '';
    document.getElementById('current-time').innerHTML = Y + M + D;

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