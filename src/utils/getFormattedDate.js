export const getFormattedDate = (stringDate) => {
  const date = stringDate ? new Date(stringDate) : new Date();
  const day = date.getUTCDate();
  const month = date.getUTCMonth();
  const year = date.getUTCFullYear();

  return new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(new Date(year, month, day));
};
