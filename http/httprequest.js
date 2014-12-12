var http = require("http");
var querystring = require("querystring");

var contents = querystring.stringify({
    name: "hupantingxue",
    email: "hupantingxue@126.com",
    address: "Shenzhen, Guangdong, China"
});

var options = {
    host: "www.jdkr.cn",
    path: "/",
    method: "POST", 
    headers:{
        "Content-Type":"application/json",
        "Content-Length":contents.length
    }
};

var req = http.request(options, function(res){
    res.setEncoding("utf8");
    res.on("data", function(data){
        console.log(data);
    });
});

req.write(contents);
req.end();
