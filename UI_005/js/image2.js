// 매직스트링 대신 변수 선언해서 사용하기
const IMG_TAG_NAME = "IMG";
// 자바스크립트의 데이터 객체
const ALT_TEXT = {
  인증사진: "인증사진",
  스피츠: "스피츠",
  바라보기: "바라보기",
  눈치보기: "눈치보기",
  놀아죠: "놀아죠",
  첫만남: "첫_만남",
};
const img_container = document.querySelector("section.img_container");
const img_container_click_handler = (event) => {
  const target = event.target;
  const tag_name = target.tagName;
  if (tag_name === IMG_TAG_NAME) {
    // img 의 alt는 getAttribute 함수를 통해 가져옴
    const alt_text = target.getAttribute("alt");
    if (alt_text === ALT_TEXT.인증사진) {
      // 01.html 파일을 읽어서 innerHTML 에 부착시켜라
      importHTML(img_container, "./01.html");
    } else if (alt_text === ALT_TEXT.스피츠) {
      importHTML(img_container, "./02.html");
    } else if (alt_text === ALT_TEXT.바라보기) {
      importHTML(img_container, "./03.html");
    }
  }
};
img_container.addEventListener("click", img_container_click_handler);
