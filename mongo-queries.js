//mongo localhost:27017/noteful < mongo-queries.js
'use strict';

//db.notes.find(); 

//db.notes.find().pretty(); 

//db.notes.find({}, {_id: 0, title: 1, content: 1}).pretty(); 

db.notes.find({}, {_id: 0, title: 1}).sort({_id: -1}).pretty(); 
