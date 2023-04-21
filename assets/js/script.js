let currentTime = $("#currentDay");

// Function to display time and format it in a specific way //
function showTime() {
  let itsTime = dayjs().format("MMM DD, YYYY [at] hh:mm:ss");
  currentTime.text(itsTime);
};

// Calls function to display time on page //
showTime();
setInterval(showTime, 1000);

$(".saveBtn").click(function () {
  // Makes description sibling of save button //
  let description = $(this).siblings(".description").val();
  // Makes the time parent sibling of save button //
  let input = $(this).parent().attr("id").split("-")[1];

  // Stores user input in text area //
  localStorage.setItem(input, description);
});

// Function to figure out in real time if blocks are either class and color coded accordingly //
$(".time-block").each(function () {
  let ourHour = dayjs().format("HH");
  let blockHour = parseInt($(this).attr("id").split("-")[1]);
  console.log(ourHour);
  console.log(blockHour);

  if (blockHour == ourHour) {
    $(this).addClass("present");
  } else if (blockHour > ourHour) {
    $(this).addClass("future");
  } else {
    $(this).addClass("past");
  } 
});

// Keeps/Retrieves stored text of each text area //
$("#hour-9 .description").val(localStorage.getItem("9"));
$("#hour-10 .description").val(localStorage.getItem("10"));
$("#hour-11 .description").val(localStorage.getItem("11"));
$("#hour-12 .description").val(localStorage.getItem("12"));
$("#hour-13 .description").val(localStorage.getItem("13"));
$("#hour-14 .description").val(localStorage.getItem("14"));
$("#hour-15 .description").val(localStorage.getItem("15"));
$("#hour-16 .description").val(localStorage.getItem("16"));
$("#hour-17 .description").val(localStorage.getItem("17"));