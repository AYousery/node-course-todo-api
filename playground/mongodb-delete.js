const {MongoClient, ObjectID} = require("mongodb");

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err){
        return console.log("Unable to connect to the Database"); 
    }
    console.log("Connected to database successfully!");
    
    //deleteMany
    // db.collection('Todos').deleteMany({'text': 'Eat lunch'}).then( res => console.log(res));
    //deleteOne
    // db.collection('Todos').deleteOne({'text':'Eat lunch'}).then( res=> console.log(res));
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({'completed':false}).then( res => console.log(res));
    
    //Challenge 1 deleteMany with name : x
    // db.collection('Users').deleteMany({'name':'Abdelrahman'}).then( res => console.log(res));
    //Challenge 2 delete one with id : x
    db.collection('Users').findOneAndDelete({'_id': new ObjectID("5f65211fb81d7a6d1c6a2b32")}).then( res => console.log(res));
    // db.close();
});