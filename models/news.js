const mongoose = require('mongoose');

const newsschema = mongoose.Schema({
    Title: {
        type: String
    },
    Description: {
        type: String
    },
    date: {
        type: String
    },
    Author: {
        type: String,
        enum: ["Mathias Newburn", "Rey Rutty", "Magdaia Shellard", "Kathrine Faichney"]
    },
    Location: {
        type: String,
        enum: ["London", "New York"]
    },
    tags: {
        type: String,
        enum: ["politics", "crime", "tech", "sports", "health"]
    },
    total_views: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["trending", "top", "new"]
    }
})

const news = mongoose.model("news", newsschema)
module.exports = news;