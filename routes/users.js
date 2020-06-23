const router = require('express').Router();
let User = require('../models/user.model');

//route that handles http get request
router.route('/').get((req, res) => {
//find() is a Mongoose method that will get a list of all the users on the DB
//It returns a promise in json format
  User.find()
  //.then is a promise
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;