const express = require('express');

const app = express();
const indexRoute = require('./routes/indexRoutes/indexRoute');
// const sequelize = require('./database');
app.use(express.json());
const PORT = process.env.PORT || 3000
app.set('view engine', 'ejs');


app.use('/', indexRoute);

app.listen(3000, ()=>{
    console.log('Server Listeing')
})


// sequelize.sync().then((result)=>{
//     console.log(result);
//     app.listen(3000)
// }).catch((err)=>{
//     console.log(err);
// })
