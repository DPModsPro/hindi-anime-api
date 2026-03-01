const newAddedEpisode = require("../scrapers/newAddedEpisodes")

const newAddedController = async(req,res,next)=>{
    try{
        const results = await newAddedEpisode()
        res.json({
            succes:true,
            message: "Data Found!!",
            results
        })
    }catch(err){
        next(err)
    }
}
module.exports = newAddedController