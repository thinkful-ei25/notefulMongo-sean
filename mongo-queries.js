//mongo localhost:27017/noteful < mongo-queries.js
'use strict';

//db.notes.find(); 

db.notes.find().pretty(); 
db.notes.find({}, {title: 1, content: 1}).pretty(); 