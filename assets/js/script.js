// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var nineAM = document.getElementById('09');
var tenAM = document.getElementById('10');
var elevenAM = document.getElementById('11');
var twelvePM = document.getElementById('12');
var onePM = document.getElementById('13');
var twoPM = document.getElementById('14');
var threePM = document.getElementById('15');
var fourPM = document.getElementById('16');
var fivePM = document.getElementById('17');
var btn = document.getElementsByClassName('btn');
var timeBlocks = document.querySelectorAll('.time-block');

var today = dayjs();
var tasks = [];

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // Supposed to be the function that will re-display tasks in their sections on reload. It is console logging correctly, just not sure how to get them to display in the right place.
  // function displayTasks() {
  //   for (var i = 0; i < tasks.length; i++) {
  //     task = tasks[i];
  //     console.log(task);
  //     // if ($(task))
  //   }
  // }
  
  // Function that grabs the previously entered tasks from local storage on reload and makes them available to the tasks variable again.
  // function loadTasks() {
  //   var storedTasks = JSON.parse(localStorage.getItem('tasks'));
  //   if (storedTasks !== null) {
  //     tasks = storedTasks;
  //   }
  //   displayTasks();
  // }

  // Takes the tasks variable and stores it in local storage with JSON
//   function storeTasks() {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

/*Adds click funtionality to all buttons. Button input is drawn through DOM by accessing the button's
previousElementSibling which is the text area, and grabs the value from that. The function is 
supposed to end if the textarea is empty and the button is clicked but it's currently still logging
 an empty input. It then calls the storeTasks function to get the input into local storage. The displayTasks function is supposed to be what will re-enter the tasks upon reload, unfinished.
*/
  $(btn).click(function(event) {
  event.preventDefault();
  var tasksInput = this.previousElementSibling.value;
  var timeSlot = this.parentElement.getAttribute('id');
  if (tasksInput == undefined) {
    return;
  }
  localStorage.setItem(timeSlot, tasksInput);
  console.log(timeSlot);
  console.log(tasksInput);
});

  

  // This function applies the classes of present, past, and future to the timeBlocks variable if it's id attribute aligns with the daysjs 24 hour time format. Using Jquery and the .attr('id') method was found at https://stackoverflow.com/questions/19304343/using-the-id-for-if-condition the top rated answer posted by Mike H.
  function blockClass() {
    for (var i = 0; i < timeBlocks.length; i++) {
      if ($(timeBlocks[i]).attr('id') == today.format('HH')) {
       $(timeBlocks[i]).addClass("present");
      } else if ($(timeBlocks[i]).attr('id') < today.format('HH')) {
        $(timeBlocks[i]).addClass("past");
      } else {
        $(timeBlocks[i]).addClass("future");
      }
    };
  }
  blockClass();
  // loadTasks();
  
  // Jquery call to the currentDay ID to display the dayjs var function in specified format
  $('#currentDay').text(today.format('MMMM D, YYYY HH:mm A'));
});
