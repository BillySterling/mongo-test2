const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the collection and inserts the teachers and students below

var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/behavior_db";
  // process.env.MONGODB_URI || "mongodb://localhost/behavior_db";
  // process.env.MONGODB_URI || "mongodb://localhost/behavior_db_new";
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, function(err) {
    mongoose.connection.db.dropDatabase();
    console.log("$$$$$$$$$ DATABASE DROPPED $$$$$$$$$");
    if (err) console.log(err);
});

const teacherArray = [];
let save = 0;

const teacherSeed = [
  {
    userName: "misstanner@fenceworkshop.com",
    firstName: "Becky",
    lastName: "Tanner",
    authLevel: 3,
    classes: []
  },
  {
    userName: "misscooper@fenceworkshop.com",
    firstName: "Christine",
    lastName: "Cooper",
    authLevel: 3,
    classes: []
  }
];

const studentSeed = [
  {
    userName: "timmyt@gmail.com",
    firstName: "Timmy",
    lastName: "Thomas",
    authLevel: 1
  },
  {
    userName: "marym@gmail.com",
    firstName: "Mary",
    lastName: "Martin",
    authLevel: 1
  },
  {
    userName: "suzys@gmail.com",
    firstName: "Suzy",
    lastName: "Smith",
    authLevel: 1
  },
  {
    userName: "jamesj@gmail.com",
    firstName: "James",
    lastName: "Jones",
    authLevel: 1
  },
  {
    userName: "charliec@gmail.com",
    firstName: "Charlie",
    lastName: "Caroway",
    authLevel: 1
  },
  {
    userName: "bethb@gmail.com",
    firstName: "Beth",
    lastName: "Brewster",
    authLevel: 1
  }
];

const behaviorSeeds = [
  {
    behaviorName: "sit still in class",
    studentName: "Timmy Thomas"
  },
  {
    behaviorName: "raise hand before speaking",
    studentName: "Mary Martin"
  },
  {
    behaviorName: "use your inside voice",
    studentName: "Suzy Smith"
  }
];

const behaviorSeeds2 = [
  {
    behaviorName: "don't pick your nose",
    studentName: "James Jones"
  },
  {
    behaviorName: "pull up your pants",
    studentName: "Charlie Caroway"
  },
  {
    behaviorName: "treat others with respect",
    studentName: "Beth Brewster"
  }
];

const behaviorDataSeeds = [
  {
    behaviorDate: "04/08/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T14:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T15:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T16:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T17:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T18:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T18:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 30
  },
  {
    behaviorDate: "04/09/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T14:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T14:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T18:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 29
  },
  {
    behaviorDate: "04/10/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T12:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T13:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T13:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T14:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T15:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T17:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T17:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T18:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T19:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T20:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T20:45:00Z"
      }
    ],
    behaviorCount: 26,
    behaviorTotal: 18
  },
  {
    behaviorDate: "04/11/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T14:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T15:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-11T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-11T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-11T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T19:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T19:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-11T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 32
  },
  {
    behaviorDate: "04/12/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T12:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T13:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T15:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T17:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T18:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T19:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T19:30:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 27
  },

  {
    behaviorDate: "04/08/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T14:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T15:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T16:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T17:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T18:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T18:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 30
  },
  {
    behaviorDate: "04/09/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T14:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T14:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T18:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 29
  },
  {
    behaviorDate: "04/10/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T12:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T13:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T13:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T14:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T15:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T17:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T17:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T18:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T19:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T20:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T20:45:00Z"
      }
    ],
    behaviorCount: 26,
    behaviorTotal: 18
  },
  {
    behaviorDate: "04/11/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T14:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T15:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-11T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-11T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-11T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T19:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T19:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-11T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 32
  },
  {
    behaviorDate: "04/12/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T12:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T13:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T15:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T17:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T18:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T19:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T19:30:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 27
  },

  {
    behaviorDate: "04/08/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T14:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T15:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T16:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T17:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T18:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T18:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 30
  },
  {
    behaviorDate: "04/09/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T14:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T14:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T18:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 29
  },
  {
    behaviorDate: "04/10/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T12:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T13:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T13:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T14:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T15:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T17:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T17:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T18:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T19:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T20:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T20:45:00Z"
      }
    ],
    behaviorCount: 26,
    behaviorTotal: 18
  },
  {
    behaviorDate: "04/11/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T14:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T15:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-11T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-11T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-11T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T19:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T19:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-11T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 32
  },
  {
    behaviorDate: "04/12/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T12:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T13:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T15:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T17:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T18:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T19:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T19:30:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 27
  },

  {
    behaviorDate: "04/08/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T14:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T15:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T16:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T17:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T18:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T18:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 30
  },
  {
    behaviorDate: "04/09/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T14:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T14:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T18:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 29
  },
  {
    behaviorDate: "04/10/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T12:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T13:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T13:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T14:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T15:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T17:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T17:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T18:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T19:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T20:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T20:45:00Z"
      }
    ],
    behaviorCount: 26,
    behaviorTotal: 18
  },
  {
    behaviorDate: "04/11/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T14:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T15:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-11T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-11T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-11T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T19:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T19:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-11T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 32
  },
  {
    behaviorDate: "04/12/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T12:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T13:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T15:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T17:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T18:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T19:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T19:30:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 27
  },

  {
    behaviorDate: "04/08/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T14:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T15:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T16:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T17:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T18:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T18:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 30
  },
  {
    behaviorDate: "04/09/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T14:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T14:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T18:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 29
  },
  {
    behaviorDate: "04/10/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T12:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T13:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T13:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T14:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T15:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T17:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T17:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T18:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T19:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T20:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T20:45:00Z"
      }
    ],
    behaviorCount: 26,
    behaviorTotal: 18
  },
  {
    behaviorDate: "04/11/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T14:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T15:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-11T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-11T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-11T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T19:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T19:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-11T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 32
  },
  {
    behaviorDate: "04/12/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T12:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T13:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T15:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T17:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T18:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T19:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T19:30:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 27
  },

  {
    behaviorDate: "04/08/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T14:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T15:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T16:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T17:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T18:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T18:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-08T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-08T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 30
  },
  {
    behaviorDate: "04/09/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T14:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T14:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T18:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-09T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-09T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 29
  },
  {
    behaviorDate: "04/10/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T12:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T13:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T13:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T14:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T15:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T17:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T17:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T18:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T19:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T20:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-10T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-10T20:45:00Z"
      }
    ],
    behaviorCount: 26,
    behaviorTotal: 18
  },
  {
    behaviorDate: "04/11/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T14:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T15:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-11T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-11T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-11T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T19:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T19:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-11T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-11T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 32
  },
  {
    behaviorDate: "04/12/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T12:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T13:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T15:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T17:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T18:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T19:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T19:30:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-12T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-12T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 27
  }
];

db.Teacher.deleteMany({})
  .then(() => db.Teacher.insertMany(teacherSeed))
  .then(teacherData => {
    // console.log(teacherData);
    teacherArray.push(...teacherData);
    // console.log(teacherArray);
    //start this process over for student. Remove process.exit above once we uncomment.
    db.Student.deleteMany({})
      .then(() => db.Student.insertMany(studentSeed))
      .then(studentData => {
        const teacher = teacherArray.filter(object => {
          // return object.userName === "misstanner@fenceworkshop.com"
          return object;
        });
        // console.log("===== teachers: ", teacher)
        db.Teacher.findOneAndUpdate(
          { _id: teacher[0]._id },
          {
            $push: {
              students: [
                studentData[0]._id,
                studentData[1]._id,
                studentData[2]._id
              ]
            }
          },
          { new: true }
        ).then(updatedTeacher => {
          // console.log(updatedTeacher);
          db.Student.findOneAndUpdate(
            { _id: studentData[0]._id },
            { $push: { teachers: updatedTeacher._id } }
          ).then(updatedStudent1 => {
            db.Student.findOneAndUpdate(
              { _id: studentData[1]._id },
              { $push: { teachers: updatedTeacher._id } } 
            ).then(updatedStudent2 => {
              db.Student.findOneAndUpdate(
                { _id: studentData[2]._id },
                {
                  $push: { teachers: updatedTeacher._id }
                } 
              ).then(updatedStudent3 => {
                db.Behavior.deleteMany({}).then(() => {
                  db.Behavior.insertMany(behaviorSeeds).then(behaviorData => {
                    db.Student.findOneAndUpdate(
                      { _id: updatedStudent1._id },
                      { $push: { behaviors: behaviorData[0]._id } },
                      { new: true }
                    ).then(studentWithBehavior1 => {
                      db.Behavior.findOneAndUpdate(
                        { _id: behaviorData[0]._id },
                        {
                          $push: { teachers: updatedTeacher._id },
                          student: studentWithBehavior1._id
                        } 
                      ).then(completeBehavior1 => {
                        db.Teacher.findOneAndUpdate(
                          { _id: updatedTeacher._id },
                          { $push: { behaviors: completeBehavior1._id } },
                          { new: true }
                        ).then(completeTeacher => {
                          // console.log("#1 complete teacher", completeTeacher);
                          // console.log("#1 studentWithBehavior", studentWithBehavior1);
                        });
                      });
                    });

                    db.Student.findOneAndUpdate(
                      { _id: updatedStudent2._id },
                      {
                        $push: { behaviors: behaviorData[1]._id }
                      } 
                    ).then(studentWithBehavior2 => {
                      db.Behavior.findOneAndUpdate(
                        { _id: behaviorData[1]._id },
                        {
                          $push: { teachers: updatedTeacher._id },
                          student: studentWithBehavior2._id
                        } 
                      ).then(completeBehavior2 => {
                        db.Teacher.findOneAndUpdate(
                          { _id: updatedTeacher._id },
                          {
                            $push: { behaviors: completeBehavior2._id }
                          } 
                        ).then(completeTeacher => {
                          // console.log("#2 complete teacher", completeTeacher);
                          // console.log("#2 studentWithBehavior", studentWithBehavior2);
                        });
                      });
                    });

                    db.Student.findOneAndUpdate(
                      { _id: updatedStudent3._id },
                      {
                        $push: { behaviors: behaviorData[2]._id }
                      } 
                    ).then(studentWithBehavior3 => {
                      db.Behavior.findOneAndUpdate(
                        { _id: behaviorData[2]._id },
                        {
                          $push: { teachers: updatedTeacher._id },
                          student: studentWithBehavior3._id
                        } 
                      ).then(completeBehavior3 => {
                        db.Teacher.findOneAndUpdate(
                          { _id: updatedTeacher._id },
                          {
                            $push: { behaviors: completeBehavior3._id }
                          } 
                        ).then(completeTeacher => {
                          // console.log("#3 complete teacher", completeTeacher);
                          // console.log("#3 studentWithBehavior", studentWithBehavior3);
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
        db.Teacher.findOneAndUpdate(
          { _id: teacher[1]._id },
          {
            $push: {
              students: [
                studentData[3]._id,
                studentData[4]._id,
                studentData[5]._id
              ]
            }
          } 
        )
          .then(updatedTeacher => {
            // console.log(updatedTeacher);
            db.Student.findOneAndUpdate(
              { _id: studentData[3]._id },
              { $push: { teachers: updatedTeacher._id } } 
            ).then(updatedStudent4 => {
              db.Student.findOneAndUpdate(
                { _id: studentData[4]._id },
                {
                  $push: { teachers: updatedTeacher._id }
                } 
              ).then(updatedStudent5 => {
                db.Student.findOneAndUpdate(
                  { _id: studentData[5]._id },
                  {
                    $push: { teachers: updatedTeacher._id }
                  } 
                ).then(updatedStudent6 => {
                  db.Behavior.insertMany(behaviorSeeds2)
                    // db.Behavior.find()
                    .then(behaviorData => {
                      db.Student.findOneAndUpdate(
                        { _id: updatedStudent4._id },
                        { $push: { behaviors: behaviorData[0]._id } },
                        { new: true }
                      ).then(studentWithBehavior4 => {
                        db.Behavior.findOneAndUpdate(
                          { _id: behaviorData[0]._id },
                          {
                            $push: { teachers: updatedTeacher._id },
                            student: studentWithBehavior4._id
                          } 
                        ).then(completeBehavior4 => {
                          db.Teacher.findOneAndUpdate(
                            { _id: updatedTeacher._id },
                            { $push: { behaviors: completeBehavior4._id } },
                            { new: true }
                          ).then(completeTeacher => {
                            // console.log("#4 complete teacher", completeTeacher);
                            // console.log("#4 studentWithBehavior", studentWithBehavior4);
                          });
                        });
                      });

                      db.Student.findOneAndUpdate(
                        { _id: updatedStudent5._id },
                        {
                          $push: { behaviors: behaviorData[1]._id }
                        } 
                      ).then(studentWithBehavior5 => {
                        db.Behavior.findOneAndUpdate(
                          { _id: behaviorData[1]._id },
                          {
                            $push: { teachers: updatedTeacher._id },
                            student: studentWithBehavior5._id
                          } 
                        ).then(completeBehavior5 => {
                          db.Teacher.findOneAndUpdate(
                            { _id: updatedTeacher._id },
                            {
                              $push: { behaviors: completeBehavior5._id }
                            } 
                          ).then(completeTeacher => {
                            // console.log("#5 complete teacher", completeTeacher);
                            // console.log("#5 studentWithBehavior", studentWithBehavior5);
                          });
                        });
                      });

                      db.Student.findOneAndUpdate(
                        { _id: updatedStudent6._id },
                        {
                          $push: { behaviors: behaviorData[2]._id }
                        } 
                      ).then(studentWithBehavior6 => {
                        db.Behavior.findOneAndUpdate(
                          { _id: behaviorData[2]._id },
                          {
                            $push: { teachers: updatedTeacher._id },
                            student: studentWithBehavior6._id
                          } 
                        ).then(completeBehavior6 => {
                          db.Teacher.findOneAndUpdate(
                            { _id: updatedTeacher._id },
                            {
                              $push: { behaviors: completeBehavior6._id }
                            } 
                          ).then(completeTeacher => {
                            // console.log("#6 complete teacher", completeTeacher);
                            // console.log("#6 studentWithBehavior", studentWithBehavior6);
                          });
                        });
                      });

                      db.Behavior.find().then(bxData => {
                        console.log("bxData = ", bxData);
                        db.BehaviorData.deleteMany({}).then(() => {
                          db.BehaviorData.insertMany(behaviorDataSeeds).then(
                            behaviorTrack => {
                              const behaviorTrackIds = behaviorTrack.map(
                                j => j._id
                              );
                              console.log(
                                "@@@@@@@@@@@@@ behaviorTrackIds -> ",
                                behaviorTrackIds
                              );
                              console.log(
                                "******** Updating behaviorData *********"
                              );


                              behaviorTrackIds.sort();
                              db.Behavior.findOneAndUpdate(
                                { _id: bxData[0]._id },
                                { $push: { behaviorData:{ $each: [ behaviorTrackIds[0], behaviorTrackIds[1], behaviorTrackIds[2], behaviorTrackIds[3], behaviorTrackIds[4] ] } } },
                                { new: true }
                              ).then(updatedBehavior => {
                                console.log(
                                  "Updated Behavior 0 // behaviorData 0 - 4 "
                                );
                                checkSave();
                              });

                              db.Behavior.findOneAndUpdate(
                                { _id: bxData[1]._id },
                                { $push: { behaviorData:{ $each: [ behaviorTrackIds[5], behaviorTrackIds[6], behaviorTrackIds[7], behaviorTrackIds[8], behaviorTrackIds[9] ] } } },
                                { new: true }
                              ).then(updatedBehavior => {
                                console.log(
                                  "Updated Behavior 1 // behaviorData 5 - 9 "
                                );
                                checkSave();
                              });

                              db.Behavior.findOneAndUpdate(
                                { _id: bxData[2]._id },
                                { $push: { behaviorData:{ $each: [ behaviorTrackIds[10], behaviorTrackIds[11], behaviorTrackIds[12], behaviorTrackIds[13], behaviorTrackIds[14] ] } } },
                                { new: true }
                              ).then(updatedBehavior => {
                                console.log(
                                  "Updated Behavior 2 // behaviorData 10 - 14 "
                                );
                                checkSave();
                              });

                              db.Behavior.findOneAndUpdate(
                                { _id: bxData[3]._id },
                                { $push: { behaviorData:{ $each: [ behaviorTrackIds[15], behaviorTrackIds[16], behaviorTrackIds[17], behaviorTrackIds[18], behaviorTrackIds[19] ] } } },
                                { new: true }
                              ).then(updatedBehavior => {
                                console.log(
                                  "Updated Behavior 3 // behaviorData 15 - 19 "
                                );
                                checkSave();
                              });

                              db.Behavior.findOneAndUpdate(
                                { _id: bxData[4]._id },
                                { $push: { behaviorData:{ $each: [ behaviorTrackIds[20], behaviorTrackIds[21], behaviorTrackIds[22], behaviorTrackIds[23], behaviorTrackIds[24] ] } } },
                                { new: true }
                              ).then(updatedBehavior => {
                                console.log(
                                  "Updated Behavior 4 // behaviorData 20 - 24 "
                                );
                                checkSave();
                              });

                              db.Behavior.findOneAndUpdate(
                                { _id: bxData[5]._id },
                                { $push: { behaviorData:{ $each: [ behaviorTrackIds[25], behaviorTrackIds[26], behaviorTrackIds[27], behaviorTrackIds[28], behaviorTrackIds[29] ] } } },
                                { new: true }
                              ).then(updatedBehavior => {
                                console.log(
                                  "Updated Behavior 5 // behaviorData 25 - 29 "
                                );
                                checkSave();
                              });  

                            }); 
                        });
                      });
                    });
                });
              });
            });
          })
          .catch(err => {
            console.error(err);
            process.exit(1);
          });
      });
  });

  function checkSave() {
    save++;
    if (save === 6) {
      console.log("+++++ SEEDS COMPLETE ++++++");
      process.exit(0);
    };
  };
