var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root"
})

var appRouter = function (app) {
    app.get("/", function(req, res) {
        console.log("Connected!");
        res.send(200);
    });

    app.get("/api/traders", function(req, res) {
        console.log("Retrieving All Traders");
        con.query("use TraderApp", function(err, result){
            if (err) throw (err);
        });

        con.query("SELECT * FROM traders", function(err, result) {
            if (err) throw(err);
            var length = result.length;
            var jsonResponse = "{ \"Traders\": [";
            for(var i = 0; i < length; i++)
            {   
                jsonResponse += "{ \"firstName\" : \"" + result[i]['firstName'] + "\"}"
                console.log(result[i]['firstName']);
                if (i < length -1)
                {
                    jsonResponse+= ",";
                }
                else
                {
                    jsonResponse += "]}"
                }
            }
            console.log(jsonResponse);
            jsonResponse = JSON.parse(jsonResponse);
            res.status(200).send(jsonResponse);
        })
    });

    app.post("/api/traders", function(req, res) {
        console.log(req['body']);
        console.log("Adding a new Trader");
        con.query("use TraderApp", function(err, result){
            if (err)
            {
                throw (err);
                res.status(400).send();
            }
            
        });
        var queryString = "INSERT INTO traders (firstName) VALUES (\"" + req['body']['firstName'] +"\");"
        con.query(queryString, function(err, result){
            if (err)
            {
                throw (err);
            }
        });
        console.log("Trader Added to Database!");
        res.status(201).send();
    })

}
  
module.exports = appRouter;