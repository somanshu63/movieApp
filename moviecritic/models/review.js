var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Movie = require("./movie");

var reviewSchema = new Schema({
  name: String,
  rating: Number,
  comment: String,
  movie: { type: Schema.Types.ObjectId, ref: "Movie" },
});
module.exports = mongoose.model("Review", reviewSchema);
