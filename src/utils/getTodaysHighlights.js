export const getTodaysHighlights = (data) => [
  {
    name: "Wind status",
    value: data.wind_mph,
    unit: "mph",
    more_info: {
      direction: data.wind_dir,
      degree: data.wind_degree,
    },
  },
  {
    name: "Humidity",
    value: data.humidity,
    unit: "%",
  },
  {
    name: "Visibility",
    value: new Intl.NumberFormat("es").format(data.vis_miles),
    unit: "miles",
  },
  {
    name: "Air Pressure",
    value: Math.round(data.pressure_mb),
    unit: "mb",
  },
];
