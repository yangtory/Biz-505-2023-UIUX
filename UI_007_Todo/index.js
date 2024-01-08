// 화면에 있는 컨텐츠들이 load 가 완료가 되면
/*
DOMContentLoaded : 화면에 DOM 요소들이 모두 완성되면 실행해
이 이벤트를 설정함으로써 문서(DOM)가 모두 화면에 나타난 후에
JS 를 실행하기 시작한다
JS 코드가 html 위, 아래 어디에 있던지 상관없이 실행가능하다
*/
document.addEventListener("DOMContentLoaded", () => {
  const ulContent = document.querySelector("section.list ul");
  const todoInput = document.querySelector("section.input input");
  // 요소를 갖는 리스트 만들기
  const todoList = [];

  const createLiTag = (todoContent) => {
    // <span></span> 만들기
    const spanComplete = document.createElement("SPAN");
    const spanTodo = document.createElement("SPAN");
    const spanClose = document.createElement("SPAN");
    const liTag = document.createElement("LI");

    // 위에서 만들어진 sapn tag 에 각각 class 를 부착하라
    // <span class="complete"></span>
    spanComplete.classList.add("complete");
    spanTodo.classList.add("todo");
    spanClose.classList.add("close");

    spanComplete.innerHTML = "&check;";
    spanTodo.innerHTML = todoContent; // 매개변수를 받은 친구를 가져온다
    spanClose.innerHTML = "&times;";

    liTag.appendChild(spanComplete);
    liTag.appendChild(spanTodo);
    liTag.appendChild(spanClose);

    ulContent.appendChild(liTag);
  };

  const createTodoList = () => {
    ulContent.innerHTML = "";
    // 배열 요소를 가져와서 만듬
    todoList.forEach((item) => createLiTag(item));
  };

  //   createTodoList(); 만들어놨던 배열의 요소를 보여주기 위해
  /* 
    화면상에 li tag 가 여러개 있는데 querySelector() 를 사용하여
    요청을 하면 화면에서 최초로 발견되는 요소만 select 가 된다
    */
  ulContent.addEventListener("click", (event) => {
    /* ul tag 에 event 를 설정하고, 실제로는 li tag 에 대하여
    event 코드를 처리할 것이다
    이때 실제 제일 먼저 클릭된 요소는 event.target 이 된다
    이 화면에서 실제 event.target 은 sapn tag 가 된다
    그러면 span 이 아닌 li tag 에 대하여 어떤 처리를 하려고 한다 */
    const target = event.target;
    /**
     * span tag 에 close 클래스가 부착된 친구인가?
     */
    if (target.tagName === "SPAN") {
      if (target.className === "close") {
        // 삭제할지 물어보기
        if (confirm("TODO 를 삭제할까요?")) {
          // 삭제를 허락하면 현재 span 의 부모인 LI tag 를 감추기
          target.closest("LI").style.display = "none";
        }
        return false;
      }
      // closest : 나를 감싸고 있는 부모들 중 가장 가까이 있는 부모
      /* target.closest("LI")
        클릭된 요소(target)을 감싸고 있는 부모들 중에
        가장 가까이 있는 li tag 
        */
      const liTag = target.closest("LI");
      // LI tag 에 complete 라는 클래스를 추가하라
      // <li class="complete"> 와 같은 코드가 된다
      //   liTag.classList.add("complete");
      /*
       * tag 요소에 class 속성이 설정되면 classList 에 해당 클래스명이
       * 배열로 저장되어 있다.
       * 즉, liTag(li) 에 class 속성이 있고, 값이 complete 이면 제거
       *    만약 없으면 추가
       *
       * 클래스 변수?.aaa : 클래스 변수가 null 이 아닌 경우에만 aaa 코드 실행
       * 만약 클래스변수가 null 이면 이 코드 자체가 skip
       * liTag? li tag가 null이니? null 이면 이 코드는 skip
       */
      liTag?.classList.toggle("complete");
    }
  });

  const addBtn = document.querySelector("section.input button");
  addBtn?.addEventListener("click", () => { // ? null이어도 무시해
    const todo = todoInput.value;
    if (!todo) {
      // todo 가 Falsy 이면, 비어있으면
      alert("TODO 내용을 입력해 주세요");
      todoInput.select(); // 포커스 이동
      return false;
    }
    // List(배열) 의 끝에 새로운 값 추가하기
    todoList.push(todo);
    // createTodoList();
    createLiTag(todo);
    todoInput.value = ""; // input 추가 후 비워주기
  }); //end addBtn Click
  //   const closeBtn = document.querySelector("");
}); //DOMContentLoaded
