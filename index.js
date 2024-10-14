const numbers = document.querySelectorAll(".screen span");
const main = document.querySelector("main");
const menus = document.querySelectorAll("nav span");

//on이 붙는게 두개이므로 비구조화할당을 일단 가져올 수 있다.
const [am, pm] = document.querySelectorAll(".screen em");

//1초마다 카운트
//데이트 객체로부터 시간을 뽑아와야함

setInterval(() => {
  let now = new Date();
  let hr = now.getHours();

  const data = [
    { condition: hr >= 5 && hr < 11, name: "morning" },
    { condition: hr >= 11 && hr < 16, name: "day" },
    { condition: hr >= 16 && hr < 19, name: "sunset" },
    { condition: hr >= 19 || hr < 5, name: "night" },
  ];

  data.forEach((item, index) => {
    if (item.condition) {
      main.className = "";
      main.classList.add(item.name);

      for (let menu of menus) menu.classList.remove("on");
      menus[index].classList.add("on");
    }
  });

  if (main.classList.contains("day")) {
    main.classList.add("dark-text");
  } else {
    main.classList.remove("dark_text");
  }

  //시간을 구함
  const times = setTime(now);

  //0을 붙임
  times.forEach((time, index) => getTime(time, index));
}, 1000);

function setTime(now) {
  let hr = now.getHours(); //getHourse메소드를 호출해서 현재시간 전달
  let min = now.getMinutes();
  let sec = now.getSeconds();

  return [hr, min, sec];
}

function getTime(num, index) {
  if (num < 10) num = "0" + num;
  numbers[index].innerText = num;
}
