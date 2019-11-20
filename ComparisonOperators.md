# Greater than Element.

This comparison Operator can help us to find elements greater than a specified number.

Example: 

This selects every movie that his Runtime is greater than 90.

```
db.movieDetails.find({runtime: {$gt: 90}}, {title : 1, runtime:1})
```

This selects every movie than is greater than 90 and less than 120minutes.

```
db.movieDetails.find({runtime: {$gt: 90, $lte: 120}}, {title : 1, runtime:1})
```

This selects a movie that his tomato meter is greater or equal to 95 and his runtime is greater. 

```
db.movieDetails.find({runtime: {$gte: 180}, "tomato.meter": {$gte: 95}}, {_id:0, title: 1, runtime: 1})
```


# Element Operators.

## $exists

This helps us to se if a field exists on a document, syntax:

``
{mpaaRating: {$exists: false}}
``
## $type

This is used to look for a field with an specific type of value.

``
db.movies.find({viewerRating: {$type: "int"}}).pretty()
``

# Logical Operators

$or takes an array as an argument, the elements of that array is a select and one of that arguments have to be true to get the answer.

db.movieDetails.find({$or: [{"tomato.meter": {$gt: 95}},
                            {"metacritic": {$gt: 88}}]},
                            {_id: 0, title: 1, "tomato.meter": 1, "metacritic":1})


$and

db.movieDetails.find({$and: [{"tomato.meter": {$gt: 95}},
                            {"metacritic": {$gt: 88}}]},
                            {_id: 0, title: 1, "tomato.meter": 1, "metacritic":1})
