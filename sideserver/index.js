import express from 'express';
// const express = require('express');
import dotenv from 'dotenv';
// const dotenv = require('dotenv');
import mongoose from 'mongoose';
// const mongoose = require('mongoose');
import cors from 'cors';
// const cors = require('cors');
import todosRutas from "./rutas/todo-rutas.js";
// const todosRutas = require('./rutas/todo-rutas.js');

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());
app.use("/todos", todosRutas)

// llave de atlas
const mongodb = 'mongodb+srv://JHoo58:A9iOEWS6t37H2NaA@cluster0.gpphw.mongodb.net/todo-mern?retryWrites=true&w=majority';

app.get('/', (req, res) => {
    res.send('Welcome to server')
})
const PORT = process.env.PORT || 5000;
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT} `)))
    .catch((error) => console.log(error));