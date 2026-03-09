const moviesStream = require("../scrapers/streams/movies")
const redis = require("../configs/redis")

const moviesStreamController = async(req,res,next)=>{
    try{
        const anime_id = req.query.id
    const catchData = await redis.get(anime_id)
    if(catchData){
        res.json({
            success: true,
            message: "redis found",
            results: catchData
        })
    }
    const results = await moviesStream(anime_id)
    await redis.set(anime_id,JSON.stringify(results),{
        ex: 500000
    })
    res.json({
        success: true,
        message: "data found",
        results
    })
    }catch(err){
        next(err)
    }
}

module.exports = moviesStreamController