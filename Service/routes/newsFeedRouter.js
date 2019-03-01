var express = require('express');
var router = express.Router();
var request = require('request');
let Parser = require('rss-parser');
let parser = new Parser();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.json([{
        url: "www.google.co.in", title: "Google"
    },
    {
        url: "www.sreyas.com", title: "Sreyas"
    }
    ]);
});

router.get('/fetch/', function (req, res, next) {

//     request('http://rss.nytimes.com/services/xml/rss/nyt/Technology.xml', function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body) // Print the google web page.
        
//      }
// })
    (async () => {
 
    let feed1 = await parser.parseURL('http://rss.nytimes.com/services/xml/rss/nyt/Technology.xml');
    console.log(feed1.title);
   
    feed1.items.forEach(item => {
      console.log(item.title + ':' + item.link)
    });
    console.log("\n \n \n \n \n \n");
    console.log("#################Feed2##############");
    let feed2 = await parser.parseURL('http://rss.nytimes.com/services/xml/rss/nyt/Europe.xml');
    console.log(feed2.title);
   
    feed2.items.forEach(item => {
      console.log(item.title + ':' + item.link)
    });

    
   
  })();

res.json("Done")
});

/* POST to mongo DB. */
router.post('/write', function (req, res) {
    News.create({
        news_content: req.body.news_content,
        rating: req.body.rating
    }).then(news =>{ 
        res.json(news)
    });
});

module.exports = router;
