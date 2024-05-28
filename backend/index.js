import express from 'express';
import cors from 'cors';
import { PORT, mongoURL } from "./config.js";
import mongoose from 'mongoose';
import { User } from './models/userModel.js';
import { Acc } from './models/accModel.js';
import userRoute from './routes/userRoute.js';
import session from 'express-session';
import passport from 'passport';
import { Strategy } from 'passport-google-oauth2';

const clientid = "15599539893-6vrr9apg824abt94rcr9q3aodrvva3cs.apps.googleusercontent.com";
const clientsecret = "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";

const app = express();

app.use(express.json());

// allowing all origins while in dev cors(*)
app.use(cors());

/*
 * allowing custom origins & methods while in production
  * app.use(
    * cors({
    *   origin : 'http://localhost:xxxx','anoter one',
    *   methods : ['GET', 'POST', 'PUT', 'DELETE'],
    *   allowedHeaders : ['Content-Type'],
    * })
    * );
*/

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome to matriApp');
});

app.use('/users', userRoute);

app.use(session({
  secret : "uy2ub1ui2huf1U*jdsb89u029",
  resave : false,
  saveUninitialized : true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Strategy({
    clientID : clientid,
    clientSecret : clientsecret,
    callbackURL: '/auth/google/callback',
    scope: ["profile", "email"]
  },
  async (accessToken, refreshToken, profile, done) => {
    try{
      let ac = await Acc.findOne({googleId : profile.id});
      if(!ac){
        const newac = {
          googleId : profile.id,
          displayName : profile.displayName,
          email : profile.emails[0].value,
          image : profile.photos[0].value
        };
        const ac = await Acc.create(newac);
        console.log(ac);
      }
      return done(null, ac);
    }
    catch(error){
      return done(error, null);
    }
  }
  )
)

passport.serializeUser((ac, done) => {
  done(null, ac);
});

passport.deserializeUser((ac, done) => {
  done(null, ac);
});

app.get('/auth/google', passport.authenticate("google", {scope : ["profile", "email"]}));

app.get('/auth/google/callback', passport.authenticate('google', {
  successRedirect : 'http://localhost:5173/match',
  failureRedirect : 'http://localhost:5173/login'
}));

app.get('/login/success', async(req,res) => {

})

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
