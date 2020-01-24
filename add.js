"use strict";

const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.addFavorite = (event, context, callback) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "favorite",
    Item: {
      tweetId: data.id,
      text: data.text,
      createdAt: data.createdAt,
      tweetedBy: data.tweetedBy
    }
  };
  dynamoDb.put(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(new Error("can not add it to favorites"));
      return;
    }
    const response = {
      statusCode: 200,
      body: JSON.stringify(result)
    };
    callback(null, response);
  });
};
