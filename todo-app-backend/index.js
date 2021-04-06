const express = require('express');
const app = express();
const port = 1337;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes/index.routes'));

app.get('/', (req, res) => {
  res.send('Hello ');
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
