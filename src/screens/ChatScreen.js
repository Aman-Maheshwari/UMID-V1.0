// // import React from 'react';
// // import { GiftedChat, InputToolbar, SystemMessage, Bubble, Send } from 'react-native-gifted-chat'; // 0.3.0
// // import {
// //   View, Text, TouchableOpacity, Image, BackHandler, Alert, Button, TouchableHighlight, Modal, StyleSheet, TouchableWithoutFeedback, Animated, Dimensions
// // } from 'react-native'
// // import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// // import { connect } from 'react-redux';
// // import * as firebase from 'firebase';
// // import CryptoJS from "react-native-crypto-js";
// // const { width, height } = Dimensions.get('window');
// // import {_} from 'lodash';


// // import Ionicons from 'react-native-vector-icons/Ionicons';

// // class ChatScreen extends React.Component {
// //   b64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       Owner: null
// //     };
// //   }
// //   encode(key, data) {
// //     console.log(key,data)
// //     data = this.xor_encrypt(key, data);
// //     return this.b64_encode(data);
// //   }
// //   decode(key, data) {
// //     data = this.b64_decode(data);
// //     return this.xor_decrypt(key, data);
// //   }



// // b64_encode(data) {
// //   var o1, o2, o3, h1, h2, h3, h4, bits, r, i = 0, enc = "";
// //   if (!data) { return data; }
// //   do {
// //     o1 = data[i++];
// //     o2 = data[i++];
// //     o3 = data[i++];
// //     bits = o1 << 16 | o2 << 8 | o3;
// //     h1 = bits >> 18 & 0x3f;
// //     h2 = bits >> 12 & 0x3f;
// //     h3 = bits >> 6 & 0x3f;
// //     h4 = bits & 0x3f;
// //     enc += this.b64_table.charAt(h1) + this.b64_table.charAt(h2) + this.b64_table.charAt(h3) + this.b64_table.charAt(h4);
// //   } while (i < data.length);
// //   r = data.length % 3;
// //   return (r ? enc.slice(0, r - 3) : enc) + "===".slice(r || 3);
// // }
// // b64_decode(data) {
// //   var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, result = [];
// //   if (!data) { return data; }
// //   data += "";
// //   do {
// //     h1 = this.b64_table.indexOf(data.charAt(i++));
// //     h2 = this.b64_table.indexOf(data.charAt(i++));
// //     h3 = this.b64_table.indexOf(data.charAt(i++));
// //     h4 = this.b64_table.indexOf(data.charAt(i++));
// //     bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
// //     o1 = bits >> 16 & 0xff;
// //     o2 = bits >> 8 & 0xff;
// //     o3 = bits & 0xff;
// //     result.push(o1);
// //     if (h3 !== 64) {
// //       result.push(o2);
// //       if (h4 !== 64) {
// //         result.push(o3);
// //       }
// //     }
// //   } while (i < data.length);
// //   return result;
// // }

// // xor_encrypt(key, data) {
// //  console.log(data,key);
// //   return _.map(data, function(c, i) {
// //     return c.charCodeAt(0) ^ key.charCodeAt( Math.floor(i % key.length) );
// //   });
// // }
// // xor_decrypt(key, data) {
// //   return _.map(data, function(c, i) {
// //     return String.fromCharCode( c ^ key.charCodeAt( Math.floor(i % key.length) ) );
// //   }).join("");
// // }


// //   componentDidMount() {
// //     try {
// //       firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + "/").update({
// //         counter: 0,
// //       })
// //     } catch (error) {
// //       this.props.navigation.navigate('Chats', { urgentRefresh: true })
// //     }
// //     // firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + "/").update({
// //     //   counter: 0,
// //     // })
// //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
// //     firebase.database().ref("Participants/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + '/' + this.props.phonenumberuser + '/').on("value", snapshot => {
// //       try {
// //         console.log("snapshot.val().owner", snapshot.val().owner)
// //         this.setState({
// //           Owner: snapshot.val().owner
// //         })
// //       }
// //       catch{
// //         this.props.navigation.navigate('Chats', { urgentRefresh: true })
// //       }
// //     })
// //     this.on(message => {
// //       // let bytes = CryptoJS.AES.decrypt(message.text, 'U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=');
// //       let originalText = this.decode("U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=",message.text);
// //       message.text = originalText;
// //       this.setState(previousState => ({
// //         messages: GiftedChat.append(previousState.messages, message),
// //       }))
// //     }
// //     );
// //   }

// //   componentWillUnmount() {
// //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
// //   }

// //   handleBackButton = () => {
// //     Alert.alert(
// //       'Exit App',
// //       'Exiting the application?', [{
// //         text: 'Cancel',
// //         onPress: () => console.log('Cancel Pressed'),
// //         style: 'cancel'
// //       }, {
// //         text: 'OK',
// //         onPress: () => BackHandler.exitApp()
// //       },], {
// //       cancelable: false
// //     }
// //     )
// //     return true;
// //   }
// //   get ref() {
// //     return firebase.database().ref('chatroom/' + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + '/');
// //   }

// //   parse = snapshot => {
// //     const { timestamp: numberStamp, text, user } = snapshot.val();
// //     const { key: _id } = snapshot;
// //     const timestamp = new Date(numberStamp);
// //     const message = {
// //       _id,
// //       timestamp,
// //       text,
// //       user,
// //     };
// //     return message;
// //   };

// //   on = callback =>
// //     this.ref
// //       .limitToLast(20)
// //       .on('child_added', snapshot => callback(this.parse(snapshot)));

// //   get timestamp() {
// //     return firebase.database.ServerValue.TIMESTAMP;
// //   }
// //   // send the message to the Backend
// //   send = messages => {
// //     for (let i = 0; i < messages.length; i++) {
// //       const { text, user } = messages[i];
// //       let ciphertext = this.encode('U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=',text)
// //       console.log("cipher text");
// //       text = ciphertext
// //       const message = {
// //         text,
// //         user,
// //         timestamp: this.timestamp,
// //       };
// //       this.append(message);
// //     }

// //     var fetchparticipants = new Promise((resolve, reject) => {
// //       var fetch = [];
// //       firebase.database().ref("Participants/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + "/").on("value", snapshot => {
// //         try {
// //           fetch = Object.keys(snapshot.val())
// //           if (fetch) {
// //             resolve(fetch)
// //           }
// //           else {
// //             reject("No data")
// //           }
// //         } catch (error) {
// //           this.props.navigation.navigate('Chats')
// //         }
  
// //       })
// //     })
// //     fetchparticipants.then((arr) => {
// //       console.log(arr)
// //       for (var i = 0; i < arr.length; i++) {
// //         if (arr[i] != this.props.phonenumberuser) {
// //           console.log("ashgdh")
// //           var increment
// //           firebase.database().ref("ChatsUnderYou/alerts/" + arr[i] + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + "/").on("value", snapshot => {
// //             try {
// //               console.log(snapshot.val().counter)
// //               increment = snapshot.val().counter
// //             } catch (error) {
// //               this.props.navigation.navigate('Chats')
// //             }
        
// //           })
// //           increment = increment + 1;
// //           firebase.database().ref("ChatsUnderYou/alerts/" + arr[i] + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + "/").update({
// //             counter: increment,
// //             softDelete: false,
// //           })
// //         }
// //       }
// //     })
// //     // firebase.database().ref("Participants/"+this.props.navigation.state.params.phonenumber+","+this.props.navigation.state.params.timestamp+"/"+)

// //     firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).update({
// //       timestamp: firebase.database.ServerValue.TIMESTAMP
// //     })
// //     firebase.database().ref("ChatsUnderYou/alerts/" + this.props.navigation.state.params.phonenumber + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).update({
// //       timestamp: firebase.database.ServerValue.TIMESTAMP
// //     })
// //   };

// //   componentWillUnmount() {
// //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
// //   }

// //   handleBackButton = () => {
// //     Alert.alert(
// //       'Exit App',
// //       'Exiting the application?', [{
// //         text: 'Cancel',
// //         onPress: () => console.log('Cancel Pressed'),
// //         style: 'cancel'
// //       }, {
// //         text: 'OK',
// //         onPress: () => BackHandler.exitApp()
// //       },], {
// //       cancelable: false
// //     }
// //     )
// //     return true;
// //   }


// //   append = message => this.ref.push(message);

// //   state = {
// //     messages: [],
// //   };

// //   static navigationOptions = ({ navigation }) => ({
// //     title: (navigation.state.params || {}).name || 'Chat!',
// //   });


// //   get user() {
// //     return {
// //       name: this.props.nameuser,
// //       _id: this.props.phonenumberuser,
// //     };
// //   }

// //   buttonSize = new Animated.Value(1);
// //   mode = new Animated.Value(0);

// //   handdlePress = () => {
// //     Animated.sequence([
// //       Animated.timing(this.buttonSize, {
// //         toValue: 0.95,
// //         duration: 10
// //       }),
// //       Animated.timing(this.buttonSize, {
// //         toValue: 1
// //       }),
// //       Animated.timing(this.mode, {
// //         toValue: this.mode._value === 0 ? 1 : 0,
// //         duration: 90
// //       })
// //     ]).start();
// //   };

// //   render() {
// //     const sizeStyle = {
// //       transform: [{ scale: this.buttonSize }]
// //     }

// //     const drawerX = this.mode.interpolate({
// //       inputRange: [0, 1],
// //       outputRange: [0, -0.3056 * width]
// //     })
// //     const drawerY = this.mode.interpolate({
// //       inputRange: [0, 1],
// //       outputRange: [-0.7 * height, -0.000001 * height]
// //     })
// //     const customtInputToolbar = props => {
// //       return (
// //         <InputToolbar
// //           {...props}
// //           containerStyle={{
// //             backgroundColor: "white",
// //             elevation: 3,
// //             width: wp("100%")
// //           }}
// //         />
// //       );
// //     };

// //     const renderSend = (props) => {
// //       return (
// //         <View style={{ elevation: 0, width: wp("10%"), marginRight: wp("4%") }}>
// //           <Send {...props}>

// //             {/* <Ionicons
// //             name="md-send"
// //             size={29}
// //           /> */}
// //             {/* <Text>Send</Text> */}
// //           </Send>
// //         </View>
// //       );
// //     }
// //     const renderTime = (props) => {
// //       return (
// //         <Time
// //           {...props}
// //           textStyle={{
// //             right: {
// //               color: Colors.snow,
// //               fontFamily: 'Montserrat-Light',
// //               fontSize: 14
// //             },
// //             left: {
// //               color: Colors.snow,
// //               fontFamily: 'Montserrat-Light',
// //               fontSize: 14
// //             }
// //           }}
// //         />
// //       );
// //     }

// //     const renderBubble = props => {
// //       // console.log(new Date(props.currentMessage.timestamp*1000).getTime());
// //       return (
// //         <View>

// //           <Bubble
// //             {...props}
// //             textStyle={{
// //               right: {
// //                 color: '#fff',
// //               },
// //               left: {
// //                 color: "#000"

// //               }
// //             }}
// //             wrapperStyle={{
// //               left: {
// //                 backgroundColor: '#E1F5FE',
// //                 borderRadius: 10
// //               },
// //               right: {
// //                 backgroundColor: '#0091EA',
// //                 borderRadius: 10
// //               },
// //             }}
// //             style={{
// //               width: wp('50%')
// //             }}

// //           />

// //         </View>

// //       );
// //     }

// //     return (
// //       <View style={{ flex: 1, elevation: 10 }}>
// //         <View style={{ flex: 0.1, backgroundColor: "#0290ea", flexDirection: 'row' }}>
// //           <View style={{ width: wp("10%"), justifyContent: 'center' }}>
// //             <TouchableOpacity onPress={
// //               () => {
// //                 this.props.navigation.navigate('Chats')
// //                 firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + "/").update({
// //                   counter: 0,
// //                 })
// //               }
// //             }
// //               style={{ marginLeft: wp("3%") }}
// //             >
// //               <Image
// //                 source={require('../assets/back.png')}
// //               />
// //             </TouchableOpacity>
// //           </View>
// //           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginRight: wp("10%") }}>
// //             <Text style={{ color: 'white', fontSize: hp("2%"), fontWeight: 'bold',  width: wp("70%") }}>{this.props.navigation.state.params.name}</Text>
// //             <Text style={{ color: 'white', fontSize: hp("2%"), fontWeight: 'bold',  width: wp("70%") }}>{this.props.navigation.state.params.phonenumber}</Text>
// //           </View>
// //         </View>
// //         <View style={{ top: 23, right: 10, position: 'absolute' }}>
// //           <View style={{ alignItems: 'center' }}>
// //             <Animated.View style={{ position: "absolute", left: drawerX, top: drawerY, flex: 1 }}

// //             >
// //               <View style={styles.drawer}>
// //                 <View>
// //                   <View>
// //                     <TouchableOpacity onPress={() => {
// //                       this.handdlePress()
// //                       this.props.navigation.navigate("ParticipantsScreen", { name: this.props.navigation.state.params.name, phonenumber: this.props.navigation.state.params.phonenumber, timestamp: this.props.navigation.state.params.timestamp })
// //                     }}
// //                       style={{ marginBottom: hp("3%") }}
// //                     >
// //                       <Text style={{ fontSize: 18, color: "black", paddingLeft: hp("2%") }}>Participants</Text>
// //                     </TouchableOpacity>
// //                   </View>
// //                   <View>
// //                     <TouchableOpacity onPress={() => {
// //                       this.handdlePress()
// //                       Alert.alert(
// //                         'Delete',
// //                         'Are you sure you want to Delete the chat?', [{
// //                           text: 'Cancel',
// //                           onPress: () => console.log('Cancel Pressed'),
// //                           style: 'cancel'
// //                         }, {
// //                           text: 'OK',
// //                           onPress: () => {
// //                             firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).update({
// //                               softDelete: true
// //                             }).then(() =>
// //                               this.props.navigation.navigate('Chats')
// //                             )
// //                           }
// //                         },], {
// //                         cancelable: false
// //                       }
// //                       )
// //                     }}
// //                       style={{ marginBottom: hp("3%") }}
// //                     >
// //                       <Text style={{ fontSize: 18, color: "black", paddingLeft: hp("2%") }}>Delete</Text>
// //                     </TouchableOpacity>
// //                   </View>
// //                   <View>
// //                     <TouchableOpacity onPress={() => {
// //                       this.handdlePress()
// //                       console.log("this.state.Owner", this.state.Owner)
// //                       if (this.state.Owner == "true") {
// //                         Alert.alert(
// //                           'Close Emergency',
// //                           'Are you sure you want to Close the chat?', [{
// //                             text: 'Cancel',
// //                             onPress: () => console.log('Cancel Pressed'),
// //                             style: 'cancel'
// //                           }, {
// //                             text: 'OK',
// //                             onPress: () => {
// //                               var redirectToChats = new Promise((resolve, reject) => {
// //                                 this.props.navigation.navigate('Chats');
// //                                 setTimeout(() => {
// //                                   resolve(true)
// //                                 }, 100);

// //                               })

// //                               redirectToChats.then(() => {
// //                                 firebase.database().ref('sosDeleted/' + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + '/').set({
// //                                   name: this.props.navigation.state.params.name,
// //                                   phonenumber: this.props.navigation.state.params.phonenumber,
// //                                 }).then((data) => {
// //                                   // console.log(data)
// //                                   firebase.database().ref("sos/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).remove()
// //                                 })
// //                                 firebase.database().ref("Participants/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).remove()
// //                                 //To be updated this delete from the participamntsas table array
// //                                 firebase.database().ref("ChatsUnderYou/alerts/").on("value", snapshot => {
// //                                   var arr = Object.keys(snapshot.val());
// //                                   for (var i = 0; i < arr.length; i++) {
// //                                     firebase.database().ref("ChatsUnderYou/alerts/" + arr[i] + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).remove()
// //                                   }
// //                                 })
// //                                 firebase.database().ref("chatroom/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).remove();

// //                               })
// //                             }
// //                           },], {
// //                           cancelable: false
// //                         }
// //                         )
// //                       } else {
// //                         Alert.alert(
// //                           'Exit',
// //                           'Are you sure you want to Exit the chat?', [{
// //                               text: 'Cancel',
// //                               onPress: () => console.log('Cancel Pressed'),
// //                               style: 'cancel'
// //                           }, {
// //                               text: 'OK',
// //                               onPress: () => {
// //                                 var redirectToChats =new Promise((resolve,reject)=>{
// //                                   this.props.navigation.navigate('Chats');
// //                                   setTimeout(() => {
// //                                     resolve(true)
// //                                   }, 100);
                                  
// //                                 })
                                
// //                                 redirectToChats.then(()=>{
                                  
// //                                   firebase.database().ref("Participants/"+ this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp+"/"+this.props.phonenumberuser).remove()                                  //To be updated this delete from the participamntsas table array
// //                                   firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).remove()                                  
// //                                 })
// //                             }
// //                           },], {
// //                           cancelable: false
// //                       }
// //                       )
// //                       }
// //                     }}
// //                       style={{ marginBottom: hp("3%") }}
// //                     >
// //                       {this.state.Owner == "true" ?
// //                         <Text style={{ fontSize: 18, color: "black", paddingLeft: hp("2%") }}>Close Emergency</Text>
// //                         :
// //                         <Text style={{ fontSize: 18, color: "black", paddingLeft: hp("2%") }}>Exit Group</Text>
// //                       }

// //                     </TouchableOpacity>
// //                   </View>
// //                 </View>
// //               </View>
// //             </Animated.View>


// //             <Animated.View style={[styles.button, sizeStyle]}>
// //               <TouchableHighlight onPress={this.handdlePress} underlayColor={0}>
// //                 <Ionicons name="ios-keypad" size={24} color="white" />
// //               </TouchableHighlight>
// //             </Animated.View>
// //           </View>
// //         </View>

// //         <GiftedChat
// //           messages={this.state.messages}
// //           onSend={this.send}
// //           user={this.user}
// //           // showUserAvatar={true}
// //           renderInputToolbar={props => customtInputToolbar(props)}
// //           // renderCustomView={props=>renderCustomView(props)}
// //           renderBubble={props => renderBubble(props)}
// //           renderTime={props => renderTime(props)}
// //           renderSend={props => renderSend(props)}
// //           renderUsernameOnMessage={true}
// //         // alwaysShowSend={true}
// //         />
// //       </View>
// //     );
// //   }


// //   //   componentWillUnmount() {
// //   //     this.off();
// //   //   }
// //   // }
// // }

// // const mapStateToProps = (state) => {
// //   console.log(state)
// //   return {
// //     upload_status: state.textUpload,
// //     nameuser: state.nameuser,
// //     phonenumberuser: state.phonenumberuser,
// //   }
// // }

// // export default connect(mapStateToProps)(ChatScreen)


// // const styles = StyleSheet.create({
// //   button: {
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     shadowColor: '#005f94',
// //     shadowRadius: 5,
// //     shadowOffset: { height: 10 },
// //     shadowOpacity: 0.3,
// //     // elevation: 3,
// //     marginLeft: 20
// //   },
// //   drawer: {
// //     width: 0.3366 * width,
// //     height: 0.2599 * height,
// //     backgroundColor: '#FFFFFF',
// //     // elevation: 3,
// //     borderRadius: 0,
// //     shadowRadius: 5,
// //     flex: 1,
// //     shadowColor: '#7F58FF',
// //     shadowOffset: { height: 10 },
// //     shadowOpacity: 0.3,
// //     zIndex: 2,
// //     paddingTop: hp("2%")
// //   }
// // });


// import React from 'react';
// import { GiftedChat, InputToolbar, SystemMessage, Bubble, Send } from 'react-native-gifted-chat'; // 0.3.0
// import {
//   View, Text, TouchableOpacity, Image, BackHandler, Alert, Button, TouchableHighlight, Modal, StyleSheet, TouchableWithoutFeedback, Animated, Dimensions
// } from 'react-native'
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { connect } from 'react-redux';
// import * as firebase from 'firebase';
// import CryptoJS from "react-native-crypto-js";
// const { width, height } = Dimensions.get('window');
// import {_} from 'lodash';


// import Ionicons from 'react-native-vector-icons/Ionicons';

// class ChatScreen extends React.Component {
//   b64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
//   constructor(props) {
//     super(props);
//     this.state = {
//       Owner: null
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


//   componentDidMount() {
//     try {
//       firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + "/").update({
//         counter: 0,
//       })
//     } catch (error) {
//       this.props.navigation.navigate('Chats', { urgentRefresh: true })
//     }
//     // firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + "/").update({
//     //   counter: 0,
//     // })
//     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
//     firebase.database().ref("Participants/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + '/' + this.props.phonenumberuser + '/').on("value", snapshot => {
//       try {
//         console.log("snapshot.val().owner", snapshot.val().owner)
//         this.setState({
//           Owner: snapshot.val().owner
//         })
//       }
//       catch{
//         this.props.navigation.navigate('Chats', { urgentRefresh: true })
//       }
//     })
//     this.on(message => {
//       // let bytes = CryptoJS.AES.decrypt(message.text, 'U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=');
//       let originalText = this.decode("U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=",message.text);
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
//     return firebase.database().ref('chatroom/' + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + '/');
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
//     for (let i = 0; i < messages.length; i++) {
//       const { text, user } = messages[i];
//       let ciphertext = this.encode('U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=',text)
//       console.log("cipher text");
//       text = ciphertext
//       const message = {
//         text,
//         user,
//         timestamp: this.timestamp,
//       };
//       this.append(message);
//     }

//     var fetchparticipants = new Promise((resolve, reject) => {
//       var fetch = [];
//       firebase.database().ref("Participants/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + "/").on("value", snapshot => {
//         try {
//           fetch = Object.keys(snapshot.val())
//           if (fetch) {
//             resolve(fetch)
//           }
//           else {
//             reject("No data")
//           }
//         } catch (error) {
//           this.props.navigation.navigate('Chats')
//         }
//       })
//     })
//     fetchparticipants.then((arr) => {
//       console.log(arr)
//       for (var i = 0; i < arr.length; i++) {
//         if (arr[i] != this.props.phonenumberuser) {
//           console.log("ashgdh")
//           var increment
//           firebase.database().ref("ChatsUnderYou/alerts/" + arr[i] + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + "/").on("value", snapshot => {
//             try{
//             console.log(snapshot.val().counter)
//             increment = snapshot.val().counter}
//             catch{
//               this.props.navigation.navigate("Chats")
//             }
//           })
//           increment = increment + 1;
//           firebase.database().ref("ChatsUnderYou/alerts/" + arr[i] + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + "/").update({
//             counter: increment,
//             softDelete: false,
//           })
//         }
//       }
//     })
//     // firebase.database().ref("Participants/"+this.props.navigation.state.params.phonenumber+","+this.props.navigation.state.params.timestamp+"/"+)

//     firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).update({
//       timestamp: firebase.database.ServerValue.TIMESTAMP
//     })
//     firebase.database().ref("ChatsUnderYou/alerts/" + this.props.navigation.state.params.phonenumber + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).update({
//       timestamp: firebase.database.ServerValue.TIMESTAMP
//     })
//   };

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


//   append = message => this.ref.push(message);

//   state = {
//     messages: [],
//   };

//   static navigationOptions = ({ navigation }) => ({
//     title: (navigation.state.params || {}).name || 'Chat!',
//   });


//   get user() {
//     return {
//       name: this.props.nameuser,
//       _id: this.props.phonenumberuser,
//     };
//   }

//   buttonSize = new Animated.Value(1);
//   mode = new Animated.Value(0);

//   handdlePress = () => {
//     Animated.sequence([
//       Animated.timing(this.buttonSize, {
//         toValue: 0.95,
//         duration: 10
//       }),
//       Animated.timing(this.buttonSize, {
//         toValue: 1
//       }),
//       Animated.timing(this.mode, {
//         toValue: this.mode._value === 0 ? 1 : 0,
//         duration: 90
//       })
//     ]).start();
//   };

//   render() {
//     const sizeStyle = {
//       transform: [{ scale: this.buttonSize }]
//     }

//     const drawerX = this.mode.interpolate({
//       inputRange: [0, 1],
//       outputRange: [0, -0.3056 * width]
//     })
//     const drawerY = this.mode.interpolate({
//       inputRange: [0, 1],
//       outputRange: [-0.7 * height, -0.000001 * height]
//     })
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
//         <View style={{ elevation: 0, width: wp("10%"), marginRight: wp("4%") }}>
//           <Send {...props}>

//             {/* <Ionicons
//             name="md-send"
//             size={29}
//           /> */}
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
//                 borderRadius: 10
//               },
//             }}
//             style={{
//               width: wp('50%')
//             }}

//           />

//         </View>

//       );
//     }

//     return (
//       <View style={{ flex: 1, elevation: 10 }}>
//         <View style={{ height:hp("9%"), backgroundColor: "#0290ea", flexDirection: 'row' }}>
//           <View style={{ width: wp("10%"), justifyContent: 'center' }}>
//             <TouchableOpacity onPress={
//               () => {
//                 this.props.navigation.navigate('Chats')
//                 firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + "/").update({
//                   counter: 0,
//                 })
//               }
//             }
//               style={{ marginLeft: wp("3%") }}
//             >
//               <Image
//                 source={require('../assets/back.png')}
//               />
//             </TouchableOpacity>
//           </View>
//           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginRight: wp("10%") }}>
//             <Text style={{ color: 'white', fontSize: hp("2%"), fontWeight: 'bold',width: wp("70%") }}>{this.props.navigation.state.params.name}</Text>
//             <Text style={{ color: 'white', fontSize: hp("2%"), fontWeight: 'bold',width: wp("70%") }}>{this.props.navigation.state.params.phonenumber}</Text>
//           </View>
//         </View>
//         <View style={{ top: 23, right: 10, position: 'absolute' }}>
//           <View style={{ alignItems: 'center' }}>
//             <Animated.View style={{ position: "absolute", left: drawerX, top: drawerY, flex: 1 }}

//             >
//               <View style={styles.drawer}>
//                 <View>
//                   <View>
//                     <TouchableOpacity onPress={() => {
//                       this.handdlePress()
//                       this.props.navigation.navigate("ParticipantsScreen", { name: this.props.navigation.state.params.name, phonenumber: this.props.navigation.state.params.phonenumber, timestamp: this.props.navigation.state.params.timestamp })
//                     }}
//                       style={{ marginBottom: hp("3%") }}
//                     >
//                       <Text style={{ fontSize: 18, color: "black", paddingLeft: hp("2%") }}>Participants</Text>
//                     </TouchableOpacity>
//                   </View>
//                   <View>
//                     <TouchableOpacity onPress={() => {
//                       this.handdlePress()
//                       Alert.alert(
//                         'Delete',
//                         'Are you sure you want to Delete the chat?', [{
//                           text: 'Cancel',
//                           onPress: () => console.log('Cancel Pressed'),
//                           style: 'cancel'
//                         }, {
//                           text: 'OK',
//                           onPress: () => {
//                             firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).update({
//                               softDelete: true
//                             }).then(() =>
//                               this.props.navigation.navigate('Chats')
//                             )
//                           }
//                         },], {
//                         cancelable: false
//                       }
//                       )
//                     }}
//                       style={{ marginBottom: hp("3%") }}
//                     >
//                       <Text style={{ fontSize: 18, color: "black", paddingLeft: hp("2%") }}>Delete</Text>
//                     </TouchableOpacity>
//                   </View>
//                   <View>
//                     <TouchableOpacity onPress={() => {
//                       this.handdlePress()
//                       console.log("this.state.Owner", this.state.Owner)
//                       if (this.state.Owner == "true") {
//                         Alert.alert(
//                           'Close Emergency',
//                           'Are you sure you want to Close the chat?', [{
//                             text: 'Cancel',
//                             onPress: () => console.log('Cancel Pressed'),
//                             style: 'cancel'
//                           }, {
//                             text: 'OK',
//                             onPress: () => {
//                               var redirectToChats = new Promise((resolve, reject) => {
//                                 this.props.navigation.navigate('Chats');
//                                 setTimeout(() => {
//                                   resolve(true)
//                                 }, 100);

//                               })

//                               redirectToChats.then(() => {
//                                 firebase.database().ref('sosDeleted/' + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + '/').set({
//                                   name: this.props.navigation.state.params.name,
//                                   phonenumber: this.props.navigation.state.params.phonenumber,
//                                 }).then((data) => {
//                                   // console.log(data)
//                                   firebase.database().ref("sos/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).remove()
//                                 })
//                                 firebase.database().ref("Participants/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).remove()
//                                 //To be updated this delete from the participamntsas table array
//                                 firebase.database().ref("ChatsUnderYou/alerts/").on("value", snapshot => {
//                                   var arr = Object.keys(snapshot.val());
//                                   for (var i = 0; i < arr.length; i++) {
//                                     firebase.database().ref("ChatsUnderYou/alerts/" + arr[i] + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).remove()
//                                   }
//                                 })
//                                 firebase.database().ref("chatroom/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).remove();

//                               })
//                             }
//                           },], {
//                           cancelable: false
//                         }
//                         )
//                       } else {
//                         Alert.alert(
//                           'Exit',
//                           'Are you sure you want to Exit the chat?', [{
//                               text: 'Cancel',
//                               onPress: () => console.log('Cancel Pressed'),
//                               style: 'cancel'
//                           }, {
//                               text: 'OK',
//                               onPress: () => {
//                                 var redirectToChats =new Promise((resolve,reject)=>{
//                                   this.props.navigation.navigate('Chats');
//                                   setTimeout(() => {
//                                     resolve(true)
//                                   }, 100);
                                  
//                                 })
                                
//                                 redirectToChats.then(()=>{
                                  
//                                   firebase.database().ref("Participants/"+ this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp+"/"+this.props.phonenumberuser).remove()                                  //To be updated this delete from the participamntsas table array
//                                   firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).remove()                                  
//                                 })
//                             }
//                           },], {
//                           cancelable: false
//                       }
//                       )
//                       }
//                     }}
//                       style={{ marginBottom: hp("3%") }}
//                     >
//                       {this.state.Owner == "true" ?
//                         <Text style={{ fontSize: 18, color: "black", paddingLeft: hp("2%") }}>Close Emergency</Text>
//                         :
//                         <Text style={{ fontSize: 18, color: "black", paddingLeft: hp("2%") }}>Exit Group</Text>
//                       }

//                     </TouchableOpacity>
//                   </View>
//                 </View>
//               </View>
//             </Animated.View>


//             <Animated.View style={[styles.button, sizeStyle]}>
//               <TouchableHighlight onPress={this.handdlePress} underlayColor={0}>
//                 <Ionicons name="ios-keypad" size={24} color="white" />
//               </TouchableHighlight>
//             </Animated.View>
//           </View>
//         </View>

//         <GiftedChat
//           messages={this.state.messages}
//           onSend={this.send}
//           user={this.user}
//           // showUserAvatar={true}
//           renderInputToolbar={props => customtInputToolbar(props)}
//           // renderCustomView={props=>renderCustomView(props)}
//           renderBubble={props => renderBubble(props)}
//           renderTime={props => renderTime(props)}
//           renderSend={props => renderSend(props)}
//           renderUsernameOnMessage={true}
//         // alwaysShowSend={true}
//         />
//       </View>
//     );
//   }


//   //   componentWillUnmount() {
//   //     this.off();
//   //   }
//   // }
// }

// const mapStateToProps = (state) => {
//   console.log(state)
//   return {
//     upload_status: state.textUpload,
//     nameuser: state.nameuser,
//     phonenumberuser: state.phonenumberuser,
//   }
// }

// export default connect(mapStateToProps)(ChatScreen)


// const styles = StyleSheet.create({
//   button: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#005f94',
//     shadowRadius: 5,
//     shadowOffset: { height: 10 },
//     shadowOpacity: 0.3,
//     // elevation: 3,
//     marginLeft: 20
//   },
//   drawer: {
//     width: 0.3366 * width,
//     height: 0.2599 * height,
//     backgroundColor: '#FFFFFF',
//     // elevation: 3,
//     borderRadius: 0,
//     shadowRadius: 5,
//     flex: 1,
//     shadowColor: '#7F58FF',
//     shadowOffset: { height: 10 },
//     shadowOpacity: 0.3,
//     zIndex: 2,
//     paddingTop: hp("2%")
//   }
// });



import React from 'react';
import { GiftedChat, InputToolbar, SystemMessage, Bubble, Send } from 'react-native-gifted-chat'; // 0.3.0
import {
  View, Text, TouchableOpacity, Image, BackHandler, Alert, TouchableHighlight, Modal, StyleSheet, TouchableWithoutFeedback, Animated, Dimensions
} from 'react-native'
import { Button, Paragraph, Menu, Divider, Provider } from 'react-native-paper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import CryptoJS from "react-native-crypto-js";
const { width, height } = Dimensions.get('window');
import {_} from 'lodash';


import Ionicons from 'react-native-vector-icons/Ionicons';

class ChatScreen extends React.Component {
  b64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  constructor(props) {
    super(props);
    this.state = {
      Owner: null,
      visible: false,
    };
  }
  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });

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


  componentDidMount() {
    try {
      firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + "/").update({
        counter: 0,
      })
    } catch (error) {
      this.props.navigation.navigate('Chats', { urgentRefresh: true })
    }
    // firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + "/").update({
    //   counter: 0,
    // })
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    firebase.database().ref("Participants/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + '/' + this.props.phonenumberuser + '/').on("value", snapshot => {
      try {
        console.log("snapshot.val().owner", snapshot.val().owner)
        this.setState({
          Owner: snapshot.val().owner
        })
      }
      catch{
        this.props.navigation.navigate('Chats', { urgentRefresh: true })
      }
    })
    this.on(message => {
      // let bytes = CryptoJS.AES.decrypt(message.text, 'U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=');
      let originalText = this.decode("U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=",message.text);
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
    return firebase.database().ref('chatroom/' + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + '/');
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

    var fetchparticipants = new Promise((resolve, reject) => {
      var fetch = [];
      firebase.database().ref("Participants/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + "/").on("value", snapshot => {
        try {
          fetch = Object.keys(snapshot.val())
          if (fetch) {
            resolve(fetch)
          }
          else {
            reject("No data")
          }
        } catch (error) {
          this.props.navigation.navigate('Chats')
        }
      })
    })
    fetchparticipants.then((arr) => {
      console.log(arr)
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] != this.props.phonenumberuser) {
          console.log("ashgdh")
          var increment
          firebase.database().ref("ChatsUnderYou/alerts/" + arr[i] + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + "/").on("value", snapshot => {
            try{
            console.log(snapshot.val().counter)
            increment = snapshot.val().counter}
            catch{
              this.props.navigation.navigate("Chats")
            }
          })
          increment = increment + 1;
          firebase.database().ref("ChatsUnderYou/alerts/" + arr[i] + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + "/").update({
            counter: increment,
            softDelete: false,
          })
        }
      }
    })
    // firebase.database().ref("Participants/"+this.props.navigation.state.params.phonenumber+","+this.props.navigation.state.params.timestamp+"/"+)

    firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).update({
      timestamp: firebase.database.ServerValue.TIMESTAMP
    })
    firebase.database().ref("ChatsUnderYou/alerts/" + this.props.navigation.state.params.phonenumber + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).update({
      timestamp: firebase.database.ServerValue.TIMESTAMP
    })
  };

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


  append = message => this.ref.push(message);

  state = {
    messages: [],
  };

  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  });


  get user() {
    return {
      name: this.props.nameuser,
      _id: this.props.phonenumberuser,
    };
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
        <View style={{ elevation: 0, width: wp("10%"), marginRight: wp("4%") }}>
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
                borderRadius: 10
              },
            }}
            style={{
              width: wp('50%')
            }}

          />

        </View>

      );
    }

    return (
      <Provider>
      <View style={{ flex: 1, elevation: 10 }}>
        <View style={{ height:hp("9%"), backgroundColor: "#0290ea", flexDirection: 'row' }}>
          <View style={{ width: wp("10%"), justifyContent: 'center' }}>
            <TouchableOpacity onPress={
              () => {
                this.props.navigation.navigate('Chats')
                firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + "/").update({
                  counter: 0,
                })
              }
            }
              style={{ marginLeft: wp("3%") }}
            >
              <Image
                source={require('../assets/back.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginRight: wp("10%")}}>
            <Text style={{ color: 'white', fontSize: hp("2%"), fontWeight: 'bold',width: wp("60%") }}>{this.props.navigation.state.params.name}</Text>
            <Text style={{ color: 'white', fontSize: hp("2%"), fontWeight: 'bold',width: wp("60%") }}>{this.props.navigation.state.params.phonenumber}</Text>
          </View>
            {/* <View style={{width:wp("15%"),alignItems:"center",justifyContent:"center"}}> */}
            <Menu
            visible={this.state.visible}
            onDismiss={this._closeMenu}
            anchor={
              <TouchableOpacity onPress={() => {
                this._openMenu()
              }} style={{width:wp("15%"),alignItems:"center",justifyContent:"center",height:hp("9%")}}>
              <Ionicons name="ios-keypad" size={24} color="white" />
              </TouchableOpacity>
            }
          >
            <Menu.Item onPress={() => {
                      this._closeMenu()
                      this.props.navigation.navigate("ParticipantsScreen", { name: this.props.navigation.state.params.name, phonenumber: this.props.navigation.state.params.phonenumber, timestamp: this.props.navigation.state.params.timestamp })
                    }} title="Participants" titleStyle={{color:"grey"}}/>
            <Menu.Item onPress={() => {
                      this._closeMenu()
                      Alert.alert(
                        'Delete',
                        'Are you sure you want to Delete the chat?', [{
                          text: 'Cancel',
                          onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel'
                        }, {
                          text: 'OK',
                          onPress: () => {
                            firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).update({
                              softDelete: true
                            }).then(() =>
                              this.props.navigation.navigate('Chats')
                            )
                          }
                        },], {
                        cancelable: false
                      }
                      )
                    }} title="Delete" titleStyle={{color:"grey"}}/>
            {/* <Divider /> */}
            {this.state.Owner == "true" ? 
            <Menu.Item onPress={() => {
              this._closeMenu()
              Alert.alert(
              'Close Emergency',
              'Are you sure you want to Close the chat?', [{
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              }, {
                text: 'OK',
                onPress: () => {
                  var redirectToChats = new Promise((resolve, reject) => {
                    this.props.navigation.navigate('Chats');
                    setTimeout(() => {
                      resolve(true)
                    }, 100);

                  })

                  redirectToChats.then(() => {
                    firebase.database().ref('sosDeleted/' + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + '/').set({
                      name: this.props.navigation.state.params.name,
                      phonenumber: this.props.navigation.state.params.phonenumber,
                    }).then((data) => {
                      // console.log(data)
                      firebase.database().ref("sos/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).remove()
                    })
                    firebase.database().ref("Participants/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).remove()
                    //To be updated this delete from the participamntsas table array
                    firebase.database().ref("ChatsUnderYou/alerts/").on("value", snapshot => {
                      var arr = Object.keys(snapshot.val());
                      for (var i = 0; i < arr.length; i++) {
                        firebase.database().ref("ChatsUnderYou/alerts/" + arr[i] + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).remove()
                      }
                    })
                    firebase.database().ref("chatroom/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).remove();

                  })
                }
              },], {
              cancelable: false
            }
            )}} title="Close Emergency" titleStyle={{color:"grey"}} />:
            <Menu.Item onPress={() => {
              this._closeMenu()
              Alert.alert(
                'Exit',
                'Are you sure you want to Exit the chat?', [{
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                }, {
                    text: 'OK',
                    onPress: () => {
                      var redirectToChats =new Promise((resolve,reject)=>{
                        this.props.navigation.navigate('Chats');
                        setTimeout(() => {
                          resolve(true)
                        }, 100);
                        
                      })
                      
                      redirectToChats.then(()=>{
                        
                        firebase.database().ref("Participants/"+ this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp+"/"+this.props.phonenumberuser).remove()                                  //To be updated this delete from the participamntsas table array
                        firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).remove()                                  
                      })
                  }
                },], {
                cancelable: false
            }
            )
            }} title="Exit Group" titleStyle={{color:"grey"}}/>
            }
          </Menu>
              {/* </View> */}
        </View>
        {/* <View style={{ top: 23, right: 10, position: 'absolute' }}>
        <Menu
            visible={this.state.visible}
            onDismiss={this._closeMenu}
            anchor={
              <TouchableOpacity onPress={() => {
                this._openMenu()
              }}>
              <Ionicons name="ios-keypad" size={24} color="white" />
              </TouchableOpacity>
            }
          >
            <Menu.Item onPress={() => {}} title="Item 1" />
            <Menu.Item onPress={() => {}} title="Item 2" />
            <Divider />
            <Menu.Item onPress={() => {}} title="Item 3" />
          </Menu>
          
          {/* <View style={{ alignItems: 'center' }}>
            <Animated.View style={{ position: "absolute", left: drawerX, top: drawerY, flex: 1 }}

            >
              <View style={styles.drawer}>
                <View>
                  <View>
                    <TouchableOpacity onPress={() => {
                      this.handdlePress()
                      this.props.navigation.navigate("ParticipantsScreen", { name: this.props.navigation.state.params.name, phonenumber: this.props.navigation.state.params.phonenumber, timestamp: this.props.navigation.state.params.timestamp })
                    }}
                      style={{ marginBottom: hp("3%") }}
                    >
                      <Text style={{ fontSize: 18, color: "black", paddingLeft: hp("2%") }}>Participants</Text>
                    </TouchableOpacity>
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
                            firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).update({
                              softDelete: true
                            }).then(() =>
                              this.props.navigation.navigate('Chats')
                            )
                          }
                        },], {
                        cancelable: false
                      }
                      )
                    }}
                      style={{ marginBottom: hp("3%") }}
                    >
                      <Text style={{ fontSize: 18, color: "black", paddingLeft: hp("2%") }}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity onPress={() => {
                      this.handdlePress()
                      console.log("this.state.Owner", this.state.Owner)
                      if (this.state.Owner == "true") {
                        Alert.alert(
                          'Close Emergency',
                          'Are you sure you want to Close the chat?', [{
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel'
                          }, {
                            text: 'OK',
                            onPress: () => {
                              var redirectToChats = new Promise((resolve, reject) => {
                                this.props.navigation.navigate('Chats');
                                setTimeout(() => {
                                  resolve(true)
                                }, 100);

                              })

                              redirectToChats.then(() => {
                                firebase.database().ref('sosDeleted/' + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + '/').set({
                                  name: this.props.navigation.state.params.name,
                                  phonenumber: this.props.navigation.state.params.phonenumber,
                                }).then((data) => {
                                  // console.log(data)
                                  firebase.database().ref("sos/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).remove()
                                })
                                firebase.database().ref("Participants/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).remove()
                                //To be updated this delete from the participamntsas table array
                                firebase.database().ref("ChatsUnderYou/alerts/").on("value", snapshot => {
                                  var arr = Object.keys(snapshot.val());
                                  for (var i = 0; i < arr.length; i++) {
                                    firebase.database().ref("ChatsUnderYou/alerts/" + arr[i] + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).remove()
                                  }
                                })
                                firebase.database().ref("chatroom/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).remove();

                              })
                            }
                          },], {
                          cancelable: false
                        }
                        )
                      } else {
                        Alert.alert(
                          'Exit',
                          'Are you sure you want to Exit the chat?', [{
                              text: 'Cancel',
                              onPress: () => console.log('Cancel Pressed'),
                              style: 'cancel'
                          }, {
                              text: 'OK',
                              onPress: () => {
                                var redirectToChats =new Promise((resolve,reject)=>{
                                  this.props.navigation.navigate('Chats');
                                  setTimeout(() => {
                                    resolve(true)
                                  }, 100);
                                  
                                })
                                
                                redirectToChats.then(()=>{
                                  
                                  firebase.database().ref("Participants/"+ this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp+"/"+this.props.phonenumberuser).remove()                                  //To be updated this delete from the participamntsas table array
                                  firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).remove()                                  
                                })
                            }
                          },], {
                          cancelable: false
                      }
                      )
                      }
                    }}
                      style={{ marginBottom: hp("3%") }}
                    >
                      {this.state.Owner == "true" ?
                        <Text style={{ fontSize: 18, color: "black", paddingLeft: hp("2%") }}>Close Emergency</Text>
                        :
                        <Text style={{ fontSize: 18, color: "black", paddingLeft: hp("2%") }}>Exit Group</Text>
                      }

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
         */}
        {/* </View>  */}

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
          renderUsernameOnMessage={true}
        // alwaysShowSend={true}
        />
      </View>
      </Provider>
    );
  }


  //   componentWillUnmount() {
  //     this.off();
  //   }
  // }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    upload_status: state.textUpload,
    nameuser: state.nameuser,
    phonenumberuser: state.phonenumberuser,
  }
}

export default connect(mapStateToProps)(ChatScreen)


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
    paddingTop: hp("2%")
  }
});