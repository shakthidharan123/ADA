const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], required: true },
  location: { type: String }, // User's location
  active_status: {
    type: Boolean,
    default: false // Default value is false (inactive)
  },
  accidents: [
    {
      accident: { type: mongoose.Schema.Types.ObjectId, ref: 'Accident' },
      status: { type: String, enum: ['ongoing', 'completed'], required: true }
    }
  ]
});

const accidentSchema = new mongoose.Schema({
  location: { type: String, required: true },
  complete_address: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  maps_link: { type: String },
  datetime: { type: Date, required: true },
  severity_label: { type: String, enum: ['accident', 'minor', 'major'], required: true }
});

module.exports = {
  User: mongoose.model('User', userSchema),
  Accident: mongoose.model('Accident', accidentSchema),
};
