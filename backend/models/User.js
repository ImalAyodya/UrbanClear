const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6
  },
  role: {
    type: String,
    enum: ['admin', 'collector', 'citizen'],
    default: 'citizen'
  },
  phoneNumber: String,
  address: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;