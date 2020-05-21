// import React from 'react';
// import { GiftedChat, InputToolbar, SystemMessage, Bubble, Send } from 'react-native-gifted-chat'; // 0.3.0
// import {
//   View, Text, TouchableOpacity, Image, BackHandler, Alert, Button, TouchableHighlight, Modal,StyleSheet ,TouchableWithoutFeedback,Animated,Dimensions
// } from 'react-native'
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { connect } from 'react-redux';
// import * as firebase from 'firebase';
// import CryptoJS from "react-native-crypto-js";
// // import AnonymousDrawer from './AnonymousDrawer';
// const { width, height } = Dimensions.get('window');
// import {_} from 'lodash';


// import Ionicons from 'react-native-vector-icons/Ionicons';

// class AnonymousChat extends React.Component {
//   b64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: null,
//       isBlocked: null,
//       BlockedCounter: null,
//       isDone: null,
//       modalVisible: true,
//       setModalVisible: false
//     };
//   }
//   encode(key, data) {
//     console.log(key,data)
//     data = this.xor_encrypt(key, data);
//     return this.b64_encode(data);
//   }
//   decode(key, data) {
//     data = this.b64_decode(data);
//     return this.xor_decrypt(key, data);
//   }



// b64_encode(data) {
//   var o1, o2, o3, h1, h2, h3, h4, bits, r, i = 0, enc = "";
//   if (!data) { return data; }
//   do {
//     o1 = data[i++];
//     o2 = data[i++];
//     o3 = data[i++];
//     bits = o1 << 16 | o2 << 8 | o3;
//     h1 = bits >> 18 & 0x3f;
//     h2 = bits >> 12 & 0x3f;
//     h3 = bits >> 6 & 0x3f;
//     h4 = bits & 0x3f;
//     enc += this.b64_table.charAt(h1) + this.b64_table.charAt(h2) + this.b64_table.charAt(h3) + this.b64_table.charAt(h4);
//   } while (i < data.length);
//   r = data.length % 3;
//   return (r ? enc.slice(0, r - 3) : enc) + "===".slice(r || 3);
// }
// b64_decode(data) {
//   var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, result = [];
//   if (!data) { return data; }
//   data += "";
//   do {
//     h1 = this.b64_table.indexOf(data.charAt(i++));
//     h2 = this.b64_table.indexOf(data.charAt(i++));
//     h3 = this.b64_table.indexOf(data.charAt(i++));
//     h4 = this.b64_table.indexOf(data.charAt(i++));
//     bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
//     o1 = bits >> 16 & 0xff;
//     o2 = bits >> 8 & 0xff;
//     o3 = bits & 0xff;
//     result.push(o1);
//     if (h3 !== 64) {
//       result.push(o2);
//       if (h4 !== 64) {
//         result.push(o3);
//       }
//     }
//   } while (i < data.length);
//   return result;
// }

// xor_encrypt(key, data) {
//  console.log(data,key);
//   return _.map(data, function(c, i) {
//     return c.charCodeAt(0) ^ key.charCodeAt( Math.floor(i % key.length) );
//   });
// }
// xor_decrypt(key, data) {
//   return _.map(data, function(c, i) {
//     return String.fromCharCode( c ^ key.charCodeAt( Math.floor(i % key.length) ) );
//   }).join("");
// }



//   fetchBlockCount = () => {
//     firebase.database().ref("SignUpInComplete/" + this.props.navigation.state.params.phonenumber).on("value", snapshot => {
//       console.log("snapshot.val()", snapshot.val())
//       this.setState({
//         BlockedCounter: snapshot.val().BlockedCounter,
//       })
//     })
//   }



//   componentDidMount() {
//     firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).update({
//       counter: 0
//     })
//     firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.navigation.state.params.phonenumber + "/" + this.props.phonenumberuser + "," + this.props.navigation.state.params.timestamp).on("value", snapshot => {
//       // var c = snapshot.val().counter
//       console.log(snapshot.val().counter)
//       this.setState({
//         counter: snapshot.val().counter,
//         isBlocked: snapshot.val().isBlocked,
//       })
//     })
//     firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).on("value", snapshot => {
//       // console.log(snapshot.val().counter)
//       console.log("snapshot.val().isDone", snapshot.val().isDone)
//       this.setState({
//         isDone: snapshot.val().isDone,
//       })
//     })

//     this.fetchBlockCount()

//     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

//     this.on(message => {
//       console.log("message.text", message.text)
//       // let bytes = CryptoJS.AES.decrypt(message.text, 'U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=');
//       let originalText = this.decode("U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=",message.text);
//       console.log("originalText", originalText)
//       message.text = originalText;
//       this.setState(previousState => ({
//         messages: GiftedChat.append(previousState.messages, message),
//       }))
//     }
//     );
//   }

//   componentWillUnmount() {
//     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
//   }

//   handleBackButton = () => {
//     Alert.alert(
//       'Exit App',
//       'Exiting the application?', [{
//         text: 'Cancel',
//         onPress: () => console.log('Cancel Pressed'),
//         style: 'cancel'
//       }, {
//         text: 'OK',
//         onPress: () => BackHandler.exitApp()
//       },], {
//       cancelable: false
//     }
//     )
//     return true;
//   }

//   get ref() {
//     if (this.props.phonenumberuser > this.props.navigation.state.params.phonenumber) {
//       var x = this.props.phonenumberuser + ',' + this.props.navigation.state.params.phonenumber;
//     } else {
//       var x = this.props.navigation.state.params.phonenumber + ',' + this.props.phonenumberuser;
//     }
//     return firebase.database().ref('OneToOneAnonymous/' + x + "," + this.props.navigation.state.params.timestamp + '/');
//   }

//   parse = snapshot => {
//     const { timestamp: numberStamp, text, user } = snapshot.val();
//     const { key: _id } = snapshot;
//     const timestamp = new Date(numberStamp);
//     const message = {
//       _id,
//       timestamp,
//       text,
//       user,
//     };
//     return message;
//   };

//   on = callback =>
//     this.ref
//       .limitToLast(20)
//       .on('child_added', snapshot => callback(this.parse(snapshot)));

//   get timestamp() {
//     return firebase.database.ServerValue.TIMESTAMP;
//   }
//   // send the message to the Backend
//   send = messages => {
//     if (this.state.isBlocked == true) {
//       alert("Chat is Blocked!")
//     } else {
//       for (let i = 0; i < messages.length; i++) {
//         const { text, user } = messages[i];
//         let ciphertext = this.encode('U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=',text)
//         console.log("cipher text");
//         text = ciphertext
//         const message = {
//           text,
//           user,
//           timestamp: this.timestamp,
//         };
//         this.append(message);
//       }
//       console.log("anonymouschat = ", this.props.navigation.state.params.timestamp)
//       firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).update({
//         timestamp: firebase.database.ServerValue.TIMESTAMP,
//       })

//       console.log(this.state.counter++)
//       firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.navigation.state.params.phonenumber + "/" + this.props.phonenumberuser + "," + this.props.navigation.state.params.timestamp).update({
//         timestamp: firebase.database.ServerValue.TIMESTAMP,
//         counter: this.state.counter++,
//         softDelete: false,
//       })
//     }
//   };

//   append = message => this.ref.push(message);

//   state = {
//     messages: [],
//   };

//   get user() {
//     return {
//       name: this.props.nameuser,
//       _id: this.props.phonenumberuser,
//     };
//   }


//   setModalVisible = (visible) => {
//     this.setState({ modalVisible: visible });
//   }

//   buttonSize = new Animated.Value(1);
//     mode = new Animated.Value(0);

//     handdlePress = () => {
//         Animated.sequence([
//             Animated.timing(this.buttonSize, {
//                 toValue: 0.95,
//                 duration: 10
//             }),
//             Animated.timing(this.buttonSize, {
//                 toValue: 1
//             }),
//             Animated.timing(this.mode, {
//                 toValue: this.mode._value === 0 ? 1 : 0,
//                 duration: 90
//             })
//         ]).start();
//     };

//   render() {
//     const sizeStyle = {
//       transform: [{ scale: this.buttonSize }]
//   }

//   const drawerX = this.mode.interpolate({
//       inputRange: [0, 1],
//       outputRange: [0, -0.3056 * width]
//   })
//   const drawerY = this.mode.interpolate({
//       inputRange: [0, 1],
//       outputRange: [-0.7 * height, -0.000001 * height]
//   })
//     // console.log("this.props.navigation",this.props.navigation)
//     // console.log("inside render" ,typeof(this.props.phonenumberuser),' ',typeof(this.props.navigation.state.params.phonenumber))
//     const customtInputToolbar = props => {
//       return (
//         <InputToolbar
//           {...props}
//           containerStyle={{
//             backgroundColor: "white",
//             elevation: 3,
//             width: wp("100%")
//           }}
//         />
//       );
//     };

//     const renderSend = (props) => {
//       return (
//         <View style={{ elevation: 0, width: wp("10%"), marginRight: wp("5%") }}>
//           <Send {...props}>

//             {/* <Ionicons
//               name="md-send"
//               size={29}
//             /> */}
//             {/* <Text>Send</Text> */}
//           </Send>
//         </View>
//       );
//     }

//     const renderTime = (props) => {
//       return (
//         <Time
//           {...props}
//           textStyle={{
//             right: {
//               color: Colors.snow,
//               fontFamily: 'Montserrat-Light',
//               fontSize: 14
//             },
//             left: {
//               color: Colors.snow,
//               fontFamily: 'Montserrat-Light',
//               fontSize: 14
//             }
//           }}
//         />
//       );
//     }

//     const renderBubble = props => {
//       // console.log(new Date(props.currentMessage.timestamp*1000).getTime());


//       return (
//         <View>

//           <Bubble
//             {...props}
//             textStyle={{
//               right: {
//                 color: '#fff',

//               },
//               left: {
//                 color: "#000"
//               }
//             }}
//             wrapperStyle={{
//               left: {
//                 backgroundColor: '#E1F5FE',
//                 borderRadius: 10


//               },
//               right: {
//                 backgroundColor: '#0091EA',
//                 borderRadius: 10,
//                 // position:"absolute"
//               },
//             }}
//             style={{
//               width: wp('50%'),
//               zIndex: 0
//             }}

//           />

//         </View>

//       );
//     }
//     if (this.state.counter != null && this.state.isDone != null) {
//       return (
//         <View style={{ flex: 1,elevation:10}}>
//           <View style={{ flex: 0.1, backgroundColor: "#0290ea", flexDirection: 'row', justifyContent: "space-between", paddingRight: wp("3%")}}>

//             {/* aadi ek change wo bhi toh hoga na agr band idhr se direct back button presss krde toh bhi ye firebase call chalne chahiye  */}
//             <View style={{  justifyContent: 'center' }}>
//               <TouchableOpacity onPress={
//                 () => {
//                   this.props.navigation.navigate('Chats')
//                   firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).update({
//                     counter: 0
//                   })
//                   // console.log("lkjfdh")         
//                 }

//               }
//                 style={{ marginLeft: wp("3%") }}
//               >
//                 <Image
//                   source={require('../assets/back.png')}
//                 />
//               </TouchableOpacity>

//             </View>
//           </View>
//           <View style={{top:23,right:10,position:'absolute'}}>
//             <View style={{ alignItems: 'center'}}>
//             <Animated.View style={{ position: "absolute", left: drawerX, top: drawerY, flex: 1 }}

// >
//     <View style={styles.drawer}>
//         <View>
//             {/* <TouchableHighlight style={{ paddingTop: 25 }} onPress={() => {
//                 console.log("about presses");
//             }}> */}
//             <View>
//                 {this.state.isBlocked ?
//                     //if true than unblock user
//                     <View>
//                         {this.state.isDone ?
//                             <TouchableOpacity onPress={() => {
//                                 this.handdlePress()
//                                 Alert.alert(
//                                     'Unblock',
//                                     'Are you sure you want to unblock the user?', [{
//                                         text: 'Cancel',
//                                         onPress: () => console.log('Cancel Pressed'),
//                                         style: 'cancel'
//                                     }, {
//                                         text: 'OK',
//                                         onPress: () => {
//                                             console.log(this.state.BlockedCounter)

//                                             this.state.BlockedCounter--

//                                             this.setState({
//                                                 isBlocked: false,
//                                                 isDone: false
//                                             })

//                                             firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).update({
//                                                 isBlocked: false,
//                                                 isDone: false
//                                             })
//                                             firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.navigation.state.params.phonenumber + "/" + this.props.phonenumberuser + "," + this.props.navigation.state.params.timestamp).update({
//                                                 isBlocked: false,
//                                                 isDone: false
//                                             })
//                                             firebase.database().ref("SignUpInComplete/" + this.props.navigation.state.params.phonenumber + "/").update({
//                                                 BlockedCounter: this.state.BlockedCounter,
//                                             })
//                                             this.fetchBlockCount()
//                                         }
//                                     },], {
//                                     cancelable: false
//                                 }
//                                 )
//                             }}
//                             style={{marginBottom:hp("3%")}}
//                             >
//                                 <Text style={{ fontSize: 18, color: "black" ,paddingLeft:hp("2%")}}>Unblock</Text>
//                             </TouchableOpacity>

//                             :

//                             <Text style={{ fontSize: 18, color: "black",paddingLeft:hp("2%") ,marginBottom:hp("3%")}}>Blocked </Text>
//                         }

//                     </View>
//                     :

//                     <TouchableOpacity onPress={() => {
//                         this.handdlePress()
//                         Alert.alert(
//                             'Block',
//                             'Are you sure you want to block the user?', [{
//                                 text: 'Cancel',
//                                 onPress: () => console.log('Cancel Pressed'),
//                                 style: 'cancel'
//                             }, {
//                                 text: 'OK',
//                                 onPress: () => {
//                                     console.log(this.state.BlockedCounter)
//                                     this.state.BlockedCounter++
//                                     this.setState({
//                                         isBlocked: true,
//                                         isDone: true
//                                     })
//                                     firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).update({
//                                         isBlocked: true,
//                                         isDone: true
//                                     })
//                                     firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.navigation.state.params.phonenumber + "/" + this.props.phonenumberuser + "," + this.props.navigation.state.params.timestamp).update({
//                                         isBlocked: true,
//                                         isDone: false
//                                     })
//                                     firebase.database().ref("SignUpInComplete/" + this.props.navigation.state.params.phonenumber + "/").update({
//                                         BlockedCounter: this.state.BlockedCounter,
//                                     })
//                                     this.fetchBlockCount()
//                                 }
//                             },], {
//                             cancelable: false
//                         }
//                         )
//                     }}
//                     style={{marginBottom:hp("3%")}}
//                     >
//                         <Text style={{ fontSize: 18, color: "black" ,paddingLeft:hp("2%")}}>Block</Text>
//                     </TouchableOpacity>
//                     }
//                     </View>
//                     <View>
//                     <TouchableOpacity onPress={() => {
//                         this.handdlePress()
//                         Alert.alert(
//                             'Delete',
//                             'Are you sure you want to Delete the chat?', [{
//                                 text: 'Cancel',
//                                 onPress: () => console.log('Cancel Pressed'),
//                                 style: 'cancel'
//                             }, {
//                                 text: 'OK',
//                                 onPress: () => {
//                                     firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).update({
//                                         softDelete: true
//                                     // })
//                                     // this.props.navigation.navigate('Chats')
//                                     }).then(() => 
//                                         this.props.navigation.navigate('Chats')
//                                     )
//                                 }
//                             },], {
//                             cancelable: false
//                         }
//                         )
//                     }}
//                     style={{marginBottom:hp("3%")}}
//                     >
//                         <Text style={{ fontSize: 18, color: "black" ,paddingLeft:hp("2%")}}>Delete</Text>
//                     </TouchableOpacity>  
//                     </View>
//         </View>
//     </View>
// </Animated.View>


// <Animated.View style={[styles.button, sizeStyle]}>
//     <TouchableHighlight onPress={this.handdlePress} underlayColor={0}>
//         <Ionicons name="ios-keypad" size={24} color="white" />
//     </TouchableHighlight>
// </Animated.View>
// </View>
//             </View>
//           <GiftedChat
//             messages={this.state.messages}
//             onSend={this.send}
//             user={this.user}
//             // showUserAvatar={true}
//             renderInputToolbar={props => customtInputToolbar(props)}
//             // renderCustomView={props=>renderCustomView(props)}
//             renderBubble={props => renderBubble(props)}
//             renderTime={props => renderTime(props)}
//             renderSend={props => renderSend(props)}
//           // renderUsernameOnMessage={true} 
//           />
//         </View>
//       );
//     } else {
//       return null;
//     }
//   }
// }

// const mapStateToProps = (state) => {
//   console.log(state)
//   return {
//     upload_status: state.textUpload,
//     nameuser: state.nameuser,
//     phonenumberuser: state.phonenumberuser,
//   }
// }

// export default connect(mapStateToProps)(AnonymousChat)


// const styles = StyleSheet.create({
//   button: {
//       justifyContent: 'center',
//       alignItems: 'center',
//       shadowColor: '#005f94',
//       shadowRadius: 5,
//       shadowOffset: { height: 10 },
//       shadowOpacity: 0.3,
//       // elevation: 3,
//       marginLeft: 20
//   },
//   drawer: {
//       width: 0.3366 * width,
//       height: 0.2599 * height,
//       backgroundColor: '#FFFFFF',
//       // elevation: 3,
//       borderRadius: 0,
//       shadowRadius: 5,
//       flex: 1,
//       shadowColor: '#7F58FF',
//       shadowOffset: { height: 10 },
//       shadowOpacity: 0.3,
//       zIndex: 2,
//       paddingTop:hp("2%")
//   }
// });

import React from 'react';
import { GiftedChat, InputToolbar, SystemMessage, Bubble, Send } from 'react-native-gifted-chat'; // 0.3.0
import {
  View, Text, TouchableOpacity, Image, BackHandler, Alert, Button, TouchableHighlight, Modal,StyleSheet ,TouchableWithoutFeedback,Animated,Dimensions
} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import CryptoJS from "react-native-crypto-js";
// import AnonymousDrawer from './AnonymousDrawer';
const { width, height } = Dimensions.get('window');
import {_} from 'lodash';


import Ionicons from 'react-native-vector-icons/Ionicons';

class AnonymousChat extends React.Component {
  b64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  constructor(props) {
    super(props);
    this.state = {
      counter: null,
      isBlocked: null,
      BlockedCounter: null,
      isDone: null,
      modalVisible: true,
      setModalVisible: false
    };
  }
  encode(key, data) {
    console.log(key,data)
    data = this.xor_encrypt(key, data);
    return this.b64_encode(data);
  }
  decode(key, data) {
    data = this.b64_decode(data);
    return this.xor_decrypt(key, data);
  }



b64_encode(data) {
  var o1, o2, o3, h1, h2, h3, h4, bits, r, i = 0, enc = "";
  if (!data) { return data; }
  do {
    o1 = data[i++];
    o2 = data[i++];
    o3 = data[i++];
    bits = o1 << 16 | o2 << 8 | o3;
    h1 = bits >> 18 & 0x3f;
    h2 = bits >> 12 & 0x3f;
    h3 = bits >> 6 & 0x3f;
    h4 = bits & 0x3f;
    enc += this.b64_table.charAt(h1) + this.b64_table.charAt(h2) + this.b64_table.charAt(h3) + this.b64_table.charAt(h4);
  } while (i < data.length);
  r = data.length % 3;
  return (r ? enc.slice(0, r - 3) : enc) + "===".slice(r || 3);
}
b64_decode(data) {
  var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, result = [];
  if (!data) { return data; }
  data += "";
  do {
    h1 = this.b64_table.indexOf(data.charAt(i++));
    h2 = this.b64_table.indexOf(data.charAt(i++));
    h3 = this.b64_table.indexOf(data.charAt(i++));
    h4 = this.b64_table.indexOf(data.charAt(i++));
    bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
    o1 = bits >> 16 & 0xff;
    o2 = bits >> 8 & 0xff;
    o3 = bits & 0xff;
    result.push(o1);
    if (h3 !== 64) {
      result.push(o2);
      if (h4 !== 64) {
        result.push(o3);
      }
    }
  } while (i < data.length);
  return result;
}

xor_encrypt(key, data) {
 console.log(data,key);
  return _.map(data, function(c, i) {
    return c.charCodeAt(0) ^ key.charCodeAt( Math.floor(i % key.length) );
  });
}
xor_decrypt(key, data) {
  return _.map(data, function(c, i) {
    return String.fromCharCode( c ^ key.charCodeAt( Math.floor(i % key.length) ) );
  }).join("");
}



  fetchBlockCount = () => {
    firebase.database().ref("SignUpInComplete/" + this.props.navigation.state.params.phonenumber).on("value", snapshot => {
      console.log("snapshot.val()", snapshot.val())
      this.setState({
        BlockedCounter: snapshot.val().BlockedCounter,
      })
    })
  }



  componentDidMount() {
    firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).update({
      counter: 0
    })
    firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.navigation.state.params.phonenumber + "/" + this.props.phonenumberuser + "," + this.props.navigation.state.params.timestamp).on("value", snapshot => {
      // var c = snapshot.val().counter
      console.log(snapshot.val().counter)
      this.setState({
        counter: snapshot.val().counter,
        isBlocked: snapshot.val().isBlocked,
      })
    })
    firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).on("value", snapshot => {
      // console.log(snapshot.val().counter)
      console.log("snapshot.val().isDone", snapshot.val().isDone)
      this.setState({
        isDone: snapshot.val().isDone,
      })
    })

    this.fetchBlockCount()

    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

    this.on(message => {
      console.log("message.text", message.text)
      // let bytes = CryptoJS.AES.decrypt(message.text, 'U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=');
      let originalText = this.decode("U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=",message.text);
      console.log("originalText", originalText)
      message.text = originalText;
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    }
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    Alert.alert(
      'Exit App',
      'Exiting the application?', [{
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      }, {
        text: 'OK',
        onPress: () => BackHandler.exitApp()
      },], {
      cancelable: false
    }
    )
    return true;
  }

  get ref() {
    if (this.props.phonenumberuser > this.props.navigation.state.params.phonenumber) {
      var x = this.props.phonenumberuser + ',' + this.props.navigation.state.params.phonenumber;
    } else {
      var x = this.props.navigation.state.params.phonenumber + ',' + this.props.phonenumberuser;
    }
    return firebase.database().ref('OneToOneAnonymous/' + x + "," + this.props.navigation.state.params.timestamp + '/');
  }

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  };

  on = callback =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }
  // send the message to the Backend
  send = messages => {
    if (this.state.isBlocked == true) {
      alert("Chat is Blocked!")
    } else {
      for (let i = 0; i < messages.length; i++) {
        const { text, user } = messages[i];
        let ciphertext = this.encode('U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=',text)
        console.log("cipher text");
        text = ciphertext
        const message = {
          text,
          user,
          timestamp: this.timestamp,
        };
        this.append(message);
      }
      console.log("anonymouschat = ", this.props.navigation.state.params.timestamp)
      firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).update({
        timestamp: firebase.database.ServerValue.TIMESTAMP,
      })

      console.log(this.state.counter++)
      firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.navigation.state.params.phonenumber + "/" + this.props.phonenumberuser + "," + this.props.navigation.state.params.timestamp).update({
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        counter: this.state.counter++,
        softDelete: false,
      })
    }
  };

  append = message => this.ref.push(message);

  state = {
    messages: [],
  };

  get user() {
    return {
      name: this.props.nameuser,
      _id: this.props.phonenumberuser,
    };
  }


  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  buttonSize = new Animated.Value(1);
    mode = new Animated.Value(0);

    handdlePress = () => {
        Animated.sequence([
            Animated.timing(this.buttonSize, {
                toValue: 0.95,
                duration: 10
            }),
            Animated.timing(this.buttonSize, {
                toValue: 1
            }),
            Animated.timing(this.mode, {
                toValue: this.mode._value === 0 ? 1 : 0,
                duration: 90
            })
        ]).start();
    };

  render() {
    const sizeStyle = {
      transform: [{ scale: this.buttonSize }]
  }

  const drawerX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -0.3056 * width]
  })
  const drawerY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-0.7 * height, -0.000001 * height]
  })
    // console.log("this.props.navigation",this.props.navigation)
    // console.log("inside render" ,typeof(this.props.phonenumberuser),' ',typeof(this.props.navigation.state.params.phonenumber))
    const customtInputToolbar = props => {
      return (
        <InputToolbar
          {...props}
          containerStyle={{
            backgroundColor: "white",
            elevation: 3,
            width: wp("100%")
          }}
        />
      );
    };

    const renderSend = (props) => {
      return (
        <View style={{ elevation: 0, width: wp("10%"), marginRight: wp("5%") }}>
          <Send {...props}>

            {/* <Ionicons
              name="md-send"
              size={29}
            /> */}
            {/* <Text>Send</Text> */}
          </Send>
        </View>
      );
    }

    const renderTime = (props) => {
      return (
        <Time
          {...props}
          textStyle={{
            right: {
              color: Colors.snow,
              fontFamily: 'Montserrat-Light',
              fontSize: 14
            },
            left: {
              color: Colors.snow,
              fontFamily: 'Montserrat-Light',
              fontSize: 14
            }
          }}
        />
      );
    }

    const renderBubble = props => {
      // console.log(new Date(props.currentMessage.timestamp*1000).getTime());


      return (
        <View>

          <Bubble
            {...props}
            textStyle={{
              right: {
                color: '#fff',

              },
              left: {
                color: "#000"
              }
            }}
            wrapperStyle={{
              left: {
                backgroundColor: '#E1F5FE',
                borderRadius: 10


              },
              right: {
                backgroundColor: '#0091EA',
                borderRadius: 10,
                // position:"absolute"
              },
            }}
            style={{
              width: wp('50%'),
              zIndex: 0
            }}

          />

        </View>

      );
    }
    if (this.state.counter != null && this.state.isDone != null) {
      return (
        <View style={{ flex: 1,elevation:10}}>
          <View style={{  height:hp("9%"), backgroundColor: "#0290ea", flexDirection: 'row', justifyContent: "space-between", paddingRight: wp("3%")}}>

            {/* aadi ek change wo bhi toh hoga na agr band idhr se direct back button presss krde toh bhi ye firebase call chalne chahiye  */}
            <View style={{  justifyContent: 'center' }}>
              <TouchableOpacity onPress={
                () => {
                  this.props.navigation.navigate('Chats')
                  firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).update({
                    counter: 0
                  })
                  // console.log("lkjfdh")         
                }

              }
                style={{ marginLeft: wp("3%") }}
              >
                <Image
                  source={require('../assets/back.png')}
                />
              </TouchableOpacity>

            </View>
          </View>
          <View style={{top:23,right:10,position:'absolute'}}>
            <View style={{ alignItems: 'center'}}>
            <Animated.View style={{ position: "absolute", left: drawerX, top: drawerY, flex: 1 }}

>
    <View style={styles.drawer}>
        <View>
            {/* <TouchableHighlight style={{ paddingTop: 25 }} onPress={() => {
                console.log("about presses");
            }}> */}
            <View>
                {this.state.isBlocked ?
                    //if true than unblock user
                    <View>
                        {this.state.isDone ?
                            <TouchableOpacity onPress={() => {
                                this.handdlePress()
                                Alert.alert(
                                    'Unblock',
                                    'Are you sure you want to unblock the user?', [{
                                        text: 'Cancel',
                                        onPress: () => console.log('Cancel Pressed'),
                                        style: 'cancel'
                                    }, {
                                        text: 'OK',
                                        onPress: () => {
                                            console.log(this.state.BlockedCounter)

                                            this.state.BlockedCounter--

                                            this.setState({
                                                isBlocked: false,
                                                isDone: false
                                            })

                                            firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).update({
                                                isBlocked: false,
                                                isDone: false
                                            })
                                            firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.navigation.state.params.phonenumber + "/" + this.props.phonenumberuser + "," + this.props.navigation.state.params.timestamp).update({
                                                isBlocked: false,
                                                isDone: false
                                            })
                                            firebase.database().ref("SignUpInComplete/" + this.props.navigation.state.params.phonenumber + "/").update({
                                                BlockedCounter: this.state.BlockedCounter,
                                            })
                                            this.fetchBlockCount()
                                        }
                                    },], {
                                    cancelable: false
                                }
                                )
                            }}
                            style={{marginBottom:hp("3%")}}
                            >
                                <Text style={{ fontSize: 18, color: "black" ,paddingLeft:hp("2%")}}>Unblock</Text>
                            </TouchableOpacity>

                            :

                            <Text style={{ fontSize: 18, color: "black",paddingLeft:hp("2%") ,marginBottom:hp("3%")}}>Blocked </Text>
                        }

                    </View>
                    :

                    <TouchableOpacity onPress={() => {
                        this.handdlePress()
                        Alert.alert(
                            'Block',
                            'Are you sure you want to block the user?', [{
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel'
                            }, {
                                text: 'OK',
                                onPress: () => {
                                    console.log(this.state.BlockedCounter)
                                    this.state.BlockedCounter++
                                    this.setState({
                                        isBlocked: true,
                                        isDone: true
                                    })
                                    firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).update({
                                        isBlocked: true,
                                        isDone: true
                                    })
                                    firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.navigation.state.params.phonenumber + "/" + this.props.phonenumberuser + "," + this.props.navigation.state.params.timestamp).update({
                                        isBlocked: true,
                                        isDone: false
                                    })
                                    firebase.database().ref("SignUpInComplete/" + this.props.navigation.state.params.phonenumber + "/").update({
                                        BlockedCounter: this.state.BlockedCounter,
                                    })
                                    this.fetchBlockCount()
                                }
                            },], {
                            cancelable: false
                        }
                        )
                    }}
                    style={{marginBottom:hp("3%")}}
                    >
                        <Text style={{ fontSize: 18, color: "black" ,paddingLeft:hp("2%")}}>Block</Text>
                    </TouchableOpacity>
                    }
                    </View>
                    <View>
                    <TouchableOpacity onPress={() => {
                        this.handdlePress()
                        Alert.alert(
                            'Delete',
                            'Are you sure you want to Delete the chat?', [{
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel'
                            }, {
                                text: 'OK',
                                onPress: () => {
                                    firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).update({
                                        softDelete: true
                                    // })
                                    // this.props.navigation.navigate('Chats')
                                    }).then(() => 
                                        this.props.navigation.navigate('Chats')
                                    )
                                }
                            },], {
                            cancelable: false
                        }
                        )
                    }}
                    style={{marginBottom:hp("3%")}}
                    >
                        <Text style={{ fontSize: 18, color: "black" ,paddingLeft:hp("2%")}}>Delete</Text>
                    </TouchableOpacity>  
                    </View>
        </View>
    </View>
</Animated.View>


<Animated.View style={[styles.button, sizeStyle]}>
    <TouchableHighlight onPress={this.handdlePress} underlayColor={0}>
        <Ionicons name="ios-keypad" size={24} color="white" />
    </TouchableHighlight>
</Animated.View>
</View>
            </View>
          <GiftedChat
            messages={this.state.messages}
            onSend={this.send}
            user={this.user}
            // showUserAvatar={true}
            renderInputToolbar={props => customtInputToolbar(props)}
            // renderCustomView={props=>renderCustomView(props)}
            renderBubble={props => renderBubble(props)}
            renderTime={props => renderTime(props)}
            renderSend={props => renderSend(props)}
          // renderUsernameOnMessage={true} 
          />
        </View>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    upload_status: state.textUpload,
    nameuser: state.nameuser,
    phonenumberuser: state.phonenumberuser,
  }
}

export default connect(mapStateToProps)(AnonymousChat)


const styles = StyleSheet.create({
  button: {
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#005f94',
      shadowRadius: 5,
      shadowOffset: { height: 10 },
      shadowOpacity: 0.3,
      // elevation: 3,
      marginLeft: 20
  },
  drawer: {
      width: 0.3366 * width,
      height: 0.2599 * height,
      backgroundColor: '#FFFFFF',
      // elevation: 3,
      borderRadius: 0,
      shadowRadius: 5,
      flex: 1,
      shadowColor: '#7F58FF',
      shadowOffset: { height: 10 },
      shadowOpacity: 0.3,
      zIndex: 2,
      paddingTop:hp("2%")
  }
});