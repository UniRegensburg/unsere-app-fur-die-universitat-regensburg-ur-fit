export function addCategories(mensaData) {
  for (let day in mensaData) {
    for (let meal in mensaData[day]) {
      mensaData[day][meal].contentInfo = mensaData[day][meal].contentInfo.split(
        ","
      );
      mensaData[day][meal].additionalInfo = mensaData[day][
        meal
      ].additionalInfo.split(",");
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
          case "B":
            mensaData[day][meal].contentInfo[contentInfo] = "Bio";
            break;
          default:
            mensaData[day][meal].contentInfo[contentInfo] = "";
        }
      }
      for (let infoIndex in mensaData[day][meal].additionalInfo) {
        switch (mensaData[day][meal].additionalInfo[infoIndex]) {
          case "1":
            mensaData[day][meal].additionalInfo[infoIndex] = "Farbstoff";
            break;
          case "2":
            mensaData[day][meal].additionalInfo[infoIndex] =
              "Konservierungsstoff";
            break;
          case "3":
            mensaData[day][meal].additionalInfo[infoIndex] =
              "Antioxidationsmittel";
            break;
          case "4":
            mensaData[day][meal].additionalInfo[infoIndex] =
              "Geschmacksverstärker";
            break;
          case "5":
            mensaData[day][meal].additionalInfo[infoIndex] = "geschwefelt";
            break;
          case "6":
            mensaData[day][meal].additionalInfo[infoIndex] = "geschwärzt";
            break;
          case "7":
            mensaData[day][meal].additionalInfo[infoIndex] = "gewachst";
            break;
          case "8":
            mensaData[day][meal].additionalInfo[infoIndex] = "Phosphat";
            break;
          case "9":
            mensaData[day][meal].additionalInfo[infoIndex] =
              "Süssungsmittel Saccharin";
            break;
          case "10":
            mensaData[day][meal].additionalInfo[infoIndex] =
              "Süssungsmittel Aspartam";
            break;
          case "11":
            mensaData[day][meal].additionalInfo[infoIndex] =
              "Süssungsmittel Cyclamat";
            break;
          case "12":
            mensaData[day][meal].additionalInfo[infoIndex] =
              "Süssungsmittel Acesulfam";
            break;
          case "13":
            mensaData[day][meal].additionalInfo[infoIndex] = "chininhaltig";
            break;
          case "14":
            mensaData[day][meal].additionalInfo[infoIndex] = "coffeinhaltig";
            break;
          case "15":
            mensaData[day][meal].additionalInfo[infoIndex] =
              "gentechnisch verändert";
            break;
          case "16":
            mensaData[day][meal].additionalInfo[infoIndex] = "Sulfite";
            break;
          case "17":
            mensaData[day][meal].additionalInfo[infoIndex] = "Phenylalanin";
            break;
          case "AA":
            mensaData[day][meal].additionalInfo[infoIndex] = "Weizengluten";
            break;
          case "AB":
            mensaData[day][meal].additionalInfo[infoIndex] = "Roggengluten";
            break;
          case "AC":
            mensaData[day][meal].additionalInfo[infoIndex] = "Gerstengluten";
            break;
          case "AD":
            mensaData[day][meal].additionalInfo[infoIndex] = "Hafergluten";
            break;
          case "AE":
            mensaData[day][meal].additionalInfo[infoIndex] = "Dinkelgluten";
            break;
          case "AF":
            mensaData[day][meal].additionalInfo[infoIndex] = "Kamutgluten";
            break;
          case "B":
            mensaData[day][meal].additionalInfo[infoIndex] = "Krebstiere";
            break;
          case "C":
            mensaData[day][meal].additionalInfo[infoIndex] = "Eier";
            break;
          case "D":
            mensaData[day][meal].additionalInfo[infoIndex] = "Fisch";
            break;
          case "E":
            mensaData[day][meal].additionalInfo[infoIndex] = "Erdnüsse";
            break;
          case "F":
            mensaData[day][meal].additionalInfo[infoIndex] = "Soja";
            break;
          case "G":
            mensaData[day][meal].additionalInfo[infoIndex] =
              "Milch und Milchprodukte";
            break;
          case "HA":
            mensaData[day][meal].additionalInfo[infoIndex] = "Mandel";
            break;
          case "HB":
            mensaData[day][meal].additionalInfo[infoIndex] = "Haselnuss";
            break;
          case "HC":
            mensaData[day][meal].additionalInfo[infoIndex] = "Walnuss";
            break;
          case "HD":
            mensaData[day][meal].additionalInfo[infoIndex] = "Cashew";
            break;
          case "HE":
            mensaData[day][meal].additionalInfo[infoIndex] = "Pecannuss";
            break;
          case "HF":
            mensaData[day][meal].additionalInfo[infoIndex] = "Paranuss";
            break;
          case "HG":
            mensaData[day][meal].additionalInfo[infoIndex] = "Pistazie";
            break;
          case "HH":
            mensaData[day][meal].additionalInfo[infoIndex] = "Macadamianuss";
            break;
          case "HI":
            mensaData[day][meal].additionalInfo[infoIndex] = "Queenslandnuss";
            break;
          case "I":
            mensaData[day][meal].additionalInfo[infoIndex] = "Sellerie";
            break;
          case "J":
            mensaData[day][meal].additionalInfo[infoIndex] = "Senf";
            break;
          case "K":
            mensaData[day][meal].additionalInfo[infoIndex] = "Sesamsamen";
            break;
          case "L":
            mensaData[day][meal].additionalInfo[infoIndex] =
              "Schwefeldioxid und Sulfite";
            break;
          case "M":
            mensaData[day][meal].additionalInfo[infoIndex] = "Lupinen";
            break;
          case "N":
            mensaData[day][meal].additionalInfo[infoIndex] = "Weichtiere";
            break;
          case "O":
            mensaData[day][meal].additionalInfo[infoIndex] = "Nitrat";
            break;
          case "P":
            mensaData[day][meal].additionalInfo[infoIndex] = "Nitritpökelsalz";
            break;
          default:
            mensaData[day][meal].additionalInfo.splice(infoIndex, 1);
        }
      }
    }
  }
  return mensaData;
}

export function filterMensaData(mensaData, day, meal) {
  switch (day) {
    case "Mo":
      return mensaData.Monday.filter((item) => {
        if (item.category === meal) {
          return item;
        }
        return null;
      });
    case "Di":
      return mensaData.Tuesday.filter((item) => {
        if (item.category === meal) {
          return item;
        }
        return null;
      });
    case "Mi":
      return mensaData.Wednesday.filter((item) => {
        if (item.category === meal) {
          return item;
        }
        return null;
      });
    case "Do":
      return mensaData.Thursday.filter((item) => {
        if (item.category === meal) {
          return item;
        }
        return null;
      });
    case "Fr":
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
