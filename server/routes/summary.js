const express = require('express');
const https = require('https');

const router = express.Router();

/* Get COVID-19 summary data */
router.get('/summary', (request, response) => {
    https.get('https://api.covid19api.com/summary', res => {
        let data = '';
        res.on('data', chunk => {
            data += chunk;
        });
        res.on('end', () => {
            const dataArr = JSON.parse(data);
            const countriesArr = dataArr.Countries.map(countryData => {
                return {
                    "country": countryData.Country,
                    "newConfirmed": countryData.NewConfirmed,
                    "totalConfirmed": countryData.TotalConfirmed,
                    "newRecovered": countryData.NewRecovered,
                    "totalRecovered": countryData.TotalRecovered,
                    "newDeaths": countryData.NewDeaths,
                    "totalDeaths": countryData.TotalDeaths
                }
            });
            countriesArr.unshift({
                "country": "Global",
                "newConfirmed": dataArr.Global.NewConfirmed,
                "totalConfirmed": dataArr.Global.TotalConfirmed,
                "newRecovered": dataArr.Global.NewRecovered,
                "totalRecovered": dataArr.Global.TotalRecovered,
                "newDeaths": dataArr.Global.NewDeaths,
                "totalDeaths": dataArr.Global.TotalDeaths
            });
            response.json({
                countries: countriesArr
            });
        });
    });
});

module.exports = router;