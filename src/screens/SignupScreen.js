import React,{Component} from 'react';
import { StyleSheet,Image,TouchableOpacity, Text, View,TextInput, KeyboardAvoidingView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import {Actions} from 'react-native-router-flux';


export default class SignupScreen extends Component {
  GoogleSigninScreen() {
		Actions.GoogleSigninScreen()
    }
    FacebookScreen() {
      Actions.FacebookScreen()
    }
  render(){
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
      <View style={styles.upperPart}>
        <View style={styles.imgcont}>
        <Image source={require("../assets/png.png")} style={styles.logo}/>
        </View>
      </View>
      <View style={styles.lowerPart}>
        <View style={{flex:1}}>
        <View style={{height:hp("8%"),justifyContent:'flex-end',marginLeft:hp("3%")}}>
          <Text style={{fontSize:24}}>Lets get going</Text>
        </View>
        <View style={{height:hp("10%"),justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
          <TextInput 
            style={styles.phoneInput}
            keyboardType="phone-pad"  
            placeholder="Phone no:"     
            placeholderTextColor="grey"
          />
          <TouchableOpacity>
            <Image source={require("../assets/ios-call.png")} style={styles.phone}/>
          </TouchableOpacity>
        </View>
        <View style={{height:hp("14%")}}>
          <View style={{height:hp("4%"),justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:18}}>-or-</Text>
          </View>
          <View style={{height:hp("10%"),flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={this.GoogleSigninScreen}>
              <Image source = {require("../assets/Googleimg.png")} style={styles.icongoogle}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.FacebookScreen}>
              <Image source = {require("../assets/Facebookimg.png")} style={styles.iconfacebook}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height:hp("8%"),borderTopWidth:1,flexDirection:'row',borderTopColor:'#d9d9d9',justifyContent:'center',alignItems:'center'}}>
          <View style={{width:wp("60%")}}>
          <Text style={{fontSize:wp("3.5%"),fontWeight:'bold',paddingLeft:wp("15%")}}>Don't have an account ? </Text>
          </View>
          <View style={{width:wp("40%")}}>
          <Text style={{fontSize:wp("5%"),fontWeight:'bold',color:'#0091EA'}}>Sign up</Text>
          </View>
        </View>
        </View>
      </View>
      </KeyboardAvoidingView>
    </View>
  );
}
}
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
    backgroundColor:'#E1F5FE',
  },
  imgcont: {
    height:hp("60%"),
    justifyContent:'center',
    alignItems:'center',
  },
  phone: {
    height: hp("4%"),
    width: wp("9%"),
  },
  phoneInput: {
    height: hp("7%"),
    width: wp("80%"),
    fontSize:16,
     borderBottomWidth: 1,
  borderBottomColor: "#ebebeb",
  },
  icongoogle: {
    height: hp("8%"),
    width: wp("11%"),
    margin: hp("2%")
  },
  iconfacebook: {
    height: hp("8%"),
    width: wp("11%"),
    margin: hp("2%")

  }
  
});