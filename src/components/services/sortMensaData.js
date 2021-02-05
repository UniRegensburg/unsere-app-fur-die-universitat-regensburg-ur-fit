export function addCategories(mensaData) {
  for (let day in mensaData) {
    for (let meal in mensaData[day]) {
      mensaData[day][meal].contentInfo = mensaData[day][meal].contentInfo.split(
        ","
      );
      for (let contentInfo in mensaData[day][meal].contentInfo) {
        switch (mensaData[day][meal].contentInfo[contentInfo]) {
          case "V":
            mensaData[day][meal].contentInfo[contentInfo] = "Vegetarisch";
            break;
          case "VG":
            mensaData[day][meal].contentInfo[contentInfo] = "Vegan";
            break;
          case "G":
            mensaData[day][meal].contentInfo[contentInfo] = "Geflügel";
            break;
          case "S":
            mensaData[day][meal].contentInfo[contentInfo] = "Schwein";
            break;
          case "R":
            mensaData[day][meal].contentInfo[contentInfo] = "Rind";
            break;
          case "L":
            mensaData[day][meal].contentInfo[contentInfo] = "Lamm";
            break;
          case "W":
            mensaData[day][meal].contentInfo[contentInfo] = "Wild";
            break;
          case "F":
            mensaData[day][meal].contentInfo[contentInfo] = "Fisch";
            break;
          case "A":
            mensaData[day][meal].contentInfo[contentInfo] = "Alkohol";
            break;
          default:
            mensaData[day][meal].contentInfo[contentInfo] = "";
        }
      }
    }
  }
  console.log(mensaData);
  return mensaData;
}

export function filterMensaData(mensaData, day, meal) {
  switch (day) {
    case "Monday":
      return mensaData.Monday.filter((item) => {
        if (item.category === meal) {
          return item;
        }
        return null;
      });
    case "Tuesday":
      return mensaData.Tuesday.filter((item) => {
        if (item.category === meal) {
          return item;
        }
        return null;
      });
    case "Wednesday":
      return mensaData.Wednesday.filter((item) => {
        if (item.category === meal) {
          return item;
        }
        return null;
      });
    case "Thursday":
      return mensaData.Thursday.filter((item) => {
        if (item.category === meal) {
          return item;
        }
        return null;
      });
    case "Friday":
      return mensaData.Friday.filter((item) => {
        if (item.category === meal) {
          return item;
        }
        return null;
      });
    default:
      break;
  }
}
