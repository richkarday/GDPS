const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//const FoodModel = require('./models/food');

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.use(require('./routes/index')); 

mongoose.connect('mongodb://localhost:27017/CRUD', {
    useNewUrlParser: true
},
(err, resp) => {
    if(err) throw err;

    console.log("Base de datos conectada")
});

/*app.post('/insert', (req, res) => {

    const foodName = req.body.foodName
    const days = req.body.days

    const food = new FoodModel({foodName: foodName, daysSinceIAte: days});

    try {
    food.save();
    res.send("Datos insertados")
    console.log("Se inserto los datos correctamente")
    }catch (err) {
        console.log(err)
    }
});

app.get('/read', (req, res) => {
    FoodModel.find({}, (err, result) => {
        if(err) {
            res.send(err)
        }

        res.send(result)
    })
})*/

app.listen(3001, () => {
    console.log('Servidor corriendo en el puerto 3001')
})