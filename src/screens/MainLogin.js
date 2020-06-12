// // import React,{Component} from 'react';
// // import { StyleSheet,Image,TouchableOpacity, Text, View,TextInput, KeyboardAvoidingView,BackHandler } from 'react-native';
// // import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
// // import { connect } from 'react-redux';


// // class MainLoginScreen extends Component {
// //   state ={
// //     phone:'',
// //     islength: true,
// //     isclicked: false,
// //     prefix : '+91'
// //   }

// //   handleBackButton = ()=>{
// //     this.props.navigation.navigate('Login')
// //     return true;
// //   }
// //   componentDidMount(){
// //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
// //   }
// //   render(){

// //   return (
// //     <KeyboardAvoidingView style={styles.container}>
// //       <KeyboardAvoidingView behavior="padding" enabled style={{flex:1}}>
// //       <TouchableOpacity onPress={
// //         ()=>{
// //         this.props.navigation.navigate('Login') 
// //         console.log("lkjfdh")         
// //         }

// //       }
// //       style={{position:'absolute',top:15,left:10,zIndex:10,height:40,width:40}}
// //       >
// //               <Image
// //       source={require('../assets/back.png')}
// //       style={{position:'absolute',top:15,left:10,zIndex:2,}}
// //       />      
// //       </TouchableOpacity>
// //       <View style={styles.upperPart}>
// //         <View style={styles.imgcont}>
// //         <Image source={require("../assets/png.png")} style={styles.logo}/>
// //         </View>
// //       </View>
// //       <View style={styles.lowerPart}>
// //         <View style={{flex:1}}>
// //         <View style={{height:hp("8%"),justifyContent:'flex-end',marginLeft:hp("3.5%")}}>
// //           <Text style={{fontSize:24,color:'grey'}}>Lets get going</Text>
// //         </View>
// //         <View style={{height:hp("10%"),justifyContent:'center',alignItems:'center',flexDirection:'row',marginLeft:wp("6%"),marginRight:wp("4%")}}>
// //           {/* <Text style={{fontSize:19,color:"grey"}}>+91- </Text> */}
// //           <TextInput 
// //             style={{width:wp('10%'),height:hp('7%'),fontSize:16,borderBottomWidth: 1,borderBottomColor: "#ebebeb",color:'grey'}}
// //             // keyboardType="phone-pad"     

// //             placeholderTextColor="grey"
// //             value = {this.state.prefix}
// //             onChangeText={(text)=>{
// //               // this.props.dispatch({type: 'UPDATE_PHONE', text: text})
// //               this.setState({
// //                 prefix : text
// //               })
// //             }}
// //           />
// //           <TextInput 
// //             style={styles.phoneInput}
// //             // keyboardType="phone-pad"  
// //             placeholder="Phone no:"     
// //             placeholderTextColor="grey"
// //             autoFocus = {true}
// //             onChangeText={(text)=>{
// //               this.props.dispatch({type: 'UPDATE_PHONE', text: text})
// //               this.setState({
// //                 phone : text
// //               })
// //             }}
// //           />
// //           <TouchableOpacity>
// //             <Image source={require("../assets/PhoneGray.png")} style={styles.phone}/>
// //           </TouchableOpacity>
// //         </View>
// //         {
// //           this.state.islength ?<Text style={{fontSize:12}}></Text> :
// //         <Text style={{marginLeft : wp('6%'),color:'red',fontSize:12}}>Phone Number should be of 10 digits</Text>          
// //         }
// //         <View style={{height:hp("10%"),flexDirection:'row',justifyContent:'space-between'}}>
// //           <View style={{marginTop:hp("2%")}}>
// //           <Text style={{fontSize:14,marginLeft:hp('3.5%')}}>I agree to recieve notifications</Text>
// //           <Text style={{fontSize:14,marginLeft:hp('3.5%')}}>on my mobile</Text>
// //           </View>
// //           <TouchableOpacity onPress={()=>{
// //             this.setState({
// //               isclicked : true
// //             })
// //             if(this.state.phone.length == 10){
// //               this.props.navigation.navigate('Password',{phone : this.state.phone})  
// //               this.props.dispatch({type: 'UPLOAD_TEXT_DONE'})            
// //             }else{
// //               this.setState({
// //                 islength : false
// //               })
// //             }
// //           }}>
// //             <Image source={require("../assets/nect-page-arrow.png")} style={{height: hp("9%"),
// //                width: wp("20%"),marginTop:hp("0.8%")}}
// //             />
// //             {/* <Text>Hey</Text> */}
// //           </TouchableOpacity>
// //         </View>
// //         </View>
// //       </View>
// //       </KeyboardAvoidingView>
// //     </KeyboardAvoidingView>
// //   );
// // }
// // }

// // const mapStateToProps = (state) =>{
// //   return {
// //     upload_status : state.textUpload, 
// //   }
// // }  
// // export default connect(mapStateToProps)(MainLoginScreen)

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// //   upperPart: {
// //     flex:0.6,
// //     backgroundColor:'#0091EA',
// //   },
// //   LowerPart: {
// //     flex:0.4,
// //     width:'100%',
// //     backgroundColor:'#E1F5FE',
// //   },
// //   imgcont: {
// //     height:hp("60%"),
// //     flex:1,
// //     justifyContent:'center',
// //     alignItems:'center',
// //   },
// //   phone: {
// //     height: hp("3%"),
// //     width: wp("6%"),
// //     marginLeft:8
// //   },
// //   phoneInput: {
// //     height: hp("7%"),
// //     width: wp("70%"),
// //     fontSize:16,
// //     color:'grey',
// //     borderBottomWidth: 1,
// //   borderBottomColor: "#ebebeb",
// //   },
// //   icongoogle: {
// //     height: hp("6%"),
// //     width: wp("10%"),
// //     margin: wp("3%")
// //   },
// //   iconfacebook: {
// //     height: hp("6%"),
// //     width: wp("10%"),
// //     margin: wp("3%")
// //   }

// // });


// import React, { Component } from 'react';
// import { StyleSheet, Image, TouchableOpacity, Text, View, TextInput, KeyboardAvoidingView, BackHandler } from 'react-native';
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
// import { connect } from 'react-redux';
// import * as firebase from 'firebase'


// class MainLoginScreen extends Component {
//   state = {
//     phone: '',
//     islength: true,
//     isclicked: false,
//     prefix: '+91',
//     message: 'Phone Number should be of 10 digits',
//     isNumber: true,
//     registeredPhoneNumbers: null
//   }

//   UNSAFE_componentWillMount() {
//     firebase.database().ref("SignUpInComplete").on("value", snapshot => {
//       var numbers = Object.keys(snapshot.val())
//       this.setState({
//         registeredPhoneNumbers: numbers
//       })
//     })
//   }

//   handleBackButton = () => {
//     this.props.navigation.navigate('Login')
//     return true;
//   }
//   componentDidMount() {
//     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
//   }
//   render() {

//     return (
//       <KeyboardAvoidingView style={styles.container}>
//         <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1 }}>
//           <TouchableOpacity onPress={
//             () => {
//               this.props.navigation.navigate('Login')
//               console.log("lkjfdh")
//             }

//           }
//             style={{ position: 'absolute', top: 15, left: 10, zIndex: 10, height: 40, width: 40 }}
//           >
//             <Image
//               source={require('../assets/back.png')}
//               style={{ position: 'absolute', top: 15, left: 10, zIndex: 2, }}
//             />
//           </TouchableOpacity>
//           <View style={styles.upperPart}>
//             <View style={styles.imgcont}>
//               <Image source={require("../assets/png.png")} style={styles.logo} />
//             </View>
//           </View>
//           <View style={styles.lowerPart}>
//             <View style={{ flex: 1 }}>
//               <View style={{ height: hp("8%"), justifyContent: 'flex-end', marginLeft: hp("3.5%") }}>
//                 <Text style={{ fontSize: 24, color: 'grey' }}>Lets get going</Text>
//               </View>
//               <View style={{ height: hp("10%"), justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginLeft: wp("6%"), marginRight: wp("4%") }}>
//                 {/* <Text style={{fontSize:19,color:"grey"}}>+91- </Text> */}
//                 <TextInput
//                   style={{ width: wp('10%'), height: hp('7%'), fontSize: 16, borderBottomWidth: 1, borderBottomColor: "#ebebeb", color: 'grey' }}
//                   // keyboardType="phone-pad"     

//                   placeholderTextColor="grey"
//                   value={this.state.prefix}
//                   onChangeText={(text) => {
//                     // this.props.dispatch({type: 'UPDATE_PHONE', text: text})
//                     this.setState({
//                       prefix: text
//                     })
//                   }}
//                 />
//                 <TextInput
//                   style={styles.phoneInput}
//                   // keyboardType="phone-pad"  
//                   placeholder="Phone no:"
//                   placeholderTextColor="grey"
//                   autoFocus={true}
//                   onChangeText={(text) => {
//                     function onlyDigits(s) {
//                       for (let i = s.length - 1; i >= 0; i--) {
//                         const d = s.charCodeAt(i);
//                         if (d < 48 || d > 57) return false
//                       }
//                       return true
//                     }
//                     if (onlyDigits(text)) {
//                       this.setState({
//                         message: 'Phone Number should be of 10 digits',
//                         isNumber: true
//                       })
//                     } else {
//                       this.setState({
//                         isNumber: false,
//                         message: 'Phone Number should contain only numbers.'
//                       })
//                     }
//                     this.props.dispatch({ type: 'UPDATE_PHONE', text: text })
//                     this.setState({
//                       phone: text,
//                       islength: true,
//                     })
//                   }}
//                 />
//                 <TouchableOpacity>
//                   <Image source={require("../assets/PhoneGray.png")} style={styles.phone} />
//                 </TouchableOpacity>
//               </View>
//               {
//                 this.state.islength && this.state.isNumber ? <Text style={{ fontSize: 12 }}></Text> :
//                   <Text style={{ marginLeft: wp('6%'), color: 'red', fontSize: 12 }}>{this.state.message} </Text>
//               }
//               <View style={{ height: hp("10%"), flexDirection: 'row', justifyContent: 'space-between' }}>
//                 <View style={{ marginTop: hp("2%") }}>
//                   <Text style={{ fontSize: 14, marginLeft: hp('3.5%') }}>I agree to receive notifications</Text>
//                   <Text style={{ fontSize: 14, marginLeft: hp('3.5%') }}>on my mobile</Text>
//                 </View>
//                 <TouchableOpacity onPress={() => {
//                   this.setState({
//                     isclicked: true
//                   })
//                   if (this.state.phone.length == 10 && this.state.isNumber) {
//                     var check = false;
//                     this.state.registeredPhoneNumbers.forEach((element) => {
//                       if (element == this.state.phone) {
//                         check = true;
//                       }
//                     })
//                     if(check){
//                     this.props.navigation.navigate('Password', { phone: this.state.phone })
//                     this.props.dispatch({ type: 'UPLOAD_TEXT_DONE' })
//                     }
//                     else{
//                       alert("No such user found!")
//                       this.setState({
//                         phone:""
//                       })
//                     }
//                   } else {
//                     this.setState({
//                       islength: false
//                     })
//                   }

//                 }}>
//                   <Image source={require("../assets/nect-page-arrow.png")} style={{
//                     height: hp("9%"),
//                     width: wp("20%"), marginTop: hp("0.8%")
//                   }}
//                   />
//                   {/* <Text>Hey</Text> */}
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </KeyboardAvoidingView>
//       </KeyboardAvoidingView>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     upload_status: state.textUpload,
//   }
// }
// export default connect(mapStateToProps)(MainLoginScreen)

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   upperPart: {
//     flex: 0.6,
//     backgroundColor: '#0091EA',
//   },
//   LowerPart: {
//     flex: 0.4,
//     width: '100%',
//     backgroundColor: '#E1F5FE',
//   },
//   imgcont: {
//     height: hp("60%"),
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   phone: {
//     height: hp("3%"),
//     width: wp("6%"),
//     marginLeft: 8
//   },
//   phoneInput: {
//     height: hp("7%"),
//     width: wp("70%"),
//     fontSize: 16,
//     color: 'grey',
//     borderBottomWidth: 1,
//     borderBottomColor: "#ebebeb",
//   },
//   icongoogle: {
//     height: hp("6%"),
//     width: wp("10%"),
//     margin: wp("3%")
//   },
//   iconfacebook: {
//     height: hp("6%"),
//     width: wp("10%"),
//     margin: wp("3%")
//   }

// });



import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, View, TextInput, KeyboardAvoidingView, BackHandler } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { connect } from 'react-redux';
import * as firebase from 'firebase'


class MainLoginScreen extends Component {
  state = {
    phone: '',
    islength: true,
    isclicked: false,
    prefix: '+91',
    message: 'Phone Number should be of 10 digits',
    isNumber: true,
    registeredPhoneNumbers: null
  }

  UNSAFE_componentWillMount() {
    firebase.database().ref("SignUpInComplete").on("value", snapshot => {
      var numbers = Object.keys(snapshot.val())
      this.setState({
        registeredPhoneNumbers: numbers
      })
    })
  }

  handleBackButton = () => {
    this.props.navigation.navigate('Login')
    return true;
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  render() {

    return (
      <KeyboardAvoidingView style={styles.container}>
        <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1 }}>
          <TouchableOpacity onPress={
            () => {
              this.props.navigation.navigate('Login')
              console.log("lkjfdh")
            }

          }
            style={{ position: 'absolute', top: 15, left: 10, zIndex: 10, height: 40, width: 40 }}
          >
            <Image
              source={require('../assets/back.png')}
              style={{ position: 'absolute', top: 15, left: 10, zIndex: 2, }}
            />
          </TouchableOpacity>
          <View style={styles.upperPart}>
            <View style={styles.imgcont}>
              <Image source={require("../assets/png.png")} style={styles.logo} />
            </View>
          </View>
          <View style={styles.lowerPart}>
            <View style={{ flex: 1 }}>
              <View style={{ height: hp("8%"), justifyContent: 'flex-end', marginLeft: hp("3.5%") }}>
                <Text style={{ fontSize: 24, color: 'grey' }}>Lets get going</Text>
              </View>
              <View style={{ height: hp("10%"), justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginLeft: wp("6%"), marginRight: wp("4%") }}>
                {/* <Text style={{fontSize:19,color:"grey"}}>+91- </Text> */}
                <TextInput
                  style={{ width: wp('10%'), height: hp('7%'), fontSize: 16, borderBottomWidth: 1, borderBottomColor: "#ebebeb", color: 'grey' }}
                  // keyboardType="phone-pad"     

                  placeholderTextColor="grey"
                  value={this.state.prefix}
                  onChangeText={(text) => {
                    // this.props.dispatch({type: 'UPDATE_PHONE', text: text})
                    this.setState({
                      prefix: text
                    })
                  }}
                />
                <TextInput
                  style={styles.phoneInput}
                  // keyboardType="phone-pad"  
                  placeholder="Phone no:"
                  placeholderTextColor="grey"
                  autoFocus={true}
                  onChangeText={(text) => {
                    function onlyDigits(s) {
                      for (let i = s.length - 1; i >= 0; i--) {
                        const d = s.charCodeAt(i);
                        if (d < 48 || d > 57) return false
                      }
                      return true
                    }
                    if (onlyDigits(text)) {
                      this.setState({
                        message: 'Phone Number should be of 10 digits',
                        isNumber: true
                      })
                    } else {
                      this.setState({
                        isNumber: false,
                        message: 'Phone Number should contain only numbers.'
                      })
                    }
                    this.props.dispatch({ type: 'UPDATE_PHONE', text: text })
                    this.setState({
                      phone: text,
                      islength: true,
                    })
                  }}
                />
                <TouchableOpacity>
                  <Image source={require("../assets/PhoneGray.png")} style={styles.phone} />
                </TouchableOpacity>
              </View>
              {
                this.state.islength && this.state.isNumber ? <Text style={{ fontSize: 12 }}></Text> :
                  <Text style={{ marginLeft: wp('6%'), color: 'red', fontSize: 12 }}>{this.state.message} </Text>
              }
              <View style={{ height: hp("10%"), flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginTop: hp("2%") }}>
                  <Text style={{ fontSize: 14, marginLeft: hp('3.5%') }}>I agree to receive notifications</Text>
                  <Text style={{ fontSize: 14, marginLeft: hp('3.5%') }}>on my mobile</Text>
                </View>
                <TouchableOpacity onPress={() => {
                  this.setState({
                    isclicked: true
                  })
                  if (this.state.phone.length == 10 && this.state.isNumber) {
                    var check = false;
                    this.state.registeredPhoneNumbers.forEach((element) => {
                      if (element == this.state.phone) {
                        check = true;
                      }
                    })
                    if(check){
                    this.props.navigation.navigate('Password', { phone: this.state.phone })
                    this.props.dispatch({ type: 'UPLOAD_TEXT_DONE' })
                    }
                    else{
                      alert("No such user found!")
                      this.setState({
                        phone:""
                      })
                    }
                  } else {
                    this.setState({
                      islength: false
                    })
                  }

                }}>
                  <Image source={require("../assets/nect-page-arrow.png")} style={{
                    height: hp("9%"),
                    width: wp("20%"), marginTop: hp("0.8%")
                  }}
                  />
                  {/* <Text>Hey</Text> */}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    upload_status: state.textUpload,
  }
}
export default connect(mapStateToProps)(MainLoginScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperPart: {
    flex: 0.6,
    backgroundColor: '#0091EA',
  },
  LowerPart: {
    flex: 0.4,
    width: '100%',
    backgroundColor: '#E1F5FE',
  },
  imgcont: {
    height: hp("60%"),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phone: {
    height: hp("3%"),
    width: wp("6%"),
    marginLeft: 8
  },
  phoneInput: {
    height: hp("7%"),
    width: wp("70%"),
    fontSize: 16,
    color: 'grey',
    borderBottomWidth: 1,
    borderBottomColor: "#ebebeb",
  },
  icongoogle: {
    height: hp("6%"),
    width: wp("10%"),
    margin: wp("3%")
  },
  iconfacebook: {
    height: hp("6%"),
    width: wp("10%"),
    margin: wp("3%")
  }

});