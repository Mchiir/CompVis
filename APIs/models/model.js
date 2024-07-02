import mongoose from 'mongoose';

const { Schema } = mongoose;

const generalInfoSchema = new Schema({
  title: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  position: { type: String, required: true },
  company: { type: String, required: true },
  businessArena: { type: String, required: true },
  employees: { type: String, required: true },
}, {
  timestamps: true
});

const contactInfoSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true
  },
  additionalInfo: {
    type: String,
    required: true
  },
  zipCode: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  phoneCode: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  terms: {
    type: Boolean,
    required: true
  }
}, {
  timestamps:true,
})

const GeneralInfos = mongoose.model('GeneralInfos', generalInfoSchema);
const ContactInfos = mongoose.model('ContactInfos', contactInfoSchema);

export { GeneralInfos, generalInfoSchema };
export { ContactInfos, contactInfoSchema };