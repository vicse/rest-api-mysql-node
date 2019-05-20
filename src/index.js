const express = require('express');
const app = express();

//Settings 
app.set('port', process.env.port || 3000);

//Middlewars
app.use(express.json()); 

//Routes
app.use(require('./routes/employees'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log('App listening on port', app.get('port'));
});

