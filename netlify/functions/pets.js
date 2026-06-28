const handler = async () => {
  // const pets = [
  //   { name: "Meowsalot", species: "cat" },
  //   { name: "Barksalot", species: "dog" }
  // ];

  return {
    statusCode: 200,
    // headers: { "Content-Type": "text/plain" },
    // body: "success".toUpperCase(),
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(pets)
  };
};
module.exports = handler;