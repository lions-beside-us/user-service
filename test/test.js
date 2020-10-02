const mongoose = require('mongoose');
const db = require('../db/index');

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../server/index');

let should = chai.should();
chai.use(chaiHttp);

describe('/GET users', () => {
  it('it should GET all the users', (done) => {
    chai.request(app)
        .get('/users')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.data.should.be.a('array');
              res.body.data.length.should.equal(10); //gt is greater than
          done();
        });
  });
});

describe('/GET user', () => {
  it('it should GET one user for with ID 1', (done) => {
    chai.request(app)
        .get('/users/1')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.data.should.be.a('array');
              res.body.data.length.should.equal(1);
              res.body.data[0].user_name.length.should.be.gte(3);
              res.body.data[0].user_name.should.be.a('string');
          done();
        });
  });
});