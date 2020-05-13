// import * as React from 'react';
// import { StyleSheet, Text, View, Button, Alert, Keyboard, TouchableOpacity, Dimensions, Image, ScrollView, Animated, FlatList, TextInput, KeyboardAvoidingView, Linking, BackHandler, ActivityIndicator } from 'react-native';
// import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
// import SlidingUpPanel from 'rn-sliding-up-panel'
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import * as firebase from 'firebase'
// import { db } from '../routes/config';
// import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
// import { connect } from 'react-redux';
// import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
// import Icon from "react-native-vector-icons/MaterialIcons"

// import Animate from '../screenprev/Animate';

// const { height } = Dimensions.get('window')

// class MapShow extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       latitude: null,
//       longitude: null,
//       error: null,
//       markers: null,
//       check: true,
//       found: false,
//       name: null,
//       NearByAlerts: true,
//       OrganizationalAlerts: false,
//       organistaion: true,
//       near_by_marker: null,
//       all_markers: null,
//       phonenumber: null,
//       org_found: false,
//       rerender: true,
//       isMarkerClicked: null, // to check if any marker is clicked YASH
//       markerClickedid: null, // phone number of clicked marker YASH
//     },
//       this.position = null;
//     this.longitude1 = null;
//     this.latitude1 = null;



//   }

//   // Keyboard Eventlistners.
//   componentWillMount() {
//     this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
//   }
//   componentWillUnmount() {
//     this.keyboardDidShowListener.remove();
//   }
//   _keyboardDidShow() {
//     // console.log("keyboard up")
//     this.handdlePress1()
//     // Animated.spring(this.mode, {
//     //   toValue: 0,
//     //   duration: 50,
//     //   useNativeDriver: false
//     // }).start();
//     // console.log(this.latitude1)
//   }

//   callForInitialFetch = () => {
//     RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({ interval: 10000, fastInterval: 5000 })
//       .then(() => {
//         var get_current_positon = new Promise((resolve, reject) => {
//           Geolocation.getCurrentPosition(
//             (position) => {
//               // console.log(position)
//               this.setState({
//                 latitude: position.coords.latitude,
//                 longitude: position.coords.longitude
//               })
//               // console.log(this.state);

//               if (this.state.latitude && this.state.longitude) {
//                 //changes made line switched
//                 this.fetchCity()
//                 resolve(true)

//               }
//               else
//                 reject(false)
//             }, (error) => alert(error.message),
//             {
//               enableHighAccuracy: false,
//               timeout: 500000,
//               maximumAge: 10000
//             })
//         })

//         // console.log(this.state.latitude, this.state.longitude)
//         var fetchedmark = []

//         //promise to get sos from firebase
//         var readdata = new Promise((resolve, reject) => {
//           firebase.database().ref('sos/').on("value", function (snapshot) {
//             try {
//               // console.log("from marker caall ", snapshot.val())
//               snapshot.forEach((data) => {
//                 var marker = {
//                   phonenumber: data.val().phonenumber,
//                   latitude: data.val().latitude,
//                   longitude: data.val().longitude,
//                   name: data.val().name,
//                   description: data.val().description,
//                   category: data.val().category,
//                   timestamp: data.val().timestamp,
//                 }
//                 fetchedmark.push(marker)
//               })
//               if (fetchedmark) {
//                 resolve(fetchedmark)
//               }
//               else
//                 reject("No data")
//             } catch (error) {
//               reject("No data")
//             }

//           })
//         })
//         //end of promise one defination

//         get_current_positon.then(() => {
//           // console.log("promise 1 resolved properly");

//           //resolve first promise to get all the sos markers and then find nearby markers and set them to state
//           readdata.then((data) => {
//             // console.log("data format= ", data);
//             var marker_to_display = []
//             var food_marker = []
//             var anonymous_marker = []
//             for (var i = 0; i < data.length; i++) {
//               // console.log("type of object  = ", this.state.latitude, this.state.longitude, data[i].latitude, data[i].longitude)
//               var dist = this.distance(this.state.latitude, this.state.longitude, data[i].latitude, data[i].longitude)
//               // console.log("distance = ", dist);
//               data[i].distance=this.dist_meter
//               var dist_meter = dist * 1000;
//               data[i].distance=dist_meter
//               if (dist_meter < 1000000) {
//                 // console.log("inside if")
//                 this.setState({
//                   found: true,
//                 })

//                 if (data[i].category == "Emotional Support") {
//                   anonymous_marker.push(data[i])
//                 }
//                 //else ke baad paranthesis open close thy uske andr tha food_marker wo change kiya hai idr 
//                 else {
//                   food_marker.push(data[i])
//                 }
//                 marker_to_display.push(data[i])
                
//               }
              

//             }
//             console.log("markers to display before sort= ",marker_to_display);
//               marker_to_display.sort((a,b)=>{
//                 return a.distance-b.distance
//               })
//               console.log("markers to display after sort= ",marker_to_display);
//             // console.log("marker_to_display", marker_to_display);
//             //markers and near by markers both hold same element
//             this.setState({
//               food_marker: food_marker,
//               anonymous_marker: anonymous_marker,
//               markers: marker_to_display,
//               near_by_marker: marker_to_display,
//               all_markers: data,
//             })

//             //jab empty hai org toh dhyn rkhna 
//             //resolve 2nd promise to find the org. of the current user 

//             //in case og google and fb login
//             if (this.props.phonenumberuser != null) {
//               // console.log("insdie phonenumber user = ", this.props.phonenumberuser);
//               //promise to find organisation of user from signupincomplete if exist(in case of google and facebook signin)
//               var organisationFromSignUpIncompete = new Promise((resolve, reject) => {
//                 // console.log("this.props.phonenumberuser", this.props.phonenumberuser)
//                 if (this.props.phonenumberuser != null) {
//                   firebase.database().ref("SignUpInComplete/" + this.props.phonenumberuser).on("value", snapshot => {
//                     // console.log("inside firebase call");
//                     // console.log(snapshot.val());
//                     if (snapshot.val())
//                       resolve(snapshot.val())
//                     else
//                       reject("no data")
//                   })
//                 }
//               })
//               //end of promise two defination

//               //promise to get organisation from firebase
//               var fetchFromOrganization = (org) => {
//                 // console.log(org)
//                 return new Promise((resolve, reject) => {
//                   var x = []
//                   firebase.database().ref("Organisation/" + org + "/").on("value", (snapshot) => {
//                     // console.log("inside  2nd firebase call");
//                     try {
//                       // console.log(Object.keys(snapshot.val()));
//                       if (Object.keys(snapshot.val()))
//                         resolve(Object.keys(snapshot.val()))
//                       else
//                         reject("no data")
//                     } catch (err) {
//                       reject("no data")
//                     }
//                   })
//                 })
//               }
//               //end of promise three defination

//               organisationFromSignUpIncompete.then((x) => {
//                 // console.log("htdhfdhtdttdh", x)
//                 // console.log("data= ", x.Organisation);
//                 var random = new Promise((resolve, reject) => {
//                   var arr3 = null
//                   firebase.database().ref("Organisation/").on("value", snapshot => {
//                     try {
//                       arr3 = Object.keys(snapshot.val())
//                       if (arr3) {
//                         resolve(arr3)
//                       } else {
//                         reject("no data")
//                       }
//                     } catch (error) {
//                       reject("no data")
//                     }

//                   })
//                 })

//                 random.then(arr3 => {
//                   arr3.forEach(val => {
//                     if (val == x.Organisation) {
//                       if (x.Organisation != "" || x.organistaion != undefined) {
//                         //resolve 3rd promise to find all the keys in organisation table for the current user org.
//                         fetchFromOrganization(x.Organisation).then((data) => {
//                           // console.log("data= ", data)
//                           var org_array = []
//                           data.forEach((element) => {
//                             //ye element phonenummber hai jo organisation ke andr se aaya hai,
//                             //toh jab ye number jitne markes sos fetch hue hai unme se kisi bhi number se match karega toh wo no. uss organaisation ke sos ka hai
//                             for (let index = 0; index < this.state.all_markers.length; index++) {
//                               if (element == this.state.all_markers[index].phonenumber) {
//                                 //ye orgnaisation match hogai ab 
//                                 org_array.push(this.state.all_markers[index])
//                               }
//                             }
//                           })//end of foreach loops
                          
//                           if (org_array.length != 0) {
//                             // console.log("after end of for each= ", org_array);
//                             this.setState({
//                               organistaion_marker: org_array,
//                               org_found: true
//                             })
//                           }
//                           else {
//                             // console.log("after end of for each= ", org_array);
//                             this.setState({
//                               organistaion_marker: org_array,
//                               org_found: false
//                             })

//                           }

//                           // console.log("after end of for each= ", org_array);

//                           // this.setState({
//                           //   organistaion_marker: org_array
//                           // })
//                         })//end of 3rd resolve
//                       }
//                     }
//                   })
//                 }).catch((err)=>{

//                 })
//               })//end of 2nd resolve
//             }//end of if 
//           })//end of 1st resolve
//         })//end of get_current_position 
//       }).catch(err => {
//         // console.log(err)
//         Alert.alert("Restart the app")
//       })
//   }


//   componentDidMount() {
//     // this.deletefood()
//     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
//     this.callForInitialFetch()
//   }

//   //For deleting normal alert and chats

//   // deletefood = (number) => {
//   //   // var pro = new Promise((resolve,reject) => {
//   //     firebase.database().ref("ChatsUnderYou/alerts/").on("value", snapshot => {
//   //       console.log("Object.keys(snapshot.val())",Object.keys(snapshot.val()))
//   //       var arr = Object.keys(snapshot.val());
//   //       for(var i=0;i<arr.length;i++){
//   //         firebase.database().ref("ChatsUnderYou/alerts/"+arr[i]+"/"+number).remove()
//   //       }
//   //     })
//   //     firebase.database().ref("chatroom/"+number).remove()
//   //   // })
//   // }


//   //For deleting anonymous alert and chats
//   deletekeys = (item) => {
//     // console.log("inside del function\n");
//     // console.log(item)
//     if (item.category == "Emotional Support") {
//       //   firebase.database().ref("ChatsUnderYou/Anonymous/").on("value", snapshot => {
//       //     console.log("Object.keys(snapshot.val())",Object.keys(snapshot.val()))
//       //     var arr = Object.keys(snapshot.val());
//       //     for(var i=0;i<arr.length;i++){
//       //       firebase.database().ref("ChatsUnderYou/Anonymous/"+arr[i]+"/"+item.phonenumber+","+item.timestamp).remove()
//       //     }
//       //   })
//       //   firebase.database().ref("OneToOneAnonymous/"+item.phonenumber+","++","+item.timestamp).remove()

//       var search = [];
//       // console.log("inside . thenm", item);
//       var prom8 = new Promise((resolve, reject) => {
//         firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/").on("value", snapshot => {
//           // console.log("heyu")
//           snapshot.forEach((element) => {
//             // console.log("element=", element.val());
//             if (element.val().alerttimestamp == item.timestamp) {
//               search.push(element.val())
//               // console.log("element=", element.val());
//             }
//           })
//           if (search)
//             resolve(search)
//           else
//             reject("no data")
//         })
//       })//end of prom1

//       prom8.then((search) => {
//         // console.log(search)
//         search.forEach((ele) => {
//           // console.log(ele, "ele")
//           //To remove anonymous chats
//           if (this.props.phonenumberuser > ele.phonenumber) {
//             var x = this.props.phonenumberuser + ',' + ele.phonenumber;
//           } else {
//             var x = ele.phonenumber + ',' + this.props.phonenumberuser;
//           }
//           firebase.database().ref("OneToOneAnonymous/" + x + ',' + item.timestamp).remove();
//           firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + ele.phonenumber + ',' + item.timestamp).remove();
//         })
//         // console.log("search = ", search);

//         search.forEach((ele) => {
//           firebase.database().ref("ChatsUnderYou/Anonymous/" + ele.phonenumber + "/" + this.props.phonenumberuser + ',' + item.timestamp).remove();
//         })
//       })
//     } else {
//       firebase.database().ref("ChatsUnderYou/alerts/").on("value", snapshot => {
//         // console.log("Object.keys(snapshot.val())", Object.keys(snapshot.val()))
//         var arr = Object.keys(snapshot.val());
//         for (var i = 0; i < arr.length; i++) {
//           firebase.database().ref("ChatsUnderYou/alerts/" + arr[i] + "/" + item.phonenumber + "," + item.timestamp).remove()
//         }
//       })
//       firebase.database().ref("chatroom/" + item.phonenumber + "," + item.timestamp).remove()
//     }
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


//   fetchCity = () => {
//     // console.log(this.state.latitude)
//     fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.state.latitude + ',' + this.state.longitude + '&key=AIzaSyCIei5GV0BRU0hOd_IoqUSBVKEntmIkSxc')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         // console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson.results[0].address_components));
//         firebase.database().ref('SignUpInComplete/' + this.props.phonenumberuser + '/').update({
//           address: responseJson.results[0].formatted_address,
//         });
//         responseJson.results[0].address_components.forEach(element => {
//           // console.log(element.types)
//           element.types.forEach(type => {
//             // console.log(type)
//             if (type == "administrative_area_level_2") {
//               // console.log("City is: " + element.long_name)
//               this.props.dispatch({ type: 'UPDATE_CITY', text: element.long_name })
//               firebase.database().ref('SignUpInComplete/' + this.props.phonenumberuser + '/').update({
//                 City: element.long_name,
//               });
//             }
//             else if (type == "administrative_area_level_1") {
//               // console.log("State is: " + element.long_name)
//               firebase.database().ref('SignUpInComplete/' + this.props.phonenumberuser + '/').update({
//                 State: element.long_name
//               });
//             }
//           })
//         })
//       })
//   }

//   toRad = (Value) => {
//     return Value * Math.PI / 180;
//   }

//   distance = (x1, y1, x2, y2) => {
//     // console.log("inside dostance fumction",x1,x2,y1,y2);

//     if ((x1 == x2) && (y1 == y2)) {
//       return 0;
//     }
//     else {
//       var R = 6371.0
//       var lon1 = this.toRad(y1);
//       var lat1 = this.toRad(x1);
//       var lon2 = this.toRad(y2);
//       var lat2 = this.toRad(x2);
//       var dLon = lon2 - lon1
//       var dLat = lat2 - lat1

//       //  Calculate the arial distance using
//       // formulae between two site points
//       // var a = Math.sin(dlat / 2) * 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) * 2
//       // // a = Math.abs(a)
//       // var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

//       var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//         Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
//       var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//       // console.log("c= ",c);

//       var arial_distance = R * c
//       return arial_distance
//     }
//   }


//   onMarkerDragEnd = (evt) => {
//     this.setState({
//       latitude: evt.latitude,
//       longitude: evt.longitude
//     })
//   }
//   mode = new Animated.Value(0);
//   handdlePress = () => {
//     Animated.spring(this.mode, {
//       toValue: 1,
//       duration: 50,
//       useNativeDriver: false
//     }).start();
//   };
//   handdlePress1 = () => {
//     Animated.spring(this.mode, {
//       toValue: 0,
//       duration: 50,
//       useNativeDriver: false
//     }).start();
//     //YASH
//     this.setState({
//       isMarkerClicked: false
//     })
//   }



//   ListViewItemSeparator = () => {
//     //Item sparator view
//     return (
//       <View
//         style={{
//           height: hp('2%'),
//           width: '100%',
//           borderBottomWidth: 0.25,
//           // opacity:0.6,
//           borderBottomColor: "grey",
//           // marginLeft: wp('16%')
//           // backgroundColor: '#080808',
//           // position: "absolute"
//           // borderLeftWidth:10
//         }}
//       />
//     );
//   };
//   renderMarkersPlotted = () => {
//     return (
//       <View style={{ height: hp('60%'), backgroundColor: "#fff", elevation: wp('1%'), borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
//         <View style={{ height: hp("10%") }}>
//           <TouchableOpacity
//             onPress={() => {
//               if (this.mode._value == 0) {
//                 this.handdlePress()
//               }
//               else {
//                 this.handdlePress1()
//               }
//             }}
//           >
//             <View style={{
//               height: hp("3%"),
//               width: wp("10%"),
//               borderBottomWidth: 0.5,
//               alignSelf: 'center',
//               borderBottomColor: 'grey',
//             }}>
//             </View>
//           </TouchableOpacity>
//           <View style={{ alignItems: 'center', justifyContent: 'center', height: hp("5%") }}>
//             <Text style={{ fontSize: 18 }}>ALERTS</Text>
//           </View>
//         </View>
//         {/* {console.log(this.state.typeShop.length, "in ciww ansfhsoajf")} */}
//         {/* <ScrollView> */}
//         {this.state.found || this.state.org_found ? <FlatList
//           data={this.state.markers}
//           ItemSeparatorComponent={this.ListViewItemSeparator}
//           renderItem={({ item }) => (
//             <View>
//               {
//                 this.state.isMarkerClicked ?

//                   // now checking if marker clicked phone number equals the sos phone number, then change Font color to blue, else render normally

//                   this.state.markerClickedid == item.phonenumber ?
//                     // if part
//                     item.category == "Emotional Support" ? <View>
//                       <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('3%'), alignItems: 'center' }}>
//                         <View style={{ width: wp("60%") }}>
//                           <Text style={{ fontSize: 22, marginLeft: 10, fontWeight: 'bold' }}>
//                             Anonymous
//                     </Text>
//                           <Text style={{ fontSize: 14, marginLeft: 10 }}>
//                             {item.category}
//                           </Text>
//                         </View>

//                         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                           {/* <Text style={{ fontSize: 14, marginRight: 10 }}>
//                         Category: {item.category}
//                       </Text> */}
//                           {this.props.phonenumberuser == item.phonenumber ?
//                             <Image source={require('../assets/chatIconGrey.png')} style={{ marginRight: wp("4%") }} />
//                             :
//                             <TouchableOpacity onPress={() => {
//                               if (this.props.phonenumberuser == null && this.props.nameuser == null) {
//                                 this.props.navigation.navigate('WhoYouAre', { check: this.state.check })
//                               }
//                               else {
//                                 this.props.navigation.navigate('Chats', { name: item.name, phonenumber: item.phonenumber, description: item.description, category: item.category, putcolor: "blue", timestamp: item.timestamp })
//                               }
//                             }}>
//                               <Image source={require('../assets/chatIcon.png')} style={{ marginRight: wp("4%") }} />
//                             </TouchableOpacity>
//                           }
//                           <Image source={require('../assets/ios-call-grey.png')} style={{ marginRight: wp("4%") }} />

//                           {/* ye check krra hai user ka phonenumber same hai list ke phone number se */}
//                           {
//                             this.props.phonenumberuser == item.phonenumber ?
//                               <View>
//                                 <TouchableOpacity style={{ fontSize: 14, marginRight: 10 }} onPress={() => {


//                                   Alert.alert(
//                                     "Are you sure?",
//                                     "If you delete a SOS, all related chats will also be deleted",
//                                     [
//                                       {
//                                         text: "Cancel",
//                                         onPress: () => console.log("Cancel Pressed"),
//                                         style: "cancel"
//                                       },
//                                       {
//                                         text: "Delete", onPress: () => {
//                                           this.deletekeys(item);
//                                           firebase.database().ref('sosDeleted/' + item.phonenumber + "," + item.timestamp + '/').set({
//                                             name: item.name,
//                                             phonenumber: item.phonenumber,
//                                             description: item.description,
//                                             latitude: item.latitude,
//                                             longitude: item.longitude,
//                                             category: item.category,
//                                           }).then((data) => {
//                                             // console.log(data)
//                                             firebase.database().ref("sos/" + this.props.phonenumberuser + "," + item.timestamp).remove()
//                                             this.setState({
//                                               rerender: !this.state.rerender
//                                             })
//                                             this.callForInitialFetch();
//                                           }).catch((err) => {
//                                             // console.log(err)
//                                           })
//                                         }
//                                       }
//                                     ],
//                                     { cancelable: true }
//                                   );

//                                 }}>
//                                   <Icon name="delete" size={30} color="#0091EA" />
//                                 </TouchableOpacity>
//                               </View>
//                               :
//                               <View style={{ marginRight: 10 }}>
//                                 <Icon name="delete" size={30} color="grey" />
//                               </View>
//                           }
//                         </View>
//                       </View>
//                     </View> : <View>
//                         {/* changing to blue color of text of selected marker */}
//                         <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('3%'), alignItems: 'center' }}>
//                           <View style={{ width: wp("60%") }}>
//                             <Text style={{ fontSize: 22, marginLeft: 10, fontWeight: 'bold' }}>
//                               {item.name}
//                             </Text>
//                             <Text style={{ fontSize: 14, marginLeft: 10 }}>
//                               Category: {item.category}
//                             </Text>
//                           </View>

//                           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                             {this.props.phonenumberuser == item.phonenumber ?
//                               <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                                 <Image source={require('../assets/chatIconGrey.png')} style={{ marginRight: wp("4%") }} />
//                                 <Image source={require('../assets/ios-call-grey.png')} style={{ marginRight: wp("4%") }} />
//                               </View>
//                               :
//                               <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                                 <TouchableOpacity onPress={() => {
//                                   if (this.props.phonenumberuser == null && this.props.nameuser == null) {
//                                     this.props.navigation.navigate('WhoYouAre', { check: this.state.check })
//                                   }
//                                   else {
//                                     this.props.navigation.navigate('Chats', { name: item.name, phonenumber: item.phonenumber, description: item.description, category: item.category, putcolor: "blue", timestamp: item.timestamp })
//                                   }
//                                 }}>
//                                   <Image source={require('../assets/chatIcon.png')} style={{ marginRight: wp("4%") }} />
//                                 </TouchableOpacity>
//                                 <TouchableOpacity onPress={() => {
//                                   Linking.openURL(`tel:${item.phonenumber}`)
//                                 }}>
//                                   <Image source={require('../assets/ios-call.png')} style={{ marginRight: wp("4%") }} />
//                                 </TouchableOpacity>
//                               </View>
//                             }

//                             {/* ye check krra hai user ka phonenumber same hai list ke phone number se */}
//                             {
//                               this.props.phonenumberuser == item.phonenumber ?
//                                 <View>
//                                   <TouchableOpacity style={{ fontSize: 14, marginRight: 10 }} onPress={() => {
//                                     Alert.alert(
//                                       "Are you sure?",
//                                       "If you delete a SOS, all related chats will also be deleted",
//                                       [
//                                         {
//                                           text: "Cancel",
//                                           onPress: () => console.log("Cancel Pressed"),
//                                           style: "cancel"
//                                         },
//                                         {
//                                           text: "Delete", onPress: () => {
//                                             this.deletekeys(item);
//                                             firebase.database().ref('sosDeleted/' + item.phonenumber + "," + item.timestamp + '/').set({
//                                               name: item.name,
//                                               phonenumber: item.phonenumber,
//                                               description: item.description,
//                                               latitude: item.latitude,
//                                               longitude: item.longitude,
//                                               category: item.category,
//                                             }).then((data) => {
//                                               // console.log(data)
//                                               firebase.database().ref("sos/" + this.props.phonenumberuser + "," + item.timestamp).remove()
//                                               this.setState({
//                                                 rerender: !this.state.rerender
//                                               })
//                                               this.callForInitialFetch();
//                                             }).catch((err) => {
//                                               // console.log(err)
//                                             })
//                                           }
//                                         }
//                                       ],
//                                       { cancelable: true }
//                                     );
//                                   }}>
//                                     <Icon name="delete" size={30} color="#0091EA" />
//                                   </TouchableOpacity>
//                                 </View>
//                                 :
//                                 <View style={{ marginRight: 10 }}>
//                                   <Icon name="delete" size={30} color="grey" />
//                                 </View>
//                             }
//                           </View>
//                         </View>
//                       </View>
//                     :
//                     // else part
//                     item.category == "Emotional Support" ? <View>
//                       <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('3%'), alignItems: 'center' }}>
//                         <View style={{ width: wp("60%") }}>
//                           <Text style={{ fontSize: 22, marginLeft: 10 }}>
//                             Anonymous
//                     </Text>
//                           <Text style={{ fontSize: 14, marginLeft: 10 }}>
//                             {item.category}
//                           </Text>
//                         </View>
//                         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                           {/* <Text style={{ fontSize: 14, marginRight: 10 }}>
//                         Category: {item.category}
//                       </Text> */}
//                           {this.props.phonenumberuser == item.phonenumber ?
//                             <Image source={require('../assets/chatIconGrey.png')} style={{ marginRight: wp("4%") }} />
//                             :
//                             <TouchableOpacity onPress={() => {
//                               if (this.props.phonenumberuser == null && this.props.nameuser == null) {
//                                 this.props.navigation.navigate('WhoYouAre', { check: this.state.check })
//                               }
//                               else {
//                                 this.props.navigation.navigate('Chats', { name: item.name, phonenumber: item.phonenumber, description: item.description, category: item.category, putcolor: "blue", timestamp: item.timestamp })
//                               }
//                             }}>
//                               <Image source={require('../assets/chatIcon.png')} style={{ marginRight: wp("4%") }} />
//                             </TouchableOpacity>
//                           }
//                           <Image source={require('../assets/ios-call-grey.png')} style={{ marginRight: wp("4%") }} />

//                           {/* ye check krra hai user ka phonenumber same hai list ke phone number se */}
//                           {
//                             this.props.phonenumberuser == item.phonenumber ?
//                               <View>
//                                 <TouchableOpacity style={{ fontSize: 14, marginRight: 10 }} onPress={() => {

//                                   Alert.alert(
//                                     "Are you sure?",
//                                     "If you delete a SOS, all related chats will also be deleted",
//                                     [
//                                       {
//                                         text: "Cancel",
//                                         onPress: () => console.log("Cancel Pressed"),
//                                         style: "cancel"
//                                       },
//                                       {
//                                         text: "Delete", onPress: () => {

//                                           this.deletekeys(item);

//                                           firebase.database().ref('sosDeleted/' + item.phonenumber + "," + item.timestamp + '/').set({
//                                             name: item.name,
//                                             phonenumber: item.phonenumber,
//                                             description: item.description,
//                                             latitude: item.latitude,
//                                             longitude: item.longitude,
//                                             category: item.category,
//                                             timestamp: item.timestamp
//                                           }).then((data) => {
//                                             // console.log(data)

//                                             firebase.database().ref("sos/" + this.props.phonenumberuser + "," + item.timestamp).remove()
//                                             this.setState({
//                                               rerender: !this.state.rerender
//                                             })
//                                             this.callForInitialFetch();
//                                           }).catch((err) => {
//                                             // console.log(err)
//                                           })
//                                         }
//                                       }
//                                     ],
//                                     { cancelable: true }
//                                   );
//                                 }}>
//                                   <Icon name="delete" size={30} color="#0091EA" />
//                                 </TouchableOpacity>
//                               </View>
//                               :
//                               <View style={{ marginRight: 10 }}>
//                                 <Icon name="delete" size={30} color="grey" />
//                               </View>
//                           }
//                         </View>
//                       </View>
//                     </View>

//                       :

//                       <View>
//                         <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('3%'), alignItems: 'center' }}>
//                           <View style={{ width: wp("60%") }}>
//                             <Text style={{ fontSize: 22, marginLeft: 10 }}>
//                               {item.name}
//                             </Text>
//                             <Text style={{ fontSize: 14, marginLeft: 10 }}>
//                               Category: {item.category}
//                             </Text>
//                           </View>
//                           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                             {this.props.phonenumberuser == item.phonenumber ?
//                               <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                                 <Image source={require('../assets/chatIconGrey.png')} style={{ marginRight: wp("4%") }} />
//                                 <Image source={require('../assets/ios-call-grey.png')} style={{ marginRight: wp("4%") }} />
//                               </View>
//                               :
//                               <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                                 <TouchableOpacity onPress={() => {
//                                   if (this.props.phonenumberuser == null && this.props.nameuser == null) {
//                                     this.props.navigation.navigate('WhoYouAre', { check: this.state.check })
//                                   }
//                                   else {
//                                     this.props.navigation.navigate('Chats', { name: item.name, phonenumber: item.phonenumber, description: item.description, category: item.category, putcolor: "blue", timestamp: item.timestamp })
//                                   }
//                                 }}>
//                                   <Image source={require('../assets/chatIcon.png')} style={{ marginRight: wp("4%") }} />
//                                 </TouchableOpacity>
//                                 <TouchableOpacity onPress={() => {
//                                   Linking.openURL(`tel:${item.phonenumber}`)
//                                 }}>
//                                   <Image source={require('../assets/ios-call.png')} style={{ marginRight: wp("4%") }} />
//                                 </TouchableOpacity>
//                               </View>
//                             }

//                             {/* ye check krra hai user ka phonenumber same hai list ke phone number se */}
//                             {
//                               this.props.phonenumberuser == item.phonenumber ?
//                                 <View>
//                                   <TouchableOpacity style={{ fontSize: 14, marginRight: 10 }} onPress={() => {
//                                     Alert.alert(
//                                       "Are you sure?",
//                                       "If you delete a SOS, all related chats will also be deleted",
//                                       [
//                                         {
//                                           text: "Cancel",
//                                           onPress: () => console.log("Cancel Pressed"),
//                                           style: "cancel"
//                                         },
//                                         {
//                                           text: "Delete", onPress: () => {
//                                             this.deletekeys(item);
//                                             firebase.database().ref('sosDeleted/' + item.phonenumber + "," + item.timestamp + '/').set({
//                                               name: item.name,
//                                               phonenumber: item.phonenumber,
//                                               description: item.description,
//                                               latitude: item.latitude,
//                                               longitude: item.longitude,
//                                               category: item.category,
//                                             }).then((data) => {
//                                               // console.log(data)
//                                               firebase.database().ref("sos/" + this.props.phonenumberuser + "," + item.timestamp).remove()
//                                               this.setState({
//                                                 rerender: !this.state.rerender
//                                               })
//                                               this.callForInitialFetch();
//                                             }).catch((err) => {
//                                               // console.log(err)
//                                             })
//                                           }
//                                         }
//                                       ],
//                                       { cancelable: true }
//                                     );
//                                   }}>
//                                     <Icon name="delete" size={30} color="#0091EA" />
//                                   </TouchableOpacity>
//                                 </View>
//                                 :
//                                 <View style={{ marginRight: 10 }}>
//                                   <Icon name="delete" size={30} color="grey" />
//                                 </View>
//                             }
//                           </View>
//                         </View>
//                       </View>

//                   :

//                   item.category == "Emotional Support" ? <View>
//                     <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('3%'), alignItems: 'center' }}>
//                       <View style={{ width: wp("60%") }}>
//                         <Text style={{ fontSize: 22, marginLeft: 10 }}>
//                           Anonymous
//                     </Text>
//                         <Text style={{ fontSize: 14, marginLeft: 10 }}>
//                           {item.category}
//                         </Text>
//                       </View>
//                       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         {/* <Text style={{ fontSize: 14, marginRight: 10 }}>
//                         Category: {item.category}
//                       </Text> */}
//                         {this.props.phonenumberuser == item.phonenumber ?
//                           <Image source={require('../assets/chatIconGrey.png')} style={{ marginRight: wp("4%") }} />
//                           :
//                           <TouchableOpacity onPress={() => {
//                             if (this.props.phonenumberuser == null && this.props.nameuser == null) {
//                               this.props.navigation.navigate('WhoYouAre', { check: this.state.check })
//                             }
//                             else {
//                               this.props.navigation.navigate('Chats', { name: item.name, phonenumber: item.phonenumber, description: item.description, category: item.category, putcolor: "blue", timestamp: item.timestamp })
//                             }
//                           }}>
//                             <Image source={require('../assets/chatIcon.png')} style={{ marginRight: wp("4%") }} />
//                           </TouchableOpacity>
//                         }
//                         <Image source={require('../assets/ios-call-grey.png')} style={{ marginRight: wp("4%") }} />

//                         {/* ye check krra hai user ka phonenumber same hai list ke phone number se */}
//                         {
//                           this.props.phonenumberuser == item.phonenumber ?
//                             <View>
//                               <TouchableOpacity style={{ fontSize: 14, marginRight: 10 }} onPress={() => {

//                                 Alert.alert(
//                                   "Are you sure?",
//                                   "If you delete a SOS, all related chats will also be deleted",
//                                   [
//                                     {
//                                       text: "Cancel",
//                                       onPress: () => console.log("Cancel Pressed"),
//                                       style: "cancel"
//                                     },
//                                     {
//                                       text: "Delete", onPress: () => {
//                                         this.deletekeys(item);
//                                         firebase.database().ref('sosDeleted/' + item.phonenumber + "," + item.timestamp + '/').set({
//                                           name: item.name,
//                                           phonenumber: item.phonenumber,
//                                           description: item.description,
//                                           latitude: item.latitude,
//                                           longitude: item.longitude,
//                                           category: item.category,
//                                         }).then((data) => {
//                                           // console.log(data)
//                                           firebase.database().ref("sos/" + this.props.phonenumberuser + "," + item.timestamp).remove()
//                                           this.setState({
//                                             rerender: !this.state.rerender
//                                           })
//                                           this.callForInitialFetch();
//                                         }).catch((err) => {
//                                           // console.log(err)
//                                         })
//                                       }
//                                     }
//                                   ],
//                                   { cancelable: true }
//                                 );
//                               }}>
//                                 <Icon name="delete" size={30} color="#0091EA" />
//                               </TouchableOpacity>
//                             </View>
//                             :
//                             <View style={{ marginRight: 10 }}>
//                               <Icon name="delete" size={30} color="grey" />
//                             </View>
//                         }
//                       </View>
//                     </View>
//                   </View> : <View>
//                       <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('3%'), alignItems: 'center' }}>
//                         <View style={{ width: wp("60%") }}>
//                           <Text style={{ fontSize: 22, marginLeft: 10 }}>
//                             {item.name}
//                           </Text>
//                           <Text style={{ fontSize: 14, marginLeft: 10 }}>
//                             Category: {item.category}
//                           </Text>
//                         </View>
//                         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                           {this.props.phonenumberuser == item.phonenumber ?
//                             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                               <Image source={require('../assets/chatIconGrey.png')} style={{ marginRight: wp("4%") }} />
//                               <Image source={require('../assets/ios-call-grey.png')} style={{ marginRight: wp("4%") }} />
//                             </View>
//                             :
//                             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                               <TouchableOpacity onPress={() => {
//                                 if (this.props.phonenumberuser == null && this.props.nameuser == null) {
//                                   this.props.navigation.navigate('WhoYouAre', { check: this.state.check })
//                                 }
//                                 else {
//                                   this.props.navigation.navigate('Chats', { name: item.name, phonenumber: item.phonenumber, description: item.description, category: item.category, putcolor: "blue", timestamp: item.timestamp })
//                                 }
//                               }}>
//                                 <Image source={require('../assets/chatIcon.png')} style={{ marginRight: wp("4%") }} />
//                               </TouchableOpacity>
//                               <TouchableOpacity onPress={() => {
//                                 Linking.openURL(`tel:${item.phonenumber}`)
//                               }}>
//                                 <Image source={require('../assets/ios-call.png')} style={{ marginRight: wp("4%") }} />
//                               </TouchableOpacity>
//                             </View>
//                           }

//                           {/* ye check krra hai user ka phonenumber same hai list ke phone number se */}
//                           {
//                             this.props.phonenumberuser == item.phonenumber ?
//                               <View>
//                                 <TouchableOpacity style={{ fontSize: 14, marginRight: 10 }} onPress={() => {
//                                   Alert.alert(
//                                     "Are you sure?",
//                                     "If you delete a SOS, all related chats will also be deleted",
//                                     [
//                                       {
//                                         text: "Cancel",
//                                         onPress: () => console.log("Cancel Pressed"),
//                                         style: "cancel"
//                                       },
//                                       {
//                                         text: "Delete", onPress: () => {
//                                           this.deletekeys(item);
//                                           firebase.database().ref('sosDeleted/' + item.phonenumber + "," + item.timestamp + '/').set({
//                                             name: item.name,
//                                             phonenumber: item.phonenumber,
//                                             description: item.description,
//                                             latitude: item.latitude,
//                                             longitude: item.longitude,
//                                             category: item.category,
//                                           }).then((data) => {
//                                             // console.log(data)
//                                             firebase.database().ref("sos/" + this.props.phonenumberuser + "," + item.timestamp).remove()
//                                             this.setState({
//                                               rerender: !this.state.rerender
//                                             })
//                                             this.callForInitialFetch();
//                                           }).catch((err) => {
//                                             // console.log(err)
//                                           })
//                                         }
//                                       }
//                                     ],
//                                     { cancelable: true }
//                                   );
//                                 }}>
//                                   <Icon name="delete" size={30} color="#0091EA" />
//                                 </TouchableOpacity>
//                               </View>
//                               :
//                               <View style={{ marginRight: 10 }}>
//                                 <Icon name="delete" size={30} color="grey" />
//                               </View>
//                           }
//                         </View>
//                       </View>
//                     </View>

//               }


//             </View>

//           )}
//           enableEmptySections={true}
//           style={{ margin: hp('1%') }}
//           keyExtractor={(item, index) => index}
//         /> : <View style={{ justifyContent: 'center', alignItems: 'center', height: hp("42.5%") }}>
//             <Text style={{ color: 'grey', fontSize: 18 }}>No alerts found!</Text>
//           </View>}

//         {this.state.organistaion ?

//           <View style={{ flexDirection: "row" }}>

//             {/* intially kuch display nai hoga fir baad mai click karogy toh shops aajaegi  */}
//             <View>

//               {this.state.NearByAlerts ?

//                 <TouchableOpacity onPress={() => {

//                   this.setState({
//                     markers: this.state.near_by_marker,
//                     // type: "kirana",
//                   })
//                   // this.NearByALertsDisplay()
//                 }}>

//                   <View style={{ justifyContent: 'center', alignItems: 'center', width: wp("50%"), height: hp("7.5%") }}>

//                     <Text style={{ color: '#0290ea', fontSize: 14 }}>Near By Alerts</Text>
//                   </View>

//                 </TouchableOpacity>

//                 :

//                 <TouchableOpacity onPress={() => {
//                   this.setState({
//                     markers: this.state.near_by_marker,
//                     NearByAlerts: true,
//                     OrganizationalAlerts: false
//                   })
//                   // console.log("pressing near by alerts", this.state.markers);

//                   // this.NearByAlertsDisplay()
//                 }}>
//                   <View style={{ justifyContent: 'center', alignItems: 'center', width: wp("50%"), height: hp("7.5%"), backgroundColor: '#eee' }}>

//                     <Text style={{ color: "black", fontSize: 14 }}>Near By Alerts</Text>
//                   </View>
//                 </TouchableOpacity>
//               }
//             </View>

//             <View>


//               {this.state.OrganizationalAlerts ?

//                 <TouchableOpacity onPress={() => {
//                   this.setState({
//                     markers: this.state.organistaion_marker,
//                     // type: "chemist",
//                     // clickedkirana: true,
//                   })
//                   // this.OraganizationalAlertsDisplay()
//                 }}>
//                   <View style={{ justifyContent: 'center', alignItems: 'center', width: wp("50%"), height: hp("7.5%") }}>

//                     <Text style={{ color: '#0290ea', fontSize: 14 }}>Organizational Alerts</Text>
//                   </View>
//                 </TouchableOpacity>
//                 :
//                 <TouchableOpacity onPress={() => {
//                   this.setState({
//                     markers: this.state.organistaion_marker,
//                     // type: "chemist",
//                     NearByAlerts: false,
//                     OrganizationalAlerts: true,
//                   })
//                   // this.OraganizationalAlertsDisplay()
//                 }}>
//                   <View style={{ justifyContent: 'center', alignItems: 'center', width: wp("50%"), height: hp("7.5%"), backgroundColor: '#eee' }}>

//                     <Text style={{ color: "black", fontSize: 14 }}>Organizational Alerts</Text>
//                   </View>
//                 </TouchableOpacity>}
//             </View>
//           </View>

//           :

//           <View>
//           </View>
//         }


//         {/* </ScrollView> */}

//       </View>

//     )

//   }
//   render() {
//     // console.log("Inside render", this.props.phonenumberuser)
//     // Adding Keyboard Eventlistner

//     const _keyboardDidShow = () => {
//       console.log("keyboard up")
//     };

//     // console.log("Aditya here", this.props.personData.name)
//     // console.log("markerssss", this.state.markers);

//     if (this.state.latitude != null && this.state.markers != null) {
//       // console.log("MArkers: ", this.state.markers)
//       const shift = this.mode.interpolate({
//         inputRange: [0, 1],
//         outputRange: [-1 * height / 2, 0]
//       })
//       // console.log(this.state.markers)
//       return (
//         <View style={{ flex: 1 }}>
//           <KeyboardAvoidingView style={{ flex: 1 }}>
//             {/* Location Icon permanent */}
//             <Icon name="location-on" size={30} style={{ zIndex: 10, top: hp('40%'), left: wp('46%'), position: 'absolute' }} color="#e85433" />
//             <View style={{ position: 'absolute', top: -20, width: '90%', flexDirection: 'row', zIndex: 1, elevation: 10, marginTop: hp('8%'), alignSelf: 'center', alignItems: 'center' }}>
//               <TouchableOpacity onPress={
//                 () => {
//                   this.props.navigation.toggleDrawer();
//                 }
//               }>
//                 <Image
//                   source={require('../assets/ham.png')}
//                   style={{ height: hp("3.5%"), width: hp("3.5%") }}
//                 />
//               </TouchableOpacity>

//               <View style={{ width: wp('4%') }}></View>
//               <View style={{ backgroundColor: 'white', width: '90%', flexDirection: 'row', alignItems: 'center', borderRadius: 10 }}>
//                 <View style={{ width: wp('3%') }}></View>
//                 <TextInput style={{ width: '75%', zIndex: 1 }}
//                   placeholder="Search"
//                   placeholderTextColor="#0290ea"
//                   value={this.state.search}
//                   onChangeText={(text) => {
//                     this.setState({ search: text })
//                   }}
//                 />
//                 <TouchableOpacity onPress={() => {
//                   // console.log("search pressed")
//                   var placeSearched = this.state.search
//                   var placeSearched = placeSearched.replace(/ /g, '+') // replaces all spaces to + for api
//                   // console.log(" Searched Pressed " + placeSearched)
//                   fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + placeSearched + '&key=AIzaSyCIei5GV0BRU0hOd_IoqUSBVKEntmIkSxc')
//                     .then((response) => response.json())
//                     .then((responseJson) => {
//                       // console.log(JSON.stringify(responseJson.results[0].geometry.location))
//                       this.setState({
//                         latitude: responseJson.results[0].geometry.location.lat,
//                         longitude: responseJson.results[0].geometry.location.lng,
//                         isSearch: true
//                       })
//                     })
//                 }}>
//                   <Image
//                     source={require('../assets/search.png')}
//                   />
//                 </TouchableOpacity>
//                 <View style={{ width: wp('5%'), height: hp('3%') }}></View>
//                 <TouchableOpacity onPress={() => {
//                   Geolocation.getCurrentPosition(
//                     (position) => {
//                       // console.log(position)
//                       this.setState({
//                         latitude: position.coords.latitude,
//                         longitude: position.coords.longitude
//                       })
//                     }, (error) => alert(error.message),
//                     {
//                       enableHighAccuracy: false,
//                       timeout: 5000,
//                       maximumAge: 10000
//                     })
//                 }}>
//                   <Image source={require('../assets/location.png')}
//                     style={{ height: hp('3%'), width: wp('4%') }} />
//                 </TouchableOpacity>
//               </View>
//             </View>
//             <MapView
//               style={{ flex: 1 }}
//               minZoomLevel={2}
//               maxZoomLevel={18}
//               provider={PROVIDER_GOOGLE}
//               zoom={12}
//               region={{ //YASH
//                 latitude: this.state.latitude,
//                 longitude: this.state.longitude,
//                 latitudeDelta: 0.007,
//                 longitudeDelta: 0.003
//               }}
//               onRegionChangeComplete={(region) => {
//                 // console.log("region Change", region)
//                 this.latitude1 = region.latitude,
//                   this.longitude1 = region.longitude
//                 console.log("NEW COORDINATES SET", this.latitude1, this.longitude1)
//               }}
//               customMapStyle={generatedMapStyle}
//               onPress={() => {
//                 this.state.markers.forEach((marker) => {
//                   console.log(marker.latitude)
//                 })
//               }}
//             >
//               {/* {console.log(this.state.markers)} */}
//               {this.state.food_marker.map((marker) =>
//                 <Marker
//                   pinColor="green"
//                   title={marker.name}
//                   key={marker.phonenumber}
//                   coordinate={{
//                     latitude: marker.latitude,
//                     longitude: marker.longitude,
//                   }}
//                   onPress={() => {
//                     if (this.props.phonenumberuser == null && this.props.nameuser == null) {
//                       this.props.navigation.navigate('WhoYouAre', { check: this.state.check })
//                     }
//                     // YASH UPDATED WHOLE ELSE, TAKE IT
//                     else {
//                       // this.props.navigation.navigate('Chats', { name: marker.name, phonenumber: marker.phonenumber, description: marker.description, putcolor: true })
//                       this.setState({
//                         isMarkerClicked: true,
//                         markerClickedid: marker.phonenumber
//                       })
//                       // console.log('MARKER Clicked', this.state.markerClickedid)
//                       this.handdlePress()
//                     }
//                   }}
//                 />
//               )}

//               {this.state.anonymous_marker.map((marker) =>
//                 <Marker
//                   pinColor="yellow"
//                   title={marker.name}
//                   key={marker.phonenumber}
//                   coordinate={{
//                     latitude: marker.latitude,
//                     longitude: marker.longitude,
//                   }}
//                   onPress={() => {
//                     if (this.props.phonenumberuser == null && this.props.nameuser == null) {
//                       this.props.navigation.navigate('WhoYouAre', { check: this.state.check })
//                     }
//                     // YASH UPDATED WHOLE ELSE, TAKE IT
//                     else {
//                       // this.props.navigation.navigate('Chats', { name: marker.name, phonenumber: marker.phonenumber, description: marker.description, putcolor: true })
//                       this.setState({
//                         isMarkerClicked: true,
//                         markerClickedid: marker.phonenumber
//                       })
//                       // console.log('MARKER Clicked', this.state.markerClickedid)
//                       this.handdlePress()
//                     }
//                   }}
//                 />
//               )}
//               {<Marker pinColor="red" image="" onPress={() => console.log(this.state.markers)}
//                 // onDragEnd={(e) => this.onMarkerDragEnd(e.nativeEvent.coordinate)} 
//                 coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }}
//                 title="Your Location"
//               // draggable
//               ><Image source={require("../assets/locationpin.png")} style={{ height: hp("2%"), width: wp("4%") }} /></Marker>}
//             </MapView>
//           </KeyboardAvoidingView>
//           {/* <Animated.View style={{position:'absolute',bottom:shift,width:"100%"}}>
//                 <GestureRecognizer onSwipeUp={this.handdlePress}
//                 onSwipeDown={this.handdlePress1} style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
//                   <TouchableOpacity onPress={() => console.log("Hey")} style={{alignSelf:'flex-end',height:hp("9%"),width:wp("22%")}}>
//                         <Image source={require("../assets/sos.png")} />
//                     </TouchableOpacity>
//                     <View style={{width:'100%',backgroundColor:'grey',justifyContent:'center',alignItems:'center',flex:1,height:300}}>
//                         <Text>Aditya raj singnhvi</Text>
//                         <View>
//                             <Text>Hello</Text>
//                         </View>
//                     </View>
//                 </GestureRecognizer>
//                 </Animated.View> */}
//           <Animated.View style={{ position: 'absolute', bottom: shift, width: "100%", borderRadius: wp('5%'), zIndex: 20 }}>
//             <GestureRecognizer onSwipeUp={this.handdlePress}
//               onSwipeDown={this.handdlePress1}
//               style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderRadius: wp('5%') }}>
//               <TouchableOpacity onPress={() => this.props.navigation.navigate("Sosmain", { latitude: this.latitude1, longitude: this.longitude1 })} style={{ alignSelf: 'flex-end', height: hp("6%"), width: wp("20%"), marginBottom: wp('4%') }}>
//                 <Image source={require("../assets/sos.png")} />
//               </TouchableOpacity>
//               {/* <View style={{width:wp('100%'),height:hp('2%'),backgroundColor:"white",marginBottom:wp('1%'),elevation:2}}>
//                                 <View style={{width:wp('10%'),height:hp('1%'),backgroundColor:"black",elevation:1,alignSelf:"center",marginTop:wp('1%')}}>
//                                 </View>
//                             </View> */}
//               {/* <View style={{borderRadius: 100,width:wp("100%")}}>
//               <View style={{backgroundColor:'grey',height:hp("0.5%"),width:wp("100%")}}></View></View> */}
//               <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flex: 1, height: hp('60%'), backgroundColor: "#fff", borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
//                 {/* <View style={{backgroundColor:'grey',height:hp("0.5%"),width:wp("95%")}}></View> */}
//                 {this.renderMarkersPlotted()}
//               </View>
//             </GestureRecognizer>
//           </Animated.View>

//         </View>
//       );
//     }
//     else if (this.state.latitude != null && this.state.markers == null) {
//       const shift = this.mode.interpolate({
//         inputRange: [0, 1],
//         outputRange: [-1 * height / 2, 0]
//       })
//       return (
//         <View style={{ flex: 1 }}>
//           <Icon name="location-on" size={30} style={{ zIndex: 10, top: hp('40%'), left: wp('46%'), position: 'absolute' }} color="#e85433" />
//           <View style={{ position: 'absolute', top: -20, width: '90%', flexDirection: 'row', zIndex: 1, elevation: 10, marginTop: hp('8%'), alignSelf: 'center', alignItems: 'center' }}>
//             <TouchableOpacity onPress={
//               () => {
//                 this.props.navigation.toggleDrawer();
//               }
//             }>
//               <Image
//                 source={require('../assets/ham.png')}
//                 style={{ height: hp("3.5%"), width: hp("3.5%") }}
//               />
//             </TouchableOpacity>

//             <View style={{ width: wp('4%') }}></View>
//             <View style={{ backgroundColor: 'white', width: '90%', flexDirection: 'row', alignItems: 'center', borderRadius: 10 }}>
//               <View style={{ width: wp('3%') }}></View>
//               <TextInput style={{ width: '75%', zIndex: 1 }}
//                 placeholder="Search"
//                 placeholderTextColor="#0290ea"
//                 value={this.state.search}
//                 onChangeText={(text) => {
//                   this.setState({ search: text })
//                 }}
//               />
//               <TouchableOpacity onPress={() => {
//                 // console.log("search pressed")
//                 var placeSearched = this.state.search
//                 var placeSearched = placeSearched.replace(/ /g, '+') // replaces all spaces to + for api
//                 // console.log(" Searched Pressed " + placeSearched)
//                 fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + placeSearched + '&key=AIzaSyCIei5GV0BRU0hOd_IoqUSBVKEntmIkSxc')
//                   .then((response) => response.json())
//                   .then((responseJson) => {
//                     // console.log(JSON.stringify(responseJson.results[0].geometry.location))
//                     this.setState({
//                       latitude: responseJson.results[0].geometry.location.lat,
//                       longitude: responseJson.results[0].geometry.location.lng,
//                       isSearch: true
//                     })
//                   })
//               }}>
//                 <Image
//                   source={require('../assets/search.png')}
//                 />
//               </TouchableOpacity>
//               <View style={{ width: wp('5%'), height: hp('3%') }}></View>
//               <TouchableOpacity onPress={() => {
//                 Geolocation.getCurrentPosition(
//                   (position) => {
//                     // console.log(position)
//                     this.setState({
//                       latitude: position.coords.latitude,
//                       longitude: position.coords.longitude
//                     })
//                   }, (error) => alert(error.message),
//                   {
//                     enableHighAccuracy: false,
//                     timeout: 5000,
//                     maximumAge: 10000
//                   })
//               }}>
//                 <Image source={require('../assets/location.png')}
//                   style={{ height: hp('3%'), width: wp('4%') }} />
//               </TouchableOpacity>
//             </View>
//           </View>
//           <MapView
//             style={{ flex: 1 }}
//             minZoomLevel={2}
//             maxZoomLevel={18}
//             provider={PROVIDER_GOOGLE}
//             zoom={12}
//             region={{
//               latitude: this.state.latitude,
//               longitude: this.state.longitude,
//               latitudeDelta: 0.007,
//               longitudeDelta: 0.003
//             }}
//             customMapStyle={generatedMapStyle}
//           >

//             {<Marker pinColor="red"
//               onPress={() => console.log(this.state.markers)}
//               //  onDragEnd={(e) => this.onMarkerDragEnd(e.nativeEvent.coordinate)} 
//               coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }}
//               title="Your Location"
//             //    draggable
//             />}
//           </MapView>
//           <Animated.View style={{ position: 'absolute', bottom: shift, width: "100%", borderRadius: wp('5%') }}>
//             <GestureRecognizer onSwipeUp={this.handdlePress}
//               onSwipeDown={this.handdlePress1}
//               style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderRadius: wp('5%') }}>
//               <TouchableOpacity onPress={() => console.log("Hey")} style={{ alignSelf: 'flex-end', height: hp("6%"), width: wp("20%"), marginBottom: wp('4%') }}>
//                 <Image source={require("../assets/sos.png")} />
//               </TouchableOpacity>
//               {/* <View style={{width:wp('100%'),height:hp('2%'),backgroundColor:"white",marginBottom:wp('1%'),elevation:2}}>
//                                 <View style={{width:wp('10%'),height:hp('1%'),backgroundColor:"black",elevation:1,alignSelf:"center",marginTop:wp('1%')}}>
//                                 </View>
//                             </View> */}
//               <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flex: 1, height: hp('60%'), backgroundColor: "#fff", borderRadius: 100 }}>
//                 {this.renderMarkersPlotted()}
//               </View>
//             </GestureRecognizer>
//           </Animated.View>
//         </View>
//       );
//     } else {
//       return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <ActivityIndicator />
//           <Text>Please Wait</Text><Text>-or-</Text><Text>Check Your Internet Connection And Restart Your App Again</Text>
//         </View>);
//     }
//   }
// }

// // const mapDispatchToProps = (dispatch) => {
// //   console.log("hey")
// //   return { 
// //     watchPersonData: () => dispatch(watchPersonData())
// //   };
// // }


// const mapStateToProps = (state) => {
//   // console.log(state)
//   return {
//     upload_status: state.textUpload,
//     nameuser: state.nameuser,
//     phonenumberuser: state.phonenumberuser,
//     personData: state.personData
//   }
// }
// // const mapStateToProps = (state) => {
// //   return { 
// //     upload_status: state.textUpload,
// //     nameuser: state.nameuser,
// //     phonenumberuser: state.phonenumberuser,
// //     personData: state.personData
// //   };
// // }

// // const mapDispatchToProps = (dispatch) => {
// //   return { 
// //     watchPersonData: () => dispatch(watchPersonData())
// //   };
// // }



// export default connect(mapStateToProps)(MapShow)


// const generatedMapStyle = [{
//   "featureType": "administrative",
//   "elementType": "geometry.fill",
//   "stylers": [
//     {
//       "color": "#d6e2e6"
//     }
//   ]
// },
// {
//   "featureType": "administrative",
//   "elementType": "geometry.stroke",
//   "stylers": [
//     {
//       "color": "#cfd4d5"
//     }
//   ]
// },
// {
//   "featureType": "administrative",
//   "elementType": "labels.text.fill",
//   "stylers": [
//     {
//       "color": "#7492a8"
//     }
//   ]
// },
// {
//   "featureType": "administrative.neighborhood",
//   "elementType": "labels.text.fill",
//   "stylers": [
//     {
//       "lightness": 25
//     }
//   ]
// },
// {
//   "featureType": "landscape.man_made",
//   "elementType": "geometry.fill",
//   "stylers": [
//     {
//       "color": "#dde2e3"
//     }
//   ]
// },
// {
//   "featureType": "landscape.man_made",
//   "elementType": "geometry.stroke",
//   "stylers": [
//     {
//       "color": "#cfd4d5"
//     }
//   ]
// },
// {
//   "featureType": "landscape.natural",
//   "elementType": "geometry.fill",
//   "stylers": [
//     {
//       "color": "#dde2e3"
//     }
//   ]
// },
// {
//   "featureType": "landscape.natural",
//   "elementType": "labels.text.fill",
//   "stylers": [
//     {
//       "color": "#7492a8"
//     }
//   ]
// },
// {
//   "featureType": "landscape.natural.terrain",
//   "stylers": [
//     {
//       "visibility": "off"
//     }
//   ]
// },
// {
//   "featureType": "poi",
//   "elementType": "geometry.fill",
//   "stylers": [
//     {
//       "color": "#dde2e3"
//     }
//   ]
// },
// {
//   "featureType": "poi",
//   "elementType": "labels.icon",
//   "stylers": [
//     {
//       "saturation": -100
//     }
//   ]
// },
// {
//   "featureType": "poi",
//   "elementType": "labels.text.fill",
//   "stylers": [
//     {
//       "color": "#588ca4"
//     }
//   ]
// },
// {
//   "featureType": "poi.park",
//   "elementType": "geometry.fill",
//   "stylers": [
//     {
//       "color": "#a9de83"
//     }
//   ]
// },
// {
//   "featureType": "poi.park",
//   "elementType": "geometry.stroke",
//   "stylers": [
//     {
//       "color": "#bae6a1"
//     }
//   ]
// },
// {
//   "featureType": "poi.sports_complex",
//   "elementType": "geometry.fill",
//   "stylers": [
//     {
//       "color": "#c6e8b3"
//     }
//   ]
// },
// {
//   "featureType": "poi.sports_complex",
//   "elementType": "geometry.stroke",
//   "stylers": [
//     {
//       "color": "#bae6a1"
//     }
//   ]
// },
// {
//   "featureType": "road",
//   "elementType": "labels.icon",
//   "stylers": [
//     {
//       "saturation": -45
//     },
//     {
//       "lightness": 10
//     },
//     {
//       "visibility": "on"
//     }
//   ]
// },
// {
//   "featureType": "road",
//   "elementType": "labels.text.fill",
//   "stylers": [
//     {
//       "color": "#41626b"
//     }
//   ]
// },
// {
//   "featureType": "road.arterial",
//   "elementType": "geometry.fill",
//   "stylers": [
//     {
//       "color": "#ffffff"
//     }
//   ]
// },
// {
//   "featureType": "road.highway",
//   "elementType": "geometry.fill",
//   "stylers": [
//     {
//       "color": "#c1d1d6"
//     }
//   ]
// },
// {
//   "featureType": "road.highway",
//   "elementType": "geometry.stroke",
//   "stylers": [
//     {
//       "color": "#a6b5bb"
//     }
//   ]
// },
// {
//   "featureType": "road.highway",
//   "elementType": "labels.icon",
//   "stylers": [
//     {
//       "visibility": "on"
//     }
//   ]
// },
// {
//   "featureType": "road.highway.controlled_access",
//   "elementType": "geometry.fill",
//   "stylers": [
//     {
//       "color": "#9fb6bd"
//     }
//   ]
// },
// {
//   "featureType": "road.local",
//   "elementType": "geometry.fill",
//   "stylers": [
//     {
//       "color": "#ffffff"
//     }
//   ]
// },
// {
//   "featureType": "transit",
//   "elementType": "labels.icon",
//   "stylers": [
//     {
//       "saturation": -70
//     }
//   ]
// },
// {
//   "featureType": "transit.line",
//   "elementType": "geometry.fill",
//   "stylers": [
//     {
//       "color": "#b4cbd4"
//     }
//   ]
// },
// {
//   "featureType": "transit.line",
//   "elementType": "labels.text.fill",
//   "stylers": [
//     {
//       "color": "#588ca4"
//     }
//   ]
// },
// {
//   "featureType": "transit.station",
//   "elementType": "labels.text.fill",
//   "stylers": [
//     {
//       "color": "#008cb5"
//     }
//   ]
// },
// {
//   "featureType": "transit.station.airport",
//   "elementType": "geometry.fill",
//   "stylers": [
//     {
//       "saturation": -100
//     },
//     {
//       "lightness": -5
//     }
//   ]
// },
// {
//   "featureType": "water",
//   "elementType": "geometry.fill",
//   "stylers": [
//     {
//       "color": "#a6cbe3"
//     }
//   ]
// }
// ]
import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, Keyboard, TouchableOpacity, Dimensions, Image, ScrollView, Animated, FlatList, TextInput, KeyboardAvoidingView, Linking, BackHandler, ActivityIndicator } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import SlidingUpPanel from 'rn-sliding-up-panel'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import * as firebase from 'firebase'
import { db } from '../routes/config';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { connect } from 'react-redux';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import Icon from "react-native-vector-icons/MaterialIcons"

import Animate from '../screenprev/Animate';

const { height } = Dimensions.get('window')

class MapShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      markers: null,
      check: true,
      found: false,
      name: null,
      NearByAlerts: true,
      OrganizationalAlerts: false,
      organistaion: true,
      near_by_marker: null,
      all_markers: null,
      phonenumber: null,
      org_found: false,
      rerender: true,
      BlockedCounter: 0,
      isMarkerClicked: null, // to check if any marker is clicked YASH
      markerClickedid: null, // phone number of clicked marker YASH
    },
      this.position = null;
    this.longitude1 = null;
    this.latitude1 = null;



  }

  // Keyboard Eventlistners.
  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
  }
  _keyboardDidShow() {
    // console.log("keyboard up")
    this.handdlePress1()
    // Animated.spring(this.mode, {
    //   toValue: 0,
    //   duration: 50,
    //   useNativeDriver: false
    // }).start();
    // console.log(this.latitude1)
  }

  callForInitialFetch = () => {
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({ interval: 10000, fastInterval: 5000 })
      .then(() => {
        var get_current_positon = new Promise((resolve, reject) => {
          Geolocation.getCurrentPosition(
            (position) => {
              // console.log(position)
              this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              })
              // console.log(this.state);

              if (this.state.latitude && this.state.longitude) {
                //changes made line switched
                this.fetchCity()
                resolve(true)

              }
              else
                reject(false)
            }, (error) => alert(error.message),
            {
              enableHighAccuracy: false,
              timeout: 500000,
              maximumAge: 10000
            })
        })

        // console.log(this.state.latitude, this.state.longitude)
        var fetchedmark = []

        //promise to get sos from firebase
        var readdata = new Promise((resolve, reject) => {
          firebase.database().ref('sos/').on("value", function (snapshot) {
            try {
              // console.log("from marker caall ", snapshot.val())
              snapshot.forEach((data) => {
                var marker = {
                  phonenumber: data.val().phonenumber,
                  latitude: data.val().latitude,
                  longitude: data.val().longitude,
                  name: data.val().name,
                  description: data.val().description,
                  category: data.val().category,
                  timestamp: data.val().timestamp,
                }
                fetchedmark.push(marker)
              })
              if (fetchedmark) {
                resolve(fetchedmark)
              }
              else
                reject("No data")
            } catch (error) {
              reject("No data")
            }

          })
        })
        //end of promise one defination

        get_current_positon.then(() => {
          // console.log("promise 1 resolved properly");

          //resolve first promise to get all the sos markers and then find nearby markers and set them to state
          readdata.then((data) => {
            // console.log("data format= ", data);
            var marker_to_display = []
            var food_marker = []
            var anonymous_marker = []
            for (var i = 0; i < data.length; i++) {
              // console.log("type of object  = ", this.state.latitude, this.state.longitude, data[i].latitude, data[i].longitude)
              var dist = this.distance(this.state.latitude, this.state.longitude, data[i].latitude, data[i].longitude)
              // console.log("distance = ", dist);
              data[i].distance=this.dist_meter
              var dist_meter = dist * 1000;
              data[i].distance=dist_meter
              if (dist_meter < 1000000) {
                // console.log("inside if")
                this.setState({
                  found: true,
                })

                if (data[i].category == "Emotional Support") {
                  anonymous_marker.push(data[i])
                }
                //else ke baad paranthesis open close thy uske andr tha food_marker wo change kiya hai idr 
                else {
                  food_marker.push(data[i])
                }
                marker_to_display.push(data[i])
                
              }
              

            }
            console.log("markers to display before sort= ",marker_to_display);
              marker_to_display.sort((a,b)=>{
                return a.distance-b.distance
              })
              console.log("markers to display after sort= ",marker_to_display);
            // console.log("marker_to_display", marker_to_display);
            //markers and near by markers both hold same element
            this.setState({
              food_marker: food_marker,
              anonymous_marker: anonymous_marker,
              markers: marker_to_display,
              near_by_marker: marker_to_display,
              all_markers: data,
            })

            //jab empty hai org toh dhyn rkhna 
            //resolve 2nd promise to find the org. of the current user 

            //in case og google and fb login
            if (this.props.phonenumberuser != null) {
              // console.log("insdie phonenumber user = ", this.props.phonenumberuser);
              //promise to find organisation of user from signupincomplete if exist(in case of google and facebook signin)
              var organisationFromSignUpIncompete = new Promise((resolve, reject) => {
                // console.log("this.props.phonenumberuser", this.props.phonenumberuser)
                if (this.props.phonenumberuser != null) {
                  firebase.database().ref("SignUpInComplete/" + this.props.phonenumberuser).on("value", snapshot => {
                    // console.log("inside firebase call");
                    // console.log(snapshot.val());
                    this.setState({
                      BlockedCounter: Number(snapshot.val().BlockedCounter),
                    })
                    if (snapshot.val())
                      resolve(snapshot.val())
                    else
                      reject("no data")
                  })
                }
              })
              //end of promise two defination

              //promise to get organisation from firebase
              var fetchFromOrganization = (org) => {
                // console.log(org)
                return new Promise((resolve, reject) => {
                  var x = []
                  firebase.database().ref("Organisation/" + org + "/").on("value", (snapshot) => {
                    // console.log("inside  2nd firebase call");
                    try {
                      // console.log(Object.keys(snapshot.val()));
                      if (Object.keys(snapshot.val()))
                        resolve(Object.keys(snapshot.val()))
                      else
                        reject("no data")
                    } catch (err) {
                      reject("no data")
                    }
                  })
                })
              }
              //end of promise three defination

              organisationFromSignUpIncompete.then((x) => {
                // console.log("htdhfdhtdttdh", x)
                // console.log("data= ", x.Organisation);
                var random = new Promise((resolve, reject) => {
                  var arr3 = null
                  firebase.database().ref("Organisation/").on("value", snapshot => {
                    try {
                      arr3 = Object.keys(snapshot.val())
                      if (arr3) {
                        resolve(arr3)
                      } else {
                        reject("no data")
                      }
                    } catch (error) {
                      reject("no data")
                    }

                  })
                })

                random.then(arr3 => {
                  arr3.forEach(val => {
                    if (val == x.Organisation) {
                      if (x.Organisation != "" || x.organistaion != undefined) {
                        //resolve 3rd promise to find all the keys in organisation table for the current user org.
                        fetchFromOrganization(x.Organisation).then((data) => {
                          // console.log("data= ", data)
                          var org_array = []
                          data.forEach((element) => {
                            //ye element phonenummber hai jo organisation ke andr se aaya hai,
                            //toh jab ye number jitne markes sos fetch hue hai unme se kisi bhi number se match karega toh wo no. uss organaisation ke sos ka hai
                            for (let index = 0; index < this.state.all_markers.length; index++) {
                              if (element == this.state.all_markers[index].phonenumber) {
                                //ye orgnaisation match hogai ab 
                                org_array.push(this.state.all_markers[index])
                              }
                            }
                          })//end of foreach loops
                          
                          if (org_array.length != 0) {
                            // console.log("after end of for each= ", org_array);
                            this.setState({
                              organistaion_marker: org_array,
                              org_found: true
                            })
                          }
                          else {
                            // console.log("after end of for each= ", org_array);
                            this.setState({
                              organistaion_marker: org_array,
                              org_found: false
                            })

                          }

                          // console.log("after end of for each= ", org_array);

                          // this.setState({
                          //   organistaion_marker: org_array
                          // })
                        })//end of 3rd resolve
                      }
                    }
                  })
                }).catch((err)=>{

                })
              })//end of 2nd resolve
            }//end of if 
          })//end of 1st resolve
        })//end of get_current_position 
      }).catch(err => {
        // console.log(err)
        Alert.alert("Restart the app")
      })
  }


  componentDidMount() {
    // this.deletefood()
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    this.callForInitialFetch()
  }

  //For deleting normal alert and chats

  // deletefood = (number) => {
  //   // var pro = new Promise((resolve,reject) => {
  //     firebase.database().ref("ChatsUnderYou/alerts/").on("value", snapshot => {
  //       console.log("Object.keys(snapshot.val())",Object.keys(snapshot.val()))
  //       var arr = Object.keys(snapshot.val());
  //       for(var i=0;i<arr.length;i++){
  //         firebase.database().ref("ChatsUnderYou/alerts/"+arr[i]+"/"+number).remove()
  //       }
  //     })
  //     firebase.database().ref("chatroom/"+number).remove()
  //   // })
  // }


  //For deleting anonymous alert and chats
  deletekeys = (item) => {
    // console.log("inside del function\n");
    // console.log(item)
    if (item.category == "Emotional Support") {
      //   firebase.database().ref("ChatsUnderYou/Anonymous/").on("value", snapshot => {
      //     console.log("Object.keys(snapshot.val())",Object.keys(snapshot.val()))
      //     var arr = Object.keys(snapshot.val());
      //     for(var i=0;i<arr.length;i++){
      //       firebase.database().ref("ChatsUnderYou/Anonymous/"+arr[i]+"/"+item.phonenumber+","+item.timestamp).remove()
      //     }
      //   })
      //   firebase.database().ref("OneToOneAnonymous/"+item.phonenumber+","++","+item.timestamp).remove()

      var search = [];
      // console.log("inside . thenm", item);
      var prom8 = new Promise((resolve, reject) => {
        firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/").on("value", snapshot => {
          // console.log("heyu")
          snapshot.forEach((element) => {
            // console.log("element=", element.val());
            if (element.val().alerttimestamp == item.timestamp) {
              search.push(element.val())
              // console.log("element=", element.val());
            }
          })
          if (search)
            resolve(search)
          else
            reject("no data")
        })
      })//end of prom1

      prom8.then((search) => {
        // console.log(search)
        search.forEach((ele) => {
          // console.log(ele, "ele")
          //To remove anonymous chats
          if (this.props.phonenumberuser > ele.phonenumber) {
            var x = this.props.phonenumberuser + ',' + ele.phonenumber;
          } else {
            var x = ele.phonenumber + ',' + this.props.phonenumberuser;
          }
          firebase.database().ref("OneToOneAnonymous/" + x + ',' + item.timestamp).remove();
          firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + ele.phonenumber + ',' + item.timestamp).remove();
        })
        // console.log("search = ", search);

        search.forEach((ele) => {
          firebase.database().ref("ChatsUnderYou/Anonymous/" + ele.phonenumber + "/" + this.props.phonenumberuser + ',' + item.timestamp).remove();
        })
      })
    } else {
      firebase.database().ref("ChatsUnderYou/alerts/").on("value", snapshot => {
        // console.log("Object.keys(snapshot.val())", Object.keys(snapshot.val()))
        var arr = Object.keys(snapshot.val());
        for (var i = 0; i < arr.length; i++) {
          firebase.database().ref("ChatsUnderYou/alerts/" + arr[i] + "/" + item.phonenumber + "," + item.timestamp).remove()
        }
      })
      firebase.database().ref("chatroom/" + item.phonenumber + "," + item.timestamp).remove()
    }
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


  fetchCity = () => {
    // console.log(this.state.latitude)
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.state.latitude + ',' + this.state.longitude + '&key=AIzaSyCIei5GV0BRU0hOd_IoqUSBVKEntmIkSxc')
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson.results[0].address_components));
        firebase.database().ref('SignUpInComplete/' + this.props.phonenumberuser + '/').update({
          address: responseJson.results[0].formatted_address,
        });
        responseJson.results[0].address_components.forEach(element => {
          // console.log(element.types)
          element.types.forEach(type => {
            // console.log(type)
            if (type == "administrative_area_level_2") {
              // console.log("City is: " + element.long_name)
              this.props.dispatch({ type: 'UPDATE_CITY', text: element.long_name })
              firebase.database().ref('SignUpInComplete/' + this.props.phonenumberuser + '/').update({
                City: element.long_name,
              });
            }
            else if (type == "administrative_area_level_1") {
              // console.log("State is: " + element.long_name)
              firebase.database().ref('SignUpInComplete/' + this.props.phonenumberuser + '/').update({
                State: element.long_name
              });
            }
          })
        })
      })
  }

  toRad = (Value) => {
    return Value * Math.PI / 180;
  }

  distance = (x1, y1, x2, y2) => {
    // console.log("inside dostance fumction",x1,x2,y1,y2);

    if ((x1 == x2) && (y1 == y2)) {
      return 0;
    }
    else {
      var R = 6371.0
      var lon1 = this.toRad(y1);
      var lat1 = this.toRad(x1);
      var lon2 = this.toRad(y2);
      var lat2 = this.toRad(x2);
      var dLon = lon2 - lon1
      var dLat = lat2 - lat1

      //  Calculate the arial distance using
      // formulae between two site points
      // var a = Math.sin(dlat / 2) * 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) * 2
      // // a = Math.abs(a)
      // var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      // console.log("c= ",c);

      var arial_distance = R * c
      return arial_distance
    }
  }


  onMarkerDragEnd = (evt) => {
    this.setState({
      latitude: evt.latitude,
      longitude: evt.longitude
    })
  }
  mode = new Animated.Value(0);
  handdlePress = () => {
    Animated.spring(this.mode, {
      toValue: 1,
      duration: 50,
      useNativeDriver: false
    }).start();
  };
  handdlePress1 = () => {
    Animated.spring(this.mode, {
      toValue: 0,
      duration: 50,
      useNativeDriver: false
    }).start();
    //YASH
    this.setState({
      isMarkerClicked: false
    })
  }



  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: hp('2%'),
          width: '100%',
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
  renderMarkersPlotted = () => {
    return (
      <View style={{ height: hp('60%'), backgroundColor: "#fff", elevation: wp('1%'), borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
        <View style={{ height: hp("10%") }}>
          <TouchableOpacity
            onPress={() => {
              if (this.mode._value == 0) {
                this.handdlePress()
              }
              else {
                this.handdlePress1()
              }
            }}
          >
            <View style={{
              height: hp("3%"),
              width: wp("10%"),
              borderBottomWidth: 0.5,
              alignSelf: 'center',
              borderBottomColor: 'grey',
            }}>
            </View>
          </TouchableOpacity>
          <View style={{ alignItems: 'center', justifyContent: 'center', height: hp("5%") }}>
            <Text style={{ fontSize: 18 }}>ALERTS</Text>
          </View>
        </View>
        {/* {console.log(this.state.typeShop.length, "in ciww ansfhsoajf")} */}
        {/* <ScrollView> */}
        {this.state.found || this.state.org_found ? <FlatList
          data={this.state.markers}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={({ item }) => (
            <View>
              {
                this.state.isMarkerClicked ?

                  // now checking if marker clicked phone number equals the sos phone number, then change Font color to blue, else render normally

                  this.state.markerClickedid == item.phonenumber ?
                    // if part
                    item.category == "Emotional Support" ? <View>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('3%'), alignItems: 'center' }}>
                        <View style={{ width: wp("50%") }}>
                          <Text style={{ fontSize: 22, marginLeft: 10, fontWeight: 'bold' }}>
                            Anonymous
                    </Text>
                          <Text style={{ fontSize: 14, marginLeft: 10 }}>
                            {item.category}
                          </Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          {/* <Text style={{ fontSize: 14, marginRight: 10 }}>
                        Category: {item.category}
                      </Text> */}
                          {this.props.phonenumberuser == item.phonenumber ?
                          <View style={{flexDirection:'row',alignItems:'center'}}>

                            <Icon name="directions" size={30} color = "grey" style={{marginRight:wp('2%')}}/>
 

                            {/* <Image source={require('../assets/chatIconGrey.png')} style={{ marginRight: wp("3%") }} /> */}
                            <Icon name="chat-bubble-outline" size={30} color = "grey" style={{marginRight:wp('2%')}} />

                          </View>
                            :
                            <View style={{flexDirection:'row',alignItems:'center'}}>

                          <Icon name="directions" size={30} color = "grey" style={{marginRight:wp('2%')}}/>
                              {/* <Image source={require('../assets/chatIcon.png')} style={{ marginRight: wp("3%") }} /> */}
                              {this.state.BlockedCounter > 2 ? 
                              <Icon name="chat-bubble-outline" size={30} color = "grey" style={{marginRight:wp('2%')}} />
                              :
                              <TouchableOpacity onPress={() => {
                                if (this.props.phonenumberuser == null && this.props.nameuser == null) {
                                  this.props.navigation.navigate('WhoYouAre', { check: this.state.check })
                                }
                                else {
                                  this.props.navigation.navigate('Chats', { name: item.name, phonenumber: item.phonenumber, description: item.description, category: item.category, putcolor: "blue", timestamp: item.timestamp })
                                }
                              }}>
                              <Icon name="chat-bubble-outline" size={30} color = "#0091EA" style={{marginRight:wp('2%')}} />
                              </TouchableOpacity>
                            }
                            </View>
                          }
                          {/* <Image source={require('../assets/ios-call-grey.png')} style={{ marginRight: wp("3%") }} /> */}
                          <Icon name="call" size={30} color = "grey" style={{marginRight:wp('2%')}} />


                          {/* ye check krra hai user ka phonenumber same hai list ke phone number se */}
                          {
                            this.props.phonenumberuser == item.phonenumber ?
                              <View style={{flexDirection:'row'}}>
                                <TouchableOpacity onPress={() => {


                                  Alert.alert(
                                    "Are you sure?",
                                    "If you delete a SOS, all related chats will also be deleted",
                                    [
                                      {
                                        text: "Cancel",
                                        onPress: () => console.log("Cancel Pressed"),
                                        style: "cancel"
                                      },
                                      {
                                        text: "Delete", onPress: () => {
                                          this.deletekeys(item);
                                          firebase.database().ref('sosDeleted/' + item.phonenumber + "," + item.timestamp + '/').set({
                                            name: item.name,
                                            phonenumber: item.phonenumber,
                                            description: item.description,
                                            latitude: item.latitude,
                                            longitude: item.longitude,
                                            category: item.category,
                                          }).then((data) => {
                                            // console.log(data)
                                            firebase.database().ref("sos/" + this.props.phonenumberuser + "," + item.timestamp).remove()
                                            this.setState({
                                              rerender: !this.state.rerender
                                            })
                                            this.callForInitialFetch();
                                          }).catch((err) => {
                                            // console.log(err)
                                          })
                                        }
                                      }
                                    ],
                                    { cancelable: true }
                                  );

                                }}>
                                  <Icon name="delete" size={30} color="#0091EA" style={{ marginRight: wp('2%') }} />
                                </TouchableOpacity>
                              </View>
                              :
                              <View >
                                <Icon name="delete" size={30} color="grey" style={{marginRight:wp('2%')}} />
                              </View>
                          }
                        </View>
                      </View>
                    </View> : <View>
                        {/* changing to blue color of text of selected marker */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('3%'), alignItems: 'center' }}>
                          <View style={{ width: wp("50%") }}>
                            <Text style={{ fontSize: 22, marginLeft: 10, fontWeight: 'bold' }}>
                              {item.name}
                            </Text>
                            <Text style={{ fontSize: 14, marginLeft: 10 }}>
                              Category: {item.category}
                            </Text>
                          </View>

                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {this.props.phonenumberuser == item.phonenumber ?

                          <View style={{flexDirection:'row',alignItems:'center'}}>

                          <TouchableOpacity onPress={()=>{Linking.openURL(`google.navigation:q=${item.latitude}+${item.longitude}`)}}>
                          <Icon name="directions" size={30} color = "#0091EA" style={{marginRight:wp('2%')}}/>
                          </TouchableOpacity>


                          {/* <Image source={require('../assets/chatIconGrey.png')} style={{ marginRight: wp("3%") }} /> */}
                          <Icon name="chat-bubble-outline" size={30} color = "grey" style={{marginRight:wp('2%')}} />

                          <Icon name="call" size={30} color = "grey" style={{marginRight:wp('2%')}} />

                        </View>
                              :
                              <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                          <TouchableOpacity onPress={()=>{Linking.openURL(`google.navigation:q=${item.latitude}+${item.longitude}`)}}>
                          <Icon name="directions" size={30} color = "#0091EA" style={{marginRight:wp('2%')}}/>
                          </TouchableOpacity>  

                                <TouchableOpacity onPress={() => {
                                  if (this.props.phonenumberuser == null && this.props.nameuser == null) {
                                    this.props.navigation.navigate('WhoYouAre', { check: this.state.check })
                                  }
                                  else {
                                    this.props.navigation.navigate('Chats', { name: item.name, phonenumber: item.phonenumber, description: item.description, category: item.category, putcolor: "blue", timestamp: item.timestamp })
                                  }
                                }}>
                                  {/* <Image source={require('../assets/chatIcon.png')} style={{ marginRight: wp("4%") }} /> */}
                                  <Icon name="chat-bubble-outline" size={30} color = "#0091EA" style={{marginRight:wp('2%')}} />

                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                  Linking.openURL(`tel:${item.phonenumber}`)
                                }}>
                                  {/* <Image source={require('../assets/ios-call.png')} style={{ marginRight: wp("4%") }} /> */}
                                  <Icon name="call" size={30} color = "#0091EA" style={{marginRight:wp('2%')}} />

                                </TouchableOpacity>
                              </View>
                            }

                            {/* ye check krra hai user ka phonenumber same hai list ke phone number se */}
                            {
                              this.props.phonenumberuser == item.phonenumber ?
                                <View>
                                  <TouchableOpacity style={{ fontSize: 14 }} onPress={() => {
                                    Alert.alert(
                                      "Are you sure?",
                                      "If you delete a SOS, all related chats will also be deleted",
                                      [
                                        {
                                          text: "Cancel",
                                          onPress: () => console.log("Cancel Pressed"),
                                          style: "cancel"
                                        },
                                        {
                                          text: "Delete", onPress: () => {
                                            this.deletekeys(item);
                                            firebase.database().ref('sosDeleted/' + item.phonenumber + "," + item.timestamp + '/').set({
                                              name: item.name,
                                              phonenumber: item.phonenumber,
                                              description: item.description,
                                              latitude: item.latitude,
                                              longitude: item.longitude,
                                              category: item.category,
                                            }).then((data) => {
                                              // console.log(data)
                                              firebase.database().ref("sos/" + this.props.phonenumberuser + "," + item.timestamp).remove()
                                              this.setState({
                                                rerender: !this.state.rerender
                                              })
                                              this.callForInitialFetch();
                                            }).catch((err) => {
                                              // console.log(err)
                                            })
                                          }
                                        }
                                      ],
                                      { cancelable: true }
                                    );
                                  }}>
                                    <Icon name="delete" size={30} color="#0091EA" style={{ marginRight: wp('2%') }} />
                                  </TouchableOpacity>
                                </View>
                                :
                                <View >
                                  <Icon name="delete" size={30} color="grey" style={{ marginRight: wp('2%') }} />
                                </View>
                            }
                          </View>
                        </View>
                      </View>
                    :
                    // else part
                    item.category == "Emotional Support" ? <View>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('3%'), alignItems: 'center' }}>
                        <View style={{ width: wp("50%") }}>
                          <Text style={{ fontSize: 22, marginLeft: 10 }}>
                            Anonymous
                    </Text>
                          <Text style={{ fontSize: 14, marginLeft: 10 }}>
                            {item.category}
                          </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          {/* <Text style={{ fontSize: 14, marginRight: 10 }}>
                        Category: {item.category}
                      </Text> */}
                          {this.props.phonenumberuser == item.phonenumber ?

                          // abhi dala (for yash reference)
                          <View style={{flexDirection:'row', alignItems:'center'}}>
                          <Icon name="directions" size={30} color = "grey" style={{marginRight:wp('2%')}}/>

                            {/* <Image source={require('../assets/chatIconGrey.png')} style={{ marginRight: wp("4%") }} /> */}
                            <Icon name="chat-bubble-outline" size={30} color = "grey" style={{marginRight:wp('2%')}} />
                            
                          </View>  

                            :
                            <View style={{flexDirection:'row',alignItems:'center'}}>

                          <Icon name="directions" size={30} color = "grey" style={{marginRight:wp('2%')}}/>
                              {/* <Image source={require('../assets/chatIcon.png')} style={{ marginRight: wp("3%") }} /> */}
                              {this.state.BlockedCounter > 2 ? 
                              <Icon name="chat-bubble-outline" size={30} color = "grey" style={{marginRight:wp('2%')}} />
                              :
                              <TouchableOpacity onPress={() => {
                                if (this.props.phonenumberuser == null && this.props.nameuser == null) {
                                  this.props.navigation.navigate('WhoYouAre', { check: this.state.check })
                                }
                                else {
                                  this.props.navigation.navigate('Chats', { name: item.name, phonenumber: item.phonenumber, description: item.description, category: item.category, putcolor: "blue", timestamp: item.timestamp })
                                }
                              }}>
                              <Icon name="chat-bubble-outline" size={30} color = "#0091EA" style={{marginRight:wp('2%')}} />
                              </TouchableOpacity>
                            }
                            </View>
                          }
                          {/* <Image source={require('../assets/ios-call-grey.png')} style={{ marginRight: wp("4%") }} /> */}
                          <Icon name="call" size={30} color = "grey" style={{marginRight:wp('2%')}} />


                          {/* ye check krra hai user ka phonenumber same hai list ke phone number se */}
                          {
                            this.props.phonenumberuser == item.phonenumber ?
                              <View>
                                <TouchableOpacity style={{ fontSize: 14 }} onPress={() => {

                                  Alert.alert(
                                    "Are you sure?",
                                    "If you delete a SOS, all related chats will also be deleted",
                                    [
                                      {
                                        text: "Cancel",
                                        onPress: () => console.log("Cancel Pressed"),
                                        style: "cancel"
                                      },
                                      {
                                        text: "Delete", onPress: () => {

                                          this.deletekeys(item);

                                          firebase.database().ref('sosDeleted/' + item.phonenumber + "," + item.timestamp + '/').set({
                                            name: item.name,
                                            phonenumber: item.phonenumber,
                                            description: item.description,
                                            latitude: item.latitude,
                                            longitude: item.longitude,
                                            category: item.category,
                                            timestamp: item.timestamp
                                          }).then((data) => {
                                            // console.log(data)

                                            firebase.database().ref("sos/" + this.props.phonenumberuser + "," + item.timestamp).remove()
                                            this.setState({
                                              rerender: !this.state.rerender
                                            })
                                            this.callForInitialFetch();
                                          }).catch((err) => {
                                            // console.log(err)
                                          })
                                        }
                                      }
                                    ],
                                    { cancelable: true }
                                  );
                                }}>
                                  <Icon name="delete" size={30} color="#0091EA" style={{ marginRight: wp('2%') }} />
                                </TouchableOpacity>
                              </View>
                              :
                              <View >
                                <Icon name="delete" size={30} color="grey" style={{ marginRight: wp('2%') }} />
                              </View>
                          }
                        </View>
                      </View>
                    </View>

                      :

                      <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('3%'), alignItems: 'center' }}>
                          <View style={{ width: wp("50%") }}>
                            <Text style={{ fontSize: 22, marginLeft: 10 }}>
                              {item.name}
                            </Text>
                            <Text style={{ fontSize: 14, marginLeft: 10 }}>
                              Category: {item.category}
                            </Text>
                          </View>
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {this.props.phonenumberuser == item.phonenumber ?
                          <View style={{flexDirection:'row',alignItems:'center'}}>

                          <TouchableOpacity onPress={()=>{Linking.openURL(`google.navigation:q=${item.latitude}+${item.longitude}`)}}>
                          <Icon name="directions" size={30} color = "#0091EA" style={{marginRight:wp('2%')}}/>
                          </TouchableOpacity>


                          {/* <Image source={require('../assets/chatIconGrey.png')} style={{ marginRight: wp("3%") }} /> */}
                          <Icon name="chat-bubble-outline" size={30} color = "grey" style={{marginRight:wp('2%')}} />

                          <Icon name="call" size={30} color = "grey" style={{marginRight:wp('2%')}} />

                        </View>
                              :
                              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                
                                <TouchableOpacity onPress={()=>{Linking.openURL(`google.navigation:q=${item.latitude}+${item.longitude}`)}}>
                                <Icon name="directions" size={30} color = "#0091EA" style={{marginRight:wp('2%')}}/>
                                </TouchableOpacity>                                 
                                <TouchableOpacity onPress={() => {
                                  if (this.props.phonenumberuser == null && this.props.nameuser == null) {
                                    this.props.navigation.navigate('WhoYouAre', { check: this.state.check })
                                  }
                                  else {
                                    this.props.navigation.navigate('Chats', { name: item.name, phonenumber: item.phonenumber, description: item.description, category: item.category, putcolor: "blue", timestamp: item.timestamp })
                                  }
                                }}>
                                  {/* <Image source={require('../assets/chatIcon.png')} style={{ marginRight: wp("4%") }} /> */}
                                  <Icon name="chat-bubble-outline" size={30} color = "#0091EA" style={{marginRight:wp('2%')}} />

                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                  Linking.openURL(`tel:${item.phonenumber}`)
                                }}>
                                  {/* <Image source={require('../assets/ios-call.png')} style={{ marginRight: wp("4%") }} /> */}
                                  <Icon name="call" size={30} color = "#0091EA" style={{marginRight:wp('2%')}} />

                                </TouchableOpacity>
                              </View>
                            }

                            {/* ye check krra hai user ka phonenumber same hai list ke phone number se */}
                            {
                              this.props.phonenumberuser == item.phonenumber ?
                                <View>
                                  <TouchableOpacity style={{ fontSize: 14 }} onPress={() => {
                                    Alert.alert(
                                      "Are you sure?",
                                      "If you delete a SOS, all related chats will also be deleted",
                                      [
                                        {
                                          text: "Cancel",
                                          onPress: () => console.log("Cancel Pressed"),
                                          style: "cancel"
                                        },
                                        {
                                          text: "Delete", onPress: () => {
                                            this.deletekeys(item);
                                            firebase.database().ref('sosDeleted/' + item.phonenumber + "," + item.timestamp + '/').set({
                                              name: item.name,
                                              phonenumber: item.phonenumber,
                                              description: item.description,
                                              latitude: item.latitude,
                                              longitude: item.longitude,
                                              category: item.category,
                                            }).then((data) => {
                                              // console.log(data)
                                              firebase.database().ref("sos/" + this.props.phonenumberuser + "," + item.timestamp).remove()
                                              this.setState({
                                                rerender: !this.state.rerender
                                              })
                                              this.callForInitialFetch();
                                            }).catch((err) => {
                                              // console.log(err)
                                            })
                                          }
                                        }
                                      ],
                                      { cancelable: true }
                                    );
                                  }}>
                                    <Icon name="delete" size={30} color="#0091EA" style={{ marginRight: wp('2%') }} />
                                  </TouchableOpacity>
                                </View>
                                :
                                <View >
                                  <Icon name="delete" size={30} color="grey" style={{ marginRight: wp('2%') }} />
                                </View>
                            }
                          </View>
                        </View>
                      </View>

                  :

                  item.category == "Emotional Support" ? <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('3%'), alignItems: 'center' }}>
                      <View style={{ width: wp("50%") }}>
                        <Text style={{ fontSize: 22, marginLeft: 10 }}>
                          Anonymous
                    </Text>
                        <Text style={{ fontSize: 14, marginLeft: 10 }}>
                          {item.category}
                        </Text>
                      </View>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {/* <Text style={{ fontSize: 14, marginRight: 10 }}>
                        Category: {item.category}
                      </Text> */}
                        {this.props.phonenumberuser == item.phonenumber ?
                          // <Image source={require('../assets/chatIconGrey.png')} style={{ marginRight: wp("4%") }} />
                          <View style={{flexDirection:'row',alignItems:'center'}}>

                          <Icon name="directions" size={30} color = "grey" style={{marginRight:wp('2%')}}/>

                              <Icon name="chat-bubble-outline" size={30} color = "grey" style={{marginRight:wp('2%')}} />
                            
                          </View>
                          :
                          <View style={{flexDirection:'row',alignItems:'center'}}>

                          <Icon name="directions" size={30} color = "grey" style={{marginRight:wp('2%')}}/>
                              {/* <Image source={require('../assets/chatIcon.png')} style={{ marginRight: wp("3%") }} /> */}
                              {this.state.BlockedCounter > 2 ? 
                              <Icon name="chat-bubble-outline" size={30} color = "grey" style={{marginRight:wp('2%')}} />
                              :
                              <TouchableOpacity onPress={() => {
                                if (this.props.phonenumberuser == null && this.props.nameuser == null) {
                                  this.props.navigation.navigate('WhoYouAre', { check: this.state.check })
                                }
                                else {
                                  this.props.navigation.navigate('Chats', { name: item.name, phonenumber: item.phonenumber, description: item.description, category: item.category, putcolor: "blue", timestamp: item.timestamp })
                                }
                              }}>
                              <Icon name="chat-bubble-outline" size={30} color = "#0091EA" style={{marginRight:wp('2%')}} />
                              </TouchableOpacity>
                            }
                            </View>
                        }
                        {/* <Image source={require('../assets/ios-call-grey.png')} style={{ marginRight: wp("4%") }} /> */}
                        <Icon name="call" size={30} color = "grey" style={{marginRight:wp('2%')}}/>


                        {/* ye check krra hai user ka phonenumber same hai list ke phone number se */}
                        {
                          this.props.phonenumberuser == item.phonenumber ?
                            <View>
                              <TouchableOpacity style={{ fontSize: 14 }} onPress={() => {

                                Alert.alert(
                                  "Are you sure?",
                                  "If you delete a SOS, all related chats will also be deleted",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    {
                                      text: "Delete", onPress: () => {
                                        this.deletekeys(item);
                                        firebase.database().ref('sosDeleted/' + item.phonenumber + "," + item.timestamp + '/').set({
                                          name: item.name,
                                          phonenumber: item.phonenumber,
                                          description: item.description,
                                          latitude: item.latitude,
                                          longitude: item.longitude,
                                          category: item.category,
                                        }).then((data) => {
                                          // console.log(data)
                                          firebase.database().ref("sos/" + this.props.phonenumberuser + "," + item.timestamp).remove()
                                          this.setState({
                                            rerender: !this.state.rerender
                                          })
                                          this.callForInitialFetch();
                                        }).catch((err) => {
                                          // console.log(err)
                                        })
                                      }
                                    }
                                  ],
                                  { cancelable: true }
                                );
                              }}>
                                <Icon name="delete" size={30} color="#0091EA" style={{marginRight:wp('2%')}} />
                              </TouchableOpacity>
                            </View>
                            :
                            <View>
                              <Icon name="delete" size={30} color="grey" style={{marginRight:wp('2%')}} />
                            </View>
                        }
                      </View>
                    </View>
                  </View> : <View>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('3%'), alignItems: 'center' }}>
                        <View style={{ width: wp("50%") }}>
                          <Text style={{ fontSize: 22, marginLeft: 10 }}>
                            {item.name}
                          </Text>
                          <Text style={{ fontSize: 14, marginLeft: 10 }}>
                            Category: {item.category}
                          </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          {this.props.phonenumberuser == item.phonenumber ?
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                          <TouchableOpacity onPress={()=>{Linking.openURL(`google.navigation:q=${item.latitude}+${item.longitude}`)}}>
                          <Icon name="directions" size={30} color = "#0091EA" style={{marginRight:wp('2%')}}/>
                          </TouchableOpacity>

                              {/* <Image source={require('../assets/chatIconGrey.png')} style={{ marginRight: wp("4%") }} /> */}
                              <Icon name="chat-bubble-outline" size={30} color = "grey" style={{marginRight:wp('2%')}}/>

                              {/* <Image source={require('../assets/ios-call-grey.png')} style={{ marginRight: wp("4%") }} /> */}
                              <Icon name="call" size={30} color = "grey" style={{marginRight:wp('2%')}}/>

                            </View>
                            :
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                          <TouchableOpacity onPress={()=>{Linking.openURL(`google.navigation:q=${item.latitude}+${item.longitude}`)}}>
                          <Icon name="directions" size={30} color = "#0091EA" style={{marginRight:wp('2%')}}/>
                          </TouchableOpacity>

                              <TouchableOpacity onPress={() => {
                                if (this.props.phonenumberuser == null && this.props.nameuser == null) {
                                  this.props.navigation.navigate('WhoYouAre', { check: this.state.check })
                                }
                                else {
                                  this.props.navigation.navigate('Chats', { name: item.name, phonenumber: item.phonenumber, description: item.description, category: item.category, putcolor: "blue", timestamp: item.timestamp })
                                }
                              }}>
                                {/* <Image source={require('../assets/chatIcon.png')} style={{ marginRight: wp("4%") }} /> */}
                                <Icon name="chat-bubble-outline" size={30} color = "#0091EA" style={{marginRight:wp('2%')}}/>

                              </TouchableOpacity>
                              <TouchableOpacity onPress={() => {
                                Linking.openURL(`tel:${item.phonenumber}`)
                              }}>
                                {/* <Image source={require('../assets/ios-call.png')} style={{ marginRight: wp("4%") }} /> */}
                                <Icon name="call" size={30} color = "#0091EA" style={{marginRight:wp('2%')}}/>
                                
                              </TouchableOpacity>
                            </View>
                          }

                          {/* ye check krra hai user ka phonenumber same hai list ke phone number se */}
                          {
                            this.props.phonenumberuser == item.phonenumber ?
                              <View>
                                <TouchableOpacity style={{ fontSize: 14 }} onPress={() => {
                                  Alert.alert(
                                    "Are you sure?",
                                    "If you delete a SOS, all related chats will also be deleted",
                                    [
                                      {
                                        text: "Cancel",
                                        onPress: () => console.log("Cancel Pressed"),
                                        style: "cancel"
                                      },
                                      {
                                        text: "Delete", onPress: () => {
                                          this.deletekeys(item);
                                          firebase.database().ref('sosDeleted/' + item.phonenumber + "," + item.timestamp + '/').set({
                                            name: item.name,
                                            phonenumber: item.phonenumber,
                                            description: item.description,
                                            latitude: item.latitude,
                                            longitude: item.longitude,
                                            category: item.category,
                                          }).then((data) => {
                                            // console.log(data)
                                            firebase.database().ref("sos/" + this.props.phonenumberuser + "," + item.timestamp).remove()
                                            this.setState({
                                              rerender: !this.state.rerender
                                            })
                                            this.callForInitialFetch();
                                          }).catch((err) => {
                                            // console.log(err)
                                          })
                                        }
                                      }
                                    ],
                                    { cancelable: true }
                                  );
                                }}>
                                  <Icon name="delete" size={30} color="#0091EA" style={{marginRight:wp('2%')}} />
                                </TouchableOpacity>
                              </View>
                              :
                              <View>
                                <Icon name="delete" size={30} color="grey" style={{marginRight:wp('2%')}} />
                              </View>
                          }
                        </View>
                      </View>
                    </View>

              }


            </View>

          )}
          enableEmptySections={true}
          style={{ margin: hp('1%') }}
          keyExtractor={(item, index) => index}
        /> : <View style={{ justifyContent: 'center', alignItems: 'center', height: hp("42.5%") }}>
            <Text style={{ color: 'grey', fontSize: 18 }}>No alerts found!</Text>
          </View>}

        {this.state.organistaion ?

          <View style={{ flexDirection: "row" }}>

            {/* intially kuch display nai hoga fir baad mai click karogy toh shops aajaegi  */}
            <View>

              {this.state.NearByAlerts ?

                <TouchableOpacity onPress={() => {

                  this.setState({
                    markers: this.state.near_by_marker,
                    // type: "kirana",
                  })
                  // this.NearByALertsDisplay()
                }}>

                  <View style={{ justifyContent: 'center', alignItems: 'center', width: wp("50%"), height: hp("7.5%") }}>

                    <Text style={{ color: '#0290ea', fontSize: 14 }}>Near By Alerts</Text>
                  </View>

                </TouchableOpacity>

                :

                <TouchableOpacity onPress={() => {
                  this.setState({
                    markers: this.state.near_by_marker,
                    NearByAlerts: true,
                    OrganizationalAlerts: false
                  })
                  // console.log("pressing near by alerts", this.state.markers);

                  // this.NearByAlertsDisplay()
                }}>
                  <View style={{ justifyContent: 'center', alignItems: 'center', width: wp("50%"), height: hp("7.5%"), backgroundColor: '#eee' }}>

                    <Text style={{ color: "black", fontSize: 14 }}>Near By Alerts</Text>
                  </View>
                </TouchableOpacity>
              }
            </View>

            <View>


              {this.state.OrganizationalAlerts ?

                <TouchableOpacity onPress={() => {
                  this.setState({
                    markers: this.state.organistaion_marker,
                    // type: "chemist",
                    // clickedkirana: true,
                  })
                  // this.OraganizationalAlertsDisplay()
                }}>
                  <View style={{ justifyContent: 'center', alignItems: 'center', width: wp("50%"), height: hp("7.5%") }}>

                    <Text style={{ color: '#0290ea', fontSize: 14 }}>Organizational Alerts</Text>
                  </View>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => {
                  this.setState({
                    markers: this.state.organistaion_marker,
                    // type: "chemist",
                    NearByAlerts: false,
                    OrganizationalAlerts: true,
                  })
                  // this.OraganizationalAlertsDisplay()
                }}>
                  <View style={{ justifyContent: 'center', alignItems: 'center', width: wp("50%"), height: hp("7.5%"), backgroundColor: '#eee' }}>

                    <Text style={{ color: "black", fontSize: 14 }}>Organizational Alerts</Text>
                  </View>
                </TouchableOpacity>}
            </View>
          </View>

          :

          <View>
          </View>
        }


        {/* </ScrollView> */}

      </View>

    )

  }
  render() {
    // console.log("Inside render", this.props.phonenumberuser)
    // Adding Keyboard Eventlistner

    const _keyboardDidShow = () => {
      console.log("keyboard up")
    };

    // console.log("Aditya here", this.props.personData.name)
    // console.log("markerssss", this.state.markers);

    if (this.state.latitude != null && this.state.markers != null) {
      // console.log("MArkers: ", this.state.markers)
      const shift = this.mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-1 * height / 2, 0]
      })
      // console.log(this.state.markers)
      return (
        <View style={{ flex: 1 }}>
          <KeyboardAvoidingView style={{ flex: 1 }}>
            {/* Location Icon permanent */}
            <Icon name="location-on" size={30} style={{ zIndex: 10, top: hp('40%'), left: wp('46%'), position: 'absolute' }} color="#e85433" />
            <View style={{ position: 'absolute', top: -20, width: '90%', flexDirection: 'row', zIndex: 1, elevation: 10, marginTop: hp('8%'), alignSelf: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={
                () => {
                  this.props.navigation.toggleDrawer();
                }
              }>
                <Image
                  source={require('../assets/ham.png')}
                  style={{ height: hp("3.5%"), width: hp("3.5%") }}
                />
              </TouchableOpacity>

              <View style={{ width: wp('4%') }}></View>
              <View style={{ backgroundColor: 'white', width: '90%', flexDirection: 'row', alignItems: 'center', borderRadius: 10 }}>
                <View style={{ width: wp('3%') }}></View>
                <TextInput style={{ width: '75%', zIndex: 1 }}
                  placeholder="Search Location ..."
                  placeholderTextColor="#0290ea"
                  value={this.state.search}
                  onChangeText={(text) => {
                    this.setState({ search: text })
                  }}
                />
                <TouchableOpacity onPress={() => {
                  // console.log("search pressed")
                  var placeSearched = this.state.search
                  var placeSearched = placeSearched.replace(/ /g, '+') // replaces all spaces to + for api
                  // console.log(" Searched Pressed " + placeSearched)
                  fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + placeSearched + '&key=AIzaSyCIei5GV0BRU0hOd_IoqUSBVKEntmIkSxc')
                    .then((response) => response.json())
                    .then((responseJson) => {
                      // console.log(JSON.stringify(responseJson.results[0].geometry.location))
                      this.setState({
                        latitude: responseJson.results[0].geometry.location.lat,
                        longitude: responseJson.results[0].geometry.location.lng,
                        isSearch: true
                      })
                    })
                }}>
                  <Image
                    source={require('../assets/search.png')}
                  />
                </TouchableOpacity>
                <View style={{ width: wp('5%'), height: hp('3%') }}></View>
                <TouchableOpacity onPress={() => {
                  Geolocation.getCurrentPosition(
                    (position) => {
                      // console.log(position)
                      this.setState({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                      })
                    }, (error) => alert(error.message),
                    {
                      enableHighAccuracy: false,
                      timeout: 5000,
                      maximumAge: 10000
                    })
                }}>
                  <Image source={require('../assets/location.png')}
                    style={{ height: hp('3%'), width: wp('4%') }} />
                </TouchableOpacity>
              </View>
            </View>
            <MapView
              style={{ flex: 1 }}
              minZoomLevel={2}
              maxZoomLevel={18}
              provider={PROVIDER_GOOGLE}
              zoom={12}
              region={{ //YASH
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                latitudeDelta: 0.007,
                longitudeDelta: 0.003
              }}
              onRegionChangeComplete={(region) => {
                // console.log("region Change", region)
                this.latitude1 = region.latitude,
                  this.longitude1 = region.longitude
                console.log("NEW COORDINATES SET", this.latitude1, this.longitude1)
              }}
              customMapStyle={generatedMapStyle}
              onPress={() => {
                this.state.markers.forEach((marker) => {
                  console.log(marker.latitude)
                })
              }}
            >
              {/* {console.log(this.state.markers)} */}
              {this.state.food_marker.map((marker) =>
                <Marker
                  pinColor="green"
                  title={marker.name}
                  key={marker.phonenumber}
                  coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                  }}
                  onPress={() => {
                    if (this.props.phonenumberuser == null && this.props.nameuser == null) {
                      this.props.navigation.navigate('WhoYouAre', { check: this.state.check })
                    }
                    // YASH UPDATED WHOLE ELSE, TAKE IT
                    else {
                      // this.props.navigation.navigate('Chats', { name: marker.name, phonenumber: marker.phonenumber, description: marker.description, putcolor: true })
                      this.setState({
                        isMarkerClicked: true,
                        markerClickedid: marker.phonenumber
                      })
                      // console.log('MARKER Clicked', this.state.markerClickedid)
                      this.handdlePress()
                    }
                  }}
                />
              )}

              {this.state.anonymous_marker.map((marker) =>
                <Marker
                  pinColor="blue"
                  title={marker.name}
                  key={marker.phonenumber}
                  coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                  }}
                  onPress={() => {
                    if (this.props.phonenumberuser == null && this.props.nameuser == null) {
                      this.props.navigation.navigate('WhoYouAre', { check: this.state.check })
                    }
                    // YASH UPDATED WHOLE ELSE, TAKE IT
                    else {
                      // this.props.navigation.navigate('Chats', { name: marker.name, phonenumber: marker.phonenumber, description: marker.description, putcolor: true })
                      this.setState({
                        isMarkerClicked: true,
                        markerClickedid: marker.phonenumber
                      })
                      // console.log('MARKER Clicked', this.state.markerClickedid)
                      this.handdlePress()
                    }
                  }}
                />
              )}
              {<Marker pinColor="red" image="" onPress={() => console.log(this.state.markers)}
                // onDragEnd={(e) => this.onMarkerDragEnd(e.nativeEvent.coordinate)} 
                coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }}
                title="Your Location"
              // draggable
              ><Image source={require("../assets/locationpin.png")} style={{ height: hp("2%"), width: wp("4%") }} /></Marker>}
            </MapView>
          </KeyboardAvoidingView>
          {/* <Animated.View style={{position:'absolute',bottom:shift,width:"100%"}}>
                <GestureRecognizer onSwipeUp={this.handdlePress}
                onSwipeDown={this.handdlePress1} style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                  <TouchableOpacity onPress={() => console.log("Hey")} style={{alignSelf:'flex-end',height:hp("9%"),width:wp("22%")}}>
                        <Image source={require("../assets/sos.png")} />
                    </TouchableOpacity>
                    <View style={{width:'100%',backgroundColor:'grey',justifyContent:'center',alignItems:'center',flex:1,height:300}}>
                        <Text>Aditya raj singnhvi</Text>
                        <View>
                            <Text>Hello</Text>
                        </View>
                    </View>
                </GestureRecognizer>
                </Animated.View> */}
          <Animated.View style={{ position: 'absolute', bottom: shift, width: "100%", borderRadius: wp('5%'), zIndex: 20 }}>
            <GestureRecognizer onSwipeUp={this.handdlePress}
              onSwipeDown={this.handdlePress1}
              style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderRadius: wp('5%') }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Sosmain", { latitude: this.latitude1, longitude: this.longitude1 })} style={{ alignSelf: 'flex-end', height: hp("6%"), width: wp("20%"), marginBottom: wp('4%') }}>
                <Image source={require("../assets/sos.png")} />
              </TouchableOpacity>
              {/* <View style={{width:wp('100%'),height:hp('2%'),backgroundColor:"white",marginBottom:wp('1%'),elevation:2}}>
                                <View style={{width:wp('10%'),height:hp('1%'),backgroundColor:"black",elevation:1,alignSelf:"center",marginTop:wp('1%')}}>
                                </View>
                            </View> */}
              {/* <View style={{borderRadius: 100,width:wp("100%")}}>
              <View style={{backgroundColor:'grey',height:hp("0.5%"),width:wp("100%")}}></View></View> */}
              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flex: 1, height: hp('60%'), backgroundColor: "#fff", borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                {/* <View style={{backgroundColor:'grey',height:hp("0.5%"),width:wp("95%")}}></View> */}
                {this.renderMarkersPlotted()}
              </View>
            </GestureRecognizer>
          </Animated.View>

        </View>
      );
    }
    else if (this.state.latitude != null && this.state.markers == null) {
      const shift = this.mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-1 * height / 2, 0]
      })
      return (
        <View style={{ flex: 1 }}>
          <Icon name="location-on" size={30} style={{ zIndex: 10, top: hp('40%'), left: wp('46%'), position: 'absolute' }} color="#e85433" />
          <View style={{ position: 'absolute', top: -20, width: '90%', flexDirection: 'row', zIndex: 1, elevation: 10, marginTop: hp('8%'), alignSelf: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={
              () => {
                this.props.navigation.toggleDrawer();
              }
            }>
              <Image
                source={require('../assets/ham.png')}
                style={{ height: hp("3.5%"), width: hp("3.5%") }}
              />
            </TouchableOpacity>

            <View style={{ width: wp('4%') }}></View>
            <View style={{ backgroundColor: 'white', width: '90%', flexDirection: 'row', alignItems: 'center', borderRadius: 10 }}>
              <View style={{ width: wp('3%') }}></View>
              <TextInput style={{ width: '75%', zIndex: 1 }}
                placeholder="Search Location"
                placeholderTextColor="#0290ea"
                value={this.state.search}
                onChangeText={(text) => {
                  this.setState({ search: text })
                }}
              />
              <TouchableOpacity onPress={() => {
                // console.log("search pressed")
                var placeSearched = this.state.search
                var placeSearched = placeSearched.replace(/ /g, '+') // replaces all spaces to + for api
                // console.log(" Searched Pressed " + placeSearched)
                fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + placeSearched + '&key=AIzaSyCIei5GV0BRU0hOd_IoqUSBVKEntmIkSxc')
                  .then((response) => response.json())
                  .then((responseJson) => {
                    // console.log(JSON.stringify(responseJson.results[0].geometry.location))
                    this.setState({
                      latitude: responseJson.results[0].geometry.location.lat,
                      longitude: responseJson.results[0].geometry.location.lng,
                      isSearch: true
                    })
                  })
              }}>
                <Image
                  source={require('../assets/search.png')}
                />
              </TouchableOpacity>
              <View style={{ width: wp('5%'), height: hp('3%') }}></View>
              <TouchableOpacity onPress={() => {
                Geolocation.getCurrentPosition(
                  (position) => {
                    // console.log(position)
                    this.setState({
                      latitude: position.coords.latitude,
                      longitude: position.coords.longitude
                    })
                  }, (error) => alert(error.message),
                  {
                    enableHighAccuracy: false,
                    timeout: 5000,
                    maximumAge: 10000
                  })
              }}>
                <Image source={require('../assets/location.png')}
                  style={{ height: hp('3%'), width: wp('4%') }} />
              </TouchableOpacity>
            </View>
          </View>
          <MapView
            style={{ flex: 1 }}
            minZoomLevel={2}
            maxZoomLevel={18}
            provider={PROVIDER_GOOGLE}
            zoom={12}
            region={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.007,
              longitudeDelta: 0.003
            }}
            customMapStyle={generatedMapStyle}
          >

            {<Marker pinColor="red"
              onPress={() => console.log(this.state.markers)}
              //  onDragEnd={(e) => this.onMarkerDragEnd(e.nativeEvent.coordinate)} 
              coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }}
              title="Your Location"
            //    draggable
            />}
          </MapView>
          <Animated.View style={{ position: 'absolute', bottom: shift, width: "100%", borderRadius: wp('5%') }}>
            <GestureRecognizer onSwipeUp={this.handdlePress}
              onSwipeDown={this.handdlePress1}
              style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderRadius: wp('5%') }}>
              <TouchableOpacity onPress={() => console.log("Hey")} style={{ alignSelf: 'flex-end', height: hp("6%"), width: wp("20%"), marginBottom: wp('4%') }}>
                <Image source={require("../assets/sos.png")} />
              </TouchableOpacity>
              {/* <View style={{width:wp('100%'),height:hp('2%'),backgroundColor:"white",marginBottom:wp('1%'),elevation:2}}>
                                <View style={{width:wp('10%'),height:hp('1%'),backgroundColor:"black",elevation:1,alignSelf:"center",marginTop:wp('1%')}}>
                                </View>
                            </View> */}
              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flex: 1, height: hp('60%'), backgroundColor: "#fff", borderRadius: 100 }}>
                {this.renderMarkersPlotted()}
              </View>
            </GestureRecognizer>
          </Animated.View>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator />
          <Text>Please Wait</Text><Text>-or-</Text><Text>Check Your Internet Connection And Restart Your App Again</Text>
        </View>);
    }
  }
}

// const mapDispatchToProps = (dispatch) => {
//   console.log("hey")
//   return { 
//     watchPersonData: () => dispatch(watchPersonData())
//   };
// }


const mapStateToProps = (state) => {
  // console.log(state)
  return {
    upload_status: state.textUpload,
    nameuser: state.nameuser,
    phonenumberuser: state.phonenumberuser,
    personData: state.personData
  }
}
// const mapStateToProps = (state) => {
//   return { 
//     upload_status: state.textUpload,
//     nameuser: state.nameuser,
//     phonenumberuser: state.phonenumberuser,
//     personData: state.personData
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//   return { 
//     watchPersonData: () => dispatch(watchPersonData())
//   };
// }



export default connect(mapStateToProps)(MapShow)


const generatedMapStyle = [{
  "featureType": "administrative",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#d6e2e6"
    }
  ]
},
{
  "featureType": "administrative",
  "elementType": "geometry.stroke",
  "stylers": [
    {
      "color": "#cfd4d5"
    }
  ]
},
{
  "featureType": "administrative",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#7492a8"
    }
  ]
},
{
  "featureType": "administrative.neighborhood",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "lightness": 25
    }
  ]
},
{
  "featureType": "landscape.man_made",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#dde2e3"
    }
  ]
},
{
  "featureType": "landscape.man_made",
  "elementType": "geometry.stroke",
  "stylers": [
    {
      "color": "#cfd4d5"
    }
  ]
},
{
  "featureType": "landscape.natural",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#dde2e3"
    }
  ]
},
{
  "featureType": "landscape.natural",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#7492a8"
    }
  ]
},
{
  "featureType": "landscape.natural.terrain",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "featureType": "poi",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#dde2e3"
    }
  ]
},
{
  "featureType": "poi",
  "elementType": "labels.icon",
  "stylers": [
    {
      "saturation": -100
    }
  ]
},
{
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#588ca4"
    }
  ]
},
{
  "featureType": "poi.park",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#a9de83"
    }
  ]
},
{
  "featureType": "poi.park",
  "elementType": "geometry.stroke",
  "stylers": [
    {
      "color": "#bae6a1"
    }
  ]
},
{
  "featureType": "poi.sports_complex",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#c6e8b3"
    }
  ]
},
{
  "featureType": "poi.sports_complex",
  "elementType": "geometry.stroke",
  "stylers": [
    {
      "color": "#bae6a1"
    }
  ]
},
{
  "featureType": "road",
  "elementType": "labels.icon",
  "stylers": [
    {
      "saturation": -45
    },
    {
      "lightness": 10
    },
    {
      "visibility": "on"
    }
  ]
},
{
  "featureType": "road",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#41626b"
    }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#ffffff"
    }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#c1d1d6"
    }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "geometry.stroke",
  "stylers": [
    {
      "color": "#a6b5bb"
    }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "labels.icon",
  "stylers": [
    {
      "visibility": "on"
    }
  ]
},
{
  "featureType": "road.highway.controlled_access",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#9fb6bd"
    }
  ]
},
{
  "featureType": "road.local",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#ffffff"
    }
  ]
},
{
  "featureType": "transit",
  "elementType": "labels.icon",
  "stylers": [
    {
      "saturation": -70
    }
  ]
},
{
  "featureType": "transit.line",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#b4cbd4"
    }
  ]
},
{
  "featureType": "transit.line",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#588ca4"
    }
  ]
},
{
  "featureType": "transit.station",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#008cb5"
    }
  ]
},
{
  "featureType": "transit.station.airport",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "saturation": -100
    },
    {
      "lightness": -5
    }
  ]
},
{
  "featureType": "water",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#a6cbe3"
    }
  ]
}
]




