document.addEventListener("DOMContentLoaded", () => {
  const inputId = document.querySelector("div.id input");
  const inputPw = document.querySelector("div.pw input");
  const loginBtn = document.querySelector("div.btn button");

  loginBtn?.addEventListener("click", () => {
    const idValue = inputId.value;
    const pwValue = inputPw.value;

    if (!idValue) {
      alert("아이디를 입력하세요");
      inputId.select();
    } else if (!pwValue) {
      alert("비밀번호를 입력하세요");
      inputPw.select();
    }
  });
});
