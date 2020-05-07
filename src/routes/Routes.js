import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import LoginScreen from '../screenprev/LoginScreen';
import SignupScreen from '../screenprev/SignupScreen';
import HomeScreen from '../screenprev/HomeScreen';
import GoogleSigninScreen from '../screenprev/GoogleSigninScreen';
import FacebookScreen from '../screenprev/FacebookScreen';
import ProfileScreen from '../screenprev/ProfileScreen';
import ChatRoom from '../screenprev/ChatRoom';
import MapShow from '../screenprev/MapShow';
import TryScreen from '../screenprev/TryScreen';
import Animate from '../screenprev/Animate';
import ShopScreen from '../screenprev/ShopsScreen';
import SosScreen from '../screenprev/SosScreen';

export default class Routes extends Component{
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="LoginScreen" component={LoginScreen} title="LoginScreen"/>
			      <Scene key="SignupScreen" component={SignupScreen} title="SignupScreen"/>
				  <Scene key="ProfileScreen" component={ProfileScreen} title="ProfileScreen"/>
				  <Scene key="ChatRoom" component={ChatRoom} title="ChatRoom"/>
                  <Scene key="HomeScreen" component={HomeScreen}/>
				  <Scene key="GoogleSigninScreen" component={GoogleSigninScreen}/>
				  <Scene key="FacebookScreen" component={FacebookScreen}/>
				  <Scene key="MapShow" component={MapShow} title="MapShow" />
				  <Scene key="TryScreen" component={TryScreen} title="TryScreen" initial={true}/>
				  <Scene key="Animate" component={Animate}/>
				  <Scene key="ShopScreen" component={ShopScreen}/>
				  <Scene key="SosScreen" component={SosScreen}/>
			    </Stack>
			 </Router>
			)
	}
}