const { Schema, model } = require("mongoose");
const CinematographFilm_Schema = Schema({
  title: { type: String },
  year: { type: Number },
  type: { type: String },
});

module.exports=model('CinematographFilm',CinematographFilm_Schema);