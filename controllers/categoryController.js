const Course = require('../models/Category');

exports.createCategory = async (req, res) => {
  try {
    const category = await Course.create(req.body);
    res.status(201).json({
      status: 'succes',
      category,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};