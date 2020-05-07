import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  Button,
  TouchableOpacity
} from 'react-native';
import firebase from 'firebase'
// import { NavigationActions } from 'react-navigation'
const FBSDK = require('react-native-fbsdk');
import {db} from '../routes/config';
const { LoginManager, AccessToken } = FBSDK;
const { width, height } = Dimensions.get('window')
import {Actions} from 'react-native-router-flux';

 
export default class Login extends Component {
 
  constructor(props) {
   super(props);
   this.state = {
      showSpinner: true
    }
  }
  componentDidMount() {
    
    this.fireBaseListener = firebase.auth().onAuthStateChanged(auth => {
      if (auth) {
        this.firebaseRef = firebase.database().ref('users')
        this.firebaseRef.child(auth.uid).on('value', snap => {
          const user = snap.val()
          if (user != null) {
            this.firebaseRef.child(auth.uid).off('value')
            // setTimeout(() => {
              this.goHome(user)

          }
        })
 
 
      } else {
        this.setState({ showSpinner: false })
      }
    })
  }
  goHome(user) {
    // const resetAction = NavigationActions.reset({
    //   index: 0,
    //   actions: [
    //     // NavigationActions.navigate({ routeName: 'Home', params: { user } }),
    //     // Actions.HomeScreen(),
    //   ],
    // })
    // // Actions.HomeScreen()
    
    // this.props.navigation.dispatch(resetAction)
    this.props.navigation.navigate('Home')

    console.log("user:",user)
 
  }
  onPressLogin(){
      this.setState({ showSpinner: true })
        LoginManager.logInWithPermissions(['public_profile', 'user_birthday', 'email', 'user_photos'])
        .then((result) => this._handleCallBack(result),
          function(error) {
            alert('Login fail with error: ' + error);
          }
        )
  }
  _handleCallBack(result){
    let _this = this
    if (result.isCancelled) {
      alert('Login cancelled');
    } else {   
  AccessToken.getCurrentAccessToken().then(
          (data) => {
            console.log(data)
            const token = data.accessToken
            console.log("https://graph.facebook.com/v2.8/me?fields=id,first_name,last_name,gender,birthday&access_token=" + token)
            fetch('https://graph.facebook.com/v2.8/me?fields=id,first_name,last_name,gender,birthday&access_token=' + token)
            .then((response) => response.json())
            .then((json) => {
          
              const imageSize = 120
              const facebookID = json.id
              console.log("https://graph.facebook.com/"+facebookID+"/picture?height="+imageSize)
              const fbImage = `https://graph.facebook.com/${facebookID}/picture?height=${imageSize}`
             this.authenticate(data.accessToken)
              .then(function(result){
                console.log(result)
                console.log(result.user.uid)
                // const { uid } = result.user.uid              
                _this.createUser(result.user.uid,json,token,fbImage)
              })
 
 
            })
            .catch(function(err) {
            	  console.log(err);
            });
          }
        )
 
    }
  }
  authenticate = (token) => {
    const provider = firebase.auth.FacebookAuthProvider
    const credential = provider.credential(token)
    console.log(credential)
    let ret = firebase.auth().signInWithCredential(credential)
    return ret;
  }
  createUser = (uid,userData,token,dp) => {
    console.log(uid)
    const defaults = {
      uid,
      token,
      dp,
      ageRange: [20, 30]
    }
    firebase.database().ref('users').child(uid).update({ ...userData, ...defaults })
   
  }
  render() {
    return (
       this.state.showSpinner ? <View style={styles.container}><ActivityIndicator animating={this.state.showSpinner} /></View> :
       this.onPressLogin()
    //  <View style={styles.container}>
    //        <Button
    //         onPress={this.onPressLogin.bind(this)}
    //         title="Login with facebook"
    //         color="#841584"
    //         />
    //         <TouchableOpacity>
    //           <Text>Google</Text>
    //         </TouchableOpacity>
    //   </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }  
});