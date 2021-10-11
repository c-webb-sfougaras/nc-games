export const formatDate = (unformattedDate) => {
  const newDateObj = new Date(unformattedDate);

  const day = newDateObj.getDate();
  const month = newDateObj.getMonth();
  const year = newDateObj.getFullYear();
  const timeHrs = newDateObj.getHours();
  const timeMins = newDateObj.getMinutes();

  const fullDate = `${day}/${month + 1}/${year} ${timeHrs}:${
    timeMins < 10 ? 0 : ""
  }${timeMins}`;

  return fullDate;
};
