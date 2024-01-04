export function calculateTimeDifference(time) {
  const dateTime =
   typeof time === "string" ? new Date(time) : time;
  const currentTime = new Date();
  const timeDifferenceInMilliSecond = currentTime - dateTime;

  const minutesDifference
   = Math.floor(timeDifferenceInMilliSecond / (1000 * 60));
  const hoursDifference
   = Math.floor(timeDifferenceInMilliSecond / (1000 * 60 * 60));
  const daysDifference
   = Math.floor(timeDifferenceInMilliSecond / (1000 * 60 * 60 * 24));

  if (minutesDifference < 60) {
    return `${minutesDifference} minutes ago`;
  } else if (hoursDifference < 24) {
    return `${hoursDifference} hours ago`;
  } else {
    return `${daysDifference} days ago`;
  }
}