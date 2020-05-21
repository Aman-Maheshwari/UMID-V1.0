// import React,{Component} from 'react';
// import { StyleSheet,Image,TouchableOpacity, Text, View,TextInput, KeyboardAvoidingView,Dimensions,ScrollView,Alert } from 'react-native';
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
// import {Actions} from 'react-native-router-flux';
// import SlidingUpPanel from 'rn-sliding-up-panel';
// import db from '../../src/routes/config';


// const {height} = Dimensions.get('window')
// export default class LoginScreen extends Component {
//   render(){
//   return (
//     <View style={styles.container}>
//       <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
//       <View style={styles.upperPart}>
//         <View style={styles.imgcont}>
//         <Image source={require("../assets/png.png")} style={styles.logo}/>
//         </View>
//       </View>
//       <View style={styles.lowerPart}>
//         <View style={{flex:1}}>
//         <View style={{height:hp("8%"),justifyContent:'flex-end',marginLeft:hp("3.5%")}}>
//           <Text style={{fontSize:24, color:'grey'}}>Lets get going</Text>
//         </View>
//         <View style={{height:hp("10%"),justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
//           <TouchableOpacity onPress={()=>{
//             this.props.navigation.navigate('MainLogin')
            
//           }}>
//             <TextInput 
//             editable={false}
//             style={styles.phoneInput}
//             keyboardType="phone-pad"  
//             placeholder="Phone no:"     
//             placeholderTextColor="grey"
//           />
//           </TouchableOpacity>

//           <TouchableOpacity onPress={()=>{
//             this.props.navigation.navigate('MainLogin')
            
//           }}>
//             <Image source={require("../assets/PhoneGray.png")} style={styles.phone}/>
//           </TouchableOpacity>
//         </View>
//         <View style={{height:hp("14%")}}>
//           <View style={{height:hp("4%"),justifyContent:'center',alignItems:'center'}}>
//               <Text style={{fontSize:18}}>-or-</Text>
//           </View>
//           <View style={{height:hp("8%"),flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
//             <TouchableOpacity onPress={() => this.props.navigation.navigate('GoogleSigninScreen')}>
//               <Image source = {require("../assets/Googleimg.png")} style={styles.icongoogle}/>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => this.props.navigation.navigate('FacebookScreen')}>
//               <Image source = {require("../assets/Facebookimg.png")} style={styles.iconfacebook}/>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View style={{height:hp("8%"),borderTopWidth:1,flexDirection:'row',borderTopColor:'#d9d9d9',alignItems:'center'}}>
//           {/* <View style={{width:wp("60%")}}> */}
//           <Text style={{fontSize:14,paddingLeft:hp("3.5%"),marginBottom : hp('1.5%')}}>Don't have an account ? </Text>
//           {/* </View> */}
//           {/* <View style={{width:wp("40%"),backgroundColor:'red'}}> */}
//             <TouchableOpacity onPress={()=>{
//               this.props.navigation.navigate('SignUp')
//             }} style={{width:wp("30%")}}>
//           <Text style={{fontSize:18,fontWeight:'bold',color:'#0091EA',marginLeft:wp('1%'),marginBottom:hp('1.5%')}}>Sign up</Text>              
//             </TouchableOpacity>
//           {/* <Text style={{fontSize:wp("5%"),fontWeight:'bold',color:'#0091EA'}}>Sign up</Text> */}
//           {/* </View> */}
//         </View>
//         </View>
//       </View>
                
//       </KeyboardAvoidingView>
//     </View>
//   );
// }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   upperPart: {
//     flex:0.6,
//     backgroundColor:'#0091EA',
//   },
//   LowerPart: {
//     flex:0.4,
//     backgroundColor:'#E1F5FE',
//   },
//   imgcont: {
//     height:hp("60%"),
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center',
//   },
//   phone: {
//     height: hp("3%"),
//     width: wp("6%"),
//   },
//   phoneInput: {
//     height: hp("7%"),
//     width: wp("80%"),
//     fontSize:16,
//      borderBottomWidth: 1,
//      marginLeft:0,
//   borderBottomColor: "#ebebeb",
//   },
//   icongoogle: {
//     height: hp("8%"),
//     width: wp("11%"),
//     margin: hp("2%")
//   },
//   iconfacebook: {
//     height: hp("8%"),
//     width: wp("11%"),
//     margin: hp("2%")

//   }
  
// });


import React,{Component} from 'react';
import { StyleSheet,Image,TouchableOpacity, Text, View,TextInput, KeyboardAvoidingView,Dimensions,ScrollView,Alert } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import {Actions} from 'react-native-router-flux';
import SlidingUpPanel from 'rn-sliding-up-panel';
import db from '../../src/routes/config';


const {height} = Dimensions.get('window')
export default class LoginScreen extends Component {
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
        <View style={{height:hp("8%"),justifyContent:'flex-end',marginLeft:hp("3.5%")}}>
          <Text style={{fontSize:24, color:'grey'}}>Lets get going</Text>
        </View>
        <View style={{height:hp("10%"),justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
          <TouchableOpacity onPress={()=>{
            this.props.navigation.navigate('MainLogin')
            
          }}>
            <TextInput 
            editable={false}
            style={styles.phoneInput}
            keyboardType="phone-pad"  
            placeholder="Phone no:"     
            placeholderTextColor="grey"
          />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{
            this.props.navigation.navigate('MainLogin')
            
          }}>
            <Image source={require("../assets/PhoneGray.png")} style={styles.phone}/>
          </TouchableOpacity>
        </View>
        <View style={{height:hp("14%")}}>
          <View style={{height:hp("4%"),justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:18}}>-or-</Text>
          </View>
          <View style={{height:hp("8%"),flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('GoogleSigninScreen')}>
              <Image source = {require("../assets/Googleimg.png")} style={styles.icongoogle}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height:hp("8%"),borderTopWidth:1,flexDirection:'row',borderTopColor:'#d9d9d9',alignItems:'center'}}>
          {/* <View style={{width:wp("60%")}}> */}
          <Text style={{fontSize:14,paddingLeft:hp("3.5%"),marginBottom : hp('1.5%')}}>Don't have an account ? </Text>
          {/* </View> */}
          {/* <View style={{width:wp("40%"),backgroundColor:'red'}}> */}
            <TouchableOpacity onPress={()=>{
              this.props.navigation.navigate('Profile')
            }} style={{width:wp("30%")}}>
          <Text style={{fontSize:18,fontWeight:'bold',color:'#0091EA',marginLeft:wp('1%'),marginBottom:hp('1.5%')}}>Sign up</Text>              
            </TouchableOpacity>
          {/* <Text style={{fontSize:wp("5%"),fontWeight:'bold',color:'#0091EA'}}>Sign up</Text> */}
          {/* </View> */}
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
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  phone: {
    height: hp("3%"),
    width: wp("6%"),
  },
  phoneInput: {
    height: hp("7%"),
    width: wp("80%"),
    fontSize:16,
     borderBottomWidth: 1,
     marginLeft:0,
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