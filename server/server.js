const express = require('express');
const cors = require('cors');
const  app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json(), express.urlencoded({extended: true}));

require('./config/mongoose.config');

require('./routes/pizza.routes')(app);








app.listen(PORT, () => console.log(`>>>>Listening at port: ${PORT}`));