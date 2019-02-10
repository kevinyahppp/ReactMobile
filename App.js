import React from 'react';
import { Text, View } from 'react-native';
import PreLoader from "./application/component/PreLoader";
import BackgroundImage from "./application/component/BackgroundImage";

export default class App extends React.Component {
  render() {
    return (
      <BackgroundImage
          source={require('./assets/images/imgfullhd.jpg')}
      >
        <Text style={{color:'#fff', marginTop: 100}}>Hola</Text>
      </BackgroundImage>
    );
  }
}

