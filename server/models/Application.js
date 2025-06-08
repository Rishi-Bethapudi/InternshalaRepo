const mongoose = require('mongoose');
const ApplicationSchema = new mongoose.Schema({
  company: String,
  category: String,
  coverLetter: String,
  user: Object,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['accepted', 'pending', 'rejected'],
    default: 'pending',
  },
  Application: Object,
});
module.exports = mongoose.model('Application', ApplicationSchema);
