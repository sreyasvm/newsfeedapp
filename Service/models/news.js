var mongoose = require('mongoose');

let Schema = mongoose.Schema;

var newsSchema = new Schema({
    news_content: String,
    rating: Number
})

var News = mongoose.model('News', newsSchema);

module.exports = News
