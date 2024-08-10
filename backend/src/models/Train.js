const mongoose = require('mongoose');
const trainSchema = new mongoose.Schema({
 trainId: {
 type: String,
 required: true,
 unique: true,
 },
 location: {
 latitude: {
 type: Number,
 required: true,
 },
 longitude: {
 type: Number,
 required: true,
 },
 },
 speed: {
 type: Number,
 required: true,
 },
 heading: {
 type: String,
 required: true,
 },
 timestamp: {
 type: Number,
 required: true,
 },
});
const Train = mongoose.model('Train', trainSchema);
module.exports = Train