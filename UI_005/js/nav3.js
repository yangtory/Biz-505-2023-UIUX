const nav_list = document.querySelectorAll("li.main_nav");

nav_list.forEach((item) => {
  item.addEventListener("click", (event) => {
    const target = event.target;
    const nav_text = target.innerText;
    alert(nav_text + " 메뉴 클릭");
  }); //addEvent
}); // forEach
