import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import auth from './routes/auth';
const app = express();
app.use(bodyParser.json());
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/website";
MongoClient.connect(url,{ useNewUrlParser: true });
app.use('api/auth', auth);
app.post('/api/auth', (req, res)=>{
  res.status(400).json({errors:{global:"invalid credentials"} });
});
app.get('/*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(8080, ()=> console.log('running on localhost:8080'));
