import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { Actions } from 'react-native-router-flux';

export default class OTP extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ReceivedOTP: ''

        }
    }
    componentDidMount() {
        // var code_arr = []
        // fetch('https://umidotp.herokuapp.com/sendsms')
        //     .then((response) => response.json())
        //     .then((json) => {
        //         //change may be required here depending upon the twilio message received//
        //         console.log("json= ", json.body);
        //         code_arr = json.body.split("-")
        //         console.log(code_arr);
        //         this.setState({
        //             ReceivedOTP: Number(code_arr[1])
        //         })
        //         console.log(this.state);

        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }

    //if otp gets verified control is transferred to homescreen else it will again relod the same otp screen
    verifyOTP = (otp) => {
        console.log("otp= ", otp)
        console.log("type= ", typeof (otp));
        otp = Number(otp)
        if (this.state.ReceivedOTP === otp) {
            //will tranfer control to home screen
            console.log("verified");
        }
        else {
            // relod the same otp screen
            console.log("not verified");
            Actions.OTP();
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.backgroundContainerUpper}>
                    {/* SVG goes here */}
                    {/* need image of logo only, not the background */}
                    <View style={styles.imgcont}>
                        <Image source={require("../assets/png.png")} style={styles.logo} />
                    </View>
                </View>

                <View style={styles.backgroundContainerLower}>
                    <View style={styles.OtpLayoutView}>
                        <OTPInputView
                            style={{ height: hp('8%'), color: "black", }}
                            pinCount={4}
                            onCodeFilled={(code) => {
                                // console.log("code= ", code);
                                this.verifyOTP(code)
                            }}
                            codeInputFieldStyle={styles.underlineStyleBase}
                            keyboardType="number-pad"
                        />
                    </View>
                    <View style={{ height: hp('9%'), width: wp('80%'), marginLeft: wp('10%') }}>
                        <Text style={{ fontSize: 16, color: "grey" }}>
                            If you do not receive the OTP in 60 seconds
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 14, color: "grey", marginTop: wp('0.5%') }}>
                                click
                        </Text>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 16, color: "#0290ea", fontWeight: "bold", marginLeft: wp('1%') }}>
                                    Resend
                                </Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                    <View style={{ width: wp('100%'), height: hp('10%') }}>
                        <TouchableOpacity onPress={()=>{
                            this.props.navigation.navigate('Drawer')
                        }}>
                            <Image source={require('../assets/nect-page-arrow.png')} style={styles.nextArrow} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: hp('9%'), width: wp('80%'), marginLeft: wp('14%'),marginTop:hp('3%') }}>
                        <Text style={{ fontSize: 16, color: "grey" }}>
                            By clicking Continue, you agree to our
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 16, color: "black", fontWeight: "bold", marginLeft: wp('1%') }}>
                                Terms of Service
                            </Text>
                            <Text style={{ fontSize: 14, color: "grey", marginTop: wp('0.5%'),marginLeft: wp('1%') }}>and</Text>
                            <Text style={{ fontSize: 16, color: "black", fontWeight: "bold", marginLeft: wp('1%') }}>
                                Privacy Policy
                            </Text>

                        </View>


                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backgroundContainerUpper: {
        flex: 0.4,
        width: wp('100%'),
        backgroundColor: '#0290ea',
    },
    backgroundContainerLower: {
        flex: 0.6,
        width: wp('100%'),
        backgroundColor: '#fff',
    },
    imgcont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:"yellow"
    },
    a: {
        margin: hp('3%')
    },
    nextArrow: {
        height: hp('9%'),
        width: wp('20%'),
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: hp('2%')
    },
    fontStyle: {
        fontSize: 24,
        //color scheme still not available(to be changed)
        color: "grey",
        marginBottom: hp('2%')
    },
    OtpLayoutView: {
        margin: wp('8%'),
        padding: wp('2%'),
        // backgroundColor: "green"
    },
    underlineStyleBase: {
        height: hp('8%'),
        width: wp('15%'),
        // backgroundColor:"pink",
        borderWidth: 0,
        borderBottomWidth: 1,
        color: "black",
    },

})