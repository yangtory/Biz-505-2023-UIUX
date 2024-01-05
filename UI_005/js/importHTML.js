const importHTML = (tag, file) => {
  // 스캐너와 비슷한데 다름, HTTP 통신을 이용해서 XML을 요청 (XML 은 html,md의 조상님)
  const xhr = new XMLHttpRequest();
  // file 이라는 매개변수에 전달된 값을 open에 주입
  xhr.open("GET", file, true);
  xhr.onreadystatechange = () => {
    // 파일을 읽어서 할 일들을 작성
    // readyState 가 Done 이면 =  브라우저가 파일을 정상적으로 받았으면
    if (xhr.readyState === XMLHttpRequest.DONE) {
      // 응답해라
      tag.innerHTML = xhr.responseText();
    }
  };
  // 오픈된 파일을 나에게 보내죠
  xhr.send();
};
