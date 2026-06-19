const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  expertise: { type: Number, min: 0, max: 100, required: true },
  badgeImage: { type: String }, // URL or image path
});

const EducationSchema = new mongoose.Schema({
  institute: { type: String, required: true },
  degree: { type: String, required: true },
  fieldOfStudy: { type: String, required: true },
  startDate: { type: Date },
  endDate: { type: Date },
  grade: { type: String },
  description: { type: String },
});

const ExperienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  location: { type: String },
  responsibilities: [{ type: String }],
});

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [{ type: String }],
  link: { type: String },
  image: { type: String },
});

const TestimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String },
  message: { type: String, required: true },
  image: { type: String },
});

const PortfolioSchema = new mongoose.Schema({
  email: { type: String, required: true },
  phone: { type: String, required: true },
  heading: { type: String, required: true },
  description: { type: String, required: true },
  resume: { type: String, required: true },
  designation: [{ type: String, required: true }],
  currentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  skills: [SkillSchema],
  education: [EducationSchema],
  experience: [ExperienceSchema],
  project: [ProjectSchema],
  testimonials: [TestimonialSchema],
}, {
  timestamps: true,
});

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);
module.exports = Portfolio;
