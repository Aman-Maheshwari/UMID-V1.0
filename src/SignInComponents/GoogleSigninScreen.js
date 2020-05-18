// import React, { Component, Fragment } from "react";
// import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Image, Alert } from 'react-native';
// import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
// import * as firebase from 'firebase';
// import { db } from '../routes/config';
// import { Actions } from 'react-native-router-flux';
// import Prompt from 'react-native-input-prompt';
// import {connect } from 'react-redux'



// class GoogleSigninScreen extends Component {


//   constructor(props) {

//     super(props);
//     this.state = {
//       pushData: [],
//       //track user is LoggedIn or LoggedOut
//       loggedIn: false,
//       phone: '',
//       firstTime:null
//     }
//   }

//   componentDidMount() {
//     //GoogleSignIn Configure Object, required for google sign in
//     GoogleSignin.configure({
//       //webClientId taken from fireBase App(umid)
//       webClientId: '1012173456466-nja72lb0em2i50stksit4f2dtc7r1h2u.apps.googleusercontent.com',
//       offlineAccess: true,
//       hostedDomain: '',
//       forceConsentPrompt: true,
//     });
//   }


//   firebaseCheckMail = () => {
//     var data=this.state.data
//     var user_email = ''
//     var mod_user_email = ''
//     var phonenumber = ''

//     user_email = data.additionalUserInfo.profile.email


//     if (data.additionalUserInfo.isNewUser === true) {
//       //yaha par prompt do phone number ka
//       for (let index = 0; index < user_email.length; index++) {
//         if (user_email[index] == ".") {
//           mod_user_email = mod_user_email + ','
//         }
//         else {
//           mod_user_email = mod_user_email + user_email[index]
//         }
//       }
//       console.log("asjfgadj", mod_user_email);

//       firebase.database().ref("GmailFbLogin/" + mod_user_email + "/").set({
//         phonenumber: this.state.phone,
//       })
//     }

//     else {
//       //returns all the mailID's
//       var readEmails = new Promise((resolve, reject) => {
//         firebase.database().ref("GmailFbLogin/").on("value", (snapshot) => {
//           var emails = Object.keys(snapshot.val())
//           if (emails)
//             resolve(emails)
//           else
//             reject("No mail found")
//         })
//       })


//       readEmails.then((emails) => {
//         console.log("emails= ", emails);
//         for (let index = 0; index < user_email.length; index++) {
//           if (user_email[index] == ".") {
//             mod_user_email = mod_user_email + ','
//           }
//           else {
//             mod_user_email = mod_user_email + user_email[index]
//           }
//         }
//         emails.forEach(element => {
//           console.log("element= ", element);
//           console.log("mod= ", mod_user_email);

//           if (element == mod_user_email) {
//             console.log("inside if");

//             //if match then find the phone number
//             var get_prompt_number = new Promise((resolve, reject) => {
//               firebase.database().ref("GmailFbLogin/" + mod_user_email + "/").on("value", (snapshot) => {
//                 console.log(snapshot.val());
//                 if (snapshot.val())
//                   resolve(snapshot.val())
//                 else
//                   reject("sdhvj")
//               })
//             })

//             get_prompt_number.then((details) => {
//               console.log("details", details);
//               //afterword change this to a better logic to find key inside a collection
//               var searchSignup = new Promise((resolve, reject) => {
//                 firebase.database().ref("SignUpInComplete/"+details.phonenumber+"/").on("value", snapshot => {
//                   console.log("snapshot.val()",snapshot.val())
//                   if (snapshot.val() != null)
//                     resolve(snapshot.val())
//                   else{
//                     reject("no data found")
//                     this.props.navigation.navigate("Drawer")
//                   }
//                 })
//               })

//               searchSignup.then((phone_key) => {
//                 console.log("phone_key",phone_key.PhoneNumber)
//                 this.props.dispatch({type: 'UPDATE_TEXT', text: phone_key.name})
//                 this.props.dispatch({type: 'UPDATE_PHONE', text: phone_key.PhoneNumber})
//                 this.props.dispatch({type: 'UPDATE_CAT', text: phone_key.category})
//                 this.props.dispatch({type: 'UPDATE_CITY', text: phone_key.City})
//                 this.props.navigation.navigate("Drawer")
//               })//end of searchSignup
//             })//end of get_prompt_number
//               .catch(() => {

//               })
//           }
//         });
//       })//end of reademails
//         .catch((err_msg) => {

//         })
//     }
//   }

//   //asynchronous function..
//   //resolving 1st promise by checking GooglePlayServices using hasPlayServices() API
//   //resolving 2nd promise by signin using signIn() API returning object to userInfo...
//   _signIn = async () => {
//     try {
  
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       // console.log(userInfo)

//       //Create an instance of the Google provider object:
//       const provider = firebase.auth.GoogleAuthProvider;
//       // console.log('provider= ',provider)
//       //returns credential from userInfo.idToken(i.e., )
//       const credential = provider.credential(userInfo.idToken);
//       // console.log('credential= ',credential)
//       // Sign in with credential from the Google user.
//       firebase.auth().signInWithCredential(credential)
//         .then((data) => {
//           //data is the object returned from firebase on authentication
//           // console.log('SUCCESS', data);
//           console.log('SUCCESS', data);
//           var new_user=data.additionalUserInfo.isNewUser
//           if( new_user == true)
//             this.setState({ userInfo: userInfo, loggedIn: true,data:data,firstTime:true});
//           else
//             this.setState({ userInfo: userInfo, loggedIn: true,data:data,firstTime:false});

//         })//enf of firbase
//         .catch((error) => {
//           console.log('ERROR', error);
//         });


//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         // user cancelled the login flow
//         Alert.alert(String(error))
//         this.props.navigation.navigate('Login')
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         // operation (f.e. sign in) is in progress already
//         Alert.alert(String(error))
//         this.props.navigation.navigate('Login')
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         // play services not available or outdated
//         Alert.alert(String(error))
//         this.props.navigation.navigate('Login')
//       } else {
//         // some other error happened
//         Alert.alert(String(error))
//         this.props.navigation.navigate('Login')
//       }
//       console.log(error)
//     }
//   };

//   getCurrentUserInfo = async () => {
//     try {
//       const userInfo = await GoogleSignin.signInSilently();
//       this.setState({ userInfo });
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_REQUIRED) {
//         // user has not signed in yet
//         this.setState({ loggedIn: false });
//       } else {
//         // some other error
//         this.setState({ loggedIn: false });
//       }
//     }
//   };

//   signOut = async () => {
//     try {
//       await GoogleSignin.revokeAccess();
//       await GoogleSignin.signOut();
//       this.setState({ user: null, loggedIn: false }); // Remember to remove the user from your app's state as well
//       // Actions.HomeScreen()
//       // this.props.navigation.navigate('Drawer')
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   componentWillMount() {
//     // GoogleSignin.configure({
//     //   //webClientId taken from fireBase App(umid)
//     //   webClientId: '1012173456466-nja72lb0em2i50stksit4f2dtc7r1h2u.apps.googleusercontent.com',
//     //   offlineAccess: true,
//     //   hostedDomain: '',
//     //   forceConsentPrompt: true,
//     // });
//     this._signIn()
//     // this.renderPrompt()
//   }
//   render() {
//     if(this.state.firstTime==true){
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Prompt
//           // visible={this.state.visible}
//           visible={this.state.firstTime}
//           title="Please Enter 10 digit Phone number"
//           titleStyle={{ fontSize: 18 }}
//           placeholder="Phone number"
//           onCancel={() =>
//             this.props.navigation.navigate('Login')
//           }
//           onChangeText={(text) => {
//             this.setState({
//               phone: text
//             })
//             console.log(this.state.phone)
//           }}
//           onSubmit={text => {
//             // this.setState({
//             //   phone : text
//             // })
//             if (this.state.phone.length == 10) {
//               this.firebaseCheckMail()
//               this.props.navigation.navigate('Drawer', { phoneGoogle: this.state.phone })
//             } else {
//               Alert.alert('Make Sure Phone number has 10 digits.')
//             }
//           }
//           }
//         />
//       </View>
//     );
//     }
//     else if(this.state.firstTime==false){
//       this.firebaseCheckMail()
//       return null
//     }
//     else
//     return null
//   }
// }



// const mapStateToProps = (state) =>{
//   console.log(state)
//   return {
//     upload_status : state.textUpload,
//     nameuser: state.nameuser,
//     phonenumberuser: state.phonenumberuser, 
//   }
// }

// export default connect(mapStateToProps)(GoogleSigninScreen)

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: 'grey',
//   },
//   listHeader: {
//     backgroundColor: '#eee',
//     color: "#222",
//     height: 44,
//     padding: 12
//   },
//   detailContainer: {
//     paddingHorizontal: 20
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     paddingTop: 10
//   },
//   message: {
//     fontSize: 14,
//     paddingBottom: 15,
//     borderBottomColor: "#ccc",
//     borderBottomWidth: 1
//   },
//   dp: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//     flexDirection: 'row',
//     justifyContent: 'center'
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: 'white',
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//     flexDirection: 'row',
//     justifyContent: 'center'
//   },
//   buttonContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//     flexDirection: 'row',
//     justifyContent: 'center'
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: 'black',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: 'blue',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: 'blue',
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

import React, { Component, Fragment } from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Image, Alert } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import * as firebase from 'firebase';
import { db } from '../routes/config';
import { Actions } from 'react-native-router-flux';
import Prompt from 'react-native-input-prompt';
import {connect } from 'react-redux'



class GoogleSigninScreen extends Component {


  constructor(props) {

    super(props);
    this.state = {
      pushData: [],
      //track user is LoggedIn or LoggedOut
      loggedIn: false,
      phone: '',
      firstTime:null,
      gmail: '',
      name: ''
    }
  }

  componentDidMount() {
    //GoogleSignIn Configure Object, required for google sign in
    GoogleSignin.configure({
      //webClientId taken from fireBase App(umid)
      webClientId: '1012173456466-nja72lb0em2i50stksit4f2dtc7r1h2u.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      forceConsentPrompt: true,
    });
  }


  firebaseCheckMail = () => {
    var data=this.state.data
    var user_email = ''
    var mod_user_email = ''
    var user_name = ''
    user_name = data.additionalUserInfo.profile.given_name
    user_email = data.additionalUserInfo.profile.email


    if (data.additionalUserInfo.isNewUser === true) {
      //yaha par prompt do phone number ka
      for (let index = 0; index < user_email.length; index++) {
        if (user_email[index] == ".") {
          mod_user_email = mod_user_email + ','
        }
        else {
          mod_user_email = mod_user_email + user_email[index]
        }
      }
      console.log("asjfgadj", mod_user_email);

      firebase.database().ref("GmailFbLogin/" + mod_user_email + "/").set({
        BlockedCounter: 0,
        PhoneNumber: this.state.phone,
        name: user_name,
        Organisation: '',
        Password: '',
        category: "individual",
        address: '',
        latitude: '',
        longitude: '',
        GoogleId: '',
        City: '',
        State: '',
        isRegistered: false,
      })
      firebase.database().ref("SignUpInComplete/" + this.state.phone + "/").set({
        BlockedCounter: 0,
        PhoneNumber: this.state.phone,
        name: user_name,
        Organisation: '',
        Password: '',
        category: "individual",
        address: '',
        latitude: '',
        longitude: '',
        GoogleId: '',
        City: '',
        State: '',
        isRegistered: false,
      })
      this.props.dispatch({type: 'UPDATE_TEXT', text: user_name})
      this.props.dispatch({type: 'UPDATE_PHONE', text: this.state.phone})
      this.props.dispatch({type: 'UPDATE_CAT', text: "individual"})
      this.props.dispatch({type: 'UPDATE_CITY', text: ''})
      this.props.navigation.navigate("Drawer")
    }
  


    else {
      //returns all the mailID's
      var readEmails = new Promise((resolve, reject) => {
        firebase.database().ref("GmailFbLogin/").on("value", (snapshot) => {
          var emails = Object.keys(snapshot.val())
          if (emails)
            resolve(emails)
          else
            reject("No mail found")
        })
      })


      readEmails.then((emails) => {
        console.log("emails= ", emails);
        for (let index = 0; index < user_email.length; index++) {
          if (user_email[index] == ".") {
            mod_user_email = mod_user_email + ','
          }
          else {
            mod_user_email = mod_user_email + user_email[index]
          }
        }
        emails.forEach(element => {
          console.log("element= ", element);
          console.log("mod= ", mod_user_email);

          if (element == mod_user_email) {
            console.log("inside if");

            //if match then find the phone number
            var get_prompt_number = new Promise((resolve, reject) => {
              firebase.database().ref("GmailFbLogin/" + mod_user_email + "/").on("value", (snapshot) => {
                console.log(snapshot.val());
                if (snapshot.val())
                  resolve(snapshot.val())
                else
                  reject("sdhvj")
              })
            })

            get_prompt_number.then((details) => {
              console.log("details", details);
              //afterword change this to a better logic to find key inside a collection
              var searchSignup = new Promise((resolve, reject) => {
                firebase.database().ref("SignUpInComplete/"+details.PhoneNumber+"/").on("value", snapshot => {
                  console.log("snapshot.val()",snapshot.val())
                  if (snapshot.val() != null)
                    resolve(snapshot.val())
                  else{
                    reject("no data found")
                    this.props.navigation.navigate("Drawer")
                  }
                })
              })

              searchSignup.then((phone_key) => {
                console.log("phone_key",phone_key.PhoneNumber)
                this.props.dispatch({type: 'UPDATE_TEXT', text: phone_key.name})
                this.props.dispatch({type: 'UPDATE_PHONE', text: phone_key.PhoneNumber})
                this.props.dispatch({type: 'UPDATE_CAT', text: phone_key.category})
                this.props.dispatch({type: 'UPDATE_CITY', text: phone_key.City})
                this.props.navigation.navigate("Drawer")
              })//end of searchSignup
            })//end of get_prompt_number
              .catch(() => {

              })
          }
        });
      })//end of reademails
        .catch((err_msg) => {

        })
    }
  }

  //asynchronous function..
  //resolving 1st promise by checking GooglePlayServices using hasPlayServices() API
  //resolving 2nd promise by signin using signIn() API returning object to userInfo...
  _signIn = async () => {
    try {
  
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // console.log(userInfo)

      //Create an instance of the Google provider object:
      const provider = firebase.auth.GoogleAuthProvider;
      // console.log('provider= ',provider)
      //returns credential from userInfo.idToken(i.e., )
      const credential = provider.credential(userInfo.idToken);
      // console.log('credential= ',credential)
      // Sign in with credential from the Google user.
      firebase.auth().signInWithCredential(credential)
        .then((data) => {
          //data is the object returned from firebase on authentication
          // console.log('SUCCESS', data);
          console.log('SUCCESS', data);
          this.setState({
            gmail:  data.additionalUserInfo.profile.email,
            name: data.additionalUserInfo.profile.given_name
          })
          var new_user=data.additionalUserInfo.isNewUser
          if( new_user == true)
            this.setState({ userInfo: userInfo, loggedIn: true,data:data,firstTime:true});
          else
            this.setState({ userInfo: userInfo, loggedIn: true,data:data,firstTime:false});

        })//enf of firbase
        .catch((error) => {
          console.log('ERROR', error);
        });


    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log("1")
        Alert.alert(String(error))
        this.props.navigation.navigate('Login')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
        console.log("2")
        Alert.alert(String(error))
        this.props.navigation.navigate('Login')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log("3")
        Alert.alert(String(error))
        this.props.navigation.navigate('Login')
      } else {
        // some other error happened
        console.log("4")
        Alert.alert(String(error))
        this.props.navigation.navigate('Login')
      }
      console.log(error)
    }
  };

  getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
        this.setState({ loggedIn: false });
      } else {
        // some other error
        this.setState({ loggedIn: false });
      }
    }
  };

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ user: null, loggedIn: false }); // Remember to remove the user from your app's state as well
      // Actions.HomeScreen()
      // this.props.navigation.navigate('Drawer')
    } catch (error) {
      console.error(error);
    }
  };

  componentWillMount() {
    // GoogleSignin.configure({
    //   //webClientId taken from fireBase App(umid)
    //   webClientId: '1012173456466-nja72lb0em2i50stksit4f2dtc7r1h2u.apps.googleusercontent.com',
    //   offlineAccess: true,
    //   hostedDomain: '',
    //   forceConsentPrompt: true,
    // });
    this._signIn()
    // this.renderPrompt()
  }
  render() {
    if(this.state.firstTime==true){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Prompt
          // visible={this.state.visible}
          visible={this.state.firstTime}
          title="Please Enter 10 digit Phone number"
          titleStyle={{ fontSize: 18 }}
          placeholder="Phone number"
          onCancel={() =>
            this.props.navigation.navigate('Login')
          }
          onChangeText={(text) => {
            this.setState({
              phone: text
            })
            console.log(this.state.phone)
          }}
          onSubmit={text => {
            // this.setState({
            //   phone : text
            // })
            if (this.state.phone.length == 10) {
              var prom9 = new Promise((resolve,reject) => {
                firebase.database().ref("SignUpInComplete/").on("value" , snapshot => {
                  var key = Object.keys(snapshot.val())
                  key.forEach((item) => {
                    if(item == this.state.phone){
                      resolve(true)
                    }
                  })
                  resolve(false)
                })
              })  
              prom9.then((item) => {
                console.log(item)
                if(item == true){
                  this.props.navigation.navigate('Drawer')
                  var mod_user_email = ''
                  console.log("this.state.gmail",this.state.gmail,this.state.name)
                  for (let index = 0; index < this.state.gmail.length; index++) {
                    if (this.state.gmail[index] == ".") {
                      mod_user_email = mod_user_email + ','
                    }
                    else {
                      mod_user_email = mod_user_email + this.state.gmail[index]
                    }
                  }
                  firebase.database().ref("GmailFbLogin/" + mod_user_email + "/").set({
                    BlockedCounter: 0,
                    PhoneNumber: this.state.phone,
                    name: this.state.name,
                    Organisation: '',
                    Password: '',
                    category: "individual",
                    address: '',
                    latitude: '',
                    longitude: '',
                    GoogleId: '',
                    City: '',
                    State: '',
                    isRegistered: false,
                  })
                  var searchSignup = new Promise((resolve, reject) => {
                    firebase.database().ref("SignUpInComplete/"+this.state.phone+"/").on("value", snapshot => {
                      console.log("snapshot.val()",snapshot.val())
                      if (snapshot.val() != null)
                        resolve(snapshot.val())
                      else{
                        reject("no data found")
                        this.props.navigation.navigate("Drawer")
                      }
                    })
                  })
    
                  searchSignup.then((phone_key) => {
                    console.log("phone_key",phone_key.PhoneNumber)
                    this.props.dispatch({type: 'UPDATE_TEXT', text: phone_key.name})
                    this.props.dispatch({type: 'UPDATE_PHONE', text: phone_key.PhoneNumber})
                    this.props.dispatch({type: 'UPDATE_CAT', text: phone_key.category})
                    this.props.dispatch({type: 'UPDATE_CITY', text: phone_key.City})
                    this.props.navigation.navigate("Drawer")
                  })//end of searchSignup

                }
                else{
                  this.firebaseCheckMail()
                  this.props.navigation.navigate('Drawer', { phoneGoogle: this.state.phone })
                }
              })
              
            } else {
              Alert.alert('Make Sure Phone number has 10 digits.')
            }
          }
          }
        />
      </View>
    );
    }
    else if(this.state.firstTime==false){
      this.firebaseCheckMail()
      return null
    }
    else
    return null
  }
}



const mapStateToProps = (state) =>{
  console.log(state)
  return {
    upload_status : state.textUpload,
    nameuser: state.nameuser,
    phonenumberuser: state.phonenumberuser, 
  }
}

export default connect(mapStateToProps)(GoogleSigninScreen)

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'grey',
  },
  listHeader: {
    backgroundColor: '#eee',
    color: "#222",
    height: 44,
    padding: 12
  },
  detailContainer: {
    paddingHorizontal: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10
  },
  message: {
    fontSize: 14,
    paddingBottom: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  dp: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'blue',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'blue',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});