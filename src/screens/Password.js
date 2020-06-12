// import React, { Component } from 'react';
// import { StyleSheet, Image, TouchableOpacity, Text, View, TextInput, KeyboardAvoidingView, Alert, Button, AsyncStorage, BackHandler } from 'react-native';
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
// import * as firebase from 'firebase';
// import { connect } from 'react-redux';
// import { _ } from 'lodash';
// import messaging, { AuthorizationStatus } from '@react-native-firebase/messaging'

// import CryptoJS from "react-native-crypto-js";

// class Password extends Component {
//   b64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

//   constructor(props) {
//     super(props)
//     this.state = {
//       password: null,
//       passwordFromFirebase: null,
//       hide: true,
//       iscorrect: true,
//       ishide: true,
//       fcmToken: '',
//     }

//   }

//   decode(key, data) {
//     data = this.b64_decode(data);
//     return this.xor_decrypt(key, data);
//   }

//   b64_decode(data) {
//     var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, result = [];
//     if (!data) { return data; }
//     data += "";
//     do {
//       h1 = this.b64_table.indexOf(data.charAt(i++));
//       h2 = this.b64_table.indexOf(data.charAt(i++));
//       h3 = this.b64_table.indexOf(data.charAt(i++));
//       h4 = this.b64_table.indexOf(data.charAt(i++));
//       bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
//       o1 = bits >> 16 & 0xff;
//       o2 = bits >> 8 & 0xff;
//       o3 = bits & 0xff;
//       result.push(o1);
//       if (h3 !== 64) {
//         result.push(o2);
//         if (h4 !== 64) {
//           result.push(o3);
//         }
//       }
//     } while (i < data.length);
//     return result;
//   }

//   xor_decrypt(key, data) {
//     return _.map(data, function (c, i) {
//       return String.fromCharCode(c ^ key.charCodeAt(Math.floor(i % key.length)));
//     }).join("");
//   }


//   _storeData = async (phone, password, status) => {
//     let user_obj = {
//       phone: phone,
//       password: password,
//       status: status
//     }
//     try {
//       await AsyncStorage.setItem('UMID_user', JSON.stringify(user_obj));
//     } catch (error) {
//       // Error saving data
//       console.log(error)
//       await AsyncStorage.setItem('UMID_user', JSOn.stringify({
//         email: '',
//         password: '',
//         status: 0
//       }))
//     }
//   };

//   handleSignIn = async () => {
//     console.log(this.state.passwordFromFirebase)
//     if (this.state.password == this.state.passwordFromFirebase && this.state.passwordFromFirebase != null) {
//       console.log(this.state.passwordFromFirebase)
//       setTimeout(() => {
//         this._storeData(this.props.navigation.state.params.phone, this.state.password, 1)
//       }, 1000);
//       this.props.dispatch({ type: 'UPLOAD_TEXT_DONE' })
//       // this.props.navigation.navigate('Drawer')
//       var ifIntro = await AsyncStorage.getItem('UMID_Intro')
//       if (ifIntro == "1") {
//         firebase.database().ref('SignUpInComplete/' + this.props.navigation.state.params.phone).update({
//           fcmToken: this.state.fcmToken
//         })
//         this.props.navigation.navigate('Drawer', { phone: this.props.navigation.state.params.phone })

//       }
//       else {
//         firebase.database().ref('SignUpInComplete/' + this.props.navigation.state.params.phone).update({
//           fcmToken: this.state.fcmToken
//         })
//         this.props.navigation.navigate('Intro', { phone: this.props.navigation.state.params.phone })
//       }
//     }
//     else {
//       this.setState({
//         iscorrect: false,
//       })
//     }

//   }
//   handleBackButton = () => {
//     this.props.navigation.navigate('MainLogin')
//     return true;
//   }

//   componentDidMount() {
//     messaging().getToken().then((data) => {
//       console.log("Got token ", data);
//       this.setState({ fcmToken: data })
//       // console.log("data.json() = ",data.json());
//     });
//     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
//     var fetchMessage = new Promise((resolve, reject) => {

//       firebase.database().ref('SignUpInComplete/').on("value", snapshot => {
//         // console.log(snapshot.val())

//         snapshot.forEach((data) => {
//           // console.log("data.val().PhoneNumber",data.val().PhoneNumber)
//           // console.log(this.props.navigation.state.params.phone)

//           //checks of phone number from db matches user phonenumber than, take that corresponding password and decrypt it.
//           if (data.val().PhoneNumber == this.props.navigation.state.params.phone) {
//             this.props.dispatch({ type: 'UPDATE_TEXT', text: data.val().name })
//             console.log("init", data.val().Password)
//             // if(data.val().Password.length <20){
//             //   console.log("insiede if ",data.val().Password);

//             //   resolve(data.val().Password)
//             // }
//             // else{
//             // let bytes  = CryptoJS.AES.decrypt(data.val().Password, 'U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=');
//             // let originalText = bytes.toString(CryptoJS.enc.Utf8);
//             let originalText = this.decode("U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=", data.val().Password)
//             console.log("ogtesxt=", originalText);
//             resolve(originalText)
//             // }
//           }
//         }
//         );
//         reject("Data not Found")
//       })
//     })
//     fetchMessage.then((s) => {
//       console.log("s=====", s)
//       this.setState({
//         passwordFromFirebase: s
//       })
//     }).catch((err) => {

//     })
//   }

//   render() {
//     return (
//       <KeyboardAvoidingView style={styles.container}>


//         <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1 }}>
//           <TouchableOpacity onPress={
//             () => {
//               this.props.navigation.navigate('MainLogin')
//               // console.log("lkjfdh")         
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
//                 <Text style={{ fontSize: 24, color: 'grey' }}>Enter your password</Text>
//               </View>
//               <View style={{ height: hp("10%"), alignItems: 'center', flexDirection: 'row', marginLeft: hp("3.5%"), }}>
//                 <View>
//                   {
//                     this.state.ishide ?
//                       <TextInput
//                         placeholder="Password"
//                         autoFocus={true}
//                         placeholderTextColor="grey"
//                         secureTextEntry={true}
//                         style={{ width: wp('80%'), borderBottomColor: '#ebebeb', borderBottomWidth: 1, }}
//                         onChangeText={text => {
//                           this.setState({ password: text })
//                           // console.log(this.state.UserName)
//                         }}
//                       />

//                       :
//                       <TextInput
//                         placeholder="Password"
//                         placeholderTextColor="grey"
//                         style={{ width: wp('80%'), borderBottomColor: '#ebebeb', borderBottomWidth: 1, }}
//                         onChangeText={text => {
//                           this.setState({ password: text })
//                           // console.log(this.state.UserName)
//                         }}
//                       />
//                   }
//                 </View>
//                 {
//                   this.state.ishide ?
//                     <TouchableOpacity
//                       onPress={() => {
//                         if (this.state.ishide) {
//                           this.setState({
//                             ishide: false
//                           })
//                         } else {

//                           this.setState({
//                             ishide: true
//                           })
//                         }

//                       }}
//                     >
//                       <Image source={require("../assets/hide-icon.png")} style={{ height: hp('2.5%'), width: hp('4%') }} />
//                     </TouchableOpacity>
//                     :
//                     <TouchableOpacity
//                       onPress={() => {
//                         if (this.state.ishide) {
//                           this.setState({
//                             ishide: false
//                           })
//                         } else {

//                           this.setState({
//                             ishide: true
//                           })
//                         }

//                       }}
//                     >
//                       <Image source={require("../assets/crossed-eye.png")} style={{ height: hp('4%'), width: hp('4%') }} />
//                     </TouchableOpacity>

//                 }
//               </View>
//               <View style={{ height: hp("10%"), flexDirection: 'row', justifyContent: 'space-between' }}>
//                 <View>
//                   {
//                     this.state.iscorrect ? <Text style={{ fontSize: 12, marginBottom: hp('2%') }}></Text> :

//                       <Text style={{ color: 'red', fontSize: 12, marginLeft: hp('3.5%'), marginBottom: hp('2%') }}>Password Incorrect! Please try again.</Text>
//                   }
//                   <TouchableOpacity onPress={() => {
//                     this.props.navigation.navigate('Forgotpassword', { phone: this.props.navigation.state.params.phone })
//                   }}>
//                     <Text style={{ fontSize: 14, marginLeft: hp('3.5%'), color: '#0091EA' }}>Forgot Password</Text>

//                   </TouchableOpacity>
//                   <View style={{ height: hp('.5%') }}>

//                   </View>
//                   <TouchableOpacity onPress={() => this.props.navigation.navigate("WhoYouAre")}>
//                     <Text style={{ fontSize: 14, marginLeft: hp('3.5%'), color: '#0091EA' }}>I don't have an account</Text>
//                   </TouchableOpacity>
//                 </View>
//                 <TouchableOpacity onPress={() => {

//                   // console.log(this.state);
//                   this.handleSignIn()
//                   //   this.props.navigation.navigate('Password',{phone : this.state.phone})
//                 }}>
//                   <Image source={require("../assets/nect-page-arrow.png")} style={{
//                     height: hp("9%"),
//                     width: wp("20%"), marginTop: hp('1.8%')
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
// export default connect(mapStateToProps)(Password)
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




import React,{Component} from 'react';
import { StyleSheet,Image,TouchableOpacity, Text, View,TextInput, KeyboardAvoidingView,Alert,Button,AsyncStorage,BackHandler } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import {_} from 'lodash';
import messaging, { AuthorizationStatus } from '@react-native-firebase/messaging'

import CryptoJS from "react-native-crypto-js";

class Password extends Component {
    b64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

        constructor(props){
        super(props)
            this.state={
        password:null,
        passwordFromFirebase : null,
        hide : true,
        iscorrect: true,
        ishide: true,
        fcmToken : '',
    }

    }

    decode(key, data) {
      data = this.b64_decode(data);
      return this.xor_decrypt(key, data);
    }
 
    b64_decode(data) {
      var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, result = [];
      if (!data) { return data; }
      data += "";
      do {
        h1 = this.b64_table.indexOf(data.charAt(i++));
        h2 = this.b64_table.indexOf(data.charAt(i++));
        h3 = this.b64_table.indexOf(data.charAt(i++));
        h4 = this.b64_table.indexOf(data.charAt(i++));
        bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
        o1 = bits >> 16 & 0xff;
        o2 = bits >> 8 & 0xff;
        o3 = bits & 0xff;
        result.push(o1);
        if (h3 !== 64) {
          result.push(o2);
          if (h4 !== 64) {
            result.push(o3);
          }
        }
      } while (i < data.length);
      return result;
    }

    xor_decrypt(key, data) {
      return _.map(data, function(c, i) {
        return String.fromCharCode( c ^ key.charCodeAt( Math.floor(i % key.length) ) );
      }).join("");
    }

    
  _storeData = async (phone , password , status) => {
    let user_obj = {
      phone : phone ,
      password : password,
      status : status
    }
    try {
      await AsyncStorage.setItem('UMID_user', JSON.stringify(user_obj));
    } catch (error) {
      // Error saving data
      console.log(error)
      await AsyncStorage.setItem('UMID_user', JSOn.stringify({
        email : '',
        password :'',
        status : 0
      }))
    }
  };

    handleSignIn= async ()=>{
      console.log(this.state.passwordFromFirebase)
        if(this.state.password == this.state.passwordFromFirebase && this.state.passwordFromFirebase !=null ){
          console.log(this.state.passwordFromFirebase)
          setTimeout(() => {
            this._storeData(this.props.navigation.state.params.phone,this.state.password,1)
          }, 1000);
            this.props.dispatch({type: 'UPLOAD_TEXT_DONE'})
            // this.props.navigation.navigate('Drawer')
            var ifIntro = await AsyncStorage.getItem('UMID_Intro')
            if(ifIntro == "1"){
              firebase.database().ref('SignUpInComplete/' + this.props.navigation.state.params.phone).update({
                fcmToken : this.state.fcmToken
              })
              this.props.navigation.navigate('Drawer' , {phone : this.props.navigation.state.params.phone})

            }
            else{
              firebase.database().ref('SignUpInComplete/' + this.props.navigation.state.params.phone).update({
                fcmToken : this.state.fcmToken
              })
              this.props.navigation.navigate('Intro',{phone : this.props.navigation.state.params.phone})
            }
        }
        else{
            this.setState({
              iscorrect: false,
            })
        }

    }
    handleBackButton = () =>{
      this.props.navigation.navigate('MainLogin')
      return true;
    }

    componentDidMount(){
      messaging().getToken().then((data)=>{
        console.log("Got token ",data);
        this.setState({ fcmToken : data })
        // console.log("data.json() = ",data.json());
      });
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        var fetchMessage = new Promise((resolve, reject) => {

            firebase.database().ref('SignUpInComplete/').on("value", snapshot => {
                // console.log(snapshot.val())

                snapshot.forEach((data) => {
                    // console.log("data.val().PhoneNumber",data.val().PhoneNumber)
                    // console.log(this.props.navigation.state.params.phone)
                    
                    //checks of phone number from db matches user phonenumber than, take that corresponding password and decrypt it.
                    if(data.val().PhoneNumber == this.props.navigation.state.params.phone){
                        this.props.dispatch({type: 'UPDATE_TEXT', text: data.val().name})
                        console.log("init",data.val().Password)
                        // if(data.val().Password.length <20){
                        //   console.log("insiede if ",data.val().Password);
                          
                        //   resolve(data.val().Password)
                        // }
                        // else{
                        // let bytes  = CryptoJS.AES.decrypt(data.val().Password, 'U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=');
                        // let originalText = bytes.toString(CryptoJS.enc.Utf8);
                        let originalText = this.decode("U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=",data.val().Password)
                        console.log("ogtesxt=",originalText);
                        resolve(originalText)
                        // }
                    }
                }
                );
                reject("Data not Found")
            })
        })
        fetchMessage.then((s) => {
            console.log("s=====",s)
            this.setState({
                passwordFromFirebase: s
            })
        }).catch((err) => {

        })
    }

  render(){
  return (
    <KeyboardAvoidingView style={styles.container}>
 

      <KeyboardAvoidingView behavior="padding" enabled style={{flex:1}}> 
      <TouchableOpacity onPress={
        ()=>{
        this.props.navigation.navigate('MainLogin') 
        // console.log("lkjfdh")         
        }

      }
      style={{position:'absolute',top:15,left:10,zIndex:10,height:40,width:40}}
      >
              <Image
      source={require('../assets/back.png')}
      style={{position:'absolute',top:15,left:10,zIndex:2,}}
      />      
      </TouchableOpacity>
  
        <View style={styles.upperPart}>
        <View style={styles.imgcont}>
        <Image source={require("../assets/png.png")} style={styles.logo}/>
        </View>
      </View>
      <View style={styles.lowerPart}>
        <View style={{flex:1}}>
        <View style={{height:hp("8%"),justifyContent:'flex-end',marginLeft:hp("3.5%")}}>
          <Text style={{fontSize:24,color:'grey'}}>Enter your password</Text>
        </View>
        <View style={{height:hp("10%"),alignItems:'center',flexDirection:'row',marginLeft:hp("3.5%"),}}>
          <View>
          {
            this.state.ishide ? 
            <TextInput
            placeholder="Password"
            autoFocus = {true}
            placeholderTextColor="grey"
            secureTextEntry = {true}
            style={{width:wp('80%'),borderBottomColor:'#ebebeb',borderBottomWidth:1,}}
            onChangeText={text => {
           this.setState({ password : text })
           // console.log(this.state.UserName)
       }}
            /> 
            
            :
            <TextInput
            placeholder="Password"
            placeholderTextColor="grey"
            style={{width:wp('80%'),borderBottomColor:'#ebebeb',borderBottomWidth:1,}}
            onChangeText={text => {
           this.setState({ password : text })
           // console.log(this.state.UserName)
       }}
            />
          }
            </View>
            {
            this.state.ishide ?
            <TouchableOpacity
            onPress={()=>{
              if(this.state.ishide){
              this.setState({
                ishide : false
              })
              }else{

              this.setState({
                ishide : true
              })              
              }

            }}
            >
              <Image source={require("../assets/hide-icon.png")} style={{height:hp('2.5%'),width:hp('4%')}}/>
            </TouchableOpacity> 
            :
            <TouchableOpacity
            onPress={()=>{
              if(this.state.ishide){
              this.setState({
                ishide : false
              })
              }else{

              this.setState({
                ishide : true
              })              
              }

            }}
            >
              <Image source={require("../assets/crossed-eye.png")} style={{height:hp('4%'),width:hp('4%')}}/>
            </TouchableOpacity>

        }
        </View>
        <View style={{height:hp("10%"),flexDirection:'row',justifyContent:'space-between'}}>
          <View>
          {
              this.state.iscorrect ? <Text style={{fontSize:12,marginBottom:hp('2%')}}></Text> :

              <Text style={{color:'red',fontSize:12,marginLeft:hp('3.5%'),marginBottom:hp('2%')}}>Password Incorrect! Please try again.</Text>
            }
            <TouchableOpacity onPress={()=>{
              this.props.navigation.navigate('Forgotpassword', {phone  :this.props.navigation.state.params.phone})
            }}>
          <Text style={{fontSize:14,marginLeft:hp('3.5%'),color : '#0091EA'}}>Forgot Password</Text>
            
            </TouchableOpacity>
          <View style={{height:hp('.5%')}}>

          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("WhoYouAre")}>
          <Text style={{fontSize:14,marginLeft:hp('3.5%'),color:'#0091EA'}}>I don't have an account</Text>
          </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>{
            
            // console.log(this.state);
            this.handleSignIn()
            //   this.props.navigation.navigate('Password',{phone : this.state.phone})
          }}>
            <Image source={require("../assets/nect-page-arrow.png")} style={{height: hp("9%"),
               width: wp("20%"),marginTop:hp('1.8%')}}
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

const mapStateToProps = (state) =>{
    return {
      upload_status : state.textUpload, 
    }
  }  
  export default connect(mapStateToProps)(Password)
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperPart: {
    flex:0.6,
    backgroundColor:'#0091EA',
  },
  LowerPart: {
    flex:0.4,
    width:'100%',
    backgroundColor:'#E1F5FE',
  },
  imgcont: {
    height:hp("60%"),
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  phone: {
    height: hp("3%"),
    width: wp("6%"),
    marginLeft:8
  },
  phoneInput: {
    height: hp("7%"),
    width: wp("70%"),
    fontSize:16,
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