const express = require('express');
const cors = require('cors');

//help to connect to mongoDB
const mongoose = require('mongoose');

//environment variables and dotenv files
require('dotenv').config();

//express server
const app = express();
// const port = process.env.PORT;
const port = process.env.PORT || 5000;

//middleware to parse json
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


//Tell the server to use the files in routes folder 
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


//line to start server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});