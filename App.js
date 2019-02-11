import React from 'react';
import { Text, View } from 'react-native';
import PreLoader from "./application/components/PreLoader";
import BackgroundImage from "./application/components/BackgroundImage";
import Start from './application/screens/Start';
import GuestNavigation from './application/navigations/guest';
import firebaseConfig from './application/utils/firebase';
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);


export default class App extends React.Component {
  render() {
    return (
     
        <GuestNavigation/>
    );
  }
}

