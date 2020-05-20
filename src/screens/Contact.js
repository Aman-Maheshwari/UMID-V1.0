import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Modal, StyleSheet,Linking, KeyboardAvoidingView,ToastAndroid,ScrollView, TextBase } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default class Contact extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
               
                <View style={{flex:0.3,backgroundColor:'#0290ea',justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={
        ()=>{
        this.props.navigation.toggleDrawer()
        console.log("lkjfdh")         
        }

      }
      style={{position:'absolute',top:15,left:10,zIndex:10,height:40,width:40}}
      >
              <Image
      source={require('../assets/hamwhitepng.png')}
      style={{position:'absolute',top:15,left:10,zIndex:12,height:30,width:30,}}
      />      
      </TouchableOpacity>
                    <Image source={require('../assets/png.png')} />
                </View>
                <View style={{flex:0.7,}}>
                    <Text style={{fontSize:30,alignSelf:'center',color:'grey',marginTop:hp('6%'),textDecorationLine:'underline'}}>
                        Contact-Us
                    </Text>
                    <View style={{}}>
                        <View style={{height:hp('10%')}}>

                        </View>



                        <View style={{flexDirection:'row',marginLeft : wp('4%')}}>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}} onPress={() => {
                                 Linking.openURL(`tel:${9205397045}`)
                            }}>
                             {/* <TouchableOpacity onPress={() => {
                                 Linking.openURL(`tel:${9205397045}`)
                            }}> */}
                            <View style={{backgroundColor:'#E1F5FE',borderRadius:100}}>
                             <Image
                            source={require('../assets/ios-call.png')}
                            style={{margin:hp('2.5%')}}
                            />   
                            </View>
                            {/* <TouchableOpacity onPress={() => {
                                 Linking.openURL(`tel:${9205397045}`)
                            }}> */}
                            <Text style={{marginLeft:wp('5%'),fontSize:18,}}>+91-9205397045</Text>
                            {/* </TouchableOpacity> */}
                        </TouchableOpacity>
                        </View>

                            <View style={{height:hp('5%')}}>

                            </View>
                        <View style={{flexDirection:'row',marginLeft : wp('4%')}}>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}} onPress={() => {
                                 Linking.openURL('mailto:mtask2020@gmail.com')
                            }}>
                            
                            <View style={{backgroundColor:'#E1F5FE',borderRadius:100}}>
                             <Image
                            source={require('../assets/chatIcon.png')}
                            style={{margin:hp('2.5%')}}
                            />   
                            </View>
                            <Text style={{marginLeft:wp('5%'),fontSize:18,}}>mtask2020@gmail.com</Text>
                        </TouchableOpacity>
                        </View>


                         <View style={{height:hp('5%')}}>

                            </View>
                        <View style={{flexDirection:'row', marginLeft : wp('4%')}}>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}} onPress={() => {
                                Linking.openURL('http://www.umid-corona.in/');
                            }}>
                            
                            <View style={{backgroundColor:'#E1F5FE',borderRadius:100}}>
                             <Image
                            source={require('../assets/World.png')}
                            style={{margin:hp('2%')}}
                            />   
                            </View>
                            {/* <TouchableOpacity onPress={() => {
                                Linking.openURL('http://www.umid-corona.in/');
                            }}> */}
                            <Text style={{marginLeft:wp('5%'),fontSize:18,}}>www.umid-corona.in</Text>
                            {/* </TouchableOpacity> */}
                        </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
        )
    }
}

// #e1f5fe