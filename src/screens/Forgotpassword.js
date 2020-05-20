import React,{Component} from 'react';
import { StyleSheet,Image,TouchableOpacity, Text, View,TextInput, KeyboardAvoidingView,Alert,Button} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import CryptoJS from "react-native-crypto-js";
import {_} from 'lodash';

class Forgotpassword extends Component {
  b64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        constructor(props){
        super(props)
            this.state={
        password:null,
        passwordFromFirebase : null,
        hide : true,
        iscorrect: true,
        ishide: true,
        confirmPassword : null
    }
    // b64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    }

    encode(key, data) {
      console.log(key,data)
      data = this.xor_encrypt(key, data);
      return this.b64_encode(data);
    }
    decode(key, data) {
      data = this.b64_decode(data);
      return this.xor_decrypt(key, data);
    }
 

 
b64_encode(data) {
    var o1, o2, o3, h1, h2, h3, h4, bits, r, i = 0, enc = "";
    if (!data) { return data; }
    do {
      o1 = data[i++];
      o2 = data[i++];
      o3 = data[i++];
      bits = o1 << 16 | o2 << 8 | o3;
      h1 = bits >> 18 & 0x3f;
      h2 = bits >> 12 & 0x3f;
      h3 = bits >> 6 & 0x3f;
      h4 = bits & 0x3f;
      enc += this.b64_table.charAt(h1) + this.b64_table.charAt(h2) + this.b64_table.charAt(h3) + this.b64_table.charAt(h4);
    } while (i < data.length);
    r = data.length % 3;
    return (r ? enc.slice(0, r - 3) : enc) + "===".slice(r || 3);
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
 
 xor_encrypt(key, data) {
   console.log(data,key);
    return _.map(data, function(c, i) {
      return c.charCodeAt(0) ^ key.charCodeAt( Math.floor(i % key.length) );
    });
  }
xor_decrypt(key, data) {
    return _.map(data, function(c, i) {
      return String.fromCharCode( c ^ key.charCodeAt( Math.floor(i % key.length) ) );
    }).join("");
  }

    handleSignIn= ()=>{
        if(this.state.password == this.state.confirmPassword){
          // let Password_for_Db = CryptoJS.AES.encrypt(this.state.password , 'U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=').toString();
          // firebase.database().ref("SignUpInComplete/"+this.props.phonenumberuser+"/").update({
          //   Password: Password_for_Db
          // })
          // this.props.navigation.navigate("MainLogin")
          let Password_for_Db = this.encode('U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=',this.state.password)
          console.log("Password", Password_for_Db )
           firebase.database().ref("SignUpInComplete/"+this.props.phonenumberuser+"/").update({
            Password: Password_for_Db
          })
          this.props.navigation.navigate("MainLogin")

        }
        else{
          this.setState({
            iscorrect: false
          })
        }
    }

  render(){
  return (
    <View style={styles.container}>
 

      <KeyboardAvoidingView behavior="padding" enabled style={{flex:1}}> 
      <TouchableOpacity onPress={
        ()=>{
        this.props.navigation.navigate('MainLogin') 
        console.log("lkjfdh")         
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
          <Text style={{fontSize:24,color:'grey'}}>Change your password</Text>
        </View> 
            <View style={{flexDirection:'row',marginLeft:hp("3.5%"),height:hp('8%'),alignItems:'center'}}>
          <View>
          {
            this.state.ishide ? 
            <TextInput
            placeholder="Password"
            placeholderTextColor="grey"
            secureTextEntry = {true}
            value = {this.state.password}
            style={{width:wp('80%'),borderBottomColor:'#ebebeb',borderBottomWidth:1,}}
            onChangeText={text => {
           this.setState({ password : text })
           // console.log(this.state.UserName)
       }}
            /> 
            
            :
            <TextInput
            placeholder="Password"
            value = {this.state.password}
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


            <View style={{flexDirection:'row',marginLeft:hp("3.5%"),height:hp('8%'),alignItems:'center'}}>
          <View>
          {
            this.state.ishide ? 
            <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="grey"
            value = {this.state.confirmPassword}
            secureTextEntry = {true}
            style={{width:wp('80%'),borderBottomColor:'#ebebeb',borderBottomWidth:1,}}
            onChangeText={text => {
           this.setState({ confirmPassword : text })
           // console.log(this.state.UserName)
       }}
            /> 
            
            :
            <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="grey"
            value = {this.state.confirmPassword}
            style={{width:wp('80%'),borderBottomColor:'#ebebeb',borderBottomWidth:1,}}
            onChangeText={text => {
           this.setState({ confirmPassword : text })
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
        {
              this.state.iscorrect ? <Text style={{fontSize:12}}></Text> :

              <Text style={{color:'red',fontSize:12,marginLeft:hp('3.5%')}}>Password does not match! Please try again.</Text>
            }
        <TouchableOpacity style = {{height: hp("9%"),
               width: wp("100%"),alignItems:'center',justifyContent:'center'}} onPress={()=>{
            
            // console.log(this.state);
            this.handleSignIn()
            // console.log("ckdmsnjfkbmwdl;ekjndb")
            //   this.props.navigation.navigate('Password',{phone : this.state.phone})
          }}>
        <View style={{alignItems:'center',justifyContent:'center',marginTop:hp('5%')}}>
            <Image source={require("../assets/nect-page-arrow.png")} style={{height: hp("9%"),
               width: wp("20%")}}
            />
             {/* <Text>Hey</Text> */}

          </View>
          </TouchableOpacity>
        </View>
      </View> 
      </KeyboardAvoidingView>
    </View>
  );
}
}


const mapStateToProps = (state) =>{
    return {
      upload_status : state.textUpload, 
      phonenumberuser: state.phonenumberuser,
    }
  }  
  export default connect(mapStateToProps)(Forgotpassword)
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