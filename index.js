const api_url =
  "https://raw.githubusercontent.com/kronusme/dota2-api/master/data/heroes.json";

//fetching data
const getJson = async () => {
  try {
    const response = await fetch(api_url);
    if (!response.ok) {
      throw new Error("Server failed to fetch");
    }
    const data = await response.json();
    for (let val of Object.entries(data)) {
      return val;
    }
  } catch (err) {
    alert(`${err.name}: ${err.message}`);
  }
};

//display as JSON object
getJson().then((data) => {
  const jsonDisplay = JSON.stringify(data, undefined, 4);
  document.getElementById("jsonData").innerText = jsonDisplay;
});

//display tubular format
getJson().then((data) => {
  let tblDatArr = new Array();
  for (let val of data[1]) {
    const { id, name, localized_name } = val;

    const row = document.createElement("tr");

    tblDatArr = [id, name, localized_name];
    for (let i = 0; i < tblDatArr.length; i++) {
      const td = document.createElement("td");
      const cellText = document.createTextNode(tblDatArr[i]);
      td.appendChild(cellText);
      row.appendChild(td);
    }
    document.querySelector("tbody").appendChild(row);
  }
});
