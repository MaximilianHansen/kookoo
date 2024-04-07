var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
var express = require('express');
const MongoStore = require('connect-mongo');
var passport = require('passport');
var app = express()
const port = 3001
const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
  googleId: String,
});

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const User = mongoose.model('User', userSchema);

var session = require('express-session');

app.use(session({
  secret:'secret',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({mongoUrl: 'mongodb://localhost:27017/passdownLog'}),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
}))
app.use(passport.initialize());
app.use(passport.session());

app.use((req,res, next)=> {console.log(req.session); console.log(req.user); next()}

)


app.get('/', (req,res)=>{
    res.send('hello world!')
})

var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID:     '1049417195222-5sra3k5h6muam47ufdkjsrg4v5uil6sg.apps.googleusercontent.com',
    clientSecret: "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",
    callbackURL: "http://maxhansen.co:3001/auth/google/callback",
    passReqToCallback   : true,
    scope: ['email', 'profile', 'https://www.googleapis.com/auth/calendar']
  },
  async function(request, accessToken, refreshToken, profile, done) {
    try {
      let user = await User.findOne({ googleId: profile.id });
      if (!user) {
        user = await User.create({ googleId: profile.id });
        return console.log("not a user")
      }
      console.log("user found!");
       // Your obtained access token
const url = 'https://www.googleapis.com/calendar/v3/calendars/primary/events'; // Google Calendar API endpoint

fetch(url, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`, // Bearer authentication scheme
    'Accept': 'application/json' // Optional based on API
  }
})
.then(response => {
  if (response.ok) {
    return response.json(); // Parse JSON body
  }
  throw new Error('Network response was not ok.');
})
.then(data => {
  console.log(data); // Process the data
})
.catch(error => {
  console.error('There was a problem with your fetch operation:', error);
});

      done(null, user);
      return 
      
    } catch (err) {
      return done(err);
    }
  }
));

app.get('/auth/google',
  passport.authenticate('google'
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
}));

app.get('/auth/google/success', (req, res) => {
  res.send("logged in")
})

passport.serializeUser(function(user, done) {
  console.log(user, "this is serialize user")
  done(null, user.id);
});

passport.deserializeUser((userId,done)=>{
  User.findById(userId)
  .then((user)=>{
      done(null,user);
  })
  .catch(err=> done(err))
})


app.listen(port, ()=> {console.log(`running on ${port}`)})