"use strict";

const Twit = require("twit");
const config = require("./config");
const T = new Twit(config);

module.exports.fetchTweets = (event, context, callback) => {
  T.get("statuses/user_timeline", { screen_name: "realDonaldTrump" }, function(
    err,
    data,
    response
  ) {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(data)
    });
  });
};
