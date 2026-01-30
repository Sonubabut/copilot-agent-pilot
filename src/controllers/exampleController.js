// HTTP logic only
const exampleService = require('../services/exampleService');

exports.getExample = (req, res) => {
  try {
    const data = exampleService.getExampleData();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
