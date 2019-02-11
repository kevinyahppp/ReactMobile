import React, {Component} from 'react';
import {View} from 'react-native';
import BackgroundImage from "../components/BackgroundImage";
import AppButton from "../components/AppButton";
import {NavigationActions} from 'react-navigation';
import Toast from 'react-native-simple-toast';
import * as firebase from 'firebase';

export default class Start extends Component{
    login(){

    }

    register(){

    }

    async facebook(){

    }

    render(){
        return(
                <View style={{justifyContent: 'center', flex: 1}}>
                    <AppButton
                        bgColor="#AACCFF"
                        title="Entrar"
                        action={this.login.bind(this)}
                        iconName="sign-in"
                        iconSize={30}
                        iconColor="#fff"
                    />
                    <AppButton
                        bgColor="rgba(200, 200, 50, 0.7)"
                        title="Registrarme"
                        action={this.register.bind(this)}
                        iconName="user-plus"
                        iconSize={30}
                        iconColor="#fff"
                    />
                    <AppButton
                        bgColor="rgb(111, 38, 74)"
                        title="Facebook"
                        action={this.facebook.bind(this)}
                        iconName="facebook"
                        iconSize={30}
                        iconColor="#fff"
                    />
                </View>
        );
    }
}