var express = require("express");
var router = express.Router();
var Movie = require("../models/movie");
const Review = require("../models/review");

// get movies
router.get("/", function (req, res, next) {
  Movie.find((err, movies) => {
    if (err) return next(err);
    if (movies.length > 0) {
      res.status(200).json({ movies });
    } else {
      res.status(200).json("no movies to show");
    }
  });
});

// add movie
router.post("/", async (req, res, next) => {
  try {
    var movie = await Movie.create(req.body);
    res.status(200).json({ movie });
  } catch (error) {
    next(error);
  }
});

// update movie
router.put("/:slug", async (req, res, next) => {
  var slug = req.params.slug;
  var { name, releaseDate, averageRating } = req.body;
  try {
    var movie = await Movie.findOne({ slug: slug });
    movie.name = name;
    movie.releaseDate = releaseDate;
    movie.averageRating = averageRating;
    movie = await movie.save();
    var movie = await Movie.findOne({ slug: slug });
    res.status(200).json({ movie });
  } catch (error) {
    next(error);
  }
});

//get movie
router.get("/:slug", async (req, res, next) => {
  var slug = req.params.slug;
  try {
    var movie = await Movie.findOne({ slug: slug });
    res.status(200).json({ movie });
  } catch (error) {
    next(error);
  }
});

// delete movie
router.delete("/:slug", async (req, res, next) => {
  var slug = req.params.slug;
  try {
    var movie = await Movie.findOneAndDelete({ slug: slug });
    await Review.deleteMany({ movie: movie.id });
    res.status(200).json({ deletedMovie: movie });
  } catch (error) {
    next(error);
  }
});

//add review
router.post("/:slug/reviews", async (req, res, next) => {
  var slug = req.params.slug;
  var movie = await Movie.findOne({ slug: slug });
  req.body.movie = movie.id;
  try {
    var review = await (await Review.create(req.body)).populate("movie");
    res.status(200).json({ review });
  } catch (error) {
    next(error);
  }
});

//get reviews from a movie
router.get("/:slug/reviews", async function (req, res, next) {
  var slug = req.params.slug;
  var array = [];
  try {
    var movie = await Movie.findOne({ slug: slug });
    var reviews = await Review.find({ movie: movie.id });
    if (reviews.length > 1) {
      res.status(200).json({ reviews });
    } else {
      res.status(200).json("no reviews");
    }
  } catch (error) {}
});

//delete review
router.delete("/:slug/reviews/:id", async (req, res, next) => {
  var id = req.params.id;
  try {
    var review = await Review.findByIdAndDelete(id);
    res.status(200).json({ deletedReview: review });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
