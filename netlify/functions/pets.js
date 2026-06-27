const handler = async () => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: "success".toUpperCase(),
  };
};
module.exports = { handler };