import { formatDistance, subDays } from "date-fns";
import { v4 as uuid } from "uuid";
import "react-native-get-random-values";
function getCurrentDate(dateobj) {
  const currentDate = dateobj || new Date();
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
function getCurrentTime12Hour(dateobj) {
  const currentDate = dateobj || new Date();
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
  O; //dont know the use
  constructor(note, time, id, title) {
    this.time = time || new Date();
    this.title = title || "";
    this.note = note || "";
    this.id = id || uuid();

    // this.key = new Date();
  }

  getTime() {
    return this.time;
  }
  format() {}
  getNote() {}
  getTitle() {}
}

export function getTimeOfCreation(date) {
  let present = new Date();

  let former = date;
  if (Boolean(former) == false) {
    return;
  }

  const timestamp1 = present.getTime();
  const timestamp2 = former.getTime();

  // Calculate time difference in milliseconds
  const timeDifference = Math.abs(timestamp2 - timestamp1);

  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(timeDifference / (1000 * 3600));
  let text = "";
  if (minutes < 1) {
    text = "Just now";
  } else if (minutes < 60) {
    text = `${minutes} min ago`;
  } else if (former.getDate() == present.getDate()) {
    text = `${getTimeIn12HourFormat(former)}`;
  } else {
    text = `${getTimeIn12HourFormat(former)}, ${getCurrentDate(former)}`;
  }
  return text;
}

function getTimeIn12HourFormat(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format

  const formattedTime = `${formattedHours}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${ampm}`;
  return formattedTime;
}
