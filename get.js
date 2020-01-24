"use strict";

const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.getFavorite = (event, context, callback)=>{

    const params = {
        TableName: 'favorite'
    }
    dynamoDb.scan(params, (error,result)=>{
        if(error){
            console.error(error)
            callback(new Error("can not get the favorite list"))
            return
        }
        const response = {
            statusCode: 200,
            body:JSON.stringify(result)
        }
        callback(null,response)
    })
}