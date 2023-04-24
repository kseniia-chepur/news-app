function dateConverter(publishedDate) {
  const fullDate = new Date(publishedDate);
  const year = fullDate.getFullYear();
  const month = [
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
  ][fullDate.getMonth()];
  const date = fullDate.getDate();

  return `${month} ${date}, ${year}`;
}

export default dateConverter;
