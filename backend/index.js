import express from 'express';
import { PORT, mongoURL } from "./config.js";
import mongoose from 'mongoose';
import { User } from './models/userModel.js';

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome to matriApp');
});

app.post('/users', async (request, response) => {
  try{
    if(
      !request.body.name ||
      !request.body.age ||
      !request.body.height ||
      !request.body.religion ||
      !request.body.isMale ||
      !request.body.job ||
      !request.body.zodiac
    ){
      return response.status(400).send({message : error.message});
    }

    const newUser = {
      name : request.body.name,
      age : request.body.age,
      height : request.body.height,
      religion : request.body.religion,
      isMale : request.body.isMale,
      job : request.body.job,
      img : request.body.img,
      zodiac : request.body.zodiac,
      meanAgePref : request.body.meanAgePref,
      varAgePref : request.body.varAgePref,
      meanHeightPref : request.body.meanHeightPref,
      varHeightPref : request.body.varHeightPref,
      relPref : request.body.relPref,
      zodPref : request.body.zodPref,
    };

    const user = await User.create(newUser);

    return response.status(201).send(user);

  }
  catch(error){
    console.log(error.message);
    response.status(500).send({message : error.message});
  }
})

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log('App is listening');
  })
.catch((error) => {
    console.log(error.message);
  })
