// js 코드를 html 어디에 있던지 정상 실행되도록 하기 위한 시작코드
document.addEventListener("DOMContentLoaded", () => {
  const btn_login = document.querySelector("button.btn_login");
  const input_username = document.querySelector("input[name='username']"); // input 박스의 속성이 '' 인 친구
  const input_password = document.querySelector("#password"); // input 은 아이디로 많이 씀

  const txt_username = input_username.value;
  const txt_password = input_username.value;
  // btn_login 이 null 이 아닐때 실행해라
  btn_login?.addEventListener("click", () => {
    const txt_username = input_username.value;
    const txt_password = input_username.value;
  });
});
