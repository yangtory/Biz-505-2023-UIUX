/*
화면의 nav 의 요소들인 li tag 를 클릭했을때 반응하는
event handler 를 설정하고 싶다
각각의 li tag 들을 querySelector() 하여 개별적인 event handler 를 설정할수 있다.
하지만 li tag 의 개수가 많아지면 그만큼 코드의 길이가 길어진다
또한 유사한 코드가 중복되어 작성된다

이럴때 li tag의 부모 tag 요소에 event handler 를 설정하고
event bubbling 을 역으로 이용하여
event 처리를 간소화 시킨다

nav.main_nav tag에 event 를 설정하고
li tag 가 클릭되었을때 할일을 지정하였다
 */
// 리스트가아닌 하나의 변수, nav.main_nav 는 하나밖에 없우니까
const main_nav = document.querySelector("nav.main_nav");
main_nav.addEventListener("click", (event) => {
  // 제일 먼저 뉼리는 친구가 target
  const target = event.target;
  // 클릭된 그친구의 tagName이 뭐야
  const tag_name = event.target.tagName;
  const nav_text = target.innerText;
  if (tag_name === "LI") {
    // alert("네비 요소 클릭 : " + nav_text);
    if (nav_text === "HOME") {
      importHTML(img_container, "./index.html");
    } else if (nav_text === "로그인") {
      importHTML(img_container, "./login.html");
    } else if (nav_text === "회원가입") {
      importHTML(img_container, "./join.html");
    }
  }
  // alert("main_nav 클릭" + nav_text);
});
