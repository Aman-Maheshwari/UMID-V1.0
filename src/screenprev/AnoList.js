import React, { Component } from 'react';
import {
Text,
StyleSheet,
View,
FlatList,
TextInput,
ActivityIndicator,
Alert,
Image,
TouchableOpacity, ScrollView
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import * as firebase from 'firebase'
import { connect } from 'react-redux';
import { resolve } from 'url';
// import { ScrollView } from 'react-native-gesture-handler';
class ChatList extends Component {
constructor(props) {
    super(props);
    this.state = {
        isLoading: false,
        text: '',
        searchActive: false,
        chats: null,
        callFetch: false,
        display: true,
    };
    this.arrayholder = [];
    this.newData = []
    this.alertarr = null
    this.getcolor=false
    
    // this.newData
}

//child added listener for firebase
on = callback => 
    firebase.database().ref("AnuUnderYou/"+this.props.phonenumberuser+"/").limitToLast(1).on('child_added', snapshot => {callback(
        // snapshot.forEach((data)=>{
        //     this.arrayholder.push(data.val())
        // })
        // console.log("hey inside")
        this.setState({isLoading: true})
    )
        console.log("Hey i am")
}
);

fetchfromDB= () =>{
    var fetchMessage = new Promise((resolve, reject) => {
        firebase.database().ref("AnuUnderYou/"+this.props.phonenumberuser+"/").on("value", snapshot => {
            var fetchedAlert = []
            snapshot.forEach((data) => {
                fetchedAlert.push(data.val())
            });
            if (fetchedAlert)
                resolve(fetchedAlert)
            else
                reject("no data")
        })
    })
    fetchMessage.then((s) => {
        console.log(s)
        this.setState({
            isLoading: true,
            // display:false,
            chats:s
        })
        console.log(this.state.isLoading)
    }).catch((err) => {

    })
}
    componentMount = () => {
        var phonenumber = null
            const { navigation } = this.props;
            phonenumber = navigation.getParam('phonenumber',null);
        // phonenumber = this.props.navigation.state.params.phonenumber
        
        // var appenddata = new Promise((resolve, reject) => {
            if(phonenumber != null){
            var c = 0
            if(this.state.chats!=null){
                console.log(this.state.chats)
            this.state.chats.forEach(chat => {
                console.log(chat.phonenumber)
                if(chat.phonenumber == this.props.navigation.state.params.phonenumber)
                {
                    c++;
                }
            })}
            if(c==0){
            
                console.log(c)
            
                firebase.database().ref("AnuUnderYou/"+this.props.phonenumberuser+"/"+this.props.navigation.state.params.phonenumber).set({
                // name: this.props.navigation.state.params.name,
                // description: this.props.navigation.state.params.description,
                phonenumber:this.props.navigation.state.params.phonenumber,
            }).then(() => {
                firebase.database().ref("AnuUnderYou/"+this.props.navigation.state.params.phonenumber+"/"+this.props.phonenumberuser).set({
                    // name: this.props.navigation.state.params.name,
                    // description: this.props.navigation.state.params.description,
                    phonenumber:this.props.phonenumberuser,
                }).then(() => {
                    this.setState({
                        // callFetch:true
                        isLoading: false
                    })
                })
                })}}
            }
SearchFilterFunction(text) {
    //passing the inserted text in textinput
    console.log(text)
    this.newData = this.arrayholder.filter(function (item) {
        //applying filter for the inserted text in search bar
        const itemData = item.text ? item.text.toUpperCase() : ''.toUpperCase();
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
}
ListViewItemSeparator = () => {
    //Item sparator view
    return (
        <View
            style={{
                height: hp('1%'),
                width: '75%',
                borderBottomWidth: 0.25,
                // opacity:0.6,
                borderBottomColor: "grey",
                marginLeft: wp('16%')
                // backgroundColor: '#080808',
                // position: "absolute"
                // borderLeftWidth:10
            }}
        />
    );
};

renderForSearchActive = () => {
    console.log("text= ", this.state.text, "newData= ", this.newData)

    if (this.state.text && this.newData.length != 0) {
        console.log("if");
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
                <View style={{ flex: 0.38 }}>
                    <View style={{}}>
                        <FlatList
                            data={this.state.dataSource}
                            ItemSeparatorComponent={this.ListViewItemSeparator}
                            renderItem={({ item }) => (
                                <TouchableOpacity>
                                    <View style={{ flexDirection: "column" }}>
                                        <Text numberOfLines={1} style={{fontSize:18,paddingLeft:wp('4%'),marginTop:wp('2%')}}>{item.user.name}</Text>
                                        <Text numberOfLines={3} ellipsizeMode="middle" style={styles.textStyle}>{item.text}</Text>
                                    </View>
                                </TouchableOpacity>

                            )}
                            enableEmptySections={true}
                            style={{ marginTop: 10 }}
                            keyExtractor={(item, index) => index}
                        />
                    </View>

                </View>
                <View style={{ flex: 0.5 }}>
                    <View style={{ width: wp('100%'), marginLeft: wp('2%') }}>
                        <FlatList
                            data={this.state.chats}
                            ItemSeparatorComponent={this.ListViewItemSeparator}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={()=>{
                                    console.log(item.phonenumber,item.name,item.description)
                                    this.props.navigation.navigate('ChatScreen',{phonenumber:item.phonenumber})}}>
                                        {console.log(this.props.navigation.state.params.putcolor)}
                                        {/* yaha pr parameter catch krra hai agr kuch nai hua toh by default false lelega */}
                                        {this.getcolor = this.props.navigation.getParam('putcolor', false)}
                                        {this.getcolor ? 
                                    <View style={styles.renderChatsName}>
                                        <Image source={require("../assets/chatIcon.png")} />
                                        <Text style={styles.textStyle}>Anonymous</Text>
                                    </View> : 
                                    <View style={styles.renderChatsName1}>
                                        <Image source={require("../assets/chatIcon.png")} />
                                        <Text style={styles.textStyle}>Anonymous</Text>
                                    </View>
                                    }
                                    {/* <View style={styles.renderChatsName}>
                                        <Image source={require("../assets/chatIcon.png")} />
                                        <Text style={styles.textStyle}>{item.name}</Text>
                                    </View> */}
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
                                <TouchableOpacity onPress={()=>{
                                    console.log(item.phonenumber,item.name,item.description)
                                    this.props.navigation.navigate('ChatScreen',{phonenumber:item.phonenumber})}}>
                                        {this.getcolor = this.props.navigation.getParam('putcolor', false)}
                                        {this.getcolor ? 
                                    <View style={styles.renderChatsName}>
                                        <Image source={require("../assets/chatIcon.png")} />
                                        <Text style={styles.textStyle}>{item.name}</Text>
                                    </View> : 
                                    <View style={styles.renderChatsName1}>
                                        <Image source={require("../assets/chatIcon.png")} />
                                        <Text style={styles.textStyle}>{item.name}</Text>
                                    </View>
                                    }
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
render() {
    {this.componentMount()}
    {console.log(this.state.isLoading)}
    if(this.state.isLoading == false){
        {this.fetchfromDB()}
    return null}
    else{
    return (
        <View style={{ flex: 1}}>
            <View style={styles.upperContainer}>
                <View style={{flex:1,flexDirection:'row',marginLeft:wp("4%")}}>
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
                <View style={{flex:0.6}}>
                <Text style={{marginLeft:wp('6%'),fontSize:24,color:"white",fontWeight:"bold"}}>
                    Message
                </Text>
                </View>
                </View>
            </View>
            <View style={styles.lowerContainer}>
                {this.state.text ?
                    this.renderForSearchActive()

                    :

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
                            <View style={{ width: wp('100%'), marginLeft: wp('2%') }}>
                                {<View>
                                <TouchableOpacity onPress={()=>{
                                                this.props.navigation.navigate('ChatScreen',{phonenumber:this.props.phonenumberuser})}}>
                                                <View style={styles.renderChatsName}>
                                                    <Image source={require("../assets/chatIcon.png")} />
                                                    <Text style={styles.textStyle}>Myself</Text>
                                                </View>
                                            </TouchableOpacity>
                                    </View>}
                                <ScrollView>
                                    <FlatList
                                        data={this.state.chats}
                                        ItemSeparatorComponent={this.ListViewItemSeparator}
                                        renderItem={({ item }) => (
                                            
                                            <TouchableOpacity onPress={()=>{
                                                console.log(item.phonenumber,item.name,item.description)
                                                this.props.navigation.navigate('OneChat',{phonenumber:item.phonenumber})}}>
                                        {this.getcolor = this.props.navigation.getParam('putcolor', false)}
                                        {this.getcolor ? 
                                    <View style={styles.renderChatsName}>
                                        <Image source={require("../assets/chatIcon.png")} />
                                        <Text style={styles.textStyle}>{item.name}</Text>
                                    </View> : 
                                    <View style={styles.renderChatsName1}>
                                        <Image source={require("../assets/chatIcon.png")} />
                                        <Text style={styles.textStyle}>{item.name}</Text>
                                    </View>
                                    }
                                            </TouchableOpacity>
                                        )}
                                        enableEmptySections={true}
                                        style={{ marginTop: 10 }}
                                        keyExtractor={(item, index) => index}
                                    />
                                </ScrollView>
                            </View>
                        </View>

                    </View>
                }


            </View>

        </View>
    );
}}
}
const mapStateToProps = (state) =>{
console.log(state)
return {
    upload_status : state.textUpload,
    nameuser: state.nameuser,
    phonenumberuser: state.phonenumberuser, 
}
}  

export default connect(mapStateToProps)(ChatList)
const styles = StyleSheet.create({
upperContainer: {
    flex: 0.1,
    backgroundColor: "#0290ea",
    alignItems:"center",
    flexDirection: 'row',
},
lowerContainer: {
    flex: 0.9,
    backgroundColor: "blue"
},

textStyle: {
    fontSize: 16,
    paddingLeft:wp('6%'),
    
},
textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: "#FFF",
    backgroundColor: '#FFFFFF',
    margin: wp('4%'),
    borderRadius: wp('5%'),
    elevation: 4
},
renderChatsName:{
    flexDirection: "row",
    borderLeftWidth: wp('1%'), 
    borderLeftColor: 'red',
    padding: wp('2%'), 
    marginTop: hp('1%'),
    alignItems:"center" 
},
renderChatsName1:{
    flexDirection: "row",
    borderLeftWidth: wp('1%'), 
    borderLeftColor: 'yellow',
    padding: wp('2%'), 
    marginTop: hp('1%'),
    alignItems:"center" 
}
});