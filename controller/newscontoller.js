const news = require("../models/news")

class newscontroller {
    static addnews = async (req, res) => {
        try {
            const { Title, Description, date, Author, Location, tags, total_views } = req.body;
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
        } catch (error) {
            console.log("Error in adding in news", error);
        }
    }
}

module.exports = newscontroller;