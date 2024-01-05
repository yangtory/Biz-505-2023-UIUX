// li.main_nav 에 있는 모든 클래스를 선택, 리스트 타입
const nav_list = document.querySelectorAll("li.main_nav");
// 밑에는 DOM 타입
// const nav_login = document.querySelector("li.main_nav.login");
// const nav_join = document.querySelector("li.main_nav.join");

const nav_click_handler = (event) => {
  const target = event.target;
  const nav_text = target.innerText;
  alert(nav_text + " 메뉴 클릭");
};

// 1번째방법
// nav_list[0].addEventListener("click", nav_click_handler);
// nav_list[1].addEventListener("click", nav_click_handler);
// nav_list[2].addEventListener("click", nav_click_handler);

// 2번째 방법
// for (let i = 0; i < nav_list.length; i++) {
//   nav_list[i].addEventListener("click", nav_click_handler);
// }

// 3번째 방법
// const add_event = (item) => {
//   item.addEventListener("click", nav_click_handler);
// };
// //확장된 for문 ()안에 할 일이 들어간다
// nav_list.forEach(add_event);

// 4번째 방법
// forEach() 안에 익명함수, 분홍색 괄호는 함수
// 몇개인지 모르겟지만 nav_list 를 펼쳐놓고 첫번째 item 을 매개변수에 넣고 실행시킨다
// item 은 nav_list 의 아이템임
// 매개변수 안에 함수 자체를 주입함, 이 방법을 많이 사용함
/*
  JS 에서는 함수의 매개변수로 직접 함수를 전달할수 있다.
*/
nav_list.forEach((item) => {
  item.addEventListener("click", nav_click_handler);
});
