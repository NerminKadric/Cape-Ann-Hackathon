const express = require('express'); 
const app = express();
const mongoose = require('mongoose'); 
app.use(require('cors')());  
app.use(express.json()); 

const source = 'mongodb://localhost:27017/salter'; 
mongoose.connect(source);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log(`Database ${source} connected`);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
const routes = require('./routes');
app.use('/permits', routes);

const port = (process.env.port || "3000");
app.listen(port, () => {
    console.log(`Server is listening at: http://localhost:${port}`);
});

