function displaySanJuanTime() {
  let sanElement = document.querySelector("#san-juan");
  let sanTime = sanElement.querySelector(".time");
  let sanDate = sanElement.querySelector(".date");
  let sanTimeInfo = moment().tz("America/Argentina/San_Juan");
  sanDate.innerHTML = sanTimeInfo.format("dddd, MMMM Do, YYYY");
  sanTime.innerHTML = sanTimeInfo.format("hh:mm:ss [<small>]A[</small>]");
}
setInterval(displaySanJuanTime, 1000);
function displayManilaTime() {
  let manilaElement = document.querySelector("#manila");
  let manilaTime = manilaElement.querySelector(".time");
  let manilaDate = manilaElement.querySelector(".date");
  let manilaTimeInfo = moment().tz("Asia/Manila");
  manilaDate.innerHTML = manilaTimeInfo.format("dddd, MMMM Do, YYYY");
  manilaTime.innerHTML = manilaTimeInfo.format("hh:mm:ss [<small>]A[</small>]");
}
setInterval(displayManilaTime, 1000);

function displayMontrealTime() {
  let montrealElement = document.querySelector("#montreal");
  let montrealTime = montrealElement.querySelector(".time");
  let montrealDate = montrealElement.querySelector(".date");
  let montrealTimeInfo = moment().tz("America/Montreal");
  montrealDate.innerHTML = montrealTimeInfo.format("dddd, MMMM Do, YYYY");
  montrealTime.innerHTML = montrealTimeInfo.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}
setInterval(displayMontrealTime, 1000);
