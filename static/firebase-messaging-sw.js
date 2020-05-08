
importScripts(
  'https://www.gstatic.com/firebasejs/7.14.3/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/7.14.3/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyB8TmzFGay-sxch4Y9WHXmhAaKlUYYBvf8","authDomain":"samsung-fc1e8.firebaseapp.com","databaseURL":"https:\u002F\u002Fsamsung-fc1e8.firebaseio.com","projectId":"samsung-fc1e8","storageBucket":"samsung-fc1e8.appspot.com","messagingSenderId":"712277440735","appId":"1:712277440735:web:be1bd020d43632190fd16a","measurementId":"G-01MQTN9JJE"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function(payload) {
  console.info("SW received the message: ", payload);
  const notification = payload.notification;

  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body,
    icon: notification.image,
    vibrate: notification.vibrate || [200, 100, 200, 100, 200, 100, 200],
    actions: [
      // First item is always taken as click action (see comment below)
      {
        title: "Visit",
        action: notification.clickPath
      }
    ]
  };
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  )
})

self.addEventListener('notificationclick', function(e) {
  const notification = e.notification
  // MARK 1 -> always takes first item
  const clickAction = notification.actions[0].action
  const action = e.action
  if (action === 'close') {
    notification.close()
  } else {
    clients.openWindow(clickAction)
    notification.close()
  }
})
