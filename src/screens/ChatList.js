

// // // // import React, { Component } from 'react';
// // // // import {
// // // //     Text,
// // // //     StyleSheet,
// // // //     View,
// // // //     FlatList,
// // // //     TextInput,
// // // //     ActivityIndicator,
// // // //     Alert,
// // // //     Image,
// // // //     TouchableOpacity, ScrollView
// // // // } from 'react-native';
// // // // import { Badge } from 'react-native-elements';
// // // // import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
// // // // import * as firebase from 'firebase'
// // // // import { connect } from 'react-redux';
// // // // import { resolve } from 'url';
// // // // // import { ScrollView } from 'react-native-gesture-handler';
// // // // class ChatList extends Component {
// // // //     constructor(props) {
// // // //         super(props);
// // // //         this.state = {
// // // //             isLoading: false,
// // // //             text: '',
// // // //             searchActive: false,
// // // //             chats: null,
// // // //             callFetch: false,
// // // //             display: false,
// // // //             your : false,
// // // //         };
// // // //         this.arrayholder = [];
// // // //         this.newData = []
// // // //         this.alertarr = null
// // // //         this.getcolor=false
// // // //         this.interval
      
// // // //         // this.newData
// // // //     }

// // // //     //child added listener for firebase
// // // //     on = callback => 
// // // //         firebase.database().ref("alertsUnderYou/"+this.props.phonenumberuser+"/").limitToLast(1).on('child_added', snapshot => {callback(
// // // //             // snapshot.forEach((data)=>{
// // // //             //     this.arrayholder.push(data.val())
// // // //             // })
// // // //             // console.log("hey inside")
// // // //             this.setState({isLoading: true})
// // // //         )
// // // //             console.log("Hey i am")
// // // //     }
// // // //     );

// // // //     youralert = () => {
// // // //         var alertyour = new Promise (( resolve,reject) => {
// // // //             firebase.database().ref("chatroom/").on("value", snapshot => {
// // // //                 // console.log("zhgxcjhgaskusdbqwkhdqwoidhq",Object.keys(snapshot.val()))
// // // //                 var arr= []
// // // //                 if(snapshot.val()){
// // // //                 arr = Object.keys(snapshot.val())
// // // //                 for(var i=0;i<arr.length;i++)
// // // //                 {
// // // //                     if(arr[i] == this.props.phonenumberuser){
// // // //                         resolve(true)
// // // //                     }
// // // //                 }
// // // //                 reject(false)}
// // // //             })
// // // //         })
// // // //         alertyour.then(val => {
// // // //             console.log(val)
// // // //             this.setState({
// // // //                 your: val
// // // //             })
// // // //         })
// // // //     }

// // // //     fetchfromDB= () =>{
// // // //         var fetchMessage = new Promise((resolve, reject) => {
// // // //             var fetchedAlert = []
// // // //             firebase.database().ref("ChatsUnderYou/Anonymous/"+this.props.phonenumberuser+"/").on("value", snapshot => {
// // // //                 snapshot.forEach((data) => {
// // // //                     fetchedAlert.push(data.val())
// // // //                 });
// // // //             })
// // // //             firebase.database().ref("ChatsUnderYou/vendors/"+this.props.phonenumberuser+"/").on("value", snapshot => {
// // // //                 snapshot.forEach((data) => {
// // // //                     fetchedAlert.push(data.val())
// // // //                 });
// // // //                 // if (fetchedAlert)
// // // //                 //     resolve(fetchedAlert)
// // // //                 // else
// // // //                 //     reject("no data")
// // // //             })
// // // //             firebase.database().ref("ChatsUnderYou/alerts/"+this.props.phonenumberuser+"/").on("value", snapshot => {
// // // //                 snapshot.forEach((data) => {
// // // //                     fetchedAlert.push(data.val())
// // // //                 });
// // // //                 // if (fetchedAlert)
// // // //                 //     resolve(fetchedAlert)
// // // //                 // else
// // // //                 //     reject("no data")
// // // //             })
// // // //             if (fetchedAlert)
// // // //                     resolve(fetchedAlert)
// // // //                 else
// // // //                     reject("no data")
// // // //         })
// // // //         fetchMessage.then((s) => {
// // // //             console.log(s)
// // // //             s.sort(function(a, b){
// // // //                 return -(a.timestamp-b.timestamp)
// // // //             })
// // // //             this.setState({
// // // //                 isLoading: true,
// // // //                 // display:false,
// // // //                 chats:s
// // // //             })
// // // //             console.log(this.state.isLoading)
// // // //         }).catch((err) => {

// // // //         })
// // // //     }
// // // //     componentDidMount() {
// // // //         this.interval=setInterval(() => {
// // // //             console.log("refreshing");
            
// // // //             this.setState({ time: Date.now(),text: '',
// // // //             isLoading: false, })

            
// // // //         },10000);
// // // //         var fetchMessage = new Promise((resolve, reject) => {
// // // //             var fetchedAno = []
// // // //             firebase.database().ref("ChatsUnderYou/Anonymous/"+this.props.phonenumberuser+"/").on("value", snapshot => {
// // // //                 snapshot.forEach((data) => {
// // // //                     fetchedAno.push(data.val())
// // // //                 });
// // // //                 if (fetchedAno)
// // // //                     resolve(fetchedAno)
// // // //                 else
// // // //                     reject("no data")
// // // //             })
// // // //         })
// // // //         fetchMessage.then(fetchedAno => {
// // // //             console.log("fetchedAno",fetchedAno)
// // // //             var fetchMessage1 = new Promise((resolve,reject) => {
// // // //                 var fetchedven = []
// // // //                 var fetchedAnoven = []
// // // //                 firebase.database().ref("ChatsUnderYou/vendors/"+this.props.phonenumberuser+"/").on("value", snapshot => {
// // // //                     snapshot.forEach((data) => {
// // // //                         fetchedven.push(data.val())
// // // //                     });
// // // //                     fetchedAnoven.push(...fetchedAno,...fetchedven)
// // // //                     if (fetchedAnoven)
// // // //                         resolve(fetchedAnoven)
// // // //                     else
// // // //                         reject("no data")
// // // //                 })
// // // //             })
// // // //             fetchMessage1.then(fetchedAnoven => {
// // // //                 console.log("fetchedAnoven",fetchedAnoven)
// // // //                 var fetchMessage2 = new Promise((resolve,reject) => {
// // // //                     var fetchedAlert = []
// // // //                 var fetchedAll = []
// // // //                 firebase.database().ref("ChatsUnderYou/alerts/"+this.props.phonenumberuser+"/").on("value", snapshot => {
// // // //                     snapshot.forEach((data) => {
// // // //                         fetchedAlert.push(data.val())
// // // //                     });
// // // //                     fetchedAll.push(...fetchedAnoven,...fetchedAlert)
// // // //                     if (fetchedAll)
// // // //                         resolve(fetchedAll)
// // // //                     else
// // // //                         reject("no data")
// // // //                 })
// // // //                 })
// // // //                 fetchMessage2.then(fetchedAll => {
// // // //                     console.log("fetchedAll",fetchedAll)
// // // //                     fetchedAll.sort(function(a, b){
// // // //                         return -(a.timestamp-b.timestamp)
// // // //                     })
// // // //                     console.log("fetchedAllSort",fetchedAll)

// // // //             this.setState({
// // // //                 display:true,
// // // //                 chats:fetchedAll
// // // //             })
// // // //                 })
// // // //             })
// // // //         })
// // // //     }
// // // //         componentWillUnmount() {
// // // //         clearInterval(this.interval);
// // // //       }
// // // //             // const { navigation } = this.props;
// // // //         // const user = navigation.getParam('marker');
// // // //         componentMount = () => {
// // // //             // if(this.props.navigation.state.params.phonenumber!=null){
// // // //             // console.log(this.props.navigation.state.params.name)
// // // //             // console.log(this.props.navigation.state.params.phonenumber)
// // // //             // console.log(this.props.navigation.state.params.description)
// // // //             var phonenumber = null
// // // //               const { navigation } = this.props;
// // // //               phonenumber = navigation.getParam('phonenumber',null);
// // // //             // phonenumber = this.props.navigation.state.params.phonenumber
// // // //                 console.log(phonenumber,this.state.chats)
// // // //             // var appenddata = new Promise((resolve, reject) => {
// // // //                 if(phonenumber != null){
// // // //                 var c = 0
// // // //                 if(this.state.chats.length!=0){
// // // //                     console.log(this.state.chats[0].phonenumber)
// // // //                 this.state.chats.forEach(chat => {
// // // //                     if(chat.phonenumber == this.props.navigation.state.params.phonenumber)
// // // //                     {
// // // //                         console.log("Im in")
// // // //                         c++;
// // // //                     }
// // // //                 })}
// // // //                 console.log(c)
// // // //                 if(c==0){
// // // //                     console.log(this.props.navigation.state.params.category)
// // // //                     if(this.props.navigation.state.params.category == "Emotional Support"){
// // // //                         firebase.database().ref("ChatsUnderYou/Anonymous/"+this.props.phonenumberuser+"/"+this.props.navigation.state.params.phonenumber).set({
// // // //                             name: this.props.navigation.state.params.name,
// // // //                             description: this.props.navigation.state.params.description,
// // // //                             phonenumber:this.props.navigation.state.params.phonenumber,
// // // //                             category: this.props.navigation.state.params.category,
// // // //                             counter: 0,
// // // //                             timestamp: 0,
// // // //                         }).then(() => {
// // // //                             firebase.database().ref("ChatsUnderYou/Anonymous/"+this.props.navigation.state.params.phonenumber+"/"+this.props.phonenumberuser).set({
// // // //                                 name: this.props.navigation.state.params.name,
// // // //                                 description: this.props.navigation.state.params.description,
// // // //                                 phonenumber:this.props.phonenumberuser,
// // // //                                 category: this.props.navigation.state.params.category,
// // // //                                 counter: 0,
// // // //                                 timestamp: 0,
// // // //                             }).then(() => {
// // // //                                 this.setState({
// // // //                                     // callFetch:true
// // // //                                     isLoading: false
// // // //                                 })
// // // //                             })
// // // //                             })}
// // // //                             else if(this.props.navigation.state.params.category == "shops") {
// // // //                                 firebase.database().ref("ChatsUnderYou/vendors/"+this.props.phonenumberuser+"/"+this.props.navigation.state.params.phonenumber).set({
// // // //                                     name: this.props.navigation.state.params.name,
// // // //                                     description: this.props.navigation.state.params.description,
// // // //                                     phonenumber:this.props.navigation.state.params.phonenumber,
// // // //                                     category: this.props.navigation.state.params.category,
// // // //                                     counter: 0,
// // // //                                     timestamp: 0,
// // // //                                 }).then(() => {
// // // //                                     firebase.database().ref("ChatsUnderYou/vendors/"+this.props.navigation.state.params.phonenumber+"/"+this.props.phonenumberuser).set({
// // // //                                         name: this.props.navigation.state.params.name,
// // // //                                         description: this.props.navigation.state.params.description,
// // // //                                         phonenumber:this.props.phonenumberuser,
// // // //                                         category: this.props.navigation.state.params.category,
// // // //                                         counter: 0,
// // // //                                         timestamp: 0,
        
// // // //                                     }).then(() => {
// // // //                                         this.setState({
// // // //                                             // callFetch:true
// // // //                                             isLoading: false
// // // //                                         })
// // // //                                     })
// // // //                                     })
// // // //                             }
// // // //                     else {
// // // //                         firebase.database().ref("ChatsUnderYou/alerts/"+this.props.phonenumberuser+"/"+this.props.navigation.state.params.phonenumber).set({
// // // //                             name: this.props.navigation.state.params.name,
// // // //                             description: this.props.navigation.state.params.description,
// // // //                             phonenumber:this.props.navigation.state.params.phonenumber,
// // // //                             category: this.props.navigation.state.params.category,
// // // //                             counter: 0,
// // // //                             timestamp: 0,
// // // //                         }).then(() => {
// // // //                                 this.setState({
// // // //                                     // callFetch:true
// // // //                                     isLoading: false
// // // //                                 })
// // // //                             })
// // // //                     }
// // // //                 }}
// // // //                 }
// // // //     SearchFilterFunction(text) {
// // // //         //passing the inserted text in textinput
// // // //         console.log(text)
// // // //         this.newData = this.arrayholder.filter(function (item) {
// // // //             //applying filter for the inserted text in search bar
// // // //             const itemData = item.text ? item.text.toUpperCase() : ''.toUpperCase();
// // // //             const textData = text.toUpperCase();
// // // //             return itemData.indexOf(textData) > -1;
// // // //         });
// // // //         this.setState({
// // // //             //setting the filtered newData on datasource
// // // //             //After setting the data it will automatically re-render the view
// // // //             dataSource: this.newData,
// // // //             text: text,
// // // //         });
// // // //         console.log(this.newData)
// // // //     }
// // // //     ListViewItemSeparator = () => {
// // // //         //Item sparator view
// // // //         return (
// // // //             <View
// // // //                 style={{
// // // //                     height: hp('1%'),
// // // //                     // width: '75%',
// // // //                     borderBottomWidth: 0.25,
// // // //                     // opacity:0.6,
// // // //                     borderBottomColor: "grey",
// // // //                     // marginLeft: wp('16%')
// // // //                     // backgroundColor: '#080808',
// // // //                     // position: "absolute"
// // // //                     // borderLeftWidth:10
// // // //                 }}
// // // //             />
// // // //         );
// // // //     };

// // // //     renderForSearchActive = () => {
// // // //         console.log("text= ", this.state.text, "newData= ", this.newData)

// // // //         if (this.state.text && this.newData.length != 0) {
// // // //             console.log("if");
// // // //             return (
// // // //                 <View style={{ flex: 1, backgroundColor: "#fff" }}>
// // // //                     <View style={{ flex: 0.12 }}>
// // // //                         <TextInput
// // // //                             style={styles.textInputStyle}
// // // //                             onChangeText={text => this.SearchFilterFunction(text)}
// // // //                             value={this.state.text}
// // // //                             underlineColorAndroid="transparent"
// // // //                             placeholder="Search message"
// // // //                         />
// // // //                         {/* initially dataSource is kept empty and then as search element are found they are added in it.  */}

// // // //                     </View>
// // // //                     <View style={{ flex: 0.38 }}>
// // // //                         <View style={{}}>
// // // //                             <FlatList
// // // //                                 data={this.state.dataSource}
// // // //                                 ItemSeparatorComponent={this.ListViewItemSeparator}
// // // //                                 renderItem={({ item }) => (
// // // //                                     <TouchableOpacity>
// // // //                                         <View style={{ flexDirection: "column" }}>
// // // //                                             <Text numberOfLines={1} style={{fontSize:18,paddingLeft:wp('4%'),marginTop:wp('2%')}}>{item.user.name}</Text>
// // // //                                             <Text numberOfLines={3} ellipsizeMode="middle" style={styles.textStyle}>{item.text}</Text>
// // // //                                         </View>
// // // //                                     </TouchableOpacity>

// // // //                                 )}
// // // //                                 enableEmptySections={true}
// // // //                                 style={{ marginTop: 10 }}
// // // //                                 keyExtractor={(item, index) => index}
// // // //                             />
// // // //                         </View>

// // // //                     </View>
// // // //                     <View style={{ flex: 0.5 }}>
// // // //                         <View style={{ width: wp('100%'), marginLeft: wp('2%') }}>
// // // //                             <FlatList
// // // //                                 data={this.state.chats}
// // // //                                 ItemSeparatorComponent={this.ListViewItemSeparator}
// // // //                                 renderItem={({ item }) => (
// // // //                                     <TouchableOpacity onPress={()=>{
// // // //                                         console.log(item.phonenumber,item.name,item.description)
// // // //                                         this.props.navigation.navigate('ChatScreen',{phonenumber:item.phonenumber})}}>
// // // //                                             {console.log(this.props.navigation.state.params.putcolor)}
// // // //                                             {/* yaha pr parameter catch krra hai agr kuch nai hua toh by default false lelega */}
// // // //                                             {this.getcolor = this.props.navigation.getParam('putcolor', false)}
// // // //                                             {this.getcolor ? 
// // // //                                         <View style={styles.renderChatsName}>
// // // //                                             <Image source={require("../assets/chatIcon.png")} />
// // // //                                             <Text style={styles.textStyle}>{item.name}</Text>
// // // //                                         </View> : 
// // // //                                         <View style={styles.renderChatsName1}>
// // // //                                             <Image source={require("../assets/chatIcon.png")} />
// // // //                                             <Text style={styles.textStyle}>{item.name}</Text>
// // // //                                         </View>
// // // //                                         }
// // // //                                         {/* <View style={styles.renderChatsName}>
// // // //                                             <Image source={require("../assets/chatIcon.png")} />
// // // //                                             <Text style={styles.textStyle}>{item.name}</Text>
// // // //                                         </View> */}
// // // //                                     </TouchableOpacity>
// // // //                                 )}
// // // //                                 enableEmptySections={true}
// // // //                                 style={{ marginTop: 10 }}
// // // //                                 keyExtractor={(item, index) => index}
// // // //                             />
// // // //                         </View>
// // // //                     </View>
// // // //                 </View>
// // // //             )
// // // //         }
// // // //         else {
// // // //             console.log("else");
// // // //             return (
// // // //                 <View style={{ flex: 1, backgroundColor: "#fff" }}>
// // // //                     <View style={{ flex: 0.12 }}>
// // // //                         <TextInput
// // // //                             style={styles.textInputStyle}
// // // //                             onChangeText={text => this.SearchFilterFunction(text)}
// // // //                             value={this.state.text}
// // // //                             underlineColorAndroid="transparent"
// // // //                             placeholder="Search message"
// // // //                         />
// // // //                         {/* initially dataSource is kept empty and then as search element are found they are added in it.  */}

// // // //                     </View>
// // // //                     <View style={{ flex: 0.88 }}>
// // // //                         <View style={{ height: hp('80%'), width: wp('100%'), marginLeft: wp('2%') }}>
// // // //                             <FlatList
// // // //                                 data={this.state.chats}
// // // //                                 ItemSeparatorComponent={this.ListViewItemSeparator}
// // // //                                 renderItem={({ item }) => (
// // // //                                     <TouchableOpacity onPress={()=>{
// // // //                                         console.log(item.phonenumber,item.name,item.description)
// // // //                                         this.props.navigation.navigate('ChatScreen',{phonenumber:item.phonenumber})}}>
// // // //                                             {this.getcolor = this.props.navigation.getParam('putcolor', false)}
// // // //                                             {this.getcolor ? 
// // // //                                         <View style={styles.renderChatsName}>
// // // //                                             <Image source={require("../assets/chatIcon.png")} />
// // // //                                             <Text style={styles.textStyle}>{item.name}</Text>
// // // //                                         </View> : 
// // // //                                         <View style={styles.renderChatsName1}>
// // // //                                             <Image source={require("../assets/chatIcon.png")} />
// // // //                                             <Text style={styles.textStyle}>{item.name}</Text>
// // // //                                         </View>
// // // //                                         }
// // // //                                         {/* <View style={styles.renderChatsName}>
// // // //                                             <Image source={require("../assets/chatIcon.png")} />
// // // //                                             <Text style={styles.textStyle}>{item.name}</Text>
// // // //                                         </View> */}
// // // //                                     </TouchableOpacity>
// // // //                                 )}
// // // //                                 enableEmptySections={true}
// // // //                                 style={{ marginTop: 10 }}
// // // //                                 keyExtractor={(item, index) => index}
// // // //                             />
// // // //                         </View>
// // // //                     </View>

// // // //                 </View>
// // // //             )
// // // //         }

// // // //     }
// // // //     render() {
// // // //         if(this.state.display == true){
// // // //         {this.componentMount()}
// // // //         if(this.state.isLoading == false){
// // // //             {this.fetchfromDB()
// // // //             this.youralert()
// // // //             }
// // // //         return null}
// // // //         else{
// // // //         return (
// // // //             <View style={{ flex: 1}}>
// // // //                 <View style={styles.upperContainer}>
// // // //                     <View style={{flex:1,flexDirection:'row',marginLeft:wp("4%")}}>
// // // //                     <View style={{flex:0.6}}>
// // // //                     <Text style={{marginLeft:wp('6%'),fontSize:24,color:"white",fontWeight:"bold"}}>
// // // //                         Message
// // // //                     </Text>
// // // //                     </View>
// // // //                     </View>
// // // //                 </View>
// // // //                 <View style={styles.lowerContainer}>
// // // //                     {this.state.text ?
// // // //                         this.renderForSearchActive()

// // // //                         :

// // // //                         <View style={{ flex: 1, backgroundColor: "#fff" }}>
// // // //                             <View style={{ flex: 0.12 }}>
// // // //                                 <TextInput
// // // //                                     style={styles.textInputStyle}
// // // //                                     onChangeText={text => this.SearchFilterFunction(text)}
// // // //                                     value={this.state.text}
// // // //                                     underlineColorAndroid="transparent"
// // // //                                     placeholder="Search message"
// // // //                                 />
// // // //                                 {/* initially dataSource is kept empty and then as search element are found they are added in it.  */}

// // // //                             </View>
// // // //                             <View style={{ flex: 0.88 }}>
// // // //                                 <View style={{ width: wp('100%'), marginLeft: wp('2%') }}>
// // // //                                     {this.state.your ? <View>
// // // //                                     <TouchableOpacity onPress={()=>{
// // // //                                                     // console.log(item.phonenumber,item.name,item.description)
// // // //                                                     this.props.navigation.navigate('ChatScreen',{phonenumber:this.props.phonenumberuser})}} style={{ borderBottomWidth: 0.25,
// // // //                                                         // opacity:0.6,
// // // //                                                         paddingBottom: hp("1%"),
// // // //                                                         borderBottomColor: "grey",}}>
// // // //                                                     <View style={styles.renderChatsName1}>
// // // //                                                         <Image source={require("../assets/chatIcon.png")} />
// // // //                                                         <Text style={styles.textStyle}>Myself</Text>
// // // //                                                     </View>
// // // //                                                 </TouchableOpacity>
// // // //                                         </View> : <View/>}
// // // //                                     <ScrollView>
// // // //                                         <FlatList
// // // //                                             data={this.state.chats}
// // // //                                             ItemSeparatorComponent={this.ListViewItemSeparator}
// // // //                                             renderItem={({ item }) => (
// // // //                                                 <View>
// // // //                                                 {item.category == "Emotional Support" ?  <TouchableOpacity onPress={()=>{
// // // //                                                     console.log(item.phonenumber,item.name,item.description)
// // // //                                                     if(this.props.phonenumberuser){
// // // //                                                     this.props.navigation.navigate('AnonymousChat',{phonenumber:item.phonenumber,c:0})}
// // // //                                                 else{
// // // //                                                     alert("Please fill details first!")
// // // //                                                 }
// // // //                                                 }
                                                    
// // // //                                                     }>
                                            
// // // //                                                     <View style={styles.renderChatsName1}>
// // // //                                                         <Image source={require("../assets/chatIcon.png")} />
// // // //                                                         <Text style={styles.textStyle}>Anonymous</Text>
// // // //                                                         {/* <Text>{item.counter}</Text> */}
// // // //                                                         {item.counter > 0 ? <Badge
// // // //                                                             value = {"+" + item.counter}
// // // //                                                             containerStyle={{ position: 'absolute', right: 20 }}
// // // //                                                         />: <View/>}
// // // //                                                         {/* <Badge
// // // //                                                             value="99+"
// // // //                                                             containerStyle={{ position: 'absolute', right: 20 }}
// // // //                                                         /> */}
// // // //                                                     </View> 
// // // //                                                     {/* <View style={styles.renderChatsName}>
// // // //                                                         <Image source={require("../assets/chatIcon.png")} />
// // // //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// // // //                                                     </View> */}
// // // //                                                 </TouchableOpacity> :  <View></View>}
// // // //                                                 {item.category == "shops" ?  <TouchableOpacity onPress={()=>{
// // // //                                                     console.log(item.phonenumber,item.name,item.description)
// // // //                                                     if(this.props.phonenumberuser){
// // // //                                                     this.props.navigation.navigate('vendorChat',{phonenumber:item.phonenumber})}
// // // //                                                     else{
// // // //                                                         alert("Please fill details first!")
// // // //                                                     }
// // // //                                                 }}>
                                            
// // // //                                                     <View style={styles.renderChatsName}>
// // // //                                                         <Image source={require("../assets/chatIcon.png")} />
// // // //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// // // //                                                         {item.counter > 0 ? <Badge
// // // //                                                             value = {"+" + item.counter}
// // // //                                                             containerStyle={{ position: 'absolute', right: 20 }}
// // // //                                                         />: <View/>}
// // // //                                                     </View> 
// // // //                                                     {/* <View style={styles.renderChatsName}>
// // // //                                                         <Image source={require("../assets/chatIcon.png")} />
// // // //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// // // //                                                     </View> */}
// // // //                                                 </TouchableOpacity> :  <View></View>}
// // // //                                                 {item.category == "food" ?  <TouchableOpacity onPress={()=>{
// // // //                                                     console.log(item.phonenumber,item.name,item.description)
// // // //                                                     if(this.props.phonenumberuser){
// // // //                                                     this.props.navigation.navigate('ChatScreen',{phonenumber:item.phonenumber})}
// // // //                                                     else{
// // // //                                                         alert("Please fill details first!")
// // // //                                                     }
// // // //                                                 }}>
                                            
// // // //                                                     <View style={styles.renderChatsName1}>
// // // //                                                         <Image source={require("../assets/chatIcon.png")} />
// // // //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// // // //                                                     </View> 
// // // //                                                     {/* <View style={styles.renderChatsName}>
// // // //                                                         <Image source={require("../assets/chatIcon.png")} />
// // // //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// // // //                                                     </View> */}
// // // //                                                 </TouchableOpacity> :  <View></View>}
// // // //                                                 {item.category == "other" ?  <TouchableOpacity onPress={()=>{
// // // //                                                     console.log(item.phonenumber,item.name,item.description)
// // // //                                                     if(this.props.phonenumberuser){
// // // //                                                     this.props.navigation.navigate('ChatScreen',{phonenumber:item.phonenumber})}
// // // //                                                     else{
// // // //                                                         alert("Please fill details first!")
// // // //                                                     }
// // // //                                                 }}>
                                            
// // // //                                                     <View style={styles.renderChatsName1}>
// // // //                                                         <Image source={require("../assets/chatIcon.png")} />
// // // //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// // // //                                                     </View> 
// // // //                                                     {/* <View style={styles.renderChatsName}>
// // // //                                                         <Image source={require("../assets/chatIcon.png")} />
// // // //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// // // //                                                     </View> */}
// // // //                                                 </TouchableOpacity> :  <View></View>}
                                               
// // // //                                                 </View>
// // // //                                             )}
// // // //                                             enableEmptySections={true}
// // // //                                             style={{ marginTop: 10 }}
// // // //                                             keyExtractor={(item, index) => index}
// // // //                                         />
// // // //                                     </ScrollView>
// // // //                                 </View>
// // // //                             </View>

// // // //                         </View>
// // // //                     }


// // // //                 </View>

// // // //             </View>
// // // //         );
// // // //     }}else{
// // // //         return null;
// // // //     }
// // // // }
// // // // }
// // // // const mapStateToProps = (state) =>{
// // // //     console.log(state)
// // // //     return {
// // // //       upload_status : state.textUpload,
// // // //       nameuser: state.nameuser,
// // // //       phonenumberuser: state.phonenumberuser, 
// // // //     }
// // // //   }  
  
// // // //   export default connect(mapStateToProps)(ChatList)
// // // // const styles = StyleSheet.create({
// // // //     upperContainer: {
// // // //         flex: 0.1,
// // // //         backgroundColor: "#0290ea",
// // // //         alignItems:"center",
// // // //         flexDirection: 'row',
// // // //     },
// // // //     lowerContainer: {
// // // //         flex: 0.9,
// // // //         backgroundColor: "blue"
// // // //     },

// // // //     textStyle: {
// // // //         // margin: wp('2%'),
// // // //         fontSize: 16,
// // // //         paddingLeft:wp('6%'),
      
// // // //         // backgroundColor:"green"
// // // //     },
// // // //     textInputStyle: {
// // // //         height: 40,
// // // //         borderWidth: 1,
// // // //         paddingLeft: 10,
// // // //         borderColor: "#FFF",
// // // //         backgroundColor: '#FFFFFF',
// // // //         margin: wp('4%'),
// // // //         borderRadius: wp('5%'),
// // // //         elevation: 4
// // // //     },
// // // //     renderChatsName:{
// // // //         flexDirection: "row",
// // // //         borderLeftWidth: wp('1%'), 
// // // //         borderLeftColor: 'yellow',
// // // //         padding: wp('2%'), 
// // // //         marginTop: hp('1%'),
// // // //         alignItems:"center" 
// // // //     },
// // // //     renderChatsName1:{
// // // //         flexDirection: "row",
// // // //         borderLeftWidth: wp('1%'), 
// // // //         borderLeftColor: 'red',
// // // //         padding: wp('2%'), 
// // // //         marginTop: hp('1%'),
// // // //         alignItems:"center" 
// // // //     },
// // // // });



// // // import React, { Component } from 'react';
// // // import {
// // //     Text,
// // //     StyleSheet,
// // //     View,
// // //     FlatList,
// // //     TextInput,
// // //     ActivityIndicator,
// // //     Alert,
// // //     Image,
// // //     TouchableOpacity, ScrollView
// // // } from 'react-native';
// // // import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
// // // import * as firebase from 'firebase'
// // // import { connect } from 'react-redux';
// // // import { resolve } from 'url';
// // // // import { ScrollView } from 'react-native-gesture-handler';
// // // class ChatList extends Component {
// // //     constructor(props) {
// // //         super(props);
// // //         this.state = {
// // //             isLoading: false,
// // //             text: '',
// // //             searchActive: false,
// // //             chats: null,
// // //             callFetch: false,
// // //             display: false,
// // //             your : false,
// // //         };
// // //         this.arrayholder = [];
// // //         this.newData = []
// // //         this.alertarr = null
// // //         this.getcolor=false
      
// // //         // this.newData
// // //     }

// // //     //child added listener for firebase
// // //     on = callback => 
// // //         firebase.database().ref("alertsUnderYou/"+this.props.phonenumberuser+"/").limitToLast(1).on('child_added', snapshot => {callback(
// // //             // snapshot.forEach((data)=>{
// // //             //     this.arrayholder.push(data.val())
// // //             // })
// // //             // console.log("hey inside")
// // //             this.setState({isLoading: true})
// // //         )
// // //             console.log("Hey i am")
// // //     }
// // //     );

// // //     youralert = () => {
// // //         var alertyour = new Promise (( resolve,reject) => {
// // //             firebase.database().ref("chatroom/").on("value", snapshot => {
// // //                 console.log("zhgxcjhgaskusdbqwkhdqwoidhq",Object.keys(snapshot.val()))
// // //                 var arr = Object.keys(snapshot.val())
// // //                 for(var i=0;i<arr.length;i++)
// // //                 {
// // //                     if(arr[i] == this.props.phonenumberuser){
// // //                         resolve(true)
// // //                     }
// // //                 }
// // //                 reject(false)
// // //             })
// // //         })
// // //         alertyour.then(val => {
// // //             console.log(val)
// // //             this.setState({
// // //                 your: val
// // //             })
// // //         })
// // //     }

// // //     fetchfromDB= () =>{
// // //         var fetchMessage = new Promise((resolve, reject) => {
// // //             var fetchedAlert = []
// // //             firebase.database().ref("ChatsUnderYou/Anonymous/"+this.props.phonenumberuser+"/").on("value", snapshot => {
// // //                 snapshot.forEach((data) => {
// // //                     fetchedAlert.push(data.val())
// // //                 });
// // //             })
// // //             firebase.database().ref("ChatsUnderYou/vendors/"+this.props.phonenumberuser+"/").on("value", snapshot => {
// // //                 snapshot.forEach((data) => {
// // //                     fetchedAlert.push(data.val())
// // //                 });
// // //                 // if (fetchedAlert)
// // //                 //     resolve(fetchedAlert)
// // //                 // else
// // //                 //     reject("no data")
// // //             })
// // //             firebase.database().ref("ChatsUnderYou/alerts/"+this.props.phonenumberuser+"/").on("value", snapshot => {
// // //                 snapshot.forEach((data) => {
// // //                     fetchedAlert.push(data.val())
// // //                 });
// // //                 // if (fetchedAlert)
// // //                 //     resolve(fetchedAlert)
// // //                 // else
// // //                 //     reject("no data")
// // //             })
// // //             if (fetchedAlert)
// // //                     resolve(fetchedAlert)
// // //                 else
// // //                     reject("no data")
// // //         })
// // //         fetchMessage.then((s) => {
// // //             console.log(s)
// // //             s.sort(function(a, b){
// // //                 return -(a.timestamp-b.timestamp)
// // //             })
// // //             this.setState({
// // //                 isLoading: true,
// // //                 // display:false,
// // //                 chats:s
// // //             })
// // //             console.log(this.state.isLoading)
// // //         }).catch((err) => {

// // //         })
// // //     }
// // //     componentDidMount() {
// // //         var fetchMessage = new Promise((resolve, reject) => {
// // //             var fetchedAno = []
// // //             firebase.database().ref("ChatsUnderYou/Anonymous/"+this.props.phonenumberuser+"/").on("value", snapshot => {
// // //                 snapshot.forEach((data) => {
// // //                     fetchedAno.push(data.val())
// // //                 });
// // //                 if (fetchedAno)
// // //                     resolve(fetchedAno)
// // //                 else
// // //                     reject("no data")
// // //             })
// // //         })
// // //         fetchMessage.then(fetchedAno => {
// // //             console.log("fetchedAno",fetchedAno)
// // //             var fetchMessage1 = new Promise((resolve,reject) => {
// // //                 var fetchedven = []
// // //                 var fetchedAnoven = []
// // //                 firebase.database().ref("ChatsUnderYou/vendors/"+this.props.phonenumberuser+"/").on("value", snapshot => {
// // //                     snapshot.forEach((data) => {
// // //                         fetchedven.push(data.val())
// // //                     });
// // //                     fetchedAnoven.push(...fetchedAno,...fetchedven)
// // //                     if (fetchedAnoven)
// // //                         resolve(fetchedAnoven)
// // //                     else
// // //                         reject("no data")
// // //                 })
// // //             })
// // //             fetchMessage1.then(fetchedAnoven => {
// // //                 console.log("fetchedAnoven",fetchedAnoven)
// // //                 var fetchMessage2 = new Promise((resolve,reject) => {
// // //                     var fetchedAlert = []
// // //                 var fetchedAll = []
// // //                 firebase.database().ref("ChatsUnderYou/alerts/"+this.props.phonenumberuser+"/").on("value", snapshot => {
// // //                     snapshot.forEach((data) => {
// // //                         fetchedAlert.push(data.val())
// // //                     });
// // //                     fetchedAll.push(...fetchedAnoven,...fetchedAlert)
// // //                     if (fetchedAll)
// // //                         resolve(fetchedAll)
// // //                     else
// // //                         reject("no data")
// // //                 })
// // //                 })
// // //                 fetchMessage2.then(fetchedAll => {
// // //                     console.log("fetchedAll",fetchedAll)
// // //                     fetchedAll.sort(function(a, b){
// // //                         return -(a.timestamp-b.timestamp)
// // //                     })
// // //                     console.log("fetchedAllSort",fetchedAll)

// // //             this.setState({
// // //                 display:true,
// // //                 chats:fetchedAll
// // //             })
// // //                 })
// // //             })
// // //         })
// // //     }
// // //             // const { navigation } = this.props;
// // //         // const user = navigation.getParam('marker');
// // //         componentMount = () => {
// // //             // if(this.props.navigation.state.params.phonenumber!=null){
// // //             // console.log(this.props.navigation.state.params.name)
// // //             // console.log(this.props.navigation.state.params.phonenumber)
// // //             // console.log(this.props.navigation.state.params.description)
// // //             var phonenumber = null
// // //               const { navigation } = this.props;
// // //               phonenumber = navigation.getParam('phonenumber',null);
// // //             // phonenumber = this.props.navigation.state.params.phonenumber
// // //                 console.log(phonenumber,this.state.chats)
// // //             // var appenddata = new Promise((resolve, reject) => {
// // //                 if(phonenumber != null){
// // //                 var c = 0
// // //                 if(this.state.chats.length!=0){
// // //                     console.log(this.state.chats[0].phonenumber)
// // //                 this.state.chats.forEach(chat => {
// // //                     if(chat.phonenumber == this.props.navigation.state.params.phonenumber)
// // //                     {
// // //                         console.log("Im in")
// // //                         c++;
// // //                     }
// // //                 })}
// // //                 console.log(c)
// // //                 if(c==0){
// // //                     console.log(this.props.navigation.state.params.category)
// // //                     if(this.props.navigation.state.params.category == "Emotional Support"){
// // //                         firebase.database().ref("ChatsUnderYou/Anonymous/"+this.props.phonenumberuser+"/"+this.props.navigation.state.params.phonenumber).set({
// // //                             name: this.props.navigation.state.params.name,
// // //                             description: this.props.navigation.state.params.description,
// // //                             phonenumber:this.props.navigation.state.params.phonenumber,
// // //                             category: this.props.navigation.state.params.category,
// // //                             timestamp: 0,
// // //                         }).then(() => {
// // //                             firebase.database().ref("ChatsUnderYou/Anonymous/"+this.props.navigation.state.params.phonenumber+"/"+this.props.phonenumberuser).set({
// // //                                 name: this.props.navigation.state.params.name,
// // //                                 description: this.props.navigation.state.params.description,
// // //                                 phonenumber:this.props.phonenumberuser,
// // //                                 category: this.props.navigation.state.params.category,
// // //                                 timestamp: 0,

// // //                             }).then(() => {
// // //                                 this.setState({
// // //                                     // callFetch:true
// // //                                     isLoading: false
// // //                                 })
// // //                             })
// // //                             })}
// // //                             else if(this.props.navigation.state.params.category == "shops") {
// // //                                 firebase.database().ref("ChatsUnderYou/vendors/"+this.props.phonenumberuser+"/"+this.props.navigation.state.params.phonenumber).set({
// // //                                     name: this.props.navigation.state.params.name,
// // //                                     description: this.props.navigation.state.params.description,
// // //                                     phonenumber:this.props.navigation.state.params.phonenumber,
// // //                                     category: this.props.navigation.state.params.category,
// // //                                     timestamp: 0,
// // //                                 }).then(() => {
// // //                                     firebase.database().ref("ChatsUnderYou/vendors/"+this.props.navigation.state.params.phonenumber+"/"+this.props.phonenumberuser).set({
// // //                                         name: this.props.navigation.state.params.name,
// // //                                         description: this.props.navigation.state.params.description,
// // //                                         phonenumber:this.props.phonenumberuser,
// // //                                         category: this.props.navigation.state.params.category,
// // //                                         timestamp: 0,
        
// // //                                     }).then(() => {
// // //                                         this.setState({
// // //                                             // callFetch:true
// // //                                             isLoading: false
// // //                                         })
// // //                                     })
// // //                                     })
// // //                             }
// // //                     else {
// // //                         firebase.database().ref("ChatsUnderYou/alerts/"+this.props.phonenumberuser+"/"+this.props.navigation.state.params.phonenumber).set({
// // //                             name: this.props.navigation.state.params.name,
// // //                             description: this.props.navigation.state.params.description,
// // //                             phonenumber:this.props.navigation.state.params.phonenumber,
// // //                             category: this.props.navigation.state.params.category,
// // //                             timestamp: 0,
// // //                         }).then(() => {
// // //                                 this.setState({
// // //                                     // callFetch:true
// // //                                     isLoading: false
// // //                                 })
// // //                             })
// // //                     }
// // //                 }}
// // //                 }
// // //     SearchFilterFunction(text) {
// // //         //passing the inserted text in textinput
// // //         console.log(text)
// // //         this.newData = this.arrayholder.filter(function (item) {
// // //             //applying filter for the inserted text in search bar
// // //             const itemData = item.text ? item.text.toUpperCase() : ''.toUpperCase();
// // //             const textData = text.toUpperCase();
// // //             return itemData.indexOf(textData) > -1;
// // //         });
// // //         this.setState({
// // //             //setting the filtered newData on datasource
// // //             //After setting the data it will automatically re-render the view
// // //             dataSource: this.newData,
// // //             text: text,
// // //         });
// // //         console.log(this.newData)
// // //     }
// // //     ListViewItemSeparator = () => {
// // //         //Item sparator view
// // //         return (
// // //             <View
// // //                 style={{
// // //                     height: hp('1%'),
// // //                     // width: '75%',
// // //                     borderBottomWidth: 0.25,
// // //                     // opacity:0.6,
// // //                     borderBottomColor: "grey",
// // //                     // marginLeft: wp('16%')
// // //                     // backgroundColor: '#080808',
// // //                     // position: "absolute"
// // //                     // borderLeftWidth:10
// // //                 }}
// // //             />
// // //         );
// // //     };

// // //     renderForSearchActive = () => {
// // //         console.log("text= ", this.state.text, "newData= ", this.newData)

// // //         if (this.state.text && this.newData.length != 0) {
// // //             console.log("if");
// // //             return (
// // //                 <View style={{ flex: 1, backgroundColor: "#fff" }}>
// // //                     <View style={{ flex: 0.12 }}>
// // //                         <TextInput
// // //                             style={styles.textInputStyle}
// // //                             onChangeText={text => this.SearchFilterFunction(text)}
// // //                             value={this.state.text}
// // //                             underlineColorAndroid="transparent"
// // //                             placeholder="Search message"
// // //                         />
// // //                         {/* initially dataSource is kept empty and then as search element are found they are added in it.  */}

// // //                     </View>
// // //                     <View style={{ flex: 0.38 }}>
// // //                         <View style={{}}>
// // //                             <FlatList
// // //                                 data={this.state.dataSource}
// // //                                 ItemSeparatorComponent={this.ListViewItemSeparator}
// // //                                 renderItem={({ item }) => (
// // //                                     <TouchableOpacity>
// // //                                         <View style={{ flexDirection: "column" }}>
// // //                                             <Text numberOfLines={1} style={{fontSize:18,paddingLeft:wp('4%'),marginTop:wp('2%')}}>{item.user.name}</Text>
// // //                                             <Text numberOfLines={3} ellipsizeMode="middle" style={styles.textStyle}>{item.text}</Text>
// // //                                         </View>
// // //                                     </TouchableOpacity>

// // //                                 )}
// // //                                 enableEmptySections={true}
// // //                                 style={{ marginTop: 10 }}
// // //                                 keyExtractor={(item, index) => index}
// // //                             />
// // //                         </View>

// // //                     </View>
// // //                     <View style={{ flex: 0.5 }}>
// // //                         <View style={{ width: wp('100%'), marginLeft: wp('2%') }}>
// // //                             <FlatList
// // //                                 data={this.state.chats}
// // //                                 ItemSeparatorComponent={this.ListViewItemSeparator}
// // //                                 renderItem={({ item }) => (
// // //                                     <TouchableOpacity onPress={()=>{
// // //                                         console.log(item.phonenumber,item.name,item.description)
// // //                                         this.props.navigation.navigate('ChatScreen',{phonenumber:item.phonenumber})}}>
// // //                                             {console.log(this.props.navigation.state.params.putcolor)}
// // //                                             {/* yaha pr parameter catch krra hai agr kuch nai hua toh by default false lelega */}
// // //                                             {this.getcolor = this.props.navigation.getParam('putcolor', false)}
// // //                                             {this.getcolor ? 
// // //                                         <View style={styles.renderChatsName}>
// // //                                             <Image source={require("../assets/chatIcon.png")} />
// // //                                             <Text style={styles.textStyle}>{item.name}</Text>
// // //                                         </View> : 
// // //                                         <View style={styles.renderChatsName1}>
// // //                                             <Image source={require("../assets/chatIcon.png")} />
// // //                                             <Text style={styles.textStyle}>{item.name}</Text>
// // //                                         </View>
// // //                                         }
// // //                                         {/* <View style={styles.renderChatsName}>
// // //                                             <Image source={require("../assets/chatIcon.png")} />
// // //                                             <Text style={styles.textStyle}>{item.name}</Text>
// // //                                         </View> */}
// // //                                     </TouchableOpacity>
// // //                                 )}
// // //                                 enableEmptySections={true}
// // //                                 style={{ marginTop: 10 }}
// // //                                 keyExtractor={(item, index) => index}
// // //                             />
// // //                         </View>
// // //                     </View>
// // //                 </View>
// // //             )
// // //         }
// // //         else {
// // //             console.log("else");
// // //             return (
// // //                 <View style={{ flex: 1, backgroundColor: "#fff" }}>
// // //                     <View style={{ flex: 0.12 }}>
// // //                         <TextInput
// // //                             style={styles.textInputStyle}
// // //                             onChangeText={text => this.SearchFilterFunction(text)}
// // //                             value={this.state.text}
// // //                             underlineColorAndroid="transparent"
// // //                             placeholder="Search message"
// // //                         />
// // //                         {/* initially dataSource is kept empty and then as search element are found they are added in it.  */}

// // //                     </View>
// // //                     <View style={{ flex: 0.88 }}>
// // //                         <View style={{ height: hp('80%'), width: wp('100%'), marginLeft: wp('2%') }}>
// // //                             <FlatList
// // //                                 data={this.state.chats}
// // //                                 ItemSeparatorComponent={this.ListViewItemSeparator}
// // //                                 renderItem={({ item }) => (
// // //                                     <TouchableOpacity onPress={()=>{
// // //                                         console.log(item.phonenumber,item.name,item.description)
// // //                                         this.props.navigation.navigate('ChatScreen',{phonenumber:item.phonenumber})}}>
// // //                                             {this.getcolor = this.props.navigation.getParam('putcolor', false)}
// // //                                             {this.getcolor ? 
// // //                                         <View style={styles.renderChatsName}>
// // //                                             <Image source={require("../assets/chatIcon.png")} />
// // //                                             <Text style={styles.textStyle}>{item.name}</Text>
// // //                                         </View> : 
// // //                                         <View style={styles.renderChatsName1}>
// // //                                             <Image source={require("../assets/chatIcon.png")} />
// // //                                             <Text style={styles.textStyle}>{item.name}</Text>
// // //                                         </View>
// // //                                         }
// // //                                         {/* <View style={styles.renderChatsName}>
// // //                                             <Image source={require("../assets/chatIcon.png")} />
// // //                                             <Text style={styles.textStyle}>{item.name}</Text>
// // //                                         </View> */}
// // //                                     </TouchableOpacity>
// // //                                 )}
// // //                                 enableEmptySections={true}
// // //                                 style={{ marginTop: 10 }}
// // //                                 keyExtractor={(item, index) => index}
// // //                             />
// // //                         </View>
// // //                     </View>

// // //                 </View>
// // //             )
// // //         }

// // //     }
// // //     render() {
// // //         if(this.state.display == true){
// // //         {this.componentMount()}
// // //         if(this.state.isLoading == false){
// // //             {this.fetchfromDB()
// // //             this.youralert()
// // //             }
// // //         return null}
// // //         else{
// // //         return (
// // //             <View style={{ flex: 1}}>
// // //                 <View style={styles.upperContainer}>
// // //                     <View style={{flex:1,flexDirection:'row',marginLeft:wp("4%")}}>
// // //                     <View style={{flex:0.6}}>
// // //                     <Text style={{marginLeft:wp('6%'),fontSize:24,color:"white",fontWeight:"bold"}}>
// // //                         Message
// // //                     </Text>
// // //                     </View>
// // //                     </View>
// // //                 </View>
// // //                 <View style={styles.lowerContainer}>
// // //                     {this.state.text ?
// // //                         this.renderForSearchActive()

// // //                         :

// // //                         <View style={{ flex: 1, backgroundColor: "#fff" }}>
// // //                             <View style={{ flex: 0.12 }}>
// // //                                 <TextInput
// // //                                     style={styles.textInputStyle}
// // //                                     onChangeText={text => this.SearchFilterFunction(text)}
// // //                                     value={this.state.text}
// // //                                     underlineColorAndroid="transparent"
// // //                                     placeholder="Search message"
// // //                                 />
// // //                                 {/* initially dataSource is kept empty and then as search element are found they are added in it.  */}

// // //                             </View>
// // //                             <View style={{ flex: 0.88 }}>
// // //                                 <View style={{ width: wp('100%'), marginLeft: wp('2%') }}>
// // //                                     {this.state.your ? <View>
// // //                                     <TouchableOpacity onPress={()=>{
// // //                                                     // console.log(item.phonenumber,item.name,item.description)
// // //                                                     this.props.navigation.navigate('ChatScreen',{phonenumber:this.props.phonenumberuser})}} style={{ borderBottomWidth: 0.25,
// // //                                                         // opacity:0.6,
// // //                                                         paddingBottom: hp("1%"),
// // //                                                         borderBottomColor: "grey",}}>
// // //                                                     <View style={styles.renderChatsName1}>
// // //                                                         <Image source={require("../assets/chatIcon.png")} />
// // //                                                         <Text style={styles.textStyle}>Myself</Text>
// // //                                                     </View>
// // //                                                 </TouchableOpacity>
// // //                                         </View> : <View/>}
// // //                                     <ScrollView>
// // //                                         <FlatList
// // //                                             data={this.state.chats}
// // //                                             ItemSeparatorComponent={this.ListViewItemSeparator}
// // //                                             renderItem={({ item }) => (
// // //                                                 <View>
// // //                                                 {item.category == "Emotional Support" ?  <TouchableOpacity onPress={()=>{
// // //                                                     console.log(item.phonenumber,item.name,item.description)
// // //                                                     if(this.props.phonenumberuser){
// // //                                                     this.props.navigation.navigate('AnonymousChat',{phonenumber:item.phonenumber})}
// // //                                                 else{
// // //                                                     alert("Please fill details first!")
// // //                                                 }
// // //                                                 }
                                                    
// // //                                                     }>
                                            
// // //                                                     <View style={styles.renderChatsName1}>
// // //                                                         <Image source={require("../assets/chatIcon.png")} />
// // //                                                         <Text style={styles.textStyle}>Anonymous</Text>
// // //                                                     </View> 
// // //                                                     {/* <View style={styles.renderChatsName}>
// // //                                                         <Image source={require("../assets/chatIcon.png")} />
// // //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// // //                                                     </View> */}
// // //                                                 </TouchableOpacity> :  <View></View>}
// // //                                                 {item.category == "shops" ?  <TouchableOpacity onPress={()=>{
// // //                                                     console.log(item.phonenumber,item.name,item.description)
// // //                                                     if(this.props.phonenumberuser){
// // //                                                     this.props.navigation.navigate('vendorChat',{phonenumber:item.phonenumber})}
// // //                                                     else{
// // //                                                         alert("Please fill details first!")
// // //                                                     }
// // //                                                 }}>
                                            
// // //                                                     <View style={styles.renderChatsName}>
// // //                                                         <Image source={require("../assets/chatIcon.png")} />
// // //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// // //                                                     </View> 
// // //                                                     {/* <View style={styles.renderChatsName}>
// // //                                                         <Image source={require("../assets/chatIcon.png")} />
// // //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// // //                                                     </View> */}
// // //                                                 </TouchableOpacity> :  <View></View>}
// // //                                                 {item.category == "food" ?  <TouchableOpacity onPress={()=>{
// // //                                                     console.log(item.phonenumber,item.name,item.description)
// // //                                                     if(this.props.phonenumberuser){
// // //                                                     this.props.navigation.navigate('ChatScreen',{phonenumber:item.phonenumber})}
// // //                                                     else{
// // //                                                         alert("Please fill details first!")
// // //                                                     }
// // //                                                 }}>
                                            
// // //                                                     <View style={styles.renderChatsName1}>
// // //                                                         <Image source={require("../assets/chatIcon.png")} />
// // //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// // //                                                     </View> 
// // //                                                     {/* <View style={styles.renderChatsName}>
// // //                                                         <Image source={require("../assets/chatIcon.png")} />
// // //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// // //                                                     </View> */}
// // //                                                 </TouchableOpacity> :  <View></View>}
// // //                                                 {item.category == "other" ?  <TouchableOpacity onPress={()=>{
// // //                                                     console.log(item.phonenumber,item.name,item.description)
// // //                                                     if(this.props.phonenumberuser){
// // //                                                     this.props.navigation.navigate('ChatScreen',{phonenumber:item.phonenumber})}
// // //                                                     else{
// // //                                                         alert("Please fill details first!")
// // //                                                     }
// // //                                                 }}>
                                            
// // //                                                     <View style={styles.renderChatsName1}>
// // //                                                         <Image source={require("../assets/chatIcon.png")} />
// // //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// // //                                                     </View> 
// // //                                                     {/* <View style={styles.renderChatsName}>
// // //                                                         <Image source={require("../assets/chatIcon.png")} />
// // //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// // //                                                     </View> */}
// // //                                                 </TouchableOpacity> :  <View></View>}
                                               
// // //                                                 </View>
// // //                                             )}
// // //                                             enableEmptySections={true}
// // //                                             style={{ marginTop: 10 }}
// // //                                             keyExtractor={(item, index) => index}
// // //                                         />
// // //                                     </ScrollView>
// // //                                 </View>
// // //                             </View>

// // //                         </View>
// // //                     }


// // //                 </View>

// // //             </View>
// // //         );
// // //     }}else{
// // //         return null;
// // //     }
// // // }
// // // }
// // // const mapStateToProps = (state) =>{
// // //     console.log(state)
// // //     return {
// // //       upload_status : state.textUpload,
// // //       nameuser: state.nameuser,
// // //       phonenumberuser: state.phonenumberuser, 
// // //     }
// // //   }  
  
// // //   export default connect(mapStateToProps)(ChatList)
// // // const styles = StyleSheet.create({
// // //     upperContainer: {
// // //         flex: 0.1,
// // //         backgroundColor: "#0290ea",
// // //         alignItems:"center",
// // //         flexDirection: 'row',
// // //     },
// // //     lowerContainer: {
// // //         flex: 0.9,
// // //         backgroundColor: "blue"
// // //     },

// // //     textStyle: {
// // //         // margin: wp('2%'),
// // //         fontSize: 16,
// // //         paddingLeft:wp('6%'),
      
// // //         // backgroundColor:"green"
// // //     },
// // //     textInputStyle: {
// // //         height: 40,
// // //         borderWidth: 1,
// // //         paddingLeft: 10,
// // //         borderColor: "#FFF",
// // //         backgroundColor: '#FFFFFF',
// // //         margin: wp('4%'),
// // //         borderRadius: wp('5%'),
// // //         elevation: 4
// // //     },
// // //     renderChatsName:{
// // //         flexDirection: "row",
// // //         borderLeftWidth: wp('1%'), 
// // //         borderLeftColor: 'yellow',
// // //         padding: wp('2%'), 
// // //         marginTop: hp('1%'),
// // //         alignItems:"center" 
// // //     },
// // //     renderChatsName1:{
// // //         flexDirection: "row",
// // //         borderLeftWidth: wp('1%'), 
// // //         borderLeftColor: 'red',
// // //         padding: wp('2%'), 
// // //         marginTop: hp('1%'),
// // //         alignItems:"center" 
// // //     },
// // // });



// // import React, { Component } from 'react';
// // import {
// //     Text,
// //     StyleSheet,
// //     View,
// //     FlatList,
// //     TextInput,
// //     ActivityIndicator,
// //     Alert,
// //     Image,
// //     TouchableOpacity, ScrollView
// // } from 'react-native';
// // import { Badge } from 'react-native-elements';
// // import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
// // import * as firebase from 'firebase'
// // import { connect } from 'react-redux';
// // import { resolve } from 'url';
// // // import { ScrollView } from 'react-native-gesture-handler';
// // class ChatList extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             isLoading: false,
// //             text: '',
// //             searchActive: false,
// //             chats: null,
// //             callFetch: false,
// //             display: false,
// //             your : false,
// //         };
// //         this.arrayholder = [];
// //         this.newData = []
// //         this.alertarr = null
// //         this.getcolor=false
// //         this.interval
      
// //         // this.newData
// //     }

// //     //child added listener for firebase
// //     on = callback => 
// //         firebase.database().ref("alertsUnderYou/"+this.props.phonenumberuser+"/").limitToLast(1).on('child_added', snapshot => {callback(
// //             this.setState({isLoading: true})
// //         )
// //             console.log("Hey i am")
// //     }
// //     );

// //     // youralert = () => {
// //     //     var alertyour = new Promise (( resolve,reject) => {
// //     //         firebase.database().ref("chatroom/").on("value", snapshot => {
// //     //             // console.log("zhgxcjhgaskusdbqwkhdqwoidhq",Object.keys(snapshot.val()))
// //     //             var arr= []
// //     //             if(snapshot.val()){
// //     //             arr = Object.keys(snapshot.val())
// //     //             for(var i=0;i<arr.length;i++)
// //     //             {
// //     //                 if(arr[i] == this.props.phonenumberuser){
// //     //                     resolve(true)
// //     //                 }
// //     //             }
// //     //             reject(false)}
// //     //         })
// //     //     })
// //     //     alertyour.then(val => {
// //     //         console.log(val)
// //     //         this.setState({
// //     //             your: val
// //     //         })
// //     //     })
// //     // }

// //     fetchfromDB= () =>{
// //         var fetchMessage = new Promise((resolve, reject) => {
// //             var fetchedAlert = []

// //             firebase.database().ref("ChatsUnderYou/Anonymous/"+this.props.phonenumberuser+"/").on("value", snapshot => {
// //                //key = number,timestamp
// //                 snapshot.forEach((data) => {
// //                     fetchedAlert.push(data.val())
// //                 });
// //             })

// //             firebase.database().ref("ChatsUnderYou/vendors/"+this.props.phonenumberuser+"/").on("value", snapshot => {
// //                 snapshot.forEach((data) => {
// //                     fetchedAlert.push(data.val())
// //                 });

// //             })
// //             firebase.database().ref("ChatsUnderYou/alerts/"+this.props.phonenumberuser+"/").on("value", snapshot => {
// //                 snapshot.forEach((data) => {
// //                     fetchedAlert.push(data.val())
// //                 });
// //                 // if (fetchedAlert)
// //                 //     resolve(fetchedAlert)
// //                 // else
// //                 //     reject("no data")
// //             })
// //             if (fetchedAlert)
// //                     resolve(fetchedAlert)
// //                 else
// //                     reject("no data")
// //         })
// //         fetchMessage.then((s) => {
// //             console.log("fetchedalert= ",s)
// //             s.sort(function(a, b){
// //                 return -(a.timestamp-b.timestamp)
// //             })
// //             this.setState({
// //                 isLoading: true,
// //                 // display:false,
// //                 chats:s
// //             })
// //             console.log(this.state.isLoading)
// //         }).catch((err) => {

// //         })
// //     }
// //     componentDidMount() {
// //             this.interval=setInterval(() => {
// //             console.log("refreshing");
            
// //             this.setState({ time: Date.now(),
// //                 isLoading: false,
// //         })

            
// //         },10000);

// //         var fetchMessage = new Promise((resolve, reject) => {
// //             var fetchedAno = []
// //             firebase.database().ref("ChatsUnderYou/Anonymous/"+this.props.phonenumberuser+"/").on("value", snapshot => {
// //                 snapshot.forEach((data) => {
// //                     fetchedAno.push(data.val())
// //                 });
// //                 if (fetchedAno)
// //                     resolve(fetchedAno)
// //                 else
// //                     reject("no data")
// //             })
// //         })
// //         fetchMessage.then(fetchedAno => {
// //             console.log("fetchedAno",fetchedAno)
// //             var fetchMessage1 = new Promise((resolve,reject) => {
// //                 var fetchedven = []
// //                 var fetchedAnoven = []
// //                 firebase.database().ref("ChatsUnderYou/vendors/"+this.props.phonenumberuser+"/").on("value", snapshot => {
// //                     snapshot.forEach((data) => {
// //                         fetchedven.push(data.val())
// //                     });
// //                     fetchedAnoven.push(...fetchedAno,...fetchedven)
// //                     if (fetchedAnoven)
// //                         resolve(fetchedAnoven)
// //                     else
// //                         reject("no data")
// //                 })
// //             })
// //             fetchMessage1.then(fetchedAnoven => {
// //                 console.log("fetchedAnoven",fetchedAnoven)
// //                 var fetchMessage2 = new Promise((resolve,reject) => {
// //                     var fetchedAlert = []
// //                 var fetchedAll = []
// //                 firebase.database().ref("ChatsUnderYou/alerts/"+this.props.phonenumberuser+"/").on("value", snapshot => {
// //                     snapshot.forEach((data) => {
// //                         fetchedAlert.push(data.val())
// //                     });
// //                     fetchedAll.push(...fetchedAnoven,...fetchedAlert)
// //                     if (fetchedAll)
// //                         resolve(fetchedAll)
// //                     else
// //                         reject("no data")
// //                 })
// //                 })
// //                 fetchMessage2.then(fetchedAll => {
// //                     console.log("fetchedAll",fetchedAll)
// //                     fetchedAll.sort(function(a, b){
// //                         return -(a.timestamp-b.timestamp)
// //                     })
// //                     console.log("fetchedAllSort",fetchedAll)

// //             this.setState({
// //                 display:true,
// //                 chats:fetchedAll
// //             })
// //                 })
// //             })
// //         })
// //     }
// //         componentWillUnmount() {
// //         clearInterval(this.interval);
// //       }

// //         componentMount = () => {
// //             // if(this.props.navigation.state.params.phonenumber!=null){
// //             // console.log(this.props.navigation.state.params.name)
// //             // console.log(this.props.navigation.state.params.phonenumber)
// //             // console.log(this.props.navigation.state.params.description)
// //             console.log("chats= ",this.state.chats);
            
// //             var phonenumber = null
// //               const { navigation } = this.props;
// //               phonenumber = navigation.getParam('phonenumber',null);
// //             // phonenumber = this.props.navigation.state.params.phonenumber
// //                 console.log(phonenumber,this.state.chats)
// //             // var appenddata = new Promise((resolve, reject) => {
// //                 if(phonenumber != null){
// //                 var c = 0
// //                 if(this.state.chats.length!=0){
// //                     console.log(this.state.chats[0].phonenumber)
// //                 this.state.chats.forEach(chat => {
// //                     if([chat.phonenumber,chat.alerttimes == [this.props.navigation.state.params.phonenumber,this.props.navigation.state.params.timestamp])
// //                     {
// //                         console.log("Im in")
// //                         c++;
// //                     }
// //                 })}
// //                 console.log(c)
// //                 if(c==0){
// //                     console.log(this.props.navigation.state.params.category)
// //                     if(this.props.navigation.state.params.category == "Emotional Support"){
// //                         firebase.database().ref("ChatsUnderYou/Anonymous/"+this.props.phonenumberuser+"/"+this.props.navigation.state.params.phonenumber+","+this.props.navigation.state.params.timestamp).set({
// //                             name: this.props.navigation.state.params.name,
// //                             description: this.props.navigation.state.params.description,
// //                             phonenumber:this.props.navigation.state.params.phonenumber,
// //                             category: this.props.navigation.state.params.category,
// //                             counter: 0,
// //                             timestamp: 0,
// //                         }).then(() => {
// //                             firebase.database().ref("ChatsUnderYou/Anonymous/"+this.props.navigation.state.params.phonenumber+"/"+this.props.phonenumberuser+","+this.props.navigation.state.params.timestamp).set({
// //                                 name: this.props.navigation.state.params.name,
// //                                 description: this.props.navigation.state.params.description,
// //                                 phonenumber:this.props.phonenumberuser,
// //                                 category: this.props.navigation.state.params.category,
// //                                 counter: 0,
// //                                 timestamp: 0,
// //                             }).then(() => {
// //                                 this.setState({
// //                                     // callFetch:true
// //                                     isLoading: false
// //                                 })
// //                             })
// //                             })}
// //                             else if(this.props.navigation.state.params.category == "shops") {
// //                                 firebase.database().ref("ChatsUnderYou/vendors/"+this.props.phonenumberuser+"/"+this.props.navigation.state.params.phonenumber+","+this.props.navigation.state.params.timestamp).set({
// //                                     name: this.props.navigation.state.params.name,
// //                                     description: this.props.navigation.state.params.description,
// //                                     phonenumber:this.props.navigation.state.params.phonenumber,
// //                                     category: this.props.navigation.state.params.category,
// //                                     counter: 0,
// //                                     timestamp: 0,
// //                                 }).then(() => {
// //                                     firebase.database().ref("ChatsUnderYou/vendors/"+this.props.navigation.state.params.phonenumber+"/"+this.props.phonenumberuser+","+this.props.navigation.state.params.timestamp).set({
// //                                         name: this.props.navigation.state.params.name,
// //                                         description: this.props.navigation.state.params.description,
// //                                         phonenumber:this.props.phonenumberuser,
// //                                         category: this.props.navigation.state.params.category,
// //                                         counter: 0,
// //                                         timestamp: 0,
        
// //                                     }).then(() => {
// //                                         this.setState({
// //                                             // callFetch:true
// //                                             isLoading: false
// //                                         })
// //                                     })
// //                                     })
// //                             }
// //                     else {
// //                         firebase.database().ref("ChatsUnderYou/alerts/"+this.props.phonenumberuser+"/"+this.props.navigation.state.params.phonenumber+","+this.props.navigation.state.params.timestamp).set({
// //                             name: this.props.navigation.state.params.name,
// //                             description: this.props.navigation.state.params.description,
// //                             phonenumber:this.props.navigation.state.params.phonenumber,
// //                             category: this.props.navigation.state.params.category,
// //                             counter: 0,
// //                             timestamp: 0,
// //                         }).then(() => {
// //                                 this.setState({
// //                                     // callFetch:true
// //                                     isLoading: false
// //                                 })
// //                             })
// //                     }
// //                 }}
// //                 }
// //     SearchFilterFunction(text) {
// //         //passing the inserted text in textinput
// //         console.log(text)
// //         this.newData = this.arrayholder.filter(function (item) {
// //             //applying filter for the inserted text in search bar
// //             const itemData = item.text ? item.text.toUpperCase() : ''.toUpperCase();
// //             const textData = text.toUpperCase();
// //             return itemData.indexOf(textData) > -1;
// //         });
// //         this.setState({
// //             //setting the filtered newData on datasource
// //             //After setting the data it will automatically re-render the view
// //             dataSource: this.newData,
// //             text: text,
// //         });
// //         console.log(this.newData)
// //     }
// //     ListViewItemSeparator = () => {
// //         //Item sparator view
// //         return (
// //             <View
// //                 style={{
// //                     height: hp('1%'),
// //                     // width: '75%',
// //                     borderBottomWidth: 0.25,
// //                     // opacity:0.6,
// //                     borderBottomColor: "grey",
// //                     // marginLeft: wp('16%')
// //                     // backgroundColor: '#080808',
// //                     // position: "absolute"
// //                     // borderLeftWidth:10
// //                 }}
// //             />
// //         );
// //     };

// //     renderForSearchActive = () => {
// //         console.log("text= ", this.state.text, "newData= ", this.newData)

// //         if (this.state.text && this.newData.length != 0) {
// //             console.log("if");
// //             return (
// //                 <View style={{ flex: 1, backgroundColor: "#fff" }}>
// //                     <View style={{ flex: 0.12 }}>
// //                         <TextInput
// //                             style={styles.textInputStyle}
// //                             onChangeText={text => this.SearchFilterFunction(text)}
// //                             value={this.state.text}
// //                             underlineColorAndroid="transparent"
// //                             placeholder="Search message"
// //                         />
// //                         {/* initially dataSource is kept empty and then as search element are found they are added in it.  */}

// //                     </View>
// //                     <View style={{ flex: 0.38 }}>
// //                         <View style={{}}>
// //                             <FlatList
// //                                 data={this.state.dataSource}
// //                                 ItemSeparatorComponent={this.ListViewItemSeparator}
// //                                 renderItem={({ item }) => (
// //                                     <TouchableOpacity>
// //                                         <View style={{ flexDirection: "column" }}>
// //                                             <Text numberOfLines={1} style={{fontSize:18,paddingLeft:wp('4%'),marginTop:wp('2%')}}>{item.user.name}</Text>
// //                                             <Text numberOfLines={3} ellipsizeMode="middle" style={styles.textStyle}>{item.text}</Text>
// //                                         </View>
// //                                     </TouchableOpacity>

// //                                 )}
// //                                 enableEmptySections={true}
// //                                 style={{ marginTop: 10 }}
// //                                 keyExtractor={(item, index) => index}
// //                             />
// //                         </View>

// //                     </View>
// //                     <View style={{ flex: 0.5 }}>
// //                         <View style={{ width: wp('100%'), marginLeft: wp('2%') }}>
// //                             <FlatList
// //                                 data={this.state.chats}
// //                                 ItemSeparatorComponent={this.ListViewItemSeparator}
// //                                 renderItem={({ item }) => (
// //                                     <TouchableOpacity onPress={()=>{
// //                                         console.log(item.phonenumber,item.name,item.description)
// //                                         this.props.navigation.navigate('ChatScreen',{phonenumber:item.phonenumber})}}>
// //                                             {console.log(this.props.navigation.state.params.putcolor)}
// //                                             {/* yaha pr parameter catch krra hai agr kuch nai hua toh by default false lelega */}
// //                                             {this.getcolor = this.props.navigation.getParam('putcolor', false)}
// //                                             {this.getcolor ? 
// //                                         <View style={styles.renderChatsName}>
// //                                             <Image source={require("../assets/chatIcon.png")} />
// //                                             <Text style={styles.textStyle}>{item.name}</Text>
// //                                         </View> : 
// //                                         <View style={styles.renderChatsName1}>
// //                                             <Image source={require("../assets/chatIcon.png")} />
// //                                             <Text style={styles.textStyle}>{item.name}</Text>
// //                                         </View>
// //                                         }
// //                                         {/* <View style={styles.renderChatsName}>
// //                                             <Image source={require("../assets/chatIcon.png")} />
// //                                             <Text style={styles.textStyle}>{item.name}</Text>
// //                                         </View> */}
// //                                     </TouchableOpacity>
// //                                 )}
// //                                 enableEmptySections={true}
// //                                 style={{ marginTop: 10 }}
// //                                 keyExtractor={(item, index) => index}
// //                             />
// //                         </View>
// //                     </View>
// //                 </View>
// //             )
// //         }
// //         else {
// //             console.log("else");
// //             return (
// //                 <View style={{ flex: 1, backgroundColor: "#fff" }}>
// //                     <View style={{ flex: 0.12 }}>
// //                         <TextInput
// //                             style={styles.textInputStyle}
// //                             onChangeText={text => this.SearchFilterFunction(text)}
// //                             value={this.state.text}
// //                             underlineColorAndroid="transparent"
// //                             placeholder="Search message"
// //                         />
// //                         {/* initially dataSource is kept empty and then as search element are found they are added in it.  */}

// //                     </View>
// //                     <View style={{ flex: 0.88 }}>
// //                         <View style={{ height: hp('80%'), width: wp('100%'), marginLeft: wp('2%') }}>
// //                             <FlatList
// //                                 data={this.state.chats}
// //                                 ItemSeparatorComponent={this.ListViewItemSeparator}
// //                                 renderItem={({ item }) => (
// //                                     <TouchableOpacity onPress={()=>{
// //                                         console.log(item.phonenumber,item.name,item.description)
// //                                         this.props.navigation.navigate('ChatScreen',{phonenumber:item.phonenumber})}}>
// //                                             {this.getcolor = this.props.navigation.getParam('putcolor', false)}
// //                                             {this.getcolor ? 
// //                                         <View style={styles.renderChatsName}>
// //                                             <Image source={require("../assets/chatIcon.png")} />
// //                                             <Text style={styles.textStyle}>{item.name}</Text>
// //                                         </View> : 
// //                                         <View style={styles.renderChatsName1}>
// //                                             <Image source={require("../assets/chatIcon.png")} />
// //                                             <Text style={styles.textStyle}>{item.name}</Text>
// //                                         </View>
// //                                         }
// //                                         {/* <View style={styles.renderChatsName}>
// //                                             <Image source={require("../assets/chatIcon.png")} />
// //                                             <Text style={styles.textStyle}>{item.name}</Text>
// //                                         </View> */}
// //                                     </TouchableOpacity>
// //                                 )}
// //                                 enableEmptySections={true}
// //                                 style={{ marginTop: 10 }}
// //                                 keyExtractor={(item, index) => index}
// //                             />
// //                         </View>
// //                     </View>

// //                 </View>
// //             )
// //         }

// //     }
// //     render() {
// //         if(this.state.display == true){
// //         {this.componentMount()}
// //         if(this.state.isLoading == false){
// //             {this.fetchfromDB()
// //             // this.youralert()
// //             }
// //         return null}
// //         else{
// //         return (
// //             <View style={{ flex: 1}}>
// //                 <View style={styles.upperContainer}>
// //                     <View style={{flex:1,flexDirection:'row',marginLeft:wp("4%")}}>
// //                     <View style={{flex:0.6}}>
// //                     <Text style={{marginLeft:wp('6%'),fontSize:24,color:"white",fontWeight:"bold"}}>
// //                         Message
// //                     </Text>
// //                     </View>
// //                     </View>
// //                 </View>
// //                 <View style={styles.lowerContainer}>
// //                     {this.state.text ?
// //                         this.renderForSearchActive()

// //                         :

// //                         <View style={{ flex: 1, backgroundColor: "#fff" }}>
// //                             <View style={{ flex: 0.12 }}>
// //                                 <TextInput
// //                                     style={styles.textInputStyle}
// //                                     onChangeText={text => this.SearchFilterFunction(text)}
// //                                     value={this.state.text}
// //                                     underlineColorAndroid="transparent"
// //                                     placeholder="Search message"
// //                                 />
// //                                 {/* initially dataSource is kept empty and then as search element are found they are added in it.  */}

// //                             </View>
// //                             <View style={{ flex: 0.88 }}>
// //                                 <View style={{ width: wp('100%'), marginLeft: wp('2%') }}>
// //                                     {/* {this.state.your ? <View>
// //                                     <TouchableOpacity onPress={()=>{
// //                                                     // console.log(item.phonenumber,item.name,item.description)
// //                                                     this.props.navigation.navigate('ChatScreen',{phonenumber:this.props.phonenumberuser})}} style={{ borderBottomWidth: 0.25,
// //                                                         // opacity:0.6,
// //                                                         paddingBottom: hp("1%"),
// //                                                         borderBottomColor: "grey",}}>
// //                                                     <View style={styles.renderChatsName1}>
// //                                                         <Image source={require("../assets/chatIcon.png")} />
// //                                                         <Text style={styles.textStyle}>Myself</Text>
// //                                                     </View>
// //                                                 </TouchableOpacity>
// //                                         </View> : <View/>} */}
// //                                     <ScrollView>
// //                                         <FlatList
// //                                             data={this.state.chats}
// //                                             ItemSeparatorComponent={this.ListViewItemSeparator}
// //                                             renderItem={({ item }) => (
// //                                                 <View>
// //                                                 {item.category == "Emotional Support" ?  <TouchableOpacity onPress={()=>{
// //                                                     console.log(item.phonenumber,item.name,item.description)
// //                                                     if(this.props.phonenumberuser){
// //                                                     this.props.navigation.navigate('AnonymousChat',{phonenumber:item.phonenumber,c:0})}
// //                                                 else{
// //                                                     alert("Please fill details first!")
// //                                                 }
// //                                                 }
                                                    
// //                                                     }>
                                            
// //                                                     <View style={styles.renderChatsName1}>
// //                                                         <Image source={require("../assets/chatIcon.png")} />
// //                                                         <Text style={styles.textStyle}>Anonymous</Text>
// //                                                         {/* <Text>{item.counter}</Text> */}
// //                                                         {item.counter > 0 ? <Badge
// //                                                             value = {"+" + item.counter}
// //                                                             containerStyle={{ position: 'absolute', right: 20 }}
// //                                                         />: <View/>}
// //                                                         {/* <Badge
// //                                                             value="99+"
// //                                                             containerStyle={{ position: 'absolute', right: 20 }}
// //                                                         /> */}
// //                                                     </View> 
// //                                                     {/* <View style={styles.renderChatsName}>
// //                                                         <Image source={require("../assets/chatIcon.png")} />
// //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// //                                                     </View> */}
// //                                                 </TouchableOpacity> :  <View></View>}
// //                                                 {item.category == "shops" ?  <TouchableOpacity onPress={()=>{
// //                                                     console.log(item.phonenumber,item.name,item.description)
// //                                                     if(this.props.phonenumberuser){
// //                                                     this.props.navigation.navigate('vendorChat',{phonenumber:item.phonenumber})}
// //                                                     else{
// //                                                         alert("Please fill details first!")
// //                                                     }
// //                                                 }}>
                                            
// //                                                     <View style={styles.renderChatsName}>
// //                                                         <Image source={require("../assets/chatIcon.png")} />
// //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// //                                                         {item.counter > 0 ? <Badge
// //                                                             value = {"+" + item.counter}
// //                                                             containerStyle={{ position: 'absolute', right: 20 }}
// //                                                         />: <View/>}
// //                                                     </View> 
// //                                                     {/* <View style={styles.renderChatsName}>
// //                                                         <Image source={require("../assets/chatIcon.png")} />
// //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// //                                                     </View> */}
// //                                                 </TouchableOpacity> :  <View></View>}
// //                                                 {item.category == "food" ?  <TouchableOpacity onPress={()=>{
// //                                                     console.log(item.phonenumber,item.name,item.description)
// //                                                     if(this.props.phonenumberuser){
// //                                                     this.props.navigation.navigate('ChatScreen',{phonenumber:item.phonenumber})}
// //                                                     else{
// //                                                         alert("Please fill details first!")
// //                                                     }
// //                                                 }}>
                                            
// //                                                     <View style={styles.renderChatsName1}>
// //                                                         <Image source={require("../assets/chatIcon.png")} />
// //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// //                                                     </View> 
// //                                                     {/* <View style={styles.renderChatsName}>
// //                                                         <Image source={require("../assets/chatIcon.png")} />
// //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// //                                                     </View> */}
// //                                                 </TouchableOpacity> :  <View></View>}
// //                                                 {item.category == "other" ?  <TouchableOpacity onPress={()=>{
// //                                                     console.log(item.phonenumber,item.name,item.description)
// //                                                     if(this.props.phonenumberuser){
// //                                                     this.props.navigation.navigate('ChatScreen',{phonenumber:item.phonenumber})}
// //                                                     else{
// //                                                         alert("Please fill details first!")
// //                                                     }
// //                                                 }}>
                                            
// //                                                     <View style={styles.renderChatsName1}>
// //                                                         <Image source={require("../assets/chatIcon.png")} />
// //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// //                                                     </View> 
// //                                                     {/* <View style={styles.renderChatsName}>
// //                                                         <Image source={require("../assets/chatIcon.png")} />
// //                                                         <Text style={styles.textStyle}>{item.name}</Text>
// //                                                     </View> */}
// //                                                 </TouchableOpacity> :  <View></View>}
                                               
// //                                                 </View>
// //                                             )}
// //                                             enableEmptySections={true}
// //                                             style={{ marginTop: 10 }}
// //                                             keyExtractor={(item, index) => index}
// //                                         />
// //                                     </ScrollView>
// //                                 </View>
// //                             </View>

// //                         </View>
// //                     }


// //                 </View>

// //             </View>
// //         );
// //     }}else{
// //         return null;
// //     }
// // }
// // }
// // const mapStateToProps = (state) =>{
// //     console.log(state)
// //     return {
// //       upload_status : state.textUpload,
// //       nameuser: state.nameuser,
// //       phonenumberuser: state.phonenumberuser, 
// //     }
// //   }  
  
// //   export default connect(mapStateToProps)(ChatList)
// // const styles = StyleSheet.create({
// //     upperContainer: {
// //         flex: 0.1,
// //         backgroundColor: "#0290ea",
// //         alignItems:"center",
// //         flexDirection: 'row',
// //     },
// //     lowerContainer: {
// //         flex: 0.9,
// //         backgroundColor: "blue"
// //     },

// //     textStyle: {
// //         // margin: wp('2%'),
// //         fontSize: 16,
// //         paddingLeft:wp('6%'),
      
// //         // backgroundColor:"green"
// //     },
// //     textInputStyle: {
// //         height: 40,
// //         borderWidth: 1,
// //         paddingLeft: 10,
// //         borderColor: "#FFF",
// //         backgroundColor: '#FFFFFF',
// //         margin: wp('4%'),
// //         borderRadius: wp('5%'),
// //         elevation: 4
// //     },
// //     renderChatsName:{
// //         flexDirection: "row",
// //         borderLeftWidth: wp('1%'), 
// //         borderLeftColor: 'yellow',
// //         padding: wp('2%'), 
// //         marginTop: hp('1%'),
// //         alignItems:"center" 
// //     },
// //     renderChatsName1:{
// //         flexDirection: "row",
// //         borderLeftWidth: wp('1%'), 
// //         borderLeftColor: 'red',
// //         padding: wp('2%'), 
// //         marginTop: hp('1%'),
// //         alignItems:"center" 
// //     },
// // });


// import React, { Component } from 'react';
// import {
//     Text,
//     StyleSheet,
//     View,
//     FlatList,
//     TextInput,
//     ActivityIndicator,
//     Alert,
//     Image,
//     TouchableOpacity, ScrollView
// } from 'react-native';
// import { Badge } from 'react-native-elements';
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
// import * as firebase from 'firebase'
// import { connect } from 'react-redux';
// import { resolve } from 'url';
// // import { ScrollView } from 'react-native-gesture-handler';
// class ChatList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoading: false,
//             text: '',
//             searchActive: false,
//             chats: null,
//             callFetch: false,
//             display: false,
//             your : false,
//         };
//         this.arrayholder = [];
//         this.newData = []
//         this.alertarr = null
//         this.getcolor=false
//         this.interval
      
//         // this.newData
//     }

//     //child added listener for firebase
//     on = callback => 
//         firebase.database().ref("alertsUnderYou/"+this.props.phonenumberuser+"/").limitToLast(1).on('child_added', snapshot => {callback(
//             this.setState({isLoading: true})
//         )
//             console.log("Hey i am")
//     }
//     );

//     // youralert = () => {
//     //     var alertyour = new Promise (( resolve,reject) => {
//     //         firebase.database().ref("chatroom/").on("value", snapshot => {
//     //             // console.log("zhgxcjhgaskusdbqwkhdqwoidhq",Object.keys(snapshot.val()))
//     //             var arr= []
//     //             if(snapshot.val()){
//     //             arr = Object.keys(snapshot.val())
//     //             for(var i=0;i<arr.length;i++)
//     //             {
//     //                 if(arr[i] == this.props.phonenumberuser){
//     //                     resolve(true)
//     //                 }
//     //             }
//     //             reject(false)}
//     //         })
//     //     })
//     //     alertyour.then(val => {
//     //         console.log(val)
//     //         this.setState({
//     //             your: val
//     //         })
//     //     })
//     // }

//     fetchfromDB= () =>{
//         var fetchMessage = new Promise((resolve, reject) => {
//             var fetchedAlert = []

//             firebase.database().ref("ChatsUnderYou/Anonymous/"+this.props.phonenumberuser+"/").on("value", snapshot => {
//                //key = number,timestamp
//                 snapshot.forEach((data) => {
//                     fetchedAlert.push(data.val())
//                 });
//             })

//             firebase.database().ref("ChatsUnderYou/vendors/"+this.props.phonenumberuser+"/").on("value", snapshot => {
//                 snapshot.forEach((data) => {
//                     fetchedAlert.push(data.val())
//                 });

//             })
//             firebase.database().ref("ChatsUnderYou/alerts/"+this.props.phonenumberuser+"/").on("value", snapshot => {
//                 snapshot.forEach((data) => {
//                     fetchedAlert.push(data.val())
//                 });
//                 // if (fetchedAlert)
//                 //     resolve(fetchedAlert)
//                 // else
//                 //     reject("no data")
//             })
//             if (fetchedAlert)
//                     resolve(fetchedAlert)
//                 else
//                     reject("no data")
//         })
//         fetchMessage.then((s) => {
//             console.log("fetchedalert= ",s)
//             s.sort(function(a, b){
//                 return -(a.timestamp-b.timestamp)
//             })
//             this.setState({
//                 isLoading: true,
//                 // display:false,
//                 chats:s
//             })
//             console.log(this.state.isLoading)
//         }).catch((err) => {

//         })
//     }
//     componentDidMount() {
//             this.interval=setInterval(() => {
//             console.log("refreshing");
            
//             this.setState({ time: Date.now(),
//                 isLoading: false,
//         })

            
//         },10000);

//         var fetchMessage = new Promise((resolve, reject) => {
//             var fetchedAno = []
//             firebase.database().ref("ChatsUnderYou/Anonymous/"+this.props.phonenumberuser+"/").on("value", snapshot => {
//                 snapshot.forEach((data) => {
//                     fetchedAno.push(data.val())
//                 });
//                 if (fetchedAno)
//                     resolve(fetchedAno)
//                 else
//                     reject("no data")
//             })
//         })
//         fetchMessage.then(fetchedAno => {
//             console.log("fetchedAno",fetchedAno)
//             var fetchMessage1 = new Promise((resolve,reject) => {
//                 var fetchedven = []
//                 var fetchedAnoven = []
//                 firebase.database().ref("ChatsUnderYou/vendors/"+this.props.phonenumberuser+"/").on("value", snapshot => {
//                     snapshot.forEach((data) => {
//                         fetchedven.push(data.val())
//                     });
//                     fetchedAnoven.push(...fetchedAno,...fetchedven)
//                     if (fetchedAnoven)
//                         resolve(fetchedAnoven)
//                     else
//                         reject("no data")
//                 })
//             })
//             fetchMessage1.then(fetchedAnoven => {
//                 console.log("fetchedAnoven",fetchedAnoven)
//                 var fetchMessage2 = new Promise((resolve,reject) => {
//                     var fetchedAlert = []
//                 var fetchedAll = []
//                 firebase.database().ref("ChatsUnderYou/alerts/"+this.props.phonenumberuser+"/").on("value", snapshot => {
//                     snapshot.forEach((data) => {
//                         fetchedAlert.push(data.val())
//                     });
//                     fetchedAll.push(...fetchedAnoven,...fetchedAlert)
//                     if (fetchedAll)
//                         resolve(fetchedAll)
//                     else
//                         reject("no data")
//                 })
//                 })
//                 fetchMessage2.then(fetchedAll => {
//                     console.log("fetchedAll",fetchedAll)
//                     fetchedAll.sort(function(a, b){
//                         return -(a.timestamp-b.timestamp)
//                     })
//                     console.log("fetchedAllSort",fetchedAll)

//             this.setState({
//                 display:true,
//                 chats:fetchedAll
//             })
//                 })
//             })
//         })
//     }
//         componentWillUnmount() {
//         clearInterval(this.interval);
//       }

//         componentMount = () => {
//             // if(this.props.navigation.state.params.phonenumber!=null){
//             // console.log(this.props.navigation.state.params.name)
//             // console.log(this.props.navigation.state.params.phonenumber)
//             // console.log(this.props.navigation.state.params.description)
//             var phonenumber = null
//               const { navigation } = this.props;
//               phonenumber = navigation.getParam('phonenumber',null);
//             // phonenumber = this.props.navigation.state.params.phonenumber
//                 console.log(phonenumber,this.state.chats)
//             // var appenddata = new Promise((resolve, reject) => {
//                 if(phonenumber != null){
//                 var c = 0
//                 if(this.state.chats.length!=0){
//                     console.log(this.state.chats[0].phonenumber)
//                 this.state.chats.forEach(chat => {
//                     if(chat.alerttimestamp == this.props.navigation.state.params.timestamp)
//                     {
//                         console.log("Im in")
//                         c++;
//                     }
//                 })}
//                 console.log(c)
//                 if(c==0){
//                     console.log(this.props.navigation.state.params.category)
//                     if(this.props.navigation.state.params.category == "Emotional Support"){
//                         firebase.database().ref("ChatsUnderYou/Anonymous/"+this.props.phonenumberuser+"/"+this.props.navigation.state.params.phonenumber+","+this.props.navigation.state.params.timestamp).set({
//                             name: this.props.navigation.state.params.name,
//                             description: this.props.navigation.state.params.description,
//                             phonenumber:this.props.navigation.state.params.phonenumber,
//                             category: this.props.navigation.state.params.category,
//                             counter: 0,
//                             timestamp: 0,
//                             alerttimestamp: this.props.navigation.state.params.timestamp,
//                         }).then(() => {
//                             firebase.database().ref("ChatsUnderYou/Anonymous/"+this.props.navigation.state.params.phonenumber+"/"+this.props.phonenumberuser+","+this.props.navigation.state.params.timestamp).set({
//                                 name: this.props.navigation.state.params.name,
//                                 description: this.props.navigation.state.params.description,
//                                 phonenumber:this.props.phonenumberuser,
//                                 category: this.props.navigation.state.params.category,
//                                 counter: 0,
//                                 timestamp: 0,
//                                 alerttimestamp: this.props.navigation.state.params.timestamp,
//                             }).then(() => {
//                                 this.setState({
//                                     // callFetch:true
//                                     isLoading: false
//                                 })
//                             })
//                             })}
//                             else if(this.props.navigation.state.params.category == "shops") {
//                                 firebase.database().ref("ChatsUnderYou/vendors/"+this.props.phonenumberuser+"/"+this.props.navigation.state.params.phonenumber+","+this.props.navigation.state.params.timestamp).set({
//                                     name: this.props.navigation.state.params.name,
//                                     description: this.props.navigation.state.params.description,
//                                     phonenumber:this.props.navigation.state.params.phonenumber,
//                                     category: this.props.navigation.state.params.category,
//                                     counter: 0,
//                                     timestamp: 0,
//                                     alerttimestamp: this.props.navigation.state.params.timestamp,
//                                 }).then(() => {
//                                     firebase.database().ref("ChatsUnderYou/vendors/"+this.props.navigation.state.params.phonenumber+"/"+this.props.phonenumberuser+","+this.props.navigation.state.params.timestamp).set({
//                                         name: this.props.navigation.state.params.name,
//                                         description: this.props.navigation.state.params.description,
//                                         phonenumber:this.props.phonenumberuser,
//                                         category: this.props.navigation.state.params.category,
//                                         counter: 0,
//                                         timestamp: 0,
//                                         alerttimestamp: this.props.navigation.state.params.timestamp,
//                                     }).then(() => {
//                                         this.setState({
//                                             // callFetch:true
//                                             isLoading: false
//                                         })
//                                     })
//                                     })
//                             }
//                     else {
//                         firebase.database().ref("ChatsUnderYou/alerts/"+this.props.phonenumberuser+"/"+this.props.navigation.state.params.phonenumber+","+this.props.navigation.state.params.timestamp).set({
//                             name: this.props.navigation.state.params.name,
//                             description: this.props.navigation.state.params.description,
//                             phonenumber:this.props.navigation.state.params.phonenumber,
//                             category: this.props.navigation.state.params.category,
//                             counter: 0,
//                             timestamp: 0,
//                             alerttimestamp: this.props.navigation.state.params.timestamp,
//                         }).then(() => {
//                                 this.setState({
//                                     // callFetch:true
//                                     isLoading: false
//                                 })
//                             })
//                     }
//                 }}
//                 }
//     SearchFilterFunction(text) {
//         //passing the inserted text in textinput
//         console.log(text)
//         this.newData = this.arrayholder.filter(function (item) {
//             //applying filter for the inserted text in search bar
//             const itemData = item.text ? item.text.toUpperCase() : ''.toUpperCase();
//             const textData = text.toUpperCase();
//             return itemData.indexOf(textData) > -1;
//         });
//         this.setState({
//             //setting the filtered newData on datasource
//             //After setting the data it will automatically re-render the view
//             dataSource: this.newData,
//             text: text,
//         });
//         console.log(this.newData)
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

//     renderForSearchActive = () => {
//         console.log("text= ", this.state.text, "newData= ", this.newData)

//         if (this.state.text && this.newData.length != 0) {
//             console.log("if");
//             return (
//                 <View style={{ flex: 1, backgroundColor: "#fff" }}>
//                     <View style={{ flex: 0.12 }}>
//                         <TextInput
//                             style={styles.textInputStyle}
//                             onChangeText={text => this.SearchFilterFunction(text)}
//                             value={this.state.text}
//                             underlineColorAndroid="transparent"
//                             placeholder="Search message"
//                         />
//                         {/* initially dataSource is kept empty and then as search element are found they are added in it.  */}

//                     </View>
//                     <View style={{ flex: 0.38 }}>
//                         <View style={{}}>
//                             <FlatList
//                                 data={this.state.dataSource}
//                                 ItemSeparatorComponent={this.ListViewItemSeparator}
//                                 renderItem={({ item }) => (
//                                     <TouchableOpacity>
//                                         <View style={{ flexDirection: "column" }}>
//                                             <Text numberOfLines={1} style={{fontSize:18,paddingLeft:wp('4%'),marginTop:wp('2%')}}>{item.user.name}</Text>
//                                             <Text numberOfLines={3} ellipsizeMode="middle" style={styles.textStyle}>{item.text}</Text>
//                                         </View>
//                                     </TouchableOpacity>

//                                 )}
//                                 enableEmptySections={true}
//                                 style={{ marginTop: 10 }}
//                                 keyExtractor={(item, index) => index}
//                             />
//                         </View>

//                     </View>
//                     <View style={{ flex: 0.5 }}>
//                         <View style={{ width: wp('100%'), marginLeft: wp('2%') }}>
//                             <FlatList
//                                 data={this.state.chats}
//                                 ItemSeparatorComponent={this.ListViewItemSeparator}
//                                 renderItem={({ item }) => (
//                                     <TouchableOpacity onPress={()=>{
//                                         console.log(item.phonenumber,item.name,item.description)
//                                         this.props.navigation.navigate('ChatScreen',{phonenumber:item.phonenumber})}}>
//                                             {console.log(this.props.navigation.state.params.putcolor)}
//                                             {/* yaha pr parameter catch krra hai agr kuch nai hua toh by default false lelega */}
//                                             {this.getcolor = this.props.navigation.getParam('putcolor', false)}
//                                             {this.getcolor ? 
//                                         <View style={styles.renderChatsName}>
//                                             <Image source={require("../assets/chatIcon.png")} />
//                                             <Text style={styles.textStyle}>{item.name}</Text>
//                                         </View> : 
//                                         <View style={styles.renderChatsName1}>
//                                             <Image source={require("../assets/chatIcon.png")} />
//                                             <Text style={styles.textStyle}>{item.name}</Text>
//                                         </View>
//                                         }
//                                         {/* <View style={styles.renderChatsName}>
//                                             <Image source={require("../assets/chatIcon.png")} />
//                                             <Text style={styles.textStyle}>{item.name}</Text>
//                                         </View> */}
//                                     </TouchableOpacity>
//                                 )}
//                                 enableEmptySections={true}
//                                 style={{ marginTop: 10 }}
//                                 keyExtractor={(item, index) => index}
//                             />
//                         </View>
//                     </View>
//                 </View>
//             )
//         }
//         else {
//             console.log("else");
//             return (
//                 <View style={{ flex: 1, backgroundColor: "#fff" }}>
//                     <View style={{ flex: 0.12 }}>
//                         <TextInput
//                             style={styles.textInputStyle}
//                             onChangeText={text => this.SearchFilterFunction(text)}
//                             value={this.state.text}
//                             underlineColorAndroid="transparent"
//                             placeholder="Search message"
//                         />
//                         {/* initially dataSource is kept empty and then as search element are found they are added in it.  */}

//                     </View>
//                     <View style={{ flex: 0.88 }}>
//                         <View style={{ height: hp('80%'), width: wp('100%'), marginLeft: wp('2%') }}>
//                             <FlatList
//                                 data={this.state.chats}
//                                 ItemSeparatorComponent={this.ListViewItemSeparator}
//                                 renderItem={({ item }) => (
//                                     <TouchableOpacity onPress={()=>{
//                                         console.log(item.phonenumber,item.name,item.description)
//                                         this.props.navigation.navigate('ChatScreen',{phonenumber:item.phonenumber})}}>
//                                             {this.getcolor = this.props.navigation.getParam('putcolor', false)}
//                                             {this.getcolor ? 
//                                         <View style={styles.renderChatsName}>
//                                             <Image source={require("../assets/chatIcon.png")} />
//                                             <Text style={styles.textStyle}>{item.name}</Text>
//                                         </View> : 
//                                         <View style={styles.renderChatsName1}>
//                                             <Image source={require("../assets/chatIcon.png")} />
//                                             <Text style={styles.textStyle}>{item.name}</Text>
//                                         </View>
//                                         }
//                                         {/* <View style={styles.renderChatsName}>
//                                             <Image source={require("../assets/chatIcon.png")} />
//                                             <Text style={styles.textStyle}>{item.name}</Text>
//                                         </View> */}
//                                     </TouchableOpacity>
//                                 )}
//                                 enableEmptySections={true}
//                                 style={{ marginTop: 10 }}
//                                 keyExtractor={(item, index) => index}
//                             />
//                         </View>
//                     </View>

//                 </View>
//             )
//         }

//     }
//     render() {
//         if(this.state.display == true){
//         {this.componentMount()}
//         if(this.state.isLoading == false){
//             {this.fetchfromDB()
//             // this.youralert()
//             }
//         return null}
//         else{
//         return (
//             <View style={{ flex: 1}}>
//                 <View style={styles.upperContainer}>
//                     <View style={{flex:1,flexDirection:'row',marginLeft:wp("4%")}}>
//                     <View style={{flex:0.6}}>
//                     <Text style={{marginLeft:wp('6%'),fontSize:24,color:"white",fontWeight:"bold"}}>
//                         Message
//                     </Text>
//                     </View>
//                     </View>
//                 </View>
//                 <View style={styles.lowerContainer}>
//                     {this.state.text ?
//                         this.renderForSearchActive()

//                         :

//                         <View style={{ flex: 1, backgroundColor: "#fff" }}>
//                             <View style={{ flex: 0.12 }}>
//                                 <TextInput
//                                     style={styles.textInputStyle}
//                                     onChangeText={text => this.SearchFilterFunction(text)}
//                                     value={this.state.text}
//                                     underlineColorAndroid="transparent"
//                                     placeholder="Search message"
//                                 />
//                                 {/* initially dataSource is kept empty and then as search element are found they are added in it.  */}

//                             </View>
//                             <View style={{ flex: 0.88 }}>
//                                 <View style={{ width: wp('100%'), marginLeft: wp('2%') }}>
//                                     {/* {this.state.your ? <View>
//                                     <TouchableOpacity onPress={()=>{
//                                                     // console.log(item.phonenumber,item.name,item.description)
//                                                     this.props.navigation.navigate('ChatScreen',{phonenumber:this.props.phonenumberuser})}} style={{ borderBottomWidth: 0.25,
//                                                         // opacity:0.6,
//                                                         paddingBottom: hp("1%"),
//                                                         borderBottomColor: "grey",}}>
//                                                     <View style={styles.renderChatsName1}>
//                                                         <Image source={require("../assets/chatIcon.png")} />
//                                                         <Text style={styles.textStyle}>Myself</Text>
//                                                     </View>
//                                                 </TouchableOpacity>
//                                         </View> : <View/>} */}
//                                     <ScrollView>
//                                         <FlatList
//                                             data={this.state.chats}
//                                             ItemSeparatorComponent={this.ListViewItemSeparator}
//                                             renderItem={({ item }) => (
//                                                 <View>
//                                                 {item.category == "Emotional Support" ?  <TouchableOpacity onPress={()=>{
//                                                     console.log(item.phonenumber,item.name,item.description)
//                                                     if(this.props.phonenumberuser){
//                                                         console.log("alerttimestamp= ",item.alerttimestamp);
                                                        
//                                                     this.props.navigation.navigate('AnonymousChat',{phonenumber:item.phonenumber,c:0,timestamp:item.alerttimestamp})}
//                                                 else{
//                                                     alert("Please fill details first!")
//                                                 }
//                                                 }
                                                    
//                                                     }>
                                            
//                                                     <View style={styles.renderChatsName1}>
//                                                         <Image source={require("../assets/chatIcon.png")} />
//                                                         <Text style={styles.textStyle}>Anonymous</Text>
//                                                         {/* <Text>{item.counter}</Text> */}
//                                                         {item.counter > 0 ? <Badge
//                                                             value = {"+" + item.counter}
//                                                             containerStyle={{ position: 'absolute', right: 20 }}
//                                                         />: <View/>}
//                                                         {/* <Badge
//                                                             value="99+"
//                                                             containerStyle={{ position: 'absolute', right: 20 }}
//                                                         /> */}
//                                                     </View> 
//                                                     {/* <View style={styles.renderChatsName}>
//                                                         <Image source={require("../assets/chatIcon.png")} />
//                                                         <Text style={styles.textStyle}>{item.name}</Text>
//                                                     </View> */}
//                                                 </TouchableOpacity> :  <View></View>}
//                                                 {item.category == "shops" ?  <TouchableOpacity onPress={()=>{
//                                                     console.log(item.phonenumber,item.name,item.description)
//                                                     if(this.props.phonenumberuser){
//                                                     this.props.navigation.navigate('vendorChat',{phonenumber:item.phonenumber})}
//                                                     else{
//                                                         alert("Please fill details first!")
//                                                     }
//                                                 }}>
                                            
//                                                     <View style={styles.renderChatsName}>
//                                                         <Image source={require("../assets/chatIcon.png")} />
//                                                         <Text style={styles.textStyle}>{item.name}</Text>
//                                                         {item.counter > 0 ? <Badge
//                                                             value = {"+" + item.counter}
//                                                             containerStyle={{ position: 'absolute', right: 20 }}
//                                                         />: <View/>}
//                                                     </View> 
//                                                     {/* <View style={styles.renderChatsName}>
//                                                         <Image source={require("../assets/chatIcon.png")} />
//                                                         <Text style={styles.textStyle}>{item.name}</Text>
//                                                     </View> */}
//                                                 </TouchableOpacity> :  <View></View>}
//                                                 {item.category == "food" ?  <TouchableOpacity onPress={()=>{
//                                                     console.log(item.phonenumber,item.name,item.description)
//                                                     if(this.props.phonenumberuser){
//                                                     this.props.navigation.navigate('ChatScreen',{phonenumber:item.phonenumber,timestamp:item.alerttimestamp})}
//                                                     else{
//                                                         alert("Please fill details first!")
//                                                     }
//                                                 }}>
                                            
//                                                     <View style={styles.renderChatsName1}>
//                                                         <Image source={require("../assets/chatIcon.png")} />
//                                                         <Text style={styles.textStyle}>{item.name}</Text>
//                                                     </View> 
//                                                     {/* <View style={styles.renderChatsName}>
//                                                         <Image source={require("../assets/chatIcon.png")} />
//                                                         <Text style={styles.textStyle}>{item.name}</Text>
//                                                     </View> */}
//                                                 </TouchableOpacity> :  <View></View>}
//                                                 {item.category == "other" ?  <TouchableOpacity onPress={()=>{
//                                                     console.log(item.phonenumber,item.name,item.description)
//                                                     if(this.props.phonenumberuser){
//                                                     this.props.navigation.navigate('ChatScreen',{phonenumber:item.phonenumber,timestamp:item.alerttimestamp})}
//                                                     else{
//                                                         alert("Please fill details first!")
//                                                     }
//                                                 }}>
                                            
//                                                     <View style={styles.renderChatsName1}>
//                                                         <Image source={require("../assets/chatIcon.png")} />
//                                                         <Text style={styles.textStyle}>{item.name}</Text>
//                                                     </View> 
//                                                     {/* <View style={styles.renderChatsName}>
//                                                         <Image source={require("../assets/chatIcon.png")} />
//                                                         <Text style={styles.textStyle}>{item.name}</Text>
//                                                     </View> */}
//                                                 </TouchableOpacity> :  <View></View>}
                                               
//                                                 </View>
//                                             )}
//                                             enableEmptySections={true}
//                                             style={{ marginTop: 10 }}
//                                             keyExtractor={(item, index) => index}
//                                         />
//                                     </ScrollView>
//                                 </View>
//                             </View>

//                         </View>
//                     }


//                 </View>

//             </View>
//         );
//     }}else{
//         return null;
//     }
// }
// }
// const mapStateToProps = (state) =>{
//     console.log(state)
//     return {
//       upload_status : state.textUpload,
//       nameuser: state.nameuser,
//       phonenumberuser: state.phonenumberuser, 
//     }
//   }  
  
//   export default connect(mapStateToProps)(ChatList)
// const styles = StyleSheet.create({
//     upperContainer: {
//         flex: 0.1,
//         backgroundColor: "#0290ea",
//         alignItems:"center",
//         flexDirection: 'row',
//     },
//     lowerContainer: {
//         flex: 0.9,
//         backgroundColor: "blue"
//     },

//     textStyle: {
//         // margin: wp('2%'),
//         fontSize: 16,
//         paddingLeft:wp('6%'),
      
//         // backgroundColor:"green"
//     },
//     textInputStyle: {
//         height: 40,
//         borderWidth: 1,
//         paddingLeft: 10,
//         borderColor: "#FFF",
//         backgroundColor: '#FFFFFF',
//         margin: wp('4%'),
//         borderRadius: wp('5%'),
//         elevation: 4
//     },
//     renderChatsName:{
//         flexDirection: "row",
//         borderLeftWidth: wp('1%'), 
//         borderLeftColor: 'yellow',
//         padding: wp('2%'), 
//         marginTop: hp('1%'),
//         alignItems:"center" 
//     },
//     renderChatsName1:{
//         flexDirection: "row",
//         borderLeftWidth: wp('1%'), 
//         borderLeftColor: 'red',
//         padding: wp('2%'), 
//         marginTop: hp('1%'),
//         alignItems:"center" 
//     },
// });



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
import { Badge } from 'react-native-elements';
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
            display: false,
            your : false,
        };
        this.arrayholder = [];
        this.newData = []
        this.alertarr = null
        this.getcolor=false
        this.interval
      
        // this.newData
    }

    //child added listener for firebase
    on = callback => 
        firebase.database().ref("alertsUnderYou/"+this.props.phonenumberuser+"/").limitToLast(1).on('child_added', snapshot => {callback(
            this.setState({isLoading: true})
        )
            console.log("Hey i am")
    }
    );

    // youralert = () => {
    //     var alertyour = new Promise (( resolve,reject) => {
    //         firebase.database().ref("chatroom/").on("value", snapshot => {
    //             // console.log("zhgxcjhgaskusdbqwkhdqwoidhq",Object.keys(snapshot.val()))
    //             var arr= []
    //             if(snapshot.val()){
    //             arr = Object.keys(snapshot.val())
    //             for(var i=0;i<arr.length;i++)
    //             {
    //                 if(arr[i] == this.props.phonenumberuser){
    //                     resolve(true)
    //                 }
    //             }
    //             reject(false)}
    //         })
    //     })
    //     alertyour.then(val => {
    //         console.log(val)
    //         this.setState({
    //             your: val
    //         })
    //     })
    // }

    fetchfromDB= () =>{
        var fetchMessage = new Promise((resolve, reject) => {
            var fetchedAlert = []

            firebase.database().ref("ChatsUnderYou/Anonymous/"+this.props.phonenumberuser+"/").on("value", snapshot => {
               //key = number,timestamp
                snapshot.forEach((data) => {
                    fetchedAlert.push(data.val())
                });
            })

            firebase.database().ref("ChatsUnderYou/vendors/"+this.props.phonenumberuser+"/").on("value", snapshot => {
                snapshot.forEach((data) => {
                    fetchedAlert.push(data.val())
                });

            })
            firebase.database().ref("ChatsUnderYou/alerts/"+this.props.phonenumberuser+"/").on("value", snapshot => {
                snapshot.forEach((data) => {
                    fetchedAlert.push(data.val())
                });
                // if (fetchedAlert)
                //     resolve(fetchedAlert)
                // else
                //     reject("no data")
            })
            if (fetchedAlert)
                    resolve(fetchedAlert)
                else
                    reject("no data")
        })
        fetchMessage.then((s) => {
            console.log("fetchedalert= ",s)
            s.sort(function(a, b){
                return -(a.timestamp-b.timestamp)
            })
            this.setState({
                isLoading: true,
                // display:false,
                chats:s
            })
            console.log(this.state.isLoading)
        }).catch((err) => {

        })
    }
    componentDidMount() {
            this.interval=setInterval(() => {
            console.log("refreshing");
            
            this.setState({ time: Date.now(),
                isLoading: false,
        })

            
        },10000);

        var fetchMessage = new Promise((resolve, reject) => {
            var fetchedAno = []
            firebase.database().ref("ChatsUnderYou/Anonymous/"+this.props.phonenumberuser+"/").on("value", snapshot => {
                snapshot.forEach((data) => {
                    fetchedAno.push(data.val())
                });
                if (fetchedAno)
                    resolve(fetchedAno)
                else
                    reject("no data")
            })
        })
        fetchMessage.then(fetchedAno => {
            console.log("fetchedAno",fetchedAno)
            var fetchMessage1 = new Promise((resolve,reject) => {
                var fetchedven = []
                var fetchedAnoven = []
                firebase.database().ref("ChatsUnderYou/vendors/"+this.props.phonenumberuser+"/").on("value", snapshot => {
                    snapshot.forEach((data) => {
                        fetchedven.push(data.val())
                    });
                    fetchedAnoven.push(...fetchedAno,...fetchedven)
                    if (fetchedAnoven)
                        resolve(fetchedAnoven)
                    else
                        reject("no data")
                })
            })
            fetchMessage1.then(fetchedAnoven => {
                console.log("fetchedAnoven",fetchedAnoven)
                var fetchMessage2 = new Promise((resolve,reject) => {
                    var fetchedAlert = []
                var fetchedAll = []
                firebase.database().ref("ChatsUnderYou/alerts/"+this.props.phonenumberuser+"/").on("value", snapshot => {
                    snapshot.forEach((data) => {
                        fetchedAlert.push(data.val())
                    });
                    fetchedAll.push(...fetchedAnoven,...fetchedAlert)
                    if (fetchedAll)
                        resolve(fetchedAll)
                    else
                        reject("no data")
                })
                })
                fetchMessage2.then(fetchedAll => {
                    console.log("fetchedAll",fetchedAll)
                    fetchedAll.sort(function(a, b){
                        return -(a.timestamp-b.timestamp)
                    })
                    console.log("fetchedAllSort",fetchedAll)

            this.setState({
                display:true,
                chats:fetchedAll
            })
                })
            })
        })
    }
        componentWillUnmount() {
        clearInterval(this.interval);
      }

        componentMount = () => {
            // if(this.props.navigation.state.params.phonenumber!=null){
            // console.log(this.props.navigation.state.params.name)
            // console.log(this.props.navigation.state.params.phonenumber)
            // console.log(this.props.navigation.state.params.description)
            var phonenumber = null
              const { navigation } = this.props;
              phonenumber = navigation.getParam('phonenumber',null);
            // phonenumber = this.props.navigation.state.params.phonenumber
                console.log(phonenumber,this.state.chats)
            // var appenddata = new Promise((resolve, reject) => {
                if(phonenumber != null){
                var c = 0
                if(this.state.chats.length!=0){
                    console.log(this.state.chats[0].phonenumber)
                this.state.chats.forEach(chat => {
                    if(chat.category == "shops"){
                        if(chat.phonenumber == this.props.navigation.state.params.phonenumber)
                        {
                            console.log("Im in")
                            c++;
                        }
                    }
                    else{
                        if(chat.alerttimestamp == this.props.navigation.state.params.timestamp)
                        {
                            console.log("Im in")
                            c++;
                        }
                    }
                    
                })}
                console.log(c)
                if(c==0){
                    console.log(this.props.navigation.state.params.category)
                    if(this.props.navigation.state.params.category == "Emotional Support"){
                        firebase.database().ref("ChatsUnderYou/Anonymous/"+this.props.phonenumberuser+"/"+this.props.navigation.state.params.phonenumber+","+this.props.navigation.state.params.timestamp).set({
                            name: this.props.navigation.state.params.name,
                            description: this.props.navigation.state.params.description,
                            phonenumber:this.props.navigation.state.params.phonenumber,
                            category: this.props.navigation.state.params.category,
                            counter: 0,
                            timestamp: 0,
                            alerttimestamp: this.props.navigation.state.params.timestamp,
                        }).then(() => {
                            firebase.database().ref("ChatsUnderYou/Anonymous/"+this.props.navigation.state.params.phonenumber+"/"+this.props.phonenumberuser+","+this.props.navigation.state.params.timestamp).set({
                                name: this.props.navigation.state.params.name,
                                description: this.props.navigation.state.params.description,
                                phonenumber:this.props.phonenumberuser,
                                category: this.props.navigation.state.params.category,
                                counter: 0,
                                timestamp: 0,
                                alerttimestamp: this.props.navigation.state.params.timestamp,
                            }).then(() => {
                                this.setState({
                                    // callFetch:true
                                    isLoading: false
                                })
                            })
                            })}
                            else if(this.props.navigation.state.params.category == "shops") {
                                firebase.database().ref("ChatsUnderYou/vendors/"+this.props.phonenumberuser+"/"+this.props.navigation.state.params.phonenumber).set({
                                    name: this.props.navigation.state.params.name,
                                    description: this.props.navigation.state.params.description,
                                    phonenumber:this.props.navigation.state.params.phonenumber,
                                    category: this.props.navigation.state.params.category,
                                    counter: 0,
                                    timestamp: 0,
                                }).then(() => {
                                    firebase.database().ref("ChatsUnderYou/vendors/"+this.props.navigation.state.params.phonenumber+"/"+this.props.phonenumberuser).set({
                                        name: this.props.navigation.state.params.name,
                                        description: this.props.navigation.state.params.description,
                                        phonenumber:this.props.phonenumberuser,
                                        category: this.props.navigation.state.params.category,
                                        counter: 0,
                                        timestamp: 0,
                                    }).then(() => {
                                        this.setState({
                                            // callFetch:true
                                            isLoading: false
                                        })
                                    })
                                    })
                            }
                    else {
                        firebase.database().ref("ChatsUnderYou/alerts/"+this.props.phonenumberuser+"/"+this.props.navigation.state.params.phonenumber+","+this.props.navigation.state.params.timestamp).set({
                            name: this.props.navigation.state.params.name,
                            description: this.props.navigation.state.params.description,
                            phonenumber:this.props.navigation.state.params.phonenumber,
                            category: this.props.navigation.state.params.category,
                            counter: 0,
                            timestamp: 0,
                            alerttimestamp: this.props.navigation.state.params.timestamp,
                        }).then(() => {
                                this.setState({
                                    // callFetch:true
                                    isLoading: false
                                })
                            })
                    }
                }}
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
                                            <Text style={styles.textStyle}>{item.name}</Text>
                                        </View> : 
                                        <View style={styles.renderChatsName1}>
                                            <Image source={require("../assets/chatIcon.png")} />
                                            <Text style={styles.textStyle}>{item.name}</Text>
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

    }
    render() {
        if(this.state.display == true){
        {this.componentMount()}
        if(this.state.isLoading == false){
            {this.fetchfromDB()
            // this.youralert()
            }
        return null}
        else{
        return (
            <View style={{ flex: 1}}>
                <View style={styles.upperContainer}>
                    <View style={{flex:1,flexDirection:'row',marginLeft:wp("4%")}}>
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
                                    {/* {this.state.your ? <View>
                                    <TouchableOpacity onPress={()=>{
                                                    // console.log(item.phonenumber,item.name,item.description)
                                                    this.props.navigation.navigate('ChatScreen',{phonenumber:this.props.phonenumberuser})}} style={{ borderBottomWidth: 0.25,
                                                        // opacity:0.6,
                                                        paddingBottom: hp("1%"),
                                                        borderBottomColor: "grey",}}>
                                                    <View style={styles.renderChatsName1}>
                                                        <Image source={require("../assets/chatIcon.png")} />
                                                        <Text style={styles.textStyle}>Myself</Text>
                                                    </View>
                                                </TouchableOpacity>
                                        </View> : <View/>} */}
                                    <ScrollView>
                                        <FlatList
                                            data={this.state.chats}
                                            ItemSeparatorComponent={this.ListViewItemSeparator}
                                            renderItem={({ item }) => (
                                                <View>
                                                {item.category == "Emotional Support" ?  <TouchableOpacity onPress={()=>{
                                                    console.log(item.phonenumber,item.name,item.description)
                                                    if(this.props.phonenumberuser){
                                                    this.props.navigation.navigate('AnonymousChat',{phonenumber:item.phonenumber,c:0,timestamp:item.alerttimestamp})}
                                                else{
                                                    alert("Please fill details first!")
                                                }
                                                }
                                                    
                                                    }>
                                            
                                                    <View style={styles.renderChatsName1}>
                                                        <Image source={require("../assets/chatIcon.png")} />
                                                        <Text style={styles.textStyle}>Anonymous</Text>
                                                        {/* <Text>{item.counter}</Text> */}
                                                        {item.counter > 0 ? <Badge
                                                            value = {"+" + item.counter}
                                                            containerStyle={{ position: 'absolute', right: 20 }}
                                                        />: <View/>}
                                                        {/* <Badge
                                                            value="99+"
                                                            containerStyle={{ position: 'absolute', right: 20 }}
                                                        /> */}
                                                    </View> 
                                                    {/* <View style={styles.renderChatsName}>
                                                        <Image source={require("../assets/chatIcon.png")} />
                                                        <Text style={styles.textStyle}>{item.name}</Text>
                                                    </View> */}
                                                </TouchableOpacity> :  <View></View>}
                                                {item.category == "shops" ?  <TouchableOpacity onPress={()=>{
                                                    console.log(item.phonenumber,item.name,item.description)
                                                    if(this.props.phonenumberuser){
                                                    this.props.navigation.navigate('vendorChat',{phonenumber:item.phonenumber})}
                                                    else{
                                                        alert("Please fill details first!")
                                                    }
                                                }}>
                                            
                                                    <View style={styles.renderChatsName}>
                                                        <Image source={require("../assets/chatIcon.png")} />
                                                        <Text style={styles.textStyle}>{item.name}</Text>
                                                        {item.counter > 0 ? <Badge
                                                            value = {"+" + item.counter}
                                                            containerStyle={{ position: 'absolute', right: 20 }}
                                                        />: <View/>}
                                                    </View> 
                                                    {/* <View style={styles.renderChatsName}>
                                                        <Image source={require("../assets/chatIcon.png")} />
                                                        <Text style={styles.textStyle}>{item.name}</Text>
                                                    </View> */}
                                                </TouchableOpacity> :  <View></View>}
                                                {item.category == "food" ?  <TouchableOpacity onPress={()=>{
                                                    console.log(item.phonenumber,item.name,item.description)
                                                    if(this.props.phonenumberuser){
                                                    this.props.navigation.navigate('ChatScreen',{phonenumber:item.phonenumber,timestamp:item.alerttimestamp})}
                                                    else{
                                                        alert("Please fill details first!")
                                                    }
                                                }}>
                                            
                                                    <View style={styles.renderChatsName1}>
                                                        <Image source={require("../assets/chatIcon.png")} />
                                                        <Text style={styles.textStyle}>{item.name}</Text>
                                                    </View> 
                                                    {/* <View style={styles.renderChatsName}>
                                                        <Image source={require("../assets/chatIcon.png")} />
                                                        <Text style={styles.textStyle}>{item.name}</Text>
                                                    </View> */}
                                                </TouchableOpacity> :  <View></View>}
                                                {item.category == "other" ?  <TouchableOpacity onPress={()=>{
                                                    console.log(item.phonenumber,item.name,item.description)
                                                    if(this.props.phonenumberuser){
                                                    this.props.navigation.navigate('ChatScreen',{phonenumber:item.phonenumber,timestamp:item.alerttimestamp})}
                                                    else{
                                                        alert("Please fill details first!")
                                                    }
                                                }}>
                                            
                                                    <View style={styles.renderChatsName1}>
                                                        <Image source={require("../assets/chatIcon.png")} />
                                                        <Text style={styles.textStyle}>{item.name}</Text>
                                                    </View> 
                                                    {/* <View style={styles.renderChatsName}>
                                                        <Image source={require("../assets/chatIcon.png")} />
                                                        <Text style={styles.textStyle}>{item.name}</Text>
                                                    </View> */}
                                                </TouchableOpacity> :  <View></View>}
                                               
                                                </View>
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
    }}else{
        return null;
    }
}
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
        // margin: wp('2%'),
        fontSize: 16,
        paddingLeft:wp('6%'),
      
        // backgroundColor:"green"
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
        borderLeftColor: 'yellow',
        padding: wp('2%'), 
        marginTop: hp('1%'),
        alignItems:"center" 
    },
    renderChatsName1:{
        flexDirection: "row",
        borderLeftWidth: wp('1%'), 
        borderLeftColor: 'red',
        padding: wp('2%'), 
        marginTop: hp('1%'),
        alignItems:"center" 
    },
});