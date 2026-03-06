const scraperMovies = require("../scrapers/movies")
const redis = require("../configs/redis")

const moviesController = async (req, res, next) => {
    try {
        const page = req.query.page
        const key = `movie-${page}`
        const cachedData = await redis.get(key)
        if (cachedData) {
            res.json({
                success: true,
                results: cachedData
            })
        }
        const results = await scraperMovies(page)
        await redis.set(key, results, {
            ex: 45000
        })
        res.json({
            success: true,
            results
        })
    } catch (err) {
        next(err)
    }
}

module.exports = moviesController