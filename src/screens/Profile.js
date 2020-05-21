import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Modal, StyleSheet, KeyboardAvoidingView, Platform, Alert, async, Picker, Linking, FlatList } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import db from '../routes/config'
import * as firebase from 'firebase'
import { connect } from 'react-redux';
import {_} from 'lodash';


import CryptoJS from "react-native-crypto-js";
import { ThemeProvider } from 'react-native-elements';
// import ModalDropdown from 'react-native-modal-dropdown';


class Profile extends React.Component {
    b64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    constructor(props) {
        super(props)
        this.state = {
            address: '',
            latitude: '',
            longitude: '',
            name: '',
            PhoneNumber: '',
            Organisation: '',
            Password: '',
            ConfirmPassword: '',
            GoogleId: '',
            City: '',
            State: '',
            isRegistered: false,
            category: "organization",
            isAlert: true,
            selected: '',
            pickerValue: '',
            pickerData: [],
            showFlatList: true,
            isPassword : true,
            isConfirmPassword : true,
            registeredPhoneNumbers : null,

            message : 'Please fill all details correctly',
            isNumber : true

            // isready : false,
            // isPassword : false,
        }
        this.isPassword = false;
        this.isready = false;
        this.arrayholder = [];
        this.newData = []

    }
    arr = []
    // pickerData = ["jsdfhg","ksdjfhb","dsckjfhvg","other"]

    UNSAFE_componentWillMount(){
        firebase.database().ref("SignUpInComplete").on("value",snapshot =>{
            var numbers = Object.keys(snapshot.val())
            this.setState({
                registeredPhoneNumbers : numbers
            })
        })
    }

    componentDidMount() {
        //   console.log(this.props.navigation.state.params.selectionComplete)
        firebase.database().ref("Organisation/").on("value", snapshot => {
            this.arr = Object.keys(snapshot.val())
            this.arr.push("other")
            this.arr.sort()
            this.arrayholder = this.arr
            this.setState({
                pickerData: this.arr
            })
            this.arrayholder = this.arr
            console.log(this.state.pickerData, this.arrayholder)
        })

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
    handleSignUp = () => {
        // if(this.state.category == "kirana" && this.state.category == "chemist"){
        //     this.setState({isVendor: true})
        // }
        // this.checkIsReady()
        console.log("handling signup")
        if(this.state.registeredPhoneNumbers.indexOf(this.state.PhoneNumber) >= 0){
            Alert.alert("A user with this phone number already exists, Please try again.")
            this.setState({
                PhoneNumber : '',
                Password : '',
                ConfirmPassword : '',
                Organisation : '',
                name : '',
            })
        }else{

        if (this.state.isNumber && this.state.isConfirmPassword && this.state.isPassword && this.state.isAlert && this.state.Organisation.length!=0) {

            /*Variable to hold encrypted password  */
            let Password_for_Db = this.encode('U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=',this.state.Password);
            console.log(Password_for_Db , this.state.Password)

            if (this.state.category == "organization") {
                firebase.database().ref('Organisation/' + this.state.Organisation + '/' + this.state.PhoneNumber).set({
                    name: this.state.name,
                    PhoneNumber: this.state.PhoneNumber,
                    Organisation: this.state.Organisation,
                    Password: Password_for_Db,
                    category: this.state.category,
                    address: this.state.address,
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                    GoogleId: this.state.GoogleId,
                    City: this.state.City,
                    State: this.state.State,
                    isRegistered: this.state.isRegistered,
                })
            }
            firebase.database().ref('SignUpInComplete/' + this.state.PhoneNumber).set({
                name: this.state.name,
                PhoneNumber: this.state.PhoneNumber,
                Organisation: this.state.Organisation,
                Password: Password_for_Db,
                category: this.state.category,
                address: this.state.address,
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                GoogleId: this.state.GoogleId,
                City: this.state.City,
                State: this.state.State,
                isRegistered: this.state.isRegistered,
                BlockedCounter:0
            })

            console.log("data sent to firebase");
            console.log(this.state.PhoneNumber);
            // this.props.navigation.navigate('OTP')
            if (this.state.category == "chemist" || this.state.category == "kirana") {
                console.log("hey")
                Alert.alert(Alert.title = 'Remember!', Alert.body = 'Its a good idea to register your shop and help you connect with other users on the portal do you agree?',
                    [{ text: 'Skip', onPress: () => this.props.navigation.navigate('Home') }, { text: ' Yes', onPress: () => this.props.navigation.navigate('RegisterShop', { selectionComplete: this.state.category, PhoneNumber: this.state.PhoneNumber }) }],
                    { cancelable: false }, "clicking out side of alert will not cancel ");
            }
            else {
                this.props.navigation.navigate('Home')
            }
            // console.log("Navigating to OTP")
        }
        else {
            Alert.alert('Please fill all details correctly.')
        }
    }

    }
    checkIsReady = () => {

        // if (this.state.name.length != 0 && this.state.PhoneNumber.length != 0 && this.state.Password.length != 0 && this.state.ConfirmPassword.length != 0) {
        //     if (this.state.Password === this.state.ConfirmPassword) {
        //         // this.setState({isPassword : true})
        //         this.isPassword = true
        //     } else {
        //         // this.setState({isPassword:false})
        //         this.isPassword = false
        //     }
        //     // this.setState({isready : true})
        //     this.isready = true
        //     // this.handleSignUp()
        // } else {
        //     // this.setState({isready:false,
        //     // isPassword:false})
        //     this.isready = false
        //     this.isPassword = false
        //     // this.handleSignUp()
        // }
        // console.log(this.state.registeredPhoneNumbers.indexOf(this.state.PhoneNumber))
        if(this.state.name.length ==0 ){
            this.setState({
                isAlert : false,
                message : 'Please Fill your name correctly.'
            })
        }else if(this.state.PhoneNumber.length != 10){
            this.setState({
                isAlert : false,
                message : 'Please Enter a 10 digit Phone number.'
            })
        }else if(this.state.Password.length == 0 || this.state.ConfirmPassword.length == 0){
            this.setState({
                isAlert : false,
                message : 'Please enter a valid password.'
            })
        }
        else{
            this.setState({
                isAlert : true,
                // message : 'All details filled correctly.'
            })
            this.handleSignUp()

        }

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

    
    renderOrganizationActive = () => {
        console.log("ogactive");
        return (
            <View >
                <TextInput style={styles.TextInput}
                    value={this.state.Organisation}
                    autoFocus={true}
                    onChangeText={(text) => {
                        this.SearchFilterFunction(text)
                        this.setState({
                            showFlatList: true,
                        })
                    }}

                />
                {/* <View style={{ flex: 0.38 }}> */}
                {this.state.showFlatList ?
                    <View style={{ maxHeight: hp('13%'),width: '90%' }} >
                        <FlatList
                            keyboardShouldPersistTaps={'always'}
                            data={this.state.dataSource}
                            ItemSeparatorComponent={this.ListViewItemSeparator}
                            renderItem={({ item }) => (
                                <TouchableOpacity 
                                onPress={() => {
                                    console.log("clicked");
                                    this.setState({
                                        Organisation: item,
                                        showFlatList: false,
                                    })
                                }}>
                                    <View style={{ flexDirection: "column", }}>
                                        {/* <Text numberOfLines={1} style={{fontSize:18,paddingLeft:wp('4%'),marginTop:wp('2%')}}>{item.user.name}</Text> */}
                                        <Text numberOfLines={3} ellipsizeMode="middle" style={{ fontSize: 18 }}>{item}</Text>
                                    </View>
                                </TouchableOpacity>

                            )}
                            enableEmptySections={true}
                            style={{ marginTop: 10 }}
                            keyExtractor={(item, index) => index}
                        />
                    </View>
                    :
                    <View />
                }
            </View>
        )
    }


    SearchFilterFunction(text) {
        //passing the inserted text in textinput
        // console.log("text = ",text)
        // console.log("this.arrayholder= ",this.arrayholder);

        this.newData = this.arrayholder.filter(function (item) {
            //applying filter for the inserted text in search bar
            const itemData = item ? item.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            // console.log("textData= ",textData);
            // console.log("itemData.indexOf(textData)=",itemData.indexOf(textData));

            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            //setting the filtered newData on datasource
            //After setting the data it will automatically re-render the view
            dataSource: this.newData,
            Organisation: text,
        }, () => {
            console.log("dataSource= ", this.state.dataSource);

        });
        // console.log("newdata= ",this.newData)
    }


    render() {
        console.log("in render");

        if (Platform.OS == 'android') {
            return (
                <View style={{ flex: 1 }}>
                    {/* Header */}
                    <View style={{ height: hp('8%'), backgroundColor: "#0290ea" }}>
                        <TouchableOpacity onPress={
                            () => {
                                this.props.navigation.navigate('Login')
                            }

                        }
                            style={{ position: 'absolute', top: 15, left: 10, zIndex: 10, height: 40, width: 40 }}
                        >
                            <Image
                                source={require('../assets/back.png')}
                                style={{ position: 'absolute', top: 7, left: 10, zIndex: 2, }}
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={{ marginTop: hp('2%'), width: wp('90%'), alignSelf: 'center' }}>
                        {this.state.category == "individual" || this.state.category == "organization" ?
                            <Text style={styles.TextLabels}>
                                Name *
                                </Text>
                            :
                            <Text style={styles.TextLabels}>
                                Shop Name *
                            </Text>

                        }

                        <TextInput style={styles.TextInput}
                            value={this.state.name}
                            onChangeText={(text) => {
                                this.setState({
                                    name: text
                                })
                                this.props.dispatch({ type: 'UPDATE_TEXT', text: text })
                            }}

                        />
                        <Text style={styles.TextLabels}>
                            Phone Number *
            </Text>
                        <TextInput style={styles.TextInput}
                            value={this.state.PhoneNumber}
                            onChangeText={(text) => {
                                function onlyDigits(s) {
                                    for (let i = s.length - 1; i >= 0; i--) {
                                      const d = s.charCodeAt(i);
                                      if (d < 48 || d > 57) return false
                                    }
                                    return true
                                  }
                                  if(onlyDigits(text)){
                                      this.setState({
                                          isNumber : true
                                      })
                                  }else{
                                      this.setState({
                                          isNumber : false,
                                          message : 'Phone Number should contain only digits'
                                      })
                                  }
                                this.setState({
                                    PhoneNumber: text
                                })
                                this.props.dispatch({ type: 'UPDATE_PHONE', text: text })
                            }}
                            keyboardType="number-pad"
                        />
                        <Text style={styles.TextLabels}>
                            Organisation
                        </Text>
                        {this.state.Organisation ?
                            this.renderOrganizationActive()
                            :
                            <TextInput style={styles.TextInput}
                                value={this.state.Organisation}
                                onChangeText={(text) => this.SearchFilterFunction(text)
                                    // this.setState({
                                    //     Organisation: text,
                                    // })
                                }
                            />
                        }


                        <Text style={styles.TextLabels}>
                            Password *
            </Text>
                        <TextInput style={styles.TextInput}
                            value={this.state.Password}
                            onChangeText={(text) => {
                                this.setState({
                                    Password: text
                                })
                                if(text.length > 0){
                                    this.setState({
                                        isPassword : true
                                    })
                                }else{
                                    this.setState({
                                        isPassword : false,
                                        message : 'Please enter a valid password.'
                                    })
                                }
                            }}
                            secureTextEntry={true}
                        />
                        <Text style={styles.TextLabels}>
                            Confirm Password *
            </Text>
                        <TextInput style={styles.TextInput}
                            value={this.state.ConfirmPassword}
                            onChangeText={(text) => {
                                this.setState({
                                    ConfirmPassword: text
                                })
                                if(this.state.Password == text){
                                    this.setState({
                                        isConfirmPassword : true,
                                    })
                                }else{
                                    this.setState({
                                        isConfirmPassword : false,
                                        message : 'Passwords should match.'

                                    })
                                }
                            }}
                            secureTextEntry={true}
                        />
                        {
                            this.state.isPassword && this.state.isConfirmPassword && this.state.isNumber && this.state.isAlert ?
                                <Text style={{ color: 'red', fontSize: 12, marginTop: hp('1%') }}></Text> :
                                <Text style={{ fontSize: 12, marginTop: hp('1%'),color : 'red' }}> {this.state.message} </Text>
                        }
                        <TouchableOpacity onPress={() => {
                            // this.handleSignUp()
                            this.checkIsReady()
                            // console.log(this.state);
                            this.props.dispatch({ type: 'UPLOAD_TEXT_DONE' })


                        }

                        }
                            style={{ width: wp('20%'), alignSelf: 'center', height: hp('9%'), marginTop: hp('3%'), borderRadius: 300 }}
                        >
                            <Image source={require('../assets/nect-page-arrow.png')} style={styles.nextArrow} />
                        </TouchableOpacity>
                        <View style={{ marginTop: hp('10%'), alignSelf: 'center' }}>
                            <Text>
                                By clicking Continue, you agree to our
                            </Text>
                            <TouchableOpacity onPress={() => {
                                Linking.openURL('https://umid-corona.in/assets/policy.html');
                            }}>
                                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ fontWeight: 'bold' }}>
                                        Terms of Service
                                </Text>
                                    <Text style={{ marginHorizontal: 4 }}>
                                        and
                                </Text>

                                    <Text style={{ fontWeight: 'bold' }} >
                                        Privacy Policy
                                </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        }
        if (Platform.OS == 'ios') {
            return (

                <View style={{ flex: 1 }}>
                    {/* Header */}
                    <View style={{ height: hp('8%'), backgroundColor: "#0290ea" }}>
                        <Icon name="AntDesign" size={30} color="white" style={{ marginLeft: 10, marginTop: 10 }} />
                    </View>
                    <View style={{ marginTop: hp('2%'), width: wp('90%'), alignSelf: 'center' }}>
                        {this.state.category == "individual" || this.state.category == "organization" ?
                            <Text style={styles.TextLabels}>
                                Name *
                                </Text>
                            :
                            <Text style={styles.TextLabels}>
                                Shop Name *
                            </Text>

                        }

                        <TextInput style={styles.TextInput} />
                        <Text style={styles.TextLabels}>
                            Phone Number *
                </Text>
                        <TextInput style={styles.TextInput} />
                        <Text style={styles.TextLabels}>
                            Organisation
                </Text>
                        <TextInput style={styles.TextInput} />

                        <Text style={styles.TextLabels}>
                            Password *
                </Text>
                        <TextInput style={styles.TextInput} />
                        <Text style={styles.TextLabels}>
                            Confirm Password *
                </Text>
                        <TextInput style={styles.TextInput} />
                        {
                            this.state.isAlert ?
                                <Text style={{ color: 'red', fontSize: 12, marginTop: hp('1%') }}>Please Fill all details correctly.</Text> :
                                <Text style={{ fontSize: 12, marginTop: hp('1%') }}></Text>
                        }
                        <TouchableOpacity onPress={() => {
                            this.checkIsReady()
                            console.log(this.state);
                            this.props.dispatch({ type: 'UPLOAD_TEXT_DONE' })
                        }

                        }
                            style={{ width: wp('20%'), alignSelf: 'center', height: hp('9%'), marginTop: hp('3%'), borderRadius: 300 }}>
                            <Image source={require('../assets/nect-page-arrow.png')} style={{
                                height: 80,
                                width: 80,
                                // marginTop : hp('3%'),
                                // justifyContent:"flex-end",
                                // alignItems:"flex-end",
                                alignSelf: "center",
                            }} />
                        </TouchableOpacity>
                        <View style={{ marginTop: hp('10%'), alignSelf: 'center' }}>
                            <Text>
                                By clicking Continue, you agree to our
                            </Text>
                            <TouchableOpacity onPress={() => {
                                Linking.openURL('https://umid-corona.in/assets/policy.html');
                            }}>
                                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ fontWeight: 'bold' }}>
                                        Terms of Service
                                </Text>
                                    <Text style={{ marginHorizontal: 4 }}>
                                        and
                                </Text>

                                    <Text style={{ fontWeight: 'bold' }} >
                                        Privacy Policy
                                </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        }

    }
}
const mapStateToProps = (state) => {
    return {
        upload_status: state.textUpload,
    }
}

export default connect(mapStateToProps)(Profile)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    TextLabels: {
        fontSize: 22,
        fontWeight: '200',
        opacity: .5,
        marginTop: hp('1.5%')
    },
    TextInput: {
        width: '90%',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        opacity: .6,
        height: hp('5%')
    },
    nextArrow: {
        height: hp('9%'),
        width: wp('20%'),
        // backgroundColor:'green',
        // marginTop : hp('3%'),
        // justifyContent:"flex-end",
        // alignItems:"flex-end",
        alignSelf: "center",
    },
})