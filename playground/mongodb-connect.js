const {MongoClient, ObjectID} = require("mongodb");

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err){
        return console.log("Unable to connect to the Database"); 
    }
    console.log("Connected to database successfully!");

    // db.collection('Todos').insertOne({
    //     text:'Reading a book', complete:'true'
    // }, (err,result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined,2));
    // });

    // db.collection('Users').insertOne({
    //     // _id: obj,
    //     name: 'Basem',
    //     age: '10',
    //     location: 'Cairo'        
    // }, (err, result) => {
    //     if(err){
    //     return console.log('Unable to insert Users', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined,2));
    //     // console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});