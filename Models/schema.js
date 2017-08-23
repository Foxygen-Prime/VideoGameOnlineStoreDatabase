// const mongoose = require('mongoose');

const videoGameLibrarySchema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
        unique: true
      },
      general: {
        platform: [String]
        genre: []
        numberOfPlayers: String,
        albumArt: String,
        languages: {
          english: Boolean,
          french: Boolean,
          italian: Boolean,
          german: Boolean,
          spanish: Boolean,
          chinese: Boolean,
          korean: Boolean,
          japanese: Boolean,
          portuguese: Boolean,
          russian: Boolean,
        }
        ESRB: {
          rating: String,
          warnings: String,
        }
      }
      purchasingInfo: {
        earlyAcces: Boolean,
        sales_promos: {
          active: Boolean,
          price: Number,
        }
        regularPrice: Number,
        available: Boolean,
        expansions: {
          name: []
          price: Number
        }
      }
      development: {
        developer: String,
        publisher: String,
        date released: Number,
      }
      reviews: {
        rating: {
          stars: Number,
          comments: String,
        }
        awards: [String]
      }
    }



const videoGameData = mongoose.model('videoGameData', videoGameLibrarySchema);

    module.exports = Recipe;
