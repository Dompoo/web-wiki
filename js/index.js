// 페이지 로드 시 저장된 댓글 불러오기
window.onload = function() {
    loadComments();
}

function loadComments() {
    const savedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    const commentList = document.getElementById("comment-list");
    commentList.innerHTML = ''; // 기존 댓글 초기화

    savedComments.forEach(item => {
        const commentDiv = createCommentElement(item.nickname, item.comment);
        commentList.appendChild(commentDiv);
    });
}

function createCommentElement(nickname, comment) {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");

    const nameSpan = document.createElement("span");
    nameSpan.classList.add("nickname");
    nameSpan.textContent = nickname + " : ";

    const commentSpan = document.createElement("span");
    commentSpan.classList.add("comment-text");
    commentSpan.textContent = comment;

    commentDiv.appendChild(nameSpan);
    commentDiv.appendChild(commentSpan);

    return commentDiv;
}

function addComment() {
    const nickname = document.getElementById("nickname").value.trim();
    const comment = document.getElementById("comment").value.trim();

    if (!nickname || !comment) {
        alert("닉네임과 댓글을 입력해주세요.");
        return;
    }

    // localStorage에서 기존 댓글 가져오기
    const savedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    
    // 새 댓글 추가
    savedComments.unshift({ nickname, comment });
    
    // localStorage에 저장
    localStorage.setItem('comments', JSON.stringify(savedComments));

    // 화면에 댓글 표시
    const commentList = document.getElementById("comment-list");
    const commentDiv = createCommentElement(nickname, comment);
    commentList.prepend(commentDiv);

    // 입력 필드 초기화
    document.getElementById("nickname").value = "";
    document.getElementById("comment").value = "";
}
