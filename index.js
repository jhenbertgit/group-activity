const api_url =
  "https://raw.githubusercontent.com/kronusme/dota2-api/master/data/heroes.json";

const getData = async () => {
  try {
    const response = await fetch(api_url);
    const data = await response.json();

    for (let [key, val] of Object.entries(data)) {
      console.log(val);
    }
  } catch (err) {
    console.error(err);
  }
};

getData();
