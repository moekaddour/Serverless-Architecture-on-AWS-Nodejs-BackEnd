# Serverless Architecture on AWS + Nodejs BackEnd



## Installation

Git clone the link in a folder then run

```bash
npm install
```

## Usage


There are four endpoints described as following:
```
GET Method : Get all the latest tweets by Donald Trump
'https://qsiv7oaly0.execute-api.us-east-1.amazonaws.com/dev/getTweets'
```
```
POST Method : Add a chosen tweets to the favorite table in the dataBase "dynamoDb"
The body of the request should contain:
 {
      id: ....,
      text: ......,
      createdAt: ......,
      tweetedBy: ......
}
'https://qsiv7oaly0.execute-api.us-east-1.amazonaws.com/dev/add'
```
```
DELETE Method : Remove a chosen tweet from the favorite table in the dataBase 
replace the {id} by the id of the tweet you intend to delete from the dataBase
'https://qsiv7oaly0.execute-api.us-east-1.amazonaws.com/dev/deleteFavorite/{id}'
```
```
GET Method : Get all the favorite tweets from the favorite table in the data base
'https://qsiv7oaly0.execute-api.us-east-1.amazonaws.com/dev/getAllFavorite'
```
##