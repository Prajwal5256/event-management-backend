import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,  
    lowercase: true,
    trim: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['student', 'club_admin', 'college_admin'],
    default: 'student'
  },
  clubs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Club' 
    }
  ]
}, { timestamps: true }); 

export const User = mongoose.model('User', userSchema);
