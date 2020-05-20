import React from 'react';
import { View, StyleSheet, TouchableHighlight, Text, Image, Animated, Dimensions, Button, Linking,Alert } from 'react-native';
// import { Divider } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
const { width, height } = Dimensions.get('window');



//NOTE:this.props.stateParamsPhoneNumber and this.props.stateParamsTimeStamp are the prop passed from AnonymousChat.js to AnonymousDrawer.js(that is this screen)
//also this.props.stateParamsPhoneNumber is equivalent of using this.props.navigation.state.params.phonenumber in AnonymousChat.js
//and this.props.stateParamsTimeStamp is equivalent of using this.props.navigation.state.params.timestamp in AnonymousChat.js

class AnonymousDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          counter: null,
          isBlocked: null,
          BlockedCounter: null,
          isDone: null,
  
        };
      }
    fetchBlockCount = () => {
        firebase.database().ref("SignUpInComplete/" + this.props.stateParamsPhoneNumber).on("value", snapshot => {
            console.log("snapshot.val()", snapshot.val())
            this.setState({
                BlockedCounter: snapshot.val().BlockedCounter,
            })
        })
    }


    componentDidMount() {
        //NOTE:this.props.stateParamsPhoneNumber and this.props.stateParamsTimeStamp are the prop passed from AnonymousChat.js to AnonymousDrawer.js(that is this screen)
        //also this.props.stateParamsPhoneNumber is equivalent of using this.props.navigation.state.params.phonenumber in AnonymousChat.js
        //and this.props.stateParamsTimeStamp is equivalent of using this.props.navigation.state.params.timestamp in AnonymousChat.js
        firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + this.props.stateParamsPhoneNumber + "," + this.props.stateParamsTimeStamp).update({
            counter: 0
        })
        firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.stateParamsPhoneNumber + "/" + this.props.phonenumberuser + "," + this.props.stateParamsTimeStamp).on("value", snapshot => {
            // var c = snapshot.val().counter
            console.log(snapshot.val().counter)
            this.setState({
                counter: snapshot.val().counter,
                isBlocked: snapshot.val().isBlocked,
            })
        })
        firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + this.props.stateParamsPhoneNumber + "," + this.props.stateParamsTimeStamp).on("value", snapshot => {
            // console.log(snapshot.val().counter)
            console.log("snapshot.val().isDone", snapshot.val().isDone)
            this.setState({
                isDone: snapshot.val().isDone,
            })
        })

        this.fetchBlockCount()
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
        return (
            <View style={{ alignItems: 'center'}}>
                <Animated.View style={{ position: "absolute", left: drawerX, top: drawerY, flex: 1 }}

                >
                    <View style={styles.drawer}>
                        <View>
                            {/* <TouchableHighlight style={{ paddingTop: 25 }} onPress={() => {
                                console.log("about presses");
                            }}> */}
                                {this.state.isBlocked ?
                                    //if true than unblock user
                                    <View>
                                        {this.state.isDone ?
                                            <TouchableOpacity onPress={() => {
                                                this.handdlePress()
                                                Alert.alert(
                                                    'Unblock',
                                                    'Are you sure you want to unblock the user?', [{
                                                        text: 'Cancel',
                                                        onPress: () => console.log('Cancel Pressed'),
                                                        style: 'cancel'
                                                    }, {
                                                        text: 'OK',
                                                        onPress: () => {
                                                            console.log(this.state.BlockedCounter)

                                                            this.state.BlockedCounter--

                                                            this.setState({
                                                                isBlocked: false,
                                                                isDone: false
                                                            })

                                                            firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + this.props.stateParamsPhoneNumber + "," + this.props.stateParamsTimeStamp).update({
                                                                isBlocked: false,
                                                                isDone: false
                                                            })
                                                            firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.stateParamsPhoneNumber + "/" + this.props.phonenumberuser + "," + this.props.stateParamsTimeStamp).update({
                                                                isBlocked: false,
                                                                isDone: false
                                                            })
                                                            firebase.database().ref("SignUpInComplete/" + this.props.stateParamsPhoneNumber + "/").update({
                                                                BlockedCounter: this.state.BlockedCounter,
                                                            })
                                                            this.fetchBlockCount()
                                                        }
                                                    },], {
                                                    cancelable: false
                                                }
                                                )
                                            }}>
                                                <Text style={{ fontSize: 18, color: "black" ,paddingLeft:hp("2%")}}>Unblock</Text>
                                            </TouchableOpacity>

                                            :

                                            <Text style={{ fontSize: 18, color: "black",paddingLeft:hp("2%") }}>Blocked </Text>
                                        }

                                    </View>
                                    :

                                    <TouchableOpacity onPress={() => {
                                        this.handdlePress()
                                        Alert.alert(
                                            'Block',
                                            'Are you sure you want to block the user?', [{
                                                text: 'Cancel',
                                                onPress: () => console.log('Cancel Pressed'),
                                                style: 'cancel'
                                            }, {
                                                text: 'OK',
                                                onPress: () => {
                                                    console.log(this.state.BlockedCounter)
                                                    this.state.BlockedCounter++
                                                    this.setState({
                                                        isBlocked: true,
                                                        isDone: true
                                                    })
                                                    firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + this.props.stateParamsPhoneNumber + "," + this.props.stateParamsTimeStamp).update({
                                                        isBlocked: true,
                                                        isDone: true
                                                    })
                                                    firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.stateParamsPhoneNumber + "/" + this.props.phonenumberuser + "," + this.props.stateParamsTimeStamp).update({
                                                        isBlocked: true,
                                                        isDone: false
                                                    })
                                                    firebase.database().ref("SignUpInComplete/" + this.props.stateParamsPhoneNumber + "/").update({
                                                        BlockedCounter: this.state.BlockedCounter,
                                                    })
                                                    this.fetchBlockCount()
                                                }
                                            },], {
                                            cancelable: false
                                        }
                                        )
                                    }}
                                    style={{marginBottom:hp("3%")}}
                                    >
                                        <Text style={{ fontSize: 18, color: "black" ,paddingLeft:hp("2%")}}>Block</Text>
                                    </TouchableOpacity>

                                    } {/* this is the end of this.state.isDone */}
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
                                                    // console.log(this.state.BlockedCounter)
                                                    // this.state.BlockedCounter++
                                                    // this.setState({
                                                    //     isBlocked: true,
                                                    //     isDone: true
                                                    // })
                                                    firebase.database().ref("ChatsUnderYou/Anonymous/" + this.props.phonenumberuser + "/" + this.props.stateParamsPhoneNumber + "," + this.props.stateParamsTimeStamp).update({
                                                       softDelete:true
                                                    })
                                                }
                                            },], {
                                            cancelable: false
                                        }
                                        )
                                    }}
                                    style={{marginBottom:hp("3%")}}
                                    >
                                        <Text style={{ fontSize: 18, color: "black" ,paddingLeft:hp("2%")}}>Delete</Text>
                                    </TouchableOpacity>
                            {/* <TouchableHighlight style={{ paddingTop: 25 }} onPress={() => { this.props.navigation.navigate('Events') }}>
                                <Text style={{ fontSize: 20, textAlign: 'center' }}>EVENTS</Text>
                            </TouchableHighlight> */}

                          
                        </View>
                    </View>
                </Animated.View>


                <Animated.View style={[styles.button, sizeStyle]}>
                    <TouchableHighlight onPress={this.handdlePress} underlayColor={0}>
                        <Ionicons name="ios-keypad" size={24} color="white" />
                    </TouchableHighlight>
                </Animated.View>
            </View>
        );
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

export default connect(mapStateToProps)(AnonymousDrawer);

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#005f94',
        shadowRadius: 5,
        shadowOffset: { height: 10 },
        shadowOpacity: 0.3,
        elevation: 3,
        marginLeft: 20
    },
    drawer: {
        width: 0.3366 * width,
        height: 0.2599 * height,
        backgroundColor: '#FFFFFF',
        elevation: 3,
        borderRadius: 0,
        shadowRadius: 5,
        flex: 1,
        shadowColor: '#7F58FF',
        shadowOffset: { height: 10 },
        shadowOpacity: 0.3,
        zIndex: 2,
        paddingTop:hp("2%")
    }
});