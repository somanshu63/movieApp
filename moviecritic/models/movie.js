var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const Review = require("./review");
var slug = require("slug");

var movieSchema = new Schema({
  name: String,
  slug: String,
  releaseDate: String,
  averageRating: Number,
});

movieSchema.pre("save", async function (next) {
  if (this.name) {
    this.slug = slug(this.name);
  }
  next();
});

module.exports = mongoose.model("Movie", movieSchema);
