import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Modal, StyleSheet, KeyboardAvoidingView, Platform, Alert, async, Picker, Linking, FlatList } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import db from '../routes/config'
import * as firebase from 'firebase'
import { connect } from 'react-redux';

import CryptoJS from "react-native-crypto-js";
import { ThemeProvider } from 'react-native-elements';
// import ModalDropdown from 'react-native-modal-dropdown';


class Profile extends React.Component {
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
            category: this.props.navigation.state.params.selectionComplete,
            isAlert: false,
            selected: '',
            pickerValue: '',
            pickerData: [],
            showFlatList: true

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
    handleSignUp = () => {
        // if(this.state.category == "kirana" && this.state.category == "chemist"){
        //     this.setState({isVendor: true})
        // }
        // this.checkIsReady()
        console.log("handling signup")
        if (this.isready && this.isPassword) {

            /*Variable to hold encrypted password  */
            let Password_for_Db = CryptoJS.AES.encrypt(this.state.Password, 'U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=').toString();

            /*if user has opted for organization than data is stored in both the tables, organization and signupincomplete else only in signup incomplete*/
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
            this.setState({
                isAlert: true
            })
        }

    }
    checkIsReady = () => {
        this.setState({
            isAlert: false
        })
        if (this.state.name.length != 0 && this.state.PhoneNumber.length != 0 && this.state.Password.length != 0 && this.state.ConfirmPassword.length != 0) {
            if (this.state.Password === this.state.ConfirmPassword) {
                // this.setState({isPassword : true})
                this.isPassword = true
            } else {
                // this.setState({isPassword:false})
                this.isPassword = false
            }
            // this.setState({isready : true})
            this.isready = true
            // this.handleSignUp()
        } else {
            // this.setState({isready:false,
            // isPassword:false})
            this.isready = false
            this.isPassword = false
            // this.handleSignUp()
        }
        this.handleSignUp()

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
                    <View style={{ maxHeight: hp('13%') }} >
                        <FlatList
                            keyboardShouldPersistTaps={'always'}
                            data={this.state.dataSource}
                            ItemSeparatorComponent={this.ListViewItemSeparator}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => {
                                    console.log("clicked");

                                    this.setState({
                                        Organisation: item,
                                        showFlatList: false,
                                    })
                                }}>
                                    <View style={{ flexDirection: "column" }}>
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
                                this.props.navigation.navigate('WhoYouAre')
                            }

                        }
                            style={{ position: 'absolute', top: 15, left: 10, zIndex: 10, height: 40, width: 40 }}
                        >
                            <Image
                                source={require('../assets/back.png')}
                                style={{ position: 'absolute', top: 15, left: 10, zIndex: 2, }}
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
                        {/* {
                            this.state.category == 'organization' && this.state.selected != 'other' ?
                                <Picker
                                    // style={{your_style}}
                                    mode="dropdown"
                                    selectedValue={this.state.pickerValue}
                                    onValueChange={(itemValue, itemIndex) => {
                                        this.setState({
                                            Organisation: this.state.pickerData[itemValue],
                                            selected: this.state.pickerData[itemValue],
                                            pickerValue: itemValue
                                        })
                                        console.log(this.state)
                                    }}
                                >
                                    {this.state.pickerData.map((item, index) => {
                                        return (<Picker.Item label={item} value={index} key={index} />)
                                    })}
                                </Picker> */}

                        {/* : */}
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


                        {/* } */}


                        <Text style={styles.TextLabels}>
                            Password *
            </Text>
                        <TextInput style={styles.TextInput}
                            value={this.state.Password}
                            onChangeText={(text) => {
                                this.setState({
                                    Password: text
                                })
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
                            }}
                            secureTextEntry={true}
                        />
                        {
                            this.state.isAlert ?
                                <Text style={{ color: 'red', fontSize: 12, marginTop: hp('1%') }}>Please Fill all details correctly.</Text> :
                                <Text style={{ fontSize: 12, marginTop: hp('1%') }}></Text>
                        }
                        <TouchableOpacity onPress={() => {
                            // this.handleSignUp()
                            this.checkIsReady()
                            console.log(this.state);
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