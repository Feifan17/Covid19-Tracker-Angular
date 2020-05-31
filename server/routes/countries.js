const https = require('https');
const express = require('express');

const router = express.Router();


router.get('/countries', (request, response) => {
    https.get('https://api.covid19api.com/countries', res => {
        let countries = '';
        res.on('data', country => {
            countries += country;
        });
        res.on('end', () => {
            const countriesArr = JSON.parse(countries).map(country => country.Country).sort();
            response.json({
                countries: countriesArr
            });
        });
    })
});

// router.get('/:country', (request, response) => {
//     const country = request.param.country;
//     https.get('')
//     https.get()
// })

module.exports = router;