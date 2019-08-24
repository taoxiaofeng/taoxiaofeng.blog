/**
 * 打开github的相关操作
 */
function openGithub() {
    var shadeNode = $('#shade');
    shadeNode.fadeIn(666);
    shadeNode.css('display', 'flex');
    shadeNode.append(createGithubModal);
    dragUtil('github-modal');
}


function createGithubModal() {
    return `
    <div class="github-modal" id="github-modal">
        <div class="modal-head">
            <span>Github</span>
            <span class="modal-close" onclick="closeGithubModal()">X</span>
        </div>
        <div class="modal-body">
            <div class="modal-title">
                <span>欢迎您</span>
                <a href="https://taoxiaofeng.github.io/taoxiaofeng.blog/">点击打开浏览博客首页</a>
            </div>
            <video src="video/xingkong.mp4" controls="controls"></video>
        </div>
    <div>`
}

function closeGithubModal() {
    $('#shade').fadeOut(666);
    $('#shade').css('display', 'none')
    $('#github-modal').remove();
}
