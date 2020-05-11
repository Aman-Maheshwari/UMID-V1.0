import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Modal, StyleSheet, KeyboardAvoidingView, ToastAndroid, ScrollView, FlatList } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { connect } from 'react-redux';
import * as firebase from 'firebase'
import { log } from 'react-native-reanimated';

class ProfileScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: '',
            organisation: '',
            old_org: '',
            address: '',
            isEditable: false,
            data: null,
            category: '',
            showFlatList: true
        }
        this.arrayholder;
    }



    componentDidMount() {
        if (this.props.phonenumberuser != null) {
            this.initialData()

            firebase.database().ref("Organisation/").on("value", snapshot => {
                this.arr = Object.keys(snapshot.val())
                this.arr.push("other")
                this.arr.sort()
                this.arrayholder = this.arr
                // this.arrayholder = this.arr
                // console.log(this.state.pickerData, this.arrayholder)
            })


        }
        else {
            // this.props.navigation.navigate()
        }


    }

    initialData = () =>{
        console.log(this.props.phonenumberuser);
            var User_details = new Promise((resolve, reject) => {
                var data = null
                firebase.database().ref('SignUpInComplete/' + this.props.phonenumberuser).on("value", (snapshot) => {
                    // console.log("fetched from Db= ", snapshot.val())
                    data = snapshot.val();
                    if (data)
                        resolve(data)
                    else
                        reject("no data found")
                })

            })

            User_details.then((data) => {
                // console.log("resolved promise = ", data);
                this.setState({
                    name: data.name,
                    phone: data.PhoneNumber,
                    organisation: data.Organisation,
                    category: data.category,
                    old_org: data.Organisation
                })

            })
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
                    value={this.state.organisation}
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
                    <View style={{ marginLeft:wp('7.5%'),maxHeight: hp('13%') }} >
                        <FlatList
                            keyboardShouldPersistTaps={'always'}
                            data={this.state.dataSource}
                            ItemSeparatorComponent={this.ListViewItemSeparator}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => {
                                    console.log("clicked");

                                    this.setState({
                                        organisation: item,
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
            organisation: text,
        }, () => {
            console.log("dataSource= ", this.state.dataSource);

        });
        // console.log("newdata= ",this.newData)
    }


    render() {
        let data = [{
            value: 'kirana',
        }, {
            value: 'che',
        }, {
        }];
        // {this.FetchUser()}
        { console.log(this.props.phonenumberuser) }
        if (!this.state.isEditable) {
            return (
                <View style={styles.container}>
                    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} enabled>
                        <View style={styles.backgroundContainerUpper}>
                            <View style={{ marginLeft: wp("4%"), paddingTop: hp("2.5%") }}>
                                <TouchableOpacity onPress={
                                    () => {
                                        this.props.navigation.toggleDrawer();
                                    }
                                }>
                                    <Image
                                        source={require('../assets/hamwhitepng.png')}
                                        style={{ height: hp("3.5%"), width: hp("3.5%") }}
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


                            <View style={{ justifyContent: "center", alignItems: "center", marginTop: wp('2%') }}>
                                <Text style={{ fontSize: 18 }}>If you are a vendor</Text>
                                <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate('Register', { selectionComplete: this.state.category })
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
                        <View style={{ marginLeft: wp("4%"), paddingTop: hp("2.5%") }}>
                            <TouchableOpacity onPress={
                                () => {
                                    this.setState({
                                        isEditable: false
                                    })
                                }
                            }>
                                <Image
                                    source={require('../assets/back.png')}
                                    style={{ height: hp("3.5%"), width: hp("3.5%") }}
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
                            onChangeText={(text) => {
                                this.props.dispatch({ type: 'UPDATE_TEXT', text: text })
                                this.setState({
                                    name: text
                                })
                            }}
                        />
                        <Text style={styles.TextLabels}>Phone Number</Text>
                        <TextInput style={styles.TextInput}
                            value={this.state.phone}
                            editable={false}
                        />
                        {/* <Text style={styles.TextLabels}>Organisation</Text>
                            <TextInput style={styles.TextInput}
                                onChangeText={(text) => {
                                this.setState({
                                    organisation: text
                                })
                            }}
                            /> */}
                        <Text style={styles.TextLabels}>Organisation</Text>
                        {this.state.organisation ?
                            this.renderOrganizationActive()
                            :
                            <TextInput style={styles.TextInput}
                                value={this.state.organisation}
                                onChangeText={(text) => this.SearchFilterFunction(text)}
                            />
                        }
                        {/* <Text style={styles.TextLabels}>Category</Text>
                            <TextInput style={styles.TextInput}
                                value={this.state.category}
                                editable={false}
                            /> */}

                        <View style={{ justifyContent: "center", alignItems: "center", marginTop: wp('2%') }}>
                            <Text style={{ fontSize: 18 }}>If you are a vendor</Text>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('Register', { selectionComplete: this.state.category })
                            }}>
                                {/* <Text style={{fontSize:18}}>If you are a vendor</Text> */}
                                <Text style={{ fontSize: 14, marginTop: wp('2%'), textDecorationLine: "underline" }}>Register Your Shop Here</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            onPress={() => {

                                //irrespective of the change in name and organisation abhi firebase ki call laga di hai baad mai check krke laga dena hai idhr...
                                firebase.database().ref("SignUpInComplete/" + this.props.phonenumberuser).update({
                                    name: this.state.name
                                })
                                firebase.database().ref("SignUpInComplete/" + this.props.phonenumberuser).update({
                                   Organisation:this.state.organisation
                                })


                                var temp_org_data  //store organization data temporary.
                                //this.state.old_org will store the old organisation that means if there is no change in org.then,
                                //this.state.old_org===this.state.organisation
                                //otherwise this.state.organisation equals updated org. and this.state.old_org equals previous org.
                            
                                
                                if (this.state.old_org != '') {
                                    //enters inside if only when person has already registered a organisation(probable and i think the only case is consumer+org)
                                    console.log("this.state.old_org= ",this.state.old_org);
                                    //get the details from org. table for the user and store it in temp_org_data.
                                    var getDetail = new Promise((resolve, reject) => {
                                        firebase.database().ref("Organisation/" + this.state.old_org + "/" + this.props.phonenumberuser + "/").on("value", snapshot => {
                                            console.log("value = ", snapshot.val());
                                            temp_org_data = snapshot.val();
                                            if (temp_org_data)
                                                resolve(temp_org_data)
                                            else
                                                reject("no data")
                                        })
                                    })

                                    getDetail.then((temp_org_data) => {
                                        // console.log("data= ",temp_org_data);
                                        
                                        //remove the entry of the user from its current organisation
                                        firebase.database().ref("Organisation/" + this.state.old_org + "/" + this.props.phonenumberuser).remove().then(() => {
                                            //then update the corresponding fields
                                            temp_org_data.Organisation = this.state.organisation
                                            temp_org_data.name = this.state.name
                                            // console.log("tem=", temp_org_data.Organisation);
                                            //then set it in the organisation table
                                            //(NOTE: if there is no change in org. that can be checked and firebase call can be prevented)
                                            firebase.database().ref("Organisation/" + this.state.organisation + "/" + this.props.phonenumberuser+"/").set({
                                                City:temp_org_data.City,
                                                GoogleId:temp_org_data.GoogleId,
                                                Organisation:temp_org_data.Organisation,
                                                Password:temp_org_data.Password,
                                                State:temp_org_data.State,
                                                address:temp_org_data.address,
                                                category:temp_org_data.category,
                                                isRegistered:temp_org_data.isRegistered,
                                                latitude:temp_org_data.latitude,
                                                longitude:temp_org_data.longitude,
                                                name:temp_org_data.name
                                            })
                                            this.initialData();
                                        })
                                    }).catch((err)=>{
                                            console.log(err);
                                            
                                    })
                                }
                                this.setState({ isEditable: false })
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