function displayTime() {
  let sanElement = document.querySelector("#san-juan");
  let sanTime = sanElement.querySelector(".time");
  let sanDate = sanElement.querySelector(".date");
  let sanTimeInfo = moment().tz("America/Argentina/San_Juan");
  sanDate.innerHTML = sanTimeInfo.format("dddd, MMMM Do, YYYY");
  sanTime.innerHTML = sanTimeInfo.format("hh:mm:ss [<small>]A[</small>]");

  let manilaElement = document.querySelector("#manila");
  let manilaTime = manilaElement.querySelector(".time");
  let manilaDate = manilaElement.querySelector(".date");
  let manilaTimeInfo = moment().tz("Asia/Manila");
  manilaDate.innerHTML = manilaTimeInfo.format("dddd, MMMM Do, YYYY");
  manilaTime.innerHTML = manilaTimeInfo.format("hh:mm:ss [<small>]A[</small>]");

  let montrealElement = document.querySelector("#montreal");
  let montrealTime = montrealElement.querySelector(".time");
  let montrealDate = montrealElement.querySelector(".date");
  let montrealTimeInfo = moment().tz("America/Montreal");
  montrealDate.innerHTML = montrealTimeInfo.format("dddd, MMMM Do, YYYY");
  montrealTime.innerHTML = montrealTimeInfo.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}
displayTime();
let interval = setInterval(displayTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  clearInterval(interval);

  updateTime(cityTimeZone);
  interval = setInterval(() => updateTime(cityTimeZone), 1000);
}

function updateTime(timezone) {
  let cityName = timezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(timezone);
  let citiesElement = document.querySelector("#allcities");
  citiesElement.innerHTML = ` <div class="cities">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
           </div>
          <div class="time">${cityTime.format(
            "hh:mm:ss"
          )}<small>${cityTime.format(" A")}</small></div>
                 </div>
                 <footer>
              <a href="https://serene-liger-8d0772.netlify.app/"> Back to Home page </a></footer>
  `;
}
let citiesSelect = document.querySelector("#cityselect");
citiesSelect.addEventListener("change", updateCity);
