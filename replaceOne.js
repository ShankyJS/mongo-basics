db.movieDetails.replaceOne(filter, doc);

let filter = {title: "House, M.D., Season Four: New Beginnings"}

let doc = db.movieDetails.findOne(filter);

doc.poster = "https://www.imdb.com/title/tt1329164/mediaviewer/rm2619416576";

doc.genres;

doc.genres.push("TV Series");

//This is just happening on our mongo shell because we are using
//local variables to work with 

db.movieDetails.replaceOne(filter, doc);

//after this method we can replace the document with the new content


