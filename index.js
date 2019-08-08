// will run (listen for connections) the server
// programmer's terminology (lingo):
// separation of concerns (SoC)
// single responsibility principle (SRP)
const api = require('./api/server');

const port = 7000;
api.listen(port, () => console.log(`\n**server running on port ${port}**\n`))