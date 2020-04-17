const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:3000/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
 
let users = [{name: "webscraping"} , {name: "webscraping"}];
 
mongoClient.connect(function(err, client){
      
    const db = client.db("usersdb");
    const collection = db.collection("users");
     
    collection.insertMany(users, function(err, results){
              
        console.log(results);
        client.close();
    });
});
 
   
