export const getTodaysHighlights = (current) => [
  {
    name: "Wind status",
    value: new Intl.NumberFormat("es").format(current.wind_mph),
    unit: "mph",
    more_info: {
      direction: current.wind_dir,
      degree: current.wind_degree,
    },
  },
  {
    name: "Humidity",
    value: current.humidity,
    unit: "%",
  },
  {
    name: "Visibility",
    value: new Intl.NumberFormat("es").format(current.vis_miles),
    unit: "miles",
  },
  {
    name: "Air Pressure",
    value: Math.round(current.pressure_mb),
    unit: "mb",
  },
];
