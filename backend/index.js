import express from 'express';
import cors from 'cors';
import { PORT, mongoURL } from "./config.js";
import mongoose from 'mongoose';
import { User } from './models/userModel.js';

const app = express();

app.use(express.json());

app.use(cors());

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
      return response.status(400).send({message : error.message, reason: "Missing required field(s)"});
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
});


app.get('/users', async (request,response) => {
  try{
    const users = await User.find({});
    response.status(200).json({
      count: users.length,
      data: users
    });
  }
  catch(error){
    console.log(error.message);
    response.status(500).send(error.message);
  }
});

app.get('/users/:id', async (request,response) => {
  try{
    const { id } = request.params;
    const user = await User.findById(id);
    if(!user){
      console.log('not found');
      return response.status(404).json({ message : 'User not found'});
    }
    response.status(200).json(user);
  }
  catch(error){
    console.log(error.message);
    response.status(500).send(error.message);
  }
});

app.put('/users/:id', async (request, response) => {
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
      return response.status(400).send({message : error.message, reason: "Missing required field(s)"});
    }  
    const { id } = request.params;
    const user = await User.findByIdAndUpdate(id, request.body);    
    if(!user){
      return response.status(404).json({message : "User not found"});
    }
    return response.status(200).send({message : "User updated successfully"});
  }
  catch(error){
    console.log(error.message);
    response.status(500).send(error.message);
  }
});

app.delete('/users/:id', async(request, response) => {
  try{
    const { id } = request.params;
    const user = await User.findByIdAndDelete(id);

    if(!user){
      return response.status(404).json({ message : 'User not found '});
    }
    return response.status(200).json({ message : 'User deleted successfully'});
  }
  catch(error){
    console.log(error.message);
    return response.status(500).send( {message : error.message});
  }
});

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log('App is listening');
    app.listen(PORT, () => {
      console.log(`On port : ${PORT}`);
    })
  })
.catch((error) => {
    console.log(error.message);
  })
