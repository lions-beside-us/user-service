const userDb = require('./db/index');

const userData = [
  {
    user_id: 1,
    user_name: 'Dirk Diggler',
    location: '123 Forward Drive',
    profile_image_url: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-boogie-nights-mark-wahlberg.jpg'
  },
  {
    user_id: 2,
    user_name: 'Marky Mark',
    location: '456 Forward Drive',
    profile_image_url: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-boogie-nights-mark-wahlberg.jpg'
  },
  {
    user_id: 3,
    user_name: 'Batman',
    location: '143cBruce Wayne drive',
    profile_image_url: 'https://images.indianexpress.com/2020/08/adam-west-batman-1200.jpg'
  },
  {
    user_id: 4,
    user_name: 'Adam West'
  },
  {
    user_id: 5,
    user_name: 'Adam Durst'
  },
  {
    user_id: 6,
    user_name: 'Jack the Ripper'
  },
  {
    user_id: 7,
    user_name: 'Adam West'
  },
  {
    user_id: 8,
    user_name: 'Run DMC'
  },
  {
    user_id: 9,
    user_name: 'Prince'
  },
  {
    user_id: 10,
    user_name: 'Jack White'
  }

];

let seedData = (data) => {
  data.forEach(user => {
    userDb.saveUser(user);
    console.log(`${user.user_name} added!`);

  });
}

seedData(userData);