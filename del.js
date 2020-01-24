"use strict";

const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.delFavorite = (event,context, callback)=>{

    const params={
        TableName:'favorite',
        Key:{
            tweetId: event.pathParameters.id
        }
    }
    dynamoDb.delete(params, (error,result)=>{
        if(error){
            console.error(error)
            callback(new Error('can not remove favorite'))
            return
        }
        const response = {
            statusCode:200,
            body:JSON.stringify({message: "item removed from favorite"})
        }
        callback(null,response)
    })
}