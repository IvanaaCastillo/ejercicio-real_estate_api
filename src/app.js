const express = require("express");
const app = express();
const inmuebles = [
    { id: 1, address: "Calle 123", price: 150000, type: "Apartamento" },
    { id: 2, address: "Avenida 456", price: 230000, type: "Casa" },
    { id: 3, address: "Carrera 789", price: 120000, type: "Estudio" },
];
app.get("/api/states", (req, res) => {
    res.json(inmuebles);
});
module.exports = app;
