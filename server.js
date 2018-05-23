var express = require('express');

var axios = require('axios');
var app = express();

app.use(express.static('public'));

app.use('/flickr/:search', function (req, res) {

  console.log(req.params.search);
    const getTheTags = req.params.search;
    const FLICK_URL = `http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=flickrcb&tags=${getTheTags}&nojsoncallback=1`;
    const requestUrl = `${FLICK_URL}`;
    console.log(requestUrl);
    axios.get(requestUrl).then((response) => {
     res.send(response.data);
   });

});

app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});
