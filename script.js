let days = document.querySelector("#days");
let minutes = document.querySelector("#minutes");
let hours = document.querySelector("#hours");
let seconds = document.querySelector("#seconds");

function updateDateTime() {
  const currentDate = new Date();
  const updateDate = new Date("2024-09-12T23:59:59");
  let finalDate = updateDate - currentDate;

  const newDays = Math.floor(finalDate / (1000 * 60 * 60 * 24));
  const newMinutes = Math.floor((finalDate % (1000 * 60 * 60)) / (1000 * 60));
  const newHours = Math.floor(
    (finalDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const newSeconds = Math.floor((finalDate % (1000 * 60)) / 1000);

  days.innerText = newDays;
  minutes.innerText = newMinutes;
  hours.innerText = newHours;
  seconds.innerText = newSeconds;
}

const interval = setInterval(updateDateTime, 1000);

if (finalDate < 0) {
  clearInterval(interval);
  document.getElementById("timer").innerText = "The event has been Started!";
}
