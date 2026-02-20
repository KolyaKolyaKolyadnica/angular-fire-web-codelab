importScripts(
  "https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js",
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.12.5/firebase-messaging-compat.js",
);

firebase.initializeApp({
  apiKey: "AIzaSyDMka0csHPgzc2MslHIKcTYka-YoNj_C-c",
  authDomain: "friendlychat-d1d9e.firebaseapp.com",
  projectId: "friendlychat-d1d9e",
  storageBucket: "friendlychat-d1d9e.firebasestorage.app",
  messagingSenderId: "943796703431",
  appId: "1:943796703431:web:887b13189237ded1dd2ee2",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(({ notification }) => {
  self.registration.showNotification(notification?.title ?? "Notification", {
    body: notification?.body ?? "",
  });
});
