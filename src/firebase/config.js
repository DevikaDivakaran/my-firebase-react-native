import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig ={
    apiKey: 'AIzaSyDLi4fEDOtjdcxdwog5AwX1AZ4zoKApuZk',
    authDomain: 'your-auth-domain-b1234.firebaseapp.com',
    databaseURL: 'https://your-database-name.firebaseio.com',
    projectId: 'react-native-frb',
    storageBucket: 'react-native-frb.appspot.com',
    messagingSenderId: '304666642563',
    appId: '1:304666642563:android:22c16c2ee9e908d689b3b6',
  };

  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export {firebase};