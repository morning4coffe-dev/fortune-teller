const app = require('express')();

app.get('/', (req, res) => res.send('Server is up and running.'));

module.exports = () => {
  app.listen(3000);
}