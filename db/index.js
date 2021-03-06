const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fec-soundcloud-users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('mongodb connected!')
});

// db.dropCollection("users", () =>  {
//   console.log("Collection dropped");
// });

const userSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    unique: true,
    required: true
  },
  user_name: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  profile_image_url: {
    type: String
  }
});

let User = mongoose.model('User', userSchema);

let saveUser = (user) => {
  let newUser = new User({
    user_id:           user.user_id,
    user_name:         user.user_name,
    location:          user.location,
    profile_image_url: user.profile_image_url
  });

  return newUser.save(newUser);
}

const getUsers = () => {
  return User.find().limit(100);
}

const getUser = (user_id) => {
  return User.find({ user_id });
}

module.exports.getUsers = getUsers;
module.exports.getUser = getUser;
module.exports.saveUser = saveUser;