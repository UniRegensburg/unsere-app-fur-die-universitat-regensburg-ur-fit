export function addCategories(mensaData) {
  for (let day in mensaData) {
    for (let meal in mensaData[day]["data"]) {
      mensaData[day]["data"][meal].labels = mensaData[day]["data"][
        meal
      ].labels.split(",");
      for (let label in mensaData[day]["data"][meal].labels) {
        switch (mensaData[day]["data"][meal].labels[label]) {
          case "V":
            mensaData[day]["data"][meal].labels[label] = "Vegetarisch";
            break;
          case "VG":
            mensaData[day]["data"][meal].labels[label] = "Vegan";
            break;
          case "G":
            mensaData[day]["data"][meal].labels[label] = "Geflügel";
            break;
          case "S":
            mensaData[day]["data"][meal].labels[label] = "Schwein";
            break;
          case "R":
            mensaData[day]["data"][meal].labels[label] = "Rind";
            break;
          case "L":
            mensaData[day]["data"][meal].labels[label] = "Lamm";
            break;
          case "W":
            mensaData[day]["data"][meal].labels[label] = "Wild";
            break;
          case "F":
            mensaData[day]["data"][meal].labels[label] = "Fisch";
            break;
          case "A":
            mensaData[day]["data"][meal].labels[label] = "Alkohol";
            break;
          default:
            mensaData[day]["data"][meal].labels[label] = "";
        }
      }
    }
  }
  return mensaData;
}

export function filterMensaData(mensaData, day, meal) {
  return mensaData
    .find((item) => {
      return item.day === day;
    })
    .data.filter((item) => {
      if (item.category.charAt(0) === meal) {
        return item;
      }
      return null;
    });
}
