import React,{Component} from 'react';
import { StyleSheet,Image,TouchableOpacity, Text, View,TextInput, KeyboardAvoidingView,Alert,Button} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import CryptoJS from "react-native-crypto-js";

class Forgotpassword extends Component {
  
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
    
    }

    handleSignIn= ()=>{
        if(this.state.password == this.state.confirmPassword){
          let Password_for_Db = CryptoJS.AES.encrypt(this.state.password , 'U2FsdGVkX1/Fn2uijfNNp61r1otCzb6VP1ss8rtsnSA=').toString();
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