import * as Constants from "../../constants/constants";

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
        if (
          mensaData[day][meal].contentInfo[contentInfo] in
          Constants.mensaContentInfo
        ) {
          mensaData[day][meal].contentInfo[contentInfo] =
            Constants.mensaContentInfo[
              mensaData[day][meal].contentInfo[contentInfo]
            ];
        } else {
          mensaData[day][meal].contentInfo[contentInfo] = "";
        }
      }
      for (let infoIndex in mensaData[day][meal].additionalInfo) {
        if (
          mensaData[day][meal].additionalInfo[infoIndex] in
          Constants.mensaAdditionalInfo
        ) {
          mensaData[day][meal].additionalInfo[infoIndex] =
            Constants.mensaAdditionalInfo[
              mensaData[day][meal].additionalInfo[infoIndex]
            ];
        } else {
          mensaData[day][meal].additionalInfo.splice(infoIndex, 1);
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
