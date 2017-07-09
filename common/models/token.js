'use strict';

var Expo = require('expo-server-sdk');

module.exports = function(Token) {
  /**
   *
   * @param {string} token message
   * @param {string} message message
   * @param {Function(Error, string)} callback
   */

  Token.sendNotification = function(token, message, callback) {
    if (!Expo.isExponentPushToken(token)) {
      return callback({error: token + ' is an invalid token'}, null);
    }
    var expo = new Expo();
    expo.sendPushNotificationsAsync([{
      to: token,
      sound: 'default',
      body: message,
      data: {withSome: 'data'},
    }])
      .then(function(receipts) {
        callback(null, {result: 'notification sent'});
      })
      .catch(function(error) {
        callback({error: e}, null);
      });
  };
};
