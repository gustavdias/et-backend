const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Schema gives the format that data should be inputted 
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  //trim trims white space at the end
  //at least 3 characters long
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;