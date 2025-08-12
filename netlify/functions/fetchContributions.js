// netlify/functions/fetchContributions.js
export const handler = async (event, context) => {
  const someObject = {}; // Example object
  const obj = Object.assign({}, someObject);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Netlify Function!" }),
  };
};