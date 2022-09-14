console.log("fetch api ");
async function fetchAPI() {
  const my_api = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(my_api, "API");
  const json = await my_api.json();
  console.log(json, "json");
}

async function postAPI() {
  const api = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "bootcamp",
      body: "js",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  console.log(api, "api");
  const json = await api.json();
  console.log(json, "json");
}
