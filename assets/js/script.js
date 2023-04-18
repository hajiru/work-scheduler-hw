let currentTime = $("#currentDay");

// Function to display time and format it in a specific way //
function showTime() {
  let itsTime = dayjs().format("MMM DD, YYYY [at] hh:mm:ss");
  currentTime.text(itsTime);
};

// Calls function to display time on page //
showTime();
setInterval(showTime, 1000);