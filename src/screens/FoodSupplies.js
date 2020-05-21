import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, Keyboard, TouchableOpacity, Dimensions, Image, ScrollView, Animated, FlatList, TextInput, KeyboardAvoidingView, Linking, BackHandler, ActivityIndicator } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SearchBar } from 'react-native-elements';
import * as firebase from 'firebase'
import { db } from '../routes/config';
import { connect } from 'react-redux';
import food from '../assets/food.json';
import medical from '../assets/medical.json';
import { Directions } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


export default class FoodSupplies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: food,
        }
        this.arrayholder = food
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
        console.log("this.newData= ", this.newData);

        this.setState({
            dataSource: foundObj,
        }, () => {
            // console.log("dataSource= ",this.state.dataSource);

        });
        // console.log("newdata= ",this.newData)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', marginLeft: wp("3%") }}>
                    <View style={{ height: hp('5%'), justifyContent: 'center', alignItems: 'center', marginRight: wp("3%") }}>
                        <Image
                            source={require('../assets/search.png')}
                        />
                    </View>

                    <TextInput style={styles.TextInput}
                        placeholder="Search"
                        placeholderTextColor="#0290ea"
                        onChangeText={(text) => {
                            this.SearchFilterFunction(text)
                            this.setState({
                                showFlatList: true,
                            })
                        }}
                    />
                </View>
                {this.state.dataSource.length !=0 ?
                <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent={this.ListViewItemSeparator}
                    renderItem={({ item }) => (
                        <View>
                            {item.RegisteredName ?
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: wp("4%"), height: hp("8%") }}>
                                    <View style={{ width: wp("80%") }}>
                                        <Text numberOfLines={2} adjustsFontSizeToFit style={{ fontSize: 18, fontWeight: 'bold' }}>{item.RegisteredName}</Text>
                                        <Text style={{ fontSize: 14 }}>{item.City},{item.State}</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity onPress={() => {
                                            Linking.openURL(`tel:${item.ContactNumber}`)
                                        }}>
                                            <Image source={require('../assets/ios-call.png')} />
                                        </TouchableOpacity>
                                    </View>
                                </View> :
                                <View />}
                        </View>
                    )}
                    keyExtractor={(item, index) => index}
                />
        :

                <View>
                    <Text numberOfLines={2} adjustsFontSizeToFit style={{ fontSize: 18, fontWeight: 'bold', textAlign: "center", alignItems: "center", marginTop: hp('5%') }}>No data found</Text>
                </View>
    }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    TextInput: {
        alignSelf: 'center',
        width: '90%',
        borderColor: 'grey',
        borderWidth: 1,
        opacity: .6,
        borderRadius: 10,
        height: hp('5%'),
        paddingLeft: 10,
    },
})