export default function cutLongString(string, desiredLength) {
  if (string > desiredLength) {
    return string.substring(0, desiredLength - 3) + "...";
  } else {
    return string;
  }
}
