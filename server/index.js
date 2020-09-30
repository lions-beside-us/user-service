const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('../db/index');

const port = 4000;

const app = express();

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

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
