require('dotenv').config();
const port = process.env.PORT || 5000;

const app = require('./app.js');

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});
