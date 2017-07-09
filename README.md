# Expo Notifications Node.js Server
This is a demo of a Node.js REST API created with [LoopBack](https://loopback.io) that sends Push Notifications to a React Native app using the [Expo SDK](https://expo.io)

Register an `ExponentPushToken` received from the app:
- `POST => /api/tokens`
```javascript
{
  token: 'ExponentPushToken[xxxxxxxx]'
}
```

Send a notification:
- `POST => /api/tokens/send-notification`
```javascript
{
  token: 'ExponentPushToken[xxxxxxxx]',
  message: 'some message'
}
```