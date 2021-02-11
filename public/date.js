window.onload = function () {
  generateDate();
};
function generateDate() {
  var today = new Date();
  var month = new Array(12);
  month[0] = 'Jan';
  month[1] = 'Feb';
  month[2] = 'Mar';
  month[3] = 'Apr';
  month[4] = 'May';
  month[5] = 'Jun';
  month[6] = 'Jul';
  month[7] = 'Aug';
  month[8] = 'Sep';
  month[9] = 'Oct';
  month[10] = 'Nov';
  month[11] = 'Dec';
  var monthName = month[today.getMonth()];
  console.log(monthName);

  // var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var date = today.getDate() + ' / ' + monthName;

  var dateTime = date;
  console.log(dateTime);

  var weekday = new Array(7);
  weekday[0] = 'Sunday';
  weekday[1] = 'Monday';
  weekday[2] = 'Tuesday';
  weekday[3] = 'Wednesday';
  weekday[4] = 'Thursday';
  weekday[5] = 'Friday';
  weekday[6] = 'Saturday';

  var dayOfTheWeek = weekday[today.getDay()];
  console.log(dayOfTheWeek);

  var toDaysDate = (document.getElementById('theDate').innerHTML = dateTime);
  var toDaysDay = (document.getElementById('theWeekDay').innerHTML = dayOfTheWeek);
}
