import * as React from 'react';
import { StyleSheet, Text,TextInput, View, Button, Alert, TouchableOpacity, Dimensions, Image, Animated, ScrollView, FlatList, SafeAreaView,KeyboardAvoidingView} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { connect } from 'react-redux';
import SlidingUpPanel from 'rn-sliding-up-panel'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import SafeAreaView from 'react-native-safe-are-view'
import * as firebase from 'firebase'
import { db } from '../routes/config';

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

class Register extends React.Component {
    constructor(props) {
        super(props);
        // this.loading = true
        this.state = {
            loading: true,
            latitude: 26.7966,
            longitude: 80.8963,
            error: null,
            markers: [],
            typeShop: [],
            fetched: false,
            depmarkers: [],
            drumarkers: [],
            check: false,
            text : '',
            searchActive : false,
            dataSource:'',
            names:[]

        }
        this.arrayHolder = []
        this.newData = []

    }

    mode = new Animated.Value(1);
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

    FetchingNearByAres = () => {
        var arrfetch = []
        var type = null
        // var name = []
        if(this.props.navigation.state.params.selectionComplete == "kirana")
        {
            type = "department_store"
        }else{
            type = "drugstore"
        }
        console.log(type)
        console.log(this.state.latitude,this.state.longitude)
        fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + this.state.latitude + ',%20' + this.state.longitude + '&radius=1500&type='+type+'&key=AIzaSyCIei5GV0BRU0hOd_IoqUSBVKEntmIkSxc')
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
                    // name.push(element.name)
                })
                // this.setState({names:name})
                return arrfetch
            }).then(arri => {
                this.setState({
                    markers: arri,
                })
            })
            .catch(error => console.log(error))
    }


    SearchFilterFunction(text) {
        //passing the inserted text in textinput
        console.log(text)
        this.newData = this.state.markers.filter(function (item) {
            //applying filter for the inserted text in search bar
            const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            //setting the filtered newData on datasource
            //After setting the data it will automatically re-render the view
            dataSource: this.newData,
            text: text,
        });
        console.log(this.newData)
        console.log(this.state.dataSource);
        
    }
    ListViewItemSeparator = () => {
        //Item sparator view
        return (
            <View
                style={{
                    height: hp('1%'),
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

    renderForSearchActive = () => {
        console.log("text= ", this.state.text, "newData= ", this.newData)

        if (this.state.text.length!=0 && this.newData.length != 0) {
            console.log("if");
            return (


        
                <View>


                <View style={{ position: 'absolute', top: -hp('2%'), width: '90%', flexDirection: 'row', zIndex: 1, elevation: 10, marginTop: hp('8%'), alignSelf: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={
              () => {
                this.props.navigation.toggleDrawer();
              }
            }>
              <Image
                source={require('../assets/search.png')}
                style={{height:hp('3.5%'),width:hp('3.5%')}}
              />
            </TouchableOpacity>

            <View style={{ width: wp('4%') }}></View>
            <View style={{ backgroundColor: 'white', width: '90%', flexDirection: 'row', alignItems: 'center', borderRadius: 100 }}>
              <View style={{ width: wp('4%') }}></View>
              <Image
                source={require('../assets/search.png')}
              />
              <View style={{ width: wp('3%') }}></View>
              <TextInput style={{ width: '70%', zIndex: 2 }}
                placeholder="Search"
                placeholderTextColor="#0290ea"
                autoFocus={true}
                value={this.state.text}
                onChangeText={(text) => {
                //   this.setState({ searchText: text })
                this.SearchFilterFunction(text)
                }}
              />
            </View>

            
          </View> 
          <View style={{height:100,width:wp('75%'),backgroundColor:'red',position:'absolute',top:hp('4%'),zIndex:2,marginTop:hp('8%'),left:hp('9%')}}>

          </View>
          </View>
                   
                


            )
        }
        else {
            console.log("else");
            return (
                <View style={{ flex: 1, backgroundColor: "#fff" }}>
                    <View style={{ flex: 0.12 }}>
                        <TextInput
                            style={styles.textInputStyle}
                            onChangeText={text => this.SearchFilterFunction(text)}
                            value={this.state.text}
                            underlineColorAndroid="transparent"
                            placeholder="Search message"
                        />
                        {/* initially dataSource is kept empty and then as search element are found they are added in it.  */}

                    </View>
                    <View style={{ flex: 0.88 }}>
                        <View style={{ height: hp('80%'), width: wp('100%'), marginLeft: wp('2%') }}>
                            <FlatList
                                data={this.state.chats}
                                ItemSeparatorComponent={this.ListViewItemSeparator}
                                renderItem={({ item }) => (
                                    <TouchableOpacity>
                                        <View style={styles.renderChatsName}>
                                            <Image source={require("../assets/chatIcon.png")} />
                                            <Text style={styles.textStyle}>{item.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )}
                                enableEmptySections={true}
                                style={{ marginTop: 10 }}
                                keyExtractor={(item, index) => index}
                            />
                        </View>
                    </View>

                </View>
            )
        }

    }

    componentDidMount() {
        // console.log(this.props.phonenumberuser)
        Geolocation.getCurrentPosition(
            (position) => {
                fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + position.coords.latitude + ',' + position.coords.longitude + '&key=AIzaSyCIei5GV0BRU0hOd_IoqUSBVKEntmIkSxc')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson.results[0].address_components));
            firebase.database().ref('SignUpInComplete/'+this.props.navigation.state.params.PhoneNumber+'/').update({
                address: responseJson.results[0].formatted_address,
            });
            responseJson.results[0].address_components.forEach(element => {
                console.log(element.types)
                element.types.forEach(type => {
                    console.log(type)
                    if(type == "administrative_area_level_2"){
                        console.log("City is: " + element.long_name)
                        firebase.database().ref('SignUpInComplete/'+this.props.navigation.state.params.PhoneNumber+'/').update({
                            City: element.long_name,
                        });
                    }
                    else if(type == "administrative_area_level_1"){
                        console.log("State is: "+ element.long_name)
                        firebase.database().ref('SignUpInComplete/'+this.props.navigation.state.params.PhoneNumber+'/').update({
                            State: element.long_name
                        });
                    }
                })
            })
})
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
                this.FetchingNearByAres()
            }
        );
    }

    onMarkerDragEnd = (evt) => {
        var pro = new Promise((resolve,reject) => {
        this.setState({
            latitude: evt.latitude,
            longitude: evt.longitude,
            check: true,
        })
        console.log(this.state.check)
        setTimeout(() => {
            if(this.state.check){
                resolve(true)
            }else{
                reject(false)
            }
        }, 1000);
        
    })
    pro.then(() => {
        Alert.alert( Alert.title= 'Hello', Alert.body= 'Do you want to Confirm your Shop Location?', 
        [ {text: 'Skip', onPress: () => this.props.navigation.navigate('Home')}, {text: 'No', onPress: () => this.props.navigation.navigate('RegisterShop'), style: 'cancel'},{text: ' Yes', onPress: ()=>{ 
            firebase.database().ref('SignUpInComplete/'+this.props.navigation.state.params.PhoneNumber+'/').update({
                latitude : this.state.latitude,
                longitude: this.state.longitude,
                isRegistered: true,
            }).then(() => {
                this.props.navigation.navigate('Home')
            });
        }} ],{ cancelable: false } ,"clicking out side of alert will not cancel ");
        this.setState({check:false})
    })
        // this.FetchingNearByAres()
        
    }

    returnAddress = (selectedName, item) => {
        console.log("inside function", selectedName, item)
        if (selectedName === item.name) {
            console.log("inside if")
            return (
                <View>
                    <View style={{ marginLeft: wp('4%'), width: wp('70%') }}>
                        <TouchableOpacity onPress={() => {
                            this.setState({
                                clicked: null,
                            })
                        }}>
                            <Text style={{ fontSize: 22 }}>
                                {item.name}
                            </Text>
                            <Text style={{ fontSize: 14 }}>
                                {item.id}
                            </Text>
                            <Text style={{ fontSize: 14 }}>
                                {item.position.latitude}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        else {
            console.log("inside else");

            return (
                <View>
                    <View style={{ marginLeft: wp('4%'), width: wp('70%') }}>
                        <TouchableOpacity onPress={() => {
                            this.setState({
                                clicked: null,
                            })
                        }}>
                            <Text style={{ fontSize: 22 }}>
                                {item.name}
                            </Text>
                            <Text style={{ fontSize: 14 }}>
                                {item.id}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }


    }
    handleSubmit = (latitude,longitude,id) => {
        Alert.alert( Alert.title= 'Hello', Alert.body= 'Do you want to Confirm your Shop Location?', 
    [ {text: 'Skip', onPress: () => this.props.navigation.navigate('Home')}, {text: 'No', onPress: () => this.props.navigation.navigate('RegisterShop'), style: 'cancel'},{text: ' Yes', onPress: ()=>{ 
        firebase.database().ref('SignUpInComplete/'+this.props.navigation.state.params.PhoneNumber+'/').update({
            latitude : latitude,
            longitude:longitude,
            GoogleId: id,
            isRegistered: true,
        }).then(() => {
            this.props.navigation.navigate('Home')
        });
    }} ],
     { cancelable: false } ,"clicking out side of alert will not cancel ");
        
    }
    SlidingPanel = () => {
        // console.log("Aditya")
        // console.log(this.state.markers)
        // console.log(height, "dcd");

        return (
            <View style={{ height: hp('60%'), backgroundColor: "#fff", elevation: wp('1%'), width: wp('100%') }}>
            <View style={{ height: 50 }}>
              <View style={{
                height: 25,
                width: wp("10%"),
                borderBottomWidth: 1,
                alignSelf: 'center'
              }}>
              </View>
            </View>
            <FlatList
              data={this.state.markers}
              ItemSeparatorComponent={this.ListViewItemSeparator}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {
                    this.setState({
                        clicked: item.name,
                    })
                    // console.log(item.position.latitude)
                    this.handleSubmit(item.position.latitude,item.position.longitude,item.id)
                }}>
                  <View style={{justifyContent: 'center', marginTop: wp('3%') ,paddingBottom:10,alignItems:'center'}}>
                    <Text style={{ fontSize: 22 }}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              enableEmptySections={true}
              style={{ margin: hp('1%') }}
              keyExtractor={(item, index) => index}
            />
          </View>
            
        )
    }
    render() {
        const shift = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-430, 0]
        })
        if (this.state.latitude != null && this.state.markers != null) {
            console.log("Hey")
            return (
                <KeyboardAvoidingView style={{ flex: 1 }}>
            



                    {
                        this.state.text.length!=0 ? this.renderForSearchActive():

                    
                              <View style={{ position: 'absolute', top: -20, width: '90%', flexDirection: 'row', zIndex: 1, elevation: 10, marginTop: hp('8%'), alignSelf: 'center', alignItems: 'center' }}>
           <TouchableOpacity onPress={
                () => {
                    this.props.navigation.navigate("Home")
                }
                }>
                <Image
                    source={require('../assets/back.png')}
                    style={{height:hp("3.5%"),width:hp("3.5%"),backgroundColor:'#0290ea'}}
                />
                </TouchableOpacity>

            <View style={{ width: wp('4%') }}></View>
            <View style={{ backgroundColor: 'white', width: '90%', flexDirection: 'row', alignItems: 'center', borderRadius: 100 }}>
              <View style={{ width: wp('4%') }}></View>
              <Image
                source={require('../assets/search.png')}
              />
              <View style={{ width: wp('3%') }}></View>
              <TextInput style={{ width: '70%', zIndex: 1 }}
                placeholder="Search"
                placeholderTextColor="#0290ea"
                value={this.state.text}
                onChangeText={(text) => {
                //   this.setState({ searchText: text })
                this.SearchFilterFunction(text)
                }}
              />
            </View>
            
          </View>
        }
                    <MapView
                        style={{ flex: 1,zIndex:-1 }}
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
                        {this.state.markers.map((marker) =>
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
              {/* <View style={{width:wp('100%'),height:hp('2%'),backgroundColor:"white",marginBottom:wp('1%'),elevation:2}}>
                                <View style={{width:wp('10%'),height:hp('1%'),backgroundColor:"black",elevation:1,alignSelf:"center",marginTop:wp('1%')}}>
                                </View>
                            </View> */}
              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flex: 1, height: hp('60%'), backgroundColor: "#fff" }}>
                {this.SlidingPanel()}
              </View>
            </GestureRecognizer>
          </Animated.View>
                </KeyboardAvoidingView>
            );
        }else if(this.state.latitude != null ){
            return (
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{marginLeft:wp("4%"),paddingTop:hp("2.5%")}}>
                    <TouchableOpacity onPress={
                () => {
                    this.setState({
                        isEditable : false
                    }) 
                }
                }>
                <Image
                    source={require('../assets/back.png')}
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
                    {/* backgroundColor:"#FFF",elevation:wp('4%') */}
                    <Animated.View style={{ position: 'absolute', bottom: shift, width: "100%", borderRadius: wp('5%') }}>
            <GestureRecognizer onSwipeUp={this.handdlePress}
              onSwipeDown={this.handdlePress1}
              style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderRadius: wp('5%') }}>
              {/* <View style={{width:wp('100%'),height:hp('2%'),backgroundColor:"white",marginBottom:wp('1%'),elevation:2}}>
                                <View style={{width:wp('10%'),height:hp('1%'),backgroundColor:"black",elevation:1,alignSelf:"center",marginTop:wp('1%')}}>
                                </View>
                            </View> */}
              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flex: 1, height: hp('60%'), backgroundColor: "#fff" }}>
                {this.SlidingPanel()}
              </View>
            </GestureRecognizer>
          </Animated.View>
                </SafeAreaView>
            );
        }else{
            return null;
        }
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
  
  export default connect(mapStateToProps)(Register)

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