const axios = require("axios");
const cheerio = require("cheerio");
const url = require("../../utils/Base_V5")
async function scrapePlayers(anime_id) {

    const { data } = await axios.get(`${url}/movies/${anime_id}`);

    const $ = cheerio.load(data);

    const embedLinks = [];
    $("aside.video-player iframe").each((i, el) => {

        let src = $(el).attr("src") || $(el).attr("data-src");

        if (src) {
            src = src.replace(/&#038;/g, "&");
            embedLinks.push(src);
        }

    });
    const results = [];

    for (const link of embedLinks) {

        try {

            const { data } = await axios.get(link);

            const $$ = cheerio.load(data);

            const realIframe = $$("iframe").attr("src");

            if (realIframe) {

                results.push({
                    iframe: realIframe
                });

            }

        } catch (e) {
            continue;
        }

    }
    return results;

}
module.exports = scrapePlayers;