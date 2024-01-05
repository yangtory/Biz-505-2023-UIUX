// DOM 객체를 변수에 할당하여 JS 코드에서 사용할 준비하기
const nav_home = document.querySelector("li.main_nav.home");
const nav_login = document.querySelector("li.main_nav.login");
const nav_join = document.querySelector("li.main_nav.join");

//event 처리기(handler) 함수 선언
// 현재 nav_click_handler 는 nav 의 3가지 요소에게 공통으로
// 연결이 되어 있다
// nav 3가지 요소중 어떤것을 클릭해도 동일한 alert 가 작동된다
// 이 때 어떤 요소가 클릭되었는지 확인하기 위하여
// event 라는 매개변수를 설정하였다
// nav 3가지 요소(li tag) 중 어떤 부분이 클릭이 되면
// nav_click_handler() 함수가 실행되고, 클릭된 요소의 정보가
// event 매개변수를 통하여 전달된다
// js 에서는 매개변수 사용이 선택적이다, 비어 있어도 된다.
const nav_click_handler = (event) => {
  // 클릭된 요소 가져오기
  const target = event.target;
  // 요소의 정보를 text 로 전달
  const nav_text = target.innerText;
  alert(nav_text + " 메뉴 클릭");
};

// 클릭이 발생하면 함수를 실행하렴, 클릭된 친구가 이벤트 매개변수에 전달된다
nav_home.addEventListener("click", nav_click_handler);
nav_login.addEventListener("click", nav_click_handler);
nav_join.addEventListener("click", nav_click_handler);
