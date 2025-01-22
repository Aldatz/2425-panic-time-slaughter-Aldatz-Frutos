const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const characterRoutes = require("./routes/characterRoutes");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/apt/characters", characterRoutes);

mongoose.connection.on('connected', () => console.log('connected'));
mongoose.connection.on('open', () => console.log('open'));
mongoose.connection.on('disconnected', () => console.log('disconnected'));
mongoose.connection.on('reconnected', () => console.log('reconnected'));
mongoose.connection.on('disconnecting', () => console.log('disconnecting'));
mongoose.connection.on('close', () => console.log('close'));

async function start() {
    try{
        await mongoose.connect(process.env.CONECTION_STRING);
        app.listen(PORT, () => {
            console.log(`API is listening on port ${PORT}`);
        });
        console.log('Conexion con mongo correcta.');
    }
    catch (error){
        console.log(`Error al conectar a la base de datos: ${error.message}`);
    }
}

start();