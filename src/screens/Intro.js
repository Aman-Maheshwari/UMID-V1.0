import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Image,
  ToastAndroid,TouchableOpacity,AsyncStorage,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import AppIntro from 'react-native-app-intro';
import AppIntroSlider from 'react-native-app-intro-slider';



export default class Intro extends React.Component{

    render(){
        const pageArray =[{
            key:1,
            img: require('../assets/Intro1.png'),
            imgStyle : {
                height : hp('100%'),
                width : wp('100%')
            }
        },{
            key:2,
            img: require('../assets/Intro2.png'),
            imgStyle : {
                height : hp('100%'),
                width : wp('100%')
            }
        },{
            key:3,
            img: require('../assets/Intro3.png'),
            imgStyle : {
                height : hp('100%'),
                width : wp('100%')
            }
        },{
            key:4,
            img: require('../assets/Intro4.png'),
            imgStyle : {
                height : hp('100%'),
                width : wp('100%')
            }
        },{
            key:5,
            img: require('../assets/Intro5.png'),
            imgStyle : {
                height : hp('100%'),
                width : wp('100%')
            }
        }]
        _keyExtractor = (item) => item.key;

        _renderItem = ({item}) => {
            return (
              <View style={{flex:1}}>
                {/* <Text style={styles.title}>{item.title}</Text> */}
                <Image source={item.img}
                style={{height : hp('100%'),width : wp('100%')}}
                />
                {/* <Text style={styles.text}>{item.text}</Text> */}
              </View>
            );
          }
        _renderDoneButton = () => {
            return (
              <View style={{width : wp('8%'), height:hp('4%')}}>
                  <Text>
                      Done
                  </Text>
              </View>
            )}
            _renderSkipButton = () => {
                return (
                    <View style={{width : wp('8%'), height:hp('4%')}}>
                    <Text>
                        Skip
                    </Text>
                </View>
                )}
                _renderNextButton = () => {
                    return (
                        <View style={{width : wp('8%'), height:hp('4%'),backgroundColor:'red',flex:1}}>
                        <Text style={{color:'black',zIndex:2}}>
                            Next
                        </Text>
                    </View>
                    )}

        return (
            <View style={{flex:1}}>
      <AppIntroSlider
        data = {pageArray}      
        renderItem = { ({item}) => {
            return (
              <View style={{flex:1,zIndex:-1}}>
                {/* <Text style={styles.title}>{item.title}</Text> */}
                <Image source={item.img}
                style={{height : hp('100%'),width : wp('100%'),zIndex:-1}}
                />
                {/* <Text style={styles.text}>{item.text}</Text> */}
              </View>
            );
          }}
          onDone = {async ()=>{
              this.props.navigation.navigate('Drawer')
              await AsyncStorage.setItem('UMID_Intro', "1")
          }}
        keyExtractor = {this.keyExtractor}
        showSkipButton = {true}
        showNextButton = {true}
        renderSkipButton = {() => {
            return (
                <View style={{borderWidth : 3,justifyContent:'center',alignItems:'center',borderColor : '#0290ea',borderRadius : 8}}>
                <Text style={{color:'#0290ea',zIndex:2,fontSize : wp('5%'), margin:wp('2%')}}>
                    Skip
                </Text>
            </View>
            )}}
        renderDoneButton={() => {
            return (
                <View style={{borderWidth : 3,justifyContent:'center',alignItems:'center',borderColor : '#0290ea',borderRadius : 8}}>
                <Text style={{color:'#0290ea',zIndex:2,fontSize : wp('5%'), margin:wp('2%')}}>
                   Done
                </Text>
            </View>
            )}}
        renderNextButton={() => {
            return (
                <View style={{borderWidth : 3,justifyContent:'center',alignItems:'center',borderColor : '#0290ea',borderRadius : 8}}>
                <Text style={{color:'#0290ea',zIndex:2,fontSize : wp('5%'), margin:wp('2%')}}>
                    Next
                </Text>
            </View>
            )}}
            activeDotStyle = {{backgroundColor : '#0290ea'}}
      />
            </View>
        )
        }}