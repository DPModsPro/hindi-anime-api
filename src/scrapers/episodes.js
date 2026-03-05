const axios = require("axios")
const cheerio = require("cheerio")
const url = require("../utils/Base_V5")
const header = require("../configs/headers")

const episodesScrapers = async(id, Season = 1)=>{
    const {data} = await axios.get(`${url}/episode/${id}-${Season}x8/`)
    const $ = await cheerio.load(data)
    const results = []
    $("li .episodes").each((_,el)=>{
        const title = $(el).find(".entry-title").text().replace("x","").replace("1","").replace("2","").replace("3","").replace("4","").replace("5","").replace("6","").replace("7","").replace("8","").replace("9","").replace("0","").replace(" 1","").trim()
        const seaOepi = $(el).find(".num-epi").text().trim()
        const [season,episode] = seaOepi.split("x")
        const poster = "https:" + $(el).find("img").attr("src")
        const animeId = $(el).find(".lnk-blk").attr("href")
        const anime_id = animeId.match(/episode\/(.+)-\d+x\d+/)[1];
        const time = $(el).find(".time").text()
        results.push({
            title,
            anime_id,
            season,
            episode,
            poster
        })
    })
    return results
}

module.exports = episodesScrapers