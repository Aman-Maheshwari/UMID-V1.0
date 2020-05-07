import React,{Component} from 'react';
import { StyleSheet,Image,TouchableOpacity, Text, View,TextInput, KeyboardAvoidingView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default class SignupScreen extends Component {
  render(){
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" enabled style={{flex:1}}>
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
        <View style={{height:hp("10%"),justifyContent:'center',alignItems:'center',flexDirection:'row',marginLeft:wp("6%"),marginRight:wp("4%")}}>
          <Text style={{fontSize:19}}>+91- </Text>
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
        <View style={{height:hp("10%"),flexDirection:'row',justifyContent:'space-around',marginRight:10,marginLeft:hp("3%")}}>
          <View>
          <Text style={{fontSize:14}}>I agree to recieve notifications</Text>
          <Text style={{fontSize:14}}>on my mobile</Text>
          </View>
          <TouchableOpacity>
            <Image source={require("../assets/Arrow.png")} style={{height: hp("9%"),
    width: wp("20%"),}}/>
            {/* <Text>Hey</Text> */}
          </TouchableOpacity>
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
    // height:hp("60%"),
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  phone: {
    height: hp("4%"),
    width: wp("9%"),
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