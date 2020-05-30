// // // import React, { Component } from 'react';
// // // import { Text, View, Image, TextInput, TouchableOpacity, Modal, StyleSheet,ToastAndroid,ScrollView, } from 'react-native';
// // // import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
// // // import * as firebase from 'firebase'
// // // import { connect } from 'react-redux';

// // // class Sos extends React.Component{
// // //     state={
// // //         name : '',
// // //         phonenumber:this.props.phonenumberuser,
// // //         desc:'',
// // //         category : '',
// // //         message : '',
// // //         isMessage : false,
// // //     }

// // //     fetchFirebase = () => {
// // //     console.log("pressed submit")
// // //     if (this.state.name.length == 0 || this.state.desc.length == 0 || this.state.category == 0) {
// // //       this.setState({
// // //         isMessage: true,
// // //         message: 'Please fill all details!'
// // //       })
// // //     } else if (this.state.phonenumber.length != 10) {
// // //       this.setState({
// // //         isMessage: true,
// // //         message: 'Please Enter a 10 digit phone number!'
// // //       })
// // //     }
// // //     else {
// // //       this.setState({
// // //         isMessage: false
// // //       })

// // //       //if food or other than chatsunderyou mai jis bande ne alert raise ki hai use alerts ke andr bnde ke no. ke andr uska chatroom ki key daal do(no,timestamp)
// // //       //xyz,1
// // //       //xyz,2
// // //       ToastAndroid.show("Emergency created Successfully! ", 800)
// // //       var timestamp = new Date().getTime();
// // //       // console.log("time= ",timestamp);

// // //       var x = this.state.phonenumber + "," + timestamp

// // //       // console.log("x= ",x);

// // //       firebase.database().ref('sos/' + x + '/').set({
// // //         name: this.state.name,
// // //         phonenumber: this.state.phonenumber,
// // //         description: this.state.desc,
// // //         latitude: this.props.navigation.state.params.latitude,
// // //         longitude: this.props.navigation.state.params.longitude,
// // //         category: this.state.category,
// // //         timestamp: timestamp
// // //         // timestamp:
// // //       }).then((data) => {
// // //         console.log("data= ", data)
// // //         if (this.state.category == "food" || this.state.category == "other") {
// // //           firebase.database().ref("ChatsUnderYou/alerts/" + this.state.phonenumber + "/" + this.state.phonenumber + "," + timestamp).set({
// // //             name: this.state.name,
// // //             description: this.state.desc,
// // //             phonenumber: this.state.phonenumber,
// // //             category: this.state.category,
// // //             counter: 0,
// // //             timestamp: 0,
// // //             alerttimestamp: timestamp,
// // //           })

// // //           firebase.database().ref("Participants/"+x+"/"+this.state.phonenumber+"/").set({
// // //               owner:"true",
// // //               category:this.state.category,
// // //               Ownername: this.props.nameuser,
// // //               name:this.state.name,
// // //               description: this.state.desc,
// // //               phonenumber: this.state.phonenumber,
// // //               alerttimestamp: timestamp,
// // //               counter: 0,
// // //               timestamp: 0,

// // //           })

// // //         }//end of if
// // //         console.log('Going to HomeScreen from SosMain')


// // //         this.props.navigation.navigate('Home')

// // //       }).catch((err) => {
// // //         console.log(err)
// // //       }).then(() => {

// // //       })
// // //     }

// // //   }




// // //     render(){

// // //         if(this.state.category == 'food'){
// // //             return(
// // //                 <View style={{flex:1}}>
// // //                   <View style={{height:hp('8%'),backgroundColor:"#0290ea"}}>
// // //                                              <TouchableOpacity onPress={
// // //         ()=>{
// // //         this.props.navigation.navigate('Drawer') 
// // //         console.log("lkjfdh")         
// // //         }
// // //       }
// // //       style={{position:'absolute',top:15,left:10,zIndex:10,height:40,width:40}}
// // //       >
// // //               <Image
// // //       source={require('../assets/back.png')}
// // //       style={{position:'absolute',top:3,left:10,zIndex:2,}}
// // //       />      
// // //       </TouchableOpacity>                    
// // //                   </View>

// // //               <View style={styles.panel}>
// // //                 <View style={{height:50}}>
// // //                 {/* <View style={styles.panelHeader}>
// // //                 </View> */}
// // //                 </View>
// // //                 <ScrollView style={{marginLeft:wp("7%"),marginRight:wp("8%")}}>
// // //                     <Text style={{fontSize:wp('4.1%')}}>Name *</Text>
// // //                     <TextInput 
// // //                       style={{height:hp("5%"),marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5,fontSize:wp('4%')}}  
// // //                       onChangeText={(text) => {this.setState({name: text})}}
// // //                       value={this.state.name}
// // //                     />
// // //                     <Text style={{fontSize:wp('4.1%')}}>Phone number *</Text>
// // //                     <View style={{flexDirection:'row',marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}>
// // //                     <Text style={{fontSize:wp('4%'),alignSelf:'center',marginRight:5}}>(+91)</Text>
// // //                     <TextInput
// // //                       style={{height:hp("6%"),width:hp("60%"),fontSize: wp('4%')}}
// // //                       keyboardType="name-phone-pad"
// // //                       // value = {this.state.phonenumber}
// // //                       value={this.props.phonenumberuser}
// // //                       editable={false}
// // //                       // onChangeText={(text) => {this.setState({phonenumber: text})}}
// // //                     />
// // //                     </View>
// // //                     <Text style={{fontSize:wp('4.1%'),marginBottom:10}}>Category</Text>
// // //                     <View style={{ flexDirection: "row",alignItems:'center',justifyContent:'center',marginBottom:20}}>
// // //                         <TouchableOpacity onPress={()=>{
// // //                             this.setState({category : 'food'})
// // //                         }}>
// // //                             <View style={{height: hp('6%'), width: wp('25%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',borderRadius:4,backgroundColor:'#c2dff0'}}>
// // //                                 <Text style={{fontSize: wp('3.1%'),color:"#0290ea" }}>Food Supplies</Text>
// // //                             </View>
// // //                         </TouchableOpacity>
// // //                         <TouchableOpacity onPress={()=>{
// // //                             this.setState({category : 'Emotional Support'})
// // //                         }}> 
// // //                             <View style={{height: hp('6%'), width: wp('30%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:wp("2%"),borderRadius:4}}>
// // //                                 <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Emotional Support</Text>
// // //                             </View>
// // //                         </TouchableOpacity>
// // //                         <TouchableOpacity onPress={()=>{
// // //                                 this.setState({category : 'other'})
// // //                             }}> 
// // //                                 <View style={{height: hp('6%'), width: wp('22%'), borderWidth: 0.5, borderColor: "grey" ,alignItems:'center',justifyContent:'center',marginLeft:wp("2%"),borderRadius:4}}>
// // //                                     <Text style={{ fontSize: wp('3.1%'),color:"#0290ea"}}>Others</Text>
// // //                                 </View>
// // //                             </TouchableOpacity>
// // //               </View>
// // //                       <TextInput
// // //                           style={{borderWidth:0.5,marginBottom:20,height:hp("20%"),fontSize: wp('4%'),borderColor:'grey',borderRadius:4}}
// // //                           multiline={true}
// // //                           numberOfLines={5}
// // //                           value={this.state.desc}
// // //                           onChangeText={(text) => {this.setState({desc: text})}}
// // //                       />
// // //                       <TouchableOpacity onPress={() => {this.fetchFirebase()
// // //                         // this.props.navigation.navigate("Drawer")
// // //                       }}>
// // //                       <Image source={require("../assets/Arrow.png")} style={{alignSelf:'center',height:hp("9%")}}/>
// // //                       </TouchableOpacity>
// // //                       {
// // //                         this.state.isMessage ?
// // //                         <Text style={{color:'red',fontSize:wp('4%'),alignSelf:'center'}}>
// // //                           {this.state.message}
// // //                         </Text>
// // //                         :

// // //                         <Text>
                          
// // //                         </Text>
// // //                       }
// // //                 </ScrollView>
// // //               </View>
// // //                 </View>
// // //             )
// // //         }else if(this.state.category == 'other'){
// // //             return(
// // //                 <View style={{flex:1}}>
// // //                                     <View style={{height:hp('8%'),backgroundColor:"#0290ea"}}>
// // //                                              <TouchableOpacity onPress={
// // //         ()=>{
// // //         this.props.navigation.navigate('Drawer') 
// // //         console.log("lkjfdh")         
// // //         }

// // //       }
// // //       style={{position:'absolute',top:15,left:10,zIndex:10,height:40,width:40}}
// // //       >
// // //               <Image
// // //       source={require('../assets/back.png')}
// // //       style={{position:'absolute',top:3,left:10,zIndex:2,}}
// // //       />      
// // //       </TouchableOpacity>                    
// // //                   </View>
// // //               <View style={styles.panel}>
// // //                 <View style={{height:50}}>
// // //                 {/* <View style={styles.panelHeader}>
// // //                 </View> */}
// // //                 </View>
// // //                 <ScrollView style={{marginLeft:wp("7%"),marginRight:wp("8%")}}>
// // //                     <Text style={{fontSize:wp('4.1%')}}>Name *</Text>
// // //                     <TextInput 
// // //                       style={{height:hp("5%"),fontSize:wp('4%'),marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}  
// // //                       value={this.state.name}
// // //                       onChangeText={(text) => {this.setState({name: text})}}
// // //                     />
// // //                     <Text style={{fontSize:wp('4.1%')}}>Phone number *</Text>
// // //                     <View style={{flexDirection:'row',marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}>
// // //                     <Text style={{fontSize:wp('4%'),alignSelf:'center',marginRight:5}}>(+91)</Text>
// // //                     <TextInput
// // //                       style={{height:hp("6%"),fontSize:wp('4%'),width:hp("60%")}}
// // //                       keyboardType="name-phone-pad"
// // //                       value={this.props.phonenumberuser}
// // //                       editable={false}
// // //                       // onChangeText={(text) => {this.setState({phonenumber: text})}}
// // //                     />
// // //                     </View>
// // //                     <Text style={{fontSize:wp('4.1%'),marginBottom:10}}>Category</Text>
// // //                     <View style={{ flexDirection: "row",alignItems:'center',justifyContent:'center',marginBottom:20}}>
// // //                         <TouchableOpacity onPress={()=>{
// // //                             this.setState({category : 'food'})
// // //                         }}>
// // //                             <View style={{height: hp('6%'), width: wp('25%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',borderRadius:4}}>
// // //                                 <Text style={{fontSize: wp('3.1%'),color:"#0290ea" }}>Food Supplies</Text>
// // //                             </View>
// // //                         </TouchableOpacity>
// // //                         <TouchableOpacity onPress={()=>{
// // //                             this.setState({category : 'Emotional Support'})
// // //                         }}> 
// // //                             <View style={{height: hp('6%'), width: wp('30%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:wp("2%"),borderRadius:4}}>
// // //                                 <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Emotional Support</Text>
// // //                             </View>
// // //                         </TouchableOpacity>
// // //                         <TouchableOpacity onPress={()=>{
// // //                                 this.setState({category : 'other'})
// // //                             }}> 
// // //                                 <View style={{height: hp('6%'), width: wp('22%'), borderWidth: 0.5, borderColor: "grey" ,alignItems:'center',justifyContent:'center',marginLeft:wp("2%"),borderRadius:4,backgroundColor:'#c2dff0'}}>
// // //                                     <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Others</Text>
// // //                                 </View>
// // //                             </TouchableOpacity>
// // //               </View>
// // //                       <TextInput
// // //                           style={{borderWidth:0.5,marginBottom:20,height:hp("20%"),borderColor:'grey',borderRadius:4,fontSize: wp('4%')}}
// // //                           multiline={true}
// // //                           value={this.state.desc}
// // //                           numberOfLines={5}
// // //                           onChangeText={(text) => {this.setState({desc: text})}}
// // //                       />
// // //                       <TouchableOpacity onPress={() => this.fetchFirebase()}>
// // //                       <Image source={require("../assets/Arrow.png")} style={{alignSelf:'center',height:hp("9%")}}/>
// // //                       </TouchableOpacity>
// // //                       {
// // //                         this.state.isMessage ?
// // //                         <Text style={{color:'red',fontSize:wp('4%'),alignSelf:'center'}}>
// // //                           {this.state.message}
// // //                         </Text>
// // //                         :

// // //                         <Text>
                          
// // //                         </Text>
// // //                       }
// // //                 </ScrollView>
// // //               </View>
// // //                 </View>
// // //             )           
// // //         }else if(this.state.category == "Emotional Support"){
// // //           return(
// // //             <View style={{flex:1,backgroundColor:"#FFF"}}>
// // //               <View style={{height:hp('8%'),backgroundColor:"#0290ea"}}>
// // //                                          <TouchableOpacity onPress={
// // //     ()=>{
// // //     this.props.navigation.navigate('Drawer') 
// // //     console.log("lkjfdh")         
// // //     }
// // //   }
// // //   style={{position:'absolute',top:15,left:10,zIndex:10,height:40,width:40}}
// // //   >
// // //           <Image
// // //   source={require('../assets/back.png')}
// // //   style={{position:'absolute',top:3,left:10,zIndex:2,}}
// // //   />      
// // //   </TouchableOpacity>                    
// // //               </View>

// // //           <View style={{flex:0.8,backgroundColor:"#FFF"}}>
// // //             <View style={{height:50}}>
// // //             {/* <View style={styles.panelHeader}>
// // //             </View> */}
// // //             </View>
// // //             <ScrollView style={{marginLeft:wp("7%"),marginRight:wp("8%")}}>
// // //                 <Text style={{fontSize:wp('4.1%')}}>Name *</Text>
// // //                 <TextInput 
// // //                   style={{height:hp("5%"),fontSize:wp('4%'),marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}  
// // //                   onChangeText={(text) => {this.setState({name: text})}}
// // //                   value={this.state.name}
// // //                 />
// // //                 <Text style={{fontSize:wp('4.1%')}}>Phone number *</Text>
// // //                 <View style={{flexDirection:'row',marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}>
// // //                 <Text style={{fontSize:wp('4%'),alignSelf:'center',marginRight:5}}>(+91)</Text>
// // //                 <TextInput
// // //                   style={{height:hp("6%"),fontSize:wp('4%'),width:hp("60%")}}
// // //                   keyboardType="name-phone-pad"
// // //                   value={this.props.phonenumberuser}
// // //                   editable={false}
// // //                   // onChangeText={(text) => {this.setState({phonenumber: text})}}
// // //                 />
// // //                 </View>
// // //                 <Text style={{fontSize:wp('4.1%'),marginBottom:10}}>Category</Text>
// // //                   <View style={{ flexDirection: "row",marginBottom:20,alignItems:'center',justifyContent:'center'}}>
// // //                         <TouchableOpacity onPress={()=>{
// // //                             this.setState({category : 'food'})
// // //                         }}>
// // //                             <View style={{height: hp('6%'), width: wp('25%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',borderRadius:4}}>
// // //                                 <Text style={{fontSize: wp('3.1%'),color:"#0290ea" }}>Food Supplies</Text>
// // //                             </View>
// // //                         </TouchableOpacity>
// // //                         <TouchableOpacity onPress={()=>{
// // //                             this.setState({category : 'Emotional Support'})
// // //                         }}> 
// // //                             <View style={{height: hp('6%'), width: wp('30%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:wp("2%"),borderRadius:4,backgroundColor:'#c2dff0'}}>
// // //                                 <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Emotional Support</Text>
// // //                             </View>
// // //                         </TouchableOpacity>
// // //                         <TouchableOpacity onPress={()=>{
// // //                                 this.setState({category : 'other'})
// // //                             }}> 
// // //                                 <View style={{height: hp('6%'), width: wp('22%'), borderWidth: 0.5, borderColor: "grey" ,alignItems:'center',justifyContent:'center',marginLeft:wp("2%"),borderRadius:4}}>
// // //                                     <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Others</Text>
// // //                                 </View>
// // //                             </TouchableOpacity>
// // //               </View>
// // //               {/* <View style={{justifyContent:'center',alignItems:'center',marginBottom:20,height:hp("5%")}}>

// // //                   </View> */}
// // //                   <TextInput
// // //                       style={{borderWidth:0.5,marginBottom:20,height:hp("20%"),borderColor:'grey',borderRadius:4,fontSize: wp('4%')}}
// // //                       multiline={true}
// // //                       numberOfLines={5}
// // //                       value={this.state.desc}
// // //                       onChangeText={(text) => {this.setState({desc: text})}}
// // //                   />
// // //                   <TouchableOpacity onPress={() => {this.fetchFirebase()
// // //                     // this.props.navigation.navigate("Drawer")
// // //                   }}>
// // //                   <Image source={require("../assets/Arrow.png")} style={{alignSelf:'center',height:hp("9%")}}/>
// // //                   </TouchableOpacity>
// // //                   {
// // //                         this.state.isMessage ?
// // //                         <Text style={{color:'red',fontSize:wp('4%'),alignSelf:'center'}}>
// // //                           {this.state.message}
// // //                         </Text>
// // //                         :

// // //                         <Text>
                          
// // //                         </Text>
// // //                       }
// // //             </ScrollView>
// // //           </View>
// // //           <View style={{flex:0.2,justifyContent:'flex-end',marginLeft:wp('7%'),backgroundColor:"#FFF"}}>

// // //             <Text style={{color : '#0290ea',fontSize:wp('2.5%'),marginBottom:wp('5%')}}>
// // //             *Details provided by you will not be shared with other users of app.
// // //             </Text>

// // //           </View>
// // //             </View>
// // //         )          
// // //         }else {
// // //           return(
// // //             <View style={{flex:1}}>
// // //               <View style={{height:hp('8%'),backgroundColor:"#0290ea"}}>
// // //                                          <TouchableOpacity onPress={
// // //     ()=>{
// // //     this.props.navigation.navigate('Drawer') 
// // //     console.log("lkjfdh")         
// // //     }
// // //   }
// // //   style={{position:'absolute',top:15,left:10,zIndex:10,height:40,width:40}}
// // //   >
// // //           <Image
// // //   source={require('../assets/back.png')}
// // //   style={{position:'absolute',top:3,left:10,zIndex:2,}}
// // //   />      
// // //   </TouchableOpacity>                    
// // //               </View>

// // //           <View style={styles.panel}>
// // //             <View style={{height:50}}>
// // //             {/* <View style={styles.panelHeader}>
// // //             </View> */}
// // //             </View>
// // //             <ScrollView style={{marginLeft:wp("7%"),marginRight:wp("8%")}}>
// // //                 <Text style={{fontSize:wp('4.1%')}}>Name *</Text>
// // //                 <TextInput 
// // //                   style={{height:hp("5%"),fontSize:wp('4%'),marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}  
// // //                   onChangeText={(text) => {this.setState({name: text})}}
// // //                 />
// // //                 <Text style={{fontSize:wp('4.1%')}}>Phone number *</Text>
// // //                 <View style={{flexDirection:'row',marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}>
// // //                 <Text style={{fontSize:wp('4%'),alignSelf:'center',marginRight:5}}>(+91)</Text>
// // //                 <TextInput
// // //                   style={{height:hp("6%"),fontSize:wp('4%'),width:hp("60%")}}
// // //                   keyboardType="name-phone-pad"
// // //                   value={this.props.phonenumberuser}
// // //                   editable={false}
// // //                   // onChangeText={(text) => {this.setState({phonenumber: text})}}
// // //                 />
// // //                 </View>
// // //                 <Text style={{fontSize:wp('4.1%'),marginBottom:10}}>Category</Text>
// // //                 <View style={{ flexDirection: "row",alignItems:'center',justifyContent:'center',marginBottom:20}}>
// // //                         <TouchableOpacity onPress={()=>{
// // //                             this.setState({category : 'food'})
// // //                         }}>
// // //                             <View style={{height: hp('6%'), width: wp('25%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',borderRadius:4}}>
// // //                                 <Text style={{fontSize: wp('3.1%'),color:"#0290ea" }}>Food Supplies</Text>
// // //                             </View>
// // //                         </TouchableOpacity>
// // //                         <TouchableOpacity onPress={()=>{
// // //                             this.setState({category : 'Emotional Support'})
// // //                         }}> 
// // //                             <View style={{height: hp('6%'), width: wp('30%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:wp("2%"),borderRadius:4}}>
// // //                                 <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Emotional Support</Text>
// // //                             </View>
// // //                         </TouchableOpacity>
// // //                         <TouchableOpacity onPress={()=>{
// // //                                 this.setState({category : 'other'})
// // //                             }}> 
// // //                                 <View style={{height: hp('6%'), width: wp('22%'), borderWidth: 0.5, borderColor: "grey" ,alignItems:'center',justifyContent:'center',marginLeft:wp("2%"),borderRadius:4}}>
// // //                                     <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Others</Text>
// // //                                 </View>
// // //                             </TouchableOpacity>
// // //               </View>
// // //                   <TextInput
// // //                       style={{borderWidth:0.5,marginBottom:20,height:hp("20%"),borderColor:'grey',borderRadius:4,fontSize: wp('4%')}}
// // //                       multiline={true}
// // //                       numberOfLines={5}
// // //                       value={this.state.desc}
// // //                       onChangeText={(text) => {this.setState({desc: text})}}
// // //                   />
// // //                   <View style={{justifyContent:'center',alignItems:'center'}}>

                  
// // //                   <TouchableOpacity onPress={() => {this.fetchFirebase()
// // //                     // this.props.navigation.navigate("Drawer")
// // //                   }}
// // //                   style={{width:wp('18%'),justifyContent:'center',alignItems:'center'}}
// // //                   >
// // //                   <Image source={require("../assets/Arrow.png")} style={{alignSelf:'center',height:hp("9%"),width:wp('20%')}}/>
// // //                   </TouchableOpacity>
// // //                   </View>
// // //                   {
// // //                         this.state.isMessage ?
// // //                         <Text style={{color:'red',fontSize:wp('4%'),alignSelf:'center'}}>
// // //                           {this.state.message}
// // //                         </Text>
// // //                         :

// // //                         <Text>
                          
// // //                         </Text>
// // //                       }
// // //             </ScrollView>
// // //           </View>
// // //             </View>
// // //         )
// // //         }


// // //     }
// // // }
// // // const mapStateToProps = (state) => {
// // //   // console.log(state)
// // //   return {
// // //     upload_status: state.textUpload,
// // //     nameuser: state.nameuser,
// // //     phonenumberuser: state.phonenumberuser,
// // //     personData: state.personData
// // //   }
// // // }


// // // export default connect(mapStateToProps)(Sos);

// // // const styles = {
// // //     container: {
// // //       flex: 1,
// // //       backgroundColor: '#f8f9fa',
// // //       alignItems: 'center',
// // //       justifyContent: 'center'
// // //     },
// // //     panel: {
// // //       flex: 1,
// // //       backgroundColor: 'white',
// // //       position: 'relative',
// // //       borderTopLeftRadius: 10,
// // //       borderTopRightRadius: 10,
// // //     },
// // //     panelHeader: {
// // //       height: 25,
// // //       width:wp("10%"),
// // //       borderBottomWidth:1,
// // //       alignSelf:'center',
// // //     },
// // //   }

// // import React, { Component } from 'react';
// // import { Text, View, Image, TextInput, TouchableOpacity, Modal, StyleSheet,ToastAndroid,ScrollView, } from 'react-native';
// // import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
// // import * as firebase from 'firebase'
// // import { connect } from 'react-redux';

// // class Sos extends React.Component{
// //     state={
// //         name : '',
// //         phonenumber:this.props.phonenumberuser,
// //         desc:'',
// //         category : '',
// //         message : '',
// //         isMessage : false,
// //     }

// //     fetchFirebase = () => {
// //     console.log("pressed submit")
// //     if (this.state.name.length == 0 || this.state.desc.length == 0 || this.state.category == 0) {
// //       this.setState({
// //         isMessage: true,
// //         message: 'Please fill all details!'
// //       })
// //     } else if (this.state.phonenumber.length != 10) {
// //       this.setState({
// //         isMessage: true,
// //         message: 'Please Enter a 10 digit phone number!'
// //       })
// //     }
// //     else {
// //       this.setState({
// //         isMessage: false
// //       })

// //       //if food or other than chatsunderyou mai jis bande ne alert raise ki hai use alerts ke andr bnde ke no. ke andr uska chatroom ki key daal do(no,timestamp)
// //       //xyz,1
// //       //xyz,2
// //       ToastAndroid.show("Emergency created Successfully! ", 800)
// //       var timestamp = new Date().getTime();
// //       // console.log("time= ",timestamp);

// //       var x = this.state.phonenumber + "," + timestamp

// //       // console.log("x= ",x);

// //       firebase.database().ref('sos/' + x + '/').set({
// //         name: this.state.name,
// //         phonenumber: this.state.phonenumber,
// //         description: this.state.desc,
// //         latitude: this.props.navigation.state.params.latitude,
// //         longitude: this.props.navigation.state.params.longitude,
// //         category: this.state.category,
// //         timestamp: timestamp
// //         // timestamp:
// //       }).then((data) => {
// //         console.log("data= ", data)
// //         if (this.state.category == "food" || this.state.category == "other") {
// //           firebase.database().ref("ChatsUnderYou/alerts/" + this.state.phonenumber + "/" + this.state.phonenumber + "," + timestamp).set({
// //             name: this.state.name,
// //             description: this.state.desc,
// //             phonenumber: this.state.phonenumber,
// //             category: this.state.category,
// //             counter: 0,
// //             timestamp: 0,
// //             alerttimestamp: timestamp,
// //           })

// //           firebase.database().ref("Participants/"+x+"/"+this.state.phonenumber+"/").set({
// //               owner:"true",
// //               category:this.state.category,
// //               Ownername: this.props.nameuser,
// //               name:this.state.name,
// //               description: this.state.desc,
// //               phonenumber: this.state.phonenumber,
// //               alerttimestamp: timestamp,
// //               counter: 0,
// //               timestamp: 0,
// //               phonenumberuser: this.props.phonenumberuser,
// //           })

// //         }//end of if
// //         console.log('Going to HomeScreen from SosMain')


// //         this.props.navigation.navigate('Home')

// //       }).catch((err) => {
// //         console.log(err)
// //       }).then(() => {

// //       })
// //     }

// //   }




// //     render(){

// //         if(this.state.category == 'food'){
// //             return(
// //                 <View style={{flex:1}}>
// //                   <View style={{height:hp('8%'),backgroundColor:"#0290ea"}}>
// //                                              <TouchableOpacity onPress={
// //         ()=>{
// //         this.props.navigation.navigate('Drawer') 
// //         console.log("lkjfdh")         
// //         }
// //       }
// //       style={{position:'absolute',top:15,left:10,zIndex:10,height:40,width:40}}
// //       >
// //               <Image
// //       source={require('../assets/back.png')}
// //       style={{position:'absolute',top:3,left:10,zIndex:2,}}
// //       />      
// //       </TouchableOpacity>                    
// //                   </View>

// //               <View style={styles.panel}>
// //                 <View style={{height:50}}>
// //                 {/* <View style={styles.panelHeader}>
// //                 </View> */}
// //                 </View>
// //                 <ScrollView style={{marginLeft:wp("7%"),marginRight:wp("8%")}}>
// //                     <Text style={{fontSize:wp('4.1%')}}>Name *</Text>
// //                     <TextInput 
// //                       style={{height:hp("5%"),marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5,fontSize:wp('4%')}}  
// //                       onChangeText={(text) => {this.setState({name: text})}}
// //                       value={this.state.name}
// //                     />
// //                     <Text style={{fontSize:wp('4.1%')}}>Phone number *</Text>
// //                     <View style={{flexDirection:'row',marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}>
// //                     <Text style={{fontSize:wp('4%'),alignSelf:'center',marginRight:5}}>(+91)</Text>
// //                     <TextInput
// //                       style={{height:hp("6%"),width:hp("60%"),fontSize: wp('4%')}}
// //                       keyboardType="name-phone-pad"
// //                       // value = {this.state.phonenumber}
// //                       value={this.props.phonenumberuser}
// //                       editable={false}
// //                       // onChangeText={(text) => {this.setState({phonenumber: text})}}
// //                     />
// //                     </View>
// //                     <Text style={{fontSize:wp('4.1%'),marginBottom:10}}>Category</Text>
// //                     <View style={{ flexDirection: "row",alignItems:'center',justifyContent:'center',marginBottom:20}}>
// //                         <TouchableOpacity onPress={()=>{
// //                             this.setState({category : 'food'})
// //                         }}>
// //                             <View style={{height: hp('6%'), width: wp('25%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',borderRadius:4,backgroundColor:'#c2dff0'}}>
// //                                 <Text style={{fontSize: wp('3.1%'),color:"#0290ea" }}>Food Supplies</Text>
// //                             </View>
// //                         </TouchableOpacity>
// //                         <TouchableOpacity onPress={()=>{
// //                             this.setState({category : 'Emotional Support'})
// //                         }}> 
// //                             <View style={{height: hp('6%'), width: wp('30%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:wp("2%"),borderRadius:4}}>
// //                                 <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Emotional Support</Text>
// //                             </View>
// //                         </TouchableOpacity>
// //                         <TouchableOpacity onPress={()=>{
// //                                 this.setState({category : 'other'})
// //                             }}> 
// //                                 <View style={{height: hp('6%'), width: wp('22%'), borderWidth: 0.5, borderColor: "grey" ,alignItems:'center',justifyContent:'center',marginLeft:wp("2%"),borderRadius:4}}>
// //                                     <Text style={{ fontSize: wp('3.1%'),color:"#0290ea"}}>Others</Text>
// //                                 </View>
// //                             </TouchableOpacity>
// //               </View>
// //                       <TextInput
// //                           style={{borderWidth:0.5,marginBottom:20,height:hp("20%"),fontSize: wp('4%'),borderColor:'grey',borderRadius:4}}
// //                           multiline={true}
// //                           numberOfLines={5}
// //                           value={this.state.desc}
// //                           onChangeText={(text) => {this.setState({desc: text})}}
// //                       />
// //                       <TouchableOpacity onPress={() => {this.fetchFirebase()
// //                         // this.props.navigation.navigate("Drawer")
// //                       }}>
// //                       <Image source={require("../assets/Arrow.png")} style={{alignSelf:'center',height:hp("9%")}}/>
// //                       </TouchableOpacity>
// //                       {
// //                         this.state.isMessage ?
// //                         <Text style={{color:'red',fontSize:wp('4%'),alignSelf:'center'}}>
// //                           {this.state.message}
// //                         </Text>
// //                         :

// //                         <Text>
                          
// //                         </Text>
// //                       }
// //                 </ScrollView>
// //               </View>
// //                 </View>
// //             )
// //         }else if(this.state.category == 'other'){
// //             return(
// //                 <View style={{flex:1}}>
// //                                     <View style={{height:hp('8%'),backgroundColor:"#0290ea"}}>
// //                                              <TouchableOpacity onPress={
// //         ()=>{
// //         this.props.navigation.navigate('Drawer') 
// //         console.log("lkjfdh")         
// //         }

// //       }
// //       style={{position:'absolute',top:15,left:10,zIndex:10,height:40,width:40}}
// //       >
// //               <Image
// //       source={require('../assets/back.png')}
// //       style={{position:'absolute',top:3,left:10,zIndex:2,}}
// //       />      
// //       </TouchableOpacity>                    
// //                   </View>
// //               <View style={styles.panel}>
// //                 <View style={{height:50}}>
// //                 {/* <View style={styles.panelHeader}>
// //                 </View> */}
// //                 </View>
// //                 <ScrollView style={{marginLeft:wp("7%"),marginRight:wp("8%")}}>
// //                     <Text style={{fontSize:wp('4.1%')}}>Name *</Text>
// //                     <TextInput 
// //                       style={{height:hp("5%"),fontSize:wp('4%'),marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}  
// //                       value={this.state.name}
// //                       onChangeText={(text) => {this.setState({name: text})}}
// //                     />
// //                     <Text style={{fontSize:wp('4.1%')}}>Phone number *</Text>
// //                     <View style={{flexDirection:'row',marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}>
// //                     <Text style={{fontSize:wp('4%'),alignSelf:'center',marginRight:5}}>(+91)</Text>
// //                     <TextInput
// //                       style={{height:hp("6%"),fontSize:wp('4%'),width:hp("60%")}}
// //                       keyboardType="name-phone-pad"
// //                       value={this.props.phonenumberuser}
// //                       editable={false}
// //                       // onChangeText={(text) => {this.setState({phonenumber: text})}}
// //                     />
// //                     </View>
// //                     <Text style={{fontSize:wp('4.1%'),marginBottom:10}}>Category</Text>
// //                     <View style={{ flexDirection: "row",alignItems:'center',justifyContent:'center',marginBottom:20}}>
// //                         <TouchableOpacity onPress={()=>{
// //                             this.setState({category : 'food'})
// //                         }}>
// //                             <View style={{height: hp('6%'), width: wp('25%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',borderRadius:4}}>
// //                                 <Text style={{fontSize: wp('3.1%'),color:"#0290ea" }}>Food Supplies</Text>
// //                             </View>
// //                         </TouchableOpacity>
// //                         <TouchableOpacity onPress={()=>{
// //                             this.setState({category : 'Emotional Support'})
// //                         }}> 
// //                             <View style={{height: hp('6%'), width: wp('30%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:wp("2%"),borderRadius:4}}>
// //                                 <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Emotional Support</Text>
// //                             </View>
// //                         </TouchableOpacity>
// //                         <TouchableOpacity onPress={()=>{
// //                                 this.setState({category : 'other'})
// //                             }}> 
// //                                 <View style={{height: hp('6%'), width: wp('22%'), borderWidth: 0.5, borderColor: "grey" ,alignItems:'center',justifyContent:'center',marginLeft:wp("2%"),borderRadius:4,backgroundColor:'#c2dff0'}}>
// //                                     <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Others</Text>
// //                                 </View>
// //                             </TouchableOpacity>
// //               </View>
// //                       <TextInput
// //                           style={{borderWidth:0.5,marginBottom:20,height:hp("20%"),borderColor:'grey',borderRadius:4,fontSize: wp('4%')}}
// //                           multiline={true}
// //                           value={this.state.desc}
// //                           numberOfLines={5}
// //                           onChangeText={(text) => {this.setState({desc: text})}}
// //                       />
// //                       <TouchableOpacity onPress={() => this.fetchFirebase()}>
// //                       <Image source={require("../assets/Arrow.png")} style={{alignSelf:'center',height:hp("9%")}}/>
// //                       </TouchableOpacity>
// //                       {
// //                         this.state.isMessage ?
// //                         <Text style={{color:'red',fontSize:wp('4%'),alignSelf:'center'}}>
// //                           {this.state.message}
// //                         </Text>
// //                         :

// //                         <Text>
                          
// //                         </Text>
// //                       }
// //                 </ScrollView>
// //               </View>
// //                 </View>
// //             )           
// //         }else if(this.state.category == "Emotional Support"){
// //           return(
// //             <View style={{flex:1,backgroundColor:"#FFF"}}>
// //               <View style={{height:hp('8%'),backgroundColor:"#0290ea"}}>
// //                                          <TouchableOpacity onPress={
// //     ()=>{
// //     this.props.navigation.navigate('Drawer') 
// //     console.log("lkjfdh")         
// //     }
// //   }
// //   style={{position:'absolute',top:15,left:10,zIndex:10,height:40,width:40}}
// //   >
// //           <Image
// //   source={require('../assets/back.png')}
// //   style={{position:'absolute',top:3,left:10,zIndex:2,}}
// //   />      
// //   </TouchableOpacity>                    
// //               </View>

// //           <View style={{flex:0.8,backgroundColor:"#FFF"}}>
// //             <View style={{height:50}}>
// //             {/* <View style={styles.panelHeader}>
// //             </View> */}
// //             </View>
// //             <ScrollView style={{marginLeft:wp("7%"),marginRight:wp("8%")}}>
// //                 <Text style={{fontSize:wp('4.1%')}}>Name *</Text>
// //                 <TextInput 
// //                   style={{height:hp("5%"),fontSize:wp('4%'),marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}  
// //                   onChangeText={(text) => {this.setState({name: text})}}
// //                   value={this.state.name}
// //                 />
// //                 <Text style={{fontSize:wp('4.1%')}}>Phone number *</Text>
// //                 <View style={{flexDirection:'row',marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}>
// //                 <Text style={{fontSize:wp('4%'),alignSelf:'center',marginRight:5}}>(+91)</Text>
// //                 <TextInput
// //                   style={{height:hp("6%"),fontSize:wp('4%'),width:hp("60%")}}
// //                   keyboardType="name-phone-pad"
// //                   value={this.props.phonenumberuser}
// //                   editable={false}
// //                   // onChangeText={(text) => {this.setState({phonenumber: text})}}
// //                 />
// //                 </View>
// //                 <Text style={{fontSize:wp('4.1%'),marginBottom:10}}>Category</Text>
// //                   <View style={{ flexDirection: "row",marginBottom:20,alignItems:'center',justifyContent:'center'}}>
// //                         <TouchableOpacity onPress={()=>{
// //                             this.setState({category : 'food'})
// //                         }}>
// //                             <View style={{height: hp('6%'), width: wp('25%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',borderRadius:4}}>
// //                                 <Text style={{fontSize: wp('3.1%'),color:"#0290ea" }}>Food Supplies</Text>
// //                             </View>
// //                         </TouchableOpacity>
// //                         <TouchableOpacity onPress={()=>{
// //                             this.setState({category : 'Emotional Support'})
// //                         }}> 
// //                             <View style={{height: hp('6%'), width: wp('30%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:wp("2%"),borderRadius:4,backgroundColor:'#c2dff0'}}>
// //                                 <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Emotional Support</Text>
// //                             </View>
// //                         </TouchableOpacity>
// //                         <TouchableOpacity onPress={()=>{
// //                                 this.setState({category : 'other'})
// //                             }}> 
// //                                 <View style={{height: hp('6%'), width: wp('22%'), borderWidth: 0.5, borderColor: "grey" ,alignItems:'center',justifyContent:'center',marginLeft:wp("2%"),borderRadius:4}}>
// //                                     <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Others</Text>
// //                                 </View>
// //                             </TouchableOpacity>
// //               </View>
// //               {/* <View style={{justifyContent:'center',alignItems:'center',marginBottom:20,height:hp("5%")}}>

// //                   </View> */}
// //                   <TextInput
// //                       style={{borderWidth:0.5,marginBottom:20,height:hp("20%"),borderColor:'grey',borderRadius:4,fontSize: wp('4%')}}
// //                       multiline={true}
// //                       numberOfLines={5}
// //                       value={this.state.desc}
// //                       onChangeText={(text) => {this.setState({desc: text})}}
// //                   />
// //                   <TouchableOpacity onPress={() => {this.fetchFirebase()
// //                     // this.props.navigation.navigate("Drawer")
// //                   }}>
// //                   <Image source={require("../assets/Arrow.png")} style={{alignSelf:'center',height:hp("9%")}}/>
// //                   </TouchableOpacity>
// //                   {
// //                         this.state.isMessage ?
// //                         <Text style={{color:'red',fontSize:wp('4%'),alignSelf:'center'}}>
// //                           {this.state.message}
// //                         </Text>
// //                         :

// //                         <Text>
                          
// //                         </Text>
// //                       }
// //             </ScrollView>
// //           </View>
// //           <View style={{flex:0.2,justifyContent:'flex-end',marginLeft:wp('7%'),backgroundColor:"#FFF"}}>

// //             <Text style={{color : '#0290ea',fontSize:wp('2.5%'),marginBottom:wp('5%')}}>
// //             *Details provided by you will not be shared with other users of app.
// //             </Text>

// //           </View>
// //             </View>
// //         )          
// //         }else {
// //           return(
// //             <View style={{flex:1}}>
// //               <View style={{height:hp('8%'),backgroundColor:"#0290ea"}}>
// //                                          <TouchableOpacity onPress={
// //     ()=>{
// //     this.props.navigation.navigate('Drawer') 
// //     console.log("lkjfdh")         
// //     }
// //   }
// //   style={{position:'absolute',top:15,left:10,zIndex:10,height:40,width:40}}
// //   >
// //           <Image
// //   source={require('../assets/back.png')}
// //   style={{position:'absolute',top:3,left:10,zIndex:2,}}
// //   />      
// //   </TouchableOpacity>                    
// //               </View>

// //           <View style={styles.panel}>
// //             <View style={{height:50}}>
// //             {/* <View style={styles.panelHeader}>
// //             </View> */}
// //             </View>
// //             <ScrollView style={{marginLeft:wp("7%"),marginRight:wp("8%")}}>
// //                 <Text style={{fontSize:wp('4.1%')}}>Name *</Text>
// //                 <TextInput 
// //                   style={{height:hp("5%"),fontSize:wp('4%'),marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}  
// //                   onChangeText={(text) => {this.setState({name: text})}}
// //                 />
// //                 <Text style={{fontSize:wp('4.1%')}}>Phone number *</Text>
// //                 <View style={{flexDirection:'row',marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}>
// //                 <Text style={{fontSize:wp('4%'),alignSelf:'center',marginRight:5}}>(+91)</Text>
// //                 <TextInput
// //                   style={{height:hp("6%"),fontSize:wp('4%'),width:hp("60%")}}
// //                   keyboardType="name-phone-pad"
// //                   value={this.props.phonenumberuser}
// //                   editable={false}
// //                   // onChangeText={(text) => {this.setState({phonenumber: text})}}
// //                 />
// //                 </View>
// //                 <Text style={{fontSize:wp('4.1%'),marginBottom:10}}>Category</Text>
// //                 <View style={{ flexDirection: "row",alignItems:'center',justifyContent:'center',marginBottom:20}}>
// //                         <TouchableOpacity onPress={()=>{
// //                             this.setState({category : 'food'})
// //                         }}>
// //                             <View style={{height: hp('6%'), width: wp('25%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',borderRadius:4}}>
// //                                 <Text style={{fontSize: wp('3.1%'),color:"#0290ea" }}>Food Supplies</Text>
// //                             </View>
// //                         </TouchableOpacity>
// //                         <TouchableOpacity onPress={()=>{
// //                             this.setState({category : 'Emotional Support'})
// //                         }}> 
// //                             <View style={{height: hp('6%'), width: wp('30%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:wp("2%"),borderRadius:4}}>
// //                                 <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Emotional Support</Text>
// //                             </View>
// //                         </TouchableOpacity>
// //                         <TouchableOpacity onPress={()=>{
// //                                 this.setState({category : 'other'})
// //                             }}> 
// //                                 <View style={{height: hp('6%'), width: wp('22%'), borderWidth: 0.5, borderColor: "grey" ,alignItems:'center',justifyContent:'center',marginLeft:wp("2%"),borderRadius:4}}>
// //                                     <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Others</Text>
// //                                 </View>
// //                             </TouchableOpacity>
// //               </View>
// //                   <TextInput
// //                       style={{borderWidth:0.5,marginBottom:20,height:hp("20%"),borderColor:'grey',borderRadius:4,fontSize: wp('4%')}}
// //                       multiline={true}
// //                       numberOfLines={5}
// //                       value={this.state.desc}
// //                       onChangeText={(text) => {this.setState({desc: text})}}
// //                   />
// //                   <View style={{justifyContent:'center',alignItems:'center'}}>

                  
// //                   <TouchableOpacity onPress={() => {this.fetchFirebase()
// //                     // this.props.navigation.navigate("Drawer")
// //                   }}
// //                   style={{width:wp('18%'),justifyContent:'center',alignItems:'center'}}
// //                   >
// //                   <Image source={require("../assets/Arrow.png")} style={{alignSelf:'center',height:hp("9%"),width:wp('20%')}}/>
// //                   </TouchableOpacity>
// //                   </View>
// //                   {
// //                         this.state.isMessage ?
// //                         <Text style={{color:'red',fontSize:wp('4%'),alignSelf:'center'}}>
// //                           {this.state.message}
// //                         </Text>
// //                         :

// //                         <Text>
                          
// //                         </Text>
// //                       }
// //             </ScrollView>
// //           </View>
// //             </View>
// //         )
// //         }


// //     }
// // }
// // const mapStateToProps = (state) => {
// //   // console.log(state)
// //   return {
// //     upload_status: state.textUpload,
// //     nameuser: state.nameuser,
// //     phonenumberuser: state.phonenumberuser,
// //     personData: state.personData
// //   }
// // }


// // export default connect(mapStateToProps)(Sos);

// // const styles = {
// //     container: {
// //       flex: 1,
// //       backgroundColor: '#f8f9fa',
// //       alignItems: 'center',
// //       justifyContent: 'center'
// //     },
// //     panel: {
// //       flex: 1,
// //       backgroundColor: 'white',
// //       position: 'relative',
// //       borderTopLeftRadius: 10,
// //       borderTopRightRadius: 10,
// //     },
// //     panelHeader: {
// //       height: 25,
// //       width:wp("10%"),
// //       borderBottomWidth:1,
// //       alignSelf:'center',
// //     },
// //   }


// import React, { Component } from 'react';
// import { Text, View, Image, TextInput, TouchableOpacity, Modal, StyleSheet,ToastAndroid,ScrollView, } from 'react-native';
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
// import * as firebase from 'firebase'
// import { connect } from 'react-redux';

// class Sos extends React.Component{
//     state={
//         name : '',
//         phonenumber:this.props.phonenumberuser,
//         desc:'',
//         category : '',
//         message : '',
//         isMessage : false,
//     }

//     fetchFirebase = () => {
//     console.log("pressed submit")
//     if (this.state.name.length == 0 || this.state.desc.length == 0 || this.state.category == 0) {
//       this.setState({
//         isMessage: true,
//         message: 'Please fill all details!'
//       })
//     } else if (this.state.phonenumber.length != 10) {
//       this.setState({
//         isMessage: true,
//         message: 'Please Enter a 10 digit phone number!'
//       })
//     }
//     else {
//       this.setState({
//         isMessage: false
//       })

//       //if food or other than chatsunderyou mai jis bande ne alert raise ki hai use alerts ke andr bnde ke no. ke andr uska chatroom ki key daal do(no,timestamp)
//       //xyz,1
//       //xyz,2
//       ToastAndroid.show("Emergency created Successfully! ", 800)
//       var timestamp = new Date().getTime();
//       // console.log("time= ",timestamp);

//       var x = this.state.phonenumber + "," + timestamp

//       // console.log("x= ",x);

//       firebase.database().ref('sos/' + x + '/').set({
//         name: this.state.name,
//         phonenumber: this.state.phonenumber,
//         description: this.state.desc,
//         latitude: this.props.navigation.state.params.latitude,
//         longitude: this.props.navigation.state.params.longitude,
//         category: this.state.category,
//         timestamp: timestamp
//         // timestamp:
//       }).then((data) => {
//         console.log("data= ", data)
//         if (this.state.category == "food" || this.state.category == "other") {
//           firebase.database().ref("ChatsUnderYou/alerts/" + this.state.phonenumber + "/" + this.state.phonenumber + "," + timestamp).set({
//             name: this.state.name,
//             description: this.state.desc,
//             phonenumber: this.state.phonenumber,
//             category: this.state.category,
//             counter: 0,
//             timestamp: 0,
//             alerttimestamp: timestamp,
//             softDelete:false,
//           })

//           firebase.database().ref("Participants/"+x+"/"+this.state.phonenumber+"/").set({
//               owner:"true",
//               category:this.state.category,
//               Ownername: this.props.nameuser,
//               name:this.state.name,
//               description: this.state.desc,
//               phonenumber: this.state.phonenumber,
//               alerttimestamp: timestamp,
//               counter: 0,
//               timestamp: 0,
//               phonenumberuser: this.props.phonenumberuser,
//           })

//         }//end of if
//         console.log('Going to HomeScreen from SosMain')


//         this.props.navigation.navigate('Home')

//       }).catch((err) => {
//         console.log(err)
//       }).then(() => {

//       })
//     }

//   }




//     render(){

//         if(this.state.category == 'food'){
//             return(
//                 <View style={{flex:1}}>
//                   <View style={{height:hp('8%'),backgroundColor:"#0290ea"}}>
//                                              <TouchableOpacity onPress={
//         ()=>{
//         this.props.navigation.navigate('Drawer') 
//         console.log("lkjfdh")         
//         }
//       }
//       style={{position:'absolute',top:15,left:10,zIndex:10,height:40,width:40}}
//       >
//               <Image
//       source={require('../assets/back.png')}
//       style={{position:'absolute',top:3,left:10,zIndex:2,}}
//       />      
//       </TouchableOpacity>                    
//                   </View>

//               <View style={styles.panel}>
//                 <View style={{height:50}}>
//                 {/* <View style={styles.panelHeader}>
//                 </View> */}
//                 </View>
//                 <ScrollView style={{marginLeft:wp("7%"),marginRight:wp("8%")}}>
//                     <Text style={{fontSize:wp('4.1%')}}>Name *</Text>
//                     <TextInput 
//                       style={{height:hp("5%"),marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5,fontSize:wp('4%')}}  
//                       onChangeText={(text) => {this.setState({name: text})}}
//                       value={this.state.name}
//                     />
//                     <Text style={{fontSize:wp('4.1%')}}>Phone number *</Text>
//                     <View style={{flexDirection:'row',marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}>
//                     <Text style={{fontSize:wp('4%'),alignSelf:'center',marginRight:5}}>(+91)</Text>
//                     <TextInput
//                       style={{height:hp("6%"),width:hp("60%"),fontSize: wp('4%')}}
//                       keyboardType="name-phone-pad"
//                       // value = {this.state.phonenumber}
//                       value={this.props.phonenumberuser}
//                       editable={false}
//                       // onChangeText={(text) => {this.setState({phonenumber: text})}}
//                     />
//                     </View>
//                     <Text style={{fontSize:wp('4.1%'),marginBottom:10}}>Category</Text>
//                     <View style={{ flexDirection: "row",alignItems:'center',justifyContent:'center',marginBottom:20}}>
//                         <TouchableOpacity onPress={()=>{
//                             this.setState({category : 'food'})
//                         }}>
//                             <View style={{height: hp('6%'), width: wp('25%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',borderRadius:4,backgroundColor:'#c2dff0'}}>
//                                 <Text style={{fontSize: wp('3.1%'),color:"#0290ea" }}>Food Supplies</Text>
//                             </View>
//                         </TouchableOpacity>
//                         <TouchableOpacity onPress={()=>{
//                             this.setState({category : 'Emotional Support'})
//                         }}> 
//                             <View style={{height: hp('6%'), width: wp('30%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:wp("2%"),borderRadius:4}}>
//                                 <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Emotional Support</Text>
//                             </View>
//                         </TouchableOpacity>
//                         <TouchableOpacity onPress={()=>{
//                                 this.setState({category : 'other'})
//                             }}> 
//                                 <View style={{height: hp('6%'), width: wp('22%'), borderWidth: 0.5, borderColor: "grey" ,alignItems:'center',justifyContent:'center',marginLeft:wp("2%"),borderRadius:4}}>
//                                     <Text style={{ fontSize: wp('3.1%'),color:"#0290ea"}}>Others</Text>
//                                 </View>
//                             </TouchableOpacity>
//               </View>
//                       <TextInput
//                           style={{borderWidth:0.5,marginBottom:20,height:hp("20%"),fontSize: wp('4%'),borderColor:'grey',borderRadius:4}}
//                           multiline={true}
//                           numberOfLines={5}
//                           value={this.state.desc}
//                           onChangeText={(text) => {this.setState({desc: text})}}
//                       />
//                       <TouchableOpacity onPress={() => {this.fetchFirebase()
//                         // this.props.navigation.navigate("Drawer")
//                       }}>
//                       <Image source={require("../assets/Arrow.png")} style={{alignSelf:'center',height:hp("9%")}}/>
//                       </TouchableOpacity>
//                       {
//                         this.state.isMessage ?
//                         <Text style={{color:'red',fontSize:wp('4%'),alignSelf:'center'}}>
//                           {this.state.message}
//                         </Text>
//                         :

//                         <Text>
                          
//                         </Text>
//                       }
//                 </ScrollView>
//               </View>
//                 </View>
//             )
//         }else if(this.state.category == 'other'){
//             return(
//                 <View style={{flex:1}}>
//                                     <View style={{height:hp('8%'),backgroundColor:"#0290ea"}}>
//                                              <TouchableOpacity onPress={
//         ()=>{
//         this.props.navigation.navigate('Drawer') 
//         console.log("lkjfdh")         
//         }

//       }
//       style={{position:'absolute',top:15,left:10,zIndex:10,height:40,width:40}}
//       >
//               <Image
//       source={require('../assets/back.png')}
//       style={{position:'absolute',top:3,left:10,zIndex:2,}}
//       />      
//       </TouchableOpacity>                    
//                   </View>
//               <View style={styles.panel}>
//                 <View style={{height:50}}>
//                 {/* <View style={styles.panelHeader}>
//                 </View> */}
//                 </View>
//                 <ScrollView style={{marginLeft:wp("7%"),marginRight:wp("8%")}}>
//                     <Text style={{fontSize:wp('4.1%')}}>Name *</Text>
//                     <TextInput 
//                       style={{height:hp("5%"),fontSize:wp('4%'),marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}  
//                       value={this.state.name}
//                       onChangeText={(text) => {this.setState({name: text})}}
//                     />
//                     <Text style={{fontSize:wp('4.1%')}}>Phone number *</Text>
//                     <View style={{flexDirection:'row',marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}>
//                     <Text style={{fontSize:wp('4%'),alignSelf:'center',marginRight:5}}>(+91)</Text>
//                     <TextInput
//                       style={{height:hp("6%"),fontSize:wp('4%'),width:hp("60%")}}
//                       keyboardType="name-phone-pad"
//                       value={this.props.phonenumberuser}
//                       editable={false}
//                       // onChangeText={(text) => {this.setState({phonenumber: text})}}
//                     />
//                     </View>
//                     <Text style={{fontSize:wp('4.1%'),marginBottom:10}}>Category</Text>
//                     <View style={{ flexDirection: "row",alignItems:'center',justifyContent:'center',marginBottom:20}}>
//                         <TouchableOpacity onPress={()=>{
//                             this.setState({category : 'food'})
//                         }}>
//                             <View style={{height: hp('6%'), width: wp('25%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',borderRadius:4}}>
//                                 <Text style={{fontSize: wp('3.1%'),color:"#0290ea" }}>Food Supplies</Text>
//                             </View>
//                         </TouchableOpacity>
//                         <TouchableOpacity onPress={()=>{
//                             this.setState({category : 'Emotional Support'})
//                         }}> 
//                             <View style={{height: hp('6%'), width: wp('30%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:wp("2%"),borderRadius:4}}>
//                                 <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Emotional Support</Text>
//                             </View>
//                         </TouchableOpacity>
//                         <TouchableOpacity onPress={()=>{
//                                 this.setState({category : 'other'})
//                             }}> 
//                                 <View style={{height: hp('6%'), width: wp('22%'), borderWidth: 0.5, borderColor: "grey" ,alignItems:'center',justifyContent:'center',marginLeft:wp("2%"),borderRadius:4,backgroundColor:'#c2dff0'}}>
//                                     <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Others</Text>
//                                 </View>
//                             </TouchableOpacity>
//               </View>
//                       <TextInput
//                           style={{borderWidth:0.5,marginBottom:20,height:hp("20%"),borderColor:'grey',borderRadius:4,fontSize: wp('4%')}}
//                           multiline={true}
//                           value={this.state.desc}
//                           numberOfLines={5}
//                           onChangeText={(text) => {this.setState({desc: text})}}
//                       />
//                       <TouchableOpacity onPress={() => this.fetchFirebase()}>
//                       <Image source={require("../assets/Arrow.png")} style={{alignSelf:'center',height:hp("9%")}}/>
//                       </TouchableOpacity>
//                       {
//                         this.state.isMessage ?
//                         <Text style={{color:'red',fontSize:wp('4%'),alignSelf:'center'}}>
//                           {this.state.message}
//                         </Text>
//                         :

//                         <Text>
                          
//                         </Text>
//                       }
//                 </ScrollView>
//               </View>
//                 </View>
//             )           
//         }else if(this.state.category == "Emotional Support"){
//           return(
//             <View style={{flex:1,backgroundColor:"#FFF"}}>
//               <View style={{height:hp('8%'),backgroundColor:"#0290ea"}}>
//                                          <TouchableOpacity onPress={
//     ()=>{
//     this.props.navigation.navigate('Drawer') 
//     console.log("lkjfdh")         
//     }
//   }
//   style={{position:'absolute',top:15,left:10,zIndex:10,height:40,width:40}}
//   >
//           <Image
//   source={require('../assets/back.png')}
//   style={{position:'absolute',top:3,left:10,zIndex:2,}}
//   />      
//   </TouchableOpacity>                    
//               </View>

//           <View style={{flex:0.8,backgroundColor:"#FFF"}}>
//             <View style={{height:50}}>
//             {/* <View style={styles.panelHeader}>
//             </View> */}
//             </View>
//             <ScrollView style={{marginLeft:wp("7%"),marginRight:wp("8%")}}>
//                 <Text style={{fontSize:wp('4.1%')}}>Name *</Text>
//                 <TextInput 
//                   style={{height:hp("5%"),fontSize:wp('4%'),marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}  
//                   onChangeText={(text) => {this.setState({name: text})}}
//                   value={this.state.name}
//                 />
//                 <Text style={{fontSize:wp('4.1%')}}>Phone number *</Text>
//                 <View style={{flexDirection:'row',marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}>
//                 <Text style={{fontSize:wp('4%'),alignSelf:'center',marginRight:5}}>(+91)</Text>
//                 <TextInput
//                   style={{height:hp("6%"),fontSize:wp('4%'),width:hp("60%")}}
//                   keyboardType="name-phone-pad"
//                   value={this.props.phonenumberuser}
//                   editable={false}
//                   // onChangeText={(text) => {this.setState({phonenumber: text})}}
//                 />
//                 </View>
//                 <Text style={{fontSize:wp('4.1%'),marginBottom:10}}>Category</Text>
//                   <View style={{ flexDirection: "row",marginBottom:20,alignItems:'center',justifyContent:'center'}}>
//                         <TouchableOpacity onPress={()=>{
//                             this.setState({category : 'food'})
//                         }}>
//                             <View style={{height: hp('6%'), width: wp('25%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',borderRadius:4}}>
//                                 <Text style={{fontSize: wp('3.1%'),color:"#0290ea" }}>Food Supplies</Text>
//                             </View>
//                         </TouchableOpacity>
//                         <TouchableOpacity onPress={()=>{
//                             this.setState({category : 'Emotional Support'})
//                         }}> 
//                             <View style={{height: hp('6%'), width: wp('30%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:wp("2%"),borderRadius:4,backgroundColor:'#c2dff0'}}>
//                                 <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Emotional Support</Text>
//                             </View>
//                         </TouchableOpacity>
//                         <TouchableOpacity onPress={()=>{
//                                 this.setState({category : 'other'})
//                             }}> 
//                                 <View style={{height: hp('6%'), width: wp('22%'), borderWidth: 0.5, borderColor: "grey" ,alignItems:'center',justifyContent:'center',marginLeft:wp("2%"),borderRadius:4}}>
//                                     <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Others</Text>
//                                 </View>
//                             </TouchableOpacity>
//               </View>
//               {/* <View style={{justifyContent:'center',alignItems:'center',marginBottom:20,height:hp("5%")}}>

//                   </View> */}
//                   <TextInput
//                       style={{borderWidth:0.5,marginBottom:20,height:hp("20%"),borderColor:'grey',borderRadius:4,fontSize: wp('4%')}}
//                       multiline={true}
//                       numberOfLines={5}
//                       value={this.state.desc}
//                       onChangeText={(text) => {this.setState({desc: text})}}
//                   />
//                   <TouchableOpacity onPress={() => {this.fetchFirebase()
//                     // this.props.navigation.navigate("Drawer")
//                   }}>
//                   <Image source={require("../assets/Arrow.png")} style={{alignSelf:'center',height:hp("9%")}}/>
//                   </TouchableOpacity>
//                   {
//                         this.state.isMessage ?
//                         <Text style={{color:'red',fontSize:wp('4%'),alignSelf:'center'}}>
//                           {this.state.message}
//                         </Text>
//                         :

//                         <Text>
                          
//                         </Text>
//                       }
//             </ScrollView>
//           </View>
//           <View style={{flex:0.2,justifyContent:'flex-end',marginLeft:wp('7%'),backgroundColor:"#FFF"}}>

//             <Text style={{color : '#0290ea',fontSize:wp('2.5%'),marginBottom:wp('5%')}}>
//             *Details provided by you will not be shared with other users of app.
//             </Text>

//           </View>
//             </View>
//         )          
//         }else {
//           return(
//             <View style={{flex:1}}>
//               <View style={{height:hp('8%'),backgroundColor:"#0290ea"}}>
//                                          <TouchableOpacity onPress={
//     ()=>{
//     this.props.navigation.navigate('Drawer') 
//     console.log("lkjfdh")         
//     }
//   }
//   style={{position:'absolute',top:15,left:10,zIndex:10,height:40,width:40}}
//   >
//           <Image
//   source={require('../assets/back.png')}
//   style={{position:'absolute',top:3,left:10,zIndex:2,}}
//   />      
//   </TouchableOpacity>                    
//               </View>

//           <View style={styles.panel}>
//             <View style={{height:50}}>
//             {/* <View style={styles.panelHeader}>
//             </View> */}
//             </View>
//             <ScrollView style={{marginLeft:wp("7%"),marginRight:wp("8%")}}>
//                 <Text style={{fontSize:wp('4.1%')}}>Name *</Text>
//                 <TextInput 
//                   style={{height:hp("5%"),fontSize:wp('4%'),marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}  
//                   onChangeText={(text) => {this.setState({name: text})}}
//                 />
//                 <Text style={{fontSize:wp('4.1%')}}>Phone number *</Text>
//                 <View style={{flexDirection:'row',marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}>
//                 <Text style={{fontSize:wp('4%'),alignSelf:'center',marginRight:5}}>(+91)</Text>
//                 <TextInput
//                   style={{height:hp("6%"),fontSize:wp('4%'),width:hp("60%")}}
//                   keyboardType="name-phone-pad"
//                   value={this.props.phonenumberuser}
//                   editable={false}
//                   // onChangeText={(text) => {this.setState({phonenumber: text})}}
//                 />
//                 </View>
//                 <Text style={{fontSize:wp('4.1%'),marginBottom:10}}>Category</Text>
//                 <View style={{ flexDirection: "row",alignItems:'center',justifyContent:'center',marginBottom:20}}>
//                         <TouchableOpacity onPress={()=>{
//                             this.setState({category : 'food'})
//                         }}>
//                             <View style={{height: hp('6%'), width: wp('25%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',borderRadius:4}}>
//                                 <Text style={{fontSize: wp('3.1%'),color:"#0290ea" }}>Food Supplies</Text>
//                             </View>
//                         </TouchableOpacity>
//                         <TouchableOpacity onPress={()=>{
//                             this.setState({category : 'Emotional Support'})
//                         }}> 
//                             <View style={{height: hp('6%'), width: wp('30%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:wp("2%"),borderRadius:4}}>
//                                 <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Emotional Support</Text>
//                             </View>
//                         </TouchableOpacity>
//                         <TouchableOpacity onPress={()=>{
//                                 this.setState({category : 'other'})
//                             }}> 
//                                 <View style={{height: hp('6%'), width: wp('22%'), borderWidth: 0.5, borderColor: "grey" ,alignItems:'center',justifyContent:'center',marginLeft:wp("2%"),borderRadius:4}}>
//                                     <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Others</Text>
//                                 </View>
//                             </TouchableOpacity>
//               </View>
//                   <TextInput
//                       style={{borderWidth:0.5,marginBottom:20,height:hp("20%"),borderColor:'grey',borderRadius:4,fontSize: wp('4%')}}
//                       multiline={true}
//                       numberOfLines={5}
//                       value={this.state.desc}
//                       onChangeText={(text) => {this.setState({desc: text})}}
//                   />
//                   <View style={{justifyContent:'center',alignItems:'center'}}>

                  
//                   <TouchableOpacity onPress={() => {this.fetchFirebase()
//                     // this.props.navigation.navigate("Drawer")
//                   }}
//                   style={{width:wp('18%'),justifyContent:'center',alignItems:'center'}}
//                   >
//                   <Image source={require("../assets/Arrow.png")} style={{alignSelf:'center',height:hp("9%"),width:wp('20%')}}/>
//                   </TouchableOpacity>
//                   </View>
//                   {
//                         this.state.isMessage ?
//                         <Text style={{color:'red',fontSize:wp('4%'),alignSelf:'center'}}>
//                           {this.state.message}
//                         </Text>
//                         :

//                         <Text>
                          
//                         </Text>
//                       }
//             </ScrollView>
//           </View>
//             </View>
//         )
//         }


//     }
// }
// const mapStateToProps = (state) => {
//   // console.log(state)
//   return {
//     upload_status: state.textUpload,
//     nameuser: state.nameuser,
//     phonenumberuser: state.phonenumberuser,
//     personData: state.personData
//   }
// }


// export default connect(mapStateToProps)(Sos);

// const styles = {
//     container: {
//       flex: 1,
//       backgroundColor: '#f8f9fa',
//       alignItems: 'center',
//       justifyContent: 'center'
//     },
//     panel: {
//       flex: 1,
//       backgroundColor: 'white',
//       position: 'relative',
//       borderTopLeftRadius: 10,
//       borderTopRightRadius: 10,
//     },
//     panelHeader: {
//       height: 25,
//       width:wp("10%"),
//       borderBottomWidth:1,
//       alignSelf:'center',
//     },
//   }



import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Modal, StyleSheet,ToastAndroid,ScrollView, } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import * as firebase from 'firebase'
import { connect } from 'react-redux';

class Sos extends React.Component{
    state={
        name : '',
        phonenumber:this.props.phonenumberuser,
        desc:'',
        category : '',
        message : '',
        isMessage : false,
    }

    fetchFirebase = () => {
    console.log("pressed submit")
    if (this.state.name.length == 0 || this.state.desc.length == 0 || this.state.category == 0) {
      this.setState({
        isMessage: true,
        message: 'Please fill all details!'
      })
    } else if (this.state.phonenumber.length != 10) {
      this.setState({
        isMessage: true,
        message: 'Please Enter a 10 digit phone number!'
      })
    }
    else {
      this.setState({
        isMessage: false
      })

      //if food or other than chatsunderyou mai jis bande ne alert raise ki hai use alerts ke andr bnde ke no. ke andr uska chatroom ki key daal do(no,timestamp)
      //xyz,1
      //xyz,2
      ToastAndroid.show("Emergency created Successfully! ", 800)
      var timestamp = new Date().getTime();
      // console.log("time= ",timestamp);

      var x = this.state.phonenumber + "," + timestamp

      // console.log("x= ",x);

      firebase.database().ref('sos/' + x + '/').set({
        name: this.state.name,
        phonenumber: this.state.phonenumber,
        description: this.state.desc,
        latitude: this.props.navigation.state.params.latitude,
        longitude: this.props.navigation.state.params.longitude,
        category: this.state.category,
        timestamp: timestamp,
        city: this.props.usercity,
        // timestamp:
      }).then((data) => {
        console.log("data= ", data)
        if (this.state.category == "food" || this.state.category == "other") {
          firebase.database().ref("ChatsUnderYou/alerts/" + this.state.phonenumber + "/" + this.state.phonenumber + "," + timestamp).set({
            name: this.state.name,
            description: this.state.desc,
            phonenumber: this.state.phonenumber,
            category: this.state.category,
            counter: 0,
            timestamp: 0,
            alerttimestamp: timestamp,
            softDelete:false,
          })

          firebase.database().ref("Participants/"+x+"/"+this.state.phonenumber+"/").set({
              owner:"true",
              category:this.state.category,
              Ownername: this.props.nameuser,
              name:this.state.name,
              description: this.state.desc,
              phonenumber: this.state.phonenumber,
              alerttimestamp: timestamp,
              counter: 0,
              timestamp: 0,
              phonenumberuser: this.props.phonenumberuser,
          })

        }//end of if
        console.log('Going to HomeScreen from SosMain')


        this.props.navigation.navigate('Home')

      }).catch((err) => {
        console.log(err)
      }).then(() => {

      })
    }

  }




    render(){

        if(this.state.category == 'food'){
            return(
                <View style={{flex:1}}>
                  <View style={{height:hp('8%'),backgroundColor:"#0290ea"}}>
                                             <TouchableOpacity onPress={
        ()=>{
        this.props.navigation.navigate('Drawer') 
        console.log("lkjfdh")         
        }
      }
      style={{position:'absolute',top:15,left:10,zIndex:10,height:40,width:40}}
      >
              <Image
      source={require('../assets/back.png')}
      style={{position:'absolute',top:3,left:10,zIndex:2,}}
      />      
      </TouchableOpacity>                    
                  </View>

              <View style={styles.panel}>
                <View style={{height:50}}>
                {/* <View style={styles.panelHeader}>
                </View> */}
                </View>
                <ScrollView style={{marginLeft:wp("7%"),marginRight:wp("8%")}}>
                    <Text style={{fontSize:wp('4.1%')}}>Name *</Text>
                    <TextInput 
                      style={{height:hp("5%"),marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5,fontSize:wp('4%')}}  
                      onChangeText={(text) => {this.setState({name: text})}}
                      value={this.state.name}
                    />
                    <Text style={{fontSize:wp('4.1%')}}>Phone number *</Text>
                    <View style={{flexDirection:'row',marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}>
                    <Text style={{fontSize:wp('4%'),alignSelf:'center',marginRight:5}}>(+91)</Text>
                    <TextInput
                      style={{height:hp("6%"),width:hp("60%"),fontSize: wp('4%')}}
                      keyboardType="name-phone-pad"
                      // value = {this.state.phonenumber}
                      value={this.props.phonenumberuser}
                      editable={false}
                      // onChangeText={(text) => {this.setState({phonenumber: text})}}
                    />
                    </View>
                    <Text style={{fontSize:wp('4.1%'),marginBottom:10}}>Category</Text>
                    <View style={{ flexDirection: "row",alignItems:'center',justifyContent:'center',marginBottom:20}}>
                        <TouchableOpacity onPress={()=>{
                            this.setState({category : 'food'})
                        }}>
                            <View style={{height: hp('6%'), width: wp('25%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',borderRadius:4,backgroundColor:'#c2dff0'}}>
                                <Text style={{fontSize: wp('3.1%'),color:"#0290ea" }}>Food Supplies</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            this.setState({category : 'Emotional Support'})
                        }}> 
                            <View style={{height: hp('6%'), width: wp('30%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:wp("2%"),borderRadius:4}}>
                                <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Emotional Support</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                                this.setState({category : 'other'})
                            }}> 
                                <View style={{height: hp('6%'), width: wp('22%'), borderWidth: 0.5, borderColor: "grey" ,alignItems:'center',justifyContent:'center',marginLeft:wp("2%"),borderRadius:4}}>
                                    <Text style={{ fontSize: wp('3.1%'),color:"#0290ea"}}>Others</Text>
                                </View>
                            </TouchableOpacity>
              </View>
                      <TextInput
                          style={{borderWidth:0.5,marginBottom:20,height:hp("20%"),fontSize: wp('4%'),borderColor:'grey',borderRadius:4}}
                          multiline={true}
                          numberOfLines={5}
                          value={this.state.desc}
                          onChangeText={(text) => {this.setState({desc: text})}}
                      />
                      <TouchableOpacity onPress={() => {this.fetchFirebase()
                        // this.props.navigation.navigate("Drawer")
                      }}>
                      <Image source={require("../assets/Arrow.png")} style={{alignSelf:'center',height:hp("9%")}}/>
                      </TouchableOpacity>
                      {
                        this.state.isMessage ?
                        <Text style={{color:'red',fontSize:wp('4%'),alignSelf:'center'}}>
                          {this.state.message}
                        </Text>
                        :

                        <Text>
                          
                        </Text>
                      }
                </ScrollView>
              </View>
                </View>
            )
        }else if(this.state.category == 'other'){
            return(
                <View style={{flex:1}}>
                                    <View style={{height:hp('8%'),backgroundColor:"#0290ea"}}>
                                             <TouchableOpacity onPress={
        ()=>{
        this.props.navigation.navigate('Drawer') 
        console.log("lkjfdh")         
        }

      }
      style={{position:'absolute',top:15,left:10,zIndex:10,height:40,width:40}}
      >
              <Image
      source={require('../assets/back.png')}
      style={{position:'absolute',top:3,left:10,zIndex:2,}}
      />      
      </TouchableOpacity>                    
                  </View>
              <View style={styles.panel}>
                <View style={{height:50}}>
                {/* <View style={styles.panelHeader}>
                </View> */}
                </View>
                <ScrollView style={{marginLeft:wp("7%"),marginRight:wp("8%")}}>
                    <Text style={{fontSize:wp('4.1%')}}>Name *</Text>
                    <TextInput 
                      style={{height:hp("5%"),fontSize:wp('4%'),marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}  
                      value={this.state.name}
                      onChangeText={(text) => {this.setState({name: text})}}
                    />
                    <Text style={{fontSize:wp('4.1%')}}>Phone number *</Text>
                    <View style={{flexDirection:'row',marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}>
                    <Text style={{fontSize:wp('4%'),alignSelf:'center',marginRight:5}}>(+91)</Text>
                    <TextInput
                      style={{height:hp("6%"),fontSize:wp('4%'),width:hp("60%")}}
                      keyboardType="name-phone-pad"
                      value={this.props.phonenumberuser}
                      editable={false}
                      // onChangeText={(text) => {this.setState({phonenumber: text})}}
                    />
                    </View>
                    <Text style={{fontSize:wp('4.1%'),marginBottom:10}}>Category</Text>
                    <View style={{ flexDirection: "row",alignItems:'center',justifyContent:'center',marginBottom:20}}>
                        <TouchableOpacity onPress={()=>{
                            this.setState({category : 'food'})
                        }}>
                            <View style={{height: hp('6%'), width: wp('25%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',borderRadius:4}}>
                                <Text style={{fontSize: wp('3.1%'),color:"#0290ea" }}>Food Supplies</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            this.setState({category : 'Emotional Support'})
                        }}> 
                            <View style={{height: hp('6%'), width: wp('30%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:wp("2%"),borderRadius:4}}>
                                <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Emotional Support</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                                this.setState({category : 'other'})
                            }}> 
                                <View style={{height: hp('6%'), width: wp('22%'), borderWidth: 0.5, borderColor: "grey" ,alignItems:'center',justifyContent:'center',marginLeft:wp("2%"),borderRadius:4,backgroundColor:'#c2dff0'}}>
                                    <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Others</Text>
                                </View>
                            </TouchableOpacity>
              </View>
                      <TextInput
                          style={{borderWidth:0.5,marginBottom:20,height:hp("20%"),borderColor:'grey',borderRadius:4,fontSize: wp('4%')}}
                          multiline={true}
                          value={this.state.desc}
                          numberOfLines={5}
                          onChangeText={(text) => {this.setState({desc: text})}}
                      />
                      <TouchableOpacity onPress={() => this.fetchFirebase()}>
                      <Image source={require("../assets/Arrow.png")} style={{alignSelf:'center',height:hp("9%")}}/>
                      </TouchableOpacity>
                      {
                        this.state.isMessage ?
                        <Text style={{color:'red',fontSize:wp('4%'),alignSelf:'center'}}>
                          {this.state.message}
                        </Text>
                        :

                        <Text>
                          
                        </Text>
                      }
                </ScrollView>
              </View>
                </View>
            )           
        }else if(this.state.category == "Emotional Support"){
          return(
            <View style={{flex:1,backgroundColor:"#FFF"}}>
              <View style={{height:hp('8%'),backgroundColor:"#0290ea"}}>
                                         <TouchableOpacity onPress={
    ()=>{
    this.props.navigation.navigate('Drawer') 
    console.log("lkjfdh")         
    }
  }
  style={{position:'absolute',top:15,left:10,zIndex:10,height:40,width:40}}
  >
          <Image
  source={require('../assets/back.png')}
  style={{position:'absolute',top:3,left:10,zIndex:2,}}
  />      
  </TouchableOpacity>                    
              </View>

          <View style={{flex:0.8,backgroundColor:"#FFF"}}>
            <View style={{height:50}}>
            {/* <View style={styles.panelHeader}>
            </View> */}
            </View>
            <ScrollView style={{marginLeft:wp("7%"),marginRight:wp("8%")}}>
                <Text style={{fontSize:wp('4.1%')}}>Name *</Text>
                <TextInput 
                  style={{height:hp("5%"),fontSize:wp('4%'),marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}  
                  onChangeText={(text) => {this.setState({name: text})}}
                  value={this.state.name}
                />
                <Text style={{fontSize:wp('4.1%')}}>Phone number *</Text>
                <View style={{flexDirection:'row',marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}>
                <Text style={{fontSize:wp('4%'),alignSelf:'center',marginRight:5}}>(+91)</Text>
                <TextInput
                  style={{height:hp("6%"),fontSize:wp('4%'),width:hp("60%")}}
                  keyboardType="name-phone-pad"
                  value={this.props.phonenumberuser}
                  editable={false}
                  // onChangeText={(text) => {this.setState({phonenumber: text})}}
                />
                </View>
                <Text style={{fontSize:wp('4.1%'),marginBottom:10}}>Category</Text>
                  <View style={{ flexDirection: "row",marginBottom:20,alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity onPress={()=>{
                            this.setState({category : 'food'})
                        }}>
                            <View style={{height: hp('6%'), width: wp('25%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',borderRadius:4}}>
                                <Text style={{fontSize: wp('3.1%'),color:"#0290ea" }}>Food Supplies</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            this.setState({category : 'Emotional Support'})
                        }}> 
                            <View style={{height: hp('6%'), width: wp('30%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:wp("2%"),borderRadius:4,backgroundColor:'#c2dff0'}}>
                                <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Emotional Support</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                                this.setState({category : 'other'})
                            }}> 
                                <View style={{height: hp('6%'), width: wp('22%'), borderWidth: 0.5, borderColor: "grey" ,alignItems:'center',justifyContent:'center',marginLeft:wp("2%"),borderRadius:4}}>
                                    <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Others</Text>
                                </View>
                            </TouchableOpacity>
              </View>
              {/* <View style={{justifyContent:'center',alignItems:'center',marginBottom:20,height:hp("5%")}}>

                  </View> */}
                  <TextInput
                      style={{borderWidth:0.5,marginBottom:20,height:hp("20%"),borderColor:'grey',borderRadius:4,fontSize: wp('4%')}}
                      multiline={true}
                      numberOfLines={5}
                      value={this.state.desc}
                      onChangeText={(text) => {this.setState({desc: text})}}
                  />
                  <TouchableOpacity onPress={() => {this.fetchFirebase()
                    // this.props.navigation.navigate("Drawer")
                  }}>
                  <Image source={require("../assets/Arrow.png")} style={{alignSelf:'center',height:hp("9%")}}/>
                  </TouchableOpacity>
                  {
                        this.state.isMessage ?
                        <Text style={{color:'red',fontSize:wp('4%'),alignSelf:'center'}}>
                          {this.state.message}
                        </Text>
                        :

                        <Text>
                          
                        </Text>
                      }
            </ScrollView>
          </View>
          <View style={{flex:0.2,justifyContent:'flex-end',marginLeft:wp('7%'),backgroundColor:"#FFF"}}>

            <Text style={{color : '#0290ea',fontSize:wp('2.5%'),marginBottom:wp('5%')}}>
            *Details provided by you will not be shared with other users of app.
            </Text>

          </View>
            </View>
        )          
        }else {
          return(
            <View style={{flex:1}}>
              <View style={{height:hp('8%'),backgroundColor:"#0290ea"}}>
                                         <TouchableOpacity onPress={
    ()=>{
    this.props.navigation.navigate('Drawer') 
    console.log("lkjfdh")         
    }
  }
  style={{position:'absolute',top:15,left:10,zIndex:10,height:40,width:40}}
  >
          <Image
  source={require('../assets/back.png')}
  style={{position:'absolute',top:3,left:10,zIndex:2,}}
  />      
  </TouchableOpacity>                    
              </View>

          <View style={styles.panel}>
            <View style={{height:50}}>
            {/* <View style={styles.panelHeader}>
            </View> */}
            </View>
            <ScrollView style={{marginLeft:wp("7%"),marginRight:wp("8%")}}>
                <Text style={{fontSize:wp('4.1%')}}>Name *</Text>
                <TextInput 
                  style={{height:hp("5%"),fontSize:wp('4%'),marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}  
                  onChangeText={(text) => {this.setState({name: text})}}
                />
                <Text style={{fontSize:wp('4.1%')}}>Phone number *</Text>
                <View style={{flexDirection:'row',marginBottom:10,borderBottomColor:'grey',borderBottomWidth:0.5}}>
                <Text style={{fontSize:wp('4%'),alignSelf:'center',marginRight:5}}>(+91)</Text>
                <TextInput
                  style={{height:hp("6%"),fontSize:wp('4%'),width:hp("60%")}}
                  keyboardType="name-phone-pad"
                  value={this.props.phonenumberuser}
                  editable={false}
                  // onChangeText={(text) => {this.setState({phonenumber: text})}}
                />
                </View>
                <Text style={{fontSize:wp('4.1%'),marginBottom:10}}>Category</Text>
                <View style={{ flexDirection: "row",alignItems:'center',justifyContent:'center',marginBottom:20}}>
                        <TouchableOpacity onPress={()=>{
                            this.setState({category : 'food'})
                        }}>
                            <View style={{height: hp('6%'), width: wp('25%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',borderRadius:4}}>
                                <Text style={{fontSize: wp('3.1%'),color:"#0290ea" }}>Food Supplies</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            this.setState({category : 'Emotional Support'})
                        }}> 
                            <View style={{height: hp('6%'), width: wp('30%'), borderWidth: 0.5, borderColor: "grey" ,justifyContent:'center',alignItems:'center',marginLeft:wp("2%"),borderRadius:4}}>
                                <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Emotional Support</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                                this.setState({category : 'other'})
                            }}> 
                                <View style={{height: hp('6%'), width: wp('22%'), borderWidth: 0.5, borderColor: "grey" ,alignItems:'center',justifyContent:'center',marginLeft:wp("2%"),borderRadius:4}}>
                                    <Text style={{fontSize: wp('3.1%'),color:"#0290ea"}}>Others</Text>
                                </View>
                            </TouchableOpacity>
              </View>
                  <TextInput
                      style={{borderWidth:0.5,marginBottom:20,height:hp("20%"),borderColor:'grey',borderRadius:4,fontSize: wp('4%')}}
                      multiline={true}
                      numberOfLines={5}
                      value={this.state.desc}
                      onChangeText={(text) => {this.setState({desc: text})}}
                  />
                  <View style={{justifyContent:'center',alignItems:'center'}}>

                  
                  <TouchableOpacity onPress={() => {this.fetchFirebase()
                    // this.props.navigation.navigate("Drawer")
                  }}
                  style={{width:wp('18%'),justifyContent:'center',alignItems:'center'}}
                  >
                  <Image source={require("../assets/Arrow.png")} style={{alignSelf:'center',height:hp("9%"),width:wp('20%')}}/>
                  </TouchableOpacity>
                  </View>
                  {
                        this.state.isMessage ?
                        <Text style={{color:'red',fontSize:wp('4%'),alignSelf:'center'}}>
                          {this.state.message}
                        </Text>
                        :

                        <Text>
                          
                        </Text>
                      }
            </ScrollView>
          </View>
            </View>
        )
        }


    }
}
const mapStateToProps = (state) => {
  // console.log(state)
  return {
    upload_status: state.textUpload,
    nameuser: state.nameuser,
    phonenumberuser: state.phonenumberuser,
    personData: state.personData,
    usercity: state.user_city
  }
}


export default connect(mapStateToProps)(Sos);

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#f8f9fa',
      alignItems: 'center',
      justifyContent: 'center'
    },
    panel: {
      flex: 1,
      backgroundColor: 'white',
      position: 'relative',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    panelHeader: {
      height: 25,
      width:wp("10%"),
      borderBottomWidth:1,
      alignSelf:'center',
    },
  }