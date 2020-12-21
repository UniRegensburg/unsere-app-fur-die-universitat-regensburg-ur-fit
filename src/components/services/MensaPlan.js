//getMensaData gets mensa offer via http request from api and returns the dishes in form of an array
export default async function getMensaData(day) {
  var plan = new Array();
  var api_url = `https://regensburger-forscher.de:9001/mensa/uni/${day}`;
  return fetch(api_url)
    .then((response) => response.json())
    .then((data) => {
      var i;
      for (i in data) {
        var meal = new Object();
        meal.title = data[i].name;
        meal.category = data[i].category;
        meal.contentInfo = data[i].contentInformation;
        meal.studCost = data[i].cost.students;
        meal.id = data[i].id;
        plan.push(meal);
      }
      return plan;
    });
}
