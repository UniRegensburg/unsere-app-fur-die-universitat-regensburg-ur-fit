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
      for (let additionalInfo in mensaData[day][meal].additionalInfo) {
        switch (mensaData[day][meal].additionalInfo[additionalInfo]) {
          case "1":
            mensaData[day][meal].additionalInfo[additionalInfo] = "Farbstoff";
            break;
          case "2":
            mensaData[day][meal].additionalInfo[additionalInfo] =
              "Konservierungsstoff";
            break;
          case "3":
            mensaData[day][meal].additionalInfo[additionalInfo] =
              "Antioxidationsmittel";
            break;
          case "4":
            mensaData[day][meal].additionalInfo[additionalInfo] =
              "Geschmacksverstärker";
            break;
          case "5":
            mensaData[day][meal].additionalInfo[additionalInfo] = "geschwefelt";
            break;
          case "6":
            mensaData[day][meal].additionalInfo[additionalInfo] = "geschwärzt";
            break;
          case "7":
            mensaData[day][meal].additionalInfo[additionalInfo] = "gewachst";
            break;
          case "8":
            mensaData[day][meal].additionalInfo[additionalInfo] = "Phosphat";
            break;
          case "9":
            mensaData[day][meal].additionalInfo[additionalInfo] =
              "Süssungsmittel Saccharin";
            break;
          case "10":
            mensaData[day][meal].additionalInfo[additionalInfo] =
              "Süssungsmittel Aspartam";
            break;
          case "11":
            mensaData[day][meal].additionalInfo[additionalInfo] =
              "Süssungsmittel Cyclamat";
            break;
          case "12":
            mensaData[day][meal].additionalInfo[additionalInfo] =
              "Süssungsmittel Acesulfam";
            break;
          case "13":
            mensaData[day][meal].additionalInfo[additionalInfo] =
              "chininhaltig";
            break;
          case "14":
            mensaData[day][meal].additionalInfo[additionalInfo] =
              "coffeinhaltig";
            break;
          case "15":
            mensaData[day][meal].additionalInfo[additionalInfo] =
              "gentechnisch verändert";
            break;
          case "16":
            mensaData[day][meal].additionalInfo[additionalInfo] = "Sulfite";
            break;
          case "17":
            mensaData[day][meal].additionalInfo[additionalInfo] =
              "Phenylalanin";
            break;
          case "AA":
            mensaData[day][meal].additionalInfo[additionalInfo] =
              "Weizengluten";
            break;
          case "AB":
            mensaData[day][meal].additionalInfo[additionalInfo] =
              "Roggengluten";
            break;
          case "AC":
            mensaData[day][meal].additionalInfo[additionalInfo] =
              "Gerstengluten";
            break;
          case "AD":
            mensaData[day][meal].additionalInfo[additionalInfo] = "Hafergluten";
            break;
          case "AE":
            mensaData[day][meal].additionalInfo[additionalInfo] =
              "Dinkelgluten";
            break;
          case "AF":
            mensaData[day][meal].additionalInfo[additionalInfo] = "Kamutgluten";
            break;
          case "B":
            mensaData[day][meal].additionalInfo[additionalInfo] = "Krebstiere";
            break;
          case "C":
            mensaData[day][meal].additionalInfo[additionalInfo] = "Eier";
            break;
          case "D":
            mensaData[day][meal].additionalInfo[additionalInfo] = "Fisch";
            break;
          case "E":
            mensaData[day][meal].additionalInfo[additionalInfo] = "Erdnüsse";
            break;
          case "F":
            mensaData[day][meal].additionalInfo[additionalInfo] = "Soja";
            break;
          case "G":
            mensaData[day][meal].additionalInfo[additionalInfo] =
              "Milch und Milchprodukte";
            break;
          case "HA":
            mensaData[day][meal].additionalInfo[additionalInfo] = "Mandel";
            break;
          case "HB":
            mensaData[day][meal].additionalInfo[additionalInfo] = "Haselnuss";
            break;
          case "HC":
            mensaData[day][meal].additionalInfo[additionalInfo] = "Walnuss";
            break;
          case "HD":
            mensaData[day][meal].additionalInfo[additionalInfo] = "Cashew";
            break;
          case "HE":
            mensaData[day][meal].additionalInfo[additionalInfo] = "Pecannuss";
            break;
          case "HF":
            mensaData[day][meal].additionalInfo[additionalInfo] = "Paranuss";
            break;
          case "HG":
            mensaData[day][meal].additionalInfo[additionalInfo] = "Pistazie";
            break;
          case "HH":
            mensaData[day][meal].additionalInfo[additionalInfo] =
              "Macadamianuss";
            break;
          case "HI":
            mensaData[day][meal].additionalInfo[additionalInfo] =
              "Queenslandnuss";
            break;
          case "I":
            mensaData[day][meal].additionalInfo[additionalInfo] = "Sellerie";
            break;
          case "J":
            mensaData[day][meal].additionalInfo[additionalInfo] = "Senf";
            break;
          case "K":
            mensaData[day][meal].additionalInfo[additionalInfo] = "Sesamsamen";
            break;
          case "L":
            mensaData[day][meal].additionalInfo[additionalInfo] =
              "Schwefeldioxid und Sulfite";
            break;
          case "M":
            mensaData[day][meal].additionalInfo[additionalInfo] = "Lupinen";
            break;
          case "N":
            mensaData[day][meal].additionalInfo[additionalInfo] = "Weichtiere";
            break;
          case "O":
            mensaData[day][meal].additionalInfo[additionalInfo] = "Nitrat";
            break;
          case "P":
            mensaData[day][meal].additionalInfo[additionalInfo] =
              "Nitritpökelsalz";
            break;
          default:
            mensaData[day][meal].additionalInfo[additionalInfo] = "";
        }
      }
    }
  }
  console.log(mensaData);
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
