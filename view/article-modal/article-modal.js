/**
 * 打开github的相关操作
 */
function openArticleModal() {
    var shadeNode = $('#shade');
    shadeNode.fadeIn(666);
    shadeNode.css('display', 'flex');
    shadeNode.append(createArticleModal);
    setCategory();
    dragUtil('article-modal');
}


function createArticleModal() {
    return `
    <div class="article-modal" id="article-modal">
        <div class="modal-head">
            <span>文章类别</span>
            <span class="modal-close" onclick="closeArticlebModal()">X</span>
        </div>
        <div class="modal-body">
            <div class="article-category" id="article-category"></div>
            <div class="article-preview"></div>
        </div>
    <div>`
}

function closeArticlebModal() {
    $('#shade').fadeOut(666);
    $('#shade').css('display', 'none')
    $('#article-modal').remove();
}

function setCategory() {
    var categoryNode = '';
    var categoryList = ['JavaScript','HTML','CSS','VUE','React','Angular'], len = categoryList.length;
    categoryNode += '<ul>';
        for (let i = 0; i < len; i++) {
            const el = categoryList[i];
            categoryNode += `<li>${el}</li>`
        }
    categoryNode += '</ul>';
    $('#article-category').append(categoryNode);
}
