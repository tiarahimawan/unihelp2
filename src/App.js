import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZEgmy-kvljNCiITyPeohpsVFOOGju9eo",
  authDomain: "unihelp-e1a6d.firebaseapp.com",
  projectId: "unihelp-e1a6d",
  storageBucket: "unihelp-e1a6d.appspot.com",
  messagingSenderId: "1022868403573",
  appId: "1:1022868403573:web:095a08dedbc652112b4f3c",
  measurementId: "G-V65SC8GHLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const authorize = getAuth(app);


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
