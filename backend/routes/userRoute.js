import express from 'express';
import { User } from '../models/userModel.js';

const router = express.Router();


// route to add users
router.post('/', async (request, response) => {
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

// route to get all users
router.get('/', async (request,response) => {
  try{
    const all = request.body.all;
    const minAge = request.body.meanAgePref - request.body.varAgePref;
    const maxAge = request.body.meanAgePref + request.body.varAgePref;
    const minHeight = request.body.meanHeightPref - request.body.varHeightPref;
    const maxHeight = request.body.meanHeightPref + request.body.varHeightPref;
    const rel = request.body.relPref;
    const zod = request.body.zodiac;
    const man = request.body.isMale;
    if(all || !minAge || !maxAge || !minHeight || !maxHeight || !rel || !zod || !man){
      const users = await User.find({});
      console.log(users);
      response.status(200).json({
        count: users.length,
        data: users
      });
    }
    else{
      console.log(minAge);
      console.log(maxAge);
      console.log(minHeight);
      console.log(maxHeight);
      console.log(rel);
      console.log(zod);
      console.log(man);
      const users = await User.find({
        $and : [
          { $and : [ { age : { $gte : minAge}}, { age : { $lte : maxAge}}]},
          { $and : [ { age : { $gte : minHeight}}, { age : { $lte : maxAge }}]},
          { religion : rel},
          { zodiac : zod},
          { isMale : man}
        ]
      });
      response.status(200).json({
        count: users.length,
        data: users
      });
    }
  }
  catch(error){
    console.log(error.message);
    response.status(500).send(error.message);
  }
});

// route to get user by id
router.get('/:id', async (request,response) => {
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

// route to update user by id
router.put('/:id', async (request, response) => {
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

// route to delete user
router.delete('/:id', async(request, response) => {
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


export default router;
