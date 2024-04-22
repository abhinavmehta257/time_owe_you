export default function epochToDateTime(epochTimestamp) {
  if (!epochTimestamp || isNaN(epochTimestamp)) {
    return "Invalid input";
  }

  // Convert to milliseconds (Unix timestamps are in seconds)
  const date = new Date(epochTimestamp * 1000);

  // Get individual date and time components
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero-indexed
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);

  // Array of abbreviated month names
  const monthAbbreviations = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the abbreviated month name
  const monthAbbr = monthAbbreviations[date.getMonth()];

  // Create the formatted date and time string
  const formattedDateTime = `${monthAbbr} ${day}, ${year} ${hours}:${minutes}`;

  return formattedDateTime;
}

// Test the function with an epoch timestamp
const epochTimestamp = 1618302484; // Example epoch timestamp
console.log(epochToDateTime(epochTimestamp)); // Output: "Apr 13, 2021 09:28"
