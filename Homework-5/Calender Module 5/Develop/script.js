// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function (jQuery) {
  // Save click events
  $(function() {
    // Add click event listener to save button
    $('.saveBtn').on('click', function() {
      var hourId = $(this).closest('.time-block').attr('id');
      var userInput = $(this).siblings('.description').val();
      localStorage.setItem(hourId, userInput);
    });
  });
  $(function() {
    // Loop through each time-block element
    $('.time-block').each(function() {
      // Get the id of the time-block
      var hourId = $(this).attr('id');
      // Get the hour from the hourId using string manipulation
      var hour = parseInt(hourId.split('-')[1]);
      // Get the current hour using Day.js
      var currentHour = dayjs().hour();
      // Compare the hour to the current hour and add the appropriate class
      if (hour < currentHour) {
        $(this).addClass('past');
      } else if (hour === currentHour) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
    });
  });
  $(function() {
    // Loop through each time-block element
    $('.time-block').each(function() {
      // Get the id of the time-block
      var hourId = $(this).attr('id');
      // Get the corresponding user input from local storage
      var userInput = localStorage.getItem(hourId);
      // Set the value of the textarea element
      $(this).find('.description').val(userInput);
    });
  });
  if (typeof(Storage) !== "undefined") {  
    // Storage is supported
    localStorage.setItem("myKey", "myValue");
  } else {  
    // Storage is not supported
    alert("Warning, your browser does not support web storage...");
  }

  
  
  
  
  
  
  $(function() {
  // Add click event listener to save button
  $('.saveBtn').on('click', function() {
    var hourId = $(this).closest('.time-block').attr('id');
    var userInput = $(this).siblings('.description').val();
    localStorage.setItem(hourId, userInput);
  });
});
$(function() {
  // Loop through each time-block element
  $('.time-block').each(function() {
    // Get the id of the time-block
    var hourId = $(this).attr('id');
    // Get the hour from the hourId using string manipulation
    var hour = parseInt(hourId.split('-')[1]);
    // Get the current hour using Day.js
    var currentHour = dayjs().hour();
    // Compare the hour to the current hour and add the appropriate class
    if (hour < currentHour) {
      $(this).addClass('past');
    } else if (hour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });
});
$(function() {
  // Loop through each time-block element
  $('.time-block').each(function() {
    // Get the id of the time-block
    var hourId = $(this).attr('id');
    // Get the corresponding user input from local storage
    var userInput = localStorage.getItem(hourId);
    // Set the value of the textarea element
    $(this).find('.description').val(userInput);
  });
});


 // Get 24 hr time to display for user
  day.js 

  if (typeof(Storage) !== "undefined") {  
    // Storage is supported
    localStorage.setItem('events');
  } else {  
    // Storage is not supported
    alert("Warning, your browser does not support web storage...");
  }
  var input = document.getElementById("saveCache");
localStorage.addItem("cache", input.val());
var storedValue = localStorage.getItem("cache");
function getAllItems()  
{    
    for (i = 0; i <= localStorage.length-1; i++)    
    {     
        key = sessionStorage.key(i);    
        val = sessionStorage.getItem(key);     
    }   
}  
// current date
$( "#datepicker" ).datepicker({dateFormat:"yy/mm/dd"}).datepicker("setDate",new Date());
});
