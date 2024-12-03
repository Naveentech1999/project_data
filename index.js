const jsonServer = require("json-server"); // importing json-server library

// Create a new server
const server = jsonServer.create();

// Define the router that uses your db.json file
const router = jsonServer.router("db.json");

// Apply default middlewares (e.g., logging, static file serving)
const middlewares = jsonServer.defaults();

// Define the port, either from environment variables or fallback to 8080
const port = process.env.PORT || 8080;

// Use middlewares and router
server.use(middlewares);
server.use(router);

// Start the server on the defined port
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
