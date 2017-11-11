const mongoose = require('mongoose');
// const schema = mongoose.Schema; this code is equal to the next one
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);
