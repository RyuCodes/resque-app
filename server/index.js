const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const path = require('path');
const app = express();


app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../react-client/dist`));

//Sends index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
});

// index.html served before resolution of path
app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, '/../react-client/dist/', 'index.html'));
 });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
