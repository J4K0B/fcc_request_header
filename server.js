var express = require('express');
var app = express();
var ip;
var lang;
var os;
var result;

app.get('/', function (req, res) {
  var regExp = /\(([^)]+)\)/;
  ip = req.headers["x-forwarded-for"];
  lang = req.headers["accept-language"].split(",")[0];
  os = regExp.exec(req.headers["user-agent"])[1];
  result = {
      "ipaddress": ip,
      "language": lang,
      "software": os
  };
  res.send(JSON.stringify(result));
  
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
})