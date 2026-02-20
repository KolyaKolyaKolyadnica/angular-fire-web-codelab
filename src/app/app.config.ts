import { ApplicationConfig } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import {
  provideFirestore,
  getFirestore,
  connectFirestoreEmulator,
} from '@angular/fire/firestore';
import {
  provideFunctions,
  getFunctions,
  connectFunctionsEmulator,
} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import {
  provideStorage,
  getStorage,
  connectStorageEmulator,
} from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
    provideMessaging(() => getMessaging()),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'friendlychat-d1d9e',
        appId: '1:943796703431:web:887b13189237ded1dd2ee2',
        storageBucket: 'friendlychat-d1d9e.firebasestorage.app',
        apiKey: 'AIzaSyDMka0csHPgzc2MslHIKcTYka-YoNj_C-c',
        authDomain: 'friendlychat-d1d9e.firebaseapp.com',
        messagingSenderId: '943796703431',
        measurementId: 'G-X6WP6760QC',
        // projectNumber: '943796703431',
        // version: '2',
      }),
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
  ],
};
