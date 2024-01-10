document.addEventListener("DOMContentLoaded", () => {
  const img_list_box = document.querySelector("div.image_list");

  img_list_box.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "IMG") {
      // 밑의 두줄 const image_view = document.querySelector("div.image_view img") 와 같다
      const image_view_box = document.querySelector("div.image_view");
      // 크게 보여줄 이미지 tag 가져오기
      const image_view = image_view_box.querySelector("img"); // image_view_box 에 있는 img 를 선택해라

      image_view.style.marginLeft = "-100%";
      image_view.style.opacity = 0;
      image_view.style.transform = "rotate(-90deg)";

      const newImage = document.createElement("IMG");
      newImage.src = target.src;

      image_view_box.appendChild(newImage);

      // 위 코드 실행된 후 1초 동안 기다렸다가
      /*
       * 비동기 실행 코드의 타이밍을 맞추기 위한 방법
       * 위에 코드가 많으면 딜레이를 더 주면됨
       */
      setTimeout(() => {
        // 이미지 뷰 박스의 첫번째 요소를 제거
        image_view_box.querySelector("IMG").remove();
      }, 1000);
      // 클린된 image 의 소스
      // const img_src = target.src;
      // image_view.src = img_src;
    }
  });
});
