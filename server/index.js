const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('../db/index');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');


const port = 4002;

const app = express();

// app.use(express.static('./dist'));
app.use('/', expressStaticGzip(('./dist'), {
  enableBrotli: true,
   orderPreference: ['br', 'gz'],
   setHeaders: function (res, path) {
      res.setHeader("Cache-Control", "dist, max-age=31536000");
   }
}))
app.use(express.json());
app.use(cors());

app.get('/users', async(req, res) => {
  try {
    const users = await db.getUsers();
    res.status(200).send({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      msg: error
    });
  }
});

app.get('/users/:id', async(req, res) => {
  try {
    const { id } = req.params;

    const user = await db.getUser(id);

    if (!user) {
      res.status(400).json({
        succes: false,
        msg: error
      });
    }

    if ( user.length === 0 ) {
      return res.status(400).send({
        success: false,
        msg: `no user with id ${id}`
      });
    }

    res.status(200).send({
      success: true,
      data: user
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      succes: false,
      msg: error
    });
  }
});

app.get('/:current', (req, res) => {
  console.log('hit');
  res.sendFile(path.join(__dirname,'../dist/index.html'));
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

module.exports = app;