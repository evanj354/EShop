const express = require('express');
const axios = require('axios');
const searchRouter = express.Router();
const cheerio = require('cheerio');
const lodash = require('lodash');

const amazonUrl = 'https://www.amazon.com/s?k=';

const walmartUrl = 'https://www.walmart.com/search/?query=';


const getWalmartResults = async (searchField) => {
    const searchUrl = walmartUrl+searchField;
    try {
        const response = await axios.get(searchUrl);
        const html = response.data;
        const $ = cheerio.load(html);

        let images = [];
        let names = [];
        let urls = [];
        let prices = [];

        

        $(".search-result-gridview-item-wrapper").each((i, item) => {
            images.push($(item).find('img').attr('data-image-src'));
            names.push($(item).find('img').attr('alt'));
            urls.push('https://walmart.com/'+$(item).find('a.search-result-productimage').attr('href'));
            prices.push($(item).find('span.price.display-inline-block.arrange-fit.price span.visuallyhidden').first().text());
        })
        
        a = lodash.zip(prices, images, names, urls);
        return a;
    }
    catch(err) {
        console.log(err);
        res.json({Error: err});
    }
}


const getAmazonResults = async (searchField) => {
    const searchUrl = amazonUrl+searchField;
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
        return a;
        // const respondse = await axios.get(searchUrl);
    }
    catch(err) {
        console.log(err);
        res.json({ searchResults: ['Err'] });
    }
}

searchRouter.post('/:searchField', async (req, res) => {
    const fieldDict = {
        'Amazon': getAmazonResults,
        'Walmart': getWalmartResults
    }

    const leftResults = fieldDict[req.body.searchField[0]](req.params.searchField);
    const rightResults = fieldDict[req.body.searchField[1]](req.params.searchField);
    const results = await Promise.all([leftResults, rightResults]);

    res.json({resultsLeft: results[0], resultsRight: results[1]});
    
});

module.exports = searchRouter;