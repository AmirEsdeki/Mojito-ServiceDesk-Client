export default function dateDiff(date) {
  date = Date.parse(date);
  // get total seconds between the times
  var delta = Math.abs(Date.now() - date) / 1000;

  // calculate (and subtract) whole days
  var days = Math.floor(delta / 86400);
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // what's left is seconds
  var seconds = delta % 60; // in theory the modulus is not required
  if (days == 0 && hours == 0 && minutes == 0) return " " + "چند ثانیه پیش";
  else if (days == 0 && hours == 0) return " " + `${minutes} دقیقه پیش`;
  else if (days == 0 && minutes == 0) return " " + `${hours} ساعت پیش`;
  else if (days == 0) return " " + `${hours} ساعت و ${minutes} دقیقه پیش`;
  else return " " + `${days} روز پیش`;
}
