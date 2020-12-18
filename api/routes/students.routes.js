const express = require('express');
const app = express();
const studentsRoutes = express.Router();

let Students = require('../models/Students');

// Defined store route
studentsRoutes.route('/add').post(function(req, res) {
    let students = new Students(req.body);
    students.save()
        .then(students => {
            res.status(200).json({ 'students': 'students in added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
studentsRoutes.route('/').get(function(req, res) {
    Students.find(function(err, students) {
        if (err) {
            console.log(err);
        } else {
            res.json(students);
        }
    });
});

studentsRoutes.route('/average/:course').get(function(req, res) {
    Students.find({ course: req.params.course }, function(err, students) {
        if (err) {
            console.log(err);
        } else {
            let sum = 0;
            for (let index = 0; index < students.length; index++) {
                sum += students[index].grade;
            }
            let avg = sum / students.length;
            res.json(avg);
        }
    });

});

studentsRoutes.route('/deactivate').post(function(req, res) {
    let update = { status: "0" };
    Students.updateMany({ semester: 10 }, update, (err, students) => {
        if (err) res.status(500).send({ message: `Error ${err}` })
        res.status(200).send({ message: "Disabled students" })
    });
});

studentsRoutes.route('/edit/:cc').get(function(req, res) {
    let cc = req.params.cc;
    Students.findOne({ cc: cc }, function(err, students) {
        res.json(students);
    });
});

// Defined update route
studentsRoutes.route('/update/:cc').post(function(req, res, next) {
    Students.findOne({ cc: req.params.cc }, function(err, students) {
        if (!students)
            return next(new Error('Could not load Document'));
        else {
            students.names = req.body.names;
            students.course = req.body.course;
            students.semester = req.body.semester;
            students.grade = req.body.grade;
            students.save().then(students => {
                    res.json('Update complete');
                })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
studentsRoutes.route('/delete/:cc').get(function(req, res) {
    Students.findOneAndRemove({ cc: req.params.cc }, function(err, students) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = studentsRoutes;