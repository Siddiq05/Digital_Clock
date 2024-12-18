const timer = () => {
  let date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

  hours = hours > 12 ? hours - 12 : hours;
  hours = hours == 0 ? (hours = 12) : hours;
  AM = hours > 12 ? "AM" : "PM";

  document.querySelector(".hrs").innerText = `${hours
    .toString()
    .padStart(2, "0")}  :`;

  document.querySelector(".mins").innerText = ` ${minutes
    .toString()
    .padStart(2, "0")}  :`;

  document.querySelector(".secs").innerText = ` ${seconds
    .toString()
    .padStart(2, "0")}`;
  document.querySelector(".AM").innerText = ` ${AM}`;
};
setInterval(timer, 1000);
timer();
