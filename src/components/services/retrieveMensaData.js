export default async function getMensaData(weekOfYear) {
  const csv = require("csvtojson");
  const iconv = require("iconv-lite");
  var api_url = `https://cors-anywhere.herokuapp.com/https://www.stwno.de/infomax/daten-extern/csv/UNI-R/${weekOfYear}.csv`;
  return new Promise((resolve, reject) => {
    fetch(api_url)
      .then((res) => res.text())
      .then((data) => {
        new Promise((resolve, reject) => {
          resolve(iconv.decode(Buffer(data), "ISO-8859-1"));
        }).then((result) => {
          csv({
            delimiter: ";",
          })
            .fromString(result)
            .then((results) => {
              var plan = {
                Monday: [],
                Tuesday: [],
                Wednesday: [],
                Thursday: [],
                Friday: [],
              };
              for (let i in results) {
                if (results[i].hasOwnProperty("name")) {
                  let meal = {};
                  meal.title = results[i].name.split("(")[0];
                  meal.category = results[i].warengruppe.replace(/[0-9]/g, "");
                  meal.contentInfo = results[i].kennz;
                  meal.additionalInfo = results[i].warengruppe.substring(
                    results[i].warengruppe.lastIndexOf("(") + 1,
                    results[i].warengruppe.lastIndexOf(")")
                  );
                  meal.cost = results[i].preis;
                  meal.day = results[i].tag;
                  switch (results[i].tag) {
                    case "Mo":
                      plan.Monday.push(meal);
                      break;
                    case "Di":
                      plan.Tuesday.push(meal);
                      break;
                    case "Mi":
                      plan.Wednesday.push(meal);
                      break;
                    case "Do":
                      plan.Thursday.push(meal);
                      break;
                    case "Fr":
                      plan.Friday.push(meal);
                      break;
                    default:
                      break;
                  }
                }
              }
              resolve(plan);
            });
        });
      });
  });
}
