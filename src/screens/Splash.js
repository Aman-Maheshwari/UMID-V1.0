import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Modal, StyleSheet,ToastAndroid,AsyncStorage } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import CryptoJS from "react-native-crypto-js";

class Splash extends React.Component{
    state={
        shouldLogin : false,
        phone : '',
        password : '',
    }
    componentDidMount(){
        setTimeout(() => {
            if(this.state.shouldLogin){
                this.props.navigation.navigate('Home' , {phone : this.state.phone , password : this.state.password })
            }
            else{              
                this.props.navigation.navigate('Login')
            }

            
        }, 2500);
    }

    UNSAFE_componentWillMount(){
        // console.log('inside Component will mount of Splash')
        _retrieveData = async () => {
            try {
              const value = await AsyncStorage.getItem('UMID_user');
              // console.log(value)
              let bytes  = CryptoJS.AES.decrypt("U2FsdGVkX1/spi+m8gfjk+XHA1aEbIH1Y8i6Lw28cKw=",'U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=');
              let originalText = bytes.toString(CryptoJS.enc.Utf8);
              // U2FsdGVkX1+2CI1CCDxS64ikwHcyt3LhzjcBvNNzfGY=
              console.log(originalText,"original text");
              
              const user_obj = JSON.parse(value)
              if (user_obj.status == 1) {
                // We have data!!
                // firebase.auth().signInWithEmailAndPassword(user_obj.email, user_obj.password).then((user) => {
                //   console.log("user signedin with data", user.user);
                //   // this._storeData(email,password,1)
                //   console.log("Navigating from login")
            
                //   //to reset the stack and make top of the stack to rading screen,
                //   /*once someone successfully logs in, you would like to prevent them to go back to 
                //   login/signup screen. */
                //   // const resetAction = StackActions.reset({
                //   //   index: 0,
                //   //   key: null, // <-- this
                //   //   actions: [NavigationActions.navigate({ routeName: "ReadingScreen", params: { user: user.user } })]
                //   // })
                //   // Alert.alert("wait for few sec");
                //   // this.props.navigation.dispatch(resetAction)
                //   this.props.navigation.navigate('MainDrawer',{ user: user.user })
                // }).catch((error) => {
                //   // Handle Errors here.
                //   // console.log(error)
                //   this.props.navigation.navigate('LoginWithEmail')
                //   // x=String(error)
                //   // Alert.alert(String(error))
                //   // ...
                // });
                // console.log(value);
                // this.setState({
                //   loggedInStatus: value,
                // })
                var fetchfire = new Promise((resolve,reject) => {
                    var arr = null
                    firebase.database().ref("SignUpInComplete/"+user_obj.phone+"/").on("value", function(snapshot) {
                      arr = snapshot.val()
                      // this.props.sendData({data: snapshot.val()})
                      resolve(arr)
                    })
                  })
                  fetchfire.then(arr => {
                    console.log(arr.name)
                    this.props.dispatch({type: 'UPDATE_TEXT', text: arr.name})
                    this.props.dispatch({type: 'UPDATE_PHONE', text: arr.PhoneNumber})
                    this.props.dispatch({type: 'UPDATE_CAT', text: arr.category})
                  })
                this.setState({
                    shouldLogin : true,
                    phone : user_obj.phone,
                    password : user_obj.password
                })

              }
              else{
                  this.setState({
                      shouldLogin : false
                  })
              }
            } catch (error) {
              // this.setState({
              //   loggedInStatus: false,
              // }) 
      
            }
          }
          _retrieveData();
    }
    
    render(){
        return(
            <View style={{flex:1}}>
                <Image
                source={require('../assets/Splash.png')}
                style={{height:hp('100%'),width:wp('100%')}}
                />
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
      upload_status: state.textUpload,
      nameuser: state.nameuser,
      phonenumberuser: state.phonenumberuser,
      personData: state.personData
    }
  }
  

  export default connect(mapStateToProps)(Splash)
  