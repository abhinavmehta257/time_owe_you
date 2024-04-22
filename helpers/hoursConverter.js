export default function formatTimeFromMinutes(totalMinutes) {
  if (isNaN(totalMinutes)) {
    return "Invalid input";
  }
  let absMins = Math.abs(totalMinutes);
  const hours = Math.floor(absMins / 60);
  const minutes = absMins % 60;

  let formattedTime = "";

  if (hours > 0) {
    formattedTime += `${hours}hr `;
  }

  if (minutes > 0) {
    formattedTime += `${minutes}min`;
  }

  if (totalMinutes < 0) {
    formattedTime = "-" + formattedTime;
  }

  if (totalMinutes == 0) {
    formattedTime += `0min`;
  }

  return formattedTime.trim(); // Trim to remove extra whitespace
}
