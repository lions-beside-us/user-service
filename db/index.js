const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fec-soundcloud', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('mongodb connected!')
});

db.dropCollection("users", (err, result) =>  {
  console.log("Collection dropped");
});

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

  // console.log(`here is the db console ${tempUser}`);
  // .then(user => console.log(`${user.user_name} added!`))
  // .catch(error => console.error(error.message));
}

module.exports.saveUser = saveUser;

// var tempUser = newUser.save((err, newUser) => {
//   if (err) return console.error('save error: ', err)
//   // return newUser;
// });