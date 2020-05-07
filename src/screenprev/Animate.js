import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Animated, Dimensions } from "react-native";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


export default class Animate extends React.Component{
    mode = new Animated.Value(0);
    handdlePress = () =>{
            Animated.timing(this.mode, {
                toValue: 1,
                duration:100,
                useNativeDriver: false
            }).start();
    };
    handdlePress1 = () =>{
        Animated.timing(this.mode, {
            toValue: 0,
            duration:100,
            useNativeDriver: false
        }).start();
};
    render(){
        const shift = this.mode.interpolate({
            inputRange: [0,1],
            outputRange: [-250,0]
        })
        return(
                <Animated.View style={{position:'absolute',bottom:shift,width:"100%"}}>
                <GestureRecognizer onSwipeUp={this.handdlePress}
                onSwipeDown={this.handdlePress1} style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                    <View style={{width:'100%',backgroundColor:'grey',justifyContent:'center',alignItems:'center',flex:1,height:300}}>
                        <Text>Aditya raj singnhvi</Text>
                        <View>
                            <Text>Hello</Text>
                        </View>
                    </View>
                </GestureRecognizer>
                </Animated.View>
        );
    }
}