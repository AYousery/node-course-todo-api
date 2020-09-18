const {MongoClient, ObjectID} = require("mongodb");

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err){
        return console.log("Unable to connect to the Database"); 
    }
    console.log("Connected to database successfully!");
    
    // findOneAndUpdate _Changing Key Value_

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5f5686948ff97f19b4b1fd48")
    // }, {
    //     $set: {
    //         complete: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then( res => console.log(res));
    

    //findOneAndUpdate _Removing a certain Key_
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5f5686948ff97f19b4b1fd48")
    // }, {
    //     $unset: {
    //         "completed":""
    //     }
    // }, {
    //     returnOriginal: false
    // }).then( res => console.log(res), err => console.log("Unable to update: "+err));


    //findOneAndUpdate _Changing Key value and incrementing the age_
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5f5681ba68f6fb3fe0f379fe")
    }, {
        $set: {
            name: "Abdelrahman"
        },
        $inc:{
            age: 1
        }
    }, {
        returnOriginal: false
    }).then( res => console.log(res), err => console.log("Unable to update: "+err));
    // db.close();
});