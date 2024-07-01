document.addEventListener("DOMContentLoaded", () => {
  const currentTimeUTC = document.getElementById("currentTimeUTC");
  const currentDay = document.getElementById("currentDay");

  function updateTime() {
    const now = new Date();
    currentTimeUTC.textContent =
      now.toISOString().split("T")[1].split(".")[0] + " UTC";
  }

  function updateDay() {
    const now = new Date();
    const options = { weekday: "long" };
    currentDay.textContent = new Intl.DateTimeFormat("en-US", options).format(
      now
    );
  }

  updateDay();
  updateTime();
  setInterval(updateTime, 1000);
});
