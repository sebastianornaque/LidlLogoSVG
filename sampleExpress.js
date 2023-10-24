const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) 

app.get('/getSVG', (req, res) => {
	console.log("getSVG - get")
	console.log(req.headers);
	console.log(req.body);
	console.log(req.query);
  res.send(5)
})

app.post('/getSVG', (req, res) => {
	console.log("getSVG- post")
	console.log(req.headers);
	console.log(req.body);
	console.log(req.query);
	
  res.send('Hello World!')
})

app.get('/lidlLogo.svg', (req, res) => {
	console.log(req.headers);
	console.log("lidlLogo.svg")
	res.setHeader("Content-Type","image/svg+xml");
	res.setHeader("Content-Length","1430");
	
  res.send(`<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<svg viewBox="0 0 807 807" width="75" height="75" version="1.2" baseProfile="tiny-ps" xmlns="http://www.w3.org/2000/svg">
  <title>LIDL</title>
  <path d="M8 8.9h790.1V799H8z" fill="#005ea4" />
  <path d="M8 8.9h790.1V799H8V8.9zM0 807h806.1V.9H0V807z" fill="#fff" />
  <path d="M403.1 53.5c-193.5 0-350.4 157-350.4 350.5 0 193.4 157 350.3 350.4 350.3 193.5 0 350.4-157 350.4-350.3 0-193.5-157-350.5-350.4-350.5" fill="#fff200" />
  <path d="M381.3 413.8L319.5 352l-71.4 71.4v24l18-18.1 49.7 49.9-18.3 18.4 11.9 12 99.6-99.7V386l-27.7 27.8" fill="#ec1f26" />
  <path d="M92.5 338.9h110.2v23.8h-18.4v76.9l63.8-35.5v65.1H92.5v-23.9h18.4v-82.6H92.5v-23.8M557.1 338.9v23.8h18.5v82.6h-18.5v23.9h155.7v-65.1l-63.9 35.5v-76.9h18.5v-23.8H557.1" fill="#005ea4" />
  <path d="M310.3 264.9c21.7 0 39.2 17.5 39.2 39.1 0 21.7-17.6 39.2-39.2 39.2s-39.2-17.6-39.2-39.2c0-21.7 17.6-39.1 39.2-39.1" fill="#ec1f26" />
  <path d="M403.1 29.8C196.6 29.8 29 197.4 29 404c0 206.5 167.6 374 374.1 374s374.1-167.5 374.1-374c0-206.6-167.6-374.2-374.1-374.2m0 724.6c-193.5 0-350.4-157-350.4-350.3 0-193.6 157-350.5 350.4-350.5 193.5 0 350.4 157 350.4 350.5 0 193.3-157 350.3-350.4 350.3z" fill="#ec1f26" />
  <path d="M495.7 338.9H390.6v23.8H409v82.6h-18.4v23.9h105.1c77.7 0 78.5-130.3 0-130.3" fill="#005ea4" />
  <path d="M480.9 428.5h-5.2v-49.2h4.4c23 .1 23 49.3.8 49.2" fill="#fff200" />
</svg>`)
})

async function getSVG(path) {
    logger.log('Start function fireSingleEvent');
    var fetchFireSingleEvent = new Promise((resolve, reject) => {
        //var path= "https://marketingcloud-uat.lidl.com/mkc/activity/coupons/images/LIDL_logo.svg";
        

        var responseData = "";
        ///var post_req_getToken = http.request(get_options, function (res2) {
		var post_req_getToken = http.get(path, function (res2) {
			console.log("statusCode: ", res2.statusCode); // <======= Here's the status code
			console.log("headers: ", res2.headers);
            res2.on('data', function (chunk) {
                responseData += chunk;
            });
            res2.on('end', function () {
                if (responseData.indexOf("errorcode") == -1) {
                    resolve(responseData);
                } else {
                    resolve(responseData);
                }
            });
        });
        post_req_getToken.on('error', (error) => {
            logger.error("Error on fireSingleEvent:" + error);
            reject(error);
        });
        
        post_req_getToken.end();

    });
    return fetchFireSingleEvent;
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})