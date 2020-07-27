const express = require('express');
const axios = require('axios');
const searchRouter = express.Router();
const cheerio = require('cheerio');
const lodash = require('lodash');

const url = 'https://www.amazon.com/s?k='

searchRouter.post('/', async (req, res) => {
    const searchUrl = url+req.body.searchField;
    try {
        const response = await axios.get(searchUrl);
        const html = response.data;
        const $ = cheerio.load(html);

        //Scrape Prices
        const prices = $(".a-offscreen").text().split("$").map(item => '$'+item);
        prices.shift();

        //Scrape Image URLs
        images = [];
        $(".s-image").each((i, item) => {
            images.push($(item).attr('src'));
        });

        //Scrape Product Names
        names = []
        $(".a-size-medium.a-color-base.a-text-normal").each((i, item) => {
            names.push($(item).text());
        });
        
        //Scrape URL links
        urls = [];
        $(".a-section.a-spacing-none span.rush-component a.a-link-normal").each((i, item) => {
            urls.push("https://amazon.com"+$(item).attr('href'));
        })

        a = lodash.zip(prices, images, names, urls);
        res.json({ searchResults: a });
        // const respondse = await axios.get(searchUrl);
    }
    catch(err) {
        console.log(err);
        res.json({ searchResults: ['Err'] });
    }
});

module.exports = searchRouter;