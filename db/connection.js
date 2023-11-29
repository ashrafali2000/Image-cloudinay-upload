const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ashratech.fbnrqrf.mongodb.net/cludinary-check-1?retryWrites=true&w=majority`).then(res => {
  console.log('database connected!');
}).catch(err => {
  console.log('Err', err);
});

module.exports = { mongoose }