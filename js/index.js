function addComment() {
  let nickname = document.getElementById("nickname").value.trim();
  let comment = document.getElementById("comment").value.trim();

  if (!nickname || !comment) {
      alert("닉네임과 댓글을 입력해주세요.");
      return;
  }

  let commentList = document.getElementById("comment-list");

  let commentDiv = document.createElement("div");
  commentDiv.classList.add("comment");

  let nameSpan = document.createElement("span");
  nameSpan.classList.add("nickname");
  nameSpan.textContent = nickname + " : ";

  let commentSpan = document.createElement("span");
  commentSpan.classList.add("comment-text");
  commentSpan.textContent = comment;

  commentDiv.appendChild(nameSpan);
  commentDiv.appendChild(commentSpan);

  commentList.prepend(commentDiv);

  // 입력 필드 초기화
  document.getElementById("nickname").value = "";
  document.getElementById("comment").value = "";
}
