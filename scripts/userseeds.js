const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the collection and inserts the users below

var MONGODB_URI =
  // process.env.MONGODB_URI || "mongodb://localhost/behavior_db_test";
    process.env.MONGODB_URI || "mongodb://localhost/behavior_db";
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true }, function(err) {
    if (err) console.log(err);
});

const userSeed = [
  {
    userName: "misstanner@fenceworkshop.com",
    authLevel: 3,
  },
  {
    userName: "misscooper@fenceworkshop.com",
    authLevel: 3,
  },
  {
    userName: "misskinneer@fenceworkshop.com",
    authLevel: 5,
  },
  {
    userName: "timmyt@gmail.com",
    authLevel: 1
  },
  {
    userName: "marym@gmail.com",
    authLevel: 1
  },
  {
    userName: "suzys@gmail.com",
    authLevel: 1
  },
  {
    userName: "jamesj@gmail.com",
    authLevel: 1
  },
  {
    userName: "charliec@gmail.com",
    authLevel: 1
  },
  {
    userName: "bethb@gmail.com",
    authLevel: 1
  }
];

console.log(userSeed);

db.Alluser.deleteMany({})
  .then(() => db.Alluser.insertMany(userSeed))
  .then(alluserData => {
    console.log(alluserData);
  });

process.exit(0);