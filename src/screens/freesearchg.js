// import React, { Component } from 'react';
// import { Text, View, Image, TextInput, TouchableOpacity, Modal, StyleSheet, KeyboardAvoidingView, Platform, Alert, async, Picker, Linking, FlatList } from 'react-native';
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import db from '../routes/config'
// import * as firebase from 'firebase'
// import { connect } from 'react-redux';

// import CryptoJS from "react-native-crypto-js";
// import { ThemeProvider } from 'react-native-elements';
// // import ModalDropdown from 'react-native-modal-dropdown';


// class search extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             address: '',
//             latitude: '',
//             longitude: '',
//             name: '',
//             PhoneNumber: '',
//             Organisation: '',
//             Password: '',
//             ConfirmPassword: '',
//             GoogleId: '',
//             City: '',
//             State: '',
//             isRegistered: false,
//             // category: this.props.navigation.state.params.selectionComplete,
//             isAlert: false,
//             selected: '',
//             pickerValue: '',
//             pickerData: [],
//             showFlatList: true

//             // isready : false,
//             // isPassword : false,
//         }
//         this.isPassword = false;
//         this.isready = false;
//         this.arrayholder = require('../assets/medical.json');
//         this.newData = []

//     }
//     arr = []
//     // pickerData = ["jsdfhg","ksdjfhb","dsckjfhvg","other"]

//     componentDidMount() {
//         //   console.log(this.props.navigation.state.params.selectionComplete)
//         // console.log("arrayholder = ",this.arrayholder);
//         // this.arrayholder=JSON.stringify(this.arrayholder);
//         // console.log("after= ",this.arrayholder);




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


//     renderOrganizationActive = () => {
//         console.log("ogactive");
//         return (
//             <View >
//                 <TextInput style={styles.TextInput}
//                     value={this.state.Organisation}
//                     autoFocus={true}
//                     onChangeText={(text) => {
//                         this.SearchFilterFunction(text)
//                         this.setState({
//                             showFlatList: true,
//                         })
//                     }}

//                 />
//                 {/* <View style={{ flex: 0.38 }}> */}
//                 {this.state.showFlatList ?
//                     <View style={{ maxHeight: hp('33%') }} >
//                         <FlatList
//                             keyboardShouldPersistTaps={'always'}
//                             data={this.state.dataSource}
//                             ItemSeparatorComponent={this.ListViewItemSeparator}
//                             renderItem={({ item }) => (
//                                 <TouchableOpacity onPress={() => {
//                                     console.log("clicked");

//                                     this.setState({
//                                         Organisation: item,
//                                         showFlatList: false,
//                                     })
//                                 }}>
//                                     <View style={{ flexDirection: "column" }}>
//                                         {/* <Text numberOfLines={1} style={{fontSize:18,paddingLeft:wp('4%'),marginTop:wp('2%')}}>{item.user.name}</Text> */}
//                                         <Text numberOfLines={3} ellipsizeMode="middle" style={{ fontSize: 18 }}>{item.OrganisationName}</Text>
//                                         <Text numberOfLines={3} ellipsizeMode="middle" style={{ fontSize: 18 }}>{item.City}</Text>
//                                         <Text numberOfLines={3} ellipsizeMode="middle" style={{ fontSize: 18 }}>{item.State}</Text>
//                                         <Text numberOfLines={3} ellipsizeMode="middle" style={{ fontSize: 18 }}>{item.ContactNumber}</Text>
//                                         <Text numberOfLines={3} ellipsizeMode="middle" style={{ fontSize: 18 }}>{item.RegisteredName}</Text>
//                                         <Text numberOfLines={3} ellipsizeMode="middle" style={{ fontSize: 18 }}>{item.EmailId}</Text>
//                                     </View>
//                                 </TouchableOpacity>

//                             )}
//                             enableEmptySections={true}
//                             style={{ marginTop: 10 }}
//                             keyExtractor={(item, index) => index}
//                         />
//                     </View>
//                     :
//                     <View />
//                 }
//             </View>
//         )
//     }


//     SearchFilterFunction(text) {
//         //passing the inserted text in textinput
//         // console.log("text = ",text)
//         // console.log("this.arrayholder= ",this.arrayholder);
//         console.log("text= ", text);
//         var foundObj = []
//         this.arrayholder.forEach(function (item) {
//             //applying filter for the inserted text in search bar
//             console.log("item.OrgNAme = ",item.OrgName);
            
//             const itemDataCity = item.City ? item.City.toUpperCase() : ''.toUpperCase();
//             const textDataCity = text.toUpperCase();
//             const itemDataContactNumber = item.ContactNumber ? item.ContactNumber.toUpperCase() : ''.toUpperCase();
//             const textDataContactNumber = text.toUpperCase();
//             const itemDataEmailId = item.EmailId ? item.EmailId.toUpperCase() : ''.toUpperCase();
//             const textDataEmailId = text.toUpperCase();
//             const itemDataOrgName = item.OrgName ? item.OrgName.toUpperCase() : ''.toUpperCase();
//             const textDataOrgName = text.toUpperCase();
//             const itemDataState = item.State ? item.State.toUpperCase() : ''.toUpperCase();
//             const textDataState = text.toUpperCase();
//             const itemDataRegName = item.RegName ? item.RegName.toUpperCase() : ''.toUpperCase();
//             const textDataRegName = text.toUpperCase();

//             if (itemDataCity.indexOf(textDataCity) > -1)
//                 foundObj.push(item)
//             // return itemDataCity.indexOf(textDataCity) > -1;

//             if (itemDataEmailId.indexOf(textDataEmailId) > -1)
//                 foundObj.push(item)
//             // return itemDataEmailId.indexOf(textDataEmailId) > -1;

//             if (itemDataOrgName.indexOf(textDataOrgName) > -1)
//                 foundObj.push(item)
//             // return itemDataOrgName.indexOf(textDataOrgName) > -1;

//             if (itemDataState.indexOf(textDataState) > -1)
//                 foundObj.push(item)
//             // return itemDataState.indexOf(textDataState) > -1;

//             if (itemDataRegName.indexOf(textDataRegName) > -1)
//                 foundObj.push(item)
//             // return itemDataRegName.indexOf(textDataRegName) > -1;

//             if (itemDataContactNumber.indexOf(textDataContactNumber) > -1)
//                 foundObj.push(item)


//             console.log("found= ", text, " ", foundObj);

//             // const categories = [...new Set(foundObj.map(data => { data.Sno, data.OrgName, data.RegName, data.State, data.EmailId, data.City, data.ContactNumber }))]
//             foundObj = foundObj.filter((thing, index, self) =>
//                 index === self.findIndex((t) => (
//                     t.Sno === thing.Sno && 
//                     t.OrgName === thing.OrgName && 
//                     t.RegName === thing.RegName && 
//                     t.State === thing.State && 
//                     t.EmailId === thing.EmailId && 
//                     t.City === thing.City && 
//                     t.ContactNumber === thing.ContactNumber
//                 ))
//             )
//             console.log("categories = ", foundObj);


//             // if (itemDataContactNumber.indexOf(textDataContactNumber) > -1){
//             //     console.log(itemDataContactNumber.indexOf(textDataContactNumber));

//             //     return itemDataContactNumber.indexOf(textDataContactNumber) > -1;
//             // }
//             // return foundObj
//         });
//         console.log("this.newData= ",this.newData);
        
//         this.setState({
//             //setting the filtered newData on datasource
//             //After setting the data it will automatically re-render the view
//             dataSource: foundObj,
//             // Organisation: text,
//         }, () => {
//             // console.log("dataSource= ",this.state.dataSource);

//         });
//         // console.log("newdata= ",this.newData)
//     }


//     render() {
//         return (
//             <View >
//                 <TextInput style={styles.TextInput}
//                     // value={this.state.Organisation}
//                     // autoFocus={true}
//                     onChangeText={(text) => {
//                         this.SearchFilterFunction(text)
//                         this.setState({
//                             showFlatList: true,
//                         })
//                     }}

//                 />
//                 {/* <View style={{ flex: 0.38 }}> */}
//                 {this.state.showFlatList ?
//                     <View style={{ maxHeight: hp('33%') }} >
//                         <FlatList
//                             keyboardShouldPersistTaps={'always'}
//                             data={this.state.dataSource}
//                             ItemSeparatorComponent={this.ListViewItemSeparator}
//                             renderItem={({ item }) => (
//                                 <TouchableOpacity onPress={() => {
//                                     console.log("clicked");

//                                     this.setState({
//                                         Organisation: item,
//                                         showFlatList: false,
//                                     })
//                                 }}>
//                                     <View style={{ flexDirection: "column" }}>
//                                         {/* <Text numberOfLines={1} style={{fontSize:18,paddingLeft:wp('4%'),marginTop:wp('2%')}}>{item.user.name}</Text> */}
//                                         <Text numberOfLines={3} ellipsizeMode="middle" style={{ fontSize: 18 }}>{item.OrganisationName}</Text>
//                                         <Text numberOfLines={3} ellipsizeMode="middle" style={{ fontSize: 18 }}>{item.City}</Text>
//                                         <Text numberOfLines={3} ellipsizeMode="middle" style={{ fontSize: 18 }}>{item.State}</Text>
//                                         <Text numberOfLines={3} ellipsizeMode="middle" style={{ fontSize: 18 }}>{item.ContactNumber}</Text>
//                                         <Text numberOfLines={3} ellipsizeMode="middle" style={{ fontSize: 18 }}>{item.RegisteredName}</Text>
//                                         <Text numberOfLines={3} ellipsizeMode="middle" style={{ fontSize: 18 }}>{item.EmailId}</Text>
//                                     </View>
//                                 </TouchableOpacity>

//                             )}
//                             enableEmptySections={true}
//                             style={{ marginTop: 10 }}
//                             keyExtractor={(item, index) => index}
//                         />
//                     </View>
//                     :
//                     <View />
//                 }
//             </View>
//         )
//     }
// }
// const mapStateToProps = (state) => {
//     return {
//         upload_status: state.textUpload,
//     }
// }

// export default connect(mapStateToProps)(search)


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
//     TextLabels: {
//         fontSize: 22,
//         fontWeight: '200',
//         opacity: .5,
//         marginTop: hp('1.5%')
//     },
//     TextInput: {
//         width: '90%',
//         borderBottomColor: 'grey',
//         borderBottomWidth: 1,
//         opacity: .6,
//         height: hp('5%')
//     },
//     nextArrow: {
//         height: hp('9%'),
//         width: wp('20%'),
//         // backgroundColor:'green',
//         // marginTop : hp('3%'),
//         // justifyContent:"flex-end",
//         // alignItems:"flex-end",
//         alignSelf: "center",
//     },
// })


import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, Keyboard,TouchableOpacity, Dimensions, Image, ScrollView, Animated, FlatList, TextInput, KeyboardAvoidingView, Linking, BackHandler, ActivityIndicator } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import * as firebase from 'firebase'
import { db } from '../routes/config';
import { connect } from 'react-redux';
import food from '../assets/food.json';
import medical from '../assets/medical.json';
import { Directions } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';


export default class FoodSupplies extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: require('../assets/food.json'),
        }
        this.arrayholder = require('../assets/food.json')
    }
    ListViewItemSeparator = () => {
    //Item sparator view
    return (
        <View
        style={{
            width: '100%',
            borderBottomWidth: 0.25,
            borderBottomColor: "grey",
        }}
        />
    );
    };

    SearchFilterFunction(text) {
        //passing the inserted text in textinput
        // console.log("text = ",text)
        // console.log("this.arrayholder= ",this.arrayholder);
        console.log("text= ", text);
        var foundObj = []
        this.arrayholder.forEach(function (item) {
            //applying filter for the inserted text in search bar
            console.log("item = ",item.ContactNumber);
            
            const itemDataCity = item.City ? item.City.toUpperCase() : ''.toUpperCase();
            const textDataCity = text.toUpperCase();
            const itemDataContactNumber = item.ContactNumber ? item.ContactNumber.toUpperCase() : ''.toUpperCase();
            const textDataContactNumber = text.toUpperCase();
            const itemDataEmailId = item.EmailId ? item.EmailId.toUpperCase() : ''.toUpperCase();
            const textDataEmailId = text.toUpperCase();
            const itemDataOrgName = item.OrgnizationName ? item.OrgnizationName.toUpperCase() : ''.toUpperCase();
            const textDataOrgName = text.toUpperCase();
            const itemDataState = item.State ? item.State.toUpperCase() : ''.toUpperCase();
            const textDataState = text.toUpperCase();
            const itemDataRegName = item.RegisteredName ? item.RegisteredName.toUpperCase() : ''.toUpperCase();
            const textDataRegName = text.toUpperCase();

            if (itemDataCity.indexOf(textDataCity) > -1)
                foundObj.push(item)
            // return itemDataCity.indexOf(textDataCity) > -1;

            if (itemDataEmailId.indexOf(textDataEmailId) > -1)
                foundObj.push(item)
            // return itemDataEmailId.indexOf(textDataEmailId) > -1;

            if (itemDataOrgName.indexOf(textDataOrgName) > -1)
                foundObj.push(item)
            // return itemDataOrgName.indexOf(textDataOrgName) > -1;

            if (itemDataState.indexOf(textDataState) > -1)
                foundObj.push(item)
            // return itemDataState.indexOf(textDataState) > -1;

            if (itemDataRegName.indexOf(textDataRegName) > -1)
                foundObj.push(item)
            // return itemDataRegName.indexOf(textDataRegName) > -1;

            if (itemDataContactNumber.indexOf(textDataContactNumber) > -1)
                foundObj.push(item)


            console.log("found= ", text, " ", foundObj);

            // const categories = [...new Set(foundObj.map(data => { data.Sno, data.OrgName, data.RegName, data.State, data.EmailId, data.City, data.ContactNumber }))]
            foundObj = foundObj.filter((thing, index, self) =>
                index === self.findIndex((t) => (
                    t.Sno === thing.Sno && 
                    t.OrgName === thing.OrgName && 
                    t.RegisteredName === thing.RegisteredName && 
                    t.State === thing.State && 
                    t.EmailId === thing.EmailId && 
                    t.City === thing.City && 
                    t.ContactNumber === thing.ContactNumber
                ))
            )
            console.log("categories = ", foundObj);
        });
        console.log("this.newData= ",this.newData);
        
        this.setState({
            dataSource: foundObj,
        }, () => {
            // console.log("dataSource= ",this.state.dataSource);

        });
        // console.log("newdata= ",this.newData)
    }
    render() {
        return(
        <View style={styles.container}>
            <TextInput style={styles.TextInput}
                    // value={this.state.Organisation}
                    // autoFocus={true}
                    onChangeText={(text) => {
                        this.SearchFilterFunction(text)
                        this.setState({
                            showFlatList: true,
                        })
                    }}

                />
        <FlatList
            data={this.state.dataSource}
            ItemSeparatorComponent={this.ListViewItemSeparator}
            renderItem={({item}) =>(
                <View>
                {item.RegisteredName ? 
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' ,margin:wp("4%"),height:hp("8%")}}>
                <View style={{width:wp("80%")}}>
                    <Text numberOfLines= {2} adjustsFontSizeToFit style={{fontSize:18,fontWeight:'bold'}}>{item.RegisteredName}</Text>
                    <Text style={{fontSize:14}}>{item.City},{item.State}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL(`tel:${item.ContactNumber}`)
                        }}>
                        <Image source={require('../assets/ios-call.png')}/>
                    </TouchableOpacity>
                </View>
            </View>:
            <View />}
            </View>
            )}
            keyExtractor={(item, index) => index}
        />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    TextInput: {
        alignSelf:'center',
        width: '90%',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        opacity: .6,
        height: hp('5%')
    },
})