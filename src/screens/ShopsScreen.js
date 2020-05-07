// import * as React from 'react';
// import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Dimensions, Image,KeyboardAvoidingView,Linking, Animated, ScrollView, FlatList, SafeAreaView ,TextInput, ActivityIndicator} from 'react-native';
// import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
// import { connect } from 'react-redux';
// import SlidingUpPanel from 'rn-sliding-up-panel'
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// // import SafeAreaView from 'react-native-safe-are-view'
// import * as firebase from 'firebase'
// import { db } from '../routes/config';
// import RNAndroidLocationEnabler from 'react-native-android-location-enabler';


// import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
// import { resolve } from 'url';

// const { height } = Dimensions.get('window')

// const styles = {
//     container: {
//         flex: 1,
//         backgroundColor: '#f8f9fa',
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     panel: {
//         // flex: 1,
//         backgroundColor: 'white',
//         // position: 'relative'
//     },
//     panelHeader: {
//         height: height / 24,
//         backgroundColor: '#b197fc',
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
// }

// class ShopScreen extends React.Component {
//     constructor(props) {
//         super(props);
//         // this.loading = true
//         this.state = {
//             loadingAreas: true,
//             loadingVendors:true,
//             loadingCity:true,
//             latitude: null,
//             longitude: null,
//             error: null,
//             markers: [],
//             typeShop: [],
//             fetched: false,
//             depmarkers: null,
//             drumarkers: null,
//             user_city:'',
//             RegVendorFromFirebase:null,
//             xyz: false,
//             clickedkirana: true,
//             clickedchemise: false,
//             start : false,
//         },
//             this.signUpInCompleteFetched = null;
//         this.shopList = null
//     }

//     mode = new Animated.Value(0);
//     handdlePress = () => {
//         Animated.spring(this.mode, {
//             toValue: 1,
//             duration: 50,
//             useNativeDriver: false
//         }).start();
//     };
//     handdlePress1 = () => {
//         Animated.timing(this.mode, {
//             toValue: 0,
//             duration: 50,
//             useNativeDriver: false
//         }).start();
//     };



//     //this function fetches kirana and chemist data using google apis 
//     FetchingNearByAres = () => {
//         var arrfetch = []
//         fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + this.state.latitude + ',%20' + this.state.longitude + '&radius=1500&type=department_store&key=AIzaSyCIei5GV0BRU0hOd_IoqUSBVKEntmIkSxc')
//             .then(response => response.json())
//             .then(data => {
//                 data.results.forEach(element => {
//                     var arr = {}
//                     arr = {
//                         id: element.id,
//                         name: element.name,
//                         position: {
//                             latitude: element.geometry.location.lat,
//                             longitude: element.geometry.location.lng
//                         }
//                     }
//                     arrfetch.push(arr)
//                 })
//                 return arrfetch
//             }).then(arri => {
//                 this.setState({
//                     depmarkers: arri,
//                 })
//                 // {this.KiranaDisplaystart()}
//             }).then(() => {
//                 var arrfetch = []
//                 fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + this.state.latitude + ',%20' + this.state.longitude + '&radius=1500&type=drugstore&key=AIzaSyCIei5GV0BRU0hOd_IoqUSBVKEntmIkSxc')
//                     .then(response => response.json())
//                     .then(data => {
//                         data.results.forEach(element => {
//                             var arr = {}
//                             arr = {
//                                 id: element.id,
//                                 name: element.name,
//                                 position: {
//                                     latitude: element.geometry.location.lat,
//                                     longitude: element.geometry.location.lng
//                                 }
//                             }
//                             console.log(arr);

//                             arrfetch.push(arr)
//                         })
//                         return arrfetch
//                     }).then(arri => {
//                         this.setState({
//                             drumarkers: arri,
//                             loadingAreas: false
//                         })
//                         // console.log(arri)
//                     })
//                     .catch(error => console.log(error))
//             })
//             .catch(error => console.log(error))
//     }


//     componentDidMount() {
//         // var latlong =  new Promise((resolve,reject) => {
            
//         // })
//         // //yaha par bhi ek promise daal do confirmation ke liye 
//         // RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
//         // .then(() => {
//         Geolocation.getCurrentPosition(
//             (position) => {
//                 this.setState({
//                     latitude: position.coords.latitude,
//                     longitude: position.coords.longitude,
//                     error: null,
//                 },()=>{
//                     this.setState({
//                         xyz:true,
//                     })
//                 });
//                 this.FetchingNearByAres()
//                 // this.getCurrentCityForUser()
//                 var getCityForCurrentUser = new Promise((resolve, reject) => {
//                     var city = ''
//                     firebase.database().ref("SignUpInComplete/" + this.props.phonenumberuser + "/").on("value", (snapshot) => {
//                         // console.log(snapshot.val().City)
//                         city = snapshot.val().City
//                         if (city)
//                             resolve(city)
//                         else
//                             reject("city not found")
//                     })
//                 })

//                 getCityForCurrentUser.then((city)=>{
//                     this.setState({
//                         user_city:city,
//                         loadingCity:false
//                     })
//                 })

//                 var fetch = new Promise((resolve, reject) => {
//                     var fetchedData = []
//                     firebase.database().ref("SignUpInComplete/").on("value", (snapshot) => {
//                         snapshot.forEach((data) => {
//                             //yaha se wo extract ho rahe hai jinki Gid nai hai aur vendor jese registered hai wo log
//                             //(possible hai ki ye array empty bane)
//                             // console.log("inside= ", data.val());
//                             if (data.val().isRegistered == true) {
//                                 fetchedData.push(data.val())
//                                 // console.log(fetchedData);
        
//                             }
//                         })
//                         // console.log("Fetched data= ", fetchedData);
//                         if (fetchedData)
//                             resolve(fetchedData)
//                     })
//                 })

//                 fetch.then((data)=>{
//                     this.setState({
//                         RegVendorFromFirebase:data,
//                         loadingVendors:false
//                     })
//                 })
//             }, (error) => alert(error.message),
//             {
//               enableHighAccuracy: false,
//               timeout: 500000,
//               maximumAge: 10000
//           }
//         );
//     // }).catch(err => {
//     //         console.log(err)
//     //       })
//     }

//     onMarkerDragEnd = (evt) => {
//         this.setState({
//             latitude: evt.latitude,
//             longitude: evt.longitude,
//             loadingAreas: true,
//             typeShop:[]
            
//         })
//         this.FetchingNearByAres()

//     }

//     distance = (x1, y1, x2, y2) => {
//         // console.log("inside dostance fumction",x1,x2,y1,y2);

//         if ((x1 == x2) && (y1 == y2)) {
//             return 0;
//         }
//         else {
//             var R = 6371.0
//             var lon1 = this.toRad(y1);
//             var lat1 = this.toRad(x1);
//             var lon2 = this.toRad(y2);
//             var lat2 = this.toRad(x2);
//             var dLon = lon2 - lon1
//             var dLat = lat2 - lat1
//             var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//                 Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
//             var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//             var arial_distance = R * c
//             return arial_distance
//         }
//     }

//     //function to convert degree to radians
//     toRad = (Value) => {
//         return Value * Math.PI / 180;
//     }

//     KiranaDisplay = () => {

//         //i have current city and vendor list from Db now.
//         // var city=this.state.user_city
//         // var RegVendorFromFirebase=this.state.RegVendorFromFirebase

//         console.log("inside kirana display");

//         this.shopList = this.state.depmarkers
        
//         //here we have shoplist array which has shops returned from google api and are not registered in our app
//         // these will have no buttons for chat and call.
//         this.state.RegVendorFromFirebase.forEach((Outerelement) => {
//             // console.log("outer= ", Outerelement.GoogleId);

//             //agar element ki google id null nahi hai toh check karo kya ye google id shoplist array mai hai
//             //agar hai to shoplist array se hata do 
//             for (var i = 0; i < this.shopList.length; i++) {
//                 // console.log("inside loop",i,this.shopList[i].id);

//                 if (Outerelement.GoogleId != "") {
//                     // console.log("inside empty");
//                     //category yaha pr automatically match hori hai(yr ek baar cross verify krlena)
//                     if (Outerelement.GoogleId == this.shopList[i].id) {
//                         // console.log("matched");
//                         // console.log(this.shopList,"before")
//                         this.shopList.splice(i, 1)
//                     }
//                 }
//             }
//             //yaha tak shoplist hogaya
//             // console.log("shoplist= ", this.shopList);
//         })

//         //this array contains kirana shops which are registered in our app, will have button for chat and call
//         var storeRegVendorNearMe = []
//         // console.log("regvend = ",this.state.RegVendorFromFirebase);
        
//         this.state.RegVendorFromFirebase.forEach((element) => {
//             console.log("inside forech");
            
//             if (this.state.user_city == element.City  && element.category != "chemist") {
//                 var dist = this.distance(this.state.latitude, this.state.longitude, element.latitude, element.longitude)
//                 var distance = dist * 1000
//                 var round = dist.toFixed(2)
//                 console.log("distance = ",distance);
                
//                 if (distance <= 1500) {
//                     var x={id:element.GoogleId,name:element.name,position:{latitude:element.latitude,longitude:element.longitude},isRegistered:element.isRegistered,distance: round,PhoneNumber: element.PhoneNumber}
//                     storeRegVendorNearMe.push(x)
//                 }

//             }
//         })

//         //jab hum bole ki loading true hai tab wo mko uske andr jane de ga jisme mapview hai aur sliding panel hai
//         // this.setState({
//         //     loading:true
//         // })

//         let combinedArray=[]
//         combinedArray.push(...storeRegVendorNearMe,...this.shopList)
//         console.log("combined array = ",combinedArray);
        
//         this.setState({
//             typeShop:combinedArray
//         })
        

//     }

//     ChemistDisplay = () => {

//         console.log("inside chemist display");
        
//         this.shopList = this.state.drumarkers
        
//         //here we have shoplist array which has shops returned from google api and are not registered in our app
//         // these will have no buttons for chat and call.
//         this.state.RegVendorFromFirebase.forEach((Outerelement) => {
//             // console.log("outer= ", Outerelement.GoogleId);

//             //agar element ki google id null nahi hai toh check karo kya ye google id shoplist array mai hai
//             //agar hai to shoplist array se hata do 
//             for (var i = 0; i < this.shopList.length; i++) {
//                 // console.log("inside loop",i,this.shopList[i].id);

//                 if (Outerelement.GoogleId != "") {
//                     // console.log("inside empty");
//                     //category yaha pr automatically match hori hai(yr ek baar cross verify krlena)
//                     if (Outerelement.GoogleId == this.shopList[i].id) {
//                         // console.log("matched");
//                         // console.log(this.shopList,"before")
//                         this.shopList.splice(i, 1)
//                     }
//                 }
//             }
//             //yaha tak shoplist hogaya
//             // console.log("shoplist= ", this.shopList);
//         })

//         //this array contains kirana shops which are registered in our app, will have button for chat and call
//         var storeRegVendorNearMe = []
//         this.state.RegVendorFromFirebase.forEach((element) => {
//             if (this.state.user_city == element.City  && element.category != "kirana") {
//                 var dist = this.distance(this.state.latitude, this.state.longitude, element.latitude, element.longitude)
//                 var distance = dist * 1000
//                 var round = dist.toFixed(2)
//                 if (distance <= 1500) {
//                     var x={id:element.GoogleId,name:element.name,position:{latitude:element.latitude,longitude:element.longitude},isRegistered:element.isRegistered,distance: round,PhoneNumber: element.PhoneNumber}
//                     storeRegVendorNearMe.push(x)
//                 }

//             }
//         })

//         //jab hum bole ki loading true hai tab wo mko uske andr jane de ga jisme mapview hai aur sliding panel hai
//         // this.setState({
//         //     loading:true
//         // })

//         let combinedArray=[]
//         combinedArray.push(...storeRegVendorNearMe,...this.shopList)
//         this.setState({
//             typeShop:combinedArray
//         })
        


//     }


//     SlidingPanel = () => {
//         return (
//             <View style={{ height: hp('60%'), backgroundColor: "#fff", elevation: wp('1%') , borderTopLeftRadius: 15,borderTopRightRadius: 15}}>
//                 {/* {console.log(this.state.typeShop.length, "in ciww ansfhsoajf")} */}
//                 {/* <ScrollView> */}
//                 <View style={{ height: hp("8%") }}>
//                 <TouchableOpacity
//            onPress={()=>{
//              if(this.mode._value == 0)
//              {
//              this.handdlePress()
//              }
//              else{
//              this.handdlePress1()
//              }
//            }}
//            >
//           <View style={{
//             height: hp("3%"),
//             width: wp("10%"),
//             borderBottomWidth: 0.5,
//             alignSelf: 'center',
//             borderBottomColor: 'grey',
//           }}>
//           </View>
//           </TouchableOpacity>
//           <View style={{alignItems:'center',justifyContent:'center',height:hp("5%")}}>
//               <Text style={{fontSize:18}}>SHOPS</Text>
//           </View>
//         </View>
//                 <FlatList
//                     data={this.state.typeShop}
//                     // ItemSeparatorComponent={this.ListViewItemSeparator}
//                     renderItem={({ item }) => (
//                         <TouchableOpacity>
//                             <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,borderBottomWidth:0.5,height:hp("10%"),borderBottomColor:'#ddd',alignItems:'center'}}>
//                                         <View style={{marginLeft: wp('4%'), width: wp('70%'),justifyContent: 'space-between', alignSelf: 'center',}}>
//                                                 <Text style={{ fontSize: 16 ,color:'black',fontWeight:'bold'}}>
//                                                     {item.name}
//                                                 </Text>
//                                                 {item.distance ? <Text style={{ fontSize: 14 }}>
//                                                     {item.distance} Km
//                                                 </Text> : <Text style={{ fontSize: 14 }}>
//                                                     In 3km from you
//                                                 </Text>}
//                                             {/* <TouchableOpacity> */}
//                                         {/* <Image source={require('../assets/ios-call.png')} /> */}
//                                     {/* </TouchableOpacity> */}

//                                         </View>


//                                 <View >
//                                     {/* yaha par phonenumber mai phone number pass karna padega  */}
//                                     {item.isRegistered ? 
//                                     <View style={{ flexDirection: 'row', width: wp('20%'), justifyContent: 'space-between', alignSelf: 'center', marginRight: wp('4%') }}>
//                                      <TouchableOpacity onPress={() => {
//                                         if (this.props.phonenumberuser == null && this.props.nameuser == null) {
//                                             this.props.navigation.navigate('WhoYouAre')
//                                         }
//                                         else {
//                                             this.props.navigation.navigate('Chats', { name: item.name, phonenumber: item.PhoneNumber, description: null ,category:"shops",putcolor: "yellow"})
//                                         }
//                                     }}>
//                                         <Image source={require('../assets/chatIcon.png')} />
//                                     </TouchableOpacity>
                                   
//                                     <TouchableOpacity onPress={() => {
//                                         Linking.openURL(`tel:${item.PhoneNumber}`)
//                                     }}>
//                                         <Image source={require('../assets/ios-call.png')} />
//                                     </TouchableOpacity>
//                                     </View>
//                                     :
//                                     <View style={{ flexDirection: 'row', width: wp('20%'), justifyContent: 'space-between', alignSelf: 'center', marginRight: wp('4%') }}>
//                                         <Image source={require('../assets/chatIconGrey.png')} />
                                   
//                                         <Image source={require('../assets/ios-call-grey.png')} />
//                                     </View>
//                                     }
                                   
                               
//                                 </View>
//                             </View>
//                         </TouchableOpacity>

//                     )}
//                     enableEmptySections={true}
//                     style={{ marginTop: 10 }}
//                     keyExtractor={(item, index) => index}
//                 />

//                 {/* </ScrollView> */}
//                 <View style={{ flexDirection: "row" }}>
//                     {/* <View style={{ width: wp('50%')}}><Button title="Kirana" color="white" height="5%" onPress={() => {
                        
//                         this.setState({
//                             typeShop: this.state.depmarkers,
//                             type: "kirana",
//                         })
//                         this.KiranaDisplay()
//                     }}
//                         style={{ bottom: 500, width: 550 ,height:hp("10%")}}></Button></View>
//                     <View style={{ width: wp('50%') }}><Button title="Chemist" onPress={() => {
//                         this.setState({
//                             typeShop: this.state.drumarkers,
//                             type: "chemist"
//                         })
                      
//                     }}
//                  style={{ bottom: 500, width: 550 }}></Button></View> */}
//                 {this.state.clickedkirana ? <TouchableOpacity onPress={() => {
                    
//                     this.setState({
//                         typeShop: this.state.depmarkers,
//                         type: "kirana",
//                     })
//                     this.KiranaDisplay()
//                 }}>
//             <View style={{justifyContent:'center',alignItems:'center',width:wp("50%"),height:hp("7.5%")}}>
                
//                     <Text style={{color:'#0290ea',fontSize:14}}>Kirana</Text>
//             </View>
//             </TouchableOpacity> : <TouchableOpacity onPress={() => {
                    
//                     this.setState({
//                         typeShop: this.state.depmarkers,
//                         type: "kirana",
//                         clickedkirana: true,
//                         clickedchemise:false
//                     })
//                     this.KiranaDisplay()
//                 }}>
//             <View style={{justifyContent:'center',alignItems:'center',width:wp("50%"),height:hp("7.5%"),backgroundColor:'#eee'}}>
                
//                     <Text style={{color:"black",fontSize:14}}>Kirana</Text>
//             </View>
//             </TouchableOpacity>}
//             {this.state.clickedchemise ? <TouchableOpacity onPress={() => {
//                         this.setState({
//                             typeShop: this.state.drumarkers,
//                             type: "chemist",
//                             // clickedkirana: true,
//                         })
//                         this.ChemistDisplay()}}>
//             <View style={{justifyContent:'center',alignItems:'center',width:wp("50%"),height:hp("7.5%")}}>
                
//                     <Text style={{color:'#0290ea',fontSize:14}}>Chemist</Text>
//             </View>
//             </TouchableOpacity> : <TouchableOpacity onPress={() => {
//                         this.setState({
//                             typeShop: this.state.drumarkers,
//                             type: "chemist",
//                             clickedchemise: true,
//                             clickedkirana:false
//                         })
//                         this.ChemistDisplay()}}>
//             <View style={{justifyContent:'center',alignItems:'center',width:wp("50%"),height:hp("7.5%"),backgroundColor:'#eee'}}>
                
//                     <Text style={{color:"black",fontSize:14}}>Chemist</Text>
//             </View>
//             </TouchableOpacity>}
//                 {/* <TouchableOpacity onPress={() => {
//                         this.setState({
//                             typeShop: this.state.drumarkers,
//                             type: "chemist"
//                         })
//                         this.ChemistDisplay()
//                     }}>
//                 <View style={{justifyContent:'center',alignItems:'center',width:wp("50%"),height:hp("6%")}}>
                    
//                         <Text style={{color:"grey"}}>chemist</Text>
//                 </View>
//                 </TouchableOpacity> */}
//                 </View>
                
//             </View>

//         )
//     }
//     render() {
//         // console.log(this.state.latitude, this.state.longitude, "latitude and longitude");

//         const shift = this.mode.interpolate({
//             inputRange: [0, 1],
//             outputRange: [-1*height/2, 0]
//         })
//         if(this.state.xyz == true){
//         // if (this.state.loading == false && this.state.typeShop != null) {
//             if(this.state.typeShop!=null  && this.state.loadingCity == false && this.state.loadingAreas == false && this.state.loadingVendors == false ){
//             console.log("Hey")
//             return (
//                 <KeyboardAvoidingView style={{ flex: 1 }}>
//                             <View style={{ position: 'absolute', top: -20, width: '90%', flexDirection: 'row', zIndex: 1, elevation: 10, marginTop: hp('8%'), alignSelf: 'center', alignItems: 'center' }}>
//                     <TouchableOpacity onPress={
//                     () => {
//                         this.props.navigation.toggleDrawer();
//                     }
//                     }>
//                     <Image
//                         source={require('../assets/ham.png')}
//                         style={{height:hp("3.5%"),width:hp("3.5%")}}
//                     />
//                     </TouchableOpacity>
//                 </View>
//                     <MapView
//                         style={{ flex: 1 }}
//                         minZoomLevel={2}
//                         maxZoomLevel={18}
//                         provider={PROVIDER_GOOGLE}
//                         zoom={12}
//                         initialRegion={{
//                             latitude: this.state.latitude,
//                             longitude: this.state.longitude,
//                             latitudeDelta: 0.007,
//                             longitudeDelta: 0.003
//                         }}
//                         customMapStyle={generatedMapStyle}
//                     >
//                         {this.state.typeShop.map((marker) =>
//                             <Marker
//                                 pinColor="blue"
//                                 title={marker.name}
//                                 key={marker.id}
//                                 coordinate={marker.position}
//                             />
//                         )}
//                         {<Marker pinColor="red" onPress={() => console.log(this.state.markers)} onDragEnd={(e) => this.onMarkerDragEnd(e.nativeEvent.coordinate)} coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }} title="Your Location" draggable />}
//                     </MapView>
//                     {/* backgroundColor:"#FFF",elevation:wp('4%') */}
//                     <Animated.View style={{ position: 'absolute', bottom: shift, width: "100%", borderRadius: wp('5%') }}>
//                         <GestureRecognizer onSwipeUp={this.handdlePress}
//                             onSwipeDown={this.handdlePress1}
//                             style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderRadius: wp('5%') }}>
//                             <TouchableOpacity onPress={() => this.props.navigation.navigate("Sosmain",{latitude: this.state.latitude,longitude:this.state.longitude})} style={{ alignSelf: 'flex-end', height: hp("6%"), width: wp("20%"), marginBottom: wp('4%') }}>
//                                 <Image source={require("../assets/sos.png")} />
//                             </TouchableOpacity>
//                             {/* <View style={{width:wp('100%'),height:hp('2%'),backgroundColor:"white",marginBottom:wp('1%'),elevation:2}}>
//                                 <View style={{width:wp('10%'),height:hp('1%'),backgroundColor:"black",elevation:1,alignSelf:"center",marginTop:wp('1%')}}>
//                                 </View>
//                             </View> */}
//                             <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flex: 1, height: hp('60%'), backgroundColor: "#fff",borderRadius: 100 }}>
//                                 {this.SlidingPanel()}
//                             </View>
//                         </GestureRecognizer>
//                     </Animated.View>
//                 </KeyboardAvoidingView>
//             );
//         }
//         else if (this.state.loadingCity == false && this.state.loadingAreas == false && this.state.loadingVendors == false) {
//             console.log("elseif")
//             return (
//                 <KeyboardAvoidingView style={{ flex: 1 }}>
//                     <View style={{ position: 'absolute', top: -20, width: '90%', flexDirection: 'row', zIndex: 1, elevation: 10, marginTop: hp('8%'), alignSelf: 'center', alignItems: 'center' }}>
//                     <TouchableOpacity onPress={
//                     () => {
//                         this.props.navigation.toggleDrawer();
//                     }
//                     }>
//                     <Image
//                         source={require('../assets/ham.png')}
//                         style={{height:hp("3.5%"),width:hp("3.5%")}}
//                     />
//                     </TouchableOpacity>
//                 </View>
//                     <MapView
//                         style={{ flex: 1 }}
//                         minZoomLevel={2}
//                         maxZoomLevel={18}
//                         provider={PROVIDER_GOOGLE}
//                         zoom={12}
//                         initialRegion={{
//                             latitude: this.state.latitude,
//                             longitude: this.state.longitude,
//                             latitudeDelta: 0.007,
//                             longitudeDelta: 0.003
//                         }}
//                         customMapStyle={generatedMapStyle}
//                     >
//                         {<Marker pinColor="red" onPress={() => console.log(this.state.markers)} onDragEnd={(e) => this.onMarkerDragEnd(e.nativeEvent.coordinate)} coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }} title="Your Location" draggable />}
//                     </MapView>
//                     {/* {this.SlidingPanel()} */}
//                     <Animated.View style={{ position: 'absolute', bottom: shift, width: "100%" }}>
//                         <GestureRecognizer onSwipeUp={this.handdlePress}
//                             onSwipeDown={this.handdlePress1} style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
//                             <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flex: 1, height: 300 ,borderRadius: 100}}>
//                                 {this.SlidingPanel()}
//                             </View>
//                         </GestureRecognizer>
//                     </Animated.View>
//                 </KeyboardAvoidingView>
//             );
//         } else {
//             return (
//                 <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//                     <ActivityIndicator />
//                     <Text>Please Wait</Text><Text>-or-</Text><Text>Check Your Internet Connection And Restart Your App Again</Text>
//                 </View>
//             );
//             // return (
//             //     <KeyboardAvoidingView style={{ flex: 1 }}>
//             //         <View style={{ position: 'absolute', top: -20, width: '90%', flexDirection: 'row', zIndex: 1, elevation: 10, marginTop: hp('8%'), alignSelf: 'center', alignItems: 'center' }}>
//             //         <TouchableOpacity onPress={
//             //         () => {
//             //             this.props.navigation.toggleDrawer();
//             //         }
//             //         }>
//             //         <Image
//             //             source={require('../assets/ham.png')}
//             //             style={{height:hp("3.5%"),width:hp("3.5%")}}
//             //         />
//             //         </TouchableOpacity>
//             //     </View>

//             //         <MapView
//             //             style={{ flex: 1 }}
//             //             minZoomLevel={2}
//             //             maxZoomLevel={18}
//             //             provider={PROVIDER_GOOGLE}
//             //             zoom={12}
//             //             initialRegion={{
//             //                 latitude: this.state.latitude,
//             //                 longitude: this.state.longitude,
//             //                 latitudeDelta: 0.007,
//             //                 longitudeDelta: 0.003
//             //             }}
//             //             customMapStyle={generatedMapStyle}
//             //         >
//             //             {<Marker pinColor="red" onPress={() => console.log(this.state.markers)} onDragEnd={(e) => this.onMarkerDragEnd(e.nativeEvent.coordinate)} coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }} title="Your Location" draggable />}
//             //         </MapView>
//             //     </KeyboardAvoidingView>);
//         }
//     }else{
//         return (
//             <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//                 <ActivityIndicator />
//                 <Text>Please Wait</Text><Text>-or-</Text><Text>Check Your Internet Connection And Restart Your App Again</Text>
//             </View>
//         );
//     }
// }
// }


// const mapStateToProps = (state) => {
//     console.log(state)
//     return {
//         upload_status: state.textUpload,
//         nameuser: state.nameuser,
//         phonenumberuser: state.phonenumberuser,
//     }
// }

// export default connect(mapStateToProps)(ShopScreen)

// const generatedMapStyle = [{
//     "featureType": "administrative",
//     "elementType": "geometry.fill",
//     "stylers": [
//         {
//             "color": "#d6e2e6"
//         }
//     ]
// },
// {
//     "featureType": "administrative",
//     "elementType": "geometry.stroke",
//     "stylers": [
//         {
//             "color": "#cfd4d5"
//         }
//     ]
// },
// {
//     "featureType": "administrative",
//     "elementType": "labels.text.fill",
//     "stylers": [
//         {
//             "color": "#7492a8"
//         }
//     ]
// },
// {
//     "featureType": "administrative.neighborhood",
//     "elementType": "labels.text.fill",
//     "stylers": [
//         {
//             "lightness": 25
//         }
//     ]
// },
// {
//     "featureType": "landscape.man_made",
//     "elementType": "geometry.fill",
//     "stylers": [
//         {
//             "color": "#dde2e3"
//         }
//     ]
// },
// {
//     "featureType": "landscape.man_made",
//     "elementType": "geometry.stroke",
//     "stylers": [
//         {
//             "color": "#cfd4d5"
//         }
//     ]
// },
// {
//     "featureType": "landscape.natural",
//     "elementType": "geometry.fill",
//     "stylers": [
//         {
//             "color": "#dde2e3"
//         }
//     ]
// },
// {
//     "featureType": "landscape.natural",
//     "elementType": "labels.text.fill",
//     "stylers": [
//         {
//             "color": "#7492a8"
//         }
//     ]
// },
// {
//     "featureType": "landscape.natural.terrain",
//     "stylers": [
//         {
//             "visibility": "off"
//         }
//     ]
// },
// {
//     "featureType": "poi",
//     "elementType": "geometry.fill",
//     "stylers": [
//         {
//             "color": "#dde2e3"
//         }
//     ]
// },
// {
//     "featureType": "poi",
//     "elementType": "labels.icon",
//     "stylers": [
//         {
//             "saturation": -100
//         }
//     ]
// },
// {
//     "featureType": "poi",
//     "elementType": "labels.text.fill",
//     "stylers": [
//         {
//             "color": "#588ca4"
//         }
//     ]
// },
// {
//     "featureType": "poi.park",
//     "elementType": "geometry.fill",
//     "stylers": [
//         {
//             "color": "#a9de83"
//         }
//     ]
// },
// {
//     "featureType": "poi.park",
//     "elementType": "geometry.stroke",
//     "stylers": [
//         {
//             "color": "#bae6a1"
//         }
//     ]
// },
// {
//     "featureType": "poi.sports_complex",
//     "elementType": "geometry.fill",
//     "stylers": [
//         {
//             "color": "#c6e8b3"
//         }
//     ]
// },
// {
//     "featureType": "poi.sports_complex",
//     "elementType": "geometry.stroke",
//     "stylers": [
//         {
//             "color": "#bae6a1"
//         }
//     ]
// },
// {
//     "featureType": "road",
//     "elementType": "labels.icon",
//     "stylers": [
//         {
//             "saturation": -45
//         },
//         {
//             "lightness": 10
//         },
//         {
//             "visibility": "on"
//         }
//     ]
// },
// {
//     "featureType": "road",
//     "elementType": "labels.text.fill",
//     "stylers": [
//         {
//             "color": "#41626b"
//         }
//     ]
// },
// {
//     "featureType": "road.arterial",
//     "elementType": "geometry.fill",
//     "stylers": [
//         {
//             "color": "#ffffff"
//         }
//     ]
// },
// {
//     "featureType": "road.highway",
//     "elementType": "geometry.fill",
//     "stylers": [
//         {
//             "color": "#c1d1d6"
//         }
//     ]
// },
// {
//     "featureType": "road.highway",
//     "elementType": "geometry.stroke",
//     "stylers": [
//         {
//             "color": "#a6b5bb"
//         }
//     ]
// },
// {
//     "featureType": "road.highway",
//     "elementType": "labels.icon",
//     "stylers": [
//         {
//             "visibility": "on"
//         }
//     ]
// },
// {
//     "featureType": "road.highway.controlled_access",
//     "elementType": "geometry.fill",
//     "stylers": [
//         {
//             "color": "#9fb6bd"
//         }
//     ]
// },
// {
//     "featureType": "road.local",
//     "elementType": "geometry.fill",
//     "stylers": [
//         {
//             "color": "#ffffff"
//         }
//     ]
// },
// {
//     "featureType": "transit",
//     "elementType": "labels.icon",
//     "stylers": [
//         {
//             "saturation": -70
//         }
//     ]
// },
// {
//     "featureType": "transit.line",
//     "elementType": "geometry.fill",
//     "stylers": [
//         {
//             "color": "#b4cbd4"
//         }
//     ]
// },
// {
//     "featureType": "transit.line",
//     "elementType": "labels.text.fill",
//     "stylers": [
//         {
//             "color": "#588ca4"
//         }
//     ]
// },
// {
//     "featureType": "transit.station",
//     "elementType": "labels.text.fill",
//     "stylers": [
//         {
//             "color": "#008cb5"
//         }
//     ]
// },
// {
//     "featureType": "transit.station.airport",
//     "elementType": "geometry.fill",
//     "stylers": [
//         {
//             "saturation": -100
//         },
//         {
//             "lightness": -5
//         }
//     ]
// },
// {
//     "featureType": "water",
//     "elementType": "geometry.fill",
//     "stylers": [
//         {
//             "color": "#a6cbe3"
//         }
//     ]
// }
// ]



import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Dimensions, Image,KeyboardAvoidingView,Linking, Animated, ScrollView, FlatList, SafeAreaView ,TextInput, ActivityIndicator} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { connect } from 'react-redux';
import SlidingUpPanel from 'rn-sliding-up-panel'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import SafeAreaView from 'react-native-safe-are-view'
import * as firebase from 'firebase'
import { db } from '../routes/config';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';


import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { resolve } from 'url';

const { height } = Dimensions.get('window')

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center'
    },
    panel: {
        // flex: 1,
        backgroundColor: 'white',
        // position: 'relative'
    },
    panelHeader: {
        height: height / 24,
        backgroundColor: '#b197fc',
        alignItems: 'center',
        justifyContent: 'center'
    },
}

class ShopScreen extends React.Component {
    constructor(props) {
        super(props);
        // this.loading = true
        this.state = {
            loadingAreas: true,
            loadingVendors:true,
            loadingCity:true,
            latitude: null,
            longitude: null,
            error: null,
            markers: [],
            typeShop: [],
            fetched: false,
            depmarkers: null,
            drumarkers: null,
            user_city:'',
            RegVendorFromFirebase:null,
            xyz: false,
            clickedkirana: true,
            clickedchemise: false,
            start : false,
        },
            this.signUpInCompleteFetched = null;
        this.shopList = null
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
        Animated.timing(this.mode, {
            toValue: 0,
            duration: 50,
            useNativeDriver: false
        }).start();
    };



    //this function fetches kirana and chemist data using google apis 
    FetchingNearByAres = () => {
        var arrfetch = []
        fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + this.state.latitude + ',%20' + this.state.longitude + '&radius=1500&type=department_store&key=AIzaSyCIei5GV0BRU0hOd_IoqUSBVKEntmIkSxc')
            .then(response => response.json())
            .then(data => {
                data.results.forEach(element => {
                    var arr = {}
                    arr = {
                        id: element.id,
                        name: element.name,
                        position: {
                            latitude: element.geometry.location.lat,
                            longitude: element.geometry.location.lng
                        }
                    }
                    arrfetch.push(arr)
                })
                return arrfetch
            }).then(arri => {
                this.setState({
                    depmarkers: arri,
                })
                this.setState({
                    typeShop: this.state.depmarkers,
                    type: "kirana",
                })
                this.KiranaDisplay()
                // {this.KiranaDisplaystart()}
            }).then(() => {
                var arrfetch = []
                fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + this.state.latitude + ',%20' + this.state.longitude + '&radius=1500&type=drugstore&key=AIzaSyCIei5GV0BRU0hOd_IoqUSBVKEntmIkSxc')
                    .then(response => response.json())
                    .then(data => {
                        data.results.forEach(element => {
                            var arr = {}
                            arr = {
                                id: element.id,
                                name: element.name,
                                position: {
                                    latitude: element.geometry.location.lat,
                                    longitude: element.geometry.location.lng
                                }
                            }
                            console.log(arr);

                            arrfetch.push(arr)
                        })
                        return arrfetch
                    }).then(arri => {
                        this.setState({
                            drumarkers: arri,
                            loadingAreas: false
                        })
                        // console.log(arri)
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    }


    componentDidMount() {
        // var latlong =  new Promise((resolve,reject) => {
            
        // })
        // //yaha par bhi ek promise daal do confirmation ke liye 
        // RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
        // .then(() => {
        Geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                },()=>{
                    this.setState({
                        xyz:true,
                    })
                });
                this.FetchingNearByAres()
                // this.getCurrentCityForUser()
                var getCityForCurrentUser = new Promise((resolve, reject) => {
                    var city = ''
                    firebase.database().ref("SignUpInComplete/" + this.props.phonenumberuser + "/").on("value", (snapshot) => {
                        // console.log(snapshot.val().City)
                        city = snapshot.val().City
                        if (city)
                            resolve(city)
                        else
                            reject("city not found")
                    })
                })

                getCityForCurrentUser.then((city)=>{
                    this.setState({
                        user_city:city,
                        loadingCity:false
                    })
                })

                var fetch = new Promise((resolve, reject) => {
                    var fetchedData = []
                    firebase.database().ref("SignUpInComplete/").on("value", (snapshot) => {
                        snapshot.forEach((data) => {
                            //yaha se wo extract ho rahe hai jinki Gid nai hai aur vendor jese registered hai wo log
                            //(possible hai ki ye array empty bane)
                            // console.log("inside= ", data.val());
                            if (data.val().isRegistered == true) {
                                fetchedData.push(data.val())
                                // console.log(fetchedData);
        
                            }
                        })
                        // console.log("Fetched data= ", fetchedData);
                        if (fetchedData)
                            resolve(fetchedData)
                    })
                })

                fetch.then((data)=>{
                    this.setState({
                        RegVendorFromFirebase:data,
                        loadingVendors:false
                    })
                })
            }, (error) => alert(error.message),
            {
              enableHighAccuracy: false,
              timeout: 500000,
              maximumAge: 10000
          }
        );
    // }).catch(err => {
    //         console.log(err)
    //       })
    }

    onMarkerDragEnd = (evt) => {
        this.setState({
            latitude: evt.latitude,
            longitude: evt.longitude,
            loadingAreas: true,
            typeShop:[]
            
        })
        this.FetchingNearByAres()

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
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var arial_distance = R * c
            return arial_distance
        }
    }

    //function to convert degree to radians
    toRad = (Value) => {
        return Value * Math.PI / 180;
    }

    KiranaDisplay = () => {

        //i have current city and vendor list from Db now.
        // var city=this.state.user_city
        // var RegVendorFromFirebase=this.state.RegVendorFromFirebase

        console.log("inside kirana display");

        this.shopList = this.state.depmarkers
        
        //here we have shoplist array which has shops returned from google api and are not registered in our app
        // these will have no buttons for chat and call.
        this.state.RegVendorFromFirebase.forEach((Outerelement) => {
            // console.log("outer= ", Outerelement.GoogleId);

            //agar element ki google id null nahi hai toh check karo kya ye google id shoplist array mai hai
            //agar hai to shoplist array se hata do 
            for (var i = 0; i < this.shopList.length; i++) {
                // console.log("inside loop",i,this.shopList[i].id);

                if (Outerelement.GoogleId != "") {
                    // console.log("inside empty");
                    //category yaha pr automatically match hori hai(yr ek baar cross verify krlena)
                    if (Outerelement.GoogleId == this.shopList[i].id) {
                        // console.log("matched");
                        // console.log(this.shopList,"before")
                        this.shopList.splice(i, 1)
                    }
                }
            }
            //yaha tak shoplist hogaya
            // console.log("shoplist= ", this.shopList);
        })

        //this array contains kirana shops which are registered in our app, will have button for chat and call
        var storeRegVendorNearMe = []
        // console.log("regvend = ",this.state.RegVendorFromFirebase);
        
        this.state.RegVendorFromFirebase.forEach((element) => {
            console.log("inside forech");
            
            if (this.state.user_city == element.City  && element.category != "chemist") {
                var dist = this.distance(this.state.latitude, this.state.longitude, element.latitude, element.longitude)
                var distance = dist * 1000
                var round = dist.toFixed(2)
                console.log("distance = ",distance);
                
                if (distance <= 1500) {
                    var x={id:element.GoogleId,name:element.name,position:{latitude:element.latitude,longitude:element.longitude},isRegistered:element.isRegistered,distance: round,PhoneNumber: element.PhoneNumber}
                    storeRegVendorNearMe.push(x)
                }

            }
        })

        //jab hum bole ki loading true hai tab wo mko uske andr jane de ga jisme mapview hai aur sliding panel hai
        // this.setState({
        //     loading:true
        // })

        let combinedArray=[]
        combinedArray.push(...storeRegVendorNearMe,...this.shopList)
        console.log("combined array = ",combinedArray);
        
        this.setState({
            typeShop:combinedArray
        })
        

    }

    ChemistDisplay = () => {

        console.log("inside chemist display");
        
        this.shopList = this.state.drumarkers
        
        //here we have shoplist array which has shops returned from google api and are not registered in our app
        // these will have no buttons for chat and call.
        this.state.RegVendorFromFirebase.forEach((Outerelement) => {
            // console.log("outer= ", Outerelement.GoogleId);

            //agar element ki google id null nahi hai toh check karo kya ye google id shoplist array mai hai
            //agar hai to shoplist array se hata do 
            for (var i = 0; i < this.shopList.length; i++) {
                // console.log("inside loop",i,this.shopList[i].id);

                if (Outerelement.GoogleId != "") {
                    // console.log("inside empty");
                    //category yaha pr automatically match hori hai(yr ek baar cross verify krlena)
                    if (Outerelement.GoogleId == this.shopList[i].id) {
                        // console.log("matched");
                        // console.log(this.shopList,"before")
                        this.shopList.splice(i, 1)
                    }
                }
            }
            //yaha tak shoplist hogaya
            // console.log("shoplist= ", this.shopList);
        })

        //this array contains kirana shops which are registered in our app, will have button for chat and call
        var storeRegVendorNearMe = []
        this.state.RegVendorFromFirebase.forEach((element) => {
            if (this.state.user_city == element.City  && element.category != "kirana") {
                var dist = this.distance(this.state.latitude, this.state.longitude, element.latitude, element.longitude)
                var distance = dist * 1000
                var round = dist.toFixed(2)
                if (distance <= 1500) {
                    var x={id:element.GoogleId,name:element.name,position:{latitude:element.latitude,longitude:element.longitude},isRegistered:element.isRegistered,distance: round,PhoneNumber: element.PhoneNumber}
                    storeRegVendorNearMe.push(x)
                }

            }
        })

        //jab hum bole ki loading true hai tab wo mko uske andr jane de ga jisme mapview hai aur sliding panel hai
        // this.setState({
        //     loading:true
        // })

        let combinedArray=[]
        combinedArray.push(...storeRegVendorNearMe,...this.shopList)
        this.setState({
            typeShop:combinedArray
        })
        


    }


    SlidingPanel = () => {
        return (
            <View style={{ height: hp('60%'), backgroundColor: "#fff", elevation: wp('1%') , borderTopLeftRadius: 15,borderTopRightRadius: 15}}>
                {/* {console.log(this.state.typeShop.length, "in ciww ansfhsoajf")} */}
                {/* <ScrollView> */}
                <View style={{ height: hp("8%") }}>
                <TouchableOpacity
           onPress={()=>{
             if(this.mode._value == 0)
             {
             this.handdlePress()
             }
             else{
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
          <View style={{alignItems:'center',justifyContent:'center',height:hp("5%")}}>
              <Text style={{fontSize:18}}>SHOPS</Text>
          </View>
        </View>
                <FlatList
                    data={this.state.typeShop}
                    // ItemSeparatorComponent={this.ListViewItemSeparator}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,borderBottomWidth:0.5,height:hp("10%"),borderBottomColor:'#ddd',alignItems:'center'}}>
                                        <View style={{marginLeft: wp('4%'), width: wp('70%'),justifyContent: 'space-between', alignSelf: 'center',}}>
                                                <Text style={{ fontSize: 16 ,color:'black',fontWeight:'bold'}}>
                                                    {item.name}
                                                </Text>
                                                {item.distance ? <Text style={{ fontSize: 14 }}>
                                                    {item.distance} Km
                                                </Text> : <Text style={{ fontSize: 14 }}>
                                                    In 3km from you
                                                </Text>}
                                            {/* <TouchableOpacity> */}
                                        {/* <Image source={require('../assets/ios-call.png')} /> */}
                                    {/* </TouchableOpacity> */}

                                        </View>


                                <View >
                                    {/* yaha par phonenumber mai phone number pass karna padega  */}
                                    {item.isRegistered ? 
                                    <View style={{ flexDirection: 'row', width: wp('20%'), justifyContent: 'space-between', alignSelf: 'center', marginRight: wp('4%') }}>
                                     <TouchableOpacity onPress={() => {
                                        if (this.props.phonenumberuser == null && this.props.nameuser == null) {
                                            this.props.navigation.navigate('WhoYouAre')
                                        }
                                        else {
                                            this.props.navigation.navigate('Chats', { name: item.name, phonenumber: item.PhoneNumber, description: null ,category:"shops",putcolor: "yellow"})
                                        }
                                    }}>
                                        <Image source={require('../assets/chatIcon.png')} />
                                    </TouchableOpacity>
                                   
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL(`tel:${item.PhoneNumber}`)
                                    }}>
                                        <Image source={require('../assets/ios-call.png')} />
                                    </TouchableOpacity>
                                    </View>
                                    :
                                    <View style={{ flexDirection: 'row', width: wp('20%'), justifyContent: 'space-between', alignSelf: 'center', marginRight: wp('4%') }}>
                                        <Image source={require('../assets/chatIconGrey.png')} />
                                   
                                        <Image source={require('../assets/ios-call-grey.png')} />
                                    </View>
                                    }
                                   
                               
                                </View>
                            </View>
                        </TouchableOpacity>

                    )}
                    enableEmptySections={true}
                    style={{ marginTop: 10 }}
                    keyExtractor={(item, index) => index}
                />

                {/* </ScrollView> */}
                <View style={{ flexDirection: "row" }}>
                    {/* <View style={{ width: wp('50%')}}><Button title="Kirana" color="white" height="5%" onPress={() => {
                        
                        this.setState({
                            typeShop: this.state.depmarkers,
                            type: "kirana",
                        })
                        this.KiranaDisplay()
                    }}
                        style={{ bottom: 500, width: 550 ,height:hp("10%")}}></Button></View>
                    <View style={{ width: wp('50%') }}><Button title="Chemist" onPress={() => {
                        this.setState({
                            typeShop: this.state.drumarkers,
                            type: "chemist"
                        })
                      
                    }}
                 style={{ bottom: 500, width: 550 }}></Button></View> */}
                {this.state.clickedkirana ? <TouchableOpacity onPress={() => {
                    
                    this.setState({
                        typeShop: this.state.depmarkers,
                        type: "kirana",
                    })
                    this.KiranaDisplay()
                }}>
            <View style={{justifyContent:'center',alignItems:'center',width:wp("50%"),height:hp("7.5%")}}>
                
                    <Text style={{color:'#0290ea',fontSize:14}}>Kirana</Text>
            </View>
            </TouchableOpacity> : <TouchableOpacity onPress={() => {
                    
                    this.setState({
                        typeShop: this.state.depmarkers,
                        type: "kirana",
                        clickedkirana: true,
                        clickedchemise:false
                    })
                    this.KiranaDisplay()
                }}>
            <View style={{justifyContent:'center',alignItems:'center',width:wp("50%"),height:hp("7.5%"),backgroundColor:'#eee'}}>
                
                    <Text style={{color:"black",fontSize:14}}>Kirana</Text>
            </View>
            </TouchableOpacity>}
            {this.state.clickedchemise ? <TouchableOpacity onPress={() => {
                        this.setState({
                            typeShop: this.state.drumarkers,
                            type: "chemist",
                            // clickedkirana: true,
                        })
                        this.ChemistDisplay()}}>
            <View style={{justifyContent:'center',alignItems:'center',width:wp("50%"),height:hp("7.5%")}}>
                
                    <Text style={{color:'#0290ea',fontSize:14}}>Chemist</Text>
            </View>
            </TouchableOpacity> : <TouchableOpacity onPress={() => {
                        this.setState({
                            typeShop: this.state.drumarkers,
                            type: "chemist",
                            clickedchemise: true,
                            clickedkirana:false
                        })
                        this.ChemistDisplay()}}>
            <View style={{justifyContent:'center',alignItems:'center',width:wp("50%"),height:hp("7.5%"),backgroundColor:'#eee'}}>
                
                    <Text style={{color:"black",fontSize:14}}>Chemist</Text>
            </View>
            </TouchableOpacity>}
                {/* <TouchableOpacity onPress={() => {
                        this.setState({
                            typeShop: this.state.drumarkers,
                            type: "chemist"
                        })
                        this.ChemistDisplay()
                    }}>
                <View style={{justifyContent:'center',alignItems:'center',width:wp("50%"),height:hp("6%")}}>
                    
                        <Text style={{color:"grey"}}>chemist</Text>
                </View>
                </TouchableOpacity> */}
                </View>
                
            </View>

        )
    }
    render() {
        // console.log(this.state.latitude, this.state.longitude, "latitude and longitude");

        const shift = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-1*height/2, 0]
        })
        if(this.state.xyz == true){
        // if (this.state.loading == false && this.state.typeShop != null) {
            if(this.state.typeShop!=null  && this.state.loadingCity == false && this.state.loadingAreas == false && this.state.loadingVendors == false ){
            console.log("Hey")
            return (
                <KeyboardAvoidingView style={{ flex: 1 }}>
                            <View style={{ position: 'absolute', top: -20, width: '90%', flexDirection: 'row', zIndex: 1, elevation: 10, marginTop: hp('8%'), alignSelf: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={
                    () => {
                        this.props.navigation.toggleDrawer();
                    }
                    }>
                    <Image
                        source={require('../assets/ham.png')}
                        style={{height:hp("3.5%"),width:hp("3.5%")}}
                    />
                    </TouchableOpacity>
                </View>
                    <MapView
                        style={{ flex: 1 }}
                        minZoomLevel={2}
                        maxZoomLevel={18}
                        provider={PROVIDER_GOOGLE}
                        zoom={12}
                        initialRegion={{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude,
                            latitudeDelta: 0.007,
                            longitudeDelta: 0.003
                        }}
                        customMapStyle={generatedMapStyle}
                    >
                        {this.state.typeShop.map((marker) =>
                            <Marker
                                pinColor="blue"
                                title={marker.name}
                                key={marker.id}
                                coordinate={marker.position}
                            />
                        )}
                        {<Marker pinColor="red" onPress={() => console.log(this.state.markers)} onDragEnd={(e) => this.onMarkerDragEnd(e.nativeEvent.coordinate)} coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }} title="Your Location" draggable />}
                    </MapView>
                    {/* backgroundColor:"#FFF",elevation:wp('4%') */}
                    <Animated.View style={{ position: 'absolute', bottom: shift, width: "100%", borderRadius: wp('5%') }}>
                        <GestureRecognizer onSwipeUp={this.handdlePress}
                            onSwipeDown={this.handdlePress1}
                            style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderRadius: wp('5%') }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Sosmain",{latitude: this.state.latitude,longitude:this.state.longitude})} style={{ alignSelf: 'flex-end', height: hp("6%"), width: wp("20%"), marginBottom: wp('4%') }}>
                                <Image source={require("../assets/sos.png")} />
                            </TouchableOpacity>
                            {/* <View style={{width:wp('100%'),height:hp('2%'),backgroundColor:"white",marginBottom:wp('1%'),elevation:2}}>
                                <View style={{width:wp('10%'),height:hp('1%'),backgroundColor:"black",elevation:1,alignSelf:"center",marginTop:wp('1%')}}>
                                </View>
                            </View> */}
                            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flex: 1, height: hp('60%'), backgroundColor: "#fff",borderRadius: 100 }}>
                                {this.SlidingPanel()}
                            </View>
                        </GestureRecognizer>
                    </Animated.View>
                </KeyboardAvoidingView>
            );
        }
        else if (this.state.loadingCity == false && this.state.loadingAreas == false && this.state.loadingVendors == false) {
            console.log("elseif")
            return (
                <KeyboardAvoidingView style={{ flex: 1 }}>
                    <View style={{ position: 'absolute', top: -20, width: '90%', flexDirection: 'row', zIndex: 1, elevation: 10, marginTop: hp('8%'), alignSelf: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={
                    () => {
                        this.props.navigation.toggleDrawer();
                    }
                    }>
                    <Image
                        source={require('../assets/ham.png')}
                        style={{height:hp("3.5%"),width:hp("3.5%")}}
                    />
                    </TouchableOpacity>
                </View>
                    <MapView
                        style={{ flex: 1 }}
                        minZoomLevel={2}
                        maxZoomLevel={18}
                        provider={PROVIDER_GOOGLE}
                        zoom={12}
                        initialRegion={{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude,
                            latitudeDelta: 0.007,
                            longitudeDelta: 0.003
                        }}
                        customMapStyle={generatedMapStyle}
                    >
                        {<Marker pinColor="red" onPress={() => console.log(this.state.markers)} onDragEnd={(e) => this.onMarkerDragEnd(e.nativeEvent.coordinate)} coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }} title="Your Location" draggable />}
                    </MapView>
                    {/* {this.SlidingPanel()} */}
                    <Animated.View style={{ position: 'absolute', bottom: shift, width: "100%" }}>
                        <GestureRecognizer onSwipeUp={this.handdlePress}
                            onSwipeDown={this.handdlePress1} style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flex: 1, height: 300 ,borderRadius: 100}}>
                                {this.SlidingPanel()}
                            </View>
                        </GestureRecognizer>
                    </Animated.View>
                </KeyboardAvoidingView>
            );
        } else {
            return (
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator />
                    <Text>Please Wait</Text><Text>-or-</Text><Text>Check Your Internet Connection And Restart Your App Again</Text>
                </View>
            );
            // return (
            //     <KeyboardAvoidingView style={{ flex: 1 }}>
            //         <View style={{ position: 'absolute', top: -20, width: '90%', flexDirection: 'row', zIndex: 1, elevation: 10, marginTop: hp('8%'), alignSelf: 'center', alignItems: 'center' }}>
            //         <TouchableOpacity onPress={
            //         () => {
            //             this.props.navigation.toggleDrawer();
            //         }
            //         }>
            //         <Image
            //             source={require('../assets/ham.png')}
            //             style={{height:hp("3.5%"),width:hp("3.5%")}}
            //         />
            //         </TouchableOpacity>
            //     </View>

            //         <MapView
            //             style={{ flex: 1 }}
            //             minZoomLevel={2}
            //             maxZoomLevel={18}
            //             provider={PROVIDER_GOOGLE}
            //             zoom={12}
            //             initialRegion={{
            //                 latitude: this.state.latitude,
            //                 longitude: this.state.longitude,
            //                 latitudeDelta: 0.007,
            //                 longitudeDelta: 0.003
            //             }}
            //             customMapStyle={generatedMapStyle}
            //         >
            //             {<Marker pinColor="red" onPress={() => console.log(this.state.markers)} onDragEnd={(e) => this.onMarkerDragEnd(e.nativeEvent.coordinate)} coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }} title="Your Location" draggable />}
            //         </MapView>
            //     </KeyboardAvoidingView>);
        }
    }else{
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator />
                <Text>Please Wait</Text><Text>-or-</Text><Text>Check Your Internet Connection And Restart Your App Again</Text>
            </View>
        );
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

export default connect(mapStateToProps)(ShopScreen)

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