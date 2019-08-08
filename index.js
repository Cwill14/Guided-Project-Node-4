// will run (listen for connections) the server
// programmer's terminology (lingo):
// separation of concerns (SoC)
// single responsibility principle (SRP)
const api = require('./api/server');

// heroku adds a PORT variable to the environment automatically
// every environment variable in node will be in the process.env object;
const port = process.env.PORT || 7000;
api.listen(port, () => console.log(`\n**server running on port ${port}**\n`))