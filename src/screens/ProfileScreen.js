import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Modal, StyleSheet, KeyboardAvoidingView, ToastAndroid,ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { connect } from 'react-redux';
import * as firebase from 'firebase'

class ProfileScreen extends Component {
    state = {
        name: '',
        phone: '',
        organisation: '',
        address: '',
        isEditable: false,
        data: null,
        category: '',
    }


    componentDidMount() {
        if (this.props.phonenumberuser != null) {
            console.log(this.props.phonenumberuser);
            var User_details = new Promise((resolve, reject) => {
                var data = null
                firebase.database().ref('SignUpInComplete/' + this.props.phonenumberuser).on("value", (snapshot) => {
                    console.log("fetched from Db= ", snapshot.val())
                    data = snapshot.val();
                    if (data)
                        resolve(data)
                    else
                        reject("no data found")
                })

            })

            User_details.then((data) => {
                console.log("resolved promise = ", data);
                this.setState({
                    name: data.name,
                    phone: data.PhoneNumber,
                    organisation: data.Organisation,
                    category: data.category
                })

            })
        }
        else {
            // this.props.navigation.navigate()
        }


    }
    render() {
        let data = [{
            value: 'kirana',
          }, {
            value: 'che',
          }, {
          }];
        // {this.FetchUser()}
        {console.log(this.props.phonenumberuser)}
        if (!this.state.isEditable) {
            return (
                <View style={styles.container}>
                    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} enabled>
                        <View style={styles.backgroundContainerUpper}>
                            <View style={{marginLeft:wp("4%"),paddingTop:hp("2.5%")}}>
                        <TouchableOpacity onPress={
                    () => {
                        this.props.navigation.toggleDrawer();
                    }
                    }>
                    <Image
                        source={require('../assets/hamwhitepng.png')}
                        style={{height:hp("3.5%"),width:hp("3.5%")}}
                    />
                    </TouchableOpacity>
                    </View>
                        </View>
                        <View style={styles.backgroundContainerMiddle}>
                            <View style={styles.profileIconConatiner} >
                                <Image source={require("../assets/ProfileIcon2White.png")} style={styles.ProfileIcon} />
                            </View>
                        </View>
                        <View style={styles.backgroundContainerLower}>
                            <Text style={styles.TextLabels}>Name</Text>
                            <TextInput style={styles.TextInput}
                                value={this.state.name}
                                editable={false}
                            />
                            <Text style={styles.TextLabels}>Phone Number</Text>
                            <TextInput style={styles.TextInput}
                                value={this.state.phone}
                                editable={false}
                            />
                            <Text style={styles.TextLabels}>Organisation</Text>
                            <TextInput style={styles.TextInput}
                                value={this.state.organisation}
                                editable={false}
                            />
                            {/* <Text style={styles.TextLabels}>Category</Text>
                            <TextInput style={styles.TextInput}
                                value={this.state.category}
                                editable={false}
                            /> */}

                            <View style={{ justifyContent: "center", alignItems: "center", marginTop: wp('2%') }}>
                                <Text style={{ fontSize: 18 }}>If you are a vendor</Text>
                                <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate('Register',{selectionComplete: this.state.category})
                                }}>
                                    {/* <Text style={{fontSize:18}}>If you are a vendor</Text> */}
                                    <Text style={{ fontSize: 14, marginTop: wp('2%'), textDecorationLine: "underline" }}>Register Your Shop Here</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ isEditable: true })
                                }}
                            >
                                <Image
                                    source={require('../assets/edit.png')}
                                    style={styles.editImage}

                                />
                            </TouchableOpacity>
                        </View>
                        {/* </View>
                    </View> */}
                    </KeyboardAvoidingView>
                </View>
            )
        }

        if (this.state.isEditable) {
            return (
            <View style={styles.container}>
                        <View style={styles.backgroundContainerUpper}>
                            <View style={{marginLeft:wp("4%"),paddingTop:hp("2.5%")}}>
                        <TouchableOpacity onPress={
                    () => {
                        this.setState({
                            isEditable: false
                        })
                    }
                    }>
                    <Image
                        source={require('../assets/back.png')}
                        style={{height:hp("3.5%"),width:hp("3.5%")}}
                    />
                    </TouchableOpacity>
                    </View>
                        </View>
                        <View style={styles.backgroundContainerMiddle}>
                            <View style={styles.profileIconConatiner} >
                                <Image source={require("../assets/ProfileIcon2White.png")} style={styles.ProfileIcon} />
                            </View>
                        </View>
                        <View style={styles.backgroundContainerLower}>
                            <Text style={styles.TextLabels}>Name</Text>
                            <TextInput style={styles.TextInput}
                                value={this.state.name}
                                onChangeText={(text) => this.props.dispatch({ type: 'UPDATE_TEXT', text: text })}
                            />
                            <Text style={styles.TextLabels}>Phone Number</Text>
                            <TextInput style={styles.TextInput}
                                value={this.state.phone}
                                editable={false}
                            />
                            <Text style={styles.TextLabels}>Organisation</Text>
                            <TextInput style={styles.TextInput}
                                onChangeText={(text) => {
                                this.setState({
                                    organisation: text
                                })
                            }}
                            />
                            {/* <Text style={styles.TextLabels}>Category</Text>
                            <TextInput style={styles.TextInput}
                                value={this.state.category}
                                editable={false}
                            /> */}

                            <View style={{ justifyContent: "center", alignItems: "center", marginTop: wp('2%') }}>
                                <Text style={{ fontSize: 18 }}>If you are a vendor</Text>
                                <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate('Register',{selectionComplete: this.state.category})
                                }}>
                                    {/* <Text style={{fontSize:18}}>If you are a vendor</Text> */}
                                    <Text style={{ fontSize: 14, marginTop: wp('2%'), textDecorationLine: "underline" }}>Register Your Shop Here</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ isEditable: false})
                                    ToastAndroid.show("Changes Saved!!", 1000)
                                this.props.dispatch({ type: 'UPLOAD_TEXT_DONE' })
                                }}
                            >
                                <Image
                                    source={require('../assets/nect-page-arrow.png')}
                                    style={styles.editImage}

                                />
                            </TouchableOpacity>
                        </View>
                        {/* </View>
                    </View> */}
                </View>
            )
        }

    }
}

const mapStateToProps = (state) => {
    return {
        upload_status: state.textUpload,
        phonenumberuser: state.phonenumberuser,
        nameuser: state.nameuser
    }
}

export default connect(mapStateToProps)(ProfileScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backgroundContainerUpper: {
        flex: 0.1,
        // height: hp('40%'),
        width: wp('100%'),
        backgroundColor: '#0290ea',
    },
    backgroundContainerMiddle: {
        flex: 0.1,
        // marginTop: hp('5%'),
        // height: hp('10%'),
        width: wp('100%'),
        // backgroundColor: 'grey',
    },
    backgroundContainerLower: {
        flex: 0.8,
        marginTop: hp('8%'),
        width: wp('100%'),
        // backgroundColor: 'red',
        alignSelf: "center",
    },
    imgcont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:"yellow"
    },
    profileIconConatiner: {
        height: hp('15%'),
        width: wp('100%'),
        borderTopColor: "#0290ea",
        borderTopWidth: hp("15%") / 2,
        // position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
        // backgroundColor: "black"
    },
    ProfileIcon: {
        position: "absolute",
        aspectRatio: 0.5,
        backgroundColor: '#adadad',
        borderRadius: 300,
        height: hp('12%'),
        width: hp('12%')
        // height:null,
        // width:null
        // resizeMode:"center"
    },
    TextLabels: {
        fontSize: 16,
        fontWeight: '200',
        // opacity: .5,
        color: "grey",
        marginLeft: wp('7.5%'),
        marginTop: wp('1%')
    },
    TextInput: {
        width: wp('85%'),
        borderBottomColor: 'grey',
        borderBottomWidth: .5,
        marginLeft: wp('4%'),
        height: hp('5%'),
        fontSize: 20,
        padding: 0,
        fontSize: 14,
        color: 'grey',
        marginLeft: hp('3.5%'),
        marginBottom: hp("2%")
        // opacity:.2
    },
    editImage: {
        alignSelf: 'center',
        marginTop: hp('1%'),
        height: hp('9%')
    }
})