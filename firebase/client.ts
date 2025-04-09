import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKla0lr4qcPZLK0aKAdCpHJ10u45Ybi1g",
  authDomain: "ai-agent-ab8fa.firebaseapp.com",
  projectId: "ai-agent-ab8fa",
  storageBucket: "ai-agent-ab8fa.firebasestorage.app",
  messagingSenderId: "464835315860",
  appId: "1:464835315860:web:ffcab9a88411afc2b4cc81",
  measurementId: "G-PWQC1ZEEJ6",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// ✅ Only call getAnalytics in the browser
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export { analytics };
