// Bring in express using require()
const express = require("express");
const quoteObject = require("./modules/quotes.js");
// Let's create our server object
const app = express();
const port = 5000;
// tell express to serve out html/js/css etc out of /public
app.use(express.static("server/public"));
// set up a new HTTP handler
// respond to http://localhost:500/quote
app.get("/quote", (req, res) => {
  // req: HTTP Request. Coming in hot! From
  //      the web browser world.
  // res: HTTP Response. Outgoing! We have
  //      to tell express what to send back
  //      as as response to the web browser
  //      request
  // ALWAYS have to generate a response
  console.log("The user asked for /quote!");
  res.send(quoteObject.getNextQuote());
  // res.send('<html><body><h1>hello</h1></body></html>');
  // res.send('Try Not. Do or Do Not, there is no Try');
});
// Start our first HTTP Server!
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
