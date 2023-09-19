const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getSVG', (req, res) => {
	console.log("getSVG")
  res.send('Hello World!')
})

app.get('/lidlLogo.svg', (req, res) => {
	console.log(req.headers);
	console.log("lidlLogo.svg")
  res.send('Hello World!')
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