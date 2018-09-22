(function () {

    var bv = new Bideo();
    bv.init({
        // Video element
        videoEl: document.querySelector('#background_video'),

        // Container element
        container: document.querySelector('body'),

        // Resize
        resize: true,

        // autoplay: false,

        isMobile: window.matchMedia('(max-width: 768px)').matches,

        playButton: document.querySelector('#play'),
        pauseButton: document.querySelector('#pause'),

        // Array of objects containing the src and type
        // of different video formats to add
        src: [{
                //src: '//media.html5media.info/video.mp4', //night.mp4  ////cloud.video.taobao.com/play/u/3245834217/p/1/e/6/t/1/50021244141.mp4
                src: 'video/Dc.mp4',
                type: 'video/mp4'
            },
            {
                src: 'night.webm',
                type: 'video/webm;codecs="vp8, vorbis"'
            }
        ],

        // What to do once video loads (initial frame)
        onLoad: function () {
            document.querySelector('#video_cover').style.display = 'none';
        }
    });
}());