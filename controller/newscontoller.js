const news = require("../models/news")

class newscontroller {
    static addnews = async (req, res) => {
        try {
            const { Title, Description, date, Author, Location, tags } = req.body;
            const newnews = new news({
                Title, Description, date, Author, Location, tags, total_views
            })
            const passdate = new Date(date);
            const currentdate = new Date();
            console.log(currentdate.toDateString());
            console.log(passdate.toDateString());
            if (total_views > 100) {
                newnews.category = "top"
            }
            else if (total_views > 50 && total_views < 100) {
                newnews.category = "trending"
            }
            else if (passdate.toDateString() == currentdate.toDateString()) {
                newnews.category = "new"
            }
            else if (total_views > 50 && passdate.toDateString() == currentdate.toDateString()) {
                newnews.category = "trending";
                console.log("same");
            }
            newnews.save();
            res.send("News Added Successfully");
        } catch (error) {
            console.log("Error in adding in news", error);
        }
    }

    static getbytitle = async (req, res) => {
        try {
            const { title } = req.body;
            const newsfound = await news.findOne({ Title: title })
            if (newsfound) {
                newsfound.total_views++;
                newsfound.save();
                res.send("Views Incremented Successfully")
            }
            else {
                res.send("news not found")
            }

        } catch (error) {
            res.send("Internal server")
        }
    }

    static getbyid = async (req, res) => {
        try {
            const { id } = req.body;
            const newsfound = await news.findById(id)
            if (newsfound) {
                newsfound.total_views++;
                newsfound.save();
                res.send("Views Incremented Successfully")
            }
            else {
                res.send("news not found")
            }

        } catch (error) {

        }
    }
    static searchNews = async (req,res)=>{
        
    }
}

module.exports = newscontroller;