export default async function getMensaData(day) {
  var plan = [];
  var api_url = `https://regensburger-forscher.de:9001/mensa/uni/${day}`;
  return fetch(api_url)
    .then((response) => response.json())
    .then((data) => {
      for (let i in data) {
        let meal = {};
        meal.title = data[i].name;
        meal.category = data[i].category;
        meal.contentInfo = data[i].contentInformation;
        meal.studCost = data[i].cost.students;
        meal.empCost = data[i].cost.employees;
        meal.guestCost = data[i].cost.guests;
        meal.id = data[i].id;
        meal.labels = data[i].labels;
        plan.push(meal);
      }
      return plan;
    })
    .catch((error) => console.log(error));
}
