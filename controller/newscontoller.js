const news = require("../models/news")

class newscontroller {
    static addnews = async (req, res) => {
        try {
            const { Title, Description, date, Author, Location, tags } = req.body;
            const newnews = new news({
                Title, Description, date, Author, Location, tags, total_views
            })

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
                const passdate = new Date(newsfound.Date);
                const currentdate = new Date();
                newsfound.total_views++;
                if (newsfound.total_views > 100) {
                    newnews.category = "top"
                }
                else if (newsfound.total_views > 50 && newsfound.total_views < 100) {
                    newnews.category = "trending"
                }
                else if (passdate.toDateString() == currentdate.toDateString()) {
                    newnews.category = "new"
                }
                else if (newsfound.total_views > 50 && passdate.toDateString() == currentdate.toDateString()) {
                    newnews.category = "trending";
                    console.log("same");
                }
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
                const passdate = new Date(newsfound.Date);
                const currentdate = new Date();
                newsfound.total_views++;
                if (newsfound.total_views > 100) {
                    newnews.category = "top"
                }
                else if (newsfound.total_views > 50 && newsfound.total_views < 100) {
                    newnews.category = "trending"
                }
                else if (passdate.toDateString() == currentdate.toDateString()) {
                    newnews.category = "new"
                }
                else if (newsfound.total_views > 50 && passdate.toDateString() == currentdate.toDateString()) {
                    newnews.category = "trending";
                    console.log("same");
                }
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