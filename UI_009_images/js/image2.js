document.addEventListener("DOMContentLoaded", () => {
  const img_list_box = document.querySelector("div.image_list");

  // img list 생성하여 div.image_list 에 4 개의 이미지를 넣어줌
  for (let i = 0; i < 4; i++) {
    const src = `./images/0${i + 1}.jpg`;
    console.log(src);
    const img_item_box = document.createElement("DIV");
    img_item_box.classList.add("image_item");

    const img_tag = document.createElement("IMG");
    img_tag.src = src;
    img_item_box.appendChild(img_tag); // 이미지를 아이템 박스에 추가
    img_list_box.appendChild(img_item_box); // 리스트에 추가
  }

  // 화면에 그려진 전체 image list 중에서 첫번째 요소만 selector 하기
  const image_first = document.querySelector("div.image_list img");
  // 대표 이미지 생성, html image_view에도 img 태그를 만들어야함
  const view_image = document.createElement("IMG");
  // 첫번째 이미지 화면에 보여주기
  view_image.src = image_first.src;
  document.querySelector("div.image_view").appendChild(view_image);

  img_list_box.addEventListener("click", (e) => {
    const img_view = document.querySelector("div.image_view img");
    const target = e.target;
    const img_src = target.src;
    img_view.src = img_src;
  });
});
