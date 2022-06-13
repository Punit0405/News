const news = require("../models/news")

class newscontroller {
    static addnews = async (req, res) => {
        try {
            const { Title, Description, Date, Author, Location, tags, total_views } = req.body;
            const newnews = new news({
                Title, Description, Date, Author, Location, tags, total_views
            })
            if (total_views > 100) {
                newnews.category = "top"
            }
            else if (total_views > 100) {
                newnews.category = "trending"
            }
            const currentdate = new Date();
            
            // console.log(newnews);
        } catch (error) {
            console.log("Errorin adding in news");
        }
    }
}

module.exports = newscontroller;