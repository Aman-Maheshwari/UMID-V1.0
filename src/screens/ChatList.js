// // // // import React, { Component } from 'react';
// // // // import {
// // // //     Text,
// // // //     StyleSheet,
// // // //     View,
// // // //     FlatList,
// // // //     TextInput,
// // // //     ActivityIndicator,
// // // //     Alert,
// // // //     Image,
// // // //     TouchableOpacity, ScrollView
// // // // } from 'react-native';
// // // // import { Badge } from 'react-native-elements';
// // // // import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
// // // // import * as firebase from 'firebase'
// // // // import { connect } from 'react-redux';
// // // // import CryptoJS from "react-native-crypto-js";
// // // // import Icon from "react-native-vector-icons/MaterialIcons"
// // // // import {_} from 'lodash';

// // // // // import AnonymousDrawer from '../Components/AnonymousDrawer'

// // // // import { resolve } from 'url';
// // // // // import { ScrollView } from 'react-native-gesture-handler';
// // // // class ChatList extends Component {
// // // //     b64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
// // // //     constructor(props) {
// // // //         super(props);
// // // //         this.state = {
// // // //             isLoading: false,
// // // //             text: '',
// // // //             searchActive: false,
// // // //             chats: null,
// // // //             callFetch: false,
// // // //             display: false,
// // // //             your: false,
// // // //             BlockedCounter: 0,
// // // //             Blocked: false,
// // // //             showFlatList:false
// // // //         };
// // // //         this.arrayholder = null;
// // // //         this.newData = []
// // // //         this.alertarr = null
// // // //         this.getcolor = false
// // // //         this.interval

// // // //         // this.newData
// // // //     }
// // // //     encode(key, data) {
// // // //         console.log(key,data)
// // // //         data = this.xor_encrypt(key, data);
// // // //         return this.b64_encode(data);
// // // //       }
// // // //       decode(key, data) {
// // // //         data = this.b64_decode(data);
// // // //         return this.xor_decrypt(key, data);
// // // //       }



// // // //   b64_encode(data) {
// // // //       var o1, o2, o3, h1, h2, h3, h4, bits, r, i = 0, enc = "";
// // // //       if (!data) { return data; }
// // // //       do {
// // // //         o1 = data[i++];
// // // //         o2 = data[i++];
// // // //         o3 = data[i++];
// // // //         bits = o1 << 16 | o2 << 8 | o3;
// // // //         h1 = bits >> 18 & 0x3f;
// // // //         h2 = bits >> 12 & 0x3f;
// // // //         h3 = bits >> 6 & 0x3f;
// // // //         h4 = bits & 0x3f;
// // // //         enc += this.b64_table.charAt(h1) + this.b64_table.charAt(h2) + this.b64_table.charAt(h3) + this.b64_table.charAt(h4);
// // // //       } while (i < data.length);
// // // //       r = data.length % 3;
// // // //       return (r ? enc.slice(0, r - 3) : enc) + "===".slice(r || 3);
// // // //     }
// // // //    b64_decode(data) {
// // // //       var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, result = [];
// // // //       if (!data) { return data; }
// // // //       data += "";
// // // //       do {
// // // //         h1 = this.b64_table.indexOf(data.charAt(i++));
// // // //         h2 = this.b64_table.indexOf(data.charAt(i++));
// // // //         h3 = this.b64_table.indexOf(data.charAt(i++));
// // // //         h4 = this.b64_table.indexOf(data.charAt(i++));
// // // //         bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
// // // //         o1 = bits >> 16 & 0xff;
// // // //         o2 = bits >> 8 & 0xff;
// // // //         o3 = bits & 0xff;
// // // //         result.push(o1);
// // // //         if (h3 !== 64) {
// // // //           result.push(o2);
// // // //           if (h4 !== 64) {
// // // //             result.push(o3);
// // // //           }
// // // //         }
// // // //       } while (i < data.length);
// // // //       return result;
// // // //     }

// // // //    xor_encrypt(key, data) {
// // // //      console.log(data,key);
// // // //       return _.map(data, function(c, i) {
// // // //         return c.charCodeAt(0) ^ key.charCodeAt( Math.floor(i % key.length) );
// // // //       });
// // // //     }
// // // //   xor_decrypt(key, data) {
// // // //       return _.map(data, function(c, i) {
// // // //         return String.fromCharCode( c ^ key.charCodeAt( Math.floor(i % key.length) ) );
// // // //       }).join("");
// // // //     }

// // // //     //child added listener for firebase
// // // //     on = callback =>
// // // //         firebase.database().ref("alertsUnderYou/" + this.props.phonenumberuser + "/").limitToLast(1).on('child_added', snapshot => {
// // // //             callback(
// // // //                 this.setState({ isLoading: true })
// // // //             )
// // // //             // console.log("Hey i am")
// // // //         }
// // // //         );



// // // //     // youralert = () => {
// // // //     //     var alertyour = new Promise (( resolve,reject) => {
// // // //     //         firebase.database().ref("chatroom/").on("value", snapshot => {
// // // //     //             // console.log("zhgxcjhgaskusdbqwkhdqwoidhq",Object.keys(snapshot.val()))
// // // //     //             var arr= []
// // // //     //             if(snapshot.val()){
// // // //     //             arr = Object.keys(snapshot.val())
// // // //     //             for(var i=0;i<arr.length;i++)
// // // //     //             {
// // // //     //                 if(arr[i] == this.props.phonenumberuser){
// // // //     //                     resolve(true)
// // // //     //                 }
// // // //     //             }
// // // //     //             reject(false)}
// // // //     //         })
// // // //     //     })
// // // //     //     alertyour.then(val => {
// // // //     //         console.log(val)
// // // //     //         this.setState({
// // // //     //             your: val
// // // //     //         })
// // // //     //     })
// // // //     // }



// // // //     fetchfromDB = () => {
// // // //         var fetchMessage = new Promise((resolve, reject) => {
// // // //             var fetchedAlert = []

// // // //             firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/").on("value", snapshot => {
// // // //                 //key = number,timestamp
// // // //                 snapshot.forEach((data) => {
// // // //                     fetchedAlert.push(data.val())
// // // //                 });
// // // //             })

// // // //             firebase.database().ref("ChatsUnderYou/vendors/" + this.props.phonenumberuser + "/").on("value", snapshot => {
// // // //                 snapshot.forEach((data) => {
// // // //                     fetchedAlert.push(data.val())
// // // //                 });

// // // //             })
// // // //             firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/").on("value", snapshot => {
// // // //                 snapshot.forEach((data) => {
// // // //                     fetchedAlert.push(data.val())
// // // //                 });
// // // //                 // if (fetchedAlert)
// // // //                 //     resolve(fetchedAlert)
// // // //                 // else
// // // //                 //     reject("no data")
// // // //             })
// // // //             if (fetchedAlert)
// // // //                 resolve(fetchedAlert)
// // // //             else
// // // //                 reject("no data")
// // // //         })
// // // //         fetchMessage.then((s) => {
// // // //             // console.log("fetchedalert= ", s)
// // // //             s.sort(function (a, b) {
// // // //                 return -(a.timestamp - b.timestamp)
// // // //             })
// // // //             this.setState({
// // // //                 isLoading: true,
// // // //                 // display:false,
// // // //                 chats: s
// // // //             })
// // // //             console.log(this.state.isLoading)
// // // //         }).catch((err) => {

// // // //         })
// // // //     }



// // // //     //function def. for fetching the blocked counter state of the current user
// // // //     fetchBlockCount = () => {
// // // //         firebase.database().ref("SignUpInComplete/" + this.props.phonenumberuser).on("value", snapshot => {
// // // //             console.log("snapshot.val()", snapshot.val())
// // // //             if (snapshot.val().BlockedCounter >= 3) {
// // // //                 this.setState({
// // // //                     BlockedCounter: snapshot.val().BlockedCounter,
// // // //                     Blocked: true
// // // //                 })
// // // //             }
// // // //             else {
// // // //                 this.setState({
// // // //                     BlockedCounter: snapshot.val().BlockedCounter,
// // // //                     Blocked: false
// // // //                 })
// // // //             }

// // // //         })
// // // //     }

// // // //     componentDidMount() {



// // // //             this.props.navigation.addListener('willFocus', async () =>{
// // // //                 this.interval = setInterval(() => {
// // // //                     console.log("refreshing");

// // // //                     this.setState({
// // // //                         time: Date.now(),
// // // //                         isLoading: false,
// // // //                     })
// // // //                     // this.props.navigation.state.params.phonenumber = null

// // // //                 }, 3000);
// // // //              });
// // // //             this.props.navigation.addListener('willBlur', () => {
// // // //                 clearInterval(this.interval)
// // // //             });



// // // //         //def. of promise first 
// // // //         var fetchMessage = new Promise((resolve, reject) => {
// // // //             var fetchedAno = []
// // // //             firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/").on("value", snapshot => {
// // // //                 snapshot.forEach((data) => {
// // // //                     fetchedAno.push(data.val())
// // // //                 });
// // // //                 if (fetchedAno)
// // // //                     resolve(fetchedAno)
// // // //                 else
// // // //                     reject("no data")
// // // //             })
// // // //         })//end of defination of promise first


// // // //         fetchMessage.then(fetchedAno => {
// // // //             // console.log("fetchedAno", fetchedAno)

// // // //             //def. of promise two
// // // //             var fetchMessage1 = new Promise((resolve, reject) => {
// // // //                 var fetchedven = []
// // // //                 var fetchedAnoven = []
// // // //                 firebase.database().ref("ChatsUnderYou/vendors/" + this.props.phonenumberuser + "/").on("value", snapshot => {
// // // //                     snapshot.forEach((data) => {
// // // //                         fetchedven.push(data.val())
// // // //                     });
// // // //                     fetchedAnoven.push(...fetchedAno, ...fetchedven)
// // // //                     if (fetchedAnoven)
// // // //                         resolve(fetchedAnoven)
// // // //                     else
// // // //                         reject("no data")
// // // //                 })
// // // //             })//end of def. of promise two

// // // //             fetchMessage1.then(fetchedAnoven => {
// // // //                 // console.log("fetchedAnoven", fetchedAnoven)

// // // //                 //def. of promise three
// // // //                 var fetchMessage2 = new Promise((resolve, reject) => {
// // // //                     var fetchedAlert = []
// // // //                     var fetchedAll = []
// // // //                     firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/").on("value", snapshot => {
// // // //                         snapshot.forEach((data) => {
// // // //                             fetchedAlert.push(data.val())
// // // //                         });
// // // //                         fetchedAll.push(...fetchedAnoven, ...fetchedAlert)
// // // //                         if (fetchedAll)
// // // //                             resolve(fetchedAll)
// // // //                         else
// // // //                             reject("no data")
// // // //                     })
// // // //                 })//end of def. of promise three

// // // //                 fetchMessage2.then(fetchedAll => {
// // // //                     // console.log("fetchedAll", fetchedAll)
// // // //                     fetchedAll.sort(function (a, b) {
// // // //                         return -(a.timestamp - b.timestamp)
// // // //                     })
// // // //                     console.log("fetchedAllSort", fetchedAll)
// // // //                     this.arrayholder = fetchedAll

// // // //                     //gets the block counter value for the particular user
// // // //                     this.fetchBlockCount();

// // // //                     this.setState({
// // // //                         display: true,
// // // //                         chats: fetchedAll
// // // //                     })
// // // //                 })
// // // //             })
// // // //         })
// // // //     }



// // // //     componentWillUnmount() {
// // // //         console.log("UNMOUNTING")
// // // //         clearInterval(this.interval);
// // // //     }

// // // //     componentMount = () => {
// // // //         // if(this.props.navigation.state.params.phonenumber!=null){
// // // //         // console.log(this.props.navigation.state.params.name)
// // // //         // console.log(this.props.navigation.state.params.phonenumber)
// // // //         // console.log(this.props.navigation.state.params.description)
// // // //         var phonenumber = null
// // // //         const { navigation } = this.props;
// // // //         phonenumber = navigation.getParam('phonenumber', null);
// // // //         // phonenumber = this.props.navigation.state.params.phonenumber
// // // //         // console.log(phonenumber, this.state.chats)
// // // //         // var appenddata = new Promise((resolve, reject) => {
// // // //         if (phonenumber != null) {
// // // //             var c = 0
// // // //             if (this.state.chats.length != 0) {
// // // //                 // console.log(this.state.chats[0].phonenumber)
// // // //                 this.state.chats.forEach(chat => {
// // // //                     if (chat.category == "shops") {
// // // //                         if (chat.phonenumber == this.props.navigation.state.params.phonenumber) {
// // // //                             // console.log("Im in")
// // // //                             c++;
// // // //                         }
// // // //                     }
// // // //                     else {
// // // //                         if (chat.alerttimestamp == this.props.navigation.state.params.timestamp) {
// // // //                             // console.log("Im in")
// // // //                             c++;
// // // //                         }
// // // //                     }

// // // //                 })
// // // //             }
// // // //             // console.log(c)
// // // //             if (c == 0 && this.props.navigation.state.params.phonenumber != null) {
// // // //                 // console.log("asjgdjhasgdh")
// // // //                 // console.log(this.props.navigation.state.params.category)
// // // //                 if (this.props.navigation.state.params.category == "Emotional Support") {
// // // //                     firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).set({
// // // //                         name: this.props.navigation.state.params.name,
// // // //                         description: this.props.navigation.state.params.description,
// // // //                         phonenumber: this.props.navigation.state.params.phonenumber,
// // // //                         category: this.props.navigation.state.params.category,
// // // //                         counter: 0,
// // // //                         timestamp: 0,
// // // //                         alerttimestamp: this.props.navigation.state.params.timestamp,
// // // //                         isBlocked: false,
// // // //                         isDone: false,
// // // //                         softDelete: false,
// // // //                     }).then(() => {
// // // //                         firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.navigation.state.params.phonenumber + "/" + this.props.phonenumberuser + "," + this.props.navigation.state.params.timestamp).set({
// // // //                             name: this.props.navigation.state.params.name,
// // // //                             description: this.props.navigation.state.params.description,
// // // //                             phonenumber: this.props.phonenumberuser,
// // // //                             category: this.props.navigation.state.params.category,
// // // //                             counter: 0,
// // // //                             timestamp: 0,
// // // //                             alerttimestamp: this.props.navigation.state.params.timestamp,
// // // //                             isBlocked: false,
// // // //                             isDone: false,
// // // //                             softDelete:false,
// // // //                         }).then(() => {
// // // //                             this.props.navigation.state.params.description = this.props.navigation.state.params.description + "(Group Desciption)";
// // // //                             let ciphertext = this.encode('U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=',this.props.navigation.state.params.description);
// // // //                             const text = ciphertext
// // // //                             const message = {
// // // //                                 text,
// // // //                                 user: {
// // // //                                     _id: this.props.navigation.state.params.phonenumber,
// // // //                                     name: this.props.navigation.state.params.name,
// // // //                                 },
// // // //                                 timestamp: this.props.navigation.state.params.timestamp,
// // // //                             };
// // // //                             if (this.props.phonenumberuser > this.props.navigation.state.params.phonenumber) {
// // // //                                 var x = this.props.phonenumberuser + ',' + this.props.navigation.state.params.phonenumber;
// // // //                             } else {
// // // //                                 var x = this.props.navigation.state.params.phonenumber + ',' + this.props.phonenumberuser;
// // // //                             }
// // // //                             firebase.database().ref('OneToOneAnonymous/' + x + "," + this.props.navigation.state.params.timestamp + '/').push(message);
// // // //                             this.setState({
// // // //                                 // callFetch:true
// // // //                                 isLoading: false
// // // //                             })
// // // //                         })
// // // //                     })
// // // //                 }
// // // //                 else if (this.props.navigation.state.params.category == "shops") {
// // // //                     firebase.database().ref("ChatsUnderYou/vendors/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber).set({
// // // //                         name: this.props.navigation.state.params.name,
// // // //                         description: this.props.navigation.state.params.description,
// // // //                         phonenumber: this.props.navigation.state.params.phonenumber,
// // // //                         category: this.props.navigation.state.params.category,
// // // //                         counter: 0,
// // // //                         timestamp: 0,
// // // //                     }).then(() => {
// // // //                         firebase.database().ref("ChatsUnderYou/vendors/" + this.props.navigation.state.params.phonenumber + "/" + this.props.phonenumberuser).set({
// // // //                             name: this.props.navigation.state.params.name,
// // // //                             description: this.props.navigation.state.params.description,
// // // //                             phonenumber: this.props.phonenumberuser,
// // // //                             category: this.props.navigation.state.params.category,
// // // //                             counter: 0,
// // // //                             timestamp: 0,
// // // //                         }).then(() => {
// // // //                             this.setState({
// // // //                                 // callFetch:true
// // // //                                 isLoading: false
// // // //                             })
// // // //                         })
// // // //                     })
// // // //                 }
// // // //                 else {
// // // //                     firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).set({
// // // //                         name: this.props.navigation.state.params.name,
// // // //                         description: this.props.navigation.state.params.description,
// // // //                         phonenumber: this.props.navigation.state.params.phonenumber,
// // // //                         category: this.props.navigation.state.params.category,
// // // //                         counter: 0,
// // // //                         timestamp: 0,
// // // //                         alerttimestamp: this.props.navigation.state.params.timestamp,
// // // //                         softDelete:false,
// // // //                     }).then(() => {
// // // //                         this.props.navigation.state.params.description = this.props.navigation.state.params.description + "(Group Desciption)";
// // // //                         let ciphertext = this.encode('U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=',this.props.navigation.state.params.description);
// // // //                         const text = ciphertext
// // // //                         const message = {
// // // //                             text,
// // // //                             user: {
// // // //                                 _id: this.props.navigation.state.params.phonenumber,
// // // //                                 name: this.props.navigation.state.params.name,
// // // //                             },
// // // //                             timestamp: this.props.navigation.state.params.timestamp,
// // // //                         };
// // // //                         firebase.database().ref('chatroom/' + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + '/').push(message);
// // // //                         this.setState({
// // // //                             // callFetch:true
// // // //                             isLoading: false
// // // //                         })
// // // //                     }).then(()=>{
// // // //                         firebase.database().ref("Participants/"+ this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + "/" + this.props.phonenumberuser+"/").set({
// // // //                             owner:"false",
// // // //                             category:this.props.navigation.state.params.category,
// // // //                             Ownername: this.props.nameuser,
// // // //                             name:this.props.navigation.state.params.name,
// // // //                             description: this.props.navigation.state.params.description,
// // // //                             phonenumber: this.props.navigation.state.params.phonenumber,
// // // //                             alerttimestamp: this.props.navigation.state.params.timestamp,
// // // //                             counter:0,
// // // //                             timestamp: 0,
// // // //                             phonenumberuser: this.props.phonenumberuser,
// // // //                         })
// // // //                     })
// // // //                 }
// // // //             }
// // // //         }
// // // //     }
// // // //     SearchFilterFunction(text) {
// // // //         //passing the inserted text in textinput
// // // //         console.log("text",text)
// // // //         this.newData = this.arrayholder.filter(function (item) {
// // // //             console.log("item",item)
// // // //             if(item.category != "Emotional Support"){
// // // //             //applying filter for the inserted text in search bar
// // // //             const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
// // // //             const textData = text.toUpperCase();
// // // //             return itemData.indexOf(textData) > -1;}
// // // //         });
// // // //         this.setState({
// // // //             //setting the filtered newData on datasource
// // // //             //After setting the data it will automatically re-render the view
// // // //             chats: this.newData,
// // // //             text: text,
// // // //         });
// // // //         console.log("this.newData",this.newData)
// // // //     }

// // // //     deletekeys = (item) => {
// // // //         // console.log("inside del function\n");
// // // //         // console.log("item", item)
// // // //         if (this.props.phonenumberuser > item.phonenumber) {
// // // //             var x = this.props.phonenumberuser + ',' + item.phonenumber;
// // // //             firebase.database().ref("OneToOneAnonymous/" + x + ',' + item.alerttimestamp).remove()
// // // //         } else {
// // // //             var x = item.phonenumber + ',' + this.props.phonenumberuser;
// // // //             firebase.database().ref("OneToOneAnonymous/" + x + ',' + item.alerttimestamp).remove()
// // // //         }
// // // //         firebase.database().ref("ChatsUnderYou/Anonymous/" + item.phonenumber + "/" + this.props.phonenumberuser + "," + item.alerttimestamp).remove()
// // // //         firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + item.phonenumber + "," + item.alerttimestamp).remove()
// // // //     }
// // // //     ListViewItemSeparator = () => {
// // // //         //Item sparator view
// // // //         return (
// // // //             <View
// // // //                 style={{
// // // //                     height: hp('1%'),
// // // //                     // width: '75%',
// // // //                     borderBottomWidth: 0.25,
// // // //                     // opacity:0.6,
// // // //                     borderBottomColor: "grey",
// // // //                     // marginLeft: wp('16%')
// // // //                     // backgroundColor: '#080808',
// // // //                     // position: "absolute"
// // // //                     // borderLeftWidth:10
// // // //                 }}
// // // //             />
// // // //         );
// // // //     };
// // // //     render() {
// // // //         // var x=false
// // // //         // try {
// // // //         //      x=this.props.navigation.state.params.urgentRefresh
// // // //         //      console.log("x = ",x);

// // // //         // } catch (error) {
// // // //         //      x=false
// // // //         // }
// // // //         // if(x==true){
// // // //         //     this.interval = setTimeout(() => {
// // // //         //         console.log("refreshing in render");

// // // //         //         this.setState({
// // // //         //             time: Date.now(),
// // // //         //             isLoading: false,
// // // //         //         })
// // // //         //         // this.props.navigation.state.params.phonenumber = null
// // // //         //         x=false

// // // //         //     }, 1);
// // // //         // }
// // // //         if (this.state.display == true) {
// // // //             { this.componentMount() }
// // // //             if (this.state.isLoading == false) {
// // // //                 {
// // // //                     this.fetchfromDB()
// // // //                     // this.youralert()
// // // //                 }
// // // //                 return null
// // // //             }
// // // //             else {
// // // //                 return (
// // // //                     <View style={{ flex: 1 }}>
// // // //                                                 {/* <AnonymousDrawer /> */}

// // // //                         <View style={styles.upperContainer}>
// // // //                             <View style={{ flex: 1, flexDirection: 'row', marginLeft: wp("4%") }}>
// // // //                                 <View style={{ flex: 0.6 }}>
// // // //                                     <Text style={{ marginLeft: wp('6%'), fontSize: 24, color: "white", fontWeight: "bold" }}>
// // // //                                         Message
// // // //                     </Text>
// // // //                                 </View>
// // // //                                 {/* <View style={{ justifyContent: 'center'}}>
// // // //                 <AnonymousDrawer />
// // // //             </View> */}
// // // //                             </View>
// // // //                         </View> 
// // // //                         <View style={styles.lowerContainer}>
// // // //                             {/* {this.state.text ? */}
// // // //                                 {/* this.renderForSearchActive() */}
// // // //                                          {/* <View style={{ justifyContent: 'center'}}>
// // // //                 <AnonymousDrawer />
// // // //             </View> */}



// // // //                                 <View style={{ flex: 1, backgroundColor: "#fff" }}>
// // // //                                     <View style={{ flex: 0.12 }}>
// // // //                                         <TextInput
// // // //                                             style={styles.textInputStyle}
// // // //                                             onChangeText={(text) => {
// // // //                                                 this.SearchFilterFunction(text)
// // // //                                                 this.setState({
// // // //                                                     showFlatList: true,
// // // //                                                 },()=>{
// // // //                                                     if (this.state.text == "") {
// // // //                                                         this.setState({
// // // //                                                             showFlatList:false,
// // // //                                                             chats:this.arrayholder
// // // //                                                         })
// // // //                                                     }
// // // //                                                 }) 
// // // //                                             }}
// // // //                                             placeholderTextColor="#0290ea"
// // // //                                             value={this.state.text}
// // // //                                             underlineColorAndroid="transparent"
// // // //                                             placeholder="Search message..."
// // // //                                         />
// // // //                                         {/* initially dataSource is kept empty and then as search element are found they are added in it.  */}

// // // //                                     </View>
// // // //                                     <View style={{ flex: 0.88 }}>
// // // //                                         <View style={{ width: wp('100%'), marginLeft: wp('2%') }}>
// // // //                                             {/* {this.state.your ? <View>
// // // //                                     <TouchableOpacity onPress={()=>{
// // // //                                                     // console.log(item.phonenumber,item.name,item.description)
// // // //                                                     this.props.navigation.navigate('ChatScreen',{phonenumber:this.props.phonenumberuser})}} style={{ borderBottomWidth: 0.25,
// // // //                                                         // opacity:0.6,
// // // //                                                         paddingBottom: hp("1%"),
// // // //                                                         borderBottomColor: "grey",}}>
// // // //                                                     <View style={styles.renderChatsName1}>
// // // //                                                         <Image source={require("../assets/chatIcon.png")} />
// // // //                                                         <Text style={styles.textStyle}>Myself</Text>
// // // //                                                     </View>
// // // //                                                 </TouchableOpacity>
// // // //                                         </View> : <View/>} */}
// // // //                                             <ScrollView>
// // // //                                                 <FlatList
// // // //                                                     data={this.state.chats}
// // // //                                                     // ItemSeparatorComponent={this.ListViewItemSeparator}
// // // //                                                     renderItem={({ item }) => (
// // // //                                                         <View>

// // // //                                                             {item.category == "Emotional Support" && this.state.showFlatList == false && item.softDelete==false ?
// // // //                                                                 <View>
// // // //                                                                     {this.state.Blocked == false  ?


// // // //                                                                         <View style={styles.renderChatsName1}>
// // // //                                                                             <TouchableOpacity onPress={() => {
// // // //                                                                                 // console.log(item.phonenumber, item.name, item.description)
// // // //                                                                                 if (this.props.phonenumberuser) {
// // // //                                                                                     this.props.navigation.navigate('AnonymousChat', { phonenumber: item.phonenumber, c: 0, timestamp: item.alerttimestamp })
// // // //                                                                                 }
// // // //                                                                                 else {
// // // //                                                                                     alert("Please fill details first!")
// // // //                                                                                 }
// // // //                                                                             }
// // // //                                                                             }
// // // //                                                                                 style={{ flexDirection: 'row', width: wp("80%") }}
// // // //                                                                             // onLongPress = {() => {
// // // //                                                                             //     Alert.alert(
// // // //                                                                             //         'Delete',
// // // //                                                                             //         'Are you sure you want to delete this chat?', [{
// // // //                                                                             //           text: 'Cancel',
// // // //                                                                             //           onPress: () => {console.log('Cancel Pressed')},
// // // //                                                                             //           style: 'cancel'
// // // //                                                                             //         }, {
// // // //                                                                             //           text: 'OK',
// // // //                                                                             //           onPress: () => {
// // // //                                                                             //             this.deletekeys(item)
// // // //                                                                             //           }
// // // //                                                                             //         },], {
// // // //                                                                             //         cancelable: false
// // // //                                                                             //       }
// // // //                                                                             //       )
// // // //                                                                             // }}
// // // //                                                                             >
// // // //                                                                                 <Image source={require("../assets/chatIcon.png")} />
// // // //                                                                                 <Text style={styles.textStyle}>Anonymous</Text>
// // // //                                                                             </TouchableOpacity>
// // // //                                                                             {/* <TouchableOpacity onPress={() => {
// // // //                                                                                 Alert.alert(
// // // //                                                                                     'Delete',
// // // //                                                                                     'Are you sure you want to delete this chat?', [{
// // // //                                                                                         text: 'Cancel',
// // // //                                                                                         onPress: () => { console.log('Cancel Pressed') },
// // // //                                                                                         style: 'cancel'
// // // //                                                                                     }, {
// // // //                                                                                         text: 'OK',
// // // //                                                                                         onPress: () => {
// // // //                                                                                             this.deletekeys(item)
// // // //                                                                                         }
// // // //                                                                                     },], {
// // // //                                                                                     cancelable: false
// // // //                                                                                 }
// // // //                                                                                 )
// // // //                                                                             }}>
// // // //                                                                                 <Icon name="delete" size={30} color="#0091EA" style={{ marginRight: wp('2%') }} />
// // // //                                                                             </TouchableOpacity> */}
// // // //                                                                             {/* <Text>{item.counter}</Text> */}
// // // //                                                                             {item.counter > 0 ?
// // // //                                                                                     <Badge
// // // //                                                                                         value={"+" + item.counter}
// // // //                                                                                         containerStyle={{ position: 'absolute', right: 20 }}
// // // //                                                                                     />

// // // //                                                                                     :

// // // //                                                                                     <View />
// // // //                                                                                 }
// // // //                                                                         </View>
// // // //                                                                         :
// // // //                                                                         <TouchableOpacity onPress={() => {
// // // //                                                                             // console.log(item.phonenumber, item.name, item.description)
// // // //                                                                             alert("You have been blocked.")
// // // //                                                                         }

// // // //                                                                         }>

// // // //                                                                             <View style={styles.renderChatsName1}>
// // // //                                                                                 <Image source={require("../assets/chatIcon.png")} />
// // // //                                                                                 <Text style={styles.textStyle}>Anonymous</Text>

// // // //                                                                             </View>

// // // //                                                                         </TouchableOpacity>

// // // //                                                                     }
// // // //                                                                 </View>
// // // //                                                                 :
// // // //                                                                 <View>
// // // //                                                                 </View>
// // // //                                                             }
// // // //                                                             {item.category == "shops" ? <TouchableOpacity onPress={() => {
// // // //                                                                 // console.log(item.phonenumber, item.name, item.description)
// // // //                                                                 if (this.props.phonenumberuser) {
// // // //                                                                     this.props.navigation.navigate('vendorChat', { phonenumber: item.phonenumber })
// // // //                                                                 }
// // // //                                                                 else {
// // // //                                                                     alert("Please fill details first!")
// // // //                                                                 }
// // // //                                                             }}>

// // // //                                                                 <View style={styles.renderChatsName}>
// // // //                                                                     <Image source={require("../assets/chatIcon.png")} />
// // // //                                                                     <Text style={styles.textStyle}>{item.name}</Text>
// // // //                                                                     {/* {item.counter > 0 ? <Badge
// // // //                                                                         value={"+" + item.counter}
// // // //                                                                         containerStyle={{ position: 'absolute', right: 20 }}
// // // //                                                                     /> : <View />} */}
// // // //                                                                 </View>
// // // //                                                                 {/* <View style={styles.renderChatsName}>
// // // //                                                         <Image source={require("../assets/chatIcon.png")} />
// // // //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// // // //                                                     </View> */}
// // // //                                                             </TouchableOpacity> : <View></View>}
// // // //                                                             {item.category == "food" && item.softDelete==false ? 

// // // //                                                                 <View style={styles.renderChatsName1}>
// // // //                                                                     <TouchableOpacity onPress={() => {
// // // //                                                                 // console.log(item.phonenumber, item.name, item.description)
// // // //                                                                 if (this.props.phonenumberuser) {
// // // //                                                                     this.props.navigation.navigate('ChatScreen', { phonenumber: item.phonenumber, name: item.name, timestamp: item.alerttimestamp })
// // // //                                                                 }
// // // //                                                                 else {
// // // //                                                                     alert("Please fill details first!")
// // // //                                                                 }
// // // //                                                             }}
// // // //                                                             style={{ flexDirection: 'row', width: wp("80%") }}
// // // //                                                             >
// // // //                                                                     <Image source={require("../assets/chatIcon.png")} />
// // // //                                                                     <Text style={styles.textStyle}>{item.name}</Text>
// // // //                                                                     </TouchableOpacity>
// // // //                                                                     {item.counter > 0 ?
// // // //                                                                                     <Badge
// // // //                                                                                         value={"+" + item.counter}
// // // //                                                                                         containerStyle={{ position: 'absolute', right: 20 }}
// // // //                                                                                     />

// // // //                                                                                     :

// // // //                                                                                     <View />
// // // //                                                                                 }
// // // //                                                                 </View>
// // // //                                                             : <View></View>}
// // // //                                                             {item.category == "other" && item.softDelete==false ? 

// // // //                                                                 <View style={styles.renderChatsName1}>
// // // //                                                                     <TouchableOpacity onPress={() => {
// // // //                                                                 // console.log(item.phonenumber, item.name, item.description)
// // // //                                                                 if (this.props.phonenumberuser) {
// // // //                                                                     this.props.navigation.navigate('ChatScreen', { phonenumber: item.phonenumber, name: item.name, timestamp: item.alerttimestamp })
// // // //                                                                 }
// // // //                                                                 else {
// // // //                                                                     alert("Please fill details first!")
// // // //                                                                 }
// // // //                                                             }}
// // // //                                                             style={{ flexDirection: 'row', width: wp("80%") }}
// // // //                                                             >
// // // //                                                                     <Image source={require("../assets/chatIcon.png")} />
// // // //                                                                     <Text style={styles.textStyle}>{item.name}</Text>
// // // //                                                                     </TouchableOpacity>
// // // //                                                                     {item.counter > 0 ?
// // // //                                                                                     <Badge
// // // //                                                                                         value={"+" + item.counter}
// // // //                                                                                         containerStyle={{ position: 'absolute', right: 20 }}
// // // //                                                                                     />

// // // //                                                                                     :

// // // //                                                                                     <View />
// // // //                                                                                 }
// // // //                                                                 </View>
// // // //                                                                  : <View></View>}

// // // //                                                         </View>
// // // //                                                     )}
// // // //                                                     enableEmptySections={true}
// // // //                                                     style={{ marginTop: 10 }}
// // // //                                                     keyExtractor={(item, index) => index}
// // // //                                                 />
// // // //                                             </ScrollView>
// // // //                                         </View>
// // // //                                     </View>
// // // //                                 </View>



// // // //                         </View>

// // // //                     </View>
// // // //                 );
// // // //             }
// // // //         } else {
// // // //             return null;
// // // //         }
// // // //     }
// // // // }
// // // // const mapStateToProps = (state) => {
// // // //     // console.log(state)
// // // //     return {
// // // //         upload_status: state.textUpload,
// // // //         nameuser: state.nameuser,
// // // //         phonenumberuser: state.phonenumberuser,
// // // //     }
// // // // }

// // // // export default connect(mapStateToProps)(ChatList)
// // // // const styles = StyleSheet.create({
// // // //     upperContainer: {
// // // //         flex: 0.1,
// // // //         backgroundColor: "#0290ea",
// // // //         alignItems: "center",
// // // //         flexDirection: 'row',
// // // //     },
// // // //     lowerContainer: {
// // // //         flex: 0.9,
// // // //         backgroundColor: "blue"
// // // //     },

// // // //     textStyle: {
// // // //         // margin: wp('2%'),
// // // //         fontSize: 16,
// // // //         paddingLeft: wp('5%'),

// // // //         // backgroundColor:"green"
// // // //     },
// // // //     textInputStyle: {
// // // //         height: hp("6%"),
// // // //         borderWidth: 1,
// // // //         paddingLeft: 10,
// // // //         borderColor: "#FFF",
// // // //         backgroundColor: '#FFFFFF',
// // // //         margin: wp('4%'),
// // // //         borderRadius: 10,
// // // //         elevation: 4
// // // //     },
// // // //     renderChatsName: {
// // // //         flexDirection: "row",
// // // //         borderLeftWidth: wp('1%'),
// // // //         borderLeftColor: 'yellow',
// // // //         padding: wp('2%'),
// // // //         marginTop: hp('1%'),
// // // //         alignItems: "center"
// // // //     },
// // // //     renderChatsName1: {
// // // //         flexDirection: "row",
// // // //         borderLeftWidth: wp('1%'),
// // // //         borderLeftColor: 'red',
// // // //         padding: wp('2%'),
// // // //         marginTop: hp('1%'),
// // // //         alignItems: "center",
// // // //         borderBottomWidth: 0.25,
// // // //                     borderBottomColor: "grey",
// // // //                     height:hp("7%")
// // // //     },
// // // // });


// // // import React, { Component } from 'react';
// // // import {
// // //     Text,
// // //     StyleSheet,
// // //     View,
// // //     FlatList,
// // //     TextInput,
// // //     ActivityIndicator,
// // //     Alert,
// // //     Image,
// // //     TouchableOpacity, ScrollView
// // // } from 'react-native';
// // // import { Badge } from 'react-native-elements';
// // // import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
// // // import * as firebase from 'firebase'
// // // import { connect } from 'react-redux';
// // // import CryptoJS from "react-native-crypto-js";
// // // import Icon from "react-native-vector-icons/MaterialIcons"
// // // import { _ } from 'lodash';

// // // // import AnonymousDrawer from '../Components/AnonymousDrawer'

// // // import { resolve } from 'url';
// // // // import { ScrollView } from 'react-native-gesture-handler';
// // // class ChatList extends Component {
// // //     b64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
// // //     constructor(props) {
// // //         super(props);
// // //         this.state = {
// // //             isLoading: false,
// // //             text: '',
// // //             searchActive: false,
// // //             chats: null,
// // //             callFetch: false,
// // //             display: false,
// // //             your: false,
// // //             BlockedCounter: 0,
// // //             Blocked: false,
// // //             showFlatList: false
// // //         };
// // //         this.arrayholder = null;
// // //         this.newData = []
// // //         this.alertarr = null
// // //         this.getcolor = false
// // //         this.interval

// // //         // this.newData
// // //     }
// // //     encode(key, data) {
// // //         console.log(key, data)
// // //         data = this.xor_encrypt(key, data);
// // //         return this.b64_encode(data);
// // //     }
// // //     decode(key, data) {
// // //         data = this.b64_decode(data);
// // //         return this.xor_decrypt(key, data);
// // //     }



// // //     b64_encode(data) {
// // //         var o1, o2, o3, h1, h2, h3, h4, bits, r, i = 0, enc = "";
// // //         if (!data) { return data; }
// // //         do {
// // //             o1 = data[i++];
// // //             o2 = data[i++];
// // //             o3 = data[i++];
// // //             bits = o1 << 16 | o2 << 8 | o3;
// // //             h1 = bits >> 18 & 0x3f;
// // //             h2 = bits >> 12 & 0x3f;
// // //             h3 = bits >> 6 & 0x3f;
// // //             h4 = bits & 0x3f;
// // //             enc += this.b64_table.charAt(h1) + this.b64_table.charAt(h2) + this.b64_table.charAt(h3) + this.b64_table.charAt(h4);
// // //         } while (i < data.length);
// // //         r = data.length % 3;
// // //         return (r ? enc.slice(0, r - 3) : enc) + "===".slice(r || 3);
// // //     }
// // //     b64_decode(data) {
// // //         var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, result = [];
// // //         if (!data) { return data; }
// // //         data += "";
// // //         do {
// // //             h1 = this.b64_table.indexOf(data.charAt(i++));
// // //             h2 = this.b64_table.indexOf(data.charAt(i++));
// // //             h3 = this.b64_table.indexOf(data.charAt(i++));
// // //             h4 = this.b64_table.indexOf(data.charAt(i++));
// // //             bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
// // //             o1 = bits >> 16 & 0xff;
// // //             o2 = bits >> 8 & 0xff;
// // //             o3 = bits & 0xff;
// // //             result.push(o1);
// // //             if (h3 !== 64) {
// // //                 result.push(o2);
// // //                 if (h4 !== 64) {
// // //                     result.push(o3);
// // //                 }
// // //             }
// // //         } while (i < data.length);
// // //         return result;
// // //     }

// // //     xor_encrypt(key, data) {
// // //         console.log(data, key);
// // //         return _.map(data, function (c, i) {
// // //             return c.charCodeAt(0) ^ key.charCodeAt(Math.floor(i % key.length));
// // //         });
// // //     }
// // //     xor_decrypt(key, data) {
// // //         return _.map(data, function (c, i) {
// // //             return String.fromCharCode(c ^ key.charCodeAt(Math.floor(i % key.length)));
// // //         }).join("");
// // //     }

// // //     //child added listener for firebase
// // //     on = callback =>
// // //         firebase.database().ref("alertsUnderYou/" + this.props.phonenumberuser + "/").limitToLast(1).on('child_added', snapshot => {
// // //             callback(
// // //                 this.setState({ isLoading: true })
// // //             )
// // //             // console.log("Hey i am")
// // //         }
// // //         );



// // //     // youralert = () => {
// // //     //     var alertyour = new Promise (( resolve,reject) => {
// // //     //         firebase.database().ref("chatroom/").on("value", snapshot => {
// // //     //             // console.log("zhgxcjhgaskusdbqwkhdqwoidhq",Object.keys(snapshot.val()))
// // //     //             var arr= []
// // //     //             if(snapshot.val()){
// // //     //             arr = Object.keys(snapshot.val())
// // //     //             for(var i=0;i<arr.length;i++)
// // //     //             {
// // //     //                 if(arr[i] == this.props.phonenumberuser){
// // //     //                     resolve(true)
// // //     //                 }
// // //     //             }
// // //     //             reject(false)}
// // //     //         })
// // //     //     })
// // //     //     alertyour.then(val => {
// // //     //         console.log(val)
// // //     //         this.setState({
// // //     //             your: val
// // //     //         })
// // //     //     })
// // //     // }



// // //     fetchfromDB = () => {
// // //         var fetchMessage = new Promise((resolve, reject) => {
// // //             var fetchedAlert = []

// // //             firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/").on("value", snapshot => {
// // //                 //key = number,timestamp
// // //                 snapshot.forEach((data) => {
// // //                     fetchedAlert.push(data.val())
// // //                 });
// // //             })

// // //             firebase.database().ref("ChatsUnderYou/vendors/" + this.props.phonenumberuser + "/").on("value", snapshot => {
// // //                 snapshot.forEach((data) => {
// // //                     fetchedAlert.push(data.val())
// // //                 });

// // //             })
// // //             firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/").on("value", snapshot => {
// // //                 snapshot.forEach((data) => {
// // //                     fetchedAlert.push(data.val())
// // //                 });
// // //                 // if (fetchedAlert)
// // //                 //     resolve(fetchedAlert)
// // //                 // else
// // //                 //     reject("no data")
// // //             })
// // //             if (fetchedAlert)
// // //                 resolve(fetchedAlert)
// // //             else
// // //                 reject("no data")
// // //         })
// // //         fetchMessage.then((s) => {
// // //             // console.log("fetchedalert= ", s)
// // //             s.sort(function (a, b) {
// // //                 return -(a.timestamp - b.timestamp)
// // //             })
// // //             this.setState({
// // //                 isLoading: true,
// // //                 // display:false,
// // //                 chats: s
// // //             })
// // //             console.log(this.state.isLoading)
// // //         }).catch((err) => {

// // //         })
// // //     }



// // //     //function def. for fetching the blocked counter state of the current user
// // //     fetchBlockCount = () => {
// // //         firebase.database().ref("SignUpInComplete/" + this.props.phonenumberuser).on("value", snapshot => {
// // //             console.log("snapshot.val()", snapshot.val())
// // //             if (snapshot.val().BlockedCounter >= 3) {
// // //                 this.setState({
// // //                     BlockedCounter: snapshot.val().BlockedCounter,
// // //                     Blocked: true
// // //                 })
// // //             }
// // //             else {
// // //                 this.setState({
// // //                     BlockedCounter: snapshot.val().BlockedCounter,
// // //                     Blocked: false
// // //                 })
// // //             }

// // //         })
// // //     }

// // //     componentDidMount() {



// // //         // this.props.navigation.addListener('willFocus', async () => {
// // //         //     this.interval = setInterval(() => {
// // //         //         console.log("refreshing");

// // //         //         this.setState({
// // //         //             time: Date.now(),
// // //         //             isLoading: false,
// // //         //         })
// // //         //         // this.props.navigation.state.params.phonenumber = null

// // //         //     }, 3000);
// // //         // });
// // //         // this.props.navigation.addListener('willBlur', () => {
// // //         //     clearInterval(this.interval)
// // //         // });



// // //         //def. of promise first 
// // //         var fetchMessage = new Promise((resolve, reject) => {
// // //             var fetchedAno = []
// // //             firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/").on("value", snapshot => {
// // //                 snapshot.forEach((data) => {
// // //                     fetchedAno.push(data.val())
// // //                 });
// // //                 if (fetchedAno)
// // //                     resolve(fetchedAno)
// // //                 else
// // //                     reject("no data")
// // //             })
// // //         })//end of defination of promise first


// // //         fetchMessage.then(fetchedAno => {
// // //             // console.log("fetchedAno", fetchedAno)

// // //             //def. of promise two
// // //             var fetchMessage1 = new Promise((resolve, reject) => {
// // //                 var fetchedven = []
// // //                 var fetchedAnoven = []
// // //                 firebase.database().ref("ChatsUnderYou/vendors/" + this.props.phonenumberuser + "/").on("value", snapshot => {
// // //                     snapshot.forEach((data) => {
// // //                         fetchedven.push(data.val())
// // //                     });
// // //                     fetchedAnoven.push(...fetchedAno, ...fetchedven)
// // //                     if (fetchedAnoven)
// // //                         resolve(fetchedAnoven)
// // //                     else
// // //                         reject("no data")
// // //                 })
// // //             })//end of def. of promise two

// // //             fetchMessage1.then(fetchedAnoven => {
// // //                 // console.log("fetchedAnoven", fetchedAnoven)

// // //                 //def. of promise three
// // //                 var fetchMessage2 = new Promise((resolve, reject) => {
// // //                     var fetchedAlert = []
// // //                     var fetchedAll = []
// // //                     firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/").on("value", snapshot => {
// // //                         snapshot.forEach((data) => {
// // //                             fetchedAlert.push(data.val())
// // //                         });
// // //                         fetchedAll.push(...fetchedAnoven, ...fetchedAlert)
// // //                         if (fetchedAll)
// // //                             resolve(fetchedAll)
// // //                         else
// // //                             reject("no data")
// // //                     })
// // //                 })//end of def. of promise three

// // //                 fetchMessage2.then(fetchedAll => {
// // //                     // console.log("fetchedAll", fetchedAll)
// // //                     fetchedAll.sort(function (a, b) {
// // //                         return -(a.timestamp - b.timestamp)
// // //                     })
// // //                     console.log("fetchedAllSort", fetchedAll)
// // //                     this.arrayholder = fetchedAll

// // //                     //gets the block counter value for the particular user
// // //                     this.fetchBlockCount();

// // //                     this.setState({
// // //                         display: true,
// // //                         chats: fetchedAll
// // //                     })
// // //                 })
// // //             })
// // //         })
// // //     }



// // //     componentWillUnmount() {
// // //         console.log("UNMOUNTING")
// // //         clearInterval(this.interval);
// // //     }

// // //     componentMount = () => {
// // //         // if(this.props.navigation.state.params.phonenumber!=null){
// // //         // console.log(this.props.navigation.state.params.name)
// // //         // console.log(this.props.navigation.state.params.phonenumber)
// // //         // console.log(this.props.navigation.state.params.description)
// // //         var phonenumber = null
// // //         const { navigation } = this.props;
// // //         phonenumber = navigation.getParam('phonenumber', null);
// // //         // phonenumber = this.props.navigation.state.params.phonenumber
// // //         // console.log(phonenumber, this.state.chats)
// // //         // var appenddata = new Promise((resolve, reject) => {
// // //         if (phonenumber != null) {
// // //             var c = 0
// // //             if (this.state.chats.length != 0) {
// // //                 // console.log(this.state.chats[0].phonenumber)
// // //                 this.state.chats.forEach(chat => {
// // //                     if (chat.category == "shops") {
// // //                         if (chat.phonenumber == this.props.navigation.state.params.phonenumber) {
// // //                             // console.log("Im in")
// // //                             c++;
// // //                         }
// // //                     }
// // //                     else {
// // //                         if (chat.alerttimestamp == this.props.navigation.state.params.timestamp) {
// // //                             // console.log("Im in")
// // //                             c++;
// // //                         }
// // //                     }

// // //                 })
// // //             }
// // //             // console.log(c)
// // //             if (c == 0 && this.props.navigation.state.params.phonenumber != null) {
// // //                 // console.log("asjgdjhasgdh")
// // //                 // console.log(this.props.navigation.state.params.category)
// // //                 if (this.props.navigation.state.params.category == "Emotional Support") {
// // //                     firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).set({
// // //                         name: this.props.navigation.state.params.name,
// // //                         description: this.props.navigation.state.params.description,
// // //                         phonenumber: this.props.navigation.state.params.phonenumber,
// // //                         category: this.props.navigation.state.params.category,
// // //                         counter: 0,
// // //                         timestamp: 0,
// // //                         alerttimestamp: this.props.navigation.state.params.timestamp,
// // //                         isBlocked: false,
// // //                         isDone: false,
// // //                         softDelete: false,
// // //                     }).then(() => {
// // //                         firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.navigation.state.params.phonenumber + "/" + this.props.phonenumberuser + "," + this.props.navigation.state.params.timestamp).set({
// // //                             name: this.props.navigation.state.params.name,
// // //                             description: this.props.navigation.state.params.description,
// // //                             phonenumber: this.props.phonenumberuser,
// // //                             category: this.props.navigation.state.params.category,
// // //                             counter: 0,
// // //                             timestamp: 0,
// // //                             alerttimestamp: this.props.navigation.state.params.timestamp,
// // //                             isBlocked: false,
// // //                             isDone: false,
// // //                             softDelete: false,
// // //                         }).then(() => {
// // //                             this.props.navigation.state.params.description = this.props.navigation.state.params.description + "(Group Desciption)";
// // //                             let ciphertext = this.encode('U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=', this.props.navigation.state.params.description);
// // //                             const text = ciphertext
// // //                             const message = {
// // //                                 text,
// // //                                 user: {
// // //                                     _id: this.props.navigation.state.params.phonenumber,
// // //                                     name: this.props.navigation.state.params.name,
// // //                                 },
// // //                                 timestamp: this.props.navigation.state.params.timestamp,
// // //                             };
// // //                             if (this.props.phonenumberuser > this.props.navigation.state.params.phonenumber) {
// // //                                 var x = this.props.phonenumberuser + ',' + this.props.navigation.state.params.phonenumber;
// // //                             } else {
// // //                                 var x = this.props.navigation.state.params.phonenumber + ',' + this.props.phonenumberuser;
// // //                             }
// // //                             firebase.database().ref('OneToOneAnonymous/' + x + "," + this.props.navigation.state.params.timestamp + '/').push(message);
// // //                             this.setState({
// // //                                 // callFetch:true
// // //                                 isLoading: false
// // //                             })
// // //                         })
// // //                     })
// // //                 }
// // //                 else if (this.props.navigation.state.params.category == "shops") {
// // //                     firebase.database().ref("ChatsUnderYou/vendors/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber).set({
// // //                         name: this.props.navigation.state.params.name,
// // //                         description: this.props.navigation.state.params.description,
// // //                         phonenumber: this.props.navigation.state.params.phonenumber,
// // //                         category: this.props.navigation.state.params.category,
// // //                         counter: 0,
// // //                         timestamp: 0,
// // //                     }).then(() => {
// // //                         firebase.database().ref("ChatsUnderYou/vendors/" + this.props.navigation.state.params.phonenumber + "/" + this.props.phonenumberuser).set({
// // //                             name: this.props.navigation.state.params.name,
// // //                             description: this.props.navigation.state.params.description,
// // //                             phonenumber: this.props.phonenumberuser,
// // //                             category: this.props.navigation.state.params.category,
// // //                             counter: 0,
// // //                             timestamp: 0,
// // //                         }).then(() => {
// // //                             this.setState({
// // //                                 // callFetch:true
// // //                                 isLoading: false
// // //                             })
// // //                         })
// // //                     })
// // //                 }
// // //                 else {
// // //                     firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).set({
// // //                         name: this.props.navigation.state.params.name,
// // //                         description: this.props.navigation.state.params.description,
// // //                         phonenumber: this.props.navigation.state.params.phonenumber,
// // //                         category: this.props.navigation.state.params.category,
// // //                         counter: 0,
// // //                         timestamp: 0,
// // //                         alerttimestamp: this.props.navigation.state.params.timestamp,
// // //                         softDelete: false,
// // //                     }).then(() => {
// // //                         this.props.navigation.state.params.description = this.props.navigation.state.params.description + "(Group Desciption)";
// // //                         let ciphertext = this.encode('U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=', this.props.navigation.state.params.description);
// // //                         const text = ciphertext
// // //                         const message = {
// // //                             text,
// // //                             user: {
// // //                                 _id: this.props.navigation.state.params.phonenumber,
// // //                                 name: this.props.navigation.state.params.name,
// // //                             },
// // //                             timestamp: this.props.navigation.state.params.timestamp,
// // //                         };
// // //                         firebase.database().ref('chatroom/' + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + '/').push(message);
// // //                         this.setState({
// // //                             // callFetch:true
// // //                             isLoading: false
// // //                         })
// // //                     }).then(() => {
// // //                         firebase.database().ref("Participants/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + "/" + this.props.phonenumberuser + "/").set({
// // //                             owner: "false",
// // //                             category: this.props.navigation.state.params.category,
// // //                             Ownername: this.props.nameuser,
// // //                             name: this.props.navigation.state.params.name,
// // //                             description: this.props.navigation.state.params.description,
// // //                             phonenumber: this.props.navigation.state.params.phonenumber,
// // //                             alerttimestamp: this.props.navigation.state.params.timestamp,
// // //                             counter: 0,
// // //                             timestamp: 0,
// // //                             phonenumberuser: this.props.phonenumberuser,
// // //                         })
// // //                     })
// // //                 }
// // //             }
// // //         }
// // //     }
// // //     SearchFilterFunction(text) {
// // //         //passing the inserted text in textinput
// // //         console.log("text", text)
// // //         this.newData = this.arrayholder.filter(function (item) {
// // //             console.log("item", item)
// // //             if (item.category != "Emotional Support") {
// // //                 //applying filter for the inserted text in search bar
// // //                 const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
// // //                 const textData = text.toUpperCase();
// // //                 return itemData.indexOf(textData) > -1;
// // //             }
// // //         });
// // //         this.setState({
// // //             //setting the filtered newData on datasource
// // //             //After setting the data it will automatically re-render the view
// // //             chats: this.newData,
// // //             text: text,
// // //         });
// // //         console.log("this.newData", this.newData)
// // //     }

// // //     deletekeys = (item) => {
// // //         // console.log("inside del function\n");
// // //         // console.log("item", item)
// // //         if (this.props.phonenumberuser > item.phonenumber) {
// // //             var x = this.props.phonenumberuser + ',' + item.phonenumber;
// // //             firebase.database().ref("OneToOneAnonymous/" + x + ',' + item.alerttimestamp).remove()
// // //         } else {
// // //             var x = item.phonenumber + ',' + this.props.phonenumberuser;
// // //             firebase.database().ref("OneToOneAnonymous/" + x + ',' + item.alerttimestamp).remove()
// // //         }
// // //         firebase.database().ref("ChatsUnderYou/Anonymous/" + item.phonenumber + "/" + this.props.phonenumberuser + "," + item.alerttimestamp).remove()
// // //         firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + item.phonenumber + "," + item.alerttimestamp).remove()
// // //     }
// // //     ListViewItemSeparator = () => {
// // //         //Item sparator view
// // //         return (
// // //             <View
// // //                 style={{
// // //                     height: hp('1%'),
// // //                     // width: '75%',
// // //                     borderBottomWidth: 0.25,
// // //                     // opacity:0.6,
// // //                     borderBottomColor: "grey",
// // //                     // marginLeft: wp('16%')
// // //                     // backgroundColor: '#080808',
// // //                     // position: "absolute"
// // //                     // borderLeftWidth:10
// // //                 }}
// // //             />
// // //         );
// // //     };
// // //     render() {
// // //         // var x=false
// // //         // try {
// // //         //      x=this.props.navigation.state.params.urgentRefresh
// // //         //      console.log("x = ",x);

// // //         // } catch (error) {
// // //         //      x=false
// // //         // }
// // //         // if(x==true){
// // //         //     this.interval = setTimeout(() => {
// // //         //         console.log("refreshing in render");

// // //         //         this.setState({
// // //         //             time: Date.now(),
// // //         //             isLoading: false,
// // //         //         })
// // //         //         // this.props.navigation.state.params.phonenumber = null
// // //         //         x=false

// // //         //     }, 1);
// // //         // }
// // //         if (this.state.display == true) {
// // //             { this.componentMount() }
// // //             if (this.state.isLoading == false) {
// // //                 {
// // //                     this.fetchfromDB()
// // //                     // this.youralert()
// // //                 }
// // //                 return null
// // //             }
// // //             else {
// // //                 return (
// // //                     <View style={{ flex: 1 }}>
// // //                         {/* <AnonymousDrawer /> */}

// // //                         <View style={styles.upperContainer}>
// // //                             <View style={{ flex: 1, flexDirection: 'row', marginLeft: wp("4%") }}>
// // //                                 <View style={{ flex: 0.6 }}>
// // //                                     <Text style={{ marginLeft: wp('6%'), fontSize: 24, color: "white", fontWeight: "bold" }}>
// // //                                         Message
// // //                                     </Text>
// // //                                 </View>
// // //                                 {/* <View style={{ justifyContent: 'center'}}>
// // //                 <AnonymousDrawer />
// // //             </View> */}
// // //                             </View>
// // //                         </View>
// // //                         <View style={styles.lowerContainer}>
// // //                             {/* {this.state.text ? */}
// // //                             {/* this.renderForSearchActive() */}
// // //                             {/* <View style={{ justifyContent: 'center'}}>
// // //                 <AnonymousDrawer />
// // //             </View> */}



// // //                             <View style={{ flex: 1, backgroundColor: "#fff" }}>
// // //                                 <View style={{ flex: 0.12 }}>
// // //                                     <TextInput
// // //                                         style={styles.textInputStyle}
// // //                                         onChangeText={(text) => {
// // //                                             this.SearchFilterFunction(text)
// // //                                             this.setState({
// // //                                                 showFlatList: true,
// // //                                             }, () => {
// // //                                                 if (this.state.text == "") {
// // //                                                     this.setState({
// // //                                                         showFlatList: false,
// // //                                                         chats: this.arrayholder
// // //                                                     })
// // //                                                 }
// // //                                             })
// // //                                         }}
// // //                                         placeholderTextColor="#0290ea"
// // //                                         value={this.state.text}
// // //                                         underlineColorAndroid="transparent"
// // //                                         placeholder="Search message..."
// // //                                     />
// // //                                     {/* initially dataSource is kept empty and then as search element are found they are added in it.  */}

// // //                                 </View>
// // //                                 <View style={{ flex: 0.88 }}>
// // //                                     <View style={{ width: wp('100%'), marginLeft: wp('2%') }}>
// // //                                         {/* {this.state.your ? <View>
// // //                                     <TouchableOpacity onPress={()=>{
// // //                                                     // console.log(item.phonenumber,item.name,item.description)
// // //                                                     this.props.navigation.navigate('ChatScreen',{phonenumber:this.props.phonenumberuser})}} style={{ borderBottomWidth: 0.25,
// // //                                                         // opacity:0.6,
// // //                                                         paddingBottom: hp("1%"),
// // //                                                         borderBottomColor: "grey",}}>
// // //                                                     <View style={styles.renderChatsName1}>
// // //                                                         <Image source={require("../assets/chatIcon.png")} />
// // //                                                         <Text style={styles.textStyle}>Myself</Text>
// // //                                                     </View>
// // //                                                 </TouchableOpacity>
// // //                                         </View> : <View/>} */}
// // //                                         <ScrollView>
// // //                                             <FlatList
// // //                                                 data={this.state.chats}
// // //                                                 // ItemSeparatorComponent={this.ListViewItemSeparator}
// // //                                                 renderItem={({ item }) => (
// // //                                                     <View>

// // //                                                         {item.category == "Emotional Support" && this.state.showFlatList == false && item.softDelete == false ?
// // //                                                             <View>
// // //                                                                 {this.state.Blocked == false ?
// // //                                                                     <View style={styles.renderChatsName1}>
// // //                                                                         <TouchableOpacity onPress={() => {
// // //                                                                             // console.log(item.phonenumber, item.name, item.description)
// // //                                                                             if (this.props.phonenumberuser) {
// // //                                                                                 this.props.navigation.navigate('AnonymousChat', { phonenumber: item.phonenumber, c: 0, timestamp: item.alerttimestamp })
// // //                                                                             }
// // //                                                                             else {
// // //                                                                                 alert("Please fill details first!")
// // //                                                                             }
// // //                                                                         }
// // //                                                                         }
// // //                                                                             style={{ flexDirection: 'row', width: wp("80%"), alignItems: 'center', height: hp("7%") }}
// // //                                                                         >
// // //                                                                             <Image source={require("../assets/chatIcon.png")} />

// // //                                                                             <View style={{ flexDirection: 'column' }}>
// // //                                                                                 <Text style={styles.textStyle}>Anonymous</Text>
// // //                                                                                 <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 14, paddingLeft: wp('5%'), }}>ssssssdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</Text>
// // //                                                                                 <View style={{ borderBottomWidth: 0.25, marginTop: wp('2%'), marginLeft: wp('5%'), borderBottomColor: "grey", width: wp('75%') }}>

// // //                                                                                 </View>
// // //                                                                             </View>

// // //                                                                         </TouchableOpacity>
// // //                                                                         {/* <TouchableOpacity onPress={() => {
// // //                                                                                 Alert.alert(
// // //                                                                                     'Delete',
// // //                                                                                     'Are you sure you want to delete this chat?', [{
// // //                                                                                         text: 'Cancel',
// // //                                                                                         onPress: () => { console.log('Cancel Pressed') },
// // //                                                                                         style: 'cancel'
// // //                                                                                     }, {
// // //                                                                                         text: 'OK',
// // //                                                                                         onPress: () => {
// // //                                                                                             this.deletekeys(item)
// // //                                                                                         }
// // //                                                                                     },], {
// // //                                                                                     cancelable: false
// // //                                                                                 }
// // //                                                                                 )
// // //                                                                             }}>
// // //                                                                                 <Icon name="delete" size={30} color="#0091EA" style={{ marginRight: wp('2%') }} />
// // //                                                                             </TouchableOpacity> */}
// // //                                                                         {/* <Text>{item.counter}</Text> */}
// // //                                                                         {item.counter > 0 ?
// // //                                                                             <View style={{
// // //                                                                                 width: wp("20%"), alignItems: 'center', justifyContent: "center", borderBottomWidth: 0.25,
// // //                                                                                 borderBottomColor: "grey", height: hp("7%")
// // //                                                                             }}>
// // //                                                                                 <Badge
// // //                                                                                     value={"+" + item.counter}
// // //                                                                                 />
// // //                                                                             </View>
// // //                                                                             :

// // //                                                                             <View style={{
// // //                                                                                 width: wp("20%"), alignItems: 'center', height: hp("7%")
// // //                                                                             }} />
// // //                                                                         }
// // //                                                                     </View>
// // //                                                                     :
// // //                                                                     <TouchableOpacity onPress={() => {
// // //                                                                         // console.log(item.phonenumber, item.name, item.description)
// // //                                                                         alert("You have been blocked.")
// // //                                                                     }

// // //                                                                     }>

// // //                                                                         <View style={styles.renderChatsName1}>
// // //                                                                             <Image source={require("../assets/chatIcon.png")} />
// // //                                                                             <Text style={styles.textStyle}>Anonymous</Text>

// // //                                                                         </View>

// // //                                                                     </TouchableOpacity>

// // //                                                                 }
// // //                                                             </View>
// // //                                                             :
// // //                                                             <View>
// // //                                                             </View>
// // //                                                         }
// // //                                                         {item.category == "shops" ? <TouchableOpacity onPress={() => {
// // //                                                             // console.log(item.phonenumber, item.name, item.description)
// // //                                                             if (this.props.phonenumberuser) {
// // //                                                                 this.props.navigation.navigate('vendorChat', { phonenumber: item.phonenumber })
// // //                                                             }
// // //                                                             else {
// // //                                                                 alert("Please fill details first!")
// // //                                                             }
// // //                                                         }}>

// // //                                                             <View style={styles.renderChatsName}>
// // //                                                                 <Image source={require("../assets/chatIcon.png")} />
// // //                                                                 <Text style={styles.textStyle}>{item.name}</Text>
// // //                                                                 {/* {item.counter > 0 ? <Badge
// // //                                                                         value={"+" + item.counter}
// // //                                                                         containerStyle={{ position: 'absolute', right: 20 }}
// // //                                                                     /> : <View />} */}
// // //                                                             </View>
// // //                                                             {/* <View style={styles.renderChatsName}>
// // //                                                         <Image source={require("../assets/chatIcon.png")} />
// // //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// // //                                                     </View> */}
// // //                                                         </TouchableOpacity> : <View></View>}
// // //                                                         {item.category == "food" && item.softDelete == false ?

// // //                                                             <View style={styles.renderChatsName1}>
// // //                                                                 <TouchableOpacity onPress={() => {
// // //                                                                     // console.log(item.phonenumber, item.name, item.description)
// // //                                                                     if (this.props.phonenumberuser) {
// // //                                                                         this.props.navigation.navigate('ChatScreen', { phonenumber: item.phonenumber, name: item.name, timestamp: item.alerttimestamp })
// // //                                                                     }
// // //                                                                     else {
// // //                                                                         alert("Please fill details first!")
// // //                                                                     }
// // //                                                                 }}
// // //                                                                     style={{
// // //                                                                         flexDirection: 'row', width: wp("100%"), alignItems: 'center',height: hp("7%")
// // //                                                                     }}
// // //                                                                 >
// // //                                                                     <Image source={require("../assets/chatIcon.png")} />
// // //                                                                     <View style={{ flexDirection: 'column' }}>
// // //                                                                         <Text style={styles.textStyle}>{item.name}</Text>
// // //                                                                         <Text numberOfLines={2} adjustsFontSizeToFit  ellipsizeMode="tail" style={{ fontSize: 14, paddingLeft: wp('5%'), }}>({item.description})</Text>
// // //                                                                         <View style={{ borderBottomWidth: 0.25, marginTop: wp('2%'), marginLeft: wp('5%'), borderBottomColor: "grey", width: wp('80%') }}>

// // //                                                                         </View>
// // //                                                                     </View>
// // //                                                                 </TouchableOpacity>
// // //                                                                 {item.counter > 0 ?
// // //                                                                     <View style={{
// // //                                                                         width: wp("20%"), alignItems: 'center', justifyContent: "center", borderBottomWidth: 0.25,
// // //                                                                         borderBottomColor: "grey", height: hp("7%")
// // //                                                                     }}>
// // //                                                                         <Badge
// // //                                                                             value={"+" + item.counter}
// // //                                                                         />
// // //                                                                     </View>
// // //                                                                     :

// // //                                                                     <View style={{
// // //                                                                         width: wp("20%"), alignItems: 'center', borderBottomWidth: 0.25,
// // //                                                                         borderBottomColor: "grey", height: hp("7%")
// // //                                                                     }} />
// // //                                                                 }
// // //                                                             </View>
// // //                                                             : <View></View>}
// // //                                                         {item.category == "other" && item.softDelete == false ?

// // //                                                             <View style={styles.renderChatsName1}>
// // //                                                                 <TouchableOpacity onPress={() => {
// // //                                                                     // console.log(item.phonenumber, item.name, item.description)
// // //                                                                     if (this.props.phonenumberuser) {
// // //                                                                         this.props.navigation.navigate('ChatScreen', { phonenumber: item.phonenumber, name: item.name, timestamp: item.alerttimestamp })
// // //                                                                     }
// // //                                                                     else {
// // //                                                                         alert("Please fill details first!")
// // //                                                                     }
// // //                                                                 }}
// // //                                                                     style={{
// // //                                                                         flexDirection: 'row', width: wp("80%"), alignItems: 'center', borderBottomWidth: 0.25,
// // //                                                                         borderBottomColor: "grey", height: hp("7%")
// // //                                                                     }}
// // //                                                                 >
// // //                                                                     <Image source={require("../assets/chatIcon.png")} />
// // //                                                                     <View style={{ flexDirection: 'column' }}>
// // //                                                                         <Text style={styles.textStyle}>{item.name}</Text>
// // //                                                                         <Text style={{ fontSize: 14, paddingLeft: wp('5%'), }}>({item.description})</Text>
// // //                                                                     </View>
// // //                                                                 </TouchableOpacity>
// // //                                                                 {item.counter > 0 ?
// // //                                                                     <View style={{
// // //                                                                         width: wp("20%"), alignItems: 'center', justifyContent: "center", borderBottomWidth: 0.25,
// // //                                                                         borderBottomColor: "grey", height: hp("7%")
// // //                                                                     }}>
// // //                                                                         <Badge
// // //                                                                             value={"+" + item.counter}
// // //                                                                         />
// // //                                                                     </View>
// // //                                                                     :

// // //                                                                     <View style={{
// // //                                                                         width: wp("20%"), alignItems: 'center', borderBottomWidth: 0.25,
// // //                                                                         borderBottomColor: "grey", height: hp("7%")
// // //                                                                     }} />
// // //                                                                 }
// // //                                                             </View>
// // //                                                             : <View></View>}

// // //                                                     </View>
// // //                                                 )}
// // //                                                 enableEmptySections={true}
// // //                                                 style={{ marginTop: 10 }}
// // //                                                 keyExtractor={(item, index) => index}
// // //                                             />
// // //                                         </ScrollView>
// // //                                     </View>
// // //                                 </View>
// // //                             </View>



// // //                         </View>

// // //                     </View>
// // //                 );
// // //             }
// // //         } else {
// // //             return null;
// // //         }
// // //     }
// // // }
// // // const mapStateToProps = (state) => {
// // //     // console.log(state)
// // //     return {
// // //         upload_status: state.textUpload,
// // //         nameuser: state.nameuser,
// // //         phonenumberuser: state.phonenumberuser,
// // //     }
// // // }

// // // export default connect(mapStateToProps)(ChatList)
// // // const styles = StyleSheet.create({
// // //     upperContainer: {
// // //         flex: 0.1,
// // //         backgroundColor: "#0290ea",
// // //         alignItems: "center",
// // //         flexDirection: 'row',
// // //     },
// // //     lowerContainer: {
// // //         flex: 0.9,
// // //         backgroundColor: "blue"
// // //     },

// // //     textStyle: {
// // //         // margin: wp('2%'),
// // //         fontSize: 16,
// // //         paddingLeft: wp('5%'),

// // //         // backgroundColor:"green"
// // //     },
// // //     textInputStyle: {
// // //         height: hp("6%"),
// // //         borderWidth: 1,
// // //         paddingLeft: 10,
// // //         borderColor: "#FFF",
// // //         backgroundColor: '#FFFFFF',
// // //         margin: wp('4%'),
// // //         borderRadius: 10,
// // //         elevation: 4
// // //     },
// // //     renderChatsName: {
// // //         flexDirection: "row",
// // //         borderLeftWidth: wp('1%'),
// // //         borderLeftColor: 'yellow',
// // //         padding: wp('2%'),
// // //         marginTop: hp('1%'),
// // //         alignItems: "center"
// // //     },
// // //     renderChatsName1: {
// // //         flexDirection: "row",
// // //         borderLeftWidth: wp('1%'),
// // //         borderLeftColor: 'red',
// // //         padding: wp('2%'),
// // //         marginTop: hp('1%'),
// // //         alignItems: "center",
// // //         height: hp("7%")
// // //     },
// // // });


// // import React, { Component } from 'react';
// // import {
// //     Text,
// //     StyleSheet,
// //     View,
// //     FlatList,
// //     TextInput,
// //     ActivityIndicator,
// //     Alert,
// //     Image,
// //     TouchableOpacity, ScrollView
// // } from 'react-native';
// // import { Badge } from 'react-native-elements';
// // import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
// // import * as firebase from 'firebase'
// // import { connect } from 'react-redux';
// // import CryptoJS from "react-native-crypto-js";
// // import Icon from "react-native-vector-icons/MaterialIcons"
// // import {_} from 'lodash';

// // // import AnonymousDrawer from '../Components/AnonymousDrawer'

// // import { resolve } from 'url';
// // // import { ScrollView } from 'react-native-gesture-handler';
// // class ChatList extends Component {
// //     b64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             isLoading: false,
// //             text: '',
// //             searchActive: false,
// //             chats: null,
// //             callFetch: false,
// //             display: false,
// //             your: false,
// //             BlockedCounter: 0,
// //             Blocked: false,
// //             showFlatList:false
// //         };
// //         this.arrayholder = null;
// //         this.newData = []
// //         this.alertarr = null
// //         this.getcolor = false
// //         this.interval

// //         // this.newData
// //     }
// //     encode(key, data) {
// //         console.log(key,data)
// //         data = this.xor_encrypt(key, data);
// //         return this.b64_encode(data);
// //       }
// //       decode(key, data) {
// //         data = this.b64_decode(data);
// //         return this.xor_decrypt(key, data);
// //       }
   
  
   
// //   b64_encode(data) {
// //       var o1, o2, o3, h1, h2, h3, h4, bits, r, i = 0, enc = "";
// //       if (!data) { return data; }
// //       do {
// //         o1 = data[i++];
// //         o2 = data[i++];
// //         o3 = data[i++];
// //         bits = o1 << 16 | o2 << 8 | o3;
// //         h1 = bits >> 18 & 0x3f;
// //         h2 = bits >> 12 & 0x3f;
// //         h3 = bits >> 6 & 0x3f;
// //         h4 = bits & 0x3f;
// //         enc += this.b64_table.charAt(h1) + this.b64_table.charAt(h2) + this.b64_table.charAt(h3) + this.b64_table.charAt(h4);
// //       } while (i < data.length);
// //       r = data.length % 3;
// //       return (r ? enc.slice(0, r - 3) : enc) + "===".slice(r || 3);
// //     }
// //    b64_decode(data) {
// //       var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, result = [];
// //       if (!data) { return data; }
// //       data += "";
// //       do {
// //         h1 = this.b64_table.indexOf(data.charAt(i++));
// //         h2 = this.b64_table.indexOf(data.charAt(i++));
// //         h3 = this.b64_table.indexOf(data.charAt(i++));
// //         h4 = this.b64_table.indexOf(data.charAt(i++));
// //         bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
// //         o1 = bits >> 16 & 0xff;
// //         o2 = bits >> 8 & 0xff;
// //         o3 = bits & 0xff;
// //         result.push(o1);
// //         if (h3 !== 64) {
// //           result.push(o2);
// //           if (h4 !== 64) {
// //             result.push(o3);
// //           }
// //         }
// //       } while (i < data.length);
// //       return result;
// //     }
   
// //    xor_encrypt(key, data) {
// //      console.log(data,key);
// //       return _.map(data, function(c, i) {
// //         return c.charCodeAt(0) ^ key.charCodeAt( Math.floor(i % key.length) );
// //       });
// //     }
// //   xor_decrypt(key, data) {
// //       return _.map(data, function(c, i) {
// //         return String.fromCharCode( c ^ key.charCodeAt( Math.floor(i % key.length) ) );
// //       }).join("");
// //     }

// //     //child added listener for firebase
// //     on = callback =>
// //         firebase.database().ref("alertsUnderYou/" + this.props.phonenumberuser + "/").limitToLast(1).on('child_added', snapshot => {
// //             callback(
// //                 this.setState({ isLoading: true })
// //             )
// //             // console.log("Hey i am")
// //         }
// //         );



// //     // youralert = () => {
// //     //     var alertyour = new Promise (( resolve,reject) => {
// //     //         firebase.database().ref("chatroom/").on("value", snapshot => {
// //     //             // console.log("zhgxcjhgaskusdbqwkhdqwoidhq",Object.keys(snapshot.val()))
// //     //             var arr= []
// //     //             if(snapshot.val()){
// //     //             arr = Object.keys(snapshot.val())
// //     //             for(var i=0;i<arr.length;i++)
// //     //             {
// //     //                 if(arr[i] == this.props.phonenumberuser){
// //     //                     resolve(true)
// //     //                 }
// //     //             }
// //     //             reject(false)}
// //     //         })
// //     //     })
// //     //     alertyour.then(val => {
// //     //         console.log(val)
// //     //         this.setState({
// //     //             your: val
// //     //         })
// //     //     })
// //     // }



// //     fetchfromDB = () => {
// //         var fetchMessage = new Promise((resolve, reject) => {
// //             var fetchedAlert = []

// //             firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/").on("value", snapshot => {
// //                 //key = number,timestamp
// //                 snapshot.forEach((data) => {
// //                     fetchedAlert.push(data.val())
// //                 });
// //             })

// //             firebase.database().ref("ChatsUnderYou/vendors/" + this.props.phonenumberuser + "/").on("value", snapshot => {
// //                 snapshot.forEach((data) => {
// //                     fetchedAlert.push(data.val())
// //                 });

// //             })
// //             firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/").on("value", snapshot => {
// //                 snapshot.forEach((data) => {
// //                     fetchedAlert.push(data.val())
// //                 });
// //                 // if (fetchedAlert)
// //                 //     resolve(fetchedAlert)
// //                 // else
// //                 //     reject("no data")
// //             })
// //             if (fetchedAlert)
// //                 resolve(fetchedAlert)
// //             else
// //                 reject("no data")
// //         })
// //         fetchMessage.then((s) => {
// //             // console.log("fetchedalert= ", s)
// //             s.sort(function (a, b) {
// //                 return -(a.timestamp - b.timestamp)
// //             })
// //             this.setState({
// //                 isLoading: true,
// //                 // display:false,
// //                 chats: s
// //             })
// //             console.log(this.state.isLoading)
// //         }).catch((err) => {

// //         })
// //     }



// //     //function def. for fetching the blocked counter state of the current user
// //     fetchBlockCount = () => {
// //         firebase.database().ref("SignUpInComplete/" + this.props.phonenumberuser).on("value", snapshot => {
// //             console.log("snapshot.val()", snapshot.val())
// //             if (snapshot.val().BlockedCounter >= 3) {
// //                 this.setState({
// //                     BlockedCounter: snapshot.val().BlockedCounter,
// //                     Blocked: true
// //                 })
// //             }
// //             else {
// //                 this.setState({
// //                     BlockedCounter: snapshot.val().BlockedCounter,
// //                     Blocked: false
// //                 })
// //             }

// //         })
// //     }

// //     componentDidMount() {

        
        
// //             this.props.navigation.addListener('willFocus', async () =>{
// //                 this.interval = setInterval(() => {
// //                     console.log("refreshing");
        
// //                     this.setState({
// //                         time: Date.now(),
// //                         isLoading: false,
// //                     })
// //                     // this.props.navigation.state.params.phonenumber = null
        
// //                 }, 3000);
// //              });
// //             this.props.navigation.addListener('willBlur', () => {
// //                 clearInterval(this.interval)
// //             });
        


// //         //def. of promise first 
// //         var fetchMessage = new Promise((resolve, reject) => {
// //             var fetchedAno = []
// //             firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/").on("value", snapshot => {
// //                 snapshot.forEach((data) => {
// //                     fetchedAno.push(data.val())
// //                 });
// //                 if (fetchedAno)
// //                     resolve(fetchedAno)
// //                 else
// //                     reject("no data")
// //             })
// //         })//end of defination of promise first


// //         fetchMessage.then(fetchedAno => {
// //             // console.log("fetchedAno", fetchedAno)

// //             //def. of promise two
// //             var fetchMessage1 = new Promise((resolve, reject) => {
// //                 var fetchedven = []
// //                 var fetchedAnoven = []
// //                 firebase.database().ref("ChatsUnderYou/vendors/" + this.props.phonenumberuser + "/").on("value", snapshot => {
// //                     snapshot.forEach((data) => {
// //                         fetchedven.push(data.val())
// //                     });
// //                     fetchedAnoven.push(...fetchedAno, ...fetchedven)
// //                     if (fetchedAnoven)
// //                         resolve(fetchedAnoven)
// //                     else
// //                         reject("no data")
// //                 })
// //             })//end of def. of promise two

// //             fetchMessage1.then(fetchedAnoven => {
// //                 // console.log("fetchedAnoven", fetchedAnoven)

// //                 //def. of promise three
// //                 var fetchMessage2 = new Promise((resolve, reject) => {
// //                     var fetchedAlert = []
// //                     var fetchedAll = []
// //                     firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/").on("value", snapshot => {
// //                         snapshot.forEach((data) => {
// //                             fetchedAlert.push(data.val())
// //                         });
// //                         fetchedAll.push(...fetchedAnoven, ...fetchedAlert)
// //                         if (fetchedAll)
// //                             resolve(fetchedAll)
// //                         else
// //                             reject("no data")
// //                     })
// //                 })//end of def. of promise three

// //                 fetchMessage2.then(fetchedAll => {
// //                     // console.log("fetchedAll", fetchedAll)
// //                     fetchedAll.sort(function (a, b) {
// //                         return -(a.timestamp - b.timestamp)
// //                     })
// //                     console.log("fetchedAllSort", fetchedAll)
// //                     this.arrayholder = fetchedAll

// //                     //gets the block counter value for the particular user
// //                     this.fetchBlockCount();

// //                     this.setState({
// //                         display: true,
// //                         chats: fetchedAll
// //                     })
// //                 })
// //             })
// //         })
// //     }

    
    
// //     componentWillUnmount() {
// //         console.log("UNMOUNTING")
// //         clearInterval(this.interval);
// //     }

// //     componentMount = () => {
// //         // if(this.props.navigation.state.params.phonenumber!=null){
// //         // console.log(this.props.navigation.state.params.name)
// //         // console.log(this.props.navigation.state.params.phonenumber)
// //         // console.log(this.props.navigation.state.params.description)
// //         var phonenumber = null
// //         const { navigation } = this.props;
// //         phonenumber = navigation.getParam('phonenumber', null);
// //         // phonenumber = this.props.navigation.state.params.phonenumber
// //         // console.log(phonenumber, this.state.chats)
// //         // var appenddata = new Promise((resolve, reject) => {
// //         if (phonenumber != null) {
// //             var c = 0
// //             if (this.state.chats.length != 0) {
// //                 // console.log(this.state.chats[0].phonenumber)
// //                 this.state.chats.forEach(chat => {
// //                     if (chat.category == "shops") {
// //                         if (chat.phonenumber == this.props.navigation.state.params.phonenumber) {
// //                             // console.log("Im in")
// //                             c++;
// //                         }
// //                     }
// //                     else {
// //                         if (chat.alerttimestamp == this.props.navigation.state.params.timestamp) {
// //                             // console.log("Im in")
// //                             c++;
// //                         }
// //                     }

// //                 })
// //             }
// //             // console.log(c)
// //             if (c == 0 && this.props.navigation.state.params.phonenumber != null) {
// //                 // console.log("asjgdjhasgdh")
// //                 // console.log(this.props.navigation.state.params.category)
// //                 if (this.props.navigation.state.params.category == "Emotional Support") {
// //                     firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).set({
// //                         name: this.props.navigation.state.params.name,
// //                         description: this.props.navigation.state.params.description,
// //                         phonenumber: this.props.navigation.state.params.phonenumber,
// //                         category: this.props.navigation.state.params.category,
// //                         counter: 0,
// //                         timestamp: 0,
// //                         alerttimestamp: this.props.navigation.state.params.timestamp,
// //                         isBlocked: false,
// //                         isDone: false,
// //                         softDelete: false,
// //                     }).then(() => {
// //                         firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.navigation.state.params.phonenumber + "/" + this.props.phonenumberuser + "," + this.props.navigation.state.params.timestamp).set({
// //                             name: this.props.navigation.state.params.name,
// //                             description: this.props.navigation.state.params.description,
// //                             phonenumber: this.props.phonenumberuser,
// //                             category: this.props.navigation.state.params.category,
// //                             counter: 0,
// //                             timestamp: 0,
// //                             alerttimestamp: this.props.navigation.state.params.timestamp,
// //                             isBlocked: false,
// //                             isDone: false,
// //                             softDelete:false,
// //                         }).then(() => {
// //                             this.props.navigation.state.params.description = this.props.navigation.state.params.description + "(Group Desciption)";
// //                             let ciphertext = this.encode('U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=',this.props.navigation.state.params.description);
// //                             const text = ciphertext
// //                             const message = {
// //                                 text,
// //                                 user: {
// //                                     _id: this.props.navigation.state.params.phonenumber,
// //                                     name: this.props.navigation.state.params.name,
// //                                 },
// //                                 timestamp: this.props.navigation.state.params.timestamp,
// //                             };
// //                             if (this.props.phonenumberuser > this.props.navigation.state.params.phonenumber) {
// //                                 var x = this.props.phonenumberuser + ',' + this.props.navigation.state.params.phonenumber;
// //                             } else {
// //                                 var x = this.props.navigation.state.params.phonenumber + ',' + this.props.phonenumberuser;
// //                             }
// //                             firebase.database().ref('OneToOneAnonymous/' + x + "," + this.props.navigation.state.params.timestamp + '/').push(message);
// //                             this.setState({
// //                                 // callFetch:true
// //                                 isLoading: false
// //                             })
// //                         })
// //                     })
// //                 }
// //                 else if (this.props.navigation.state.params.category == "shops") {
// //                     firebase.database().ref("ChatsUnderYou/vendors/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber).set({
// //                         name: this.props.navigation.state.params.name,
// //                         description: this.props.navigation.state.params.description,
// //                         phonenumber: this.props.navigation.state.params.phonenumber,
// //                         category: this.props.navigation.state.params.category,
// //                         counter: 0,
// //                         timestamp: 0,
// //                     }).then(() => {
// //                         firebase.database().ref("ChatsUnderYou/vendors/" + this.props.navigation.state.params.phonenumber + "/" + this.props.phonenumberuser).set({
// //                             name: this.props.navigation.state.params.name,
// //                             description: this.props.navigation.state.params.description,
// //                             phonenumber: this.props.phonenumberuser,
// //                             category: this.props.navigation.state.params.category,
// //                             counter: 0,
// //                             timestamp: 0,
// //                         }).then(() => {
// //                             this.setState({
// //                                 // callFetch:true
// //                                 isLoading: false
// //                             })
// //                         })
// //                     })
// //                 }
// //                 else {
// //                     firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).set({
// //                         name: this.props.navigation.state.params.name,
// //                         description: this.props.navigation.state.params.description,
// //                         phonenumber: this.props.navigation.state.params.phonenumber,
// //                         category: this.props.navigation.state.params.category,
// //                         counter: 0,
// //                         timestamp: 0,
// //                         alerttimestamp: this.props.navigation.state.params.timestamp,
// //                         softDelete:false,
// //                     }).then(() => {
// //                         this.props.navigation.state.params.description = this.props.navigation.state.params.description + "(Group Desciption)";
// //                         let ciphertext = this.encode('U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=',this.props.navigation.state.params.description);
// //                         const text = ciphertext
// //                         const message = {
// //                             text,
// //                             user: {
// //                                 _id: this.props.navigation.state.params.phonenumber,
// //                                 name: this.props.navigation.state.params.name,
// //                             },
// //                             timestamp: this.props.navigation.state.params.timestamp,
// //                         };
// //                         firebase.database().ref('chatroom/' + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + '/').push(message);
// //                         this.setState({
// //                             // callFetch:true
// //                             isLoading: false
// //                         })
// //                     }).then(()=>{
// //                         firebase.database().ref("Participants/"+ this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + "/" + this.props.phonenumberuser+"/").set({
// //                             owner:"false",
// //                             category:this.props.navigation.state.params.category,
// //                             Ownername: this.props.nameuser,
// //                             name:this.props.navigation.state.params.name,
// //                             description: this.props.navigation.state.params.description,
// //                             phonenumber: this.props.navigation.state.params.phonenumber,
// //                             alerttimestamp: this.props.navigation.state.params.timestamp,
// //                             counter:0,
// //                             timestamp: 0,
// //                             phonenumberuser: this.props.phonenumberuser,
// //                         })
// //                     })
// //                 }
// //             }
// //         }
// //     }
// //     SearchFilterFunction(text) {
// //         //passing the inserted text in textinput
// //         console.log("text",text)
// //         this.newData = this.arrayholder.filter(function (item) {
// //             console.log("item",item)
// //             if(item.category != "Emotional Support"){
// //             //applying filter for the inserted text in search bar
// //             const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
// //             const textData = text.toUpperCase();
// //             return itemData.indexOf(textData) > -1;}
// //         });
// //         this.setState({
// //             //setting the filtered newData on datasource
// //             //After setting the data it will automatically re-render the view
// //             chats: this.newData,
// //             text: text,
// //         });
// //         console.log("this.newData",this.newData)
// //     }

// //     deletekeys = (item) => {
// //         // console.log("inside del function\n");
// //         // console.log("item", item)
// //         if (this.props.phonenumberuser > item.phonenumber) {
// //             var x = this.props.phonenumberuser + ',' + item.phonenumber;
// //             firebase.database().ref("OneToOneAnonymous/" + x + ',' + item.alerttimestamp).remove()
// //         } else {
// //             var x = item.phonenumber + ',' + this.props.phonenumberuser;
// //             firebase.database().ref("OneToOneAnonymous/" + x + ',' + item.alerttimestamp).remove()
// //         }
// //         firebase.database().ref("ChatsUnderYou/Anonymous/" + item.phonenumber + "/" + this.props.phonenumberuser + "," + item.alerttimestamp).remove()
// //         firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + item.phonenumber + "," + item.alerttimestamp).remove()
// //     }
// //     ListViewItemSeparator = () => {
// //         //Item sparator view
// //         return (
// //             <View
// //                 style={{
// //                     height: hp('1%'),
// //                     // width: '75%',
// //                     borderBottomWidth: 0.25,
// //                     // opacity:0.6,
// //                     borderBottomColor: "grey",
// //                     // marginLeft: wp('16%')
// //                     // backgroundColor: '#080808',
// //                     // position: "absolute"
// //                     // borderLeftWidth:10
// //                 }}
// //             />
// //         );
// //     };
// //     render() {
// //         // var x=false
// //         // try {
// //         //      x=this.props.navigation.state.params.urgentRefresh
// //         //      console.log("x = ",x);
              
// //         // } catch (error) {
// //         //      x=false
// //         // }
// //         // if(x==true){
// //         //     this.interval = setTimeout(() => {
// //         //         console.log("refreshing in render");
    
// //         //         this.setState({
// //         //             time: Date.now(),
// //         //             isLoading: false,
// //         //         })
// //         //         // this.props.navigation.state.params.phonenumber = null
// //         //         x=false
    
// //         //     }, 1);
// //         // }
// //         if (this.state.display == true) {
// //             { this.componentMount() }
// //             if (this.state.isLoading == false) {
// //                 {
// //                     this.fetchfromDB()
// //                     // this.youralert()
// //                 }
// //                 return null
// //             }
// //             else {
// //                 return (
// //                     <View style={{ flex: 1 }}>
// //                                                 {/* <AnonymousDrawer /> */}

// //                         <View style={styles.upperContainer}>
// //                             <View style={{ flex: 1, flexDirection: 'row', marginLeft: wp("4%") }}>
// //                                 <View style={{ flex: 0.6 }}>
// //                                     <Text style={{ marginLeft: wp('6%'), fontSize: 24, color: "white", fontWeight: "bold" }}>
// //                                         Message
// //                                     </Text>
// //                                 </View>
// //                                 {/* <View style={{ justifyContent: 'center'}}>
// //                 <AnonymousDrawer />
// //             </View> */}
// //                             </View>
// //                         </View> 
// //                         <View style={styles.lowerContainer}>
// //                             {/* {this.state.text ? */}
// //                                 {/* this.renderForSearchActive() */}
// //                                          {/* <View style={{ justifyContent: 'center'}}>
// //                 <AnonymousDrawer />
// //             </View> */}

                              

// //                                 <View style={{ flex: 1, backgroundColor: "#fff" }}>
// //                                     <View style={{ flex: 0.12 }}>
// //                                         <TextInput
// //                                             style={styles.textInputStyle}
// //                                             onChangeText={(text) => {
// //                                                 this.SearchFilterFunction(text)
// //                                                 this.setState({
// //                                                     showFlatList: true,
// //                                                 },()=>{
// //                                                     if (this.state.text == "") {
// //                                                         this.setState({
// //                                                             showFlatList:false,
// //                                                             chats:this.arrayholder
// //                                                         })
// //                                                     }
// //                                                 }) 
// //                                             }}
// //                                             placeholderTextColor="#0290ea"
// //                                             value={this.state.text}
// //                                             underlineColorAndroid="transparent"
// //                                             placeholder="Search message..."
// //                                         />
// //                                         {/* initially dataSource is kept empty and then as search element are found they are added in it.  */}

// //                                     </View>
// //                                     <View style={{ flex: 0.88 }}>
// //                                         <View style={{ width: wp('100%'), marginLeft: wp('2%') }}>
// //                                             {/* {this.state.your ? <View>
// //                                     <TouchableOpacity onPress={()=>{
// //                                                     // console.log(item.phonenumber,item.name,item.description)
// //                                                     this.props.navigation.navigate('ChatScreen',{phonenumber:this.props.phonenumberuser})}} style={{ borderBottomWidth: 0.25,
// //                                                         // opacity:0.6,
// //                                                         paddingBottom: hp("1%"),
// //                                                         borderBottomColor: "grey",}}>
// //                                                     <View style={styles.renderChatsName1}>
// //                                                         <Image source={require("../assets/chatIcon.png")} />
// //                                                         <Text style={styles.textStyle}>Myself</Text>
// //                                                     </View>
// //                                                 </TouchableOpacity>
// //                                         </View> : <View/>} */}
// //                                             <ScrollView>
// //                                                 <FlatList
// //                                                     data={this.state.chats}
// //                                                     // ItemSeparatorComponent={this.ListViewItemSeparator}
// //                                                     renderItem={({ item }) => (
// //                                                         <View>
                                                            
// //                                                             {item.category == "Emotional Support" && this.state.showFlatList == false && item.softDelete==false ?
// //                                                                 <View>
// //                                                                     {this.state.Blocked == false  ?
// //                                                                         <View style={styles.renderChatsName1}>
// //                                                                             <TouchableOpacity onPress={() => {
// //                                                                                 // console.log(item.phonenumber, item.name, item.description)
// //                                                                                 if (this.props.phonenumberuser) {
// //                                                                                     this.props.navigation.navigate('AnonymousChat', { phonenumber: item.phonenumber, c: 0, timestamp: item.alerttimestamp })
// //                                                                                 }
// //                                                                                 else {
// //                                                                                     alert("Please fill details first!")
// //                                                                                 }
// //                                                                             }
// //                                                                             }
// //                                                                                 style={{ flexDirection: 'row', width: wp("80%") ,alignItems:'center'}}
// //                                                                             >
// //                                                                                 <View style={{marginRight:wp("5%")}}>
// //                                                                                 <Image source={require("../assets/chatIcon.png")} />
// //                                                                                 </View>
// //                                                                                 <View style={{flexDirection:'column', borderBottomWidth: 0.25,
// //                                                                                 borderBottomColor: "grey",height:hp("7%"),width:wp("70%")}}>
// //                                                                                 <Text style={styles.textStyle}>Anonymous</Text>
// //                                                                                 <Text style={{fontSize: 14}} numberOfLines={1} ellipsizeMode="tail">({item.description})</Text>
// //                                                                                 </View>
// //                                                                             </TouchableOpacity>
// //                                                                             {/* <TouchableOpacity onPress={() => {
// //                                                                                 Alert.alert(
// //                                                                                     'Delete',
// //                                                                                     'Are you sure you want to delete this chat?', [{
// //                                                                                         text: 'Cancel',
// //                                                                                         onPress: () => { console.log('Cancel Pressed') },
// //                                                                                         style: 'cancel'
// //                                                                                     }, {
// //                                                                                         text: 'OK',
// //                                                                                         onPress: () => {
// //                                                                                             this.deletekeys(item)
// //                                                                                         }
// //                                                                                     },], {
// //                                                                                     cancelable: false
// //                                                                                 }
// //                                                                                 )
// //                                                                             }}>
// //                                                                                 <Icon name="delete" size={30} color="#0091EA" style={{ marginRight: wp('2%') }} />
// //                                                                             </TouchableOpacity> */}
// //                                                                             {/* <Text>{item.counter}</Text> */}
// //                                                                             {item.counter > 0 ?
// //                                                                                     <View style={{width: wp("20%") ,alignItems:'center',justifyContent:"center", borderBottomWidth: 0.25,
// //                                                                                     borderBottomColor: "grey",height:hp("7%")}}>
// //                                                                                     <Badge
// //                                                                                         value={"+" + item.counter}
// //                                                                                     />
// //                                                                                     </View>
// //                                                                                     :

// //                                                                                     <View style={{width: wp("20%") ,alignItems:'center', borderBottomWidth: 0.25,
// //                                                                                     borderBottomColor: "grey",height:hp("7%")}}/>
// //                                                                                 }
// //                                                                         </View>
// //                                                                         :
// //                                                                         <TouchableOpacity onPress={() => {
// //                                                                             // console.log(item.phonenumber, item.name, item.description)
// //                                                                             alert("You have been blocked.")
// //                                                                         }

// //                                                                         }>

// //                                                                             <View style={styles.renderChatsName1}>
// //                                                                                 <Image source={require("../assets/chatIcon.png")} />
// //                                                                                 <Text style={styles.textStyle}>Anonymous</Text>

// //                                                                             </View>

// //                                                                         </TouchableOpacity>

// //                                                                     }
// //                                                                 </View>
// //                                                                 :
// //                                                                 <View>
// //                                                                 </View>
// //                                                             }
// //                                                             {item.category == "shops" ? <TouchableOpacity onPress={() => {
// //                                                                 // console.log(item.phonenumber, item.name, item.description)
// //                                                                 if (this.props.phonenumberuser) {
// //                                                                     this.props.navigation.navigate('vendorChat', { phonenumber: item.phonenumber })
// //                                                                 }
// //                                                                 else {
// //                                                                     alert("Please fill details first!")
// //                                                                 }
// //                                                             }}>

// //                                                                 <View style={styles.renderChatsName}>
// //                                                                     <Image source={require("../assets/chatIcon.png")} />
// //                                                                     <Text style={styles.textStyle}>{item.name}</Text>
// //                                                                     {/* {item.counter > 0 ? <Badge
// //                                                                         value={"+" + item.counter}
// //                                                                         containerStyle={{ position: 'absolute', right: 20 }}
// //                                                                     /> : <View />} */}
// //                                                                 </View>
// //                                                                 {/* <View style={styles.renderChatsName}>
// //                                                         <Image source={require("../assets/chatIcon.png")} />
// //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// //                                                     </View> */}
// //                                                             </TouchableOpacity> : <View></View>}
// //                                                             {item.category == "food" && item.softDelete==false ? 

// //                                                                 <View style={styles.renderChatsName1}>
// //                                                                     <TouchableOpacity onPress={() => {
// //                                                                 // console.log(item.phonenumber, item.name, item.description)
// //                                                                 if (this.props.phonenumberuser) {
// //                                                                     this.props.navigation.navigate('ChatScreen', { phonenumber: item.phonenumber, name: item.name, timestamp: item.alerttimestamp })
// //                                                                 }
// //                                                                 else {
// //                                                                     alert("Please fill details first!")
// //                                                                 }
// //                                                             }}
// //                                                             style={{ flexDirection: 'row', width: wp("80%") ,alignItems:'center'}}
// //                                                             >
// //                                                                 <View style={{marginRight:wp("5%")}}>
// //                                                                     <Image source={require("../assets/chatIcon.png")} />
// //                                                                     </View>
// //                                                                     <View style={{flexDirection:'column', borderBottomWidth: 0.25,
// //                                                                                 borderBottomColor: "grey",height:hp("7%"),width:wp("70%")}}>
// //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// //                                                                                 <Text style={{fontSize: 14}} numberOfLines={1} ellipsizeMode="tail">({item.description})</Text>
// //                                                                                 </View>
// //                                                                     </TouchableOpacity>
// //                                                                     {item.counter > 0 ?
// //                                                                     <View style={{width: wp("20%") ,alignItems:'center',justifyContent:"center", borderBottomWidth: 0.25,
// //                                                                     borderBottomColor: "grey",height:hp("7%")}}>
// //                                                                                     <Badge
// //                                                                                         value={"+" + item.counter}
// //                                                                                     />
// //                                                                         </View>
// //                                                                                     :

// //                                                                                     <View style={{width: wp("20%") ,alignItems:'center', borderBottomWidth: 0.25,
// //                                                                                     borderBottomColor: "grey",height:hp("7%")}}/>
// //                                                                                 }
// //                                                                 </View>
// //                                                             : <View></View>}
// //                                                             {item.category == "other" && item.softDelete==false ? 

// //                                                                 <View style={styles.renderChatsName1}>
// //                                                                     <TouchableOpacity onPress={() => {
// //                                                                 // console.log(item.phonenumber, item.name, item.description)
// //                                                                 if (this.props.phonenumberuser) {
// //                                                                     this.props.navigation.navigate('ChatScreen', { phonenumber: item.phonenumber, name: item.name, timestamp: item.alerttimestamp })
// //                                                                 }
// //                                                                 else {
// //                                                                     alert("Please fill details first!")
// //                                                                 }
// //                                                             }}
// //                                                             style={{ flexDirection: 'row', width: wp("80%") ,alignItems:'center'}}
// //                                                             >
// //                                                                 <View style={{marginRight:wp("5%")}}>
// //                                                                     <Image source={require("../assets/chatIcon.png")} />
// //                                                                     </View>
// //                                                                     <View style={{flexDirection:'column', borderBottomWidth: 0.25,
// //                                                                                 borderBottomColor: "grey",height:hp("7%"),width:wp("70%")}}>
// //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// //                                                                                 <Text style={{fontSize: 14}} numberOfLines={1} ellipsizeMode="tail">({item.description})</Text>
// //                                                                                 </View>
// //                                                                     </TouchableOpacity>
// //                                                                     {item.counter > 0 ?
// //                                                                        <View style={{width: wp("20%") ,alignItems:'center',justifyContent:"center", borderBottomWidth: 0.25,
// //                                                                        borderBottomColor: "grey",height:hp("7%")}}>
// //                                                                                     <Badge
// //                                                                                         value={"+" + item.counter}
// //                                                                                     />
// //                                                                         </View>
// //                                                                                     :

// //                                                                                     <View style={{width: wp("20%") ,alignItems:'center', borderBottomWidth: 0.25,
// //                                                                                     borderBottomColor: "grey",height:hp("7%")}}/>
// //                                                                                 }
// //                                                                 </View>
// //                                                                  : <View></View>}

// //                                                         </View>
// //                                                     )}
// //                                                     enableEmptySections={true}
// //                                                     style={{ marginTop: 10 }}
// //                                                     keyExtractor={(item, index) => index}
// //                                                 />
// //                                             </ScrollView>
// //                                         </View>
// //                                     </View>
// //                                 </View>
                            


// //                         </View>

// //                     </View>
// //                 );
// //             }
// //         } else {
// //             return null;
// //         }
// //     }
// // }
// // const mapStateToProps = (state) => {
// //     // console.log(state)
// //     return {
// //         upload_status: state.textUpload,
// //         nameuser: state.nameuser,
// //         phonenumberuser: state.phonenumberuser,
// //     }
// // }

// // export default connect(mapStateToProps)(ChatList)
// // const styles = StyleSheet.create({
// //     upperContainer: {
// //         flex: 0.1,
// //         backgroundColor: "#0290ea",
// //         alignItems: "center",
// //         flexDirection: 'row',
// //     },
// //     lowerContainer: {
// //         flex: 0.9,
// //         backgroundColor: "blue"
// //     },

// //     textStyle: {
// //         // margin: wp('2%'),
// //         fontSize: 16,
// //         fontWeight:"bold"

// //         // backgroundColor:"green"
// //     },
// //     textInputStyle: {
// //         height: hp("6%"),
// //         borderWidth: 1,
// //         paddingLeft: 10,
// //         borderColor: "#FFF",
// //         backgroundColor: '#FFFFFF',
// //         margin: wp('4%'),
// //         borderRadius: 10,
// //         elevation: 4
// //     },
// //     renderChatsName: {
// //         flexDirection: "row",
// //         borderLeftWidth: wp('1%'),
// //         borderLeftColor: 'yellow',
// //         padding: wp('2%'),
// //         marginTop: hp('1%'),
// //         alignItems: "center"
// //     },
// //     renderChatsName1: {
// //         flexDirection: "row",
// //         borderLeftWidth: wp('1%'),
// //         borderLeftColor: 'red',
// //         padding: wp('2%'),
// //         marginTop: hp('1%'),
// //         alignItems: "center",
// //        height:hp("7%")
// //     },
// // });



// import React, { Component } from 'react';
// import {
//     Text,
//     StyleSheet,
//     View,
//     FlatList,
//     TextInput,
//     ActivityIndicator,
//     Alert,
//     Image,
//     TouchableOpacity, ScrollView
// } from 'react-native';
// import { Badge } from 'react-native-elements';
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
// import * as firebase from 'firebase'
// import { connect } from 'react-redux';
// import CryptoJS from "react-native-crypto-js";
// import Icon from "react-native-vector-icons/MaterialIcons"
// import {_} from 'lodash';

// // import AnonymousDrawer from '../Components/AnonymousDrawer'

// import { resolve } from 'url';
// // import { ScrollView } from 'react-native-gesture-handler';
// class ChatList extends Component {
//     b64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoading: false,
//             text: '',
//             searchActive: false,
//             chats: null,
//             callFetch: false,
//             display: false,
//             your: false,
//             BlockedCounter: 0,
//             Blocked: false,
//             showFlatList:false
//         };
//         this.arrayholder = null;
//         this.newData = []
//         this.alertarr = null
//         this.getcolor = false
//         this.interval

//         // this.newData
//     }
//     encode(key, data) {
//         console.log(key,data)
//         data = this.xor_encrypt(key, data);
//         return this.b64_encode(data);
//       }
//       decode(key, data) {
//         data = this.b64_decode(data);
//         return this.xor_decrypt(key, data);
//       }
   
  
   
//   b64_encode(data) {
//       var o1, o2, o3, h1, h2, h3, h4, bits, r, i = 0, enc = "";
//       if (!data) { return data; }
//       do {
//         o1 = data[i++];
//         o2 = data[i++];
//         o3 = data[i++];
//         bits = o1 << 16 | o2 << 8 | o3;
//         h1 = bits >> 18 & 0x3f;
//         h2 = bits >> 12 & 0x3f;
//         h3 = bits >> 6 & 0x3f;
//         h4 = bits & 0x3f;
//         enc += this.b64_table.charAt(h1) + this.b64_table.charAt(h2) + this.b64_table.charAt(h3) + this.b64_table.charAt(h4);
//       } while (i < data.length);
//       r = data.length % 3;
//       return (r ? enc.slice(0, r - 3) : enc) + "===".slice(r || 3);
//     }
//    b64_decode(data) {
//       var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, result = [];
//       if (!data) { return data; }
//       data += "";
//       do {
//         h1 = this.b64_table.indexOf(data.charAt(i++));
//         h2 = this.b64_table.indexOf(data.charAt(i++));
//         h3 = this.b64_table.indexOf(data.charAt(i++));
//         h4 = this.b64_table.indexOf(data.charAt(i++));
//         bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
//         o1 = bits >> 16 & 0xff;
//         o2 = bits >> 8 & 0xff;
//         o3 = bits & 0xff;
//         result.push(o1);
//         if (h3 !== 64) {
//           result.push(o2);
//           if (h4 !== 64) {
//             result.push(o3);
//           }
//         }
//       } while (i < data.length);
//       return result;
//     }
   
//    xor_encrypt(key, data) {
//      console.log(data,key);
//       return _.map(data, function(c, i) {
//         return c.charCodeAt(0) ^ key.charCodeAt( Math.floor(i % key.length) );
//       });
//     }
//   xor_decrypt(key, data) {
//       return _.map(data, function(c, i) {
//         return String.fromCharCode( c ^ key.charCodeAt( Math.floor(i % key.length) ) );
//       }).join("");
//     }

//     //child added listener for firebase
//     on = callback =>
//         firebase.database().ref("alertsUnderYou/" + this.props.phonenumberuser + "/").limitToLast(1).on('child_added', snapshot => {
//             callback(
//                 this.setState({ isLoading: true })
//             )
//             // console.log("Hey i am")
//         }
//         );



//     // youralert = () => {
//     //     var alertyour = new Promise (( resolve,reject) => {
//     //         firebase.database().ref("chatroom/").on("value", snapshot => {
//     //             // console.log("zhgxcjhgaskusdbqwkhdqwoidhq",Object.keys(snapshot.val()))
//     //             var arr= []
//     //             if(snapshot.val()){
//     //             arr = Object.keys(snapshot.val())
//     //             for(var i=0;i<arr.length;i++)
//     //             {
//     //                 if(arr[i] == this.props.phonenumberuser){
//     //                     resolve(true)
//     //                 }
//     //             }
//     //             reject(false)}
//     //         })
//     //     })
//     //     alertyour.then(val => {
//     //         console.log(val)
//     //         this.setState({
//     //             your: val
//     //         })
//     //     })
//     // }

//     // isEqual = (obj1,obj2) => {
//     //     console.log("sahgdahs")
//     // }

//     fetchfromDB = () => {
//         console.log("ahgdsh")
//         var fetchMessage = new Promise((resolve, reject) => {
//             var fetchedAlert = []

//             firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/").on("value", snapshot => {
//                 //key = number,timestamp
//                 snapshot.forEach((data) => {
//                     fetchedAlert.push(data.val())
//                 });
//             })

//             firebase.database().ref("ChatsUnderYou/vendors/" + this.props.phonenumberuser + "/").on("value", snapshot => {
//                 snapshot.forEach((data) => {
//                     fetchedAlert.push(data.val())
//                 });

//             })
//             firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/").on("value", snapshot => {
//                 snapshot.forEach((data) => {
//                     fetchedAlert.push(data.val())
//                 });
//                 // if (fetchedAlert)
//                 //     resolve(fetchedAlert)
//                 // else
//                 //     reject("no data")
//             })
//             if (fetchedAlert)
//                 resolve(fetchedAlert)
//             else
//                 reject("no data")
//         })
//         fetchMessage.then((s) => {
//             // console.log("fetchedalert= ", s)
//             s.sort(function (a, b) {
//                 return -(a.timestamp - b.timestamp)
//             })
//             // if(s.length == this.state.chats.length){
//             //     this.setState({
//             //         isLoading: true,
//             //         // display:false,
//             //         chats: s
//             //     })
//             //     for(var i= 0;i<this.state.chats.length;i++){
//             //         this.isEqual(s[i],this.state.chats[i])
//             //     }
//             // }else{
//             this.setState({
//                 isLoading: true,
//                 // display:false,
//                 chats: s
//             })
//         // }
//             console.log(this.state.isLoading)
//         }).catch((err) => {

//         })
//     }



//     //function def. for fetching the blocked counter state of the current user
//     fetchBlockCount = () => {
//         firebase.database().ref("SignUpInComplete/" + this.props.phonenumberuser).on("value", snapshot => {
//             console.log("snapshot.val()", snapshot.val())
//             if (snapshot.val().BlockedCounter >= 3) {
//                 this.setState({
//                     BlockedCounter: snapshot.val().BlockedCounter,
//                     Blocked: true
//                 })
//             }
//             else {
//                 this.setState({
//                     BlockedCounter: snapshot.val().BlockedCounter,
//                     Blocked: false
//                 })
//             }

//         })
//     }

//     componentDidMount() {

        
        
//             this.props.navigation.addListener('willFocus', async () =>{
//                 this.interval = setInterval(() => {
//                     console.log("refreshing");
//                     this.fetchfromDB()
//                     // this.setState({
//                     //     time: Date.now(),
//                     //     isLoading: false,
//                     // })
//                     // this.props.navigation.state.params.phonenumber = null
        
//                 }, 3000);
//              });
//             this.props.navigation.addListener('willBlur', () => {
//                 clearInterval(this.interval)
//             });
        


//         //def. of promise first 
//         var fetchMessage = new Promise((resolve, reject) => {
//             var fetchedAno = []
//             firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/").on("value", snapshot => {
//                 snapshot.forEach((data) => {
//                     fetchedAno.push(data.val())
//                 });
//                 if (fetchedAno)
//                     resolve(fetchedAno)
//                 else
//                     reject("no data")
//             })
//         })//end of defination of promise first


//         fetchMessage.then(fetchedAno => {
//             // console.log("fetchedAno", fetchedAno)

//             //def. of promise two
//             var fetchMessage1 = new Promise((resolve, reject) => {
//                 var fetchedven = []
//                 var fetchedAnoven = []
//                 firebase.database().ref("ChatsUnderYou/vendors/" + this.props.phonenumberuser + "/").on("value", snapshot => {
//                     snapshot.forEach((data) => {
//                         fetchedven.push(data.val())
//                     });
//                     fetchedAnoven.push(...fetchedAno, ...fetchedven)
//                     if (fetchedAnoven)
//                         resolve(fetchedAnoven)
//                     else
//                         reject("no data")
//                 })
//             })//end of def. of promise two

//             fetchMessage1.then(fetchedAnoven => {
//                 // console.log("fetchedAnoven", fetchedAnoven)

//                 //def. of promise three
//                 var fetchMessage2 = new Promise((resolve, reject) => {
//                     var fetchedAlert = []
//                     var fetchedAll = []
//                     firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/").on("value", snapshot => {
//                         snapshot.forEach((data) => {
//                             fetchedAlert.push(data.val())
//                         });
//                         fetchedAll.push(...fetchedAnoven, ...fetchedAlert)
//                         if (fetchedAll)
//                             resolve(fetchedAll)
//                         else
//                             reject("no data")
//                     })
//                 })//end of def. of promise three

//                 fetchMessage2.then(fetchedAll => {
//                     // console.log("fetchedAll", fetchedAll)
//                     fetchedAll.sort(function (a, b) {
//                         return -(a.timestamp - b.timestamp)
//                     })
//                     console.log("fetchedAllSort", fetchedAll)
//                     this.arrayholder = fetchedAll

//                     //gets the block counter value for the particular user
//                     this.fetchBlockCount();

//                     this.setState({
//                         display: true,
//                         chats: fetchedAll
//                     })
//                 })
//             })
//         })
//     }

    
    
//     componentWillUnmount() {
//         console.log("UNMOUNTING")
//         clearInterval(this.interval);
//     }

//     componentMount = () => {
//         // if(this.props.navigation.state.params.phonenumber!=null){
//         // console.log(this.props.navigation.state.params.name)
//         // console.log(this.props.navigation.state.params.phonenumber)
//         // console.log(this.props.navigation.state.params.description)
//         var phonenumber = null
//         const { navigation } = this.props;
//         phonenumber = navigation.getParam('phonenumber', null);
//         // phonenumber = this.props.navigation.state.params.phonenumber
//         // console.log(phonenumber, this.state.chats)
//         // var appenddata = new Promise((resolve, reject) => {
//         if (phonenumber != null) {
//             var c = 0
//             if (this.state.chats.length != 0) {
//                 // console.log(this.state.chats[0].phonenumber)
//                 this.state.chats.forEach(chat => {
//                     if (chat.category == "shops") {
//                         if (chat.phonenumber == this.props.navigation.state.params.phonenumber) {
//                             // console.log("Im in")
//                             c++;
//                         }
//                     }
//                     else {
//                         if (chat.alerttimestamp == this.props.navigation.state.params.timestamp) {
//                             // console.log("Im in")
//                             c++;
//                         }
//                     }

//                 })
//             }
//             // console.log(c)
//             if (c == 0 && this.props.navigation.state.params.phonenumber != null) {
//                 // console.log("asjgdjhasgdh")
//                 // console.log(this.props.navigation.state.params.category)
//                 if (this.props.navigation.state.params.category == "Emotional Support") {
//                     firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).set({
//                         name: this.props.navigation.state.params.name,
//                         description: this.props.navigation.state.params.description,
//                         phonenumber: this.props.navigation.state.params.phonenumber,
//                         category: this.props.navigation.state.params.category,
//                         counter: 0,
//                         timestamp: 0,
//                         alerttimestamp: this.props.navigation.state.params.timestamp,
//                         isBlocked: false,
//                         isDone: false,
//                         softDelete: false,
//                     }).then(() => {
//                         firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.navigation.state.params.phonenumber + "/" + this.props.phonenumberuser + "," + this.props.navigation.state.params.timestamp).set({
//                             name: this.props.navigation.state.params.name,
//                             description: this.props.navigation.state.params.description,
//                             phonenumber: this.props.phonenumberuser,
//                             category: this.props.navigation.state.params.category,
//                             counter: 0,
//                             timestamp: 0,
//                             alerttimestamp: this.props.navigation.state.params.timestamp,
//                             isBlocked: false,
//                             isDone: false,
//                             softDelete:false,
//                         }).then(() => {
//                             this.props.navigation.state.params.description = this.props.navigation.state.params.description + "(Group Desciption)";
//                             let ciphertext = this.encode('U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=',this.props.navigation.state.params.description);
//                             const text = ciphertext
//                             const message = {
//                                 text,
//                                 user: {
//                                     _id: this.props.navigation.state.params.phonenumber,
//                                     name: this.props.navigation.state.params.name,
//                                 },
//                                 timestamp: this.props.navigation.state.params.timestamp,
//                             };
//                             if (this.props.phonenumberuser > this.props.navigation.state.params.phonenumber) {
//                                 var x = this.props.phonenumberuser + ',' + this.props.navigation.state.params.phonenumber;
//                             } else {
//                                 var x = this.props.navigation.state.params.phonenumber + ',' + this.props.phonenumberuser;
//                             }
//                             firebase.database().ref('OneToOneAnonymous/' + x + "," + this.props.navigation.state.params.timestamp + '/').push(message);
//                             this.setState({
//                                 // callFetch:true
//                                 isLoading: false
//                             })
//                         })
//                     })
//                 }
//                 else if (this.props.navigation.state.params.category == "shops") {
//                     firebase.database().ref("ChatsUnderYou/vendors/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber).set({
//                         name: this.props.navigation.state.params.name,
//                         description: this.props.navigation.state.params.description,
//                         phonenumber: this.props.navigation.state.params.phonenumber,
//                         category: this.props.navigation.state.params.category,
//                         counter: 0,
//                         timestamp: 0,
//                     }).then(() => {
//                         firebase.database().ref("ChatsUnderYou/vendors/" + this.props.navigation.state.params.phonenumber + "/" + this.props.phonenumberuser).set({
//                             name: this.props.navigation.state.params.name,
//                             description: this.props.navigation.state.params.description,
//                             phonenumber: this.props.phonenumberuser,
//                             category: this.props.navigation.state.params.category,
//                             counter: 0,
//                             timestamp: 0,
//                         }).then(() => {
//                             this.setState({
//                                 // callFetch:true
//                                 isLoading: false
//                             })
//                         })
//                     })
//                 }
//                 else {
//                     firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).set({
//                         name: this.props.navigation.state.params.name,
//                         description: this.props.navigation.state.params.description,
//                         phonenumber: this.props.navigation.state.params.phonenumber,
//                         category: this.props.navigation.state.params.category,
//                         counter: 0,
//                         timestamp: 0,
//                         alerttimestamp: this.props.navigation.state.params.timestamp,
//                         softDelete:false,
//                     }).then(() => {
//                         this.props.navigation.state.params.description = this.props.navigation.state.params.description + "(Group Desciption)";
//                         let ciphertext = this.encode('U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=',this.props.navigation.state.params.description);
//                         const text = ciphertext
//                         const message = {
//                             text,
//                             user: {
//                                 _id: this.props.navigation.state.params.phonenumber,
//                                 name: this.props.navigation.state.params.name,
//                             },
//                             timestamp: this.props.navigation.state.params.timestamp,
//                         };
//                         firebase.database().ref('chatroom/' + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + '/').push(message);
//                         this.setState({
//                             // callFetch:true
//                             isLoading: false
//                         })
//                     }).then(()=>{
//                         firebase.database().ref("Participants/"+ this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + "/" + this.props.phonenumberuser+"/").set({
//                             owner:"false",
//                             category:this.props.navigation.state.params.category,
//                             Ownername: this.props.nameuser,
//                             name:this.props.navigation.state.params.name,
//                             description: this.props.navigation.state.params.description,
//                             phonenumber: this.props.navigation.state.params.phonenumber,
//                             alerttimestamp: this.props.navigation.state.params.timestamp,
//                             counter:0,
//                             timestamp: 0,
//                             phonenumberuser: this.props.phonenumberuser,
//                         })
//                     })
//                 }
//             }
//         }
//     }
//     SearchFilterFunction(text) {
//         //passing the inserted text in textinput
//         console.log("text",text)
//         this.newData = this.arrayholder.filter(function (item) {
//             console.log("item",item)
//             if(item.category != "Emotional Support"){
//             //applying filter for the inserted text in search bar
//             const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
//             const textData = text.toUpperCase();
//             return itemData.indexOf(textData) > -1;}
//         });
//         this.setState({
//             //setting the filtered newData on datasource
//             //After setting the data it will automatically re-render the view
//             chats: this.newData,
//             text: text,
//         });
//         console.log("this.newData",this.newData)
//     }

//     deletekeys = (item) => {
//         // console.log("inside del function\n");
//         // console.log("item", item)
//         if (this.props.phonenumberuser > item.phonenumber) {
//             var x = this.props.phonenumberuser + ',' + item.phonenumber;
//             firebase.database().ref("OneToOneAnonymous/" + x + ',' + item.alerttimestamp).remove()
//         } else {
//             var x = item.phonenumber + ',' + this.props.phonenumberuser;
//             firebase.database().ref("OneToOneAnonymous/" + x + ',' + item.alerttimestamp).remove()
//         }
//         firebase.database().ref("ChatsUnderYou/Anonymous/" + item.phonenumber + "/" + this.props.phonenumberuser + "," + item.alerttimestamp).remove()
//         firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + item.phonenumber + "," + item.alerttimestamp).remove()
//     }
//     ListViewItemSeparator = () => {
//         //Item sparator view
//         return (
//             <View
//                 style={{
//                     height: hp('1%'),
//                     // width: '75%',
//                     borderBottomWidth: 0.25,
//                     // opacity:0.6,
//                     borderBottomColor: "grey",
//                     // marginLeft: wp('16%')
//                     // backgroundColor: '#080808',
//                     // position: "absolute"
//                     // borderLeftWidth:10
//                 }}
//             />
//         );
//     };
//     render() {
//         // var x=false
//         // try {
//         //      x=this.props.navigation.state.params.urgentRefresh
//         //      console.log("x = ",x);
              
//         // } catch (error) {
//         //      x=false
//         // }
//         // if(x==true){
//         //     this.interval = setTimeout(() => {
//         //         console.log("refreshing in render");
    
//         //         this.setState({
//         //             time: Date.now(),
//         //             isLoading: false,
//         //         })
//         //         // this.props.navigation.state.params.phonenumber = null
//         //         x=false
    
//         //     }, 1);
//         // }
//         if (this.state.display == true) {
//             { this.componentMount() }
//             if (this.state.isLoading == false) {
//                 {
//                     this.fetchfromDB()
//                     // this.youralert()
//                 }
//                 return null
//             }
//             else {
//                 return (
//                     <View style={{ flex: 1 }}>
//                                                 {/* <AnonymousDrawer /> */}

//                         <View style={styles.upperContainer}>
//                             <View style={{ flex: 1, flexDirection: 'row', marginLeft: wp("4%") }}>
//                                 <View style={{ flex: 0.6 }}>
//                                     <Text style={{ marginLeft: wp('6%'), fontSize: 24, color: "white", fontWeight: "bold" }}>
//                                         Message
//                                     </Text>
//                                 </View>
//                                 {/* <View style={{ justifyContent: 'center'}}>
//                 <AnonymousDrawer />
//             </View> */}
//                             </View>
//                         </View> 
//                         <View style={styles.lowerContainer}>
//                             {/* {this.state.text ? */}
//                                 {/* this.renderForSearchActive() */}
//                                          {/* <View style={{ justifyContent: 'center'}}>
//                 <AnonymousDrawer />
//             </View> */}

                              

//                                 <View style={{ flex: 1, backgroundColor: "#fff" }}>
//                                     <View style={{ flex: 0.12 }}>
//                                         <TextInput
//                                             style={styles.textInputStyle}
//                                             onChangeText={(text) => {
//                                                 this.SearchFilterFunction(text)
//                                                 this.setState({
//                                                     showFlatList: true,
//                                                 },()=>{
//                                                     if (this.state.text == "") {
//                                                         this.setState({
//                                                             showFlatList:false,
//                                                             chats:this.arrayholder
//                                                         })
//                                                     }
//                                                 }) 
//                                             }}
//                                             placeholderTextColor="#0290ea"
//                                             value={this.state.text}
//                                             underlineColorAndroid="transparent"
//                                             placeholder="Search ..."
//                                         />
//                                         {/* initially dataSource is kept empty and then as search element are found they are added in it.  */}

//                                     </View>
//                                     <View style={{ flex: 0.88 ,marginBottom:hp("9%")}}>
//                                         <View style={{ width: wp('100%'), marginLeft: wp('2%') }}>
//                                             {/* {this.state.your ? <View>
//                                     <TouchableOpacity onPress={()=>{
//                                                     // console.log(item.phonenumber,item.name,item.description)
//                                                     this.props.navigation.navigate('ChatScreen',{phonenumber:this.props.phonenumberuser})}} style={{ borderBottomWidth: 0.25,
//                                                         // opacity:0.6,
//                                                         paddingBottom: hp("1%"),
//                                                         borderBottomColor: "grey",}}>
//                                                     <View style={styles.renderChatsName1}>
//                                                         <Image source={require("../assets/chatIcon.png")} />
//                                                         <Text style={styles.textStyle}>Myself</Text>
//                                                     </View>
//                                                 </TouchableOpacity>
//                                         </View> : <View/>} */}
//                                             <View>
//                                                 <FlatList
//                                                     data={this.state.chats}
//                                                     // ItemSeparatorComponent={this.ListViewItemSeparator}
//                                                     renderItem={({ item }) => (
//                                                         <View>
//                                                             {/* {console.log("incremnet", i++)} */}
//                                                             {item.category == "Emotional Support" && this.state.showFlatList == false && item.softDelete==false ?
//                                                                 <View>
//                                                                     {this.state.Blocked == false  ?
//                                                                         <View style={styles.renderChatsName1}>
//                                                                             <TouchableOpacity onPress={() => {
//                                                                                 // console.log(item.phonenumber, item.name, item.description)
//                                                                                 if (this.props.phonenumberuser) {
//                                                                                     this.props.navigation.navigate('AnonymousChat', { phonenumber: item.phonenumber, c: 0, timestamp: item.alerttimestamp })
//                                                                                 }
//                                                                                 else {
//                                                                                     alert("Please fill details first!")
//                                                                                 }
//                                                                             }
//                                                                             }
//                                                                                 style={{ flexDirection: 'row', width: wp("80%") ,alignItems:'center'}}
//                                                                             >
//                                                                                 <View style={{marginRight:wp("5%")}}>
//                                                                                 <Image source={require("../assets/chatIcon.png")} />
//                                                                                 </View>
//                                                                                 <View style={{flexDirection:'column', borderBottomWidth: 0.25,
//                                                                                 borderBottomColor: "grey",height:hp("7%"),width:wp("70%")}}>
//                                                                                 <Text style={styles.textStyle}>Anonymous</Text>
//                                                                                 <Text style={{fontSize: 14}} numberOfLines={1} ellipsizeMode="tail">({item.description})</Text>
//                                                                                 </View>
//                                                                             </TouchableOpacity>
//                                                                             {/* <TouchableOpacity onPress={() => {
//                                                                                 Alert.alert(
//                                                                                     'Delete',
//                                                                                     'Are you sure you want to delete this chat?', [{
//                                                                                         text: 'Cancel',
//                                                                                         onPress: () => { console.log('Cancel Pressed') },
//                                                                                         style: 'cancel'
//                                                                                     }, {
//                                                                                         text: 'OK',
//                                                                                         onPress: () => {
//                                                                                             this.deletekeys(item)
//                                                                                         }
//                                                                                     },], {
//                                                                                     cancelable: false
//                                                                                 }
//                                                                                 )
//                                                                             }}>
//                                                                                 <Icon name="delete" size={30} color="#0091EA" style={{ marginRight: wp('2%') }} />
//                                                                             </TouchableOpacity> */}
//                                                                             {/* <Text>{item.counter}</Text> */}
//                                                                             {item.counter > 0 ?
//                                                                                     <View style={{width: wp("20%") ,alignItems:'center',justifyContent:"center", borderBottomWidth: 0.25,
//                                                                                     borderBottomColor: "grey",height:hp("7%")}}>
//                                                                                     <Badge
//                                                                                         value={"+" + item.counter}
//                                                                                     />
//                                                                                     </View>
//                                                                                     :

//                                                                                     <View style={{width: wp("20%") ,alignItems:'center', borderBottomWidth: 0.25,
//                                                                                     borderBottomColor: "grey",height:hp("7%")}}/>
//                                                                                 }
//                                                                         </View>
//                                                                         :
//                                                                         <TouchableOpacity onPress={() => {
//                                                                             // console.log(item.phonenumber, item.name, item.description)
//                                                                             alert("You have been blocked.")
//                                                                         }

//                                                                         }>

//                                                                             <View style={styles.renderChatsName1}>
//                                                                                 <Image source={require("../assets/chatIcon.png")} />
//                                                                                 <Text style={styles.textStyle}>Anonymous</Text>

//                                                                             </View>

//                                                                         </TouchableOpacity>

//                                                                     }
//                                                                 </View>
//                                                                 :
//                                                                 <View>
//                                                                 </View>
//                                                             }
//                                                             {item.category == "shops" ? <TouchableOpacity onPress={() => {
//                                                                 // console.log(item.phonenumber, item.name, item.description)
//                                                                 if (this.props.phonenumberuser) {
//                                                                     this.props.navigation.navigate('vendorChat', { phonenumber: item.phonenumber })
//                                                                 }
//                                                                 else {
//                                                                     alert("Please fill details first!")
//                                                                 }
//                                                             }}>

//                                                                 <View style={styles.renderChatsName}>
//                                                                     <Image source={require("../assets/chatIcon.png")} />
//                                                                     <Text style={styles.textStyle}>{item.name}</Text>
//                                                                     {/* {item.counter > 0 ? <Badge
//                                                                         value={"+" + item.counter}
//                                                                         containerStyle={{ position: 'absolute', right: 20 }}
//                                                                     /> : <View />} */}
//                                                                 </View>
//                                                                 {/* <View style={styles.renderChatsName}>
//                                                         <Image source={require("../assets/chatIcon.png")} />
//                                                         <Text style={styles.textStyle}>{item.name}</Text>
//                                                     </View> */}
//                                                             </TouchableOpacity> : <View></View>}
//                                                             {item.category == "food" && item.softDelete==false ? 

//                                                                 <View style={styles.renderChatsName1}>
//                                                                     <TouchableOpacity onPress={() => {
//                                                                 // console.log(item.phonenumber, item.name, item.description)
//                                                                 if (this.props.phonenumberuser) {
//                                                                     this.props.navigation.navigate('ChatScreen', { phonenumber: item.phonenumber, name: item.name, timestamp: item.alerttimestamp })
//                                                                 }
//                                                                 else {
//                                                                     alert("Please fill details first!")
//                                                                 }
//                                                             }}
//                                                             style={{ flexDirection: 'row', width: wp("80%") ,alignItems:'center'}}
//                                                             >
//                                                                 <View style={{marginRight:wp("5%")}}>
//                                                                     <Image source={require("../assets/chatIcon.png")} />
//                                                                     </View>
//                                                                     <View style={{flexDirection:'column', borderBottomWidth: 0.25,
//                                                                                 borderBottomColor: "grey",height:hp("7%"),width:wp("70%")}}>
//                                                         <Text style={styles.textStyle}>{item.name}</Text>
//                                                                                 <Text style={{fontSize: 14}} numberOfLines={1} ellipsizeMode="tail">({item.description})</Text>
//                                                                                 </View>
//                                                                     </TouchableOpacity>
//                                                                     {item.counter > 0 ?
//                                                                     <View style={{width: wp("20%") ,alignItems:'center',justifyContent:"center", borderBottomWidth: 0.25,
//                                                                     borderBottomColor: "grey",height:hp("7%")}}>
//                                                                                     <Badge
//                                                                                         value={"+" + item.counter}
//                                                                                     />
//                                                                         </View>
//                                                                                     :

//                                                                                     <View style={{width: wp("20%") ,alignItems:'center', borderBottomWidth: 0.25,
//                                                                                     borderBottomColor: "grey",height:hp("7%")}}/>
//                                                                                 }
//                                                                 </View>
//                                                             : <View></View>}
//                                                             {item.category == "other" && item.softDelete==false ? 

//                                                                 <View style={styles.renderChatsName1}>
//                                                                     <TouchableOpacity onPress={() => {
//                                                                 // console.log(item.phonenumber, item.name, item.description)
//                                                                 if (this.props.phonenumberuser) {
//                                                                     this.props.navigation.navigate('ChatScreen', { phonenumber: item.phonenumber, name: item.name, timestamp: item.alerttimestamp })
//                                                                 }
//                                                                 else {
//                                                                     alert("Please fill details first!")
//                                                                 }
//                                                             }}
//                                                             style={{ flexDirection: 'row', width: wp("80%") ,alignItems:'center'}}
//                                                             >
//                                                                 <View style={{marginRight:wp("5%")}}>
//                                                                     <Image source={require("../assets/chatIcon.png")} />
//                                                                     </View>
//                                                                     <View style={{flexDirection:'column', borderBottomWidth: 0.25,
//                                                                                 borderBottomColor: "grey",height:hp("7%"),width:wp("70%")}}>
//                                                         <Text style={styles.textStyle}>{item.name}</Text>
//                                                                                 <Text style={{fontSize: 14}} numberOfLines={1} ellipsizeMode="tail">({item.description})</Text>
//                                                                                 </View>
//                                                                     </TouchableOpacity>
//                                                                     {item.counter > 0 ?
//                                                                        <View style={{width: wp("20%") ,alignItems:'center',justifyContent:"center", borderBottomWidth: 0.25,
//                                                                        borderBottomColor: "grey",height:hp("7%")}}>
//                                                                                     <Badge
//                                                                                         value={"+" + item.counter}
//                                                                                     />
//                                                                         </View>
//                                                                                     :

//                                                                                     <View style={{width: wp("20%") ,alignItems:'center', borderBottomWidth: 0.25,
//                                                                                     borderBottomColor: "grey",height:hp("7%")}}/>
//                                                                                 }
//                                                                 </View>
//                                                                  : <View></View>}

//                                                         </View>
//                                                     )}
//                                                     enableEmptySections={true}
//                                                     style={{ marginTop: 10 }}
//                                                     keyExtractor={(item, index) => index}
//                                                 />
//                                             </View>
//                                         </View>
//                                     </View>
//                                 </View>
                            


//                         </View>

//                     </View>
//                 );
//             }
//         } else {
//             return null;
//         }
//     }
// }
// const mapStateToProps = (state) => {
//     // console.log(state)
//     return {
//         upload_status: state.textUpload,
//         nameuser: state.nameuser,
//         phonenumberuser: state.phonenumberuser,
//     }
// }

// export default connect(mapStateToProps)(ChatList)
// const styles = StyleSheet.create({
//     upperContainer: {
//         height:hp("9%"),
//         backgroundColor: "#0290ea",
//         alignItems: "center",
//         flexDirection: 'row',
//     },
//     lowerContainer: {
//         // flex: 0.9,
//         height:hp("91%"),
//         backgroundColor: "blue"
//     },

//     textStyle: {
//         // margin: wp('2%'),
//         fontSize: 16,
//         fontWeight:"bold"

//         // backgroundColor:"green"
//     },
//     textInputStyle: {
//         height: hp("6%"),
//         borderWidth: 1,
//         paddingLeft: 10,
//         borderColor: "#FFF",
//         backgroundColor: '#FFFFFF',
//         margin: wp('4%'),
//         borderRadius: 10,
//         elevation: 4
//     },
//     renderChatsName: {
//         flexDirection: "row",
//         borderLeftWidth: wp('1%'),
//         borderLeftColor: 'yellow',
//         padding: wp('2%'),
//         marginTop: hp('1%'),
//         alignItems: "center"
//     },
//     renderChatsName1: {
//         flexDirection: "row",
//         borderLeftWidth: wp('1%'),
//         borderLeftColor: 'red',
//         padding: wp('2%'),
//         marginTop: hp('1%'),
//         alignItems: "center",
//        height:hp("7%"),
//        marginBottom:hp("2%")
//     },
// });



import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput,
    ActivityIndicator,
    Alert,
    Image,
    TouchableOpacity, ScrollView
} from 'react-native';
import { Badge } from 'react-native-elements';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import * as firebase from 'firebase'
import { connect } from 'react-redux';
import CryptoJS from "react-native-crypto-js";
// import Icon from "react-native-vector-icons/MaterialIcons"
import {_} from 'lodash';
import Icon from "react-native-vector-icons/MaterialIcons"


// import AnonymousDrawer from '../Components/AnonymousDrawer'

import { resolve, format } from 'url';
// import { ScrollView } from 'react-native-gesture-handler';
class ChatList extends Component {
    b64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            text: '',
            searchActive: false,
            chats: null,
            callFetch: false,
            display: false,
            your: false,
            BlockedCounter: 0,
            Blocked: false,
            showFlatList:false
        };
        this.arrayholder = null;
        this.newData = []
        this.alertarr = null
        this.getcolor = false
        this.interval
        this.myTextInput = React.createRef();


        // this.newData
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

    //child added listener for firebase
    on = callback =>
        firebase.database().ref("alertsUnderYou/" + this.props.phonenumberuser + "/").limitToLast(1).on('child_added', snapshot => {
            callback(
                this.setState({ isLoading: true })
            )
            // console.log("Hey i am")
        }
        );



    // youralert = () => {
    //     var alertyour = new Promise (( resolve,reject) => {
    //         firebase.database().ref("chatroom/").on("value", snapshot => {
    //             // console.log("zhgxcjhgaskusdbqwkhdqwoidhq",Object.keys(snapshot.val()))
    //             var arr= []
    //             if(snapshot.val()){
    //             arr = Object.keys(snapshot.val())
    //             for(var i=0;i<arr.length;i++)
    //             {
    //                 if(arr[i] == this.props.phonenumberuser){
    //                     resolve(true)
    //                 }
    //             }
    //             reject(false)}
    //         })
    //     })
    //     alertyour.then(val => {
    //         console.log(val)
    //         this.setState({
    //             your: val
    //         })
    //     })
    // }

    // isEqual = (obj1,obj2) => {
    //     console.log("sahgdahs")
    // }

    fetchfromDB = () => {
        console.log("ahgdsh")
        var fetchMessage = new Promise((resolve, reject) => {
            var fetchedAlert = []

            firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/").on("value", snapshot => {
                //key = number,timestamp
                snapshot.forEach((data) => {
                    fetchedAlert.push(data.val())
                });
            })

            firebase.database().ref("ChatsUnderYou/vendors/" + this.props.phonenumberuser + "/").on("value", snapshot => {
                snapshot.forEach((data) => {
                    fetchedAlert.push(data.val())
                });

            })
            firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/").on("value", snapshot => {
                snapshot.forEach((data) => {
                    fetchedAlert.push(data.val())
                });
                // if (fetchedAlert)
                //     resolve(fetchedAlert)
                // else
                //     reject("no data")
            })
            if (fetchedAlert)
                resolve(fetchedAlert)
            else
                reject("no data")
        })
        fetchMessage.then((s) => {
            // console.log("fetchedalert= ", s)
            s.sort(function (a, b) {
                return -(a.timestamp - b.timestamp)
            })
            for(var i=0;i<s.length;i++){
            var s1 = new Date(s[i].timestamp);
            // var s2 = formatDate(s1,"DD.MM.YY HH:mm")
            if(s1.getHours() > 12){
                var hour = Number(s1.getHours())-12;
                console.log(hour,"hour1")
                if(Number(s1.getMinutes()) < 10 && hour > 9){
                    var s2 = s1.getDate() + "/" + s1.getMonth() + "/" + s1.getFullYear() + "  " + hour +".0"+s1.getMinutes() + "pm"
                }
                else if(Number(s1.getMinutes()) > 9 && hour < 10){
                    var s2 = s1.getDate() + "/" + s1.getMonth() + "/" + s1.getFullYear() + "  0" + hour +"."+s1.getMinutes() + "pm"
                }
                else if(Number(s1.getMinutes()) < 10 && hour < 10){
                    var s2 = s1.getDate() + "/" + s1.getMonth() + "/" + s1.getFullYear() + "  0" + hour +".0"+s1.getMinutes() + "pm"
                }
                else{
                    var s2 = s1.getDate() + "/" + s1.getMonth() + "/" + s1.getFullYear() + "  " + hour +"."+s1.getMinutes() + "pm"
                }
                console.log("s[1]",s2)
                s[i].timestamp = s2
            }
            else{
                // hour = s1.getHours()-12;
                var hour = Number(s1.getHours());
                if(Number(s1.getMinutes()) < 10 && hour > 9){
                    var s2 = s1.getDate() + "/" + s1.getMonth() + "/" + s1.getFullYear() + "  " + hour +".0"+s1.getMinutes() + "am"
                }
                else if(Number(s1.getMinutes()) > 9 && hour < 10){
                    var s2 = s1.getDate() + "/" + s1.getMonth() + "/" + s1.getFullYear() + "  0" + hour +"."+s1.getMinutes() + "am"
                }
                else if(Number(s1.getMinutes()) < 10 && hour < 10){
                    var s2 = s1.getDate() + "/" + s1.getMonth() + "/" + s1.getFullYear() + "  0" + hour +".0"+s1.getMinutes() + "am"
                }
                else{
                    var s2 = s1.getDate() + "/" + s1.getMonth() + "/" + s1.getFullYear() + "  " + hour +"."+s1.getMinutes() + "am"
                }
                console.log("s[1]",s2)
                s[i].timestamp = s2
            }
        }
            // var s2 = s1.getDate() + "/" + s1.getMonth() + "/" + s1.getFullYear() + " " + s1.getHours()+"."+s1.getMinutes()
                // console.log("s[1]",s2)
            //     this.setState({
            //         isLoading: true,
            //         // display:false,
            //         chats: s
            //     })
            //     for(var i= 0;i<this.state.chats.length;i++){
            //         this.isEqual(s[i],this.state.chats[i])
            //     }
            // }else{
            this.setState({
                isLoading: true,
                // display:false,
                chats: s
            })
        // }
            console.log(this.state.isLoading)
        }).catch((err) => {

        })
    }



    //function def. for fetching the blocked counter state of the current user
    fetchBlockCount = () => {
        firebase.database().ref("SignUpInComplete/" + this.props.phonenumberuser).on("value", snapshot => {
            console.log("snapshot.val()", snapshot.val())
            if (snapshot.val().BlockedCounter >= 3) {
                this.setState({
                    BlockedCounter: snapshot.val().BlockedCounter,
                    Blocked: true
                })
            }
            else {
                this.setState({
                    BlockedCounter: snapshot.val().BlockedCounter,
                    Blocked: false
                })
            }

        })
    }

    componentDidMount() {

        
        
            this.props.navigation.addListener('willFocus', async () =>{
                this.interval = setInterval(() => {
                    console.log("refreshing");
                    this.fetchfromDB()
                    // this.setState({
                    //     time: Date.now(),
                    //     isLoading: false,
                    // })
                    // this.props.navigation.state.params.phonenumber = null
        
                }, 3000);
             });
            this.props.navigation.addListener('willBlur', () => {
                clearInterval(this.interval)
            });
        


        //def. of promise first 
        var fetchMessage = new Promise((resolve, reject) => {
            var fetchedAno = []
            firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/").on("value", snapshot => {
                snapshot.forEach((data) => {
                    fetchedAno.push(data.val())
                });
                if (fetchedAno)
                    resolve(fetchedAno)
                else
                    reject("no data")
            })
        })//end of defination of promise first


        fetchMessage.then(fetchedAno => {
            // console.log("fetchedAno", fetchedAno)

            //def. of promise two
            var fetchMessage1 = new Promise((resolve, reject) => {
                var fetchedven = []
                var fetchedAnoven = []
                firebase.database().ref("ChatsUnderYou/vendors/" + this.props.phonenumberuser + "/").on("value", snapshot => {
                    snapshot.forEach((data) => {
                        fetchedven.push(data.val())
                    });
                    fetchedAnoven.push(...fetchedAno, ...fetchedven)
                    if (fetchedAnoven)
                        resolve(fetchedAnoven)
                    else
                        reject("no data")
                })
            })//end of def. of promise two

            fetchMessage1.then(fetchedAnoven => {
                // console.log("fetchedAnoven", fetchedAnoven)

                //def. of promise three
                var fetchMessage2 = new Promise((resolve, reject) => {
                    var fetchedAlert = []
                    var fetchedAll = []
                    firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/").on("value", snapshot => {
                        snapshot.forEach((data) => {
                            fetchedAlert.push(data.val())
                        });
                        fetchedAll.push(...fetchedAnoven, ...fetchedAlert)
                        if (fetchedAll)
                            resolve(fetchedAll)
                        else
                            reject("no data")
                    })
                })//end of def. of promise three

                fetchMessage2.then(fetchedAll => {
                    // console.log("fetchedAll", fetchedAll)
                    fetchedAll.sort(function (a, b) {
                        return -(a.timestamp - b.timestamp)
                    })
                    // for(var i=0;i<fetchedAll.length;i++){
                    //     var s1 = new Date(fetchedAll[i].timestamp);
                    //     // var s2 = formatDate(s1,"DD.MM.YY HH:mm")
                    //     if(s1.getHours() > 12){
                    //         var hour = Number(s1.getHours())-12;
                    //         console.log(hour,"hour1")
                    //         var s2 = s1.getDate() + "/" + s1.getMonth() + "/" + s1.getFullYear() + " " + hour +"."+s1.getMinutes() + "pm"
                    //         console.log("s[1]",s2)
                    //         s[i].timestamp = s2
                    //     }
                    //     else{
                    //         // hour = s1.getHours()-12;
                    //         var s2 = s1.getDate() + "/" + s1.getMonth() + "/" + s1.getFullYear() + " " + s1.getHours() +"."+s1.getMinutes() + "am"
                    //         console.log("s[1]",s2)
                    //         s[i].timestamp = s2
                    //     }
                    // }
                    console.log("fetchedAllSort", fetchedAll)
                    this.arrayholder = fetchedAll

                    //gets the block counter value for the particular user
                    this.fetchBlockCount();

                    this.setState({
                        display: true,
                        chats: fetchedAll
                    })
                })
            })
        })
    }

    
    
    componentWillUnmount() {
        console.log("UNMOUNTING")
        clearInterval(this.interval);
    }

    componentMount = () => {
        // if(this.props.navigation.state.params.phonenumber!=null){
        // console.log(this.props.navigation.state.params.name)
        // console.log(this.props.navigation.state.params.phonenumber)
        // console.log(this.props.navigation.state.params.description)
        var phonenumber = null
        const { navigation } = this.props;
        phonenumber = navigation.getParam('phonenumber', null);
        // phonenumber = this.props.navigation.state.params.phonenumber
        // console.log(phonenumber, this.state.chats)
        // var appenddata = new Promise((resolve, reject) => {
        if (phonenumber != null) {
            var c = 0
            if (this.state.chats.length != 0) {
                // console.log(this.state.chats[0].phonenumber)
                this.state.chats.forEach(chat => {
                    if (chat.category == "shops") {
                        if (chat.phonenumber == this.props.navigation.state.params.phonenumber) {
                            // console.log("Im in")
                            c++;
                        }
                    }
                    else {
                        if (chat.alerttimestamp == this.props.navigation.state.params.timestamp) {
                            // console.log("Im in")
                            c++;
                        }
                    }

                })
            }
            // console.log(c)
            if (c == 0 && this.props.navigation.state.params.phonenumber != null) {
                // console.log("asjgdjhasgdh")
                // console.log(this.props.navigation.state.params.category)
                if (this.props.navigation.state.params.category == "Emotional Support") {
                    firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).set({
                        name: this.props.navigation.state.params.name,
                        description: this.props.navigation.state.params.description,
                        phonenumber: this.props.navigation.state.params.phonenumber,
                        category: this.props.navigation.state.params.category,
                        counter: 0,
                        timestamp: 0,
                        alerttimestamp: this.props.navigation.state.params.timestamp,
                        isBlocked: false,
                        isDone: false,
                        softDelete: false,
                    }).then(() => {
                        firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.navigation.state.params.phonenumber + "/" + this.props.phonenumberuser + "," + this.props.navigation.state.params.timestamp).set({
                            name: this.props.navigation.state.params.name,
                            description: this.props.navigation.state.params.description,
                            phonenumber: this.props.phonenumberuser,
                            category: this.props.navigation.state.params.category,
                            counter: 0,
                            timestamp: 0,
                            alerttimestamp: this.props.navigation.state.params.timestamp,
                            isBlocked: false,
                            isDone: false,
                            softDelete:false,
                        }).then(() => {
                            this.props.navigation.state.params.description = this.props.navigation.state.params.description + "(Group Desciption)";
                            let ciphertext = this.encode('U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=',this.props.navigation.state.params.description);
                            const text = ciphertext
                            const message = {
                                text,
                                user: {
                                    _id: this.props.navigation.state.params.phonenumber,
                                    name: this.props.navigation.state.params.name,
                                },
                                timestamp: this.props.navigation.state.params.timestamp,
                            };
                            if (this.props.phonenumberuser > this.props.navigation.state.params.phonenumber) {
                                var x = this.props.phonenumberuser + ',' + this.props.navigation.state.params.phonenumber;
                            } else {
                                var x = this.props.navigation.state.params.phonenumber + ',' + this.props.phonenumberuser;
                            }
                            firebase.database().ref('OneToOneAnonymous/' + x + "," + this.props.navigation.state.params.timestamp + '/').push(message);
                            this.setState({
                                // callFetch:true
                                isLoading: false
                            })
                        })
                    })
                }
                else if (this.props.navigation.state.params.category == "shops") {
                    firebase.database().ref("ChatsUnderYou/vendors/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber).set({
                        name: this.props.navigation.state.params.name,
                        description: this.props.navigation.state.params.description,
                        phonenumber: this.props.navigation.state.params.phonenumber,
                        category: this.props.navigation.state.params.category,
                        counter: 0,
                        timestamp: 0,
                    }).then(() => {
                        firebase.database().ref("ChatsUnderYou/vendors/" + this.props.navigation.state.params.phonenumber + "/" + this.props.phonenumberuser).set({
                            name: this.props.navigation.state.params.name,
                            description: this.props.navigation.state.params.description,
                            phonenumber: this.props.phonenumberuser,
                            category: this.props.navigation.state.params.category,
                            counter: 0,
                            timestamp: 0,
                        }).then(() => {
                            this.setState({
                                // callFetch:true
                                isLoading: false
                            })
                        })
                    })
                }
                else {
                    firebase.database().ref("ChatsUnderYou/alerts/" + this.props.phonenumberuser + "/" + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp).set({
                        name: this.props.navigation.state.params.name,
                        description: this.props.navigation.state.params.description,
                        phonenumber: this.props.navigation.state.params.phonenumber,
                        category: this.props.navigation.state.params.category,
                        counter: 0,
                        timestamp: 0,
                        alerttimestamp: this.props.navigation.state.params.timestamp,
                        softDelete:false,
                    }).then(() => {
                        this.props.navigation.state.params.description = this.props.navigation.state.params.description + "(Group Desciption)";
                        let ciphertext = this.encode('U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=',this.props.navigation.state.params.description);
                        const text = ciphertext
                        const message = {
                            text,
                            user: {
                                _id: this.props.navigation.state.params.phonenumber,
                                name: this.props.navigation.state.params.name,
                            },
                            timestamp: this.props.navigation.state.params.timestamp,
                        };
                        firebase.database().ref('chatroom/' + this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + '/').push(message);
                        this.setState({
                            // callFetch:true
                            isLoading: false
                        })
                    }).then(()=>{
                        firebase.database().ref("Participants/"+ this.props.navigation.state.params.phonenumber + "," + this.props.navigation.state.params.timestamp + "/" + this.props.phonenumberuser+"/").set({
                            owner:"false",
                            category:this.props.navigation.state.params.category,
                            Ownername: this.props.nameuser,
                            name:this.props.navigation.state.params.name,
                            description: this.props.navigation.state.params.description,
                            phonenumber: this.props.navigation.state.params.phonenumber,
                            alerttimestamp: this.props.navigation.state.params.timestamp,
                            counter:0,
                            timestamp: 0,
                            phonenumberuser: this.props.phonenumberuser,
                        })
                    })
                }
            }
        }
    }
    SearchFilterFunction(text) {
        //passing the inserted text in textinput
        console.log("text",text)
        this.newData = this.arrayholder.filter(function (item) {
            console.log("item",item)
            if(item.category != "Emotional Support"){
            //applying filter for the inserted text in search bar
            const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;}
        });
        this.setState({
            //setting the filtered newData on datasource
            //After setting the data it will automatically re-render the view
            chats: this.newData,
            text: text,
        });
        console.log("this.newData",this.newData)
    }

    deletekeys = (item) => {
        // console.log("inside del function\n");
        // console.log("item", item)
        if (this.props.phonenumberuser > item.phonenumber) {
            var x = this.props.phonenumberuser + ',' + item.phonenumber;
            firebase.database().ref("OneToOneAnonymous/" + x + ',' + item.alerttimestamp).remove()
        } else {
            var x = item.phonenumber + ',' + this.props.phonenumberuser;
            firebase.database().ref("OneToOneAnonymous/" + x + ',' + item.alerttimestamp).remove()
        }
        firebase.database().ref("ChatsUnderYou/Anonymous/" + item.phonenumber + "/" + this.props.phonenumberuser + "," + item.alerttimestamp).remove()
        firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + item.phonenumber + "," + item.alerttimestamp).remove()
    }
    ListViewItemSeparator = () => {
        //Item sparator view
        return (
            <View
                style={{
                    height: hp('1%'),
                    // width: '75%',
                    borderBottomWidth: 0.25,
                    // opacity:0.6,
                    borderBottomColor: "grey",
                    // marginLeft: wp('16%')
                    // backgroundColor: '#080808',
                    // position: "absolute"
                    // borderLeftWidth:10
                }}
            />
        );
    };
    render() {
        // var x=false
        // try {
        //      x=this.props.navigation.state.params.urgentRefresh
        //      console.log("x = ",x);
              
        // } catch (error) {
        //      x=false
        // }
        // if(x==true){
        //     this.interval = setTimeout(() => {
        //         console.log("refreshing in render");
    
        //         this.setState({
        //             time: Date.now(),
        //             isLoading: false,
        //         })
        //         // this.props.navigation.state.params.phonenumber = null
        //         x=false
    
        //     }, 1);
        // }
        if (this.state.display == true) {
            { this.componentMount() }
            if (this.state.isLoading == false) {
                {
                    this.fetchfromDB()
                    // this.youralert()
                }
                return null
            }
            else {
                return (
                    <View style={{ flex: 1 }}>
                                                {/* <AnonymousDrawer /> */}

                        <View style={styles.upperContainer}>
                            <View style={{ flex: 1, flexDirection: 'row', marginLeft: wp("4%") }}>
                                <View style={{ flex: 0.6 }}>
                                    <Text style={{ marginLeft: wp('6%'), fontSize: 24, color: "white", fontWeight: "bold" }}>
                                        Message
                                    </Text>
                                </View>
                                {/* <View style={{ justifyContent: 'center'}}>
                <AnonymousDrawer />
            </View> */}
                            </View>
                        </View> 
                        <View style={styles.lowerContainer}>
                            {/* {this.state.text ? */}
                                {/* this.renderForSearchActive() */}
                                         {/* <View style={{ justifyContent: 'center'}}>
                <AnonymousDrawer />
            </View> */}

                              

                                <View style={{ flex: 1, backgroundColor: "#fff" }}>
                                    <View style={{marginTop:hp("3%"),flexDirection:'row',borderColor: 'grey',
        borderWidth: 1,
        opacity: .6,
        borderRadius: 10,height:hp("6.3%"),marginLeft: wp('4%'),marginRight:wp("4%"),marginBottom:hp("2%")}}>
                                        <TextInput
                                        ref={this.myTextInput}
                                            style={styles.textInputStyle}
                                            onChangeText={(text) => {
                                                this.SearchFilterFunction(text)
                                                this.setState({
                                                    showFlatList: true,
                                                },()=>{
                                                    if (this.state.text == "") {
                                                        this.setState({
                                                            showFlatList:false,
                                                            chats:this.arrayholder
                                                        })
                                                    }
                                                }) 
                                            }}
                                            placeholderTextColor="#0290ea"
                                            value={this.state.text}
                                            underlineColorAndroid="transparent"
                                            placeholder="Search ..."
                                        />
                                         <TouchableOpacity onPress={() => {
                        this.setState({
                            text : "",
                            showFlatList:false,
                            chats:this.arrayholder
                        })
                        
                    }} style={{alignItems:'center',justifyContent:'center',marginRight:wp("10%")}}>
                    <Icon name="clear" size={25} color="#0290ea"/>
                    </TouchableOpacity>
                                        {/* initially dataSource is kept empty and then as search element are found they are added in it.  */}

                                    </View>
                                    <View style={{ flex: 0.88 ,marginBottom:hp("1%")}}>
                                        <View style={{ width: wp('100%'), marginLeft: wp('2%') }}>
                                            {/* {this.state.your ? <View>
                                    <TouchableOpacity onPress={()=>{
                                                    // console.log(item.phonenumber,item.name,item.description)
                                                    this.props.navigation.navigate('ChatScreen',{phonenumber:this.props.phonenumberuser})}} style={{ borderBottomWidth: 0.25,
                                                        // opacity:0.6,
                                                        paddingBottom: hp("1%"),
                                                        borderBottomColor: "grey",}}>
                                                    <View style={styles.renderChatsName1}>
                                                        <Image source={require("../assets/chatIcon.png")} />
                                                        <Text style={styles.textStyle}>Myself</Text>
                                                    </View>
                                                </TouchableOpacity>
                                        </View> : <View/>} */}
                                            <View>
                                                <FlatList
                                                    data={this.state.chats}
                                                    // ItemSeparatorComponent={this.ListViewItemSeparator}
                                                    renderItem={({ item }) => (
                                                        <View>
                                                            {/* {console.log("incremnet", i++)} */}
                                                            {item.category == "Emotional Support" && this.state.showFlatList == false && item.softDelete==false ?
                                                                <View>
                                                                    {this.state.Blocked == false  ?
                                                                        <View style={styles.renderChatsName1}>
                                                                            <TouchableOpacity onPress={() => {
                                                                                // console.log(item.phonenumber, item.name, item.description)
                                                                                if (this.props.phonenumberuser) {
                                                                                    this.props.navigation.navigate('AnonymousChat', { phonenumber: item.phonenumber, c: 0, timestamp: item.alerttimestamp })
                                                                                }
                                                                                else {
                                                                                    alert("Please fill details first!")
                                                                                }
                                                                            }
                                                                            }
                                                                                style={{ flexDirection: 'row', width: wp("60%") ,alignItems:'center'}}
                                                                            >
                                                                                <View style={{marginRight:wp("5%")}}>
                                                                                <Image source={require("../assets/chatIcon.png")} />
                                                                                </View>
                                                                                <View style={{flexDirection:'column', borderBottomWidth: 0.25,
                                                                                borderBottomColor: "grey",height:hp("7%"),width:wp("70%")}}>
                                                                                <Text style={styles.textStyle}>Anonymous</Text>
                                                                                <Text style={{fontSize: 14}} numberOfLines={1} ellipsizeMode="tail">({item.description})</Text>
                                                                                </View>
                                                                            </TouchableOpacity>
                                                                            {/* <TouchableOpacity onPress={() => {
                                                                                Alert.alert(
                                                                                    'Delete',
                                                                                    'Are you sure you want to delete this chat?', [{
                                                                                        text: 'Cancel',
                                                                                        onPress: () => { console.log('Cancel Pressed') },
                                                                                        style: 'cancel'
                                                                                    }, {
                                                                                        text: 'OK',
                                                                                        onPress: () => {
                                                                                            this.deletekeys(item)
                                                                                        }
                                                                                    },], {
                                                                                    cancelable: false
                                                                                }
                                                                                )
                                                                            }}>
                                                                                <Icon name="delete" size={30} color="#0091EA" style={{ marginRight: wp('2%') }} />
                                                                            </TouchableOpacity> */}
                                                                            {/* <Text>{item.counter}</Text> */}
                                                                            <View  style={{width: wp("40%") ,alignItems:'center',justifyContent:"center", borderBottomWidth: 0.25,
                                                                                    borderBottomColor: "grey",height:hp("7%")}}>
                                                                            {
                                                                                item.timestamp != 0 ? <View><Text style={{fontSize:10}}>{item.timestamp}</Text></View>: <View/>

                                                                            }
                                                                            {item.counter > 0 ?
                                                                                    <View>
                                                                                    <Badge
                                                                                        value={"+" + item.counter}
                                                                                        // containerStyle={{backgroundColor:'blue'}}
                                                                                        badgeStyle={{backgroundColor:'#0290ea',height:hp("2%"),width:wp("7%")}}
                                                                                        textStyle={{fontSize:10}}
                                                                                    />
                                                                                    </View>
                                                                                    :

                                                                                    <View/>
                                                                                }
                                                                                </View>
                                                                        </View>
                                                                        :
                                                                        <TouchableOpacity onPress={() => {
                                                                            // console.log(item.phonenumber, item.name, item.description)
                                                                            alert("You have been blocked.")
                                                                        }

                                                                        }>

                                                                            <View style={styles.renderChatsName1}>
                                                                                <Image source={require("../assets/chatIcon.png")} />
                                                                                <Text style={styles.textStyle}>Anonymous</Text>

                                                                            </View>

                                                                        </TouchableOpacity>

                                                                    }
                                                                </View>
                                                                :
                                                                <View>
                                                                </View>
                                                            }
                                                            {item.category == "shops" ? <TouchableOpacity onPress={() => {
                                                                // console.log(item.phonenumber, item.name, item.description)
                                                                if (this.props.phonenumberuser) {
                                                                    this.props.navigation.navigate('vendorChat', { phonenumber: item.phonenumber })
                                                                }
                                                                else {
                                                                    alert("Please fill details first!")
                                                                }
                                                            }}>

                                                                <View style={styles.renderChatsName}>
                                                                    <Image source={require("../assets/chatIcon.png")} />
                                                                    <Text style={styles.textStyle}>{item.name}</Text>
                                                                    {/* {item.counter > 0 ? <Badge
                                                                        value={"+" + item.counter}
                                                                        containerStyle={{ position: 'absolute', right: 20 }}
                                                                    /> : <View />} */}
                                                                </View>
                                                                {/* <View style={styles.renderChatsName}>
                                                        <Image source={require("../assets/chatIcon.png")} />
                                                        <Text style={styles.textStyle}>{item.name}</Text>
                                                    </View> */}
                                                            </TouchableOpacity> : <View></View>}
                                                            {item.category == "food" && item.softDelete==false ? 

                                                                <View style={styles.renderChatsName1}>
                                                                    <TouchableOpacity onPress={() => {
                                                                // console.log(item.phonenumber, item.name, item.description)
                                                                if (this.props.phonenumberuser) {
                                                                    this.props.navigation.navigate('ChatScreen', { phonenumber: item.phonenumber, name: item.name, timestamp: item.alerttimestamp })
                                                                }
                                                                else {
                                                                    alert("Please fill details first!")
                                                                }
                                                            }}
                                                            style={{ flexDirection: 'row', width: wp("60%") ,alignItems:'center'}}
                                                            >
                                                                <View style={{marginRight:wp("5%")}}>
                                                                    <Image source={require("../assets/chatIcon.png")} />
                                                                    </View>
                                                                    <View style={{flexDirection:'column', borderBottomWidth: 0.25,
                                                                                borderBottomColor: "grey",height:hp("7%"),width:wp("70%")}}>
                                                        <Text style={styles.textStyle}>{item.name}</Text>
                                                                                <Text style={{fontSize: 14}} numberOfLines={1} ellipsizeMode="tail">({item.description})</Text>
                                                                                </View>
                                                                    </TouchableOpacity>
                                                                    <View  style={{width: wp("40%") ,alignItems:'center',justifyContent:"center", borderBottomWidth: 0.25,
                                                                                    borderBottomColor: "grey",height:hp("7%")}}>
                                                                            {
                                                                                item.timestamp != 0 ? <View><Text style={{fontSize:10}}>{item.timestamp}</Text></View>: <View/>

                                                                            }
                                                                            {item.counter > 0 ?
                                                                                    <View>
                                                                                    <Badge
                                                                                        value={"+" + item.counter}
                                                                                        // containerStyle={{backgroundColor:'blue'}}
                                                                                        badgeStyle={{backgroundColor:'#0290ea',height:hp("2%"),width:wp("7%")}}
                                                                                        textStyle={{fontSize:10}}
                                                                                    />
                                                                                    </View>
                                                                                    :

                                                                                    <View/>
                                                                                }
                                                                                </View>
                                                                </View>
                                                            : <View></View>}
                                                            {item.category == "other" && item.softDelete==false ? 

                                                                <View style={styles.renderChatsName1}>
                                                                    <TouchableOpacity onPress={() => {
                                                                // console.log(item.phonenumber, item.name, item.description)
                                                                if (this.props.phonenumberuser) {
                                                                    this.props.navigation.navigate('ChatScreen', { phonenumber: item.phonenumber, name: item.name, timestamp: item.alerttimestamp })
                                                                }
                                                                else {
                                                                    alert("Please fill details first!")
                                                                }
                                                            }}
                                                            style={{ flexDirection: 'row', width: wp("60%") ,alignItems:'center'}}
                                                            >
                                                                <View style={{marginRight:wp("5%")}}>
                                                                    <Image source={require("../assets/chatIcon.png")} />
                                                                    </View>
                                                                    <View style={{flexDirection:'column', borderBottomWidth: 0.25,
                                                                                borderBottomColor: "grey",height:hp("7%"),width:wp("70%")}}>
                                                        <Text style={styles.textStyle}>{item.name}</Text>
                                                                                <Text style={{fontSize: 14}} numberOfLines={1} ellipsizeMode="tail">({item.description})</Text>
                                                                                </View>
                                                                    </TouchableOpacity>
                                                                    <View  style={{width: wp("40%") ,alignItems:'center',justifyContent:"center", borderBottomWidth: 0.25,
                                                                                    borderBottomColor: "grey",height:hp("7%")}}>
                                                                            {
                                                                                item.timestamp != 0 ? <View><Text style={{fontSize:10}}>{item.timestamp}</Text></View>: <View/>

                                                                            }
                                                                            {item.counter > 0 ?
                                                                                    <View>
                                                                                    <Badge
                                                                                        value={"+" + item.counter}
                                                                                        // containerStyle={{backgroundColor:'blue'}}
                                                                                        badgeStyle={{backgroundColor:'#0290ea',height:hp("2%"),width:wp("7%")}}
                                                                                        textStyle={{fontSize:10}}
                                                                                    />
                                                                                    </View>
                                                                                    :

                                                                                    <View/>
                                                                                }
                                                                                </View>
                                                                </View>
                                                                 : <View></View>}

                                                        </View>
                                                    )}
                                                    enableEmptySections={true}
                                                    style={{ marginTop: 10 }}
                                                    keyExtractor={(item, index) => index}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            


                        </View>

                    </View>
                );
            }
        } else {
            return null;
        }
    }
}
const mapStateToProps = (state) => {
    // console.log(state)
    return {
        upload_status: state.textUpload,
        nameuser: state.nameuser,
        phonenumberuser: state.phonenumberuser,
    }
}

export default connect(mapStateToProps)(ChatList)
const styles = StyleSheet.create({
    upperContainer: {
        height:hp("9%"),
        backgroundColor: "#0290ea",
        alignItems: "center",
        flexDirection: 'row',
    },
    lowerContainer: {
        // flex: 0.9,
        height:hp("91%"),
        backgroundColor: "blue"
    },

    textStyle: {
        // margin: wp('2%'),
        fontSize: 16,
        fontWeight:"bold"

        // backgroundColor:"green"
    },
    textInputStyle: {
        // height: hp("5%"),
        paddingLeft: 10,
        backgroundColor: '#FFFFFF',
        width:wp("83%"),
    },
    renderChatsName: {
        flexDirection: "row",
        borderLeftWidth: wp('1%'),
        borderLeftColor: 'yellow',
        padding: wp('2%'),
        marginTop: hp('1%'),
        alignItems: "center"
    },
    renderChatsName1: {
        flexDirection: "row",
        borderLeftWidth: wp('1%'),
        borderLeftColor: 'red',
        padding: wp('2%'),
        marginTop: hp('1%'),
        alignItems: "center",
       height:hp("7%"),
       marginBottom:hp("2%")
    },
});