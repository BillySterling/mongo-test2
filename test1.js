const mongoose = require("mongoose");
const db = require("./models");
mongoose.Promise = global.Promise;

// This file empties the collection and inserts the teachers and students below

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/behavior_db_new";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, function (err) {
    if (err)
        console.log(err);
});

        // db.Student
        // .findById("5cba34a6133d6a4d3c7fcb13")
        // // .match("5cba34a5133d6a4d3c7fcb0f")
        // .populate("behaviors")
        // .then(dbModel => 
        // console.log("student findById",dbModel));


        // db.Student
        // .find()
        // .populate("behaviors")
        // .then(dbModel => 
        // console.log("student find (ALL)", dbModel));


        db.Behavior
        .find()
        .then(dbModel => 
        console.log("behavior find (ALL)", dbModel));

        // db.Teacher
        // .findById("5cba34a5133d6a4d3c7fcb0e")
        // .populate("students")
        // .populate("behaviors")
        // .then(dbModel => 
        // console.log("teacher findById",dbModel));


        // db.Teacher
        // .findById("5cba34a5133d6a4d3c7fcb0e")
        // .populate({
        //     path: "students",
        //     populate: {
        //         path: "behaviors"
        //     }
        // })
        // .then(dbModel => 
        // console.log("teacher findById",dbModel));


        // db.Teacher
        // .findById("5cba34a5133d6a4d3c7fcb0e")
        // .populate({
        //     path: "behaviors",
        //     populate: {
        //         path: "students",
        //     }
        // })
        // .then(dbModel => 
        // console.log("teacher findById",dbModel));


        // db.Teacher
        // .findById("5cba34a5133d6a4d3c7fcb0e")
        // .populate({
        //     path: "behaviors", options: { sort: { _id: 1 }},
        //     populate: {
        //         path: "students",
        //     }
        // })
        // .then(dbModel => 
        // console.log("teacher findById",dbModel));


        // db.Teacher
        // .findById("5cba34a5133d6a4d3c7fcb0e")
        // .populate({
        //     path: "behaviors", select: "studentName behaviorName behaviorTracked _id", options: { sort: { _id: 1 }},
        //     populate: {
        //         path: "students",
        //     }
        // })
        // .then(dbModel => 
        // console.log("teacher findById",dbModel));


        // db.Teacher
        // .findById("5cba34a5133d6a4d3c7fcb0e")
        // .populate({
        //     path: "behaviors",
        //     populate: {
        //         path: "students",
        //     }
        // })
        // .then(dbModel => 
        // console.log("teacher findById",dbModel));






// db.Teacher
//     .deleteMany({})
//     .then(() => db.Teacher.insertMany(teacherSeed))
//     .then(teacherData => {
//         // console.log(teacherData);
//         teacherArray.push(...teacherData);
//         // console.log(teacherArray);
//         //start this process over for student. Remove process.exit above once we uncomment.
//         db.Student
//             .deleteMany({})
//             .then(() => db.Student.insertMany(studentSeed))
//             .then(studentData => {
//                 const teacher = teacherArray.filter(object => {
//                     // return object.userName === "misstanner@fenceworkshop.com"
//                     return object
//                 });
//                 console.log("===== teachers: ", teacher)
//                 db.Teacher.findOneAndUpdate({ _id: teacher[0]._id }, { $push: { students: [studentData[0]._id, studentData[1]._id, studentData[2]._id] } }, { new: true }).then(updatedTeacher => {
//                     console.log(updatedTeacher);
//                     db.Student.findOneAndUpdate({ _id: studentData[0]._id }, { $push: { teachers: updatedTeacher._id } }/* , { new: true } */).then(updatedStudent1 => {
//                         db.Student.findOneAndUpdate({ _id: studentData[1]._id }, { $push: { teachers: updatedTeacher._id } }/* , { new: true } */).then(updatedStudent2 => {
//                             db.Student.findOneAndUpdate({ _id: studentData[2]._id }, { $push: { teachers: updatedTeacher._id } }/* , { new: true } */).then(updatedStudent3 => {

//                                 db.Behavior.deleteMany({})
//                                 .then(() => {
//                                     db.Behavior.insertMany(behaviorSeeds).then(behaviorData => {
//                                         db.Student.findOneAndUpdate({ _id: updatedStudent1._id }, { $push: { behaviors: behaviorData[0]._id } }, { new: true })
//                                             .then(studentWithBehavior1 => {
//                                                 db.Behavior.findOneAndUpdate({ _id: behaviorData[0]._id }, {
//                                                     $push: { teachers: updatedTeacher._id }, student: studentWithBehavior1._id
//                                                 }/* , { new: true } */).then(completeBehavior1 => {
//                                                     db.Teacher.findOneAndUpdate({ _id: updatedTeacher._id }, { $push: { behaviors: completeBehavior1._id } }, { new: true }).then(completeTeacher => {
//                                                         console.log("#1 complete teacher", completeTeacher);
//                                                         console.log("#1 studentWithBehavior", studentWithBehavior1);
//                                                     })
//                                                 })
//                                             })

//                                         db.Student.findOneAndUpdate({ _id: updatedStudent2._id }, { $push: { behaviors: behaviorData[1]._id } }/*, { new: true }*/)
//                                         .then(studentWithBehavior2 => {
//                                             db.Behavior.findOneAndUpdate({ _id: behaviorData[1]._id }, {
//                                                 $push: { teachers: updatedTeacher._id }, student: studentWithBehavior2._id
//                                             }/* , { new: true } */).then(completeBehavior2 => {
//                                                 db.Teacher.findOneAndUpdate({ _id: updatedTeacher._id }, { $push: { behaviors: completeBehavior2._id } }/*, { new: true }*/).then(completeTeacher => {
//                                                     console.log("#2 complete teacher", completeTeacher);
//                                                     console.log("#2 studentWithBehavior", studentWithBehavior2);
//                                                 })
//                                             })
//                                         })

//                                         db.Student.findOneAndUpdate({ _id: updatedStudent3._id }, { $push: { behaviors: behaviorData[2]._id } }/*, { new: true }*/)
//                                         .then(studentWithBehavior3 => {
//                                             db.Behavior.findOneAndUpdate({ _id: behaviorData[2]._id }, {
//                                                 $push: { teachers: updatedTeacher._id }, student: studentWithBehavior3._id
//                                             }/* , { new: true } */).then(completeBehavior3 => {
//                                                 db.Teacher.findOneAndUpdate({ _id: updatedTeacher._id }, { $push: { behaviors: completeBehavior3._id } }/*, { new: true }*/).then(completeTeacher => {
//                                                     console.log("#3 complete teacher", completeTeacher);
//                                                     console.log("#3 studentWithBehavior", studentWithBehavior3);
//                                                 })
//                                             })
//                                         })
//                                     })   
//                                 })
//                             })
//                         })
//                     })
//                 })
//                 db.Teacher.findOneAndUpdate({ _id: teacher[1]._id }, { $push: { students: [studentData[3]._id, studentData[4]._id, studentData[5]._id] } }/*, { new: true }*/).then(updatedTeacher => {
//                     console.log(updatedTeacher);
//                     db.Student.findOneAndUpdate({ _id: studentData[3]._id }, { $push: { teachers: updatedTeacher._id } }/* , { new: true } */).then(updatedStudent4 => {
//                         db.Student.findOneAndUpdate({ _id: studentData[4]._id }, { $push: { teachers: updatedTeacher._id } }/* , { new: true } */).then(updatedStudent5 => {
//                             db.Student.findOneAndUpdate({ _id: studentData[5]._id }, { $push: { teachers: updatedTeacher._id } }/* , { new: true } */).then(updatedStudent6 => {

//                                 db.Behavior.insertMany(behaviorSeeds2)
//                                 // db.Behavior.find()
//                                 .then((behaviorData) => {
//                                         db.Student.findOneAndUpdate({ _id: updatedStudent4._id }, { $push: { behaviors: behaviorData[0]._id } }, { new: true })
//                                             .then(studentWithBehavior4 => {
//                                                 db.Behavior.findOneAndUpdate({ _id: behaviorData[0]._id }, {
//                                                     $push: { teachers: updatedTeacher._id }, student: studentWithBehavior4._id
//                                                 }/* , { new: true } */).then(completeBehavior4 => {
//                                                     db.Teacher.findOneAndUpdate({ _id: updatedTeacher._id }, { $push: { behaviors: completeBehavior4._id } }, { new: true }).then(completeTeacher => {
//                                                         console.log("#4 complete teacher", completeTeacher);
//                                                         console.log("#4 studentWithBehavior", studentWithBehavior4);
//                                                     })
//                                                 })
//                                             })

//                                         db.Student.findOneAndUpdate({ _id: updatedStudent5._id }, { $push: { behaviors: behaviorData[1]._id } }/*, { new: true }*/)
//                                         .then(studentWithBehavior5 => {
//                                             db.Behavior.findOneAndUpdate({ _id: behaviorData[1]._id }, {
//                                                 $push: { teachers: updatedTeacher._id }, student: studentWithBehavior5._id
//                                             }/* , { new: true } */).then(completeBehavior5 => {
//                                                 db.Teacher.findOneAndUpdate({ _id: updatedTeacher._id }, { $push: { behaviors: completeBehavior5._id } }/*, { new: true }*/).then(completeTeacher => {
//                                                     console.log("#5 complete teacher", completeTeacher);
//                                                     console.log("#5 studentWithBehavior", studentWithBehavior5);
//                                                 })
//                                             })
//                                         })

//                                         db.Student.findOneAndUpdate({ _id: updatedStudent6._id }, { $push: { behaviors: behaviorData[2]._id } }/*, { new: true }*/)
//                                         .then(studentWithBehavior6 => {
//                                             db.Behavior.findOneAndUpdate({ _id: behaviorData[2]._id }, {
//                                                 $push: { teachers: updatedTeacher._id }, student: studentWithBehavior6._id
//                                             }/* , { new: true } */).then(completeBehavior6 => {
//                                                 db.Teacher.findOneAndUpdate({ _id: updatedTeacher._id }, { $push: { behaviors: completeBehavior6._id } }/*, { new: true }*/).then(completeTeacher => {
//                                                     console.log("#6 complete teacher", completeTeacher);
//                                                     console.log("#6 studentWithBehavior", studentWithBehavior6);
//                                                     process.exit(0);
//                                                 })
//                                             })
//                                         })
//                                     })
//                             })
//                         })
//                     })
//                 })
//             })
//             .catch(err => {
//                 console.error(err);
//                 process.exit(1);
//             })
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     })