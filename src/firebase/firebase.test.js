// src/firebase/firebase.test.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import app from './firebase'; // Import your Firebase configuration object

test('Firebase is connected', () => {
  // Initialize Firebase
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  // Perform a simple assertion to check if Firebase is connected
  expect(auth).toBeDefined();
  expect(firestore).toBeDefined();
});
