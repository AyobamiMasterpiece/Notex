import { v4 as uuidv4 } from "uuid";

function getCurrentDate() {
  const currentDate = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[currentDate.getMonth()];
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();

  return `${month} ${date}, ${year}`;
}

// Example usage:
function getCurrentTime12Hour() {
  const currentDate = new Date();
  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12; // Midnight
  }

  // Format with leading zero for single-digit minutes
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  // Create the 12-hour time string
  const time12Hour = `${hours}:${formattedMinutes} ${ampm}`;

  return time12Hour;
}
export { getCurrentTime12Hour, getCurrentDate, Note };

class Note {
  constructor(note, time, title) {
    this.time = time || getCurrentTime12Hour();
    this.title = title || "";
    this.note = note || "";

    // this.key = new Date();
  }

  getTime() {
    return `${this.time}, ${getCurrentDate()}`;
  }
}
