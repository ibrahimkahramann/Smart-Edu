const User = require('../models/User');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const Category = require('../models/Category');
const Course = require('../models/Course');

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).redirect('/login');
  } catch (error) {
    const errors = validationResult(req);
    console.log(errors);
    console.log(errors.array()[0].msg);

    errors.array().forEach((error) => {
      req.flash('error', `${errors.array()[0].msg}`);
    });

    res.status(400).redirect('/register');
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      await bcrypt.compare(password, user.password, (err, same) => {
        // USER SESSION
        if (same) {
          req.session.userID = user._id;
          res.status(200).redirect('/users/dashboard');
        } else {
          req.flash('error', `Your password is not correct`);
          res.status(400).redirect('/login');
        }
      });
    } else {
      req.flash('error', `User is not exists!`);
      res.status(400).redirect('/login');
    }
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.logoutUser = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};

exports.getDashboardPage = async (req, res) => {
  const user = await User.findOne({ _id: req.session.userID }).populate(
    'courses'
  );
  const categories = await Category.find();
  const courses = await Course.find({ user: req.session.userID });
  const users = await User.find().sort('-role');
  res.status(200).render('dashboard', {
    user,
    page_name: 'dashboard',
    categories,
    courses,
    users,
  });
};


exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    
    if (user.role === 'teacher') {

      let teacherCourses = [];
      // Delete the courses taught by the teacher
      teacherCourses = await Course.find({ user: req.params.id });

      await Course.deleteMany({ user: req.params.id });

      // Update the students' enrolled courses

      for (const course of teacherCourses) {
        await User.updateMany(
          { $pull: { courses: { $in: course._id} } }
        );
      }
      User.findByIdAndDelete(req.params.id);
    }

    req.flash('success', `${user.name} has been removed successfully`);
    res.status(200).redirect('/users/dashboard');
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

