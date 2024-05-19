import express from 'express';
import cors from 'cors';
import { PORT, mongoURL } from "./config.js";
import mongoose from 'mongoose';
import { User } from './models/userModel.js';
import userRoute from './routes/userRoute.js';

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome to matriApp');
});

app.use('/users', userRoute);

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
