const {MongoClient, ObjectID} = require("mongodb");

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err){
        return console.log("Unable to connect to the Database"); 
    }
    console.log("Connected to database successfully!");
    
    //Printing the count of the collection
    db.collection('Todos').count().then( (count)=>{
        console.log(`Todos count: ${count}`);
    }, (err)=>{
        console.log('Error in returning the count', err);
    } );

    //Getting all the items in the collection
    db.collection('Todos').find().toArray().then( (docs) => {
            // console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err)=>{
            console.log('Unable to fetch Todos', err);
    });


    // Getting Item with specified Criterea from the list
    db.collection('Todos').find({
        _id: new ObjectID("5f5686948ff97f19b4b1fd48")
        }).toArray().then( (docs) => {
            // console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err)=>{
            console.log('Unable to fetch Todos', err);
        });

    

     db.close();
});