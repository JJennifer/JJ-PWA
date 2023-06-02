const express = require('express');

const app = express();
// process.env.PORT  NEEDED FOR HEROKU
const PORT = process.env.PORT || 3001;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`port: ${PORT}`));
