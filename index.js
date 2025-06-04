const numbers = document.querySelectorAll(".screen span");
const main = document.querySelector("main");
const menus = document.querySelectorAll("nav span");

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

      for (let menu of menus) menu.classList.remove("active");
      menus[index].classList.add("active");
    }
  });

  if (main.classList.contains("day")) {
    main.classList.add("dark-text");
  } else {
    main.classList.remove("dark_text");
  }

  const times = setTime(now);

  times.forEach((time, index) => getTime(time, index));
}, 1000);

function setTime(now) {
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  return [hr, min, sec];
}

function getTime(num, index) {
  if (num < 10) num = "0" + num;
  numbers[index].innerText = num;
}
