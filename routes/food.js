const express = require('express');
const FoodModel = require('../models/food')

const app = express();


app.get('/read', (req, res) => {
    FoodModel.find({}, (err, result) => {
        if(err) {
            res.send(err)
        }

        res.send(result)
    })
})

app.post('/insert', (req, res) => {

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

app.put('/update', (req, res) => {
    const newFoodName = req.body.newFoodName
    const id = req.body.id
    
    try {
        FoodModel.findById(id, (err, updatedFood) => {
        updatedFood.foodName = newFoodName;
        updatedFood.save();
        res.send("Actualizado")
        })
    } catch (err) {
        console.log(err)
    }
}) 


app.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    
    FoodModel.findByIdAndRemove(id).exec()
    res.send("eliminado")
})

module.exports = app