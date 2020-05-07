import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity,Dimensions,Image,ScrollView ,TextInput} from 'react-native';
import MapView, { PROVIDER_GOOGLE , Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import SlidingUpPanel from 'rn-sliding-up-panel'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from  'react-native-responsive-screen';
import * as firebase from 'firebase'
import {db } from '../routes/config';

const {height} = Dimensions.get('window')

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#f8f9fa',
      alignItems: 'center',
      justifyContent: 'center'
    },
    panel: {
      flex: 1,
      backgroundColor: 'white',
      position: 'relative',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    panelHeader: {
      height: 25,
      width:wp("10%"),
      borderBottomWidth:1,
      alignSelf:'center',
    },
  }
  

export default class MapScreen extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          latitude: null,
          longitude: null,
          error: null,
          markers:[],
          name: null,
          phonenumber: null,
          desc: null,
        }
      }
    componentDidMount() {
        Geolocation.getCurrentPosition(
           (position) => {
             var arrfetch=[]
             console.log(position)
             fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+position.coords.latitude+',%20'+position.coords.longitude+'&radius=1500&type=supermarket&key=AIzaSyCIei5GV0BRU0hOd_IoqUSBVKEntmIkSxc')
        .then(response => response.json() )
        .then(data => {data.results.forEach(element => {
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
      return arrfetch} ).then(arri => {
            // console.log(arri)
            // setMarkerPin(arri)
            this.setState({markers: arri})
            console.log(this.state.markers)
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                error: null,
              });
          })
        .catch(error => console.log(error))
           },
           (error) => this.setState({ error: error.message }),
           { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
         );}    

         onMarkerDragEnd = (evt) => {
            // console.log(evt)
            this.setState({
                latitude: evt.latitude,
                longitude: evt.longitude
            })
         }
         fetchFirebase = () => {
          firebase.database().ref('sos/' + this.state.phonenumber).set({
            name:this.state.name,
            phonenumber: this.state.phonenumber,
            description: this.state.desc,
        }).then((data) => {
          console.log(data)
        }).catch((err) => {
            console.log(err)
        }).then(() => {
        //   firebase.database().ref('chatroom/' + this.state.phonenumber+ '/').push({
        //     text: this.state.desc,
        //     timestamp: null,
        //     user: {
        //       _id: this.state.phonenumber,
        //       name: this.state.name,
        //     }
        // }).then((data) => {
        //   console.log(data)
        // }).catch((err) => {
        //     console.log(err)
        // })
        })
         }
    render() {
        if(this.state.latitude!=null){
        return(
            <View style={{flex:1}}>
            <MapView
                style={{ flex: 1 }}
                minZoomLevel={2}
                maxZoomLevel={18}
                provider = {PROVIDER_GOOGLE}
                zoom = {12}
                initialRegion={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                latitudeDelta: 0.007,
                longitudeDelta: 0.003
                }}
                customMapStyle = { generatedMapStyle }
                // onPress={() => {
                //     this.state.markers.forEach((marker) => {
                //         console.log(marker.position.latitude)
                //     })
                // }}
            >
            {/* {this.state.markers.map((marker) => 
            <Marker
              pinColor = "blue"
              title={marker.name}
              key={marker.id}
            coordinate = {marker.position}
            />
            )} */}
           { <Marker pinColor="red" onPress={() => console.log(this.state.markers)} onDragEnd={(e) => this.onMarkerDragEnd(e.nativeEvent.coordinate)} coordinate={{latitude: this.state.latitude,longitude: this.state.longitude}} title="Your Location" draggable  />}
            </MapView>
            <SlidingUpPanel
          ref={c => (this._panel = c)}
          draggableRange={{top: height / 1.5, bottom: 50}}
          animatedValue={this._draggedValue}
          showBackdrop={false}>
          <View style={styles.panel}>
            <View style={{height:50}}>
            <View style={styles.panelHeader}>
            </View>
            </View>
            <ScrollView style={{marginLeft:wp("8%"),marginRight:wp("8%")}}>
                <Text style={{fontSize:16}}>Name *</Text>
                <TextInput 
                  style={{borderBottomWidth:1,height:hp("5%"),fontSize:16,marginBottom:10}}  
                  onChangeText={(text) => {this.setState({name: text})}}
                />
                <Text style={{fontSize:16}}>Phone number *</Text>
                <View style={{flexDirection:'row',borderBottomWidth:1,marginBottom:10}}>
                <Text style={{fontSize:16,alignSelf:'center',marginRight:5}}>(+91)</Text>
                <TextInput
                  style={{height:hp("6%"),fontSize:16,width:hp("60%")}}
                  keyboardType="name-phone-pad"
                  onChangeText={(text) => {this.setState({phonenumber: text})}}
                />
                </View>
                <Text style={{fontSize:16,marginBottom:10}}>Category</Text>
                <View style={{ flexDirection: "row", width: wp('100%'),marginBottom:20}}>
                            <TouchableOpacity>
                                <View style={{height: hp('6%'), width: wp('40%'), borderWidth: 1, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginRight:wp("2%")}}>
                                    <Text style={{fontSize: 15,color:"#0290ea" }}>Food Supplies</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{height: hp('6%'), width: wp('40%'), borderWidth: 1, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:wp("2%")}}>
                                    <Text style={{fontSize: 18,color:"#0290ea"}}>Others</Text>
                                </View>
                            </TouchableOpacity>
                  </View>
                  <TextInput
                      style={{borderWidth:1,marginBottom:20,height:hp("20%")}}
                      multiline={true}
                      numberOfLines={5}
                      onChangeText={(text) => {this.setState({desc: text})}}
                  />
                  <TouchableOpacity onPress={() => this.fetchFirebase()}>
                  <Image source={require("../assets/Arrow.png")} style={{alignSelf:'center'}}/>
                  </TouchableOpacity>
            </ScrollView>
          </View>
        </SlidingUpPanel>
            </View>
        );}
        else{
            return null
        }
    }
}




const generatedMapStyle = [  {
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