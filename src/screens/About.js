import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Modal, StyleSheet, KeyboardAvoidingView,ToastAndroid,ScrollView, TextBase } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default class About extends React.Component{
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
                    <Text style={{alignSelf:'center',fontSize:30,marginTop:hp('2%'),color:'grey'}}>About</Text>
                    <ScrollView>
                        <Text style={{fontSize:16,marginLeft:wp('3%'),marginTop:hp('3%'),color:'grey'}}>
                        While our Corona warriors are working tirelessly to help contain COVID-19, what could be better if each individual can contribute towards the society. With this goal in mind, we have initiated a project- UMID (a social initiative) : Peer-to-Peer platform where users can collaborate and connect to the people around to help them in emergency (Food/supplies, mental wellbeing or ad-hoc help).
                        </Text><Text style={{fontSize:16,marginLeft:wp('3%'),color:'grey'}}>It also enables users to connect with the nearest Kirana/Medical store to order necessary items, either to get it delivered at their doorstep or coordinate with the shopkeeper to collect the items at a pre-decided time. This will also be extended to include volunteers who can support in the logistics (either paid or social service), supporting jobless people to make some wages for their living. We really want to create a community of connecting local shops and daily wagers to the common public through our platform. This auto functioning mode would uplift these entities who could have been hit worst by COVID-19, at the same time bringing ease to the final user.
                        </Text>
                    </ScrollView>
                </View>
            </View>
        )
    }
}