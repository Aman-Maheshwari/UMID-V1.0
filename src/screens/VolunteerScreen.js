// // import * as React from 'react';
// // import { StyleSheet, Text, View, Button, Alert, Keyboard,TouchableOpacity, Dimensions, Image, ScrollView, Animated, FlatList, TextInput, KeyboardAvoidingView, Linking, BackHandler, ActivityIndicator } from 'react-native';
// // import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// // import * as firebase from 'firebase'
// // import { db } from '../routes/config';
// // import { connect } from 'react-redux';
// // import food from '../assets/food.json';
// // import FoodSupplies from './FoodSupplies';
// // import MedicalSupplies from './MedicalSupplies';
// // import medical from '../assets/medical.json';
// // import { Directions } from 'react-native-gesture-handler';
// // import { createBottomTabNavigator } from 'react-navigation-tabs';
// // import { createAppContainer,createSwitchNavigator } from 'react-navigation';
// // import Icon from "react-native-vector-icons/MaterialIcons"


// // const TabNavigator = createBottomTabNavigator({
// //     foodSupplies :{
// //       screen :  FoodSupplies,
  
// //     },
// //     medicalSupplies : {
// //       screen: MedicalSupplies,
// //     },
// //   },
// //   {
// //     defaultNavigationOptions:({ navigation })=>({
// //       tabBarIcon : ({focused , horizontal , tintcolor})=>{
// //         const {routeName} = navigation.state;
// //         if(routeName === 'foodSupplies'){
// //           if(focused){
// //             return <Text style={{color: '#0290ea',fontSize:16}}>Food Supplies</Text>
// //           }
// //           return <Text style={{fontSize:16}}>Food Supplies</Text>
// //         }
// //         else if(routeName === 'medicalSupplies'){
// //           if(focused){
// //             return <Text style={{color: '#0290ea',fontSize:16}}>Medical Supplies</Text>
// //           }
// //           return <Text style={{fontSize:16}}>Medical Supplies</Text>
// //         }
// //       }
// //     }),
// //     tabBarOptions:{
// //       showLabel : false,
// //       style:{
// //         // backgroundColor:'#0290ea',
// //         height:hp('8%')
// //       }
// //     }
// //   }
// //   )

// // const AppContiner = createAppContainer(TabNavigator)

// // class VolunteerScreen extends React.Component{
// //       render() {
// //           return(
// //             <View style={styles.container}>
// //                 <View style={{backgroundColor:'#0290ea',justifyContent:"space-between",height:hp("6%"),marginBottom:hp("3%"),flexDirection:'row'}}>
// //                 <TouchableOpacity style = {{width:wp("8%"),marginLeft:wp("3%"),alignSelf:"center"}} onPress={
// //                 () => {
// //                   this.props.navigation.toggleDrawer();
// //                 }
// //               }>
// //                 <Image
// //                   source={require('../assets/hamwhitepng.png')}
// //                   style={{ height: hp("3.5%"), width: hp("3.5%") }}
// //                 />
// //               </TouchableOpacity>
// //               <TouchableOpacity style = {{width:wp("8%"),marginLeft:wp("3%"),alignSelf:"center"}} onPress={
// //                 () => {
// //                   this.props.navigation.navigate('Home'); 
// //                 }
// //               }>
// //                 <Icon name="clear" size={25} color="white"/>
// //               </TouchableOpacity>
// //               </View>
// //                 <AppContiner />
// //           </View>
// //           );
// //       }
// // }

// // export default VolunteerScreen

// // const styles = StyleSheet.create({
// //     container: {
// //         flex:1,
// //     },
// // })

// import * as React from 'react';
// import { StyleSheet, Text, View, Button, Alert, Keyboard,TouchableOpacity, Dimensions, Image, ScrollView, Animated, FlatList, TextInput, KeyboardAvoidingView, Linking, BackHandler, ActivityIndicator } from 'react-native';
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import * as firebase from 'firebase'
// import { db } from '../routes/config';
// import { connect } from 'react-redux';
// import food from '../assets/food.json';
// import FoodSupplies from './FoodSupplies';
// import MedicalSupplies from './MedicalSupplies';
// import medical from '../assets/medical.json';
// import { Directions } from 'react-native-gesture-handler';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createAppContainer,createSwitchNavigator } from 'react-navigation';
// import Icon from "react-native-vector-icons/MaterialIcons"


// const TabNavigator = createBottomTabNavigator({
//     foodSupplies :{
//       screen :  FoodSupplies,
  
//     },
//     medicalSupplies : {
//       screen: MedicalSupplies,
//     },
//   },
//   {
//     defaultNavigationOptions:({ navigation })=>({
//       tabBarIcon : ({focused , horizontal , tintcolor})=>{
//         const {routeName} = navigation.state;
//         if(routeName === 'foodSupplies'){
//           if(focused){
//             return <Text style={{color: '#0290ea',fontSize:16}}>Food Supplies</Text>
//           }
//           return <Text style={{fontSize:16}}>Food Supplies</Text>
//         }
//         else if(routeName === 'medicalSupplies'){
//           if(focused){
//             return <Text style={{color: '#0290ea',fontSize:16}}>Medical Supplies</Text>
//           }
//           return <Text style={{fontSize:16}}>Medical Supplies</Text>
//         }
//       }
//     }),
//     tabBarOptions:{
//       showLabel : false,
//       style:{
//         // backgroundColor:'#0290ea',
//         height:hp('8%')
//       }
//     }
//   }
//   )

// const AppContiner = createAppContainer(TabNavigator)

// class VolunteerScreen extends React.Component{
//   componentDidMount(){
//     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
//   }
//   componentWillUnmount() {
//     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
//   }
//   handleBackButton = () => {
//     Alert.alert(
//       'Exit App',
//       'Exiting the application?', [{
//         text: 'Cancel',
//         onPress: () => console.log('Cancel Pressed'),
//         style: 'cancel'
//       }, {
//         text: 'OK',
//         onPress: () => BackHandler.exitApp()
//       },], {
//       cancelable: false
//     }
//     )
//     return true;
//   }
//       render() {
//           return(
//             <View style={styles.container}>
//                 <View style={{backgroundColor:'#0290ea',justifyContent:"space-between",height:hp("6%"),marginBottom:hp("3%"),flexDirection:'row'}}>
//                 <TouchableOpacity style = {{width:wp("8%"),marginLeft:wp("3%"),alignSelf:"center"}} onPress={
//                 () => {
//                   this.props.navigation.toggleDrawer();
//                 }
//               }>
//                 <Image
//                   source={require('../assets/hamwhitepng.png')}
//                   style={{ height: hp("3.5%"), width: hp("3.5%") }}
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity style = {{width:wp("8%"),marginLeft:wp("3%"),alignSelf:"center"}} onPress={
//                 () => {
//                   this.props.navigation.navigate('Home'); 
//                 }
//               }>
//                 <Icon name="clear" size={25} color="white"/>
//               </TouchableOpacity>
//               </View>
//                 <AppContiner />
//           </View>
//           );
//       }
// }

// export default VolunteerScreen

// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//     },
// })
import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, Keyboard,TouchableOpacity, Dimensions, Image, ScrollView, Animated, FlatList, TextInput, KeyboardAvoidingView, Linking, BackHandler, ActivityIndicator } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import * as firebase from 'firebase'
import { db } from '../routes/config';
import { connect } from 'react-redux';
import food from '../assets/food.json';
import FoodSupplies from './FoodSupplies';
import MedicalSupplies from './MedicalSupplies';
import medical from '../assets/medical.json';
import { Directions } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import Icon from "react-native-vector-icons/MaterialIcons"


const TabNavigator = createBottomTabNavigator({
    foodSupplies :{
      screen :  FoodSupplies,
  
    },
    medicalSupplies : {
      screen: MedicalSupplies,
    },
  },
  {
    defaultNavigationOptions:({ navigation })=>({
      tabBarIcon : ({focused , horizontal , tintcolor})=>{
        const {routeName} = navigation.state;
        if(routeName === 'foodSupplies'){
          if(focused){
            return <Text style={{color: '#0290ea',fontSize:16}}>Food Supplies</Text>
          }
          return <Text style={{fontSize:16}}>Food Supplies</Text>
        }
        else if(routeName === 'medicalSupplies'){
          if(focused){
            return <Text style={{color: '#0290ea',fontSize:16}}>Medical Supplies</Text>
          }
          return <Text style={{fontSize:16}}>Medical Supplies</Text>
        }
      }
    }),
    tabBarOptions:{
      showLabel : false,
      style:{
        // backgroundColor:'#0290ea',
        height:hp('8%')
      }
    }
  }
  )

const AppContiner = createAppContainer(TabNavigator)

class VolunteerScreen extends React.Component{
  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  handleBackButton = () => {
    Alert.alert(
      'Exit App',
      'Exiting the application?', [{
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      }, {
        text: 'OK',
        onPress: () => BackHandler.exitApp()
      },], {
      cancelable: false
    }
    )
    return true;
  }
      render() {
          return(
            <View style={styles.container}>
                <View style={{backgroundColor:'#0290ea',justifyContent:"space-between",height:hp("9%"),marginBottom:hp("3%"),flexDirection:'row'}}>
                <TouchableOpacity style = {{width:wp("8%"),marginLeft:wp("3%"),alignSelf:"center"}} onPress={
                () => {
                  this.props.navigation.toggleDrawer();
                }
              }>
                <Image
                  source={require('../assets/hamwhitepng.png')}
                  style={{ height: hp("3.5%"), width: hp("3.5%") }}
                />
              </TouchableOpacity>
              <TouchableOpacity style = {{width:wp("8%"),marginLeft:wp("3%"),alignSelf:"center"}} onPress={
                () => {
                  this.props.navigation.navigate('Home'); 
                }
              }>
                <Icon name="clear" size={25} color="white"/>
              </TouchableOpacity>
              </View>
                <AppContiner />
          </View>
          );
      }
}

export default VolunteerScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
})