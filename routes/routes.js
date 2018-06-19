var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });

    app.get("/api/traders", function(req, res) {
        console.log("Retrieving All Traders");
        res.status(200).send(
            { Traders : [{firstName : 'Matthew'}]});
        });

    app.post("/api/traders", function(req, res) {
        console.log(req['body']);
        console.log("Adding a new Trader");
        res.status(201).send();
    })
}
  
module.exports = appRouter;