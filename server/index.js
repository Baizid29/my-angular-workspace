var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;

var connectionString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get("/getusers", function (request, response) {
    mongoClient.connect(connectionString, function (err, clientObject) {
        if (!err) {
            var dbo = clientObject.db("demodb");
            dbo.collection("tblusers").find().toArray(function (err, documents) {
                if (!err) {
                    response.send(documents);
                }
            })
        }
    })
});
app.post("/registeruser", function (request, response) {
    var data = {
        "UserId": request.body.UserId,
        "UserName": request.body.UserName,
        "Password": request.body.Password,
        "Age": parseInt(request.body.Age),
        "Email": request.body.Email,
        "Mobile": request.body.Mobile
    };
    mongoClient.connect(connectionString, function (err, clientObject) {
        if (!err) {
            var dbo = clientObject.db("demodb");
            dbo.collection("tblusers").insertOne(data, function (err, result) {
                if (!err) {
                    console.log("Record Inserted");
                }
            })
        }
    })
})


app.listen(8080);
console.log("Server Started :  http://127.0.0.1:8080");