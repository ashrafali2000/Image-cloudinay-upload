const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xl5izmh.mongodb.net/`).then(res => {
  console.log('database connected!');
}).catch(err => {
  console.log('Err', err);
});

module.exports = { mongoose }